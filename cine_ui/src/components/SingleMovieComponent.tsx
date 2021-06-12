import { useState } from "react";
import { Movie } from "../models/movie";

interface IDetailedMovie{
    detailMovie:Movie
}

export function SingleMovieComponenet(props:IDetailedMovie){
    const [sMovie, setSMovie]=useState()


    //have to movie single movie up to app state and pass it down to this componenet!
    return(
        <h2>
            {props.detailMovie.title}
        </h2>
    )

}