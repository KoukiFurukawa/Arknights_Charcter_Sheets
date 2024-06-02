import { where, collection, getDoc, query, setDoc, doc, updateDoc} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

import { db, storage } from "./firebase_client";

export type userCheck = {
    email: string,
    password: string
}
export type userData = {
    email: string,
    password: string,
    sheetIds: string[],
    image: string,
    name : string
}

export async function registedUser({email, password}: userCheck){
    try
    {
        const userDataSnap = await getDoc(doc(db, "User", email));
        if (userDataSnap.exists() && userDataSnap.data().password == password) {
            return {result: true, name: userDataSnap.data().name}
        }
        else { return { result: false, name: ""} }
    }
    catch (error)
    {
        console.log(error)
    }
    
}


export const existingAddress = async ({ email, password }: userCheck) => {
    const userDataSnap = await getDoc(doc(db, "User", email));
    return userDataSnap.exists();
}

export const registUser = async ({email, password, name, image, sheetIds} : userData) => {
    setDoc(doc(collection(db, "User"), email), {
        name: name,
        password: password,
        image: image,
        sheetIds: sheetIds
    });
}


let defaultData = {
    Profile : {
        name : "",
        icon : "/default/default.png",
        discription : "",
    },
    Calendar : {},
    Session  : {},
    Schedule : {
        participation : [],
        owner : []
    }
}


const defaultUserSetting = (uid: string) => {
    defaultData.Profile.name = uid;
    setDoc(doc(collection(db, "User"), uid), defaultData)
}


const existsDoc = async (uid: string) => {
    const docRef = doc(db, "User", uid);
    const docSnap = await getDoc(docRef);
    const result = docSnap.exists();
    return result
}


const getUserData = async (uid: string) => {
    const userDataSnap = await getDoc(doc(db, "User", uid))
    if (userDataSnap.exists()) {
        const result = userDataSnap.data();
        return result;
    }else{
        defaultData.Profile.name = uid;
        return defaultData;
    }
}


const getUserIcon = async (path : string) => {
    const downLoadRef = ref(storage, path);
    let result = "/default.png"
    await getDownloadURL(downLoadRef).then(function(url){
        result = url
    });

    return result;
}


// const saveScheduleData = (uid: string, schedule: userSchedule[]) => {
//     let shaped_data: {[date: string] : number} = {}
//     schedule.forEach((data) => {
//         const key: string[] = Object.keys(data)
//         shaped_data[key[0]] = data[key[0]];
//     })

//     updateDoc(doc(db, "User", uid), {
//         Calendar : shaped_data
//     }).catch(e => {
//         console.log(e)
//     })
// }

export { defaultUserSetting, existsDoc, getUserData, getUserIcon, }