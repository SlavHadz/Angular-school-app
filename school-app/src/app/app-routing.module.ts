import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { MyPreloadingStrategy } from './preloading_strategy';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule', data: { preload: true}},
  {path: 'diary', loadChildren: './diary/diary.module#DiaryModule', canActivate: [AuthGuard], data: { preload: true}},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: MyPreloadingStrategy})],
  exports: [RouterModule],
  providers: [MyPreloadingStrategy]
})
export class AppRoutingModule { }
