import React from 'react';
import '../assets/styles/layout.scss';


export default function LoadingScreen () {
    return(
        <div className="bgLoading">
            <h1  contentEditable="false" role='textbox' aria-multiline='true' >One moment while we fetch your content!</h1>
        </div>
    );
}

