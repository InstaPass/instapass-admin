export class ApiResponse {
    status: string;
    msg: string;

    jwt_token: string;

    last_retrieve_time: number;
    notifications: any;
    residents_info: any;

    working_communities: any;
}