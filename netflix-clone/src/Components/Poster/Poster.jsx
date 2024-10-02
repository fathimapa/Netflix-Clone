import React, { Fragment } from 'react'
import constant from '../../CONST/const'

function Poster({ posterPath, ...rest }) {

    const { posterStyle, movieName, release_date, popularity,original_language ,overview } = rest;
    return (
        <>
            <div className="img-poster">
                <img style={posterStyle} className='poster' alt='poster' src={`${constant.imageUrl}${posterPath}`} />
            </div>

        </>
    )
}

export default Poster
