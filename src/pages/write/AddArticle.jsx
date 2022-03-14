import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import "./addArticle.css";

const AddArticle = () => {
    const [title,setTitle]=useState("");
    const [con,setCon]=useState("");
    const [wb,setWb]=useState(""); 
    const [date,setDate]=useState("");
    const [img,setImg]=useState("");

    const HandleClick=async(e)=>{
        
        const send=async()=>{
           //console.log("imagsdsd",img);
            const res=await axios.post("https://compendium-serverside.herokuapp.com/api/posts",{
                "title":title,
                "content":con,
                "writtenBy":wb,
                "dateAdded":date,
                "img":img
            });
            console.log("response",res._id);
            const postId=await axios.post("https://compendium-serverside.herokuapp.com/api/postid",{
                "postid":res._id
            });
            console.log("response",postId);
        }
        send();
        alert("your article is added ");
        e.preventDefault();
    }
   
    const cImg=(im)=>{
        // let bs64='';
        getBase64(im,(result)=>{
            // bs64=result;
        })
       
    }
    function getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
            setImg(reader.result);
            //console.log("reader result",reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
   
    return (
        <>
        <div className="form form12">
           <form onSubmit={HandleClick}>
            <div className="input-group mb-3 title12">
                <label htmlFor="">title:</label>
                <textarea className="form-control" type="text" onChange={event=> setTitle(event.target.value) } />
            </div>

            <div className="input-group content12">
                <label htmlFor="">article content:</label>
                <textarea className="form-control" type="text" name="content" id="" onChange={event=> setCon(event.target.value) }   />
            </div>

            <div className="input-group wb12">
                <label htmlFor="wb">written by:</label>
                <input className="form-control" type="text" name="wb"  onChange={event=> setWb(event.target.value) } />
            </div>

            <div className="input-group date12">
                <label htmlFor="date">date:</label>
                <input className="form-control" type="text" name="date"  onChange={event=> setDate(event.target.value) } />
            </div><br/>
        
            <div className="input-group date12">
                <label htmlFor="img">image:</label>
                <input className="form-control" type="file" name="img" id="img" onChange={e=>cImg(e.target.files[0]) } />
            </div>

            <button className="btn btn-lg btn-primary" type="submit">submit</button>
               
            </form>
        </div>
        </>
    )
}

export default AddArticle; 
