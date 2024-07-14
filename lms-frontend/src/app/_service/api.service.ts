import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders

  constructor(
    private httpClient: HttpClient,
  ) {
   
  }
  
  sendPostRequest(url: string, data: any): Observable<any> {
    return this.httpClient.post<any>(url, data)
  }
  sendGetRequest(url: string): Observable<any> {
    return this.httpClient.get<any>(url)
  }
  sendPostRequestwithToken(url: string, data: any): Observable<any> {
    return this.httpClient.post<any>(url, data, { headers: this.headers })
  }
  sendDeleteRequestwithToken(url: string): Observable<any> {
    return this.httpClient.delete<any>(url, { headers: this.headers, withCredentials: true })
  }
  sendPutRequestwithToken(url: string, data: any, params?: any): Observable<any> {
    return this.httpClient.put<any>(url, data, { headers: this.headers, params: params })
  }
  sendGetRequestwithToken(url: string): Observable<any> {
    return this.httpClient.get<any>(url, { headers: this.headers })
  }
}
