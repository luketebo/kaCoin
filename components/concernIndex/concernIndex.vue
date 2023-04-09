<template>
	<view class="concernIndexBox" v-for="concern in concernItem">
		<view class="concernIndexBoxTop">
			<view class="concernIndexBoxTopLeft">
				<view class="concernIndexBoxLeftImg">
					<image :src="concern.AvatorURL" mode="aspectFill"></image>
				</view>
				<view class="concernIndexBoxLeftCha">{{ concern.Sign }}</view>
			</view>
			<view class="concernIndexBoxTopRight">
				<!-- <view class="concernIndexBoxTopRightStar"> -->
				<u-button type="warning" size="mini" :plain="true" shape="circle"
					@click.native="concern.flag = !concern.flag">{{ concern.flag == true ? concern.unfollow : concern.follow }}</u-button>
				<!-- </view> -->
			</view>
		</view>
		<view class="concernIndexBottom">
			<scroll-view scroll-x="true" class="concernIndexBottomScroll">
				<view class="concernIndexBottomScrollItem" v-for="item in concern.itemArr">
					<view class="concernIndexBottomScrollItemImg">
						<image :src="item.imgURL" mode="aspectFill"></image>
					</view>
					<view class="concernIndexBottomScrollItemTitle">{{item.title}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "concernIndex",
		data() {
			return {

			};
		},
		methods: {}
	}
</script>

<script setup>
	const changeButton = (res) => {
		res = !res
		console.log(res)
		return res
	}
	const concernItem = [{
			AvatorURL: "https://pic1.zhimg.com/80/v2-767db4d2664e2383a900fdeb6faa1336_720w.webp?source=1940ef5c",
			Sign: "PuffPuff",
			flag: false,
			follow: "关注",
			unfollow: "已关注",
			itemArr: [{
					imgURL: "https://inews.gtimg.com/newsapp_bt/0/14507150761/1000",
					title: "没有踩雷！想吃点酸辣"
				},
				{
					imgURL: "https://img1.qunarzz.com/travel/d2/201212/12/4cbd08e2d30b699eddb12cfb.jpg_480x360x95_7470bb09.jpg",
					title: "上海科技馆性价比也太"
				},
				{
					imgURL: "https://tse3-mm.cn.bing.net/th/id/OIP-C.k8aGWNZ4FX-z_lmSM_BvpQHaFN?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
					title: "汤成一品的旁边居然还"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/1-4.jpg",
					title: "我不说你敢信这里是小"
				}
			]
		},
		{
			AvatorURL: "https://picx.zhimg.com/80/v2-690418f609506cf5ae3f0cd24aedd6db_720w.webp?source=1940ef5c",
			Sign: "其实我不忙",
			flag: false,
			follow: "关注",
			unfollow: "已关注",
			itemArr: [{
					imgURL: "http://www.luketebo.icu:888/concernIndex/2-1.jpg",
					title: "颜值很高的烧鸟自选"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/2-2.jpeg",
					title: "没想到火锅味道这么纯"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/2-3.jpeg",
					title: "自己动手把鱼泥拌均匀"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/2-4.jpeg",
					title: "感谢旅游博主，今年一"
				}
			]
		},
		{
			AvatorURL: "https://picx.zhimg.com/80/v2-5272433d9f59a6cec2cd7380051c5651_720w.webp?source=1940ef5c",
			Sign: "爆爆布朗尼",
			flag: false,
			follow: "关注",
			unfollow: "已关注",
			itemArr: [{
					imgURL: "http://www.luketebo.icu:888/concernIndex/3-1.jpeg",
					title: "柠檬茶风向标和海绵宝宝"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/3-2.jpeg",
					title: "有湖有歌有酒"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/3-3.jpeg",
					title: "解放碑高质量烤肉"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/3-4.jpeg",
					title: "冲这海鲜自助也要去"
				}
			]
		},
		{
			AvatorURL: "https://pic1.zhimg.com/80/v2-9db61368476072d8b1bbc413a350d58f_720w.webp?source=1940ef5c",
			Sign: "暖暖辅食记",
			flag: false,
			follow: "关注",
			unfollow: "已关注",
			itemArr: [{
					imgURL: "http://www.luketebo.icu:888/concernIndex/4-1.jpeg",
					title: "香甜可口的一碗粥快给"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/4-2.jpeg",
					title: "7个月以上宝宝第一口蛋"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/4-3.jpeg",
					title: "宝宝睡不踏实夜醒频繁"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/4-4.jpeg",
					title: "适合宝宝春天吃的手指"
				}
			]
		},
		{
			AvatorURL: "https://pica.zhimg.com/80/v2-15094f85d48b5d2de5b7cb72a59debbd_720w.webp?source=1940ef5c",
			Sign: "和海杰",
			flag: false,
			follow: "关注",
			unfollow: "已关注",
			itemArr: [{
					imgURL: "http://www.luketebo.icu:888/concernIndex/5-1.jpeg",
					title: "通过预约，能否进入川"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/5-2.jpeg",
					title: "铁山坪花田觅香的木绣"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/5-3.jpeg",
					title: "去南川看花炸鸡"
				},
				{
					imgURL: "http://www.luketebo.icu:888/concernIndex/5-4.jpeg",
					title: "这个美丽的野营地，景"
				}
			]
		}
	]
</script>

<style lang="scss" scoped>
	.concernIndexBox {
		width: 720rpx;
		height: 450rpx;
		margin-bottom: 35rpx;

		.concernIndexBoxTop {
			width: inherit;
			height: 100rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.concernIndexBoxTopLeft {
				// padding-left: 15rpx;
				width: 400rpx;
				height: inherit;
				display: flex;
				flex-direction: row;
				// justify-content: space-between;
				align-items: center;

				.concernIndexBoxLeftImg {
					height: 80rpx;
					width: 80rpx;
					margin-right: 15rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}

				.concernIndexBoxLeftCha {
					// font-size: 20rpx;
				}

			}

			.concernIndexBoxTopRight {
				margin-right: 55rpx;
			}
		}

		.concernIndexBottom {
			height: 350rpx;
			width: 720rpx;

			.concernIndexBottomScroll {
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

				.concernIndexBottomScrollItem {
					height: inherit;
					width: 400rpx;
					display: inline-block;
					margin-right: 15rpx;

					.concernIndexBottomScrollItemImg {
						height: 300rpx;
						width: inherit;

						image {
							width: 100%;
							height: 100%;
							border-radius: 10rpx 10rpx 0 0;
						}
					}

					.concernIndexBottomScrollItemTitle {
						// color: red;
					}

				}
			}
		}
	}
</style>