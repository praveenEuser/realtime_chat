import { Client, Databases, Account } from "appwrite";

export const PROJECT_ID = '65c256a04c5b30b4c04b'
export const DATABASE_ID = '65c2578108fae0f2067d'
export const COLLECTION_ID_MESSAGES = '65c2579fd545e3f2f35d'
const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')

export const databases = new Databases(client);
export const account = new Account(client);

export default client;