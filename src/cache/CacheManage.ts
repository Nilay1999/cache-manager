import { ICache } from '../interface/Cache.interface';

export class CacheManager<T, V> {
	private caches: ICache<T, V>[];

	constructor(...caches: ICache<T, V>[]) {
		this.caches = caches;
	}

	async get(key: T): Promise<V | undefined> {
		for (const cache of this.caches) {
			const value = await cache.get(key);
			if (value !== undefined) {
				return value;
			}
		}
		return undefined;
	}

	async set(key: T, value: V): Promise<void> {
		for (const cache of this.caches) {
			await cache.set(key, value);
		}
	}

	async delete(key: T): Promise<void> {
		for (const cache of this.caches) {
			await cache.delete(key);
		}
	}
}
