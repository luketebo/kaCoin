<template>
	<view class="topBar">
		<view class="left">{{ position }}</view>
		<view class="center">
			<u-search placeholder="日照香炉生紫烟" :show-action="false" input-align="center" :clearabled="true" shape="square">
			</u-search>
		</view>
		<view class="right">
			<image src="../../static/icon/kaCoin-topBar-index/saoma.png" mode="aspectFit" @click.navtive="scanCode">
			</image>
			<u-toast ref="uToast"></u-toast>
		</view>
	</view>
</template>
<script>
	import QQMapWX from '../../libs/qqmap-wx-jssdk.js'
	export default {
		data() {
			return {
				position: ""
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
							location.latitude = res.latitude;
							location.longitude = res.longitude;
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
			showToast() {
				uni.showToast({
					title: "+10",
					duration: 2000
				})
			},
			scanCode() {
				uni.scanCode({
					// 将数据处理成为json格式，方便后续处理
					success: (res) => {
						console.log(res.result)
						var obj = JSON.parse(res.result)
						const location = this.getLocationInfo()
						location.then(function(data) {
							const qqmapsdk = new QQMapWX({
								key: "5CIBZ-M47NX-WBZ4E-ZYX5R-QCBOK-DIFQ4"
							});
							qqmapsdk.calculateDistance({
								mode: "",
								// 起始位置
								from: {
									latitude: location.latitude,
									longitude: location.longitude
								},
								// 终端
								to: {
									latitude: obj.latitude,
									longitude: obj.longitude
								},
								success(res, data) {
									console.log(res)
									console.log(data)
								}
							})

						})


						this.showToast()
					}
				})
			}
		},
		async mounted() {
			const location = await this.getLocationInfo();
			this.position = location.city;
			console.log(location)
		}
	}
</script>
// <script setup>
	// 	const showToast = () => {
	// 		uni.showToast({
	// 			title: "+10",
	// 			duration: 2000
	// 		})
	// 	}
	// 	// 添加扫码事件
	// 	const scanCode = () => {
	// 		uni.scanCode({
	// 			// 将数据处理成为json格式，方便后续处理
	// 			success: (res) => {
	// 				console.log(res.result)
	// 				var obj = JSON.parse(res.result)
	// 				const qqmapsdk = new QQMapWX({
	// 					key: "5CIBZ-M47NX-WBZ4E-ZYX5R-QCBOK-DIFQ4"
	// 				});
	// 				qqmapsdk.calculateDistance({
	// 					mode: "",
	// 					// 起始位置
	// 					from: "",
	// 					// 终端
	// 					to: "",
	// 				})
	// 				showToast()
	// 			}
	// 		})
	// 	}
	// 
</script>

<style lang='scss' scoped>
	.topBar {

		padding-top: 25rpx;
		/* height: 35rpx; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 25rpx;
		margin: 0rpx 35rpx;

		.left {
			font-weight: bold;
			/* margin-left: 35rpx; */
		}

		.center {}

		.right {
			height: 50rpx;
			width: 50rpx;
			/* margin-right: 55rpx; */

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
