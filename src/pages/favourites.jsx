import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Favourites = () => {
    const key = "e12a2a40-eba4-4249-ad36-32f53966708a";
    const [favourites, setFavourites] = useState([])

    const handleFavourites = async () => {
        const response = await fetch(`https://api.thecatapi.com/v1/favourites`,{
            headers: {
                'x-api-key' : key
            }
        })

        if(response.status === 200){
            const favourite = await response.json();
            setFavourites(favourite);
        }
    }
    
    const handleRemoveFavourites = async  (id) => {
        const response = await fetch(`https://api.thecatapi.com/v1/favourites/${id}`,{
            method: "DELETE",
            headers: {AccesControlAllowOrigin: "*", 'x-api-key' : key}
        })

        if(response.status === 200) {
            console.log('ok')
            handleFavourites();
        }
        // TEMAAAA
        // DEPLOY THIS AWESOME SITE
    }

    useEffect(() => {
        handleFavourites();
    }, [])

    return (
            <div className="row row-cols-3">
                {favourites.map(item => {
                return(
                    <div className="col" key={item.id}>
                        <img className="col img-thumbnail" src={item.image.url} />
                        <button onClick={() => handleRemoveFavourites(item.id)}>Remove from favourites</button>
                    </div>
                )
                })}
            </div>
    )
}

export default Favourites;