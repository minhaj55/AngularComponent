import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MydateComponent } from './mydate/mydate.component';
import { PostQouteComponent } from './post-qoute/post-qoute.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MyfontDirective } from './myfont.directive';

@NgModule({
  declarations: [
    AppComponent,
    MydateComponent,
    LoginRegisterComponent,
    PostQouteComponent,
    MyfontDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
