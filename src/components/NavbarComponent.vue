<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            route: this.$route,
            showNavbar: true,
            windowWidth: window.innerWidth // Initialize window width
        }
    },
    watch: {
        $route(to, from) {
            this.checkNavbarVisibility(to.name);
        },
        windowWidth(newWidth) {
            this.checkNavbarVisibility(this.$route.name);
        }
    },
    methods: {
        checkNavbarVisibility(routeName) {
            if (routeName === "Playing" && this.windowWidth < 1000) {
                this.showNavbar = false;
            } else {
                this.showNavbar = true;
            }
        },
        updateWindowWidth() {
            this.windowWidth = window.innerWidth;
        }
    },
    mounted() {
        window.addEventListener('resize', this.updateWindowWidth);
        this.checkNavbarVisibility(this.$route.name);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateWindowWidth);
    }
}
</script>

<template>
    <nav class="navbar" v-if="showNavbar">
        <img src="/assets/PjanologoNew.png" alt="logo" id="logo">
        <ul>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/profile">Profile</RouterLink>
            </li>
            <li>
                <RouterLink to="/facts">Facts</RouterLink>
            </li>
            <li>
                <RouterLink to="/lessons">Lessons</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
#logo {
    height: 150px;
    border-radius: 50%;
    margin: 0 0 -75px 10px;
    z-index: 1;
}

nav {
    background-color: #474554;
}

nav ul {
    margin: 0 auto 0 10px;
    list-style-type: none;
    padding: 0px;
    overflow: hidden;
    background-color: #474554;
}

.navbar a {
    text-decoration: none;
    text-align: center;
    color: white;
    margin: 5px;
    padding: 8px;
    display: block;
}

.navbar li:hover {
    background-color: black;
    border-radius: 15%;
}

.navbar li {
    float: left;
    display: inline;
}

@media(max-width: 1000px) {
    #logo {
        height: 70px;
        margin: 0 0 -20px 5px;
    }
}
</style>
