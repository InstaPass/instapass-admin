import { Component, OnInit } from '@angular/core';
import { Message, Service } from './io-info-data.service';
import { ApiService } from '../service/api.service'

@Component({
  selector: 'app-io-info-list',
  templateUrl: './io-info-list.component.html',
  styleUrls: ['./io-info-list.component.scss'],
  providers: [Service]
})
export class IoInfoListComponent implements OnInit {
  messages: Message[];

  community_post_id: number;
  community_post: any;
  communities: any;
  community_post_unselected: boolean;

  constructor(private service: Service, private apiService: ApiService) {
    this.messages = service.getMessages();
  }

  getHistories() {
    console.log(this.community_post_id);
    this.messages = [];
    this.apiService.getUserHistory(this.community_post_id).subscribe(data => {
      if (data.status === "ok") {
        console.log(data);
        let historyInfos = data.residents;
        historyInfos.forEach(element => {
          element.history.forEach(item => {
            let message = new Message();
            message.身份证号 = element.static_info.id_number;
            message.姓名 = element.static_info.realname;
            message.状态 = element.status;
            message.地址 = item.address;
            message.小区 = item.community;
            message.小区编号 = item.community_id;
            message.原因 = item.reason;
            message.时间 = item.time;
            this.messages.push(message);
          });
        });
      }else{
        alert("拉取出入历史失败。\n错误原因：" + data.msg);
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
    this.getHistories();
  }

  ngOnInit(): void {
    console.log("ioInfo-list gen");
    this.communities = JSON.parse(window.localStorage.getItem('working_communities'));
    this.community_post = this.communities[0];
    this.community_post_id = this.communities[0].community_id;
    this.getHistories();
  }

}
