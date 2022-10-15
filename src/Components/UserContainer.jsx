import React from 'react';
import "./UserContainer.css"

const UserContainer = (props) => {



    return (
        <div className={"user-container"}>
            <div className={"user-description"}>
                <img
                    src={"https://sun9-27.userapi.com/impg/J5MtHWkckxNEcIVdpf14nlEW2i0e97pfKAYO0w/qfLi1DNqaFs.jpg?size=1080x1079&quality=95&sign=8cab8d213c96d2820803a481a350463e&type=album"}
                    alt={"avatar"}/>
                <div className={"user-name"}>
                    <div>User Name</div>
                    <button>log out</button>
                </div>
            </div>
            <div className={"profit-container"}>
                <div>Your Profit</div>
                <div className={"total-count"}>{props.store.Profit}</div>
                <div> RUB/month</div>
            </div>
            <div className={"vertical-line"}/>
            <div className={"profit-container"}>
                <div>Subscriptions</div>
                <div className={"total-count"}>{props.total}</div>
                <div> RUB/month</div>
            </div>
            <div className={"spend-container"}>
                <div className={"spend-title"}>
                    on subscriptions, you spend:
                </div>
                <div className={"circle"}>
                    <div className={"percents"}>{props.percent + "%"}</div>
                    <div>of income</div>
                </div>
            </div>
        </div>
    );
};

export default UserContainer;