import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { IoInfoListComponent } from './io-info-list/io-info-list.component';
import { DrawerMenuComponent } from './drawer-menu/drawer-menu.component';
import { UserDetailListComponent } from './user-detail-list/user-detail-list.component';
import { AnnoListComponent } from './anno-list/anno-list.component';
import { IoStrategyComponent } from './io-strategy/io-strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    IoInfoListComponent,
    DrawerMenuComponent,
    UserDetailListComponent,
    AnnoListComponent,
    IoStrategyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxDrawerModule,
    DxListModule,
    DxRadioGroupModule,
    DxToolbarModule,
    DxHtmlEditorModule,
    DxButtonModule,
    DxFormModule,
    RouterModule.forRoot([
      { path: 'iorecord', component: IoInfoListComponent },
      { path: 'userdetail', component: UserDetailListComponent},
      { path: 'anno', component: AnnoListComponent},
      { path: 'strategy', component: IoStrategyComponent},
      { path: '', redirectTo: '/iorecord', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
