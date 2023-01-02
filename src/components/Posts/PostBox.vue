<template>
    <div class="tables">
        <div class="All-Table">

            <div class="Name-Head">
                <p class="User-Name">
                    <router-link class="Router-Link" to="/PostPage">{{User.first_name}}</router-link>
                </p>
            </div>

            <div class="UserName-Head">
                <p>{{User.last_name}}</p>
            </div>

            <div class="Email-Head">
                <p>{{User.email}}</p>
            </div>

            <div class="Phone-Head">
                <p>{{User.avatar}}</p>
            </div>

        </div>
       

    </div>
</template>
<script>
    export default {
        name: 'UserBox',

        props: {
            User: Object
        },
        setup() {
           
            function remove() {
                
                
                console.log();
            }
            remove()
        }

    }
</script>

<style>
    :root {
        --UserName-Color: #f1f1f1fa
    }

    .tables {

        text-align: center;
        margin: 10px;

    }

    .tables p,
    .User-Name {


        border: 1px ridge #dbdadaa2;
        padding: 10px;

    }

    .tables div .User-Name {
        background-color: var(--UserName-Color);
    }

    .tables div .User-Name .Router-Link {
        text-decoration: none;
        color: black;
    }
</style>