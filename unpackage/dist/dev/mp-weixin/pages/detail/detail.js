"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      itemArr: [
        {
          left: "用户名",
          right: "十月"
        },
        {
          left: "当前用户标识",
          right: "个人"
        },
        {
          left: "绑定手机账号",
          right: "123456789"
        }
      ],
      src: ""
    };
  }
};
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_line2 = common_vendor.resolveComponent("u-line");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_avatar2 + _easycom_u_line2 + _easycom_u_button2)();
}
const _easycom_u_avatar = () => "../../uni_modules/vk-uview-ui/components/u-avatar/u-avatar.js";
const _easycom_u_line = () => "../../uni_modules/vk-uview-ui/components/u-line/u-line.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_avatar + _easycom_u_line + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      src: $data.src
    }),
    b: common_vendor.p({
      color: "red"
    }),
    c: common_vendor.f($data.itemArr, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.left),
        b: common_vendor.t(item.right),
        c: "b2a5e930-2-" + i0
      };
    }),
    d: common_vendor.p({
      color: "red"
    }),
    e: common_vendor.p({
      ripple: true,
      type: "warning",
      ["ripple-bg-color"]: "#ff9900"
    }),
    f: common_vendor.p({
      ripple: true,
      type: "warning",
      ["ripple-bg-color"]: "#ff9900"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
