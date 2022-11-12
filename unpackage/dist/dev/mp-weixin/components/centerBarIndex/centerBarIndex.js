"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "centerBarIndex",
  setup(__props) {
    const itemArr = ["\u5173\u6CE8", "\u63A8\u8350", "\u9644\u8FD1", "\u6253\u5361\u5730", "\u5496\u5561", "\u7F8E\u98DF", "\u6E9C\u5A03", "\u5BA0\u7269", "\u8FD0\u52A8", "\u6559\u57F9", "\u7ED3\u5A5A"];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(itemArr, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Code-repository/Hbuilder/kaCoin/components/centerBarIndex/centerBarIndex.vue"]]);
wx.createComponent(Component);
