import React, { Component }  from 'react';

class Room extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            isLit: false
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        let newLit = this.state.isLit ? false : true;
        this.setState({ isLit: newLit });
    }

    render(){
        return (
            <div>
                <div className="room">the room is {this.state.isLit ? 'lit' : 'dark'}</div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        );
    }
}

export default Room;