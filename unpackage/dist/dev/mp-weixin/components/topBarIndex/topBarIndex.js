"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  _easycom_u_search2();
}
const _easycom_u_search = () => "../../uni_modules/vk-uview-ui/components/u-search/u-search.js";
if (!Math) {
  _easycom_u_search();
}
const _sfc_main = {
  __name: "topBarIndex",
  setup(__props) {
    const scanCode = () => {
      common_vendor.index.scanCode({
        success: (res) => {
          console.log(JSON.stringify(res.result));
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          placeholder: "\u65E5\u7167\u9999\u7089\u751F\u7D2B\u70DF",
          ["show-action"]: false,
          ["input-align"]: "center",
          clearabled: true,
          shape: "square"
        }),
        b: common_vendor.o(scanCode)
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-68ae1b24"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/topBarIndex/topBarIndex.vue"]]);
wx.createComponent(Component);
