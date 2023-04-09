"use strict";
const common_vendor = require("../../common/vendor.js");
const libs_qqmapWxJssdk = require("../../libs/qqmap-wx-jssdk.js");
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_u_toast2 = common_vendor.resolveComponent("u-toast");
  (_easycom_u_search2 + _easycom_u_toast2)();
}
const _easycom_u_search = () => "../../uni_modules/vk-uview-ui/components/u-search/u-search.js";
const _easycom_u_toast = () => "../../uni_modules/vk-uview-ui/components/u-toast/u-toast.js";
if (!Math) {
  (_easycom_u_search + _easycom_u_toast)();
}
const __default__ = {
  data() {
    return {
      position: ""
    };
  },
  methods: {
    // 跳转搜索页面
    toSearch() {
      console.log("click");
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
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
          address: ""
        };
        common_vendor.index.getLocation({
          type: "gcj02",
          success(res) {
            location.latitude = res.latitude;
            location.longitude = res.longitude;
            const qqmapsdk = new libs_qqmapWxJssdk.QQMapWX({
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
            });
          },
          fail(err) {
            console.log(err);
            resolve(location);
          }
        });
      });
    },
    showToast(te, tp) {
      this.$refs.uToast.show({
        title: te,
        type: tp
      });
    },
    scanCode() {
      common_vendor.index.scanCode({
        // 将数据处理成为json格式，方便后续处理
        success: (res) => {
          var obj = JSON.parse(res.result);
          const location = this.getLocationInfo();
          console.log(location);
          const _this = this;
          location.then(function(data) {
            const qqmapsdk = new libs_qqmapWxJssdk.QQMapWX({
              key: "5CIBZ-M47NX-WBZ4E-ZYX5R-QCBOK-DIFQ4"
            });
            qqmapsdk.calculateDistance({
              mode: "",
              // 起始位置
              from: {
                latitude: data.latitude,
                longitude: data.longitude
              },
              // 终点
              to: [{
                latitude: obj.latitude,
                longitude: obj.longitude
              }],
              success(res2, data2) {
                let dis = res2.result.elements;
                for (let i = 0; i < res2.result.elements.length; i++) {
                  console.log(dis[i].distance);
                  if (500 > dis[i].distance) {
                    let coin = "+" + obj.kaCoin;
                    _this.showToast(coin, "success");
                  } else {
                    _this.showToast("出错啦！请重试", "error");
                  }
                }
              },
              fail(err) {
                console.log(err);
              }
            });
          });
        }
      });
    }
  },
  async mounted() {
    const location = await this.getLocationInfo();
    this.position = location.city;
    console.log(location);
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "topBarIndex",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(_ctx.position),
        b: common_vendor.o(($event) => _ctx.toSearch()),
        c: common_vendor.p({
          placeholder: "日照香炉生紫烟",
          disabled: true,
          ["show-action"]: false,
          ["input-align"]: "center",
          clearabled: true,
          shape: "square"
        }),
        d: common_vendor.o((...args) => _ctx.scanCode && _ctx.scanCode(...args)),
        e: common_vendor.sr("uToast", "7f451f83-1"),
        f: common_vendor.sr("uToast", "7f451f83-2")
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7f451f83"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/topBarIndex/topBarIndex.vue"]]);
wx.createComponent(Component);
