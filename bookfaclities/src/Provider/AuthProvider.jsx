import { createContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile,
    GithubAuthProvider,
    sendPasswordResetEmail,

} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleprovider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
  
    const updateUserProfile = (name, photo) =>{
     return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }

    const  googleSingin =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleprovider)
    }
    const githubSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
      };
      const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
    
        return () => {
            unsubscribe();
        };
    }, []);
    
  
    
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSingin,
        githubSignin,
        resetPassword,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
