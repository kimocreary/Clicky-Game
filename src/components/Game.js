import React from "react";
import { Component } from "react";
import data from "../data/data.json";
import Card from "./Card";


class Game extends Component {
    state = {
        // create all the variables and use as needed
        data: data
    }
    cardchosen=(id)=>{
        var data = this.state.data
        for(let i = 0; i<data.length; i++){
            if (data[i].id===id){
                if(data[i].clicked===false)
                data[i].clicked=true
                else{
                    alert("This card was selected.  You lose")
                }
            }
        }
        this.setState({data})
        console.log(this.state.data)
    }
    render() {
        return (
            <div>
                Start the Game
                {this.state.data.map((image, key) => (
                    <Card
                        id={image.id}
                        src={image.src}
                        clicked={image.clicked}
                        cardchosen={this.cardchosen}
                        key={key}
                    />
                ))}
            </div>
        )

    }
}
export default Game;