import { FormBuilder, Validators } from "@angular/forms";
import { CrudFormConfig } from "src/app/shared/ui/base-crud-form/base-crud-form.model";
import { ITipoSuelos } from "../../models/itipo-suelos";

export const tiposSuelosFormConfig = (
    fb: FormBuilder
): CrudFormConfig<ITipoSuelos> => ({
    titleCreate: 'Crear Tipo de Suelo',
    titleEdit: 'Editar Tipo de Suelo',

    buildForm: () =>
        fb.nonNullable.group({
            nombre_tipo_suelo: ['', Validators.required],
            capacidad_retencion_agua: ['', Validators.required],
            drenaje: ['', Validators.required],
        }),

    mapToForm: (item) => ({
        nombre_tipo_suelo: item.nombre_tipo_suelo,
        capacidad_retencion_agua: item.capacidad_retencion_agua,
        drenaje: item.drenaje,
    }),
})