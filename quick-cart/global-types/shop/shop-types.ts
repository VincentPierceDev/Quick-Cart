
export interface ItemRating {
    rate: number;
    count: number;
}

type category = "men's clothing" | "jewelery" | "electronics" | "women's clothing"

export interface ItemData {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: category;
    rating: ItemRating;
}

export interface CartData {
    id: number;
    quantity: number;
}