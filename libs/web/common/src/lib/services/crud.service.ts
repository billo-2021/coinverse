import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(
        protected _httpClient: HttpClient
    ) { }

    private setHeaders(): HttpHeaders {
        const headersConfig = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            authorization: 'Bearer',
            Expires: '0'
        }

        return new HttpHeaders(headersConfig);
    }

    async post<T>(url: string, params?: HttpParams, headers = this.setHeaders()): Promise<T>  {
        return firstValueFrom(this._httpClient
            .post<T>(url, params, {
                headers: headers,
                reportProgress: true
            }));
    }

    async get<T>(url: string): Promise<T> {
        return firstValueFrom(this._httpClient
            .get<T>(url, {
                headers: this.setHeaders()
            }));
    }

    async update<T>(url: string, params?: HttpParams, headers = this.setHeaders()) : Promise<T> {
        return firstValueFrom(this._httpClient
            .put<T>(url, params, {
                headers: headers
            }));
    }

    async delete<T>(url: string, body?: any) : Promise<T> {
        return firstValueFrom(this._httpClient
            .delete<T>(url, {
                headers: this.setHeaders(),
                body: body
            }));
    }
}