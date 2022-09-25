//实现用户滑动屏幕到一定位置 出现搜索框的钩子函数
import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";

export default function userScroll(elRef) {
  // 是否到达底部
  const isReachBottom = ref(false);

  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);

  let el = window;

  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      // console.log("我在滚动");
      clientHeight.value = document.documentElement.clientHeight;
      scrollTop.value = document.documentElement.scrollTop;
      scrollHeight.value = document.documentElement.scrollHeight;
    } else {
      // console.log("我在滚动");
      clientHeight.value = el.clientHeight;
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight;
    }
    // console.log(scrollTop.value);
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("reach the elBottom");
      isReachBottom.value = true;
    }
  }, 200);

  //挂载的时候 是 用户滑动的时候
  onMounted(() => {
    if (elRef) {
      el = elRef.value;
    }

    el.addEventListener("scroll", scrollListenerHandler);
  });

  //销毁的时候 是用户没有进行滑动的时候
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler);
  });
  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}
