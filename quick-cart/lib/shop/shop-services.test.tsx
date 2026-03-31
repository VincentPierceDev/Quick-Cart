
import { RetrieveAllShopItems, CheckoutCart } from "./shop-services";
import { CartData } from "@/global-types/shop/shop-types";
import { ItemData } from "@/global-types/shop/shop-types";

describe("Shop Services", () => {
    beforeEach(() => {
        global.fetch = jest.fn(); //for fetching
        global.alert = jest.fn(); //for checkout
        console.log = jest.fn(); //for checkout
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    //Retrieve Shop Items Testing

    test("RetrieveAllShopItems return product data properly", async () => {
        const testProducts: ItemData[] = [
            {
                id: 1,
                title: "Classic White Tee",
                description: "A comfortable and breathable cotton T-shirt for daily wear.",
                category: "men's clothing",
                price: 19.99,
                image: "https://example.com/classic-white-tee.jpg",
                rating: { rate: 4.2, count: 120 }
            },
            {
                id: 2,
                title: "Cozy Knit Sweater",
                description: "Soft acrylic yarn sweater with a relaxed fit for cool weather.",
                category: "women's clothing",
                price: 49.5,
                image: "https://example.com/cozy-knit-sweater.jpg",
                rating: { rate: 4.8, count: 230 }
            },
            {
                id: 3,
                title: "Sport Runner Sneakers",
                description: "Lightweight running shoes with cushioned soles and breathable upper.",
                category: "men's clothing",
                price: 69.0,
                image: "https://example.com/sport-runner-sneakers.jpg",
                rating: { rate: 4.6, count: 340 }
            }
        ];

        //fake fetch request from the items above
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => testProducts
        });

        const result = await RetrieveAllShopItems();

        expect(result).toEqual(testProducts);
        expect(fetch).toHaveBeenCalledWith(expect.any(URL), expect.objectContaining({
            cache: 'default',
            headers: expect.objectContaining({'User-Agent': expect.any(String)})
        }));
    });

    //Retrieve Shop Items Testing

    //---------------------------

    //Checkout Cart Testing

    test("Checkout logs correctly and calls alert (fake backend request)", async () => {
        const items: CartData[] = [
            {id: 1, quantity: 2},
            {id: 2, quantity: 300}
        ];

        await CheckoutCart(items);

        expect(console.log).toHaveBeenCalledWith(items);
        expect(alert).toHaveBeenCalledWith("JSON cart data logged in console!");
    })

    //Checkout Cart Testing
})