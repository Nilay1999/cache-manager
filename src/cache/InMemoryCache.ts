export class InMemoryCache<T, V> {
	private memoryMap: Map<T, V>;

	constructor() {
		this.memoryMap = new Map();
	}

	set(key: T, value: V): boolean {
    try {
      this.memoryMap.set(key, value);
      return true;
    } catch (error) {
      console.error("Failed to set cache:", error);
      return false;
    }
  }

	get(key: T): V | undefined {
		return this.memoryMap.get(key);
	}

	delete(key: T): boolean {
		if (this.memoryMap.has(key)) {
      this.memoryMap.delete(key);
      return true;
    } else {
      console.warn("Key not found in cache:", key);
      return false;
    }
	}
}
