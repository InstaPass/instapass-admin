import { Injectable } from '@angular/core';

export class Message {
    InfoID: number;
    Dweller: string;
    Guard: string;
    Gate: string;
    Time: string;
    Temperature: number;
    LeftNum: number;
}

let messages: Message[] = [
    {
        "InfoID": 1,
        "Dweller": "Mr. A",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 2,
        "Dweller": "Mr. B",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 3,
        "Dweller": "Mr. C",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 4,
        "Dweller": "Mr. D",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 5,
        "Dweller": "Mr. E",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 6,
        "Dweller": "Mr. F",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 7,
        "Dweller": "Mr. G",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 8,
        "Dweller": "Mr. H",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 9,
        "Dweller": "Mr. I",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 10,
        "Dweller": "Mr. J",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 11,
        "Dweller": "Mr. K",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 12,
        "Dweller": "Mr. L",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 13,
        "Dweller": "Mr. M",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 14,
        "Dweller": "Mr. N",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 15,
        "Dweller": "Mr. O",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 16,
        "Dweller": "Mr. P",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 17,
        "Dweller": "Mr. Q",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 18,
        "Dweller": "Mr. R",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 19,
        "Dweller": "Mr. S",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 20,
        "Dweller": "Mr. T",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 21,
        "Dweller": "Mr. U",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 22,
        "Dweller": "Mr. V",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 23,
        "Dweller": "Mr. W",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    },
    {
        "InfoID": 24,
        "Dweller": "Mr. X",
        "Guard": "Guard X",
        "Gate": "Gate M",
        "Time": "2020/4/20",
        "Temperature": 36.6,
        "LeftNum": 0
    }
];


export class Service {
    getMessages() {
        return messages;
    }
}
