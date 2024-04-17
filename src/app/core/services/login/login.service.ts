import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {catchError, map, mapTo, of, tap} from "rxjs";
import {jwtDecode} from "jwt-decode";
interface DecodedToken {
  sub: string;
  roles: string[];
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly HEADER_PREFIX = 'Bearer ';
  private username:string=''
  private roles:string[]=[]

  constructor(private http: HttpClient) {

  }

  login(credentials: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>('http://localhost:8080/login', credentials,{ observe: 'response' }).pipe(
      map(response => {
        console.log(response.headers);
          const accessToken = response.headers.get('Authorization');
          if (accessToken) {
            this.setAccessToken(accessToken);
            const decodedToken:DecodedToken = jwtDecode(accessToken);
            if (!decodedToken) {
              throw new Error('Token invalide');
            }
            const username = decodedToken.sub;
            const roles = decodedToken.roles;
            this.setRoles(roles);
            this.setUsername(username);
            return true;
          } else {
            return false;
          }
      }),
      catchError(error => {
        console.error('Login failed:', error);
        return of(false);
      })
    );
  }


  logout(): void {
    localStorage.removeItem('access-token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('access-token');
  }

  getUsername():string{
    return this.username;
  }
  setUsername( username:string){
    this.username=username;
  }
  getRoles():string[]{
    return this.roles;
  }
  setRoles( roles:string[]){
    this.roles=roles;
  }


  private setAccessToken(token: string): void {
    localStorage.setItem('access-token', token);
  }
}
