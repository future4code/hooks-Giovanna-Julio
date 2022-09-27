import { Product } from "../models/Product";
import { PurchaseDB } from "../models/Purchase";
import { User } from "../models/User";


export const users = [
    new User ("101", "astrodev@gmail.com", "bananinha"),
    new User("102", "fulano@gmail.com", "qwerty00"),
    new User("103", "ciclana@gmail.com", "asdfg123")
];

export const products = [
    new Product ("201", "Webcam", 99.00),
    new Product("202", "Teclado Gamer", 250.00),
    new Product("203", "Monitor", 459.99),
    new Product("204", "Impressora", 275.25),
    new Product("205", "Mouse Gamer", 399.99)
];

export const purchases: PurchaseDB[] = [
    {
        id: "301",
        user_id: "101",
        product_id: "201",
        quantity: 1,
        total_price: 99.00
    },
    {
        id: "302",
        user_id: "101",
        product_id: "203",
        quantity: 1,
        total_price: 459.99
    },
    {
        id: "303",
        user_id: "101",
        product_id: "202",
        quantity: 2,
        total_price: 500.00
    }
];