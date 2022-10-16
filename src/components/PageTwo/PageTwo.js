import React, { Component } from "react";
import './PageTwo.css';
import image2 from './image2.jpeg';

class PageTwo extends Component {
    render() {
        return (
            <div>
                <h2>Snowboarder</h2>
                <img alt="image2" src={image2} />
                <p>This is also a really cool image!</p>
            </div>
        )
    }
}

export default PageTwo;