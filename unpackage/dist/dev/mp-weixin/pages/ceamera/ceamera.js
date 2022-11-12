"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: ""
    };
  },
  methods: {
    takePhoto() {
      const ctx = common_vendor.index.createCameraContext();
      ctx.takePhoto({
        quality: "high",
        success: (res) => {
          this.src = res.tempImagePath;
        }
      });
    },
    error(e) {
      console.log(e.detail);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.error && $options.error(...args)),
    b: common_vendor.o((...args) => $options.takePhoto && $options.takePhoto(...args)),
    c: $data.src
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/ceamera/ceamera.vue"]]);
wx.createPage(MiniProgramPage);
