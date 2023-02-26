"use strict";
const common_assets = require("../../common/assets.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "swiperBarIndex",
  setup(__props) {
    common_vendor.computed(() => (name, type = "jpg") => {
      const path = `/static/image/index/${name}.${type}`;
      const modules = /* @__PURE__ */ Object.assign({ "/static/image/index/food.png": common_assets.__vite_glob_0_0, "/static/image/index/medical.png": common_assets.__vite_glob_0_1, "/static/image/index/休闲.png": common_assets.__vite_glob_0_2, "/static/image/index/外卖.png": common_assets.__vite_glob_0_3, "/static/image/index/宠物.png": common_assets.__vite_glob_0_4, "/static/image/index/景点.png": common_assets.__vite_glob_0_5, "/static/image/index/生活.png": common_assets.__vite_glob_0_6, "/static/image/index/购物.png": common_assets.__vite_glob_0_7, "/static/image/index/酒店.png": common_assets.__vite_glob_0_8, "/static/image/index/银行机构.png": common_assets.__vite_glob_0_9 });
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
