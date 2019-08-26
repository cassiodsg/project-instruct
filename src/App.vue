<template>
  <div id="app">
    <nav id="nav">
      <div>
        <img src="./assets/default_logo.png" alt="Logo" />
      </div>
      <div>
        <router-link to="/">Home</router-link>
      </div>
    </nav>
    <router-view/> 
    
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" >
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700|Roboto:300,400,500,700&display=swap"); 
  @import './sass/variables.scss';

  body{
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    background-color: $background-blue-strong;
    padding: 30px 40px;
    display: flex;
    justify-content: flex-end;
    div{
      &:last-child{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
    a {
      text-decoration: none;
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: white;
        font-family: $montserrat-family;
      }
    }
  }
</style>
