import { Component, OnInit } from '@angular/core';
import { Service, User, State } from './user-detail-data.service';
import { ApiService } from '../service/api.service'

@Component({
  selector: 'app-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  styleUrls: ['./user-detail-list.component.scss'],
  providers: [Service]
})
export class UserDetailListComponent implements OnInit {

  users: User[];
  states: State[];

  community_post_id: number;
  community_post: any;
  communities: any;
  community_post_unselected: boolean;

  constructor(private service: Service, private apiService: ApiService) {
      this.users = service.getEmployees();
      this.states =  service.getStates();
  }

  getUserInfomations() {
    console.log(this.community_post_id);
    this.users = [];
    this.apiService.getUserInfo(this.community_post_id).subscribe(data => {
      if (data.status === "ok") {
        console.log(data);
        let userInfos = data.residents_info;
        userInfos.forEach(element => {
          let userInfo = new User();
          userInfo.身份证号 = element.static_info.id_number;
          userInfo.姓名 = element.static_info.realname;
          userInfo.状态 = element.status;
          this.users.push(userInfo);
        });
      }else{
        alert("拉取用户信息失败。\n错误原因：" + data.msg);
      }
    });
  }

  onSelectCommunityChanged() {
    let adminStatus = JSON.parse(window.localStorage.getItem('working_communities'));
    if (this.community_post_unselected == true) {
      
      this.community_post_unselected = false;
  
    }
    adminStatus.forEach(element => {
      if (element.community_id == this.community_post_id) {
        this.community_post = element;
        console.log(this.community_post);
      }
    });
    this.getUserInfomations();
  }

  ngOnInit(): void {
    this.communities = JSON.parse(window.localStorage.getItem('working_communities'));
    this.community_post = this.communities[0];
    this.community_post_id = this.communities[0].community_id;
    this.getUserInfomations();
  }

}
