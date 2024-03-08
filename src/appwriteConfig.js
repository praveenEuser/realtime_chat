import { Client,Databases } from 'appwrite';

export const PROJECT_ID = '65c10ebe9408f355c967'
export const DATABASE_ID = '65c110156100f773917c'
export const COLLECTION_ID_MESSAGES = '65c11024061e0164de62'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c10ebe9408f355c967');
export const databases = new Databases(client);
export default client;