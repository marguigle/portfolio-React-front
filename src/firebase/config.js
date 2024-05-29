
import { initializeApp } from "firebase/app";
import {getStorage, ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'


const firebaseConfig = {
  apiKey: "AIzaSyDnwdSz2sVkgdnOpeqNue9vhJ-dcGJTmjg",
  authDomain: "portfolio-imagenes.firebaseapp.com",
  projectId: "portfolio-imagenes",
  storageBucket: "portfolio-imagenes.appspot.com",
  messagingSenderId: "869900036861",
  appId: "1:869900036861:web:70c116b96d9ff6c1d5ec94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

export async  function uploadFile(file){
const storageRef =  ref(storage,v4())
 await uploadBytes(storageRef,file)
 const url =await getDownloadURL(storageRef)
 return url
}