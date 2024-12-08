import { ICache } from '../interface/Cache.interface';

export class InMemoryCache<T, V> implements ICache<T, V> {
	private memoryMap: Map<T, V>;

	constructor() {
		this.memoryMap = new Map();
	}

	async set(key: T, value: V): Promise<boolean> {
		try {
			this.memoryMap.set(key, value);
			return true;
		} catch (error) {
			console.error('Failed to set cache:', error);
			return false;
		}
	}

	async get(key: T): Promise<V | undefined> {
		return this.memoryMap.get(key);
	}

	async delete(key: T): Promise<boolean> {
		if (this.memoryMap.has(key)) {
			this.memoryMap.delete(key);
			return true;
		} else {
			console.warn('Key not found in cache:', key);
			return false;
		}
	}
}
