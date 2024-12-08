import { DiskCache } from './cache/DiskCache';
import { InMemoryCache } from './cache/InMemoryCache';

const inmemory = new InMemoryCache();
inmemory.set('profile', { name: 'Nilay', age: 10 });
inmemory.get('profie');

const path = 'src/json/data.json';
const diskmemory = new DiskCache(path);
diskmemory.set('friendList', { list: [{ name: 'Nilay', age: 10 }] });
diskmemory.get('friendList').then((data) => console.log(data));
