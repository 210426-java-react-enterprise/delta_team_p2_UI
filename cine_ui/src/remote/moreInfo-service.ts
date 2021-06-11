import { webappClient } from './webapp-client';

export async function moreDetails(id:number){
    let response = await webappClient.post('/movieDetails/id',{id});
    return await response.data;
}