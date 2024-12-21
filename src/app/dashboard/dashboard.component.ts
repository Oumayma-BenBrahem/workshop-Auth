import { Router } from '@angular/router';
import {Component} from "@angular/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.clear(); // Supprimer le token et les autres données
    this.router.navigate(['/login']); // Rediriger vers la page de connexion
  }
}
