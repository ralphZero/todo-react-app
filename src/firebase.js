import { initializeApp, getApps } from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from './secret';

if(!getApps().length) {
    initializeApp(firebaseConfig);
}
const app = getApps()[0];

export const auth = getAuth(app);
