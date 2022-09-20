const getAssetsURL = (image) => {
  // 1.params:相对路径 2.params表示是上一级文件的路径 之后。href是他的地址了(根路径)
  //1. ../assets/img/tabbar/tab_home.png  现在的位置 相对于 图片的 位置
  //2.http://127.0.0.1:5173/src/utils/get_assets_img.js 绝对路径
  // 根据绝对路径 去找 相对路径 生成新的路径 http://127.0.0.1:5173/src/assets/img/tabbar/tab_message.png
  // console.log("@@@", import.meta.url);
  // console.log(new URL(`../assets/img/${image}`, import.meta.url).href);
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
export default getAssetsURL;
