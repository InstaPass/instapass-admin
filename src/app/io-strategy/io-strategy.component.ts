import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-io-strategy',
  templateUrl: './io-strategy.component.html',
  styleUrls: ['./io-strategy.component.scss']
})
export class IoStrategyComponent implements OnInit {
  customer: string;
  buttonOptions: any = {
    text: "提交",
    type: "success",
    useSubmitBehavior: true
  };
  phonePattern: any = /[0-9]+/;
  phoneRules: any = {
      X: /[02-9]/
  };

  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit = function(e) {
    notify({
        message: "进出策略修改成功",
        position: {
            my: "center top",
            at: "center top"
        }
    }, "success", 3000);
    
    e.preventDefault();
}

}
