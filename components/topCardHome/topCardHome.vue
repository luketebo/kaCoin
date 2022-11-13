<template>
	<view class="topCard">
		<view class="top">
			<view class="first">
				<view class="pic">
					<image src="../../static/image/demo.jpg" mode="aspectFill"></image>
				</view>
				<view class="character">
					<text>十月</text>
					<text>犹豫就会败北</text>
				</view>
			</view>
			<view class="second">
				<view class="item" v-for="(item, index) in itemArr">
					<view class="number">{{item.number}}</view>
					<view class="text">{{item.text}}</view>
				</view>
			</view>
		</view>
		<view class="center">
			<view class="item" v-for="item in 4">
				<view class="topCenter">
					<view class="picImg">
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
		</view>
	</view>
</template>

<script setup>
	const itemIndex = 1;
	const itemArr = [{
			number: 100,
			text: "卡币"
		},
		{
			number: 23,
			text: "打卡地"
		},
		{
			number: 1000,
			text: "热力值"
		}
	]
</script>

<style lang="scss" scoped>
	.topCard {
		margin: 5rpx 15rpx;
		height: 600rpx;

		.top {
			height: 280rpx;
			width: 100%;
			// padding: 5rpx 15rpx;
			// border: 1px solid red;
			margin-bottom: 23rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			// background-image: linear-gradient(120deg, #f6d365 5%, #fda085 80%);
			// filter: blur(50px);
			// z-index: 1;

			.first {
				height: 128rpx;
				display: flex;
				align-items: center;
				// z-index: 1000000;

				.pic {
					height: 110rpx;
					width: 110rpx;
					margin-left: 15rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}

				.character {
					display: flex;
					flex-direction: column;
					padding-left: 15rpx;

					text {
						padding: 5rpx;
						// color: white;

					}
				}
			}


			.second {
				background-color: white;
				border-radius: 5rpx;
				height: 128rpx;
				// border: 1rpx solid red;
				display: flex;

				.active {

					border-left: 1rpx solid #fe5d2a;
					border-right: 1rpx solid #fe5d2a;
				}

				.item {
					// border: 1rpx solid red;
					height: 128rpx;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;



					.number {
						text-align: center;
						width: 100%;
						color: #fe5d2a;
						font-weight: bold;
					}

					.text {
						width: 100%;
						text-align: center;
						font-weight: bold;
						font-size: 36rpx;
						// color: #fda085;
					}
				}
			}
		}

		.center {
			padding: 5rpx 15rpx;
			height: 280rpx;
			width: 100%;
			background-color: white;
			border-radius: 5rpx;
			display: grid;
			grid-template-columns: auto auto auto auto;
			grid-template-rows: auto auto;

			// margin-bottom: 10rpx;
			.item {
				height: inherit;
				width: 150rpx;
				display: inline-block;

				.topCenter {
					height: 140rpx;
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
					height: 140rpx;
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
