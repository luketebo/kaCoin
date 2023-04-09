<template>
	<view class="SearchCard">
		<view class="SearchCardLeft">
			<view class="SearchCardLeftImg">图片</view>
		</view>
		<view class="SearchCardRight">
			<view class="SearchCardRightBox">
				<view class="SearchCardRightBoxTitle">美食</view>
				<view class="SearchCardRightBoxAppraise">评价</view>
				<view class="SearchCardRightBoxComments">评论</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "searchCard",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.SearchCard {
		
		display: flex;
		flex-direction: row;

		.SearchCardLeft {
			.SearchCardLeftImg{
				border: 1rpx solid red;
			}
		}
		.SearchCardRight {
			.SearchCardRightBox {
				.SearchCardRightBoxTitle {
					border: 1rpx solid red;
				}
				.SearchCardRightBoxAppraise{
					border: 1rpx solid red;
				}
				.SearchCardRightBoxComments {
					border: 1rpx solid red;
				}
			}
		}
	}
</style>