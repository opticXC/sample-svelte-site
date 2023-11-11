<script lang="ts" async="true">
    import type { MenuItem } from "$lib";
    import Card from './Card.svelte';
    export let items:MenuItem[];

    let search_string = "";
    let renders = items;
    function updateSearch(){
      search_string = search_string.replace(" ","");
      renders = items.filter((itm) => itm.name.toLowerCase().includes(search_string.toLowerCase()));
    }

</script>
<div class="MenuPage">
  <input id="search-box" type="text" class="searchbox" placeholder="search" bind:value={search_string} on:input={updateSearch} >
  <div class="menuContainer">
    
    {#each renders as item}
        <Card {item} />
      {/each}
  </div> 
</div>  



<style>
    .MenuPage{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      padding: 10px;
      width: 100%;
    }

    .menuContainer{
        display: flex;
        width: max-width;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 5px;
        
    }
    .searchbox{
      align-self: center;
      outline: none;
      border-radius: 25px;
      border: 1px solid #DD5A44;
      padding: auto;
      background-color: transparent;
      text-align: center;
      transition: 750ms ease-in-out;
      transform-style: preserve-3d;
      color: #DD5A44;
    }
    .searchbox:hover,
    .searchbox:focus{
      padding: 0 0;
      border: none;
      border-bottom: 1px solid #DD5A44;
      border-radius: 0;
    }
</style>