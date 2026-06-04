export interface CrudColumn<T> {
    header: string;
    field: keyof T;
}
