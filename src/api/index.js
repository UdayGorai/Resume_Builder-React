import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase.config"

export const getUserDetail = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userCred) => {
            if (userCred) {
                const userData = userCred.providerData[0];

                const unsubscribe = onSnapshot(doc(db, "user", userData?.uid), (_doc) => {
                    if (_doc.exists()) {
                        resolve(_doc.data());
                    } else {
                        setDoc(doc(db, "user", userData?.uid), userData).then(() => {
                            resolve(userData)
                        });
                    }
                });
                return unsubscribe;

            } else {
                reject(new Error("User is not authenticated"))
            }

            // making sure to unsubscribe from the listner to prevent from memory leaks
            unsubscribe();
        })
    })
}