"use strict";
const common_assets = require("../../common/assets.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "swiperBarIndex",
  setup(__props) {
    common_vendor.computed$1(() => (name, type = "jpg") => {
      const path = `/static/image/index/${name}.${type}`;
      const modules = /* @__PURE__ */ Object.assign({ "/static/image/index/food.png": common_assets.__vite_glob_0_0, "/static/image/index/\u4F11\u95F2.png": common_assets.__vite_glob_0_1, "/static/image/index/\u533B\u7597.png": common_assets.__vite_glob_0_2, "/static/image/index/\u5916\u5356.png": common_assets.__vite_glob_0_3, "/static/image/index/\u5BA0\u7269.png": common_assets.__vite_glob_0_4, "/static/image/index/\u666F\u70B9.png": common_assets.__vite_glob_0_5, "/static/image/index/\u751F\u6D3B.png": common_assets.__vite_glob_0_6, "/static/image/index/\u8D2D\u7269.png": common_assets.__vite_glob_0_7, "/static/image/index/\u9152\u5E97.png": common_assets.__vite_glob_0_8, "/static/image/index/\u94F6\u884C\u673A\u6784.png": common_assets.__vite_glob_0_9 });
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b55ff52e"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/swiperBarIndex/swiperBarIndex.vue"]]);
wx.createComponent(Component);
