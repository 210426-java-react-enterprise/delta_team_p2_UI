import { webappClient } from "./webapp-client";

export async function authenticate(username: string, password: string) {
    let response = await webappClient.post('/login', {username, password});
    return await response;
    //return await response.data;
}