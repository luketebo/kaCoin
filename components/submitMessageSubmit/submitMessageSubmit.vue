<template>
	<view class="submitMessage">
		<view class="submitMessage-package">
			<u-form :model="form" ref="uForm">

			</u-form>
		</view>
	</view>
</template>

<script>
	export default {
		name: "submitMessageSubmit",
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.submitMessage {
		height: 750rpx;
		width: 750rpx;

		&-package {
			padding: 0 15rpx;
			height: 100%;
			width: 100%;

			&-pic {
				height: 150rpx;
				border: 1rpx solid red;
			}

			&-title {
				height: 100rpx;
				border: 1rpx solid red;
			}

			&-content {
				height: 500rpx;
				border: 1rpx solid red;
			}
		}
	}
</style>
