
export class Notification {
    key: string;
    items: string[];
}

let notifications: Notification[] = [];


export class Service {
    getNotifications() : Notification[] {
        return notifications;
    }
}
