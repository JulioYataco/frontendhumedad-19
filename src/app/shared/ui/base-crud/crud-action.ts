export interface CrudAction<T> {
  label: string;
  icon?: string;
  action: (item: T) => void;
  variant?: 'primary' | 'danger' | 'secondary' | 'warning' | 'info' | 'success';
  visible?: (item: T) => boolean;
}