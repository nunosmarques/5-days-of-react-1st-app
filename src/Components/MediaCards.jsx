import React, { Component } from 'react';


class MediaCards extends Component {
    

    constructor(props) {
        super(props);
    }

    render() {
        const {title, body, imageUrl} = this.props;

        return (
          <div>
              <h2>{title}</h2>
              <p>{body}</p>
              <img src={imageUrl}/>
          </div>
      )
    };
}

export default MediaCards;