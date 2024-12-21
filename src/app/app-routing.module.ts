import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { ProfileModule } from './profile/profile.module';
import { ProductModule } from './product/product.module';
import { ContactModule } from './contact/contact.module';
import { AproposModule } from './apropos/apropos.module';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {authentificationGuard} from "./authentification.guard";
import { roleGuardGuard } from './role-guard.guard';


const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:"full"
  },

  // { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authentificationGuard, roleGuardGuard] },  // Appliquez le guard fonctionnel
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path:'home', component:HomeComponent,
    children:[ {path:'categories', component:ListCategoriesComponent}]
  },
  {
    path:'categories', component:ListCategoriesComponent,
    children:[ {path:'detail/id', component:DetailsCategoryComponent}]
  },
  {
    path:'addCategorie', component:AddCategorieComponent,
  },
  {path:'updateProduct/:id', component:UpdateProductComponent},
  { path: 'productcategorie/:id', component: ProductCategoryComponent},
  {path:"profile", loadChildren:()=>import('./profile/profile.module').then(x=>ProfileModule)},
  {path:"product", loadChildren:()=>import('./product/product.module').then(x=>ProductModule)},
  {path:"contact", loadChildren:()=>import('./contact/contact.module').then(x=>ContactModule)},
  {path:"apropos", loadChildren:()=>import('./apropos/apropos.module').then(x=>AproposModule)},
  { path:"**",component:NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
