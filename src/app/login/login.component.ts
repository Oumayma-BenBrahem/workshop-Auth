import { Component } from '@angular/core';
import {AuthentificationService} from "../authentification.service";
import {Router} from "@angular/router";
import { AuthResponse } from '../models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthentificationService,private router: Router) {}

  // Méthode appelée par le formulaire
  /*login(formData: any): void {
    console.log('Données du formulaire :', formData);

    this.authService.signin(formData).subscribe(
      (response) => {
        console.log('Réponse du backend :', response);  // Affiche la réponse complète

        // Vérifiez si 'role' est présent dans la réponse
        if (response && response.role) {
          localStorage.setItem('role', response.role);  // Sauvegarde du rôle dans localStorage
          console.log('Rôle stocké dans le localStorage:', response.role);
        } else {
          console.error('Rôle non trouvé dans la réponse du backend');
        }

        // Stocker le jeton JWT
        if (response && response.accessToken) {
          localStorage.setItem('access_token', response.accessToken);
          console.log('Token JWT stocké');
        }

        // Rediriger vers le tableau de bord
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Erreur de connexion :', error);
      }
    );
  }*/
  login(formData: any): void {
    console.log('Données du formulaire :', formData);

    this.authService.signin(formData).subscribe(
      (response: AuthResponse) => {
        console.log('Réponse du backend :', response);

        // Vérifier si 'response.user' et 'response.user.role' existent
        if (response && response.user && response.user.role) {
          // Stocker le rôle dans localStorage
          localStorage.setItem('role', response.user.role);
          console.log('Rôle stocké dans localStorage:', response.user.role);
        } else {
          console.error('Rôle non trouvé dans la réponse du backend');
        }

        // Stocker le jeton JWT dans localStorage
        if (response && response.accessToken) {
          localStorage.setItem('access_token', response.accessToken);
          console.log('Token JWT stocké');
        } else {
          console.error('Token non trouvé dans la réponse du backend');
        }

        // Rediriger vers le tableau de bord
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Erreur de connexion :', error);
      }
    );
  }
}
