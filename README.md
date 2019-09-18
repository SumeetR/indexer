# Indexer

## Installation
npm install --save indexer

## Usage
```typescript
import {Indexed, indexResults} from 'indexer';

interface ArrayItem {
    id: number;
    name: string;
}

const array: ArrayItem[] = [
    {id: 0, name: 'Kurt'},
    {id: 1, name: 'Krist'},
    {id: 2, name: 'Dave'},
    {id: 3, name: 'Pat'}
];

console.log(array);
// [{id: 0, name: 'Kurt'}, {id: 1, name: 'Krist'}, {id: 2, name: 'Dave'}, {id: 3, name: 'Pat'}]

const indexedArray: Indexed<ArrayItem> = indexArray(array);

console.log(indexedArray);
// {0: {id: 0, name: 'Kurt'}, 1: {id: 1, name: 'Krist'}, 2: {id: 2, name: 'Dave'}, 3: {id: 3, name: 'Pat'}}
```
