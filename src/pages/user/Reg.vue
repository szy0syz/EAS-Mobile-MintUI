<template>
  <div class="page-field">
    <div class="page-title">用户注册</div>
    <div class="page-part">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="loginName" :attr="{ maxlength: 10 }"></mt-field>
      <mt-field label="真实姓名" placeholder="请输入真实姓名" v-model="displayName" :attr="{ maxlength: 10 }"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" v-model="password" type="password"></mt-field>
      <mt-field label="密码" placeholder="请再次输入密码" type="password"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" v-model="phoneNumber" type="tel"></mt-field>
    </div>
    <br>
    <div class="page-part">
      <mt-button size="large" type="primary">注  册</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reg',
    data () {
      return {
        loginName: null,
        displayName: null,
        password: null,
        phoneNumber: 12345678900,
        userInfo: null
      }
    },
    create () {
      // 组件生命周期
    },
    methods: {
      async userReg () {
        return
      }
    }
  }
</script>

<style>

</style>
