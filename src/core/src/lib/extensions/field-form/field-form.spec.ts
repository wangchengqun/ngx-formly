import { FormControl, FormGroup } from '@angular/forms';
import { FieldFormExtension } from './field-form';
import { FormlyFieldConfig } from '../../components/formly.field.config';

function createField(field: FormlyFieldConfig): FormlyFieldConfig {
  return {
    modelOptions: {},
    templateOptions: {},
    parent: { formControl: new FormGroup({}) },
    ...field,
  };
}

describe('FieldFormExtension', () => {
  let extension: FieldFormExtension;
  beforeEach(() => {
    extension = new FieldFormExtension(null);
  });

  describe('field', () => {
    it('should create formControl when key exist', () => {
      const field = createField({ key: 'title' });

      extension.onPopulate(field);
      expect(field.formControl instanceof FormControl).toBeTruthy();
    });

    xit('should not create formControl when key is empty', () => {
      const field = createField({});

      extension.onPopulate(field);
      expect(field.formControl).toBeUndefined();
    });
  });

  describe('fieldGroup', () => {
    it('should assign parent formcontrol when key is empty', () => {
      const field = createField({ fieldGroup: [] });

      extension.onPopulate(field);
      expect(field.formControl).toEqual(field.parent.formControl);
    });
  });

  it('should override existing formcontrol when key is empty', () => {
    const field = createField({
      fieldGroup: [],
      formControl: new FormControl(),
    });

    extension.onPopulate(field);
    expect(field.formControl).toEqual(field.parent.formControl);
  });
});
