import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./core/interceptor";
import {ApiService} from "./service/api.service"; 

import { DxDataGridModule,
  DxDrawerComponent, 
  DxDrawerModule, 
  DxListModule, 
  DxRadioGroupModule, 
  DxToolbarModule, 
  DxHtmlEditorModule,
  DxButtonModule,
  DxFormModule,
  DxFormComponent
} from 'devextreme-angular';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { IoInfoListComponent } from './io-info-list/io-info-list.component';
import { DrawerMenuComponent } from './drawer-menu/drawer-menu.component';
import { UserDetailListComponent } from './user-detail-list/user-detail-list.component';
import { AnnoListComponent } from './anno-list/anno-list.component';
import { IoStrategyComponent } from './io-strategy/io-strategy.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    IoInfoListComponent,
    DrawerMenuComponent,
    UserDetailListComponent,
    AnnoListComponent,
    IoStrategyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DxDataGridModule,
    DxDrawerModule,
    DxListModule,
    DxRadioGroupModule,
    DxToolbarModule,
    DxHtmlEditorModule,
    DxButtonModule,
    DxFormModule,
    FontAwesomeModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
