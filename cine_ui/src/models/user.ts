export class User {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    userBio: string;

    constructor(username: string, password: string, email: string, firstName: string, lastName: string, userBio: string) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userBio = userBio;
    }
    
}