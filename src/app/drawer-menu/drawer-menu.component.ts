import { Component, OnInit, ViewChild } from '@angular/core';
import { List, Service } from './drawer-menu-data.service';
import { DxDrawerComponent } from 'devextreme-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.scss'],
  providers: [Service]
})
export class DrawerMenuComponent implements OnInit {
  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;
  navigation: List[];
  isDrawerOpen: Boolean = true;
  elementAttr: any;

  constructor(private router: Router, service: Service) {
      this.navigation = service.getNavigationList();
  }

  changeOption(e) {
    console.log(e.itemData.id);
    switch (e.itemData.id) {
      case 1:
        this.router.navigateByUrl("/t/iorecord");
        break;
      case 2:
        this.router.navigateByUrl("/t/userdetail");
        break;
      case 3:
        this.router.navigateByUrl("/t/anno");
        break;
      case 4:
        this.router.navigateByUrl("/t/strategy");
        break;
      case 5:
        this.router.navigateByUrl("/login");
        break;
      default:
        this.router.navigateByUrl("/t/iorecord");
        break;
    }
  }

  toolbarContent = [{
      widget: 'dxButton',
      location: 'before',
      options: {
          icon: 'menu',
          onClick: () => this.isDrawerOpen = !this.isDrawerOpen
      }
  }];

  ngOnInit(): void {
  }

}
