<template>
	<view class="searchDetailFrame">
		<view class="searchDetailTop">
			<u-search @search="toSearchDetail()" :show-action="true" action-text="搜索" :clearabled="true" shape="squre">
			</u-search>
		</view>
		<view class="searchDetailBar">
			<view class="SearchCard" v-for="item in merchant">
				<view class="SearchCardLeft">
					<view class="SearchCardLeftImg">
						<image :src="item.ImgURL" mode="aspectFill"></image>
					</view>
				</view>
				<view class="SearchCardRight">
					<view class="SearchCardRightBox">
						<view class="SearchCardRightBoxTitle">{{ item.name }}</view>
						<view class="SearchCardRightBoxAppraise">{{ item.appraise }}</view>
						<view class="SearchCardRightBoxComments">{{ item.comments }}</view>
					</view>
				</view>
			</view><!-- 
			<view class="searchDetailBarMerchant">商户</view>
			<view class="searchDetailBarNote">笔记</view>
			<view class="searchDetailUser">用户</view>
			<view class="searchDetailShop">团购</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				merchant: [{
						ImgURL: "http://www.luketebo.icu:888/merchant/1.jpg",
						name: "乡村岁月 · 原乡特色农家菜 ",
						appraise: "⭐⭐⭐⭐ 3.9 315条 ￥71/条",
						comments: "\"[粉丝虾仁] 好评，每只虾都很大\""
					},
					{
						ImgURL: "http://www.luketebo.icu:888/merchant/2.jpg",
						name: "阿姨印象 (龙湖U城店)",
						appraise: "⭐⭐⭐⭐⭐ 4.8 2039条 ￥62/人",
						comments: "\"在尖顶坡地铁站附近的帅哥...\""
					},
					{
						ImgURL: "http://www.luketebo.icu:888/merchant/3.jpg",
						name: "潘一桃 · 烤肉无限续(大学城店)",
						appraise: "⭐⭐⭐⭐⭐ 4.8 865条 ￥48/人",
						comments: "\"很好吃，沾碟的味道超级正，巨推荐来吃\""
					},
					{
						ImgURL: "http://www.luketebo.icu:888/merchant/4.jpg",
						name: "渝厨生态火锅(熙街店)",
						appraise: "⭐⭐⭐⭐⭐ 4.7 995条 ￥64/人",
						comments: "\"火锅味道还行，菜品也很新鲜\""
					},
					{
						ImgURL: "http://www.luketebo.icu:888/merchant/5.jpg",
						name: "醉小酒馆 · 川菜 · 江湖菜",
						appraise: "⭐⭐⭐⭐ 4.4 4081条 ￥67/人",
						comments: "\"味道不错，酒不错，菜品卖好\""
					},
				]

			};
		}
	}
</script>

<style lang="scss" scoped>
	.searchDetailFrame {
		width: 750rpx;
		padding: 0 15rpx 0 15rpx;

		.searchDetailTop {
			padding-top: 15rpx;
			padding-left: 55rpx;
		}

		.searchDetailBar {
			padding-top: 15rpx;

			.SearchCard {
				height: 300rpx;
				margin-bottom: 15rpx;
				width: 750rpx;
				display: flex;
				flex-direction: row;

				.SearchCardLeft {
					height: inherit;
					width: 300rpx;
					padding-right: 15rpx;

					.SearchCardLeftImg {
						height: 250rpx;
						width: 300rpx;

						image {
							height: 100%;
							width: 100%;
							border-radius: 10rpx;
							// border-radius: 15% 0 0 15%;
						}
					}
				}

				.SearchCardRight {
					height: inherit;
					width: auto;
					padding-left: 15rpx;

					.SearchCardRightBox {
						height: inherit;
						width: 400rpx;
						justify-content: space-around;

						.SearchCardRightBoxTitle {
							font-family: "微软雅黑";
							font-weight: bold;
							font-size: 35rpx;
							letter-spacing: 3rpx;
						}

						.SearchCardRightBoxAppraise {
							padding-top: 15rpx;
							padding-bottom: 15rpx;
							font-weight: bold;
							color: red;
						}

						.SearchCardRightBoxComments {
							font-family: "微软雅黑";
							font-weight: bold;
						}
					}
				}
			}
		}
	}
</style>