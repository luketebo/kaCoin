<template>
	<view>
		<map id="kaCoinDetail" style="width: 750rpx; height: 100vh;" :latitude="latitude" :longitude="longitude"
			:markers="covers" :show-location="true">
			<view class="kaCoinDetailTop">
				<view class="kaCoinDetailTopLeft">KaCoin</view>
				<view class="kaCoinDetailTopRight">100</view>
			</view>
		</map>
	</view>
</template>

<script>
	import QQMapWX from '../../libs/qqmap-wx-jssdk.js';
	export default {
		data() {
			return {
				id: 0,
				title: "北京",
				latitude: 39.909,
				longitude: 116.39742,
				iconPath: "../../static/icon/kaCoin-map/location.png",
				width: 40,
				height: 40,
				covers: [{
						title: "熙街熙都会",
						id: parseInt(1),
						latitude: 29.603751,
						longitude: 106.302143,
						iconPath: "../../static/icon/kaCoin-map/location.png",
						width: 40,
						height: 40,
						label: {
							content: "熙街熙都会",
							color: "#ffffff",
							textAlign: 'center',
							borderColor: "#fe5d2a",
							borderWidth: 3,
							borderRadius: 10,
							bgColor: "#fe5d2a"
						}

					},
					{
						title: "熙街步行街",
						id: parseInt(2),
						latitude: 29.60147,
						longitude: 106.303276,
						iconPath: "../../static/icon/kaCoin-map/location.png",
						width: 40,
						height: 40,
						label: {
							content: "熙街步行街",
							color: "#ffffff",
							textAlign: 'center',
							borderColor: "#fe5d2a",
							borderWidth: 3,
							borderRadius: 10,
							bgColor: "#fe5d2a"
						}

					},
					{
						title: "龙川熙街",
						id: parseInt(3),
						latitude: 30.000357,
						longitude: 106.254213,
						iconPath: "../../static/icon/kaCoin-map/location.png",
						width: 40,
						height: 40,
						label: {
							content: "龙川熙街",
							color: "#ffffff",
							textAlign: 'center',
							borderColor: "#fe5d2a",
							borderWidth: 3,
							borderRadius: 10,
							bgColor: "#fe5d2a"
						}

					},
					{
						title: "保利万和学府影城（熙街店）",
						id: parseInt(4),
						latitude: 29.605362,
						longitude: 106.301272,
						iconPath: "../../static/icon/kaCoin-map/location.png",
						width: 40,
						height: 40,
						label: {
							content: "保利万和学府影城（熙街店）",
							color: "#ffffff",
							textAlign: 'center',
							borderColor: "#fe5d2a",
							borderWidth: 3,
							borderRadius: 10,
							bgColor: "#fe5d2a"
						}

					},
					{
						title: "美丽熙街1期",
						id: parseInt(5),
						latitude: 29.602345,
						longitude: 106.3013399,
						iconPath: "../../static/icon/kaCoin-map/location.png",
						width: 40,
						height: 40,
						label: {
							content: "美丽熙街1期",
							color: "#ffffff",
							textAlign: 'center',
							borderColor: "#fe5d2a",
							borderWidth: 3,
							borderRadius: 10,
							bgColor: "#fe5d2a"
						}

					},
					{
						title: "购物: 综合商场",
						id: parseInt(6),
						latitude: 29.606393,
						longitude: 106.301876,
						iconPath: "../../static/icon/kaCoin-map/location.png",
						width: 40,
						height: 40,
						label: {
							content: "购物: 综合商场",
							color: "#ffffff",
							textAlign: 'center',
							borderColor: "#fe5d2a",
							borderWidth: 3,
							borderRadius: 10,
							bgColor: "#fe5d2a"
						}

					},
				]

			}
		},
		methods: {
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
						uni.createMapContext("kaCoinDetail", this).moveToLocation({
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
			}

		},
		async mounted() {
			const location = await this.getLocationInfo();
			this.position = location.address;
			this.moveToLocation(this.position);
		},
	}
</script>

<style scoped lang="scss">
	.kaCoinDetailTop {
		display: flex;
		flex-direction: row;
		background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
		border-radius: 25rpx;
		margin-top: 30rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
		height: 200rpx;
		justify-content: space-around;
		align-items: center;

		.kaCoinDetailTopLeft {
			padding-left: 25rpx;
			font-size: 70rpx;
			color: white;

		}

		.kaCoinDetailTopRight {
			padding-right: 25rpx;
			font-size: 70rpx;
			color: white;
		}
	}
</style>
