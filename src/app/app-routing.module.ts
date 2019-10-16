import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';


const routes: Routes = [
  { 
    path: '', loadChildren: () => import('./login/login.module').then( m => m.LoginModule),
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginModule),
  },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule),canActivate: [AuthGuard] 
  },
  {
    path: 'comentarios', loadChildren: () => import('./comentarios/comentarios.module').then( m => m.ComentariosModule), canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
