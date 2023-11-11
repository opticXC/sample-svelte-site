import { PUBLIC_API_URL } from "$env/static/public";



export async function load(){
    const response = await fetch(PUBLIC_API_URL + "/data/orders");
    const menu = await fetch(PUBLIC_API_URL + "/data/menu");
    return {
        orders: await response.json(),
        menu: await menu.json()
    }
}