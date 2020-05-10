export class Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
    Phone: string;
    BirthDate: string;
    Address: string;
    StateID: number;
};

export class State {
    ID: number;
    Name: string;
}

let employees: Employee[] = [
    {
        "ID": 1,
        "FirstName": "千山",
        "LastName": "随",
        "Prefix": "Mr.",
        "Position": "CEO",
        "Phone": "12312341234",
        "BirthDate": "1964/03/16",
        "Address": "351 S Hill St.",
        "StateID": 1
    }, {
        "ID": 2,
        "FirstName": "Olivia",
        "LastName": "Peyton",
        "Prefix": "Mrs.",
        "Position": "Sales Assistant",
        "Phone": "11122221111",
        "BirthDate": "1981/06/03",
        "Address": "807 W Paseo Del Mar",
        "StateID": 1
    }, {
        "ID": 3,
        "FirstName": "Robert",
        "LastName": "Reagan",
        "Prefix": "Mr.",
        "Position": "CMO",
        "Phone": "11122221111",
        "BirthDate": "1974/09/07",
        "Address": "4 Westmoreland Pl.",
        "StateID": 2
    }, {
        "ID": 4,
        "FirstName": "Greta",
        "LastName": "Sims",
        "Prefix": "Ms.",
        "Position": "HR Manager",
        "Phone": "11122221111",
        "BirthDate": "1977/11/22",
        "Address": "1700 S Grandview Dr.",
        "StateID": 1
    }, {
        "ID": 5,
        "FirstName": "Brett",
        "LastName": "Wade",
        "Prefix": "Mr.",
        "Position": "IT Manager",
        "Phone": "11122221111",
        "BirthDate": "1968/12/01",
        "Address": "1120 Old Mill Rd.",
        "StateID": 1
    }, {
        "ID": 6,
        "FirstName": "Sandra",
        "LastName": "Johnson",
        "Prefix": "Mrs.",
        "Position": "Controller",
        "Phone": "11122221111",
        "BirthDate": "1974/11/15",
        "Address": "4600 N Virginia Rd.",
        "StateID": 2
    }, {
        "ID": 7,
        "FirstName": "Kevin",
        "LastName": "Carter",
        "Prefix": "Mr.",
        "Position": "Shipping Manager",
        "Phone": "11122221111",
        "BirthDate": "1978/01/09",
        "Address": "424 N Main St.",
        "StateID": 1
    }, {
        "ID": 8,
        "FirstName": "Cynthia",
        "LastName": "Stanwick",
        "Prefix": "Ms.",
        "Position": "HR Assistant",
        "Phone": "11122221111",
        "BirthDate": "1985/06/05",
        "Address": "2211 Bonita Dr.",
        "StateID": 2
    }, {
        "ID": 9,
        "FirstName": "Kent",
        "LastName": "Samuelson",
        "Prefix": "Dr.",
        "Position": "Ombudsman",
        "Phone": "11122221111",
        "BirthDate": "1972/09/11",
        "Address": "12100 Mora Dr",
        "StateID": 2
    }, {
        "ID": 10,
        "FirstName": "Taylor",
        "LastName": "Riley",
        "Prefix": "Mr.",
        "Position": "Network Admin",
        "Phone": "11122221111",
        "BirthDate": "1982/08/14",
        "Address": "7776 Torreyson Dr",
        "StateID": 1
    }, {
        "ID": 11,
        "FirstName": "Sam",
        "LastName": "Hill",
        "Prefix": "Mr.",
        "Position": "Sales Assistant",
        "Phone": "11122221111",
        "BirthDate": "1984/02/17",
        "Address": "645 Prospect Crescent",
        "StateID": 1
    }, {
        "ID": 12,
        "FirstName": "Kelly",
        "LastName": "Rodriguez",
        "Prefix": "Ms.",
        "Position": "Support Assistant",
        "Phone": "11122221111",
        "BirthDate": "1988/05/11",
        "Address": "1601 W Mountain St.",
        "StateID": 2
    }, {
        "ID": 13,
        "FirstName": "Natalie",
        "LastName": "Maguirre",
        "Prefix": "Mrs.",
        "Position": "Trainer",
        "Phone": "11122221111",
        "BirthDate": "1977/10/07",
        "Address": "6400 E Bixby Hill Rd",
        "StateID": 2
    }, {
        "ID": 14,
        "FirstName": "Walter",
        "LastName": "Hobbs",
        "Prefix": "Mr.",
        "Position": "Programmer",
        "Phone": "11122221111",
        "BirthDate": "1984/12/24",
        "Address": "10385 Shadow Oak Dr",
        "StateID": 1
    }
];


let states: State[] = [
    {
        "ID": 1,
        "Name": "OK"
    }, {
        "ID": 2,
        "Name": "Forbidden"
}];

export class Service {
    getEmployees() {
        return employees;
    }

    getStates() {
        return states;
    }
}