<template>
	<view class="box">
		<view class="topBar">
			<topBarIndex></topBarIndex>
		</view>
		<view class="swiperBar">
			<swiperBarIndex></swiperBarIndex>
		</view>
		<view class="content">
			<centerBarIndex></centerBarIndex>
			<view class="contentCard">
				<contentIndex v-for="item in 20"></contentIndex>
			</view>
		</view>
	</view>
</template>

<script setup>
	// import * as amap from '@/libs/amap-wx.130.js'
	// const amapPlugin = new amap.AMapWX({
	// 	key: "3817db9162440413d8c37839a8d13b2a"
	// })
</script>

<style lang="scss" scoped>
	.contentCard {
		display: grid;
		grid-template-columns: auto auto;
		margin: 15rpx;
	}
</style>
