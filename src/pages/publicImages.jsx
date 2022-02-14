import React from "react";
import { useEffect, useState  } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PublicImages = () => {
  const url = `https://api.thecatapi.com/v1/categories`;
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("3");
  const [numOfPics, setNumOfPics] = useState(0);
  const [myImages, setMyImages] = useState([]);
  const urlImg = `https://api.thecatapi.com/v1/images/search/?category_ids=${categoryId}&limit=${numOfPics}`;
  const key = "e12a2a40-eba4-4249-ad36-32f53966708a";

  const getPics = async () => {
    const response = await fetch(urlImg);

    if(response.status === 200){
      const pics = await response.json()
      setMyImages(pics);
    }
  }

  const handleSelectFavourites = async (id) => {
    const response = await fetch(`https://api.thecatapi.com/v1/favourites`, {
        method: "POST",
        headers: {
          'AccessControlAllowOrigin' : "*",
          "Content-Type" : "application/json",
          'x-api-key' : key
        },
        body: JSON.stringify({'image_id': id, 'sub_id': "user123"})
    })
}


  const handleCatSelect = async () => {
    const response = await fetch(url)
    
    if(response.status === 200){
      const category = await response.json();
      setCategories(category);
    }
  }

  useEffect(()=> {
    handleCatSelect();
  }, [])

  console.log(categories);
  return (
    <>
      <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
        {categories?.map(item => 
          <option value={item.id}>{item.name}</option>
        )}
      </select>

      <select value={numOfPics} onChange={(e) => setNumOfPics(e.target.value)}>
        <option value="3">3</option>
        <option value="9">9</option>
        <option value="15">15</option>
      </select>

      <button onClick={getPics}>Submit</button>
      

    <div className="row row-cols-3">
        {myImages.map(pic => {
          return(
            <div>
                <img className="col img-thumbnail" src={pic.url} />
                <button onClick={() => handleSelectFavourites(pic.id)}>Add to favourites</button>
            </div>
          )
        })}
    </div>
    </>
  );
};

export default PublicImages;
