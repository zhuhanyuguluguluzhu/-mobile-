<template>
  <div class="datail-section border">
    <div class="detail-header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="detail-content">
      <slot><h2>稍等片刻 内容马上就来</h2></slot>
    </div>
    <div class="detail-footer" v-if="check.length">
      <div class="footer">{{ check }}</div>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  check: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="less">
.datail-section {
  width: 100%;
  margin-top: 30px;
  &.border {
    border: 5px solid #f4f4f4;
  }
  .detail-header {
    font-size: 18px;
  }
  .detail-footer {
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 10px;
    .footer {
      color: var(--primary-color);
    }
    .van-icon-arrow:before {
      color: var(--primary-color);
    }
  }
}
</style>
