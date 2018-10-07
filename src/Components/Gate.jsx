import React, { Component } from 'react';


class Gate extends Component {

    render() {
        const {isOpen} = this.props;

        return (
          <div>
            <h1>{isOpen ? "Open" : "Closed"}</h1>
          </div>
      )
    };
}

export default Gate;