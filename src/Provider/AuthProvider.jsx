import { createContext,useEffect,useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    // email pass
    const createNewUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // logout

    const logout = () =>{
        return signOut(auth)
    }
    // sign in
    const userSignIn = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo ={
        user,
        setUser,
        createNewUser,
        logout,
        userSignIn,
        
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe
        }
    },[])

    
    return (
             <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;