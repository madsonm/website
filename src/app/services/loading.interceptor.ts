import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  loaderBoolean = false;
  loaderRequests = 0;

  constructor(private loader: NgxUiLoaderService) { }

  show() {
    this.loaderRequests++;
    this.evaluate();
  }
  hide() {
    this.loaderRequests--;
    this.evaluate();
  }

  private evaluate() {
    if (this.loaderRequests > 0 && !this.loaderBoolean) {
      this.loader.start();
      this.loaderBoolean = true;
    } else if (this.loaderRequests <= 0 && this.loaderBoolean) {
      this.loader.stop();
      this.loaderBoolean = false;
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.show();
    return next.handle(request).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          this.hide();
        }
      }),
      catchError(err => {
        this.hide();
        throw err;
      })
    );
  }
}
