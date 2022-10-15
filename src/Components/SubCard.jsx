import React, {memo} from 'react';
import "./SubCard.css"
import "./Colors.css"

const SubCard = memo((props) => {
    const onClickHandler =() =>{
        props.deleteHandler(props.id)
    }
    const randomColor = props.colors[Math.floor(Math.random()*6)]
    return (
        <div className={"sub-card"}>
            <div className={`sub-card-img ${randomColor}`}>{props.name[0]}</div>

            <div className={"sub-name"}>
                {props.name}
            </div>
            <div className={"sub-price"}>
                {props.price + " rub"}
            </div>
            <div className={"sub-date"}>
                {props.date + "th"}
            </div>
            <div className={"delete-button"} onClick={onClickHandler}>X</div>
        </div>
    );
});

export default SubCard;