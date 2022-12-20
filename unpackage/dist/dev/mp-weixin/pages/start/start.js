"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_startTopBar2 = common_vendor.resolveComponent("startTopBar");
  _easycom_startTopBar2();
}
const _easycom_startTopBar = () => "../../components/startTopBar/startTopBar.js";
if (!Math) {
  _easycom_startTopBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/start/start.vue"]]);
wx.createPage(MiniProgramPage);
