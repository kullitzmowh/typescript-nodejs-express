export interface BaseItem {
    name: string;
    description: string;
}

export interface Book extends BaseItem {
    id: number;
}
