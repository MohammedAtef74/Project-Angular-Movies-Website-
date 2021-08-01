import { AuthGuard } from './auth.guard';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NetworkComponent } from './network/network.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent} from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard] ,component:HomeComponent},
  {path:'about', canActivate:[AuthGuard] , component:AboutComponent},
  {path:'movies', canActivate:[AuthGuard] , component:MoviesComponent},
  {path:'tv', canActivate:[AuthGuard] , component:TvComponent},
  {path:'network', canActivate:[AuthGuard] , component:NetworkComponent},
  {path:'people', canActivate:[AuthGuard] , component:PeopleComponent},
  {path:'moviedetails/:id', canActivate:[AuthGuard] , component:MoviedetailsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'**',  component:NotfoundComponent},
 { path: 'settings',loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
