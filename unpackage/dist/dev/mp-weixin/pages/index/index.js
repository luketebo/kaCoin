"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_topBarIndex2 = common_vendor.resolveComponent("topBarIndex");
  const _easycom_swiperBarIndex2 = common_vendor.resolveComponent("swiperBarIndex");
  const _easycom_centerBarIndex2 = common_vendor.resolveComponent("centerBarIndex");
  const _easycom_contentIndex2 = common_vendor.resolveComponent("contentIndex");
  (_easycom_topBarIndex2 + _easycom_swiperBarIndex2 + _easycom_centerBarIndex2 + _easycom_contentIndex2)();
}
const _easycom_topBarIndex = () => "../../components/topBarIndex/topBarIndex.js";
const _easycom_swiperBarIndex = () => "../../components/swiperBarIndex/swiperBarIndex.js";
const _easycom_centerBarIndex = () => "../../components/centerBarIndex/centerBarIndex.js";
const _easycom_contentIndex = () => "../../components/contentIndex/contentIndex.js";
if (!Math) {
  (_easycom_topBarIndex + _easycom_swiperBarIndex + _easycom_centerBarIndex + _easycom_contentIndex)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(20, (item, k0, i0) => {
      return {
        a: "57280228-3-" + i0
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
