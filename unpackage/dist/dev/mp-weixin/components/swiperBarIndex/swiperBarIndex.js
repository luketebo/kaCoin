"use strict";
var common_assets = require("../../common/assets.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "swiperBarIndex",
  setup(__props) {
    common_vendor.computed$1(() => (name, type = "jpg") => {
      const path = `/static/image/index/${name}.${type}`;
      const modules = { "/static/image/index/food.png": common_assets.__glob_2_0, "/static/image/index/\u4F11\u95F2.png": common_assets.__glob_2_1, "/static/image/index/\u533B\u7597.png": common_assets.__glob_2_2, "/static/image/index/\u5916\u5356.png": common_assets.__glob_2_3, "/static/image/index/\u5BA0\u7269.png": common_assets.__glob_2_4, "/static/image/index/\u666F\u70B9.png": common_assets.__glob_2_5, "/static/image/index/\u751F\u6D3B.png": common_assets.__glob_2_6, "/static/image/index/\u8D2D\u7269.png": common_assets.__glob_2_7, "/static/image/index/\u9152\u5E97.png": common_assets.__glob_2_8, "/static/image/index/\u94F6\u884C\u673A\u6784.png": common_assets.__glob_2_9 };
      console.log(modules[path].default);
      return modules[path];
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(20, (item, k0, i0) => {
          return {};
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5e6c9664"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/swiperBarIndex/swiperBarIndex.vue"]]);
wx.createComponent(Component);
