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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(itemArr, (item, index, i0) => {
          return {
            a: common_vendor.t(item.number),
            b: common_vendor.t(item.text)
          };
        }),
        b: common_vendor.f(4, (item, k0, i0) => {
          return {};
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c242b468"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/topCardHome/topCardHome.vue"]]);
wx.createComponent(Component);
