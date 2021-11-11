<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link key="collapse" class="sidebar-logo-link" to="/">
        <img src="@/assets/common/sodologo.png" class="sidebar-logo" />
        <div class="sidebar-title">
          <div v-show="isshow" class="logo-title">
            <span>SodoCloud</span>
            <span>授权管理系统</span>
          </div>
        </div>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SidebarLogo",
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isshow: true,
      // title: "Vue Admin Template",
      // logo: "https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png",
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  // background: #2b2f3a;
  // text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    // width: 100%;
    width: 150px !important;
    margin-left: 14px;

    & .sidebar-logo {
      // position: absolute;
      // top: 0;
      // left: 0;
      width: 32px;
      vertical-align: middle;
      margin-top: 5px;
      margin-right: 14px;
    }
    // 大图样式

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
      .logo-title {
        height: 100% !important;
        display: flex;
        flex-direction: column;
        padding-top: 5px;
        span {
          height: 25px;
          line-height: 25px;
          font-size: 16px;
        }
      }
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
      width: 32px;
      height: 32px;
    }
  }
  // 小图样式
}
</style>
