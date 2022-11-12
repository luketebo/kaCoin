<template>
	<view class="topBar">
		<view class="left">重庆</view>
		<view class="center">
			<u-search placeholder="日照香炉生紫烟" :show-action="false" input-align="center" :clearabled="true" shape="square">
			</u-search>
		</view>
		<view class="right">
			<image src="../../static/icon/kaCoin-topBar-index/saoma.png" mode="aspectFit" @click.navtive="scanCode">
			</image>
		</view>
	</view>
</template>

<script setup>
	// 添加扫码事件
	const scanCode = () => {
		uni.scanCode({
			success: (res) => {
				console.log(JSON.stringify(res.result))
			}
		})
	}
</script>
<style lang='scss' scoped>
	.topBar {

		padding-top: 25rpx;
		/* height: 35rpx; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 25rpx;
		margin: 0rpx 15rpx;

		.left {
			font-weight: bold;
			/* margin-left: 35rpx; */
		}

		.center {}

		.right {
			height: 50rpx;
			width: 50rpx;
			/* margin-right: 55rpx; */

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
