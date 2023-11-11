<script>
    import CardWrapper from "../../components/CartComponents/CardWrapper.svelte";

    export let data;
</script>



<CardWrapper items={data.menu}/>
