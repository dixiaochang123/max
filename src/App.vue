<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  #app .positionInfo + h2{
    span {
      color: #40dcf8;
    }
  }
  #app .mix h2{
    padding-top: 130rem;
    padding-bottom: 20rem;
  }
  #app .mix h2 + div{
    height: 32px !important;
  }
  #app .positionInfo + h2 + div{
    height: 24px !important;
  }
</style>
