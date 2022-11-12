<template>
	<view class="centerBar">
		<scroll-view class="centerScroll" scroll-x="true">
			<view class="item" v-for="item in itemArr">{{item}}</view>
		</scroll-view>
	</view>
</template>

<script setup>
	const itemArr = ["关注", "推荐", "附近", "打卡地", "咖啡", "美食", "溜娃", "宠物", "运动", "教培", "结婚"]
</script>

<style lang="scss">
	.centerBar {
		height: 80rpx;
		margin: 25rpx 15rpx;

		.centerScroll {
			height: inherit;
			white-space: nowrap;

			.item {
				display: inline-block;
				border: 1rpx solid red;
				height: 80rpx;
				width: 100rpx;
				text-align: center;
			}
		}
	}
</style>
