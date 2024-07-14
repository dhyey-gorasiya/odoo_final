import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environments'
import { CommonService } from './common.service'
import { ConstantsService } from './constants.service'

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private commonService: CommonService,
    private constantservice: ConstantsService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.commonService.getCookieData(this.constantservice.LOGIN_COOKIE_NAME)
    const baseURL = environment.oauth.baseURL
    if (!request.url.includes('/assets/i18n/')) {
      const actualRequest = request.clone({
        url: baseURL + request.url,
        headers: request.headers.set(environment.oauth.headerKey, environment.oauth.tokenKeyPrefix + token)
      })
      return next.handle(actualRequest)
    } else {
      return next.handle(request)
    }
  }
}
