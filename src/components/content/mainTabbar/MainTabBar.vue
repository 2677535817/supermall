<template>
    <tab-bar>
        <tab-bar-item link='/home'>
            <img slot="icon" src="~assets/img/tabbar/home.svg">
            <img slot="active-icon" src="~assets/img/tabbar/home_active.svg"> 
            <div slot="text">首页</div>
        </tab-bar-item>
        <tab-bar-item link="/category">
            <img slot="icon" src="~assets/img/tabbar/category.svg">
            <img slot="active-icon" src="~assets/img/tabbar/category_active.svg">
            <div slot="text">分类</div>
        </tab-bar-item>
        <tab-bar-item link='/cart'>
            <img slot="icon" src="~assets/img/tabbar/cart.svg">
            <img slot="active-icon" src="~assets/img/tabbar/cat_active.svg">
            <div slot="text">购物车</div>
        </tab-bar-item>
        <tab-bar-item>
            <img slot="icon" src="~assets/img/tabbar/profile.svg">
            <img slot="active-icon" src="~assets/img/tabbar/profile_active.svg">
            <div slot="text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from 'common/tabbar/TabBar.vue'
import TabBarItem from 'common/tabbar/TabBarItem.vue'
export default {
    name:"MainTabBar",
    components:{
        TabBar,
        TabBarItem
    }
}
</script>
<style>

</style>