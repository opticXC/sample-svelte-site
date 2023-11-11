<script lang="ts">
    import { get } from "svelte/store";
    import { cart, createOrder } from "./Stores/store";
    import { onMount } from "svelte";
    import { Modal, Content, Trigger } from "sv-popup";

    export let open: boolean;

    function totalPrice(): number {
        const items = get(cart);
        let sum = 0;
        items.forEach((itm) => {
            sum += itm.count * itm.item.price;
        });
        return sum;
    }

    let retOrder = [];
    $: orderText = "";
    async function postOrder() {
        const res = await createOrder();
        cart.set([]);
        console.log(JSON.stringify(res));
        retOrder.push(res);
        orderText = "Your order number is {res.id}";
    }
</script>

{#if open}
    <div class="cart">
        <div class="heading">
            <h1>Cart</h1>
        </div>
        <div class="entryContainer">
            {#each $cart as entry}
                <div class="cartEntry">
                    <h2 class="entryTag">{entry.item.name} x{entry.count}</h2>
                    <h2 class="entryPrice">
                        ₹{entry.item.price}x{entry.count} = ₹{entry.item.price *
                            entry.count}
                    </h2>
                </div>
            {/each}
        </div>
        <div class="cartFooter">
            <h6>
                {#key $cart}
                    Total: ₹{totalPrice()}
                {/key}
            </h6>
            <Modal small>
                <Content>
                <div class="checkoutMenu">
                    <div class="checkoutHeader">
                        <h1 class="checkoutText">Checkout</h1>
                    </div>
                    <div class="checkoutBody">
                        {#each $cart as entry}
                            <div class="checkoutItem">
                                <h6>{entry.item.name} x{entry.count} == {entry.count} x ₹{entry.item.price} </h6>
                            </div>
                        {/each}
                    </div>
                    <div class="checkoutFooter">
                        {#key $cart}
                            <h4>Total : ₹{totalPrice()}</h4>
                        {/key}
                        >
                        <img
                            src="/payment-banner.png"
                            alt="Choose payment option"
                        />

                        <button
                            class="checkoutButton"
                            type="submit"
                            on:click={postOrder}
                        >
                            <h4>Place order</h4>
                        </button>
                            <text>{orderText}</text>
                    </div>
                </div>
                </Content>
                <Trigger>
                    <button class="checkoutButton">
                        <h5 class="buttonText">Checkout</h5>
                    </button>
                </Trigger>
            </Modal>
        </div>
    </div>
{/if}

<style>
    .spacer {
        min-width: 33%;
    }
    .checkoutMenu {
        display: flex;
        flex-direction: column;
        max-width: max-content;
        background: rgba(255, 255, 255, 0.27);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10.3px);
        border: 1px solid rgba(255, 255, 255, 1);
        padding: 10px;

    }
    .checkoutBody {
        display: flex;
        flex-direction: column;
    }
    .checkoutHeader {
        border-bottom: 1px solid rgba(53, 52, 52, 0.692);
    }
    .checkoutText{
        font-size: 3vw;
    }

    .checkoutFooter {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }

    .checkoutItem {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        border-bottom: 2px solid rgba(27, 18, 18, 0.747);
    }

    .cart {
        display: flex;
        background: transparent;
        flex-direction: column;
        min-width: 24vw;
        outline: auto;
        outline-color: black;
        outline-offset: -2px;
    }
    .entryContainer {
        display: flex;
        flex-direction: column;
        gap: 0.5vh;
        padding: 10px;
    }
    .cartEntry {
        display: flex;
        min-width: 100%;
        gap: 10px;
    }
    .entryTag {
        min-width: 70%;
        justify-self: flex-start;
    }
    .entryPrice {
        justify-self: flex-end;
        min-width: 6vh;
        padding: 4px;
    }

    .cartFooter {
        padding: 10px;
        display: flex;
        flex-direction: column;
        color: black;
    }

    .heading {
        display: flex;
        align-content: center;
        justify-content: center;
        border: 1px solid black;
    }

    .checkoutButton {
        text-decoration: none;
        background-color: rgb(96, 96, 235);
        transition: 300ms ease-in-out;
    }
    .checkoutButton:hover {
        background-color: navy;
    }
    .buttonText {
        color: white;
    }

    h2 {
        color: black;
    }
    h1 {
        color: black;
        font-size: 5vw;
    }
</style>
