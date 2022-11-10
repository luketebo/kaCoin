<template>
	<view class="box">
		<swiper indicator-dots="true" class="swiper" duration="200" circular="true" autoplay="true">
			<swiper-item>
				<image src="/static/image/1.jpg" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/image/2.jpg" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/image/3.jpg" mode=""></image>
			</swiper-item>
		</swiper>

	</view>
</template>

<script setup lang='ts'>

</script>

<style lang="scss">
	.swiper {
		height: 300rpx;
		width: 750rpx;
	}
</style>
