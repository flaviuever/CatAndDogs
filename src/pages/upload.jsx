import React,  {useState} from "react";

const Upload = () => {
  const url = "https://api.thecatapi.com/v1/images/upload";
  const key = "e12a2a40-eba4-4249-ad36-32f53966708a";
  const [image, setImage] = useState()

  const handleImage = (e) => {
    console.log(e.target.files)
    setImage(e.target.files[0]);
  }

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', image);

    const response = await fetch(url, {
      method: "POST",
      headers:{
        Accept: 'aplication/json', 'x-api-key' : key
      },
      body: formData
    })
  }

    return (
    <>
      <input type="file" onChange={handleImage}/>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Upload;
