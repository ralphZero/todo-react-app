import React, { createContext, useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { auth } from '../firebase';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [user, setUser ] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return () => {
            unsubscribe?.()
        }
    }, []);

    const logOut = () => auth.signOut();

    const logIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch((err) => {
                console.error(err);
                setUser(undefined);
            })
    }

    return (
        <UserContext.Provider value={{ user, logIn, logOut }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;
