<template>

  <div class="home">

    <section class="content">

      <div class="header">
        <div>
          <label class="select">
            <select v-model="filterMail">
              <option value="Todos">Todos</option>
              <option value=".biz">.biz</option>
              <option value=".net">.net</option>
              <option value=".org">.org</option>
              <option value=".info">.info</option>
              <option value=".tv">.tv</option>
              <option value=".ca">.ca</option>
              <option value=".io">.io</option>
              <option value=".me">.me</option>
            </select>
          </label>
        </div>
      </div>
      
      <div class="main">

        <div class="card" v-for="user in filteredUsers" :key="user.id" >
          <div class="card-custom-img"></div>
          <div class="card-custom-logo">
            <img src="../assets/logo.png" alt="Logo" />
          </div>
          <ul>
            <li>
              <img src="../assets/user.png" alt="Name" />
              <p><b>{{user.name}}</b></p>
            </li>
            <li>
              <img src="../assets/username.png" alt="Username" />
              <p>{{user.username}}</p>
            </li>
            <li>
              <img src="../assets/email.png" alt="Email" />
              <a v-bind:href=" `mailto:${user.email}` "><p class="mail"><b>{{user.email}}</b></p></a>
            </li>
            <li>
              <img src="../assets/phone.png" alt="Phone" />
              <p><b>{{user.phone}}</b></p>
            </li>
            <li>
              <img src="../assets/website.png" alt="Website" />
              <a v-bind:href="`${user.website}`" target="_blank"><p><b>{{user.website}}</b></p></a>
            </li>
            <li>
              <img src="../assets/location.png" alt="Location" />
              <address>{{user.address.street}}, {{user.address.suite}}</address>
            </li>
            <li>
              <address>{{user.address.city}}, {{user.address.zipcode}}</address>
            </li>
          </ul>
        </div>

      </div>
      
      <div class="footer">
        <p>@Copyright Instruct 2019</p>
      </div>

    </section>
    
  </div>

</template>

<script>
  // @ is an alias to /src
  
  export default {
    name: 'home',
    data(){
      return {
        filterMail: 'Todos',
        filterName: '',
        users: [],
      }
    },

    mounted(){
      this.$http.get()
      .then(response =>{
        this.users = response.data
      })
      .catch(error => console.log(error.response.data.errors))
    },

    computed: {
      
      filteredUsers () {
        let users = this.users
        
        if(this.filterMail && this.filterMail !== 'Todos') {
          users = users.filter((e) => {
              return e.email.indexOf(this.filterMail) !== -1
          })
        }
        return users
      }
    },

    methods: {}
    
  }
</script>


<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700|Roboto:300,400,500,700&display=swap"); 

  *,
  ::after,
  ::before {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  a:link, a:visited, a:active{
    color: inherit;
  }

  h3{
    font-family: $montserrat-family
  }
 
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: $third-color;
    background-image: none;
    flex: 1;
    padding: 0 .5em;
    color: #fff;
    cursor: pointer;
    width: auto;
    font-family: $roboto-family;
  }

  select::-ms-expand {
    display: none;
  }

  .select {
    position: relative;
    display: inline-flex;
    width: 15em;
    height: 3em;
    line-height: 3;
    background: $third-color;
    overflow: hidden;
    border-radius: .25em;
  }
  .select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #34495e;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
  }
  .select:hover::after {
    color:  #FAA52F;
  }

  .content {
    display: grid;
    width: 100%;
    max-width: 100vw;
    margin: 0 auto;
    
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 80px auto 80px;
    grid-gap: 20px;
    
    grid-template-areas: "header   header   header"
                        "main     main     main"
                        "footer   footer   footer";
    .header {
      background: $background-gray;
      grid-area: header;
      div{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .main {
      width: 98%;
      margin: 0 auto;
      grid-area: main;
      display: grid;
      grid-template-columns: repeat(3, 3fr);

      .card{
        margin: 20px;
        background-color: white;
        overflow: hidden;
        min-height: 450px;
        box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
        ul{
          display: inline-grid;
          li{
            display: inline-flex;
            align-items: center;
            img{
              height: 30px;
              min-height: 30px;
              padding-right: 5px;
            }
            a{
              text-decoration: none;
              :hover{
                color: $sixth-color;
              }
              .mail{
                color: $first-color;
              } 
            }
            
          }
          li:last-child{
            padding-left: 33px;
          }
        }
        p{
          font-family: $roboto-family;
          b{
            font-family: $roboto-family;
            font-size: 15px;
          }
        }
        address{
          font-family: $roboto-family
        }
      }
      .card-custom-img {
        height: 200px;
        min-height: 200px;
        background-image: linear-gradient(to right, $first-color , $second-color);
      }
      .card-custom-img::after {
        position: relative;
        content: '';
        top: 185px;
        left: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-top-width: 50px;
        border-right-width: 0;
        border-bottom-width: 0;
        border-left-width: 100vw;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: white;
      }
      .card-custom-logo{
        position: absolute;

        img {
          border-radius: 4px;
          box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
          position: relative;
          top: -110px;
          left: 20px;
          width: 100px;
          height: 100px;
        }
      }

    
    }

    .footer {
      background: $background-gray;
      grid-area: footer;

      display: flex;
      align-items: center;
      justify-content: center;
    }

  }
  
  @media only screen and  (min-width: 1920px){
    .content {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas: "header   header   header   header"
                        "main   main   main   main"
                        "footer   footer   footer   footer";
      .main {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
  }

  @media (max-width: 991px) and (min-width: 641px){
    .content {
      grid-template-columns: repeat(2, 1fr);
      .main {
        grid-template-columns: 2fr 50%;
      }
    }
  }

  @media (max-width:640px) and (min-width: 320px){
    .content {
      grid-template-columns: repeat(1, 1fr);
      .main {
        grid-template-columns: 1fr ;
      }
    }
    
  }

</style>
