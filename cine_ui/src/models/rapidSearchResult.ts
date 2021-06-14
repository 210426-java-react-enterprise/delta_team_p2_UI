export class Result {
    ImdbID: string;
    Title: string;
    Year: number;
    Poster:string

    constructor(ImdbID: string, Title: string, Year: number, Poster:string) {
        this.ImdbID = ImdbID;
        this.Title = Title;
        this.Year = Year;
        this.Poster = Poster;
    }
}
