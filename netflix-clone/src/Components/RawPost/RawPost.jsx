import React, { Suspense, lazy, useEffect, useState } from 'react'
import axios from '../../CONST/axios.jsx';
import './assets/RawPost.css'
import Slider from "react-slick";

const Poster = lazy(() => import('../Poster/Poster.jsx'))

function RawPost(props) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const variable = props.fetchUrl

        console.log(variable)
        axios.get(variable).then(response => {
            setMovies(response.data.results)
        })
            .catch(error => {
                console.error('error fetching the post:', error)
            })
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: props.isLargeRow ? 8 : 7 ,
        slidesToScroll: 4,
        infinite: true,
        arrows: true,
    };

    const posterStyle = {
        height: props.isLargeRow ? '250px' : '100px', // Adjust the height values as needed
    };
    const posterContainerStyle = {
        height: props.isLargeRow ? '250px' : '100px', // Same as defined in your CSS
        width: props.isLargeRow ? '150px' : '170px', // Same as defined in your CSS
        borderRadius: '6px', // Same as defined in your CSS,
        backgroundColor : 'darkgrey'

    };

    return (
        <div className='container'>
            <h2 className='title'>{props.title}</h2>
            <Slider   {...settings} >
                {movies.map((obj,index) =>
                    <div className="slideSlick" key={index}>
                        <Suspense fallback={<div style={posterContainerStyle}></div>}>
                            <Poster posterPath={props.isLargeRow ? obj.poster_path : obj.backdrop_path}
                                posterStyle={posterStyle} 
                                movieName={props.isLargeRow ? obj.name : obj.title} 
                                release_date = {obj.release_date} 
                                popularity={obj.popularity} 
                                original_language = {obj.original_language}
                                overview = {obj.overview}
                                />
                        </Suspense>
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default RawPost
