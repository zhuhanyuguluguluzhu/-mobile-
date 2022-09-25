<template>
  <div class="detail-landLord">
    <div class="introduction">
      <div class="cover">
        <img :src="landLordData?.topScroll" alt="" />
      </div>
      <div class="landLord">
        <div class="left">
          <div class="avatar">
            <img :src="landLordData.hotelLogo" alt="" />
          </div>
          <div class="info">
            <h3 class="houseName">
              {{ landLordData.hotelName }}
            </h3>
            <div class="tags">
              <template
                v-for="(item, index) in landLordData.hotelTags"
                :key="index"
              >
                <div class="tag" :style="{ color: item.tagText.color }">
                  {{ item?.tagText.text }}
                </div>
                <span class="line">|</span>
              </template>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="contact">联系房东</div>
        </div>
      </div>
    </div>
    <div class="infos">
      <template v-for="(info, index) in landLordData.hotelSummary" :key="index">
        <div class="info">
          <div class="title">
            {{ info.title }}
          </div>
          <div class="percent">{{ info.introduction }}</div>
          <div class="tip">{{ info.tip }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  landLordData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped lang="less">
.detail-landLord {
  .introduction {
    .cover {
      img {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
  .landLord {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      .avatar {
        img {
          width: 60px;
          height: 60px;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        .houseName {
          font-weight: 800;
          margin-bottom: 5px;
        }
        .tags {
          display: flex;
          margin: 2px 4px 0 0;
          .line {
            color: #9b9b9b;
          }
        }
      }
    }
    .right {
      .contact {
        background-image: var(--theme-linear-gradient);
        padding: 8px;
        color: #ffff;
        border-radius: 10px;
      }
    }
  }
  .infos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
    padding: 10px;
    .info {
      flex: 1;
      color: #9b9b9b;
      .percent {
        color: #000;
        font-size: 22px;
        margin: 3px 0;
      }
    }
  }
}
</style>
