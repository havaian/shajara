<template>
  <div id="content-wrapper">
        <!-- 1st menu type (vertical, left side, static) -->
        <div class="menu">
            <div class="menu-wrapper">
              <router-link v-for="item in menuItems" :key="item.key" :to="item.link" v-model="item.key">
                  <img class='nav-icon' :src="item.icon" :alt="item.alt">
              </router-link>
            </div>
            <div class="page-title-container">
              <p id="page-title"></p> 
            </div>
        </div>
        <div class="site-content">
          <router-view></router-view>
        </div>
        <!-- 2nd menu type (hidden, button, dynamic)-->
        
        <!-- <div class="menu-icon">
          <span class="menu-icon__line menu-icon__line-left"></span>
          <span class="menu-icon__line"></span>
          <span class="menu-icon__line menu-icon__line-right"></span>
        </div>

        <div class="menu nav">
            <div class="menu-wrapper nav__content">
              <ul class="nav__list">
                <router-link class="nav__list-item" v-for="item in menuItems" :key="item.key" :to="item.link" v-model="item.key">
                    <img class='nav-icon' :src="item.icon" :alt="item.alt"><p class='nav-title'>{{item.title}}</p>
                </router-link>
              </ul>
            </div>
        </div>

        <div class="company-logo">
          <img :src="companyLogo.icon" alt="">
        </div>

        <div class="site-content">
          <router-view></router-view>
        </div> -->
    </div>
</template>

<script>

  export default {
    data() {
      return {
        menuItems: [
          {
            key:'main',
            title: 'Main',
            icon: './assets/home.png',
            alt: 'Main',
            link: '/',
          },
          {
            key:'profile',
            title: 'Profile',
            icon: './assets/user.svg',
            alt: 'Profile Icon',
            link: 'profile',
          },
        ],
      };
    },
    mounted() {

      // Js for the 2nd menu type

      // const app = (() => {
      //   let body;
      //   let menu;
      //   let menuItems;
        
      //   const init = () => {
      //     body = document.querySelector('body');
      //     menu = document.querySelector('.menu-icon');
      //     menuItems = document.querySelectorAll('.nav__list-item');

      //     applyListeners();
      //   }
        
      //   const applyListeners = () => {
      //     menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
      //   }
        
      //   const toggleClass = (element, stringClass) => {
      //     if(element.classList.contains(stringClass))
      //       element.classList.remove(stringClass);
      //     else 
      //       element.classList.add(stringClass);
      //   }
        
      //   init();

      // })();
      
      // const menuItems = document.querySelectorAll('.nav__list-item');

      // for (let x = 0; x < menuItems.length; x++) {
      //   menuItems[x].addEventListener('click', () => {
      //     document.querySelector('.menu-icon').click();
      //   });
      // }

    }
  }

</script>

<style>

.site-content {
  position: relative;
  height: 100vh;
  width: 100%;
}

/* styles for 1st menu type */
.menu {
  position: relative;
  background-color: rgb(255, 255, 255);
  height: 100%;
  width: 100%;
  border-right: 1px solid black;
}

.menu-wrapper {
  display: grid;
  height: 30%;
  width: 100%;
  position: relative;
}

.menu-wrapper a {
  display: grid;
  color: #fff;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  
  background-color: rgb(255, 255, 255);
  transition: all 0.2s ease;
}

.menu a:hover {
  background-color: rgb(226, 226, 226);
  transition: all 0.2s ease;
}

/* Styles for 2nd menu type */

/* .menu-icon {
    position: fixed;
    height: 30px;
    width: 30px;
    z-index: 999999;
    left: 50px;
    bottom: 30px;
    cursor: pointer;
  }

  .company-logo {
    position: fixed;
    height: 40px;
    width: 40px;
    z-index: 999999;
    right: 50px;
    bottom: 30px;
    cursor: pointer;
  }

  .company-logo img {
    height: 100%;
    width: 100%;
    z-index: inherit;
  }

  .menu-icon__line {
    height: 2px;
    width: 30px;
    display: block;
    background-color: #000;
    margin-bottom: 4px;
    transition: transform 0.2s ease, background-color 0.5s ease;
  }

  .menu-icon__line-left {
    width: 15px;
  }

  .menu-icon__line-right {
    width: 15px;
    float: right;
  }

  .nav {
    position: fixed;
    z-index: 999998;
  }

  .nav:before, .nav:after {
    content: "";
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 1);
    z-index: -1;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
    transform: translateX(0%) translateY(-100%);
  }

  .nav:after {
    background: rgba(255, 255, 255, 1);
    transition-delay: 0s;
  }

  .nav:before {
    transition-delay: 0.1s;
  }

  .nav__content {
    position: fixed;
    top: 50%;
    transform: translate(0%, -50%);
    width: 100%;
    text-align: center;
    font-size: calc(2vw + 10px);
    font-weight: 200;
    cursor: pointer;
    pointer-events: none;
  }

  .nav__list-item {
    position: relative;
    display: inline-flex;
    transition-delay: 0.8s;
    opacity: 0;
    transform: translate(0%, 100%);
    transition: opacity 0.2s ease, transform 0.3s ease;
    margin-right: 25px;
    text-decoration: none;
    color: #000;
  }

  .nav-icon {
    margin-right: 15px;
    width: 30px;
  }

  .nav__list-item:before {
    content: "";
    position: absolute;
    background: #000;
    width: 30px;
    height: 1px;
    left: 0;
    top: 100%;
    transform: translate(0%, 0%);
    transition: all 0.3s ease;
    z-index: -1;
  }

  .nav__list-item:hover:before,
  .nav__list-item.active:before {
    width: 100%;
  }

  body.nav-active .menu-icon__line {
    background-color: #000;
    transform: translateX(0px) rotate(-45deg);
  }

  body.nav-active .menu-icon__line-left {
    transform: translateX(1px) rotate(45deg);
  }

  body.nav-active .menu-icon__line-right {
    transform: translateX(-2px) rotate(45deg);
  }

  body.nav-active .nav {
    visibility: visible;
  }

  body.nav-active .nav:before, body.nav-active .nav:after {
    transform: translateX(0%) translateY(0%);
  }

  body.nav-active .nav:after {
    transition-delay: 0.1s;
  }

  body.nav-active .nav:before {
    transition-delay: 0s;
  }

  body.nav-active .nav__content {
    pointer-events: all;
  }

  body.nav-active .nav__list-item {
    opacity: 1;
    transform: translateX(0%);
    transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
  }

  body.nav-active .nav__list-item:nth-child(0) {
    transition-delay: 0.5s;
  }

  body.nav-active .nav__list-item:nth-child(1) {
    transition-delay: 0.6s;
  }

  body.nav-active .nav__list-item:nth-child(2) {
    transition-delay: 0.7s;
  }

  body.nav-active .nav__list-item:nth-child(3) {
    transition-delay: 0.8s;
  }

  body.nav-active .nav__list-item:nth-child(4) {
    transition-delay: 0.9s;
  } */

</style>
