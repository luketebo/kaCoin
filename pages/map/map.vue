<template>
	<view>
		<map id="kaCoin" style="width: 750rpx; height: 100vh;" :latitude="latitude" :longitude="longitude"
			:markers="covers" show-location>
			<view class="map_top">
				<view class="map_search">
					<u-search placeholder="日照香炉生紫烟" :show-action="false" input-align="center" :clearabled="true"
						shape="square">
					</u-search>
				</view>
				<view class="map_elect">
					<view class="map_distance">距离/区域</view>
					<view class="map_condition">更多筛选</view>
				</view>
			</view>
			<view style="margin-top: 40rpx; margin-left: 16rpx; color: red; border: 3rpx red solid;">
				当前定位： {{ position }}
			</view>
			<view class="map_location">
				ddd
			</view>
			<view>上拉条</view>
		</map>
	</view>
</template>

<script>
	import QQMapWX from '../../libs/qqmap-wx-jssdk.js';
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
						id: 0,
						width: "25",
						height: "25",
						latitude: 39.909,
						longitude: 116.39742,
						iconPath: '../../static/icon/kaCoin-map/location.png'
					},
					// {
					// 	id: 1,
					// 	width: "25",
					// 	height: "25",
					// 	latitude: 39.90,
					// 	longitude: 116.39,
					// 	iconPath: '../../static/icon/kaCoin-map/location.png'
					// },
				],
				position: "",
			}
		},
		methods: {
			// 获取当前位置
			getLocationInfo() {
				return new Promise((resolve) => {
					let location = {
						longitude: 0,
						latitude: 0,
						province: "",
						city: "",
						area: "",
						street: "",
						address: ""
					};
					uni.getLocation({
						type: "gcj02",
						success(res) {
							location.longitude = res.longitude;
							location.latitude = res.latitude;
							// 地图api
							const qqmapsdk = new QQMapWX({
								key: "5CIBZ-M47NX-WBZ4E-ZYX5R-QCBOK-DIFQ4"
							});
							qqmapsdk.reverseGeocoder({
								location,
								success(response) {
									let info = response.result;
									console.log(info);
									location.province = info.address_component.province;
									location.city = info.address_component.city;
									location.street = info.address_component.district;
									location.address = info.address;
									resolve(location);
								}
							})
						},
						fail(err) {
							console.log(err)
							resolve(location)
						}
					})
				})
			},
			// 移动定位点
			moveTolocation(obj) {
				let mapObj = uni.createMapContext('kaCoin', this);
				mapObj.moveToLocation({
					obj.longitude,
					obj.latitude
				}) {
					success(res) {
						console.log(res)
					};
					fail(err) {
						console.log(err)
					}

				}
			}

		},
		async onLoad() {
			const location = await this.getLocationInfo();
			this.position = location.address;
			this.covers[0].latitude = location.latitude;
			this.covers[0].longitude = location.longitude;
			// moveTolocation(location);
		}

	}
</script>
<style scoped lang="scss">
	.map_top {
		height: 200rpx;
		background-color: white;
		margin-top: 30rpx;
		border-radius: 20rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;


		.map_search {
			padding: 15rpx 15rpx 0rpx 15rpx;
		}

		.map_elect {
			display: flex;
			justify-content: space-between;
			// align-items: center;
			height: 60rpx;

			.map_distance {
				border-radius: 25rpx;
				width: 360rpx;
				background-color: #f2f2f2;
				margin: 3rpx 6rpx 0rpx 6rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.map_condition {
				border-radius: 25rpx;
				width: 360rpx;
				background-color: #f2f2f2;
				margin: 3rpx 6rpx 0rpx 6rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

	}

	.map_location {
		height: 50rpx;
		width: 65rpx;
		border: 1rpx solid red;

		image {
			height: 100%;
			width: 100%;
		}
	}
</style>
