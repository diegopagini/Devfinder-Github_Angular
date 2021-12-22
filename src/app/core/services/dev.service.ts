import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DevService {
  constructor(private http: HttpClient) {}

  getUser(name: string): Observable<User> {
    return this.http.get<User>(`/users/${name}`);
  }
}
