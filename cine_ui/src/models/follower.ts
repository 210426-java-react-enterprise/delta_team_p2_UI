export class follower {
    userId: string;
    username: string;
    userBio: string;

    constructor(userId: string, username: string, userBio: string){
        this.userId = userId;
        this.username = username;
        this.userBio = userBio;
    }
}