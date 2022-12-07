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

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
	.contentCard {
		display: grid;
		grid-template-columns: auto auto;
		margin: 15rpx;
	}
</style>
