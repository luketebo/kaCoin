<template>
	<view class="box">
		<view class="topBar">
			<topBarIndex></topBarIndex>
		</view>
		<view class="swiperBar">
			<swiperBarIndex></swiperBarIndex>
		</view>
		<view class="content">
			<!-- <centerBarIndex @changeNum='getNum'></centerBarIndex> -->
			<view class="centerBar">
				<scroll-view class="centerScroll" scroll-x="true">
					<view class="item" :class="index == currentIndex ? 'active' : ''"
						@click.native="getItemIndex(index, item.id)" v-for="(item, index) in itemArr" :key="item.id">
						{{ item.name }}
					</view>
				</scroll-view>
			</view>
			<view style="margin: 15rpx;">
				<view v-if="res == 0">
					<concernIndex></concernIndex>
				</view>
				<view v-else-if="res == 1">
					<view class="contentCard">
						<!-- <contentIndex v-for="item in 20"></contentIndex> -->
						<view class="card" v-for="item in recommend">
							<view class="top" @click="toPostDetail()">
								<image :src="item.ImgURL" mode="aspectFill"></image>
							</view>
							<text class="center">{{ item.title }}</text>
							<view class="bottom">
								<view class="left">
									<view class="avatar">
										<image :src="item.avtor" mode="aspectFill"></image>
									</view>
									<view class="name">{{ item.name }}</view>
								</view>
								<view class="like">
									<view class="icon">
										<image src="@/static/icon/kaCoin-like-index/like.png" v-if="!likes"></image>
										<image src="@/static/icon/kaCoin-like-index/like-h.png" v-else></image>
									</view>
									<text class="number" @click.native="onClickLike">{{ likeNum }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-else-if="res == 2">
					<view class="contentCard">
						<view class="card" v-for="item in Native">
							<view class="top" @click="toPostDetail()">
								<image :src="item.ImgURL" mode="aspectFill"></image>
							</view>
							<text class="center">{{item.title}}</text>
							<view class="bottom">
								<view class="left">
									<view class="avatar">
										<image :src="item.avator" mode="aspectFill"></image>
									</view>
									<view class="name">{{item.name}}</view>
								</view>
								<view class="like">
									<view class="icon">
										<image src="@/static/icon/kaCoin-like-index/like.png" v-if="!likes"></image>
										<image src="@/static/icon/kaCoin-like-index/like-h.png" v-else></image>
									</view>
									<text class="number" @click.native="onClickLike">{{ likeNum }}</text>
								</view>
							</view>
						</view>
						<!-- <contentIndex v-for="item in 20"></contentIndex> -->
					</view>
				</view>
				<view v-else-if="res == 3">
					<view class="contentCard">
						<view class="card" v-for="item in KaCoinLocation">
							<view class="top" @click="toPostDetail()">
								<image :src="item.ImgURL" mode="aspectFill"></image>
							</view>
							<text class="center">{{item.title}}</text>
							<view class="bottom">
								<view class="left">
									<view class="avatar">
										<image :src="item.avator" mode="aspectFill"></image>
									</view>
									<view class="name">{{item.name}}</view>
								</view>
								<view class="like">
									<view class="icon">
										<image src="@/static/icon/kaCoin-like-index/like.png" v-if="!likes"></image>
										<image src="@/static/icon/kaCoin-like-index/like-h.png" v-else></image>
									</view>
									<text class="number" @click.native="onClickLike">{{ likeNum }}</text>
								</view>
							</view>
						</view>
						<!-- <contentIndex v-for="item in 20"></contentIndex> -->
					</view>
				</view>
				<view v-else-if="res == 4">
					<view class="contentCard">
						<view class="card" v-for="item in Food">
							<view class="top" @click="toPostDetail()">
								<image :src="item.ImgURL" mode="aspectFill"></image>
							</view>
							<text class="center">{{item.title}}</text>
							<view class="bottom">
								<view class="left">
									<view class="avatar">
										<image :src="item.avator" mode="aspectFill"></image>
									</view>
									<view class="name">{{item.name}}</view>
								</view>
								<view class="like">
									<view class="icon">
										<image src="@/static/icon/kaCoin-like-index/like.png" v-if="!likes"></image>
										<image src="@/static/icon/kaCoin-like-index/like-h.png" v-else></image>
									</view>
									<text class="number" @click.native="onClickLike">{{ likeNum }}</text>
								</view>
							</view>
						</view>
						<!-- <contentIndex v-for="item in 20"></contentIndex> -->
					</view>
				</view>
				<view v-else-if="res == 5">
					<view class="contentCard">
						<view class="card" v-for="item in Live">
							<view class="top" @click="toPostDetail()">
								<image :src="item.ImgURL" mode="aspectFill"></image>
							</view>
							<text class="center">{{item.title}}</text>
							<view class="bottom">
								<view class="left">
									<view class="avatar">
										<image :src="item.avator" mode="aspectFill"></image>
									</view>
									<view class="name">{{item.name}}</view>
								</view>
								<view class="like">
									<view class="icon">
										<image src="@/static/icon/kaCoin-like-index/like.png" v-if="!likes"></image>
										<image src="@/static/icon/kaCoin-like-index/like-h.png" v-else></image>
									</view>
									<text class="number" @click.native="onClickLike">{{ likeNum }}</text>
								</view>
							</view>
						</view>
						<!-- <contentIndex v-for="item in 20"></contentIndex> -->
					</view>
				</view>
				<view v-else="res  >= 6">
					<view class="contentCard">
						<view class="card" v-for="item in recommend">
							<view class="top" @click="toPostDetail()">
								<image :src="item.ImgURL" mode="aspectFill"></image>
							</view>
							<text class="center">{{ item.title }}</text>
							<view class="bottom">
								<view class="left">
									<view class="avatar">
										<image :src="item.avtor" mode="aspectFill"></image>
									</view>
									<view class="name">{{ item.name }}</view>
								</view>
								<view class="like">
									<view class="icon">
										<image src="@/static/icon/kaCoin-like-index/like.png" v-if="!likes"></image>
										<image src="@/static/icon/kaCoin-like-index/like-h.png" v-else></image>
									</view>
									<text class="number" @click.native="onClickLike">{{ likeNum }}</text>
								</view>
							</view>
						</view>
						<!-- <contentIndex v-for="item in 20"></contentIndex> -->
					</view>
				</view>
				<!-- <contentIndex v-for="item in 20"></contentIndex> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 1,
				res: 1,
			}
		},
		methods: {
			changePage(res) {
				return res
			},
			getItemIndex(index, id) {
				this.currentIndex = index
				this.res = index
			}


		}
	}
</script>

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
			name: "美食",
			id: 4
		},
		{
			name: "直播",
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

	let likes = ref(false)
	let likeNum = ref(1)

	const onClickLike = () => {
		likes.value = !likes.value
		if (likes.value) {
			likeNum.value++;
		} else {
			likeNum.value--;
		}
	}
	const toPostDetail = () => {
		uni.navigateTo({
			url: "/pages/detail/postDetail"
		})
	}

	const recommend = [{
		ImgURL: "/static/image/paigu.jpg",
		title: "很美味，很好吃",
		avtor: "/static/image/demo.jpg",
		name: "十月"
	}, {
		ImgURL: "https://pic4.zhimg.com/v2-45fb6a9d1aca9ec1301389112016fe87_r.jpg",
		title: "你敢信这景是重庆动物园？",
		avtor: "https://pic4.zhimg.com/v2-570aad7dbef96e49ab01780ab7ebc98b_r.jpg",
		name: "椰椰泡茶"
	}, {
		ImgURL: "https://pic4.zhimg.com/v2-02a93f89683201ff0979ab63dc344483_r.jpg",
		title: "晚上的鸿恩寺拍照真的绝~",
		avtor: "https://pic2.zhimg.com/v2-7f5e7ec5909bc70c37badc889ed52089_r.jpg",
		name: "牛奶糖117"
	}, {
		ImgURL: "https://pic1.zhimg.com/v2-780edcc54351725965dc76dd891a04f8_r.jpg",
		title: "南坪的这家终于来了，果然没让我失望",
		avtor: "https://pic3.zhimg.com/v2-1ef95ba71ce4e5a1f14401047efc5d36_r.jpg",
		name: "热雪奇迹"
	}, {
		ImgURL: "https://pic3.zhimg.com/v2-4a8c10ea8ec34049a2c7cb3f99b94d1e_r.jpg",
		title: "重庆赏花 | 海棠与樱花你能分辨吗",
		avtor: "https://pic3.zhimg.com/v2-829c2851efbe7a789da27fc05ec67f46_r.jpg",
		name: "明说明话"
	}, {
		ImgURL: "https://pic2.zhimg.com/v2-369807d37475a79102c27d12da55b8fd_r.jpg",
		title: "春天的湿地公园",
		avtor: "https://pic1.zhimg.com/v2-9007142c053eb1cebdc8bda4c8bea1dc_r.jpg",
		name: "摄影师景川"
	}, {
		ImgURL: "https://pic4.zhimg.com/80/v2-7067735303605615fc276a376a7d8a5f_720w.webp",
		title: "这里不是日本，是中国！",
		avtor: "https://pic4.zhimg.com/v2-09892b017cb86cd9b4f3c424523b518b_r.jpg",
		name: "南鱼伯"
	}, {
		ImgURL: "https://pic2.zhimg.com/v2-696b347aa5b02a943706d5de13dc6ec1_r.jpg",
		title: "在重庆，不要错过广阳岛的春天",
		avtor: "https://pic4.zhimg.com/v2-df0f9630b13b5155fe57ed5da88062f3_r.jpg",
		name: "蠢萌蠢萌喵"
	}, {
		ImgURL: "https://pic3.zhimg.com/v2-90f14ed9dcb7d95e2b902eee43abb292_r.jpg",
		title: "居然第一次进来",
		avtor: "https://pic4.zhimg.com/v2-0edeae4ae97593e0308f55455c90063b_r.jpg",
		name: "绿川悦子"
	}, {
		ImgURL: "https://pic1.zhimg.com/v2-d07703a854091b5466c2c61c8307bb64_r.jpg",
		title: "重庆小江南——彩云湖随摄",
		avtor: "https://pic1.zhimg.com/v2-764199c9470ff436082f35610f1f81f4_r.jpg",
		name: "爱吃的小胖子"
	}]
	const Native = [{
			ImgURL: "http://www.luketebo.icu:888/native/1.jpg",
			title: "每次来都只是在熙街消费",
			avator: "https://picx.zhimg.com/80/v2-e1c0cd5aebfa62318f12b1295d7004f5_720w.webp?source=1940ef5c",
			name: "大清早的猪"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/native/2.jpg",
			title: "如何在大学城浪费光阴",
			avator: "https://picx.zhimg.com/80/v2-95ed6ea0f78292c9cad905ad117c7fcc_720w.webp?source=1940ef5c",
			name: "黑娃很贪吃"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/native/3.jpg",
			title: "为了麻辣金钱牛肚我要来这里100次",
			avator: "https://pica.zhimg.com/80/v2-64176df43629b8aebcab92e2b8212083_720w.webp?source=1940ef5c",
			name: "迷糊十一"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/native/4.jpg",
			title: "虎峰山下的绝美避世小院",
			avator: "https://picx.zhimg.com/80/v2-29c615a14037b9898e3641f5523e8ca2_720w.webp?source=1940ef5c",
			name: "研_"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/native/5.jpg",
			title: "大学城试过环境最好的舞蹈室",
			avator: "https://picx.zhimg.com/80/v2-b6dfcc3c00478268ddada7bd8c79d187_720w.webp?source=1940ef5c",
			name: "一只小绵羊"
		}
	];

	const KaCoinLocation = [{
			ImgURL: "http://www.luketebo.icu:888/Location/1.jpg",
			title: "追梦到西周",
			avator: "https://picx.zhimg.com/80/v2-07b5dc350a9ab8509ebeff670b8f893b_720w.webp?source=1940ef5c",
			name: "十月"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/Location/2.jpg",
			title: "城中灯红酒绿",
			avator: "https://picx.zhimg.com/80/v2-07b5dc350a9ab8509ebeff670b8f893b_720w.webp?source=1940ef5c",
			name: "十月"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/Location/3.jpg",
			title: "山和远方",
			avator: "https://picx.zhimg.com/80/v2-07b5dc350a9ab8509ebeff670b8f893b_720w.webp?source=1940ef5c",
			name: "十月"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/Location/4.jpg",
			title: "瀑布",
			avator: "https://picx.zhimg.com/80/v2-07b5dc350a9ab8509ebeff670b8f893b_720w.webp?source=1940ef5c",
			name: "十月"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/Location/5.jpg",
			title: "赛博朋克",
			avator: "https://picx.zhimg.com/80/v2-07b5dc350a9ab8509ebeff670b8f893b_720w.webp?source=1940ef5c",
			name: "十月"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/Location/6.jpg",
			title: "登临欧洲城堡",
			avator: "https://picx.zhimg.com/80/v2-07b5dc350a9ab8509ebeff670b8f893b_720w.webp?source=1940ef5c",
			name: "十月"
		}
	]
	const Food = [{
			ImgURL: "http://www.luketebo.icu:888/food/1.jpg",
			title: "直接买了店里最火的两款",
			avator: "https://picx.zhimg.com/80/v2-8a4c8a4526a6dbaa33209aeaa4cbc3f8_720w.webp?source=1940ef5c",
			name: "RQ"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/food/2.jpg",
			title: "重庆26r的自助随便吃！",
			avator: "https://pica.zhimg.com/80/v2-4a70998f1ca9b52676f2d5612f786235_720w.webp?source=1940ef5c",
			name: "逃跑的肥牛卷"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/food/3.jpg",
			title: "真的好好吃，骗人的是小狗!",
			avator: "https://pic1.zhimg.com/80/v2-d55905cf8e4cddc49b09f3f6e5d8367a_720w.webp?source=1940ef5c",
			name: "吨吨饭桶"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/food/4.jpg",
			title: "团购双人餐的话女生四个人吃都够了",
			avator: "https://pica.zhimg.com/80/v2-361712a7bf9d49a371d6f9aa68114bb2_720w.webp?source=1940ef5c",
			name: "十一吃货"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/food/5.jpg",
			title: "我去专门是为了吃草莓",
			avator: "https://picx.zhimg.com/80/v2-b4c25a40719102c1a236178b8b2e388c_720w.webp?source=1940ef5c",
			name: "好运来"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/food/6.jpg",
			title: "慕名前来，秒杀两人餐，够够的了",
			avator: "https://picx.zhimg.com/80/v2-ac05fafee4a4d79921107c310c531f37_720w.webp?source=1940ef5c",
			name: "今天又吃啥了你"
		}
	]
	const Live = [{
			ImgURL: "http://www.luketebo.icu:888/Live/3.jpg",
			title: "美团外卖天台直播",
			avator: "https://picx.zhimg.com/80/v2-6b40d5f462399addb81f0df387d9c86e_720w.webp?source=1940ef5c",
			name: "AdF643674522"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/Live/4.jpg",
			title: "周四中午11点真人直播",
			avator: "https://pica.zhimg.com/80/v2-9d38d912a8f9a8e556af0c69f0b69d42_720w.webp?source=1940ef5c",
			name: "哎"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/Live/1.jpg",
			title: "夜宵专场：小龙虾21.9起",
			avator: "https://pica.zhimg.com/80/v2-287e5ca4bee0994633ea0453928dca5a_720w.webp?source=1940ef5c",
			name: "Ql_483746"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/Live/6.jpg",
			title: "美莱超值播超省钱",
			avator: "https://pic1.zhimg.com/80/v2-9827a51da130ed80c0da1387d4810266_720w.webp?source=1940ef5c",
			name: "美莱"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/Live/5.jpg",
			title: "美团大众点评新年宠粉首播",
			avator: "https://picx.zhimg.com/80/v2-a1324453a4859d5861e77fc27bdede2c_720w.webp?source=1940ef5c",
			name: "美团到店"
		},
		{
			ImgURL: "http://www.luketebo.icu:888/Live/2.jpg",
			title: "澳门锦鲤",
			avator: "https://picx.zhimg.com/80/v2-097bf2e2b5f78c2a17b67388d1a5e71c_720w.webp?source=1940ef5c",
			name: "吃喝玩乐购"
		}
	]
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

	.contentCard {
		display: grid;
		grid-template-columns: auto auto;
		margin: 15rpx;

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
				padding: 10rpx;
				font-weight: bold;
				// font-size: 25rpx;
			}

			.bottom {
				display: flex;
				padding: 2rpx 10rpx;
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
						padding-top: 8rpx;
						// font-weight: bold;
					}
				}

			}
		}
	}
</style>