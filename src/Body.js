import React from 'react';
import './Body.css';
import Header from './Header';


function Body({spotify}) {
    return (
        <div className='body'>
            <Header spotify={spotify}/>

            <div className="body_info">
                <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Dissover Weekly</h2>
                    <p>Description...</p>
                </div>
            </div>
        </div>
    )
}

export default Body
