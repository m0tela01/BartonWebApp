import { Helper } from '../../shared/helpers/helper';

export class Employee {
    id: number;
    seniority: number;
    name: string;
    role: string;
    shiftPreference: number;

    constructor(input?: any) {
        Helper.constructObject<Employee>(input, this);
    }
}