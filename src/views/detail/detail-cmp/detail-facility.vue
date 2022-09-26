<template>
  <div class="detail-facility">
    <detail-section title="房屋设施" check="查看全部设施">
      <template v-for="(item, index) in facilityData" :key="index">
        <div class="item" v-if="facilityIconGroup?.includes(index)">
          <div class="overAll">
            <img :src="item.icon" alt="" />
            <span>{{ item.groupName }}</span>
          </div>
          <div class="list">
            <template
              v-for="(fac, Subscript) in item.facilitys.slice(0, 4)"
              :key="Subscript"
            >
              <div class="facs">
                <i class="icon_check icon"></i>
                <span class="text">{{ fac.name }}</span>
              </div>
            </template>
          </div>
        </div>
      </template>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail/detail-section.vue";
const props = defineProps({
  facilityData: {
    type: Array,
    default: () => [],
  },
  facilityIconGroup: {
    type: Array,
    default: () => [],
  },
});
// console.log(props.facilityData);
</script>

<style scoped lang="less">
.detail-facility {
  margin-top: 15px;
  .item {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    font-size: 14px;
    .overAll {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.3%;
      img {
        width: 20px;
        height: 20px;
      }
      span {
        margin-top: 5px;
        font-size: 12px;
      }
    }
    .list {
      width: 66.7%;
      display: flex;
      flex-wrap: wrap;
      .facs {
        width: 50%;
        margin-top: 6px;
        .icon_check {
          display: inline-block;
          width: 12px;
          height: 12px;
          background: url(@/assets/img/detail/icon_check.png) 0 0 / 100% 100%;
        }
        .text {
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
