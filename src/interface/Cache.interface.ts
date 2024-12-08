export interface ICache<T, V> {
	get(key: T): Promise<V | undefined>;
	set(key: T, value: V): Promise<boolean>;
	delete(key: T): Promise<boolean>;
}
