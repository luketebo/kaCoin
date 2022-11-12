<template>
	<view class="swiperBar">
		<scroll-view scroll-x="true" class="scrollBar">
			<view class="item" v-for="item in itemArr">
				<view class="top">{{item.top}}</view>
				<view class="bottom">{{item.bottom}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	const itemArr = [{
			top: "美食",
			bottom: "医疗/口腔"
		},
		{
			top: "美食",
			bottom: "医疗/口腔"
		},
		{
			top: "美食",
			bottom: "医疗/口腔"
		},
		{
			top: "美食",
			bottom: "医疗/口腔"
		},
		{
			top: "美食",
			bottom: "医疗/口腔"
		},
		{
			top: "美食",
			bottom: "医疗/口腔"
		},
		{
			top: "美食",
			bottom: "医疗/口腔"
		},
		{
			top: "美食",
			bottom: "医疗/口腔"
		},
		{
			top: "美食",
			bottom: "医疗/口腔"
		},
		{
			top: "美食",
			bottom: "医疗/口腔"
		},
		{
			top: "美食",
			bottom: "医疗/口腔"
		},
	];
</script>
<style lang='scss' scoped>
	.swiperBar {
		height: 220rpx;
		padding-bottom: 25rpx;
		margin: 0rpx 15rpx;

		.scrollBar {
			height: inherit;

			white-space: nowrap;

			.item {

				height: inherit;
				width: 150rpx;
				display: inline-block;

				.top {
					height: 110rpx;
					border: 1rpx solid red;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.bottom {
					height: 110rpx;
					border: 1rpx solid red;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}

	}
</style>
