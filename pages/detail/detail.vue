<template>
	<view>
		<view class="detailTop">
			<view class="detailAva">
				头像
			</view>
			<view class="detailPic">
				<u-avatar :src="src"></u-avatar>
			</view>
		</view>
		<u-line color="red" />
		<view v-for="item in itemArr">
			<view class="detailCard">
				<view class="detailCardLeft">{{item.left}}</view>
				<view class="detailCardRight">{{item.right}}</view>
			</view>
			<u-line color="red" />
		</view>
		<view class="detailButton">
			<view class="detailButtonLeft">
				<u-button :ripple="true" type="warning" ripple-bg-color="#ff9900">重新授权</u-button>
			</view>
			<view class="detailButtonRight">
				<u-button :ripple="true" type="warning" ripple-bg-color="#ff9900">更换手机</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemArr: [{
						left: "用户名",
						right: "十月"
					},
					{
						left: "当前用户标识",
						right: "个人"
					},
					{
						left: "绑定手机账号",
						right: "123456789"
					}
				],
				src: ""

			};
		}
	}
</script>

<style lang="scss">
	.detailTop {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 130rpx;
		font-weight: bold;


		.detailAva {
			padding-left: 25rpx;
		}

		.detailPic {
			padding-right: 90rpx;
		}
	}

	.detailCard {
		height: 90rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-weight: bold;

		.detailCardLeft {
			padding-left: 25rpx;
		}

		.detailCardRight {
			padding-right: 90rpx;
		}
	}

	.detailButton {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-top: 55rpx;

		.detailButtonLeft {
			padding-left: 90rpx;
		}

		.detailButtonRight {
			padding-right: 90rpx;

		}

	}
</style>
