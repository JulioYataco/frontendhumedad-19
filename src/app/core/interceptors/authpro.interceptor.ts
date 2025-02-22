import { HttpInterceptorFn } from '@angular/common/http';

export const authproInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
