import { Client, Databases, Account } from "appwrite";

export const PROJECT_ID = '65edf51772ec61c74e1a'
export const DATABASE_ID = '65edf67fd08a0618781d'
export const COLLECTION_ID_MESSAGES = '65edf6a44b1378e9721b'
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65edf51772ec61c74e1a');

export const databases = new Databases(client);
export const account = new Account(client);

export default client;