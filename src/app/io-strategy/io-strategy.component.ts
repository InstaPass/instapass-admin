import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { ApiService } from '../service/api.service'
import { Strategy } from './io-strategy.service';
import { CommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-io-strategy',
  templateUrl: './io-strategy.component.html',
  styleUrls: ['./io-strategy.component.scss']
})
export class IoStrategyComponent implements OnInit {
  strategies: any;
  strategy: Strategy;
  new_strategy: Strategy;

  community_post_id: number;
  community_post: any;
  communities: any;
  community_post_unselected: boolean;

  buttonOptions: any = {
    text: "提交",
    type: "normal",
    useSubmitBehavior: true
  };


  constructor(private apiService: ApiService) { }

  
  onFormSubmit() {
    let payload = {
      community_id: this.community_post_id,
      cool_down: this.new_strategy.最小出入间隔
    };

    this.apiService.postStrategy(payload).subscribe(data => {
      if (data.status === "ok") {
        alert("修改成功！");
        this.getStrategies();
      }else{
        alert("修改失败。\n错误原因：" + data.msg);
      }
    });
  }

  getStrategies() {
    this.apiService.getStrategy().subscribe(data => {
      if (data.status === "ok") {
        this.strategies = data.strategies;
        this.strategies.forEach(element => {
          console.log(element);
          if (element.community_id == this.community_post_id) {
            this.strategy.最小出入间隔 = element.cool_down;
            this.new_strategy.最小出入间隔 = element.cool_down;
          }
        });
      }else{
        alert("拉取出入策略失败。\n错误原因：" + data.msg);
      }
      console.log(this.strategy);
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
    this.getStrategies();
  }

  ngOnInit(): void {
    this.communities = JSON.parse(window.localStorage.getItem('working_communities'));
    this.community_post = this.communities[0];
    this.community_post_id = this.communities[0].community_id;
    this.getStrategies();
    this.new_strategy = new Strategy();
    console.log(this.strategy);
    console.log(this.new_strategy);
  }
}
