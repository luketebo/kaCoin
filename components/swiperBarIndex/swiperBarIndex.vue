<template>
	<view class="swiperBar" @click="tomoreDetail()">
		<scroll-view scroll-x="true" class="scrollBar">
			<view class="item" v-for="item in itemArr">
				<view class="top">
					<view class="pic">
						<image :src="item.topImg" mode="aspectFill"></image>
					</view>
					<text>{{item.top}}</text>
				</view>
				<view class="bottom">
					<view class="pic">
						<image :src="item.bottomImg"></image>
					</view>
					<text>{{item.bottom}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	import {
		computed
	} from 'vue'
	// import {
	// 	require
	// } from 'vue'

	const itemArr = [{
			id: 0,
			top: "美食",
			topImg: "/static/image/index/xiaochi.png",
			bottom: "医疗/健康",
			bottomImg: "/static/image/index/yiliaofuwu.png"
		},
		{
			id: 1,
			top: "景点",
			topImg: "/static/image/index/jingdian.png",
			bottom: "理发/男士",
			bottomImg: "/static/image/index/jiandao.png"
		},
		{
			id: 2,
			top: "酒店/民宿",
			topImg: "/static/image/index/jiudian.png",
			bottom: "学习培训",
			bottomImg: "/static/image/index/xuexijihua.png"
		},
		{
			id: 3,
			top: "休闲/玩乐",
			topImg: "/static/image/index/jiubei.png",
			bottom: "生活服务",
			bottomImg: "/static/image/index/shenghuofuwu.png"
		},
		{
			id: 4,
			top: "电影/演出",
			topImg: "/static/image/index/kandianying.png",
			bottom: "母婴服务",
			bottomImg: "/static/image/index/muying.png"
		},
		{
			id: 5,
			top: "美团外卖",
			topImg: "/static/image/index/tongchengwaimai.png",
			bottom: "宠物",
			bottomImg: "/static/image/index/chongwu.png"
		},
		{
			id: 6,
			top: "KTV",
			topImg: "/static/image/index/maikefeng-Kge-KTV-huatong.png",
			bottom: "商场/购物",
			bottomImg: "/static/image/index/gouwuche-gouwu-shoucang.png"
		},
		{
			id: 7,
			top: "结婚/婚纱",
			topImg: "/static/image/index/jinianri.png",
			bottom: "飞机票/机票",
			bottomImg: "/static/image/index/tubiaozhizuomoban_feijipiao.png"
		},
		{
			id: 8,
			top: "鲜花",
			topImg: "/static/image/index/xianhua.png",
			bottom: "家居/装修",
			bottomImg: "/static/image/index/jiaju.png"
		},
		{
			id: 9,
			top: "面包甜点",
			topImg: "/static/image/index/tiandian.png",
			bottom: "全部服务",
			bottomImg: "/static/image/index/quanbu.png"
		}
	];

	let getAsstsImages = computed(() => (name, type = 'jpg') => {
		const path = `/static/image/index/${name}.${type}`
		const modules =
			import.meta.globEager('/static/image/index/*')
		console.log(modules[path].default)
		return modules[path]
	})
	const tomoreDetail = () => {
		uni.navigateTo({
			url: "/pages/detail/moreDetail",
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	}
</script>
<style lang='scss' scoped>
	.swiperBar {
		height: 225rpx;
		padding-bottom: 25rpx;
		margin: 0rpx 15rpx;

		.scrollBar {
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

			.item {

				height: inherit;
				width: 150rpx;
				display: inline-block;

				.top {
					height: 110rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.pic {
						height: 55rpx;
						width: 55rpx;

						image {
							height: 100%;
							width: 100%;
						}
					}

					text {
						font-size: 25rpx;
						font-weight: bold;
					}
				}

				.bottom {
					height: 110rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.pic {
						height: 55rpx;
						width: 55rpx;

						image {
							height: 100%;
							width: 100%;
						}
					}

					text {
						font-size: 25rpx;
						font-weight: bold;
					}
				}
			}
		}

	}
</style>