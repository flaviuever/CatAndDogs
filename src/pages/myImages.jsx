import React from "react";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyImages = () => {
  const urlGet = 'https://api.thecatapi.com/v1/images/?limit=10'
  const key = "e12a2a40-eba4-4249-ad36-32f53966708a";
  const [images, setImages] = useState([]);

  const showMyImgs = async () => {
      const response = await fetch(urlGet, {
        headers: {
            'x-api-key' : key
        }
  })
  if(response.status === 200) {
    const pic = await response.json();
    setImages(pic)
  }
}

const deleteImg = async (id) => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`, {
      method: "DELETE",
      headers: {
        AccesControlAllowOrigin: "*", 'x-api-key' : key
      },
  })
  if(response.status === 204) {
      showMyImgs();
  }
}

useEffect(()=> {
  showMyImgs();
}, [])

console.log(images)
  return (
      <div className="row row-cols-3">
        {images.map(pic => {
            return(
              <div key={pic.id}>
                  <img className="col img-thumbnail" src={pic.url} />
                  <p className="legend">Legend 1</p>
                  <button onClick={()=> deleteImg(pic.id)}>Delete</button>
              </div>
            )
          })}
      </div>
    )
};

export default MyImages
