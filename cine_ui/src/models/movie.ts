export class Movie {
    id:number;
    title: string;
    year: number;
    poster:string

    constructor(id:number,title: string, year: number, poster:string) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.poster = poster;
    }
    
}