<template>
	<view class="contentCardHome">
		<view class="homeCard">
			<view class="item" v-for="item in 4">
				<view class="topCenter">
					<view class="picImg">
						<image src="../../static/image/index/food.png" mode="aspectFill"></image>
					</view>

					<text>美食</text>
				</view>
				<view class="bottom">
					<view class="pic">
						<image src="../../static/image/index/medical.png"></image>
					</view>
					<text>医疗/口腔</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "contentCardHome",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.contentCardHome {
		// margin: 5rpx 15rpx;
		// margin: 0 15rpx 5rpx 15rpx;
		height: 220rpx;
		width: 100%;
		// background-color: white;


		.homeCard {
			margin: 0rpx 15rpx;
			// border: 1rpx solid red;
			background-color: white;
			border-radius: 5rpx;
			display: grid;
			grid-template-columns: auto auto auto auto;

			.item {
				height: 100%;
				width: 150rpx;
				// display: inline-block;

				.topCenter {
					height: 98rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;


					.picImg {
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
					height: 98rpx;
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
