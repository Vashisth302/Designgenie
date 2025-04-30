import { Client, Storage, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_HOST_URL)// Your Appwrite endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your Appwrite Project ID
  const storage = new Storage(client);
  const id = new ID (client);

  export { storage, ID}
