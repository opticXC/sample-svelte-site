<script>
    import Cart from "../components/CartComponents/Cart.svelte";
    import Hamburger from "../components/Hamburger.svelte";

    export let sidebar_open=false;
</script>

<div class="mainContainer">
    <div class="navbar">
        <ul>
        <li class="navbar-li">
            <form action="/">
                <button class="navbar-item">
                    <h1>Home</h1>
                </button>
            </form>
            <a href="/menu" class="navbar-item">Menu</a>
            <a href="/orders" class="navbar-item">Orders</a>
        </li> 
        </ul>
        
        <Hamburger bind:open={sidebar_open} />
    </div>
    <div class="content">
        <slot/>
        <Cart bind:open={sidebar_open}/>
    </div>
</div>

<style>
    .mainContainer{
        min-height: 100vh;
        background: rgb(244,225,213);
        background: linear-gradient(145deg, rgba(244,225,213,1) 0%, rgba(238,191,176,1) 79%, rgba(229,136,117,1) 79%, rgba(221,90,68,1) 100%);
        color: white;
        display: flex;
        flex-direction: column;
    }
    .content{
        display: flex;
        flex-direction: row;

    }
    .navbar{
        width: 100%;
        height: auto;
        background: rgba(0, 0, 0, 0.685);
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding: 1vh;
        gap: 10px
    }
    .navbar-li{
        display: flex;
        flex-direction: row;
        list-style: none;
        align-items: center;
        width: 100%;
        gap: 20px;
    }

    .navbar-item{
        display: flex;
        font-weight: bold;
        background: #18584d;
        border: 2px solid #F4E1D5;
        width: 25vw;
        height: 5vh;
        max-height: 5vh;
        color: #F4E1D5;
        border-radius: 10px;
        justify-content: center;
        align-content: center;
        align-items: center;
        text-decoration: none;
        
        transition: 200ms ease-in-out;
    }
    .navbar-item:hover{
        background: #F4E1D5;
        color:#18584d;
    }


</style>