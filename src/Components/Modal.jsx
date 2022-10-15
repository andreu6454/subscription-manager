import React, {useState} from 'react';
import "./Modal.css"

const Modal = ({active, setActive,addHandler}) => {
    const [service, setService] = useState("")
    const [price, setPrice] = useState("")
    const [date, setDate] = useState("")
    const [error,setError] = useState("")
    const onClickHandler = () =>{
        if(service !== "" && price !== "" && date !== ""){
            addHandler("", date, service, Number(price))
            setActive(false)
            setService("")
            setPrice("")
            setDate("")
        } else {
            setError("You need to fill the fields")
        }

    }
    const onChangeService = (e) =>{
        if(error){
            setError(null)
            setService(e.target.value)
        } else {
            setService(e.target.value)
        }

    }
    const onChangePrice = (e) =>{
        if(error){
            setError(null)
            setPrice(e.target.value)
        } else {
            setPrice(e.target.value)
        }

    }
    const onChangeDate = (e) =>{
        if(error){
            setError(null)
            setDate(e.target.value)
        } else {
            setDate(e.target.value)
        }

    }

    return (
        <div className={active? "modal active": "modal"} onClick={()=> {
            setActive(false)
            setError(null)
            setService("")
            setPrice("")
            setDate("")
        }}>
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
                <div className={error? "modal-button error": "modal-button"}>
                    {error? error: <button onClick={onClickHandler}>Add Sub</button>}

                </div>

            </div>
        </div>
    );
};

export default Modal;