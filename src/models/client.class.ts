export class Client {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phone: string;
    country: string;
    status: any;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.company = obj ? obj.company : '';
        this.email = obj ? obj.email : '';
        this.phone = obj ? obj.phone : '';
        this.country = obj ? obj.country : '';
        this.status = obj ? obj.status : {value: '', viewValue: ''};
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            company: this.company,
            email: this.email,
            phone: this.phone,
            country: this.country,
            status: this.status,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city
        }
    }
}