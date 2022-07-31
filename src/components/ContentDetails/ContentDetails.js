import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ContentDetails.css';

function ContentDetails({data}) {
    const [show, setShow] = useState(false);
    console.log(data);

    function handleOpen() {
        setShow(true);
    };

    function handleClose(){
        setShow(false);
    }

    return(
        <div>
            <div onClick={handleOpen}>
                <div onClick={handleClose}>
                    {<img src={data.poster_path}/>}
                </div>
            </div>
        </div>
    )
}

export default ContentDetails;