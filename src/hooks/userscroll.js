//实现用户滑动屏幕到一定位置 出现搜索框的钩子函数
import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";

export default function userScroll() {
  // 是否到达底部
  const isReachBottom = ref(false);

  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);

  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    // console.log(scrollTop.value);
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("reach the windowBottom");
      isReachBottom.value = true;
    }
  }, 200);

  //挂载的时候 是 用户滑动的时候
  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });

  //销毁的时候 是用户没有进行滑动的时候
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });
  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}
