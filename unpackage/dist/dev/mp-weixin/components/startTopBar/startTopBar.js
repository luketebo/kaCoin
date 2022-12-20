"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_u_divider2 = common_vendor.resolveComponent("u-divider");
  const _easycom_contentIndex2 = common_vendor.resolveComponent("contentIndex");
  (_easycom_u_divider2 + _easycom_contentIndex2)();
}
const _easycom_u_divider = () => "../../uni_modules/vk-uview-ui/components/u-divider/u-divider.js";
const _easycom_contentIndex = () => "../contentIndex/contentIndex.js";
if (!Math) {
  (_easycom_u_divider + _easycom_contentIndex)();
}
const _sfc_main = {
  __name: "startTopBar",
  setup(__props) {
    const itemArr = [
      {
        name: "\u5168\u90E8",
        id: 0
      },
      {
        name: "\u5546\u6237",
        id: 1
      },
      {
        name: "\u7B14\u8BB0",
        id: 2
      },
      {
        name: "\u56E2\u8D2D",
        id: 3
      },
      {
        name: "\u5176\u4ED6",
        id: 4
      }
    ];
    let currentIndex = common_vendor.ref(0);
    const getItemIndex = (index, id) => {
      currentIndex.value = index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(itemArr, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.n(index == common_vendor.unref(currentIndex) ? "active" : ""),
            c: common_vendor.o(($event) => getItemIndex(index, item.id), item.id),
            d: item.id
          };
        }),
        b: common_assets._imports_0$1,
        c: common_vendor.p({
          color: "black"
        }),
        d: common_vendor.f(20, (item, k0, i0) => {
          return {
            a: "3b6549b7-1-" + i0
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3b6549b7"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/startTopBar/startTopBar.vue"]]);
wx.createComponent(Component);
