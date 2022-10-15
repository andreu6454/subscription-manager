import {v1} from "uuid";

export const store = {
        subs: [
                {id: v1(), avatar: "", name: "Yandex.Plus", price: 199, date: 30},
                {id: v1(), avatar: "", name: "Vk", price: 50, date: 7},
                {id: v1(), avatar: "", name: "%", price: 400, date: 30}
        ],
        Profit: 1000,
}