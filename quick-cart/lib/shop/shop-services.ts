
import { CartData } from "@/global-types/shop/shop-types";

//ideally would be in a .env file for setup simplicity I am storing it here.
//I am aware it would probably be better in the .env
const endpoint: URL = new URL('https://fakestoreapi.com/products');

export async function RetrieveAllShopItems() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            console.error('Failed to fetch shop data!', response.status);
            return [];
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Unknown Fetch Error: ', error);
        return [];
    }
}

export async function CheckoutCart(items: CartData[]) {
    //imagine making a call to hte backend, it would verify pricing and everything
    //so all it needs is the id and quantity
    //just print it to pretend
    console.log(items);
    alert("JSON cart data logged in console!");
}