import { webappClient } from "./webapp-client";

export async function getFollowing(userId: String | undefined){
    let response = await webappClient.get(`followerdetail/${userId}`)
    console.log("Data:" + response.data)
    return await response.data;
}