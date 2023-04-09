<template>
	<view>
		<map id="kaCoin" style="width: 750rpx; height: 100vh;" :latitude="latitude" :longitude="longitude"
			:markers="covers" :show-location="true">
			<view class="map_top">
				<view class="map_search">
					<u-search @click="toSearch()" placeholder="日照香炉生紫烟" :disabled="true" :show-action="false"
						input-align="center" :clearabled="true" @search="searchLocation" shape="square">
					</u-search>
				</view>
				<view class="map_elect">
					<view class="map_distance">距离/区域</view>
					<view class="map_condition">更多筛选</view>
				</view>
			</view>
			<view class="map_location" @click="moveToLocation(position)">
				<image src="../../static/icon/kaCoin-map/clicked-location.png"></image>
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
				id: 0,
				title: 'kaCoin',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [

				],
				position: ""

			}

		},
		methods: {
			// 跳转搜索栏
			toSearch() {
				uni.navigateTo({
					url: "/pages/search/search"
				})
			},
			// 获取当前定位
			getLocationInfo() {
				return new Promise((resolve) => {
					let location = {
						longitude: 0,
						latitude: 0,
						province: "",
						city: "",
						area: "",
						street: "",
						address: "",
					};
					uni.getLocation({
						type: "gcj02",
						success(res) {
							location.longitude = res.longitude;
							location.latitude = res.latitude;
							const qqmapsdk = new QQMapWX({
								key: "5CIBZ-M47NX-WBZ4E-ZYX5R-QCBOK-DIFQ4"
							});
							qqmapsdk.reverseGeocoder({
								location,
								success(response) {
									let info = response.result;
									location.province = info.address_component.province;
									location.city = info.address_component.city;
									location.area = info.address_component.district;
									location.street = info.address_component.street;
									location.address = info.address;
									resolve(location);
								}
							})
						},
						fail(err) {
							console.log(err);
							resolve(location);
						}
					})
				})
			},

			// 点击地图时移动
			moveToLocation(obj) {
				const qqmapsdk = new QQMapWX({
					key: "5CIBZ-M47NX-WBZ4E-ZYX5R-QCBOK-DIFQ4"
				});
				qqmapsdk.reverseGeocoder({
					address: obj,
					success: (res) => {
						console.log(res)
						var res = res.result;
						var latitude = res.location.lat;
						var longitude = res.location.lng;
						uni.createMapContext("kaCoin", this).moveToLocation({
							latitude: latitude,
							longitude: longitude,
							success: (res) => {
								console.log("位置调用成功")
							},
							fail: (res) => {
								uni.showModal({
									content: "位置调用失败",
									showCancel: false

								})
							}
						});
					}
				})
			},
			// 处理搜索
			searchLocation(res) {
				const qqmapsdk = new QQMapWX({
					key: "5CIBZ-M47NX-WBZ4E-ZYX5R-QCBOK-DIFQ4"
				});
				const location = this.getLocationInfo()
				qqmapsdk.search({
					keyword: res,
					location: (location.latitude, location.longitude),
					success: res => {
						console.log(res)
						var cvs = [];
						for (var i = 0; i < res.data.length; i++) {
							cvs.push({
								title: res.data[i].title,
								id: parseInt(res.data[i].id),
								latitude: res.data[i].location.lat,
								longitude: res.data[i].location.lng,
								iconPath: "../../static/icon/kaCoin-map/location.png",
								width: 40,
								height: 40,
								label: {
									content: res.data[i].title,
									color: "#ffffff",
									textAlign: 'center',
									borderColor: "#fe5d2a",
									borderWidth: 3,
									borderRadius: 10,
									bgColor: "#fe5d2a"
								}
							})
						}
						this.covers = cvs
					},
					fail: (res) => {
						console.log(res)
					},
					complete: (res) => {
						console.log(res);
					}

				})
			},


		},
		async onLoad() {
			const location = await this.getLocationInfo();
			this.position = location.address;
			this.moveToLocation(this.position);
		},
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
		height: 90rpx;
		width: 90rpx;
		position: absolute;
		right: 85rpx;
		bottom: 200rpx;

		image {
			height: 100%;
			width: 100%;
		}
	}
</style>