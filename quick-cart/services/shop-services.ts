
//ideally would be in a .env file for setup simplicity I am storing it here.
//I am aware it would probably be better in the .env
const endpoint: URL = new URL('https://fakestoreapi.com/products');

export async function RetrieveAllShopItems() {
    const response = await fetch(endpoint);

    if (!response.ok)
        throw new Error('Failed to fetch shop data!');

    const data = await response.json();
    return data;
}