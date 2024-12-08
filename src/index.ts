import { InMemoryCache } from './cache/InMemoryCache';

const cache = new InMemoryCache();
cache.set('profile', { name: 'Nilay', age: 10 });
console.log(cache.get('profie'))