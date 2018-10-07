import React, {Component} from 'react'
import Gate from "./Gate";
import MediaCards from "./MediaCards";
import Room from "./Room";
import logo from '../logo.svg'
import us from '../imgs/us.jpg'

class Aggregator extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            img: logo
        }

        this.changeImage = this.changeImage.bind(this);
    }

    changeImage(){
        let aux = this.state.img === logo ? us : logo;
        this.setState({ img: aux });
    }

    render(){
        return(
            <div>
                <MediaCards title="Teste de Agregação" body="Corpo do Media Cards" imageUrl={this.state.img}/>
                <button onClick={this.changeImage}>Change Image</button>
                <hr/>
                <Gate/>
                <hr/>
                <Room/>

            </div>
        );
    };
}

export default Aggregator;