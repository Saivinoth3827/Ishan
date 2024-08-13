
import { Dropbox } from 'dropbox';

const ACCESS_TOKEN = 'YOUR_DROPBOX_ACCESS_TOKEN'; // Replace with your Dropbox access token

const dbx = new Dropbox({ accessToken: ACCESS_TOKEN });

export default dbx;
