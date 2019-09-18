import {indexArray} from '../index';

interface ArrayItem {
    id: number | string;
    name: string;
}

const TEST_ARRAY_NUMBER = [
    {id: 0, name: 'Kurt'},
    {id: 1, name: 'Krist'},
    {id: 2, name: 'Dave'},
    {id: 3, name: 'Pat'}
];

const TEST_ARRAY_STRING = [
    {id: 'Tr', name: 'Tair'},
    {id: 'Ln', name: 'Liron'},
    {id: 'Tl', name: 'Tagel'}
];

const TEST_ARRAY_DUPLICATED = [
    {id: '0', name: 'John'},
    {id: '1', name: 'George'},
    {id: '2', name: 'Paul'},
    {id: '3', name: 'Ringo'},
    {id: '0', name: 'The Walrus'}
];

const TEST_ARRAY_INVALID_OBJECT = [
    {id: '0', name: 'Dave'},
    {id: '1', name: 'Roger'},
    {id: '2', name: 'Nick'},
    {name: 'Richard'}
];

describe('indexArray Tests', () => {
    test('returned TEST_ARRAY_NUMBER indexed', () => {
        const result = indexArray(TEST_ARRAY_NUMBER);
        expect(result).toEqual({
            0: TEST_ARRAY_NUMBER[0],
            1: TEST_ARRAY_NUMBER[1],
            2: TEST_ARRAY_NUMBER[2],
            3: TEST_ARRAY_NUMBER[3]
        });
    });
    test('returned TEST_ARRAY_STRING indexed', () => {
        const result = indexArray(TEST_ARRAY_STRING);
        expect(result).toEqual({
            'Tr': TEST_ARRAY_STRING[0],
            'Ln': TEST_ARRAY_STRING[1],
            'Tl': TEST_ARRAY_STRING[2]
        });
    });
    test('returned TEST_ARRAY_DUPLICATED indexed, replacing John with the Walrus', () => {
        const result = indexArray(TEST_ARRAY_DUPLICATED);
        expect(result).toEqual({
            '0': TEST_ARRAY_DUPLICATED[4],
            '1': TEST_ARRAY_DUPLICATED[1],
            '2': TEST_ARRAY_DUPLICATED[2],
            '3': TEST_ARRAY_DUPLICATED[3]
        });
    });
    test('returned TEST_ARRAY_INVALID_OBJECT indexed, skipping Richard', () => {
        const result = indexArray(TEST_ARRAY_INVALID_OBJECT as ArrayItem[]);
        expect(result).toEqual({
            '0': TEST_ARRAY_INVALID_OBJECT[0],
            '1': TEST_ARRAY_INVALID_OBJECT[1],
            '2': TEST_ARRAY_INVALID_OBJECT[2]
        });
    });
});
