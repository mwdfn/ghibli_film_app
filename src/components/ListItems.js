import React from "react"

const ListItems = ({film, onFilmClick, onWatchClick}) => {

    const handleCick = () => {
        onFilmClick(film)
    }

    const handleWatchClick = () => {
        onWatchClick(film)
    }
    
    return(
        <>
        <li onClick={handleCick}>{film.title}</li>
        <button value={film} onClick={handleWatchClick}>Add to Watch List</button>
        </>
    )
}

export default ListItems