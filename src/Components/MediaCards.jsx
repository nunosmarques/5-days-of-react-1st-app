import React, { Component } from 'react';
import './MediaCards.css';

class MediaCards extends Component {

    render() {
        const {title, body, imageUrl} = this.props;

        return (
          <div>
              <h2>{title}</h2>
              <p>{body}</p>
              <img alt="React" className="imgStyle" src={imageUrl}/>
          </div>
      )
    };
}

export default MediaCards;