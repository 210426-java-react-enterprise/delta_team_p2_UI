export class User {
    id: string;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    userBio: string;

    constructor(id: string, username: string, password: string, email: string, firstName: string, lastName: string, userBio: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userBio = userBio;
    }
    
}