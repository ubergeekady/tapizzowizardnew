<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12" style="text-align: center">
          <a href="#">
            <center>
              <img
                src="logo.jpg"
                alt=""
                width="178"
                height="45"
                class="d-none d-md-block"
              />
            </center>
            <center>
              <img
                src="logo.jpg"
                alt=""
                width="178"
                height="45"
                class="d-block d-md-none"
              />
            </center>
          </a>
          <div id="social">
            <ul>
              <li>
                <a href="#0"><i class="icon-facebook"></i></a>
              </li>
              <li>
                <a href="#0"><i class="icon-twitter"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- /container -->
  </header>
  <!-- /Header -->

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
