import { Component, inject, input, effect, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITipoSuelos } from '../../models/itipo-suelos';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tipos-suelos-form',
  imports: [
    ReactiveFormsModule, 
    DialogModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './tipos-suelos-form.component.html',
  styleUrl: './tipos-suelos-form.component.scss',
})
export class TiposSuelosFormComponent {

  item = input<ITipoSuelos | null>(null);

  //Outputs (Modernos)
  submitForm = output<Partial<ITipoSuelos>>();
  cancelForm = output<void>();

  //form
  private fb = inject(FormBuilder);
  
  readonly form = this.fb.nonNullable.group({
    nombre_tipo_suelo: ['', Validators.required],
    capacidad_retencion_agua: ['', Validators.required],
    drenaje: [' ', Validators.required],
  });

  //effect to update form when item changes
  constructor(){
    effect(() => {
      const data = this.item();
      if (data) {
        this.form.patchValue({
          nombre_tipo_suelo: data.nombre_tipo_suelo,
          capacidad_retencion_agua: data.capacidad_retencion_agua,
          drenaje: data.drenaje
        });
      } else {
        this.form.reset({
          nombre_tipo_suelo: '',
          capacidad_retencion_agua: '',
          drenaje: '',
        })
      }
    });
  }

  //Actions
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const raw = this.form.getRawValue();
    const payload: Partial<ITipoSuelos> = {
      ...raw,
    };

    this.submitForm.emit(payload);
  }

  cancel() {
    this.cancelForm.emit();
  }
}
