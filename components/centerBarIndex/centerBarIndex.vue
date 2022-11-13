<template>
	<view class="centerBar">
		<scroll-view class="centerScroll" scroll-x="true">
			<view class="item" :class="index == currentIndex ? 'active' : ''"
				@click.native="getItemIndex(index, item.id)" v-for="(item, index) in itemArr" :key="item.id">
				{{item.name}}
			</view>
		</scroll-view>
	</view>
</template>


<script setup>
	import {
		ref
	} from "vue"
	const itemArr = [{
			name: "关注",
			id: 0
		},
		{
			name: "推荐",
			id: 1
		},
		{
			name: "附近",
			id: 2
		},
		{
			name: "打卡地",
			id: 3
		},
		{
			name: "咖啡",
			id: 4
		},
		{
			name: "美食",
			id: 5
		},
		{
			name: "溜娃",
			id: 6
		},
		{
			name: "宠物",
			id: 7
		},
		{
			name: "运动",
			id: 8
		},
		{
			name: "教培",
			id: 9
		},
		{
			name: "结婚",
			id: 10
		},
	]

	let currentIndex = ref(1)

	const getItemIndex = (index, id) => {
		currentIndex.value = index
	}
</script>

<style lang="scss" scoped>
	.centerBar {
		height: 80rpx;
		line-height: 80rpx;
		margin: 23rpx 15rpx;
		position: sticky;
		top: var(--window-top);
		left: 0rpx;
		right: 0rpx;
		z-index: 100;
		background-color: white;
		// position: fixed;

		.centerScroll {
			height: inherit;
			white-space: nowrap;
			display: flex;
			justify-content: center;
			align-items: center;

			:deep(::-webkit-scrollbar) {
				width: 4px !important;
				height: 1px !important;
				overflow: auto !important;
				background: transparent !important;
				-webkit-appearance: auto !important;
				display: block;
			}

			.item {
				display: inline-block;
				height: 80rpx;
				width: 100rpx;
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
	}
</style>
