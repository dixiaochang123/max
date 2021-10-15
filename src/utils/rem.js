// 设置 rem 函数
function setRem () {
    //  PC端  
    // 1920*6   1080*2
    // 11520*2160
    // 7680*1440    1.5
    // 5760*1080    2
    // 基准大小
    let baseSize = 1;
    // let basePc = baseSize / 1920; // 表示1920的设计图,使用100PX的默认值
    let vW = window.innerWidth; // 当前窗口的宽度
    let vH = window.innerHeight; // 当前窗口的高度
    let basePc = baseSize / 7680; // 表示7680的设计图,使用100PX的默认值
    if(vW<2800) {
      basePc = baseSize / 2736
    }

    if(vW<2800) {
      // 非正常屏幕下的尺寸换算  // 7680*1440
      let dueH = vW * 1824 / 2736
      if (vH < dueH) { // 当前屏幕高度小于应有的屏幕高度，就需要根据当前屏幕高度重新计算屏幕宽度
        vW = vH * 2736 /1824
      }

    } else {
      let dueH = vW * 1440 / 7680
      if (vH < dueH) { // 当前屏幕高度小于应有的屏幕高度，就需要根据当前屏幕高度重新计算屏幕宽度
        vW = vH * 7680 /1440
      }
    }
    let rem = vW * basePc; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
    document.documentElement.style.fontSize =  rem + "px";
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
};