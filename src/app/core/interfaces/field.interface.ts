export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  id: string;
  value?: any;
  max?: number;
  min?: number;
  tickInterval?: number;
  step?: number;
  checked?: boolean;
  x?: number;
  y?: number;
  styles?: any[];
}
