import './App.css';
import SubsContainer from "./Components/SubsContainer";
import UserContainer from "./Components/UserContainer";
import {colors, store} from "./store/store";
import {v1} from "uuid";
import {useEffect, useState} from "react";
import Modal from "./Components/Modal";

function App() {
    const [modalActive, setModalActive] = useState(false)
    const [state, setState] = useState(store.subs)
    const [totalCount, setTotalCount] = useState(()=>{
        let count = 0;
        store.subs.forEach(el => count += el.price)
        return count
    })
    const [percent, setPercent] = useState(()=>{
        return Math.floor(totalCount/store.Profit*100)
    })

    useEffect(()=>{
        setPercent(Math.floor(totalCount/store.Profit*100))
    },[totalCount])

    const deleteHandler = async (id) =>{
        let count = 0
        state.forEach(el => el.id === id? count += el.price: count += 0)
        count -= totalCount
        setTotalCount(-count)
        setState(state.filter(el => el.id !== id))
    }
    const addHandler = (avatar, date, name, price) =>{
        let newSub = {id: v1(), avatar: avatar, date: date, name: name, price: price,}
        setState([...state, newSub])
        let count = totalCount + price
        setTotalCount(count)
    }

    return (
        <div className="App">
            <Modal active={modalActive} setActive={setModalActive} addHandler={addHandler}/>
            <SubsContainer state={state} deleteHandler={deleteHandler} addHandler={addHandler} setModalActive={setModalActive} colors={colors}/>
            <div className={"line"}/>
            <UserContainer store={store} total={totalCount? totalCount: 0} percent={percent}/>
        </div>
    );
}

export default App;
