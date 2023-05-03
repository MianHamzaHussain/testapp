import React, { useState, useEffect } from "react";
import axios from "axios";
export default function RandomImage() {
  const [imgUrl, SetImageUrl] = useState("");
  const [pImages,setPImages]=useState([]);

  const fetchImage = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      const image=res.data.message;
      SetImageUrl(image);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchImage();
  }, []);
  const handleClick=async()=>{
    const res = await axios.get("https://dog.ceo/api/breeds/image/random");
    const url=res.data.message;
    SetImageUrl(url)
    setPImages(prevState=>[...prevState,res.data.message])
  }
  const result=()=>{
    console.log('test',pImages)
  }
  return (
    <div>
      <img src={imgUrl} style={{width:100,height:100}} />
      <button onClick={handleClick}> Left Click</button>
      <button onClick={handleClick}> Right Click</button>
      <button onClick={result}> Result Click</button>
    </div>
  );
}
