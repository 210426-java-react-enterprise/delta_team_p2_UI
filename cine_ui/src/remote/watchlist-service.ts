import { webappClientAuthorized } from "./webapp-client";

export async function getWatchHistory() {
    let response = await webappClientAuthorized.get('/history');
    return await response.data;
}