<template>
	<view class="card">
		<view class="top">
			<image src="@/static/image/1.jpg" mode="aspectFill"></image>
		</view>
		<text class="center">评论</text>
		<view class="bottom">
			<view class="left">
				<view class="avatar">
					<image src="@/static/image/1.jpg" mode="aspectFill"></image>
				</view>
				<view class="name">十月</view>
			</view>
			<view class="like">
				<view class="icon">
					<image src="@/static/icon/kaCoin-like-index/like.png" v-if="!likes"></image>
					<image src="@/static/icon/kaCoin-like-index/like-h.png" v-else></image>
				</view>
				<text class="number" @click.native="onClickLike">123</text>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from 'vue'
	let likes = ref < Boolean > (true)
	let likeNum = ref < Number > (1)

	const onClickLike = () => {
		likes = !likes
		likeNum++
		console.log(likes)
		console.log(likeNum)
	}
</script>

<style lang="scss">
	.card {
		margin: 5rpx;
		height: 500rpx;
		width: 350rpx;
		display: flex;
		flex-direction: column;
		padding-bottom: 15rpx;
		justify-content: space-evenly;
		// display: inline-block;

		.top {
			height: 350rpx;

			image {
				border-radius: 10rpx 10rpx 0 0;
				height: 100%;
				width: 100%;
			}
		}

		.center {
			height: 80rpx;
			padding: 25rpx;
			font-weight: bold;
			// font-size: 25rpx;
		}

		.bottom {
			display: flex;
			padding: 2rpx 25rpx;
			justify-content: space-between;

			.left {
				display: flex;
				justify-content: center;
				align-items: center;

				.avatar {
					height: 50rpx;
					width: 50rpx;


					image {
						height: 100%;
						width: 100%;
						border-radius: 50%;
					}
				}

				.name {
					padding-left: 25rpx;
					color: #888;
					font-size: 25rpx;
				}
			}

			.like {
				display: flex;
				justify-content: center;
				align-items: center;

				.icon {
					height: 40rpx;
					width: 40rpx;

					image {
						height: 100%;
						width: 100%;
					}
				}

				.number {
					font-size: #888;
					padding-left: 5rpx;
					// font-weight: bold;
				}
			}

		}
	}
</style>
