////导航栏特效
navAnimation(
  document.querySelectorAll("#nav ul li"),
  document.querySelector("#sideline")
);
// 传入导航栏列表和下划线
function navAnimation(nav, sideline) {
  // 获取初始 left 和 width 用于返回
  let left = sideline.style.left;
  let width = sideline.style.width;
  // 获取 margin-right
  let r = parseFloat(window.getComputedStyle(nav[0]).marginRight);
  // 获取各个列表的 width
  let w = [0];
  // 保存各个li距离第一个li之间的间距
  let distance = [0];
  for (let i = 0; i < nav.length; i++) {
    w[i] = parseFloat(window.getComputedStyle(nav[i]).width);
    nav[i].index = i;
    distance[i + 1] = distance[i] + w[i] + r;
    nav[i].addEventListener("mouseenter", () => {
      sideline.style.left = distance[i] + "px";
      sideline.style.width = w[i] + "px";
    });
  }
  nav[0].parentNode.addEventListener("mouseleave", () => {
    sideline.style.left = left;
    sideline.style.width = width;
  });
}

$(function () {
  ////banner特效（只需在html中添加banner图片和切换按钮）
  bannerAnimate();
  function bannerAnimate() {
    let switchoverBtn = $(".banner-switchover>span");
    let index = switchoverBtn.index($(".banner-switchover span[class='on']"));
    let intervalId;
    // 获取banner图片宽度
    let imgWidth = $(".banner-img img").eq(0).prop("width");
    // 手动切换按钮
    switchoverBtn.mouseenter(function () {
      let bannerImg = $(".banner-img");
      index = switchoverBtn.index(this);
      $(this).addClass("on");
      $(this).siblings().removeClass("on");
      bannerImg.clearQueue();
      bannerImg.animate({ left: -imgWidth * index });
    });
    // 自动切换
    function switchover(em) {
      // console.log(em);
      let bannerImg = $(".banner-img");
      bannerImg.clearQueue();
      bannerImg.animate({ left: -imgWidth * index });
      $(em).addClass("on");
      $(em).siblings().removeClass("on");
    }
    function autoSwitchover() {
      intervalId = setInterval(function () {
        // console.log(index);
        if (switchoverBtn.length - 1 == index) {
          index = -1;
        }
        switchover(switchoverBtn.eq(++index));
      }, 3000);
    }
    autoSwitchover();
    $(".banner").mouseenter(function () {
      clearInterval(intervalId);
    });
    $(".banner").mouseover(function () {
      clearInterval(intervalId);
    });
    $(".banner").mouseleave(function () {
      autoSwitchover();
    });
  }
});
