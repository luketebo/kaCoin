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
    // 跳转搜索栏
    toSearch() {
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
              console.log("位置调用成功");
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
    },
    // 处理搜索
    searchLocation(res) {
      const qqmapsdk = new libs_qqmapWxJssdk.QQMapWX({
        key: "5CIBZ-M47NX-WBZ4E-ZYX5R-QCBOK-DIFQ4"
      });
      const location = this.getLocationInfo();
      qqmapsdk.search({
        keyword: res,
        location: (location.latitude, location.longitude),
        success: (res2) => {
          console.log(res2);
          var cvs = [];
          for (var i = 0; i < res2.data.length; i++) {
            cvs.push({
              title: res2.data[i].title,
              id: parseInt(res2.data[i].id),
              latitude: res2.data[i].location.lat,
              longitude: res2.data[i].location.lng,
              iconPath: "../../static/icon/kaCoin-map/location.png",
              width: 40,
              height: 40,
              label: {
                content: res2.data[i].title,
                color: "#ffffff",
                textAlign: "center",
                borderColor: "#fe5d2a",
                borderWidth: 3,
                borderRadius: 10,
                bgColor: "#fe5d2a"
              }
            });
          }
          this.covers = cvs;
        },
        fail: (res2) => {
          console.log(res2);
        },
        complete: (res2) => {
          console.log(res2);
        }
      });
    }
  },
  async onLoad() {
    const location = await this.getLocationInfo();
    this.position = location.address;
    this.moveToLocation(this.position);
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
    a: common_vendor.o(($event) => $options.toSearch()),
    b: common_vendor.o($options.searchLocation),
    c: common_vendor.p({
      placeholder: "日照香炉生紫烟",
      disabled: true,
      ["show-action"]: false,
      ["input-align"]: "center",
      clearabled: true,
      shape: "square"
    }),
    d: common_vendor.o(($event) => $options.moveToLocation($data.position)),
    e: $data.latitude,
    f: $data.longitude,
    g: $data.covers
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e06b858f"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/map/map.vue"]]);
wx.createPage(MiniProgramPage);
