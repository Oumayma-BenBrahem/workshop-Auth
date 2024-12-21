// import { CanActivateFn } from '@angular/router';
//
// export const authentificationGuard: CanActivateFn = (route, state) => {
//   return true;
// };
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';  // Importez 'inject' pour accéder aux services
import { AuthentificationService } from './authentification.service';  // Importez votre service

export const authentificationGuard: CanActivateFn = (route, state) => {
  // Utilisez 'inject()' pour accéder au service AuthentificationService
  const authService = inject(AuthentificationService);

  // Appelez la méthode _is_logged() pour vérifier si l'utilisateur est connecté
  if (authService._is_logged()) {
    return true;  // Autoriser l'accès à la route
  } else {
    return false;  // Refuser l'accès à la route et éventuellement rediriger
  }
};
