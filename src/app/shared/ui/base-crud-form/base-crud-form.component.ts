import { Component, effect, input, output } from '@angular/core';
import { CrudFormConfig } from './base-crud-form.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-crud-form',
  imports: [],
  templateUrl: './base-crud-form.component.html',
  styleUrl: './base-crud-form.component.scss',
})
export class BaseCrudFormComponent<T> {

  //Inputs
  item = input<T | null>(null);
  config = input.required<CrudFormConfig<T>>();

  //Outputs
  submitForm = output<Partial<T>>();
  cancelForm = output<void>();

  //form
  form!: FormGroup;

  constructor() {
    effect(() => {
      this.form = this.config().buildForm();
      const item = this.item();
      if (item && this.config().mapToForm) {
        this.form.patchValue(this.config().mapToForm!(item));
      } else {
        this.form.reset();
      }
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitForm.emit(this.form.getRawValue());
  }

  cancel() {
    this.cancelForm.emit();
  }

  get title(): string {
    return this.item()
      ? this.config().titleEdit
      : this.config().titleCreate;
  }
}
