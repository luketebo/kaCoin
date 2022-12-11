<template>
	<view class="startTopBar">
		<view class="startScroll">
			<view class="item" :class="index == currentIndex ? 'active' : ''"
				@click.native="getItemIndex(index, item.id)" v-for="(item, index) in itemArr" :key="item.id">
				{{item.name}}
			</view>
		</view>
		<view class="startCanvas">
			<view class='nothing'>
				<view class='wawa'>
					<image src="@/static/image/start/wawa.png"></image>
				</view>
				<view class='text'>还没有收藏过哟~</view>
			</view>

		</view>
		<u-divider color="black">你可能还喜欢</u-divider>
		<view class="contentCard">
			<contentIndex v-for="item in 20"></contentIndex>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	const itemArr = [{
			name: "全部",
			id: 0
		},
		{
			name: "商户",
			id: 1
		},
		{
			name: "笔记",
			id: 2
		},
		{
			name: "团购",
			id: 3
		},
		{
			name: "其他",
			id: 4
		}
	]

	let currentIndex = ref(0)

	const getItemIndex = (index, id) => {
		currentIndex.value = index
	}
</script>

<style lang="scss" scoped>
	.startTopBar {
		height: 80rpx;
		line-height: 80rpx;
		margin: 23rpx 15rpx;
		background-color: white;

		.startScroll {
			height: inherit;
			white-space: nowrap;
			display: flex;
			justify-content: center;
			align-items: center;

			:deep(::-webkit-scrollbar) {
				width: 4rpx !important;
				height: 1rpx !important;
				overflow: auto !important;
				background: transparent !important;
				-webkit-appearance: auto !important;
				display: block;
			}

			.item {
				display: inline-block;
				height: 80rpx;
				width: 200rpx;
				font-weight: bold;
				font-size: 25rpx;
				line-height: 80rpx;
				text-align: center;
			}

			.active {

				// background-color: pink;
				text-decoration: underline 9rpx;
				text-decoration-color: #fe5d2a;
				font-size: 35rpx;

			}
		}

		.startCanvas {
			height: 700rpx;
			width: inherit;
			display: flex;
			justify-content: center;
			align-items: center;
			// background-color: #fe5d2a;

			.nothing {
				height: 250rpx;
				width: 250rpx;
				display: flex;
				align-items: center;
				flex-direction: column;

				.wawa {
					height: 180rpx;
					width: 180rpx;

					image {
						height: inherit;
						width: inherit;

					}
				}

				.text {}
			}
		}

		.contentCard {
			display: grid;
			grid-template-columns: auto auto;
			margin: 15rpx;
		}
	}
</style>
