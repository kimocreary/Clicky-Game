import React from "react";
function Card(props){
 return(
     <img src={props.src} height = "200" width = "200" alt = "img" onClick={()=>props.cardchosen(props.id)}
/>
 )
}
export default Card;