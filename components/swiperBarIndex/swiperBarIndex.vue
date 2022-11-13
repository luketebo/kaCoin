<template>
	<view class="swiperBar">
		<scroll-view scroll-x="true" class="scrollBar">
			<view class="item" v-for="item in 20">
				<view class="top">
					<view class="pic">
						<image src="../../static/image/index/food.png" mode="aspectFill"></image>
					</view>

					<text>美食</text>
				</view>
				<view class="bottom">
					<view class="pic">
						<image src="../../static/image/index/医疗.png"></image>
					</view>
					<text>医疗/口腔</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	import {
		computed
	} from 'vue'
	// import {
	// 	require
	// } from 'vue'
	const itemArr = [{
			top: "美食",
			// topImg: food,
			bottom: "医疗/口腔",
			// bottomImg: require('@/static/image/index/food.png')
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

	let getAsstsImages = computed(() => (name, type = 'jpg') => {
		const path = `/static/image/index/${name}.${type}`
		const modules =
			import.meta.globEager('/static/image/index/*')
		console.log(modules[path].default)
		return modules[path]
	})
</script>
<style lang='scss' scoped>
	.swiperBar {
		height: 220rpx;
		padding-bottom: 25rpx;
		margin: 0rpx 15rpx;

		.scrollBar {
			height: inherit;
			white-space: nowrap;

			:deep(::-webkit-scrollbar) {
				width: 4px !important;
				height: 1px !important;
				overflow: auto !important;
				background: transparent !important;
				-webkit-appearance: auto !important;
				display: block;
			}

			.item {

				height: inherit;
				width: 150rpx;
				display: inline-block;

				.top {
					height: 110rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.pic {
						height: 55rpx;
						width: 55rpx;

						image {
							height: 100%;
							width: 100%;
						}
					}

					text {
						font-size: 25rpx;
						font-weight: bold;
					}
				}

				.bottom {
					height: 110rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.pic {
						height: 55rpx;
						width: 55rpx;

						image {
							height: 100%;
							width: 100%;
						}
					}

					text {
						font-size: 25rpx;
						font-weight: bold;
					}
				}
			}
		}

	}
</style>
