<template>
	<view class="newsDetail">
		<view class="NDimg">
			<image src="../../static/image/paigu.jpg"></image>
		</view>
		<view class="title">真美味</view>
		<view class="info">
			<view class="author">编者： 十月</view>
			<view class="time">发布日期： 2023-10-11 10:11:45</view>
		</view>
		<view class="content">
			<rich-text>
				今天的“天福号”天福号酱肘子依然以其独特的风味吸引着社会各界人士的青睐。
				著名书法家舒适送天福号对联一副―――上联“天厨配佳肴熟肉异香扑鼻过客闻香下马”；
				下联“福案调珍馐酱肘殊味袭人宾朋知味停车”。
				北京市食品协会会长李士靖为天福号作藏头诗一首―――“庆贺老店又新生，天长地久享盛名，福星高照创伟业，号称同行排头兵。”
				京城这么多做肉的，天福号的名气这么大，关键讲得是信誉，天福号在信誉上真是没得说。
			</rich-text>
		</view>
		<view class="bottom">
			声明：本站的内容均采集与腾讯新闻，如果侵权请联系管理（123456789@qq.com）进行整改删除，本站进行了内容采集不代表本站及作者观点，若有侵犯请及时联系管理员，谢谢您的支持。
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

<style scoped lang="scss">
	.newsDetail {
		padding: 25rpx;

		.NDimg {
			height: 200rpx;

			image {
				width: 100%;
				height: 100%;

			}
		}

		.title {
			font-size: 40rpx;
			color: #333;
		}

		.info {
			display: flex;
			flex-direction: row;
			padding: 20rpx;
			justify-content: space-between;
			font-size: 25rpx;
			background-color: #F6F6F6;
			margin: 40rpx 0;
		}

		.content {
			padding-bottom: 50rpx;

			image {
				max-width: 100%;
			}
		}

		.bottom {
			background: #FEF0F0;
			color: #F89898;
			font-size: 26rpx;
			padding: 20rpx;
			line-height: 1.8em;
		}
	}
</style>
