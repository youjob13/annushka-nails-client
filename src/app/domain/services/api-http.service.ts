import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_CONFIG } from '../../../config';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  private readonly apiConfig = inject(API_CONFIG);
  private readonly httpClient = inject(HttpClient);

  private readonly baseEndpoint = this.apiConfig.baseEndpoint;

  public get<T>(url: string) {
    return this.httpClient.get<T>(`${this.baseEndpoint}${url}`);
  }

  public post<T>(url: string, body: T) {
    return this.httpClient.post<T>(`${this.baseEndpoint}${url}`, body);
  }

  public put<T>(url: string, body: T) {
    return this.httpClient.put<T>(`${this.baseEndpoint}${url}`, body);
  }

  public delete<T>(url: string) {
    return this.httpClient.delete<T>(`${this.baseEndpoint}${url}`);
  }
}
