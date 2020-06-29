export class User {
    身份证号: number;
    姓名: string;
    状态: string;
};

export class State {
    身份证号: number;
    Name: string;
}

let users: User[] = [
    
];


let states: State[] = [
    {
        "身份证号": 1,
        "Name": "OK"
    }, {
        "身份证号": 2,
        "Name": "Forb身份证号den"
}];

export class Service {
    getEmployees() {
        return users;
    }

    getStates() {
        return states;
    }
}