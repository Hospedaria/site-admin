import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

export const SpinnerInterceptor: HttpInterceptorFn = (req,next) => {
  const loadingService = inject(LoadingService);
  loadingService.show();

  return next(req).pipe(
    finalize(() => {
      loadingService.hide();
    })
  );
}
