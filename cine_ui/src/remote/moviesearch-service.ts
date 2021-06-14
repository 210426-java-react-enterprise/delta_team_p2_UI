import { webappClient, webappClientAuthorized } from "./webapp-client";

export async function movieSearch(movieTitle: string) {
    let response = await webappClientAuthorized.get(`/rapidSearch/${movieTitle}`);
    return await response.data;
}

export async function addToHistory(ImdbID: string){
    let response = await webappClientAuthorized.put(`/addToHistory/${ImdbID}`)
    //console.log("Data:" + response.data)
    return await response.data;
}

export async function addToWatchList(ImdbID: string){
    let response = await webappClientAuthorized.put(`/addToWishList/${ImdbID}`)
    //console.log("Data:" + response.data)
    return await response.data;
}

export async function scoreMovie(json: string){
    let response = await webappClientAuthorized.put(`/movieScore`, json)
    //console.log("Data:" + response.data)
    return await response.data;
}

