import React, {useState} from 'react';
import "./Modal.css"

const Modal = ({active, setActive,addHandler}) => {
    const [service, setService] = useState("")
    const [price, setPrice] = useState("")
    const [date, setDate] = useState("")
    const onClickHandler = () =>{
        addHandler("", date, service, Number(price))
        setActive(false)
        setService("")
        setPrice("")
        setDate("")
    }
    const onChangeService = (e) =>{
        setService(e.target.value)
    }
    const onChangePrice = (e) =>{
        setPrice(e.target.value)
    }
    const onChangeDate = (e) =>{
        setDate(e.target.value)
    }

    return (
        <div className={active? "modal active": "modal"} onClick={()=> setActive(false)}>
            <div className={active? "modal-content active": "modal-content"} onClick={(e)=> e.stopPropagation()}>
                <div className={"modal-title"}>Please enter the service, price and date you paid for the subscription</div>
                <div className={"input-container"}>
                    <div>
                        <div>Service:</div>
                        <input className={"service-input"} placeholder={"Service name"} value={service} onChange={onChangeService}></input>
                    </div>
                    <div>
                        <div>Price:</div>
                        <input className={"price-input"} placeholder={"199"} value={price} onChange={onChangePrice}></input>
                    </div>
                    <div>
                        <div>Date:</div>
                        <input className={"date-input"} placeholder={"31"} value={date} onChange={onChangeDate}></input>
                    </div>
                </div>
                <div className={"modal-button"}> <button onClick={onClickHandler}>Add Sub</button> </div>

            </div>
        </div>
    );
};

export default Modal;