import React from "react";
import ListItems from "./ListItems";


const filmList = ({films, onFilmClick, onWatchClick}) => {

    const filmItems = films.map((film, index) => {
        return <ListItems film={film} key={index} onFilmClick={onFilmClick} onWatchClick={onWatchClick}/>
    })


    return(
        <div>
            {filmItems}
        </div>
    )
}

export default filmList