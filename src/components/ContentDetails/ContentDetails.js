import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ContentDetails.css';

function ContentDetails({data}) {
    return(
    <div className='movieDetails'>
        {data.overview}
    </div>
)
}

export default ContentDetails;