import React, { useState } from "react";
import "../css/login.css";
import icon from "../assets/upload.png";
import ficon from "../assets/file.png"; 
import { useNavigate } from "react-router-dom";
import {storage} from "../firebaseConfig/firebase";


export default function Login(props) {
  console.log(props);
  let navigate = useNavigate();
  let [image,setImage]=useState(icon);
  let [fn,changeName]=useState("Please Choose a File");
  let [file,setFile]=useState(null);
  let [imgAsURL,setURL]=useState("");

  const fileSelect = (event) => {
    let f=event.target.files;
    if(f.length>0)
    {
      setFile(f[0]);
      changeName(f[0].name);
      setImage(ficon);
      setURL(f[0]);
    }
    else
    {
      setFile(null);
      setURL(null);
      changeName("Please Choose a File");
      setImage(icon);
    }
  }

  const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }

  const fileSubmit = (e) => {
    e.preventDefault();
    setURL(file);
    console.log(file);
    if(file === '') {
      console.error(`not an image, the image file is a ${typeof(file)}`);
    }
    const uploadTask = storage.ref(`/profilePictures/${file.name}`).put(file);
    uploadTask.on('state_changed', 
    (snapshot) => {
      console.log(snapshot);
    },
    (err) => {
      console.log(err)
    }, () => {
      storage.ref('profilePictures').child(file.name).getDownloadURL()
       .then(fireBaseUrl => {
        imgAsURL['imgURL']=fireBaseUrl;
        setURL(imgAsURL);
        props.setImg(imgAsURL);
        navigate('/home');
       })
    })
  }
  // const test= (e)=>
  // {
  //   e.preventDefault();
  //   console.log(fn);
  //   console.log(file);
  //   console.log(imgAsURL);
  // }

  return (
    <section id="login">
        <div id="container">
            <label className="labelName" htmlFor="userName">
              <span>Enter Your Name:</span>
              <div id="filler"></div>
              <input name="name" id="userName" type="text" placeholder="Ex: John Doe" required=""/>
            </label>
            <label className="labelImg" htmlFor="imgbtn">
              <input type="file" id="imgbtn" onChange={fileSelect} />
              <img src={image} alt="Upload" required=""/>
            </label>
            <div className="fileName">
              {fn}
            </div>
            <button onClick={fileSubmit}>Upload and Submit</button>
        </div>
    </section>
  )
}
