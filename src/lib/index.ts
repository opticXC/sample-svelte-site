// place files you want to import through the `$lib` alias in this folder.


export interface MenuItem{
    id: number,
    name:string,
    price:number
    sample:string
}

export interface CartEntry{
    item:MenuItem,
    count:number,
}

export interface OrdersItem{
    id:number,
    count:number,
}

export interface OrdersEntry{
    id:number,
    items:OrdersItem[],
    total:number,
}

