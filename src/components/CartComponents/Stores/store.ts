import { PUBLIC_API_URL } from "$env/static/public";
import type { CartEntry, MenuItem, OrdersEntry } from "$lib";
import { get, writable, type Writable } from "svelte/store";


export const cart:Writable<CartEntry[]> = writable([])

export const orderReloader:Writable<boolean> = writable(true);

export function addToCart(item:MenuItem){
    const inCart = get(cart);
    const res = inCart.filter(itm => itm.item.id == item.id);

    if (res.length > 0){
        inCart.flatMap(itm => {
            if (itm.item.id == item.id){
                itm.count += 1;
            }
        })
    }else{
        inCart.push({item:item,count:1});
    }
    cart.set(inCart);
}

export async function createOrder(){
    const items = get(cart);

    
    let request = {
        items: []
    }

    items.forEach( (item)=>{
        request.items.push({id:item.item.id ,count:item.count});
    });
    
    console.log(JSON.stringify(request));
    const response = await fetch(PUBLIC_API_URL + "/data/order", {
        method: "POST",
        headers: [
            ["Content-Type", "application/json"]
        ],
        body: JSON.stringify(request)
    });

    return await response.json();
}