<template>
	<view>
		<map :scale="scale" style="width: 100%; height: 100%;" enable-3D="false" show-compass="false"
			enable-overlooking="false" :enable-satellite="false" :enable-traffic="false" show-location="false"
			:latitude="latitude" :longitude="longitude" :markers="covers">
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}]
			}
		},
		methods: {

		}
	}
</script>
<style scoped lang="scss">

</style>
