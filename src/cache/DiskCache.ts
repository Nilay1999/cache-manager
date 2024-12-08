import { readFile, writeFile } from 'fs/promises';
import { ICache } from '../interface/Cache.interface';

export class DiskCache<T extends string, V> implements ICache<T, V> {
	private filePath: string;

	constructor(filePath: string) {
		this.filePath = filePath;
	}

	async get(key: T): Promise<V | undefined> {
		try {
			const data = await readFile(this.filePath, 'utf-8');
			const cache = JSON.parse(data);
			return cache[key];
		} catch (error) {
			console.error('Failed to read from disk:', error);
			return undefined;
		}
	}

	async set(key: T, value: V): Promise<boolean> {
		try {
			const data = await readFile(this.filePath, 'utf-8');
			const cache = JSON.parse(data) as object;
			const dataToWrite = JSON.stringify({ [key]: value, ...cache });
			await writeFile(this.filePath, dataToWrite);
			return true;
		} catch (error) {
			console.warn(error);
			return false;
		}
	}

	async delete(key: T): Promise<boolean> {
		try {
			const data = await readFile(this.filePath, 'utf-8');
			const cache = JSON.parse(data);
			if (cache) {
				delete cache[key];
				await writeFile(this.filePath, JSON.stringify(cache), 'utf-8');
				return true;
			}
			return false;
		} catch (error) {
			console.warn(error);
			return false;
		}
	}
}
