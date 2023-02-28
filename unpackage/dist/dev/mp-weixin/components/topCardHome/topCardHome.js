"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "topCardHome",
  setup(__props) {
    const itemArr = [
      {
        number: 100,
        text: "卡币"
      },
      {
        number: 23,
        text: "打卡地"
      },
      {
        number: 1e3,
        text: "热力值"
      }
    ];
    const tomoreDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/detail/moreDetail"
      });
    };
    const toDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail"
      });
    };
    const tokaCoinDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/detail/kaCoinDetail"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => toDetail()),
        b: common_vendor.f(itemArr, (item, index, i0) => {
          return {
            a: common_vendor.t(item.number),
            b: common_vendor.t(item.text)
          };
        }),
        c: common_vendor.o(($event) => tokaCoinDetail()),
        d: common_vendor.f(4, (item, k0, i0) => {
          return {};
        }),
        e: common_vendor.o(($event) => tomoreDetail())
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c242b468"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/topCardHome/topCardHome.vue"]]);
wx.createComponent(Component);
