"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_u_toast2 = common_vendor.resolveComponent("u-toast");
  (_easycom_u_search2 + _easycom_u_toast2)();
}
const _easycom_u_search = () => "../../uni_modules/vk-uview-ui/components/u-search/u-search.js";
const _easycom_u_toast = () => "../../uni_modules/vk-uview-ui/components/u-toast/u-toast.js";
if (!Math) {
  (_easycom_u_search + _easycom_u_toast)();
}
const _sfc_main = {
  __name: "topBarIndex",
  setup(__props) {
    const showToast = () => {
      common_vendor.index.showToast({
        title: "+10",
        duration: 2e3
      });
    };
    const scanCode = () => {
      common_vendor.index.scanCode({
        success: (res) => {
          console.log(JSON.stringify(res.result)), showToast();
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          placeholder: "日照香炉生紫烟",
          ["show-action"]: false,
          ["input-align"]: "center",
          clearabled: true,
          shape: "square"
        }),
        b: common_vendor.o(scanCode),
        c: common_vendor.sr("uToast", "7f451f83-1")
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7f451f83"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/topBarIndex/topBarIndex.vue"]]);
wx.createComponent(Component);
