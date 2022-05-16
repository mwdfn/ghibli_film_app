import React from "react"

const FilmDetails = ({selectedFilm}) => {

    return(
        <>
            <div className = "film-detail-container">
                <img src={selectedFilm.movie_banner} className="detail-image"/>
                <h3>{selectedFilm.title}</h3>
                <p>{selectedFilm.release_date}</p>
                <p>Director: {selectedFilm.director}</p>
                <p>Producer: {selectedFilm.producer}</p>
                <p>Running Time: {selectedFilm.running_time} minutes </p>
                <p>{selectedFilm.description}</p>
            </div>
        </>
    )

}

export default FilmDetails