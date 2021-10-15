<template>
  <div class="contenttitle">
    <img class="hot" src="../../assets/img/光线.png" alt="">
    <h3 class="animated fadeInDown"><img class="headimg" style="vertical-align:middle;" src="../../assets/img/logo.png" alt=""> 中国电信云网融合业务体验系统</h3>
  </div>
</template>

<script>

export default {
  name: "Title",
  data() {
    return {
    }
  },
};
</script>
<style lang="scss" scoped>
.contenttitle {
background: url("../../assets/img/线条.png") no-repeat center top;
  background-size: 100% 142px;
  padding-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 155px;
  .hot {
    width: 976px;
    height: 372px;
    position: absolute;
    top: -41px;
    left: 0;
    right: 0;
    margin: auto;
    animation: opacity 2s linear infinite;
    animation-iteration-count: 1; /*动画只执行一次*/
  }
  .headimg {
    width: 60px;
    height: 60px;
  }
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    // 50% {
    //   opacity: 0.5;
    // }
    100% {
      opacity: 1;
    }
  }
  h3 {
    font-size: 60px;
    letter-spacing: 14px;
    font-weight: 500;
    color: #ffffff;
    padding-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    
  }

  & > div {
    width: 33%;
    &.left {
      width: 32%;
    }
    &.main {
      width: 34%;
    }
  }
}
.map_box {
  // border:solid 1px #ffffff;
  position: relative;
  h3 {
    font-size: 65px;
    font-weight: 500;
    color:#ffffff;
  }
  .topology {
    width: 720px;
    height: 470px;
    border:solid 1px #034b70;
    background-color: rgba(0,0,0,0.1);
    position: absolute;
    top: 750px;
    left:220px;
  }
  .introduce {
    width: 720px;
    height: 360px;
    border:solid 1px #034b70;
    background-color: rgba(0,0,0,0.1);
    position: absolute;
    top: 750px;
    right:220px;
  }
}

</style>
