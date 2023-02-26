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
    showToast() {
      common_vendor.index.showToast({
        title: "+10",
        duration: 2e3
      });
    },
    scanCode() {
      common_vendor.index.scanCode({
        // 将数据处理成为json格式，方便后续处理
        success: (res) => {
          console.log(res.result);
          var obj = JSON.parse(res.result);
          const location = this.getLocationInfo();
          location.then(function(data) {
            const qqmapsdk = new libs_qqmapWxJssdk.QQMapWX({
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
              success(res2, data2) {
                console.log(res2);
                console.log(data2);
              }
            });
          });
          this.showToast();
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
        b: common_vendor.p({
          placeholder: "日照香炉生紫烟",
          ["show-action"]: false,
          ["input-align"]: "center",
          clearabled: true,
          shape: "square"
        }),
        c: common_vendor.o((...args) => _ctx.scanCode && _ctx.scanCode(...args)),
        d: common_vendor.sr("uToast", "7f451f83-1")
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7f451f83"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/topBarIndex/topBarIndex.vue"]]);
wx.createComponent(Component);
