import { webappClient, webappClientAuthorized } from "./webapp-client";

// export async function getFollowing(userId: String | undefined){
//     let response = await webappClient.get(`followerdetail/${userId}`)
//     console.log("Data:" + response.data)
//     return await response.data;
// }


export async function getFollowing(){
    let response = await webappClientAuthorized.get(`/followerdetail`)
    console.log("Data:" + response.data)
    return await response.data;
}

export async function getWatchHistory() {
    let response = await webappClientAuthorized.get('/history');
    return await response.data;
}

export async function getWatchList(){
    let response = await webappClientAuthorized.get(`/wishlist`)
    console.log("Data:" + response.data)
    return await response.data;
}



