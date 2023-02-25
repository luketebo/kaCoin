"use strict";
const common_vendor = require("../../common/vendor.js");
const libs_qqmapWxJssdk = require("../../libs/qqmap-wx-jssdk.js");
const _sfc_main = {
  data() {
    return {
      id: 0,
      title: "kaCoin",
      latitude: 39.909,
      longitude: 116.39742,
      covers: [],
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
            location.longitude = res.longitude;
            location.latitude = res.latitude;
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
    // 点击地图时移动
    moveToLocation(obj) {
      const qqmapsdk = new libs_qqmapWxJssdk.QQMapWX({
        key: "5CIBZ-M47NX-WBZ4E-ZYX5R-QCBOK-DIFQ4"
      });
      qqmapsdk.reverseGeocoder({
        address: obj,
        success: (res) => {
          console.log(res);
          var res = res.result;
          var latitude = res.location.lat;
          var longitude = res.location.lng;
          common_vendor.index.createMapContext("kaCoin", this).moveToLocation({
            latitude,
            longitude,
            success: (res2) => {
              console.log(res2);
              console.log(latitude);
              console.log(longitude);
              setTimeout((_) => {
                this.covers = [{
                  address: "demo",
                  id: 2,
                  latitude,
                  longitude,
                  width: 30,
                  height: 30,
                  iconPath: "../../static/icon/kaCoin-map/location.png"
                }];
              }, 50);
            },
            fail: (res2) => {
              common_vendor.index.showModal({
                content: "位置调用失败",
                showCancel: false
              });
            }
          });
        }
      });
    }
  },
  async onLoad() {
    const location = await this.getLocationInfo();
    this.position = location.address;
  }
};
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  _easycom_u_search2();
}
const _easycom_u_search = () => "../../uni_modules/vk-uview-ui/components/u-search/u-search.js";
if (!Math) {
  _easycom_u_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      placeholder: "日照香炉生紫烟",
      ["show-action"]: false,
      ["input-align"]: "center",
      clearabled: true,
      shape: "square"
    }),
    b: common_vendor.t($data.position),
    c: common_vendor.o(($event) => $options.moveToLocation($data.position)),
    d: $data.latitude,
    e: $data.longitude,
    f: $data.covers
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e06b858f"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/map/map.vue"]]);
wx.createPage(MiniProgramPage);
