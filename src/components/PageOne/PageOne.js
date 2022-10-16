import React, { Component } from "react";
import './PageOne.css';
import image1 from './image1.jpeg';

class PageOne extends Component {
    render() {
        return (
            <div>
                <h2>One World Trade Center</h2>
                <img alt="image1" src={image1} />
                <p>Look at this cool image!</p>
            </div>
        )
    }
}

export default PageOne;