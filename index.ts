interface IndexParameter {
    id: number | string;
}
export interface Indexed<T> {
    [index: string]: T;
}

export function indexArray<T extends IndexParameter>(array: T[]): Indexed<T> {
    const indexedResults: Indexed<T> = {};
    array.forEach((item) => {
        if (item.id !== undefined) {
            indexedResults[item.id] = item;
        }
    });
    return indexedResults;
}
