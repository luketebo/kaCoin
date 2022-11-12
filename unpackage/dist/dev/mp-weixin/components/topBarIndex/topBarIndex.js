"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  _easycom_u_search2();
}
const _easycom_u_search = () => "../../uni_modules/vk-uview-ui/components/u-search/u-search.js";
if (!Math) {
  _easycom_u_search();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      placeholder: "\u65E5\u7167\u9999\u7089\u751F\u7D2B\u70DF",
      ["show-action"]: false,
      ["input-align"]: "center",
      clearabled: true,
      shape: "square"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-68ae1b24"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/topBarIndex/topBarIndex.vue"]]);
wx.createComponent(Component);
