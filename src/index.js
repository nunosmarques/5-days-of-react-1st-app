import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import Aggregator from './Components/Aggregator'

class LastOne extends Component{

    render(){
        return (
            <div>
                <Aggregator/>
            </div>
        );
    }
}

ReactDOM.render(<LastOne />, document.getElementById('root'));