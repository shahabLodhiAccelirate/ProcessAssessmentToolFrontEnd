import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { LoginComponent } from './Login/Login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
   declarations: [
      AppComponent,
      PageNotFoundComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
