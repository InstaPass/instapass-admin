import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/index";

import { ApiResponse } from "../model/api.response";


@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://47.100.50.175:8288';

    login(loginPayload) : Observable<ApiResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post<ApiResponse>(this.baseUrl + '/admin/login', loginPayload, httpOptions);
    }

    logout() : Observable<ApiResponse> {
        return ;
    }

    postNotification(content) : Observable<ApiResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post<ApiResponse>(this.baseUrl + '/admin/notify/release', content, httpOptions);
    }

    getNotifications() : Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.baseUrl + '/admin/notifications?all=1');
    }
}
