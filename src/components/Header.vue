<template>
    <div class="Header">
        <div class="DividedHeader">
            <div class="left-Header">
                <!-- <img src="../Img/pngfind.com-hand-holding-png-841968.png" alt="hand"> -->
                <router-link class="Header-Item" to="/">Home</router-link>
                <router-link class="Header-Item" to="/UserPage">User</router-link>
                <router-link class="Header-Item" to="/PostPage">Post</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "app-Header"
    }
</script>
<style>
   

    :root {
        --Header-Color: #FFCDEA;
        --Font-Color: #838392;
    }

    @keyframes example {
        0% {
            background-color: rgba(255, 255, 255, 0.877);
        }

        100% {
            background-color: #d1d1d1ea;
        }
    }

    .router-link-active {
        color: rgba(0, 0, 0, 0.9) !important;
        border-radius: 3px;
        animation-name: example;
        animation-duration: 4s;
    }

    .Header .DividedHeader {
        height: 60px;
        background-color: var(--Header-Color);
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: space-between;
        align-items: center;

    }

    .Header .DividedHeader .left-Header {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .Header .DividedHeader img {
        width: 10%;
        height: 80%;

    }

    .Header .DividedHeader .Header-Item {
        padding: 20px;
        text-decoration: none;
        color: var(--Font-Color)
    }
</style>