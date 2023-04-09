<template>
	<view class="newsDetail">
		<view class="newsDetailSwiper">
			<u-swiper :list="list" mode="number" height="600" indicator-pos="bottomRight" :autoplay="false"></u-swiper>
		</view>
		<view class="newDetailContent">
			<view class="newDetailContentTitle">
				<uni-title type="h3" title="鸿恩寺 | 背景故事"></uni-title>
			</view>
			<view class="newDetailContentPose">
				<u-parse :html="content" :lazy-load="true" :show-with-animation="true"></u-parse>
			</view>
		</view>
		<view class="newDetailBottom">
			<view class="newDetailBottomInput">
				<u-field v-model="comments" label-width='0' placeholder="说点什么吧"></u-field>
			</view>
			<view class="newDetailBottomLike">
				<view class="newDetailBottomLikeIcon">
					<image src="@/static/icon/kaCoin-like-index/like.png" v-if="!likes"></image>
					<image src="@/static/icon/kaCoin-like-index/like-h.png" v-else></image>
				</view>
				<text class="number" @click.native="onClickLike">{{likeNum}}</text>
			</view>
			<view class="newDetailBottomStar">
				<view class="newDetailBottomStarIcon">
					<image src="@/static/icon/kaCoin-postDetail/star.png" v-if="!star"></image>
					<image src="@/static/icon/kaCoin-postDetail/star-selected.png" v-else></image>
				</view>
				<text class="number" @click.native="onClickStar">{{starNum}}</text>
			</view>
			<view class="newDetailBottomMessage">
				<view class="newDetailBottomMessageIcon">
					<image src="@/static/icon/kaCoin-postDetail/message.png"></image>
					<!-- <image src="@/static/icon/kaCoin-postDetail/message-selected.png" v-else></image> -->
				</view>
				<text class="number">100</text>
			</view>
		</view>
	</view>
</template>
<script setup>
	import {
		ref
	} from 'vue'
	let likes = ref(false);
	let star = ref(false);
	let likeNum = ref(100);
	let starNum = ref(90);
	const onClickLike = () => {
		likes.value = !likes.value;
		if (likes.value) {
			likeNum.value++;
		} else {
			likeNum.value--;
		}
	}
	const onClickStar = () => {
		star.value = !star.value;
		if (likes.value) {
			starNum.value++;
		} else {
			starNum.value--;
		}
	}
</script>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://pic.quanjing.com/78/xj/QJ6162413612.jpg@!350h',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://pic.quanjing.com/pv/9x/QJ9127809843.jpg@!350h',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://pic.quanjing.com/sn/13/QJ9130228192.jpg@!350h',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				content: `
									<p>免费且风景怡人的观光圣地</p>
									<p>鸿恩寺森林公园 位于重庆市江北区红石路。</p>
									<p>该寺寺名为鸿恩寺，却与寺庙无关，仅仅只是一</p>
									<p>座简单的仿古楼台，这么说你敢信吗😂</p>
									<p>据说建文帝朱允炆被明成祖朱槺推翻时，建文帝</p>
									<p>逃至龙脊山上，被观音菩萨派来的鸿雁搭救😁。</p>
									<p>后来建文帝的追随者来到山上建起一座寺庙隐</p>
									<p>居，为东山在起做准备。为了报鸿雁的搭救之</p>
									<p>恩，就为寺庙取名为鸿恩寺，并供奉观世音</p>
									<p>菩萨，一直留存至今，吸引无数粉丝打卡！👍</p>
									
						`,
				comments: ""

			};
		}
	}
</script>

<style scoped lang="scss">
	.newsDetail {

		.newDetailContent {
			padding: 15rpx 35rpx 100rpx 35rpx;

			.newDetailContentTitle {}

			.newDetailContentPose {
				margin-top: 10rpx;
				font-size: 35rpx;
				line-height: 1.8;
				font-weight: "Semi bold";

			}
		}

		.newDetailBottom {
			// border: 1rpx solid red;
			background-color: #fff;
			height: 80rpx;
			display: flex;
			flex-direction: row;
			position: fixed;
			width: 100%;
			left: 0;
			bottom: 0;
			justify-content: space-between;
			align-items: center;

			.newDetailBottomInput {
				// border: 1rpx solid red;
				width: 40%;
				// position: fixed;
				// left: 5rpx;
				// margin-right: 50rpx;
			}

			.newDetailBottomLike {
				display: flex;
				justify-content: center;
				align-items: center;
				// border: 1rpx solid red;

				.newDetailBottomLikeIcon {
					height: 40rpx;
					width: 40rpx;

					image {
						height: 100%;
						width: 100%;
					}
				}
			}

			.newDetailBottomStar {
				display: flex;
				justify-content: center;
				align-items: center;
				// border: 1rpx solid red;

				.newDetailBottomStarIcon {
					height: 40rpx;
					width: 40rpx;

					image {
						height: 100%;
						width: 100%;
					}
				}
			}

			.newDetailBottomMessage {
				display: flex;
				justify-content: center;
				align-items: center;
				// border: 1rpx solid red;

				.newDetailBottomMessageIcon {
					height: 40rpx;
					width: 40rpx;

					image {
						height: 100%;
						width: 100%;
					}
				}
			}
		}
	}
</style>