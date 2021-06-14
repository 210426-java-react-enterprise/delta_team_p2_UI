import { webappClient } from './webapp-client';

export async function moreDetails(ImdbID: string){
    let response = await webappClient.get(`/movieDetails/${ImdbID}`);
    return await response.data;
}


export async function popularSearch(){
    let response = await webappClient.get(`/imdbSearch`);
    return await response.data;
}

