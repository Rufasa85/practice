import React from 'react'
import {capitalizeFirstLetter} from "../../utils/helpers"
import photo from "../../assets/small/commercial/0.jpg"
import ImageList from '../ImageList';

export default function Gallery({category}) {
    return (
        <div>
          <h1 data-testid="h1tag">{capitalizeFirstLetter(category.name)}</h1>  
          <p>{category.description}</p>
          <div className="flex-row">
          <ImageList category={category.name}/>
          </div>
        </div>
    )
}
