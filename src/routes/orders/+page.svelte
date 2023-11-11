<script lang="ts">
    import { PUBLIC_API_URL } from "$env/static/public";
    import type { MenuItem, OrdersEntry } from "$lib";
    import { get, writable } from "svelte/store";
    import { orderReloader } from "../../components/CartComponents/Stores/store";
    
    export let data;
    let orders:OrdersEntry[] = data.orders;
    let menu:MenuItem[] = data.menu;
    let renders = orders.reverse();
    
    setInterval(async()=>{
        const res = await fetch(PUBLIC_API_URL + "/data/orders");
        orders = await res.json();
        renders = orders.reverse();
    },1000);
    

</script>


<div class="ordersPage">
    {#each renders as order}
        <div class="orderEntry">
            <div class="entryContainer">
                <h1>No.{order.id}</h1>
                {#each order.items as item }
                <h2>
                    {menu[item.id-1].name} x{item.count}
                </h2>
                {/each}
            </div>
            <div>
                <h0>Total</h0>
                <h2>₹{order.total}</h2>
            </div>
        </div>
    {/each}
</div>


<style>
    .ordersPage{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content:center;
        align-content: center;
        align-items: center;
        padding: 10px;
        width: 100%;
    }
    .orderEntry{
        display: flex;
        flex-direction: row;
        padding: 10px;
        max-width: 70vw;
        min-width: 50vw;
        justify-content: center;
        align-content: center;
        border: 2px solid black;
        border-radius: 10px;

    }
    .entryContainer{
        display: flex;
        flex-direction: column;
        border-right: 1px solid black;
        min-width: 80%;
    }

    h1{
        color: black;
        border-color: black;
        border-bottom: 1px solid black;
    }
    h2{
        color: rgba(5, 4, 4, 0.849);
    }
</style>