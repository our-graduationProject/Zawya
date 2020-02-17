import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlaygroundsComponent } from './components/playgrounds/playgrounds.component';
import { RegisterComponent } from './components/register/register.component';
import { PlaygroundsDetailsComponent } from './components/playgrounds-details/playgrounds-details.component';
import { PlayerRegisterComponent } from "src/app/components/player-register/player-register.component";
import { AdminRegisterComponent } from "src/app/components/admin-register/admin-register.component";
import { PlayerLoginComponent } from "src/app/components/player-login/player-login.component";
import { AdminLoginComponent } from "src/app/components/admin-login/admin-login.component";
import { PlaygroundCreateComponent } from './components/playground-create/playground-create.component';
import { AuthGuard } from "src/app/components/auth.guard" 
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'playgrounds',component:PlaygroundsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'playgroundsDetails/:id',component:PlaygroundsDetailsComponent} , 
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:'player-register',component:PlayerRegisterComponent},
  {path:'admin-register',component:AdminRegisterComponent},
  {path:'player-login',component:PlayerLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'createPlayground',component:PlaygroundCreateComponent},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
