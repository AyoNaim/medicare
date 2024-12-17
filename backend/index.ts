import { Client, Databases } from "appwrite";

const client = new Client();
const database = new Databases(client);

client
    .setEndpoint('https://3000-ayonaim-medicare-k59ao9819vq.ws-eu117.gitpod.io/v1')
    .setProject('675fd45100260480c426')
