<template>
    <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="home-o" url="/">首页</van-tabbar-item>
        <van-tabbar-item name="categories" icon="apps-o" url="/categories.html">分类</van-tabbar-item>
        <van-tabbar-item name="shopping-cart" icon="shopping-cart-o" url="cart.html">购物车</van-tabbar-item>
        <van-tabbar-item name="user" icon="user-o" url="user.html">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        data() {
            return {
                active: 'home'
            }
        }
    }
</script>