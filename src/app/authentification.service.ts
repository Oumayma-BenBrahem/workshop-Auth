import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthResponse, User} from './models/user';



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  // signin(data: any): Observable<User> {
  //  // return this.http.post<User>('http://localhost:3000/signin', data);
  //   return this.http.post<AuthResponse>('http://localhost:3000/signin', data);  // Le type attendu ici est AuthResponse

    // Modifier le type de retour pour AuthResponse
    signin(data: any): Observable<AuthResponse> {
      return this.http.post<AuthResponse>('http://localhost:3000/signin', data);  // Retourner AuthResponse ici
  }

  // Vérifie si l'utilisateur est connecté en vérifiant la présence du token
  _is_logged(): boolean {
    return !!localStorage.getItem('access_token');  // Si le token existe, retourne true, sinon false
  }

  // Vérifie si l'utilisateur a le rôle requis
  getRole(requiredRole: string): boolean {
    const userRole = localStorage.getItem('role');  // Récupère le rôle depuis localStorage
    return userRole === requiredRole;  // Compare le rôle utilisateur avec le rôle requis
  }
  // Déconnexion de l'utilisateur
  logOut(): void {
    localStorage.removeItem('access_token'); // Supprime le jeton
    localStorage.removeItem('role'); // Supprime le rôle
    console.log('Utilisateur déconnecté');
  }
}
