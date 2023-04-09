<template>
	<view class="submitMessage">
		<view class="submitMessage-package">
			<u-form :model="form" ref="uForm" class='submitMessage-package-form'>
				<u-form-item>
					<u-input placeholder="添加标题更容易上首页哟~" v-model="form.name" />
				</u-form-item>
				<u-form-item>
					<u-input :height="height" :auto-height='autoHeight' placeholder="写一篇笔记,分享近期种草的宝藏地点吧" :type="type"
						v-model="form.intro" />
				</u-form-item>
				<u-form-item>
					<u-upload></u-upload>
				</u-form-item>
			</u-form>
		</view>
		<view class="submitMessage-btn">
			<u-button class="submitMessage-btn-rought" @click="submit" type="warning">草稿
			</u-button>
			<u-button class="submitMessage-btn-submit" @click="submit" type="warning" shape="circle">提交
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		name: "submitMessageSubmit",
		data() {
			return {
				form: {
					name: '',
					intro: '',
					sex: ''
				},
				type: 'textarea',
				height: 420,
				autoHeight: false,
				checkboxList: [{
						name: '苹果',
						checked: false,
						disabled: false
					},
					{
						name: '雪梨',
						checked: false,
						disabled: false
					},
					{
						name: '柠檬',
						checked: false,
						disabled: false
					}
				],
				radioList: [{
						name: '鲜甜',
						disabled: false
					},
					{
						name: '麻辣',
						disabled: false
					}
				],
				radio: '',
				switchVal: false
			};
		},
		methods: {
			submit() {

			}
		}
	}
</script>

<style lang="less">
	.submitMessage {
		height: 100%;
		width: 750rpx;
		background-color: white;
		display: flex;
		flex-flow: row wrap;
		// border: 1rpx solid red;

		&-package {
			padding: 0 15rpx;
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-self: flex-start;

			&-form {
				margin: 0 0 15rpx 0;
			}
		}

		&-btn {
			position: fixed;
			left: 0rpx;
			bottom: 0rpx;
			align-self: flex-end;
			// background-color: black;
			width: 100%;
			display: flex;
			margin-top: 500rpx;

			&-rought {
				display: inline-block;
				margin: 0 15rpx;
			}

			&-submit {
				flex: 1;
				display: inline-block;
			}
		}
	}
</style>