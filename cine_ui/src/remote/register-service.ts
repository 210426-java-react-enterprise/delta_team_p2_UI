import { webappClient } from './webapp-client';
export async function register(username: string, password: string, email: string, firstName: string, lastName: string, userBio: string) {
    let response = await webappClient.post('/auth', {username, password, email, firstName, lastName, userBio});
    return await response.data;
}