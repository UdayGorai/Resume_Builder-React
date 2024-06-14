import { auth } from "../config/firebase.config"

export const getUserDetail = () => {
    return new Promise((resolve,reject) => {
        const unsubdcribe = auth.onAuthStateChanged((userCred) => {
            if(userCred){
                const userData = userCred.providerData[0]
                console.log(userData)
            }else{
                
            }
        })
    }) 
}