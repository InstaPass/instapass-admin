import { Injectable } from '@angular/core';

export class Message {
    身份证号: number;
    姓名: string;
    地址: string;
    小区: string;
    小区编号: number;
    时间: number;
    状态: number;
    原因: string;
}

let messages: Message[] = [
   
];


export class Service {
    getMessages() {
        return messages;
    }
}
