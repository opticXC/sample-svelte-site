<script lang="ts">

    export let open:boolean;
    
</script>

<div class="cartMenu">
    <button class="menuButton" type="submit" on:click={()=> open = !open}>
        <img class="menuImage"  src="/cart.png" alt="toggle cart">
    </button>

</div>

<style>
    .cartMenu{
        min-width: max-content;
        min-height: auto;
        max-height: fit-content;

    }
    .menuButton{
        display: flex;
        background: #F4E1D5;
        border: 1px solid #F4E1D5;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        align-content: center;

    }

    .menuImage{
        display: block;

        max-width: 5vh;
        max-height: 5vh;

        padding: 5px;
    }

</style>