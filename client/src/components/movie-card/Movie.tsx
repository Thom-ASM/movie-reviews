import React from 'react';
import "./card.css"

interface Props{
    name:string,
    imgsrc?:string,
    rating:number,
    synopsis?:string
}

const onclickHandler:React.MouseEventHandler<HTMLDivElement>=(event)=>{
    console.log("clicked")


}
export const Movie:React.FC<Props>=({name,imgsrc,rating,synopsis}) =>{
    return (
        <div className="card-container" onClick={onclickHandler}>
            <img src={imgsrc} alt="Movie Image"/>
            <div className="lower-content">
                <h1>{name}</h1>
                <p>{synopsis}</p>
            </div>          
        </div>
    );
}

export default Movie;