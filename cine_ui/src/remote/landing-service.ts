import { webappClient } from "./webapp-client";

export async function getFollowing(userId: String){
    let response = await webappClient.get('followerdetail/1')
    console.log("Data:" + response.data)
    return await response.data;
}