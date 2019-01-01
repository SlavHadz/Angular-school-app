import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppFirebaseModule } from './app-firebase/app-firebase.module';
import { AuthService } from './auth/auth.service';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    AppFirebaseModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
