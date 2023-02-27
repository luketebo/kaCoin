"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_topCardHome2 = common_vendor.resolveComponent("topCardHome");
  const _easycom_contentCardHome2 = common_vendor.resolveComponent("contentCardHome");
  const _easycom_u_divider2 = common_vendor.resolveComponent("u-divider");
  const _easycom_contentIndex2 = common_vendor.resolveComponent("contentIndex");
  (_easycom_topCardHome2 + _easycom_contentCardHome2 + _easycom_u_divider2 + _easycom_contentIndex2)();
}
const _easycom_topCardHome = () => "../../components/topCardHome/topCardHome.js";
const _easycom_contentCardHome = () => "../../components/contentCardHome/contentCardHome.js";
const _easycom_u_divider = () => "../../uni_modules/vk-uview-ui/components/u-divider/u-divider.js";
const _easycom_contentIndex = () => "../../components/contentIndex/contentIndex.js";
if (!Math) {
  (_easycom_topCardHome + _easycom_contentCardHome + _easycom_u_divider + _easycom_contentIndex)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      color: "black"
    }),
    b: common_vendor.f(20, (item, k0, i0) => {
      return {
        a: "07e72d3c-3-" + i0
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-07e72d3c"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
