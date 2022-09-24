<template>
  <div class="infos">
    <h2 class="title">{{ detailInfos.houseName }}</h2>
    <div class="description">
      <template v-for="(tag, index) in detailInfos.houseTags" :key="index">
        <span
          class="tag"
          :style="{
            color: tag.tagText?.color,
            background: tag.tagText?.background.color,
          }"
        >
          {{ tag.tagText?.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <div class="comment-left">
        <div class="overall">{{ detailInfos.commentBrief?.overall }}</div>
        <div class="scoreTitle">{{ detailInfos.commentBrief?.scoreTitle }}</div>
        <div class="commentBrief">
          {{ `"${detailInfos.commentBrief?.commentBrief}"` }}
        </div>
      </div>
      <div class="comment-right">
        {{ detailInfos.commentBrief?.totalCount }}条评论
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="position">
      <div class="positon-left">
        <div class="address">{{ detailInfos.nearByPosition?.address }}</div>
      </div>
      <div class="positon-right">
        地图周边
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  detailInfos: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped lang="less">
.infos {
  margin-top: 20px;
  .title {
    font-size: 20px;
  }
  .description {
    margin-top: 10px;
    .tag {
      margin-left: 5px;
    }
  }
  .comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    background-color: #f4f4f4;
    padding: 10px;
    .comment-left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .overall {
        font-size: 20px;
        font-weight: 700;
      }
      .scoreTitle {
        font-weight: 600;
        margin-left: 2px;
      }
      .commentBrief {
        color: gray;
        margin-left: 2px;
      }
    }
    .comment-right {
      color: var(--primary-color);
    }
  }
  .position {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f4f4f4;
    margin-top: 15px;
    padding: 10px;
    .positon-left {
      .address {
        font-weight: 600;
        color: #222;
      }
    }
    .positon-right {
      color: var(--primary-color);
    }
  }
}
</style>
