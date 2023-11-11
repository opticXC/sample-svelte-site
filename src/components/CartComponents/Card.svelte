<script lang="ts">
    import {get} from "svelte/store";
    import type { CartEntry, MenuItem } from "$lib";
    import { addToCart } from "./Stores/store";


    export let item:MenuItem;
    let {id,name, price, sample } = item;
    let image = `img/${sample}`;

    function AddToCart(){
        addToCart(item);
    }
</script>

<div class="menuEntry">
  <img class="entryImage" src="/food/{item.sample}" alt="{item.name}">
  <div>
    <h1 class="entryText">
      {item.name}
    </h1>
    <h1 class="entryText">
      ₹ {item.price} ~
    </h1>
  </div>
    <button class="entryButton" type="submit" on:click={AddToCart} title="Add to cart">
        <img class="cartimg" src="/cart.png" alt="add to cart">
    </button>
</div>



<style>
  .menuEntry{
        display: flex;
        flex-direction: column;
        width: 30vh;
        height: 40vh;
        background: linear-gradient(0.30turn, #1af5bec2, #06d4f0e7 );
        border-radius: 5px;
        margin: 0 auto;
        padding: 1.0vh;
    }
    .entryImage{
      min-width: 25vh;
      min-height: 28vh;

      background: white;
      border-radius: 5px;
      outline: 2px auto;
      outline-color: black;
    }

    .entryButton{
        display: flex;
        flex-direction: row;
        padding: 0.1vh;
        width: 100%;
        height: auto;
        font-size: 0.9rem;
        border-radius: 5px;
        background: rgb(215, 236, 236);
        appearance: none;
        display: flex;
        align-content: center;
        justify-content: center;
    }

    .entryButton:hover{
        background: linear-gradient(to right,rgb(9, 255, 255), rgb(193, 195, 197) );
        
    }
    .entryText{
      font-weight: bold;
      font-size: 0.8vw;
      color: rgb(0, 0, 0);
    }

    .cartimg{
      max-height: 5vh;
      max-width: 5vh;
    }
</style>