"use strict";
const common_vendor = require("../../common/vendor.js");
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
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(20, (item, k0, i0) => {
          return {
            a: "1cf27b2a-3-" + i0
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
