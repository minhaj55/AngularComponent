import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MydateComponent } from './mydate/mydate.component';
import { PostQouteComponent } from './post-qoute/post-qoute.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MyfontDirective } from './myfont.directive';
import { ClrDirective } from './clr.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MessageService } from 'primeng/components/common/messageservice';


@NgModule({
  declarations: [
    AppComponent,
    MydateComponent,
    LoginRegisterComponent,
    PostQouteComponent,
    MyfontDirective,
    ClrDirective,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
