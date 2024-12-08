import { auth, db } from "./firebase-config";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext()
// Create a custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext)
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])
  return(
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}

// A function that use to get user details
export const getUserData = async (uid) => {
  try{
    const docRef = doc(db, "Users", uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const userData = docSnap.data()
      return userData
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return null
    }
  }catch(err){
    console.error("Error getting document: ", err)
    return null
  }
}
