import {v1} from "uuid";

export const store = {
        subs: [
                {id: v1(), name: "Yandex.Plus", price: 199, date: 30},
                {id: v1(), name: "Vk", price: 50, date: 7},
                {id: v1(), name: "Percents", price: 400, date: 30}
        ],
        Profit: 1000,
}

export const colors = ["red", "yellow", "blue", "green", "purple", "black"]