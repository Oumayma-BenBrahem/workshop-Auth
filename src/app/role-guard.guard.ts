import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'; // Utilisé pour injecter les dépendances dans un guard fonctionnel
import { AuthentificationService } from './authentification.service';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  // Injection du service d'authentification et du router
  const authService = inject(AuthentificationService);
  const router = inject(Router);

  // Vérifiez si l'utilisateur a le rôle requis
  if (authService.getRole('Admin')) {
    return true; // Autorise l'accès
  }

  // Si l'utilisateur n'a pas le rôle requis, déconnectez-le et redirigez
  authService.logOut();
  router.navigate(['/login']); // Redirige vers la page de connexion
  return false; // Refuse l'accès
};
