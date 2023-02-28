"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "contentIndex",
  setup(__props) {
    let likes = common_vendor.ref(false);
    let likeNum = common_vendor.ref(1);
    const onClickLike = () => {
      likes.value = !likes.value;
      if (likes.value) {
        likeNum.value++;
      } else {
        likeNum.value--;
      }
    };
    const toPostDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/detail/postDetail"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0,
        b: common_vendor.o(($event) => toPostDetail()),
        c: common_assets._imports_1,
        d: !common_vendor.unref(likes)
      }, !common_vendor.unref(likes) ? {
        e: common_assets._imports_2
      } : {
        f: common_assets._imports_3
      }, {
        g: common_vendor.t(common_vendor.unref(likeNum)),
        h: common_vendor.o(onClickLike)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Code-repository/Hbuilder/kaCoin/components/contentIndex/contentIndex.vue"]]);
wx.createComponent(Component);
