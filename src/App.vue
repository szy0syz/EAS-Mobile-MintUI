<template>
  <div id="app">

    <router-view></router-view>
    <!--<router-link to="/Home"></router-link>-->
    <mt-tabbar>

      <mt-tab-item id="home">
        <img slot="icon" src="./assets/100x100.png">
        <router-link to="/">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="purSale">
        <img slot="icon" src="./assets/100x100.png">
        <router-link to="/purWarehs">购进</router-link>
      </mt-tab-item>
      <mt-tab-item id="invt">
        <img slot="icon" src="./assets/100x100.png">
        <router-link to="/saleIssue">销售</router-link>
      </mt-tab-item>
      <mt-tab-item id="stat">
        <img slot="icon" src="./assets/100x100.png">
        <router-link to="/inventory">库存</router-link>
      </mt-tab-item>
      <mt-tab-item id="me">
        <img slot="icon" src="./assets/100x100.png">
        <router-link to="/profile">我的</router-link>
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
