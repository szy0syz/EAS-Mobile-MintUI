<template>
  <div id="app">

    <router-view></router-view>
    <!--<router-link to="/Home"></router-link>-->
    <mt-tabbar>

      <mt-tab-item id="home">
        <img slot="icon" src="./assets/100x100.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="purSale">
        <img slot="icon" src="./assets/100x100.png">
        购销
      </mt-tab-item>
      <mt-tab-item id="invt">
        <img slot="icon" src="./assets/100x100.png">
        库存
      </mt-tab-item>
      <mt-tab-item id="stat">
        <img slot="icon" src="./assets/100x100.png">
        统计
      </mt-tab-item>
      <mt-tab-item id="me">
        <img slot="icon" src="./assets/100x100.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
