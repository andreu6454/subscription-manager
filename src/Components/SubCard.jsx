import React from 'react';
import "./SubCard.css"

const SubCard = (props) => {
    const onClickHandler = () =>{
        props.deleteHandler(props.id)
    }
    return (
        <div className={"sub-card"}>
            <img src={"https://sun9-27.userapi.com/impg/J5MtHWkckxNEcIVdpf14nlEW2i0e97pfKAYO0w/qfLi1DNqaFs.jpg?size=1080x1079&quality=95&sign=8cab8d213c96d2820803a481a350463e&type=album"} className={"pict"} alt={"avatar"}/>

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
};

export default SubCard;