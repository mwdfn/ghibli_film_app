import React, { useEffect, useState } from "react"
import FilmList from "../components/FilmList"
import FilmDetails from "../components/FilmDetails"
import WatchFilmList from "../components/WatchFilmList"


const FilmContainer = () => {

    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [filmsToWatch, setFilmstoWatch] = useState([])

    useEffect(() => {
        getFilms();
    }, [])


    const getFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(films => setFilms(films))
        .catch(err => console.error);
    }


    const onFilmClick = (film) => {
        setSelectedFilm(film)
    }

    const onWatchClick = (watchFilm) => {
        const watchListCopy = [... filmsToWatch]
        const inWatchList = watchListCopy.some((film) => {
            return film.id === watchFilm.id
        })

        if (!inWatchList) { 
        watchListCopy.push(watchFilm)
        }

        setFilmstoWatch(watchListCopy)
    }


    return (
            <>
            <div className="Container">
                <div className="Nav">NavBarNavBarNavBar</div>
                <div className="Logo">This is the logo</div>
                <div className="FilmList">
                    <FilmList films = {films} onFilmClick = {onFilmClick} onWatchClick = {onWatchClick}/>
                </div>
                <div>
                    {selectedFilm ? <FilmDetails selectedFilm = {selectedFilm} />: null }
                </div>
                <div className="WatchFilmList">
                    <WatchFilmList filmsToWatch={filmsToWatch}/>
                </div>
            </div>
            </>
            )
}        

export default FilmContainer
