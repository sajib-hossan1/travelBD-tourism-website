import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init"
import {getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword,signOut,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile} from "firebase/auth"

initializeAuthentication();

const useFirebase = () => {
    const [user,  setUser] = useState({});
    const [error,  setError] = useState('');
    const [isLoading, setisLoading] = useState(true);

    // firebase auth
    const auth = getAuth();

    // sign in using google
    const signInUsingGoogle = () => {
        setisLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setisLoading(false))
    }


    // sign in existing user
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth,email, password)
        .then(userLogin => {
            const user = userLogin.user;
            setUser(user)
            setError('')
        })
        .catch(error2 => {
            const error = error2.message;
            setError(error);
        })
    }

    // register or creating a new user
    const createNewUser = (name,email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            setUserName(name);
            setError('');
            console.log(user);
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }

    // set user name when user register
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName : name
        })
        .then(result => {})
        .catch(error => {
            setError(error.message)
        })
    };


    // sign out existing user
    const logOut = () => {
        setisLoading(true)
        signOut(auth)
        .then( () => {
            setUser({})
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setisLoading(false))
    }


    // signed in user observer
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }else (
                setUser({})
            )
            setisLoading(false)
        })
        return () => unsubscribed;
    }, [])


    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        processLogin,
        createNewUser,
        logOut
    }
}

export default useFirebase;