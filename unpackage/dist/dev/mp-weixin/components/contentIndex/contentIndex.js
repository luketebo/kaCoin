"use strict";
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "contentIndex",
  setup(__props) {
    let likes = common_vendor.ref(true);
    let likeNum = common_vendor.ref(1);
    const onClickLike = () => {
      likes = !likes;
      likeNum++;
      console.log(likes);
      console.log(likeNum);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0,
        b: common_assets._imports_0,
        c: !common_vendor.unref(likes)
      }, !common_vendor.unref(likes) ? {
        d: common_assets._imports_1
      } : {
        e: common_assets._imports_2
      }, {
        f: common_vendor.o(onClickLike)
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Code-repository/Hbuilder/kaCoin/components/contentIndex/contentIndex.vue"]]);
wx.createComponent(Component);
