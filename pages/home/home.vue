<template>
	<view class="home">
		<view class="homeBg">
			<view class="top">
				<topCardHome></topCardHome>
			</view>
			<view class="content">
				<contentCardHome></contentCardHome>
			</view>
		</view>
		<u-divider color="black">你可能还喜欢</u-divider>
		<view class="footer">
			<view class="contentCard">
				<contentIndex v-for="item in 20"></contentIndex>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.homeBg {
		background-image: linear-gradient(120deg, #f6d365 5%, #fda085 80%);
	}

	.footer {
		text {
			margin: 0 15rpx;
			display: flex;
			justify-content: center;
			// text-decoration: ;
		}
	}

	.contentCard {
		display: grid;
		grid-template-columns: auto auto;
		margin: 15rpx;
	}
</style>
