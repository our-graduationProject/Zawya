import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlaygroundsComponent } from './components/playgrounds/playgrounds.component';
import { RegisterComponent } from './components/register/register.component';
import { PlaygroundsDetailsComponent } from './components/playgrounds-details/playgrounds-details.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'playgrounds',component:PlaygroundsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'playgroundsDetails',component:PlaygroundsDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
