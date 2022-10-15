import React, {memo} from 'react';
import "./SubsContainer.css"
import SubCard from "./SubCard";

const SubsContainer = memo((props) => {
    const addHandler =() =>{
        props.setModalActive(true)
    }
    return (
        <div className={"subs-container"}>
            <div className={"header"}>
                <div className={"title"}>Subscriptions</div>
                <button className={"add-button"} onClick={addHandler}> add</button>
            </div>
            <div className={"tags"}>
                <div className={"tag-name"}>Service</div>
                <div className={"tag-name"}>Price (rub/month)</div>
                <div className={"tag-name"}>Payment every month on:</div>
            </div>
            <div className={"vertical-line"}></div>
            <div>
                {props.state?
                    props.state.map((mappedSub) => (
                    <SubCard key={mappedSub.id} id={mappedSub.id} date={mappedSub.date} name={mappedSub.name}
                    price={mappedSub.price} deleteHandler={props.deleteHandler} colors={props.colors}/>
                )): <div className={"message"}>Click "add" to add new subscription</div>}
            </div>
        </div>
    );
});

export default SubsContainer;