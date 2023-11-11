<div class="homeContainer">
    <div class="header">
            <img class="logoImage" src="/logo-transparent.png" alt="Bite Bistro Logo"> 
            <h1 class="logoContext"></h1>
    </div>
    <div class="content">
        <h1>
            In the hallowed halls of this academia, the college canteen has long been a hub of substenance, comaraderie and hurried meals between lectures. A true hub for the sudent life at MIET
            <br>
            <br>
            We at Bite Bistro have come together with the plan to modernize this huge and important part of out student life <br>
            With the  Goals
            <ul class="list-ul">
                <li class="listtext">Reduces the time spent in waiting at the canteen</li>
                <li class="listtext">Creating a system that's fast and easy to use by everyone</li>
            </ul>
        </h1>

    </div>
    
    <div class="footer">

    </div>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');


    .homeContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .header{
        display: inline-flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        min-width: 100vw;
        min-height: fit-content;
        max-height: fit-content;
        background-color: rgba(255, 255, 255, 0.37);
        backdrop-filter: blur(15px);
        padding: 5px;
        gap: 2px;
        
    }
    .logoImage{
        display: flex;
        max-width: 20vw;
        max-height: fit-content;
        image-rendering: optimizeSpeed;
        border-radius: 5px;
    }
    .logoContext{
        color: #DD5A44;
        font-family: "Lobster", "sans-serif";
        font-weight: lighter;
        font-size: 2vh;
    }
    .content{
        backdrop-filter: blur(15px);
        min-height: 65vh;

    }
    h1{
        display: flex;
        flex-wrap: wrap;
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 3vh;
        align-content: center;
        justify-content: center;
        align-items: center;
        color: #DD5A44;
        text-align: center;
        margin: 10px 20vw;
        transition: 750ms, ease-in;
    }

    li{
        list-style: disc;
        font-size: 1vw;
        color: #362929;
    }

</style>