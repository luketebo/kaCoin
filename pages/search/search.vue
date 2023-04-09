<template>
	<view class="searchFrame">
		<view class="searchTop">
			<u-search placeholder="日照香炉生紫烟" @search="toSearchDetail()" :show-action="true" action-text="搜索"
				:clearabled="true" shape="squre">
			</u-search>
		</view>
		<view class="historySearch">
			<view class="historySearchTop">
				<view class="historySearchTopFont">历史搜索</view>
				<view class="historySearchTopIcon">
					<image src="../../static/icon/kaCoin-search/trash.png"></image>
				</view>
			</view>
			<view class="historySearchBottom">
				<view class="historySearchBottomItem" v-for="item in itemSearch">{{ item.iS }}</view>
			</view>
		</view>
		<view class="exploreSearch">
			<view class="exploreSearchTop">
				搜索发现
			</view>
			<view class="exploreSearchBottom">
				<view class="exploreSearchBottomItem" v-for="item in itemArr">{{ item.SN }}</view>
			</view>
		</view>
		<view class="hotSearch">
			<scroll-view scroll-x="true" class="hotSearchScrollBar">
				<view class="hotSearchScrollBarItem" v-for="item in hotItem">
					<view class="hotSearchScrollBarItemTitle">{{ item.title }}</view>
					<view class="hotSearchScrollBarItemContent" v-for="(content, index) in item.content">
						<view class="hotSearchScrollBarItemContentNum" :class="[index > 2 ? '' : 'Searchactive']">
							{{content.num}}
						</view>
						<view class="hotSearchScrollBarItemContentDetail">{{content.content}}</view>
						<view class="hotSearchScrollBarItemContentHot"> {{content.hot}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
	<view class="searchButtom">
		搜索指数是根据搜索词的热度，增速趋势等综合计算得出
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hotItem: [{
						title: "重庆热搜",
						content: [{
								num: 1,
								content: "秋嬢嬢火锅",
								hot: "87509"
							},
							{
								num: 2,
								content: "茶颜悦色奶茶",
								hot: "83336"
							},
							{
								num: 3,
								content: "雨树餐厅",
								hot: "82008"
							},
							{
								num: 4,
								content: "南坪美食",
								hot: "77625"
							},
							{
								num: 5,
								content: "李子坝小黄楼",
								hot: "76658"
							},
							{
								num: 6,
								content: "黄泥滂美食",
								hot: "76658"
							},
							{
								num: 7,
								content: "洪崖洞附近美食",
								hot: "73572"
							},
							{
								num: 8,
								content: "适合过生日的餐厅",
								hot: "70564"
							},
							{
								num: 9,
								content: "鼎凰花胶鸡",
								hot: "70564"
							},
							{
								num: 10,
								content: "井里海鲜自助餐",
								hot: "65604"
							}
						]
					},
					{
						title: "精选内容",
						content: [{
								num: 1,
								content: "南滨路江景餐厅",
								hot: "88847"
							},
							{
								num: 2,
								content: "重庆海鲜自助餐推荐",
								hot: "84696"
							},
							{
								num: 3,
								content: "重庆夜景打卡地",
								hot: "84694"
							},
							{
								num: 4,
								content: "重庆晚上适合晚上玩",
								hot: "83619"
							},
							{
								num: 5,
								content: "云龟山露营基地",
								hot: "82658"
							},
							{
								num: 6,
								content: "万分之五精酿烧鸟",
								hot: "79920"
							},
							{
								num: 7,
								content: "解放碑美食推荐",
								hot: "77159"
							},
							{
								num: 8,
								content: "马尔代夫重庆分夫",
								hot: "73514"
							},
							{
								num: 9,
								content: "武隆天坑一日游",
								hot: "72585"
							},
							{
								num: 10,
								content: "美心红酒小镇",
								hot: "70241"
							}
						]

					},
					{
						title: "美食推荐",
						content: [{
								num: 1,
								content: "向玉珍烤五花总店",
								hot: "87877"
							},
							{
								num: 2,
								content: "萌达鳗",
								hot: "83706"
							},
							{
								num: 3,
								content: "窈窕江湖小酒馆",
								hot: "81530"
							},
							{
								num: 4,
								content: "黄妈手撕烤兔",
								hot: "80809"
							},
							{
								num: 5,
								content: "东西THINGS",
								hot: "77164"
							},
							{
								num: 6,
								content: "都点蘸蘸水菜",
								hot: "76298"
							},
							{
								num: 7,
								content: "啵樱冰粉",
								hot: "75752"
							},
							{
								num: 8,
								content: "蜜糖和果树",
								hot: "72564"
							},
							{
								num: 9,
								content: "山城老堂口",
								hot: "70564"
							},
							{
								num: 10,
								content: "吾夜",
								hot: "68828"
							}
						]

					}
				],
				itemSearch: [{
						iS: "眼镜店"
					},
					{
						iS: "火锅"
					},
					{
						iS: "乌鱼"
					},
					{
						iS: "午餐"
					},
					{
						iS: "吴胖子"
					}
				],
				itemArr: [{
						SN: "中国"
					},
					{
						SN: "熙街"
					},
					{
						SN: "美食"
					},
					{
						SN: "重庆"
					},
					{
						SN: "秀湖"
					}
				]
			};
		},
		methods: {
			toSearchDetail() {
				uni.navigateTo({
					url: "searchDetail/searchDetail"
				})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.searchFrame {
		width: 750rpx;
		padding: 0 15rpx 0 15rpx;

		.searchTop {
			padding-top: 15rpx;
			padding-left: 55rpx;

		}

		.historySearch {
			margin-top: 15rpx;
			height: 150rpx;
			width: 100%;

			.historySearchTop {
				height: 50rpx;
				display: flex;
				justify-content: space-between;
				margin-bottom: 15rpx;

				.historySearchTopFont {
					height: inherit;
					font-weight: bold;
					font-size: 34rpx;
				}

				.historySearchTopIcon {
					height: inherit;
					width: 55rpx;

					image {
						height: 100%;
						width: 100%;

					}
				}
			}

			.historySearchBottom {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				.historySearchBottomItem {
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 25rpx;
					background-color: whitesmoke;
					margin: 5rpx 15rpx 5rpx 15rpx;
					height: 35rpx;
					width: 100rpx;
				}

			}
		}

		.exploreSearch {
			height: 150rpx;
			width: 100%;

			.exploreSearchTop {
				display: flex;
				font-weight: bold;
				font-size: 34rpx;
				margin-bottom: 15rpx;
			}

			.exploreSearchBottom {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				.exploreSearchBottomItem {
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 25rpx;
					background-color: whitesmoke;
					margin: 5rpx 15rpx 5rpx 15rpx;
					height: 35rpx;
					width: 100rpx;
				}
			}
		}

		.hotSearch {
			// height: 800rpx;
			width: 100%;
			margin-top: 15rpx;
			border-radius: 15rpx;

			.hotSearchScrollBar {
				// height: inherit;
				white-space: nowrap;
				border-radius: 15rpx;

				:deep(::-webkit-scrollbar) {
					width: 4px !important;
					height: 1px !important;
					overflow: auto !important;
					background: transparent !important;
					-webkit-appearance: auto !important;
					display: block;
				}

				.hotSearchScrollBarItem {
					// height: 200rpx;
					width: 600rpx;
					display: inline-block;
					margin: 0rpx 0rpx 0rpx 35rpx;
					border: 1rpx solid whitesmoke;
					// background-color: whitesmoke;
					border-radius: 15rpx;

					.hotSearchScrollBarItemTitle {
						font-size: 35rpx;
						font-weight: bold;
						padding-left: 15rpx;
						padding-top: 15rpx;
						color: #fe5d2a;
					}

					.hotSearchScrollBarItemContent {
						height: 100rpx;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						padding-left: 15rpx;
						padding-right: 15rpx;
						padding-top: 55rpx;
						padding-bottom: 35rpx;

						.hotSearchScrollBarItemContentNum {
							font-weight: bold;
						}

						.hotSearchScrollBarItemContentDetail {
							display: flex;
							font-weight: bold;
						}

						.hotSearchScrollBarItemContentHot {
							font-weight: bold;
						}
					}
				}
			}
		}
	}

	.searchButtom {
		margin-top: 35rpx;
		margin-bottom: 15rpx;
		font-size: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: gainsboro;
	}

	.Searchactive {
		color: #fe5d2a;
	}
</style>