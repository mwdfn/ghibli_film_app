import React from "react"
import WatchFilm from "./WatchFilm"


const WatchFilmList = ({filmsToWatch}) => {

    const watchFilmItems = filmsToWatch.map((film, index) => {
        return <WatchFilm film = {film} key = {index}/>
    })

    return (
        <>
            <div className="watchList">
                {watchFilmItems}
            </div>
        </>
    )
}

export default WatchFilmList