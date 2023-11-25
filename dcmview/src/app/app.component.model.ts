export enum Status {
    ON = 'ON',
    OFF = 'OFF',
}

export interface Service {
    name: string;
    status: Status;
}

export interface Device {
    name: string;
    status: Status;
    services: Service[];
}