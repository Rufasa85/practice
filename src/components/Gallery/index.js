import React from 'react'
import {capitalizeFirstLetter} from "../../utils/helpers"
import photo from "../../assets/small/commercial/0.jpg"

export default function Gallery({category}) {
    return (
        <div>
          <h1>{capitalizeFirstLetter(category.name)}</h1>  
          <p>{category.description}</p>
          <div className="flex-row">
          <img  className="img-thumbnail mx-1" src={photo}/>
          </div>
        </div>
    )
}
