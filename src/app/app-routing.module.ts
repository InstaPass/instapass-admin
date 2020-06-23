import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IoInfoListComponent } from './io-info-list/io-info-list.component';
import { UserDetailListComponent } from './user-detail-list/user-detail-list.component';
import { AnnoListComponent } from './anno-list/anno-list.component';
import { IoStrategyComponent } from './io-strategy/io-strategy.component';
import { DrawerMenuComponent } from './drawer-menu/drawer-menu.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 't', 
    component: DrawerMenuComponent,
    children: [
      { path: 'iorecord', component: IoInfoListComponent },
      { path: 'userdetail', component: UserDetailListComponent},
      { path: 'anno', component: AnnoListComponent},
      { path: 'strategy', component: IoStrategyComponent},
      { path: '**', redirectTo:'iorecord'}
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
