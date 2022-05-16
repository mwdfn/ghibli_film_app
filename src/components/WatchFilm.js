import React from "react"

const WatchFilm = ({film}) => {

    return (
        <>
        <img src={film.image} className = "fave-film-image"/>
        <p>{film.title}</p>
        </>
    )
}

export default WatchFilm