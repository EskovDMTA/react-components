import React from 'react';
import "./style.css"

class GiphyComponent extends React.Component {
    render() {
        return (
            <div className={"giphy_container"}>
                <img src="src/assets/index.webp" alt="yoda"/>
            </div>
        );
    }
}

export default GiphyComponent;
