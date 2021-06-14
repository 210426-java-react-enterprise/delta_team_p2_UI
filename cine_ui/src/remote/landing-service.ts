import { webappClient } from "./webapp-client";

export async function getFollowing(userId: String | undefined){
    let response = await webappClient.get(`followerdetail/${userId}`)
    console.log("Data:" + response.data)
    return await response.data;
}

export async function getWatchList(userId: String | undefined){
    let response = await webappClient.get(`userwatchlist/${userId}`)
    console.log("Data:" + response.data)
    return await response.data;
}

export async function getWatchHistory(userId: String | undefined){
    let response = await webappClient.get(`userwatchhistory/${userId}`)
    console.log("Data:" + response.data)
    return await response.data;
}