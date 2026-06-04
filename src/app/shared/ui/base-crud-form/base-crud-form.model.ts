import { FormGroup } from "@angular/forms";

export interface CrudFormConfig<T> {
    titleCreate: string;
    titleEdit: string;
    buildForm: () => FormGroup;
    mapToForm: (item: T) => Partial<Record<string, any>>;
}