export class List {
    id: number;
    text: string;
    icon: string;
}

// let navigation: List[] = [
//     { id: 1, text: "Products", icon: "product" },
//     { id: 2, text: "Sales", icon: "money" },
//     { id: 3, text: "Customers", icon: "group" },
//     { id: 4, text: "Employees", icon: "card" },
//     { id: 5, text: "Reports", icon: "chart" }
// ];

let navigation: List[] = [
    { id: 1, text: "出行记录", icon: "product" },
    { id: 2, text: "用户信息", icon: "money" },
    { id: 3, text: "发布公告", icon: "group" },
    { id: 5, text: "出入策略", icon: "chart" }
];

export class Service {
    getNavigationList(): List[] {
        return navigation;
    }
}
