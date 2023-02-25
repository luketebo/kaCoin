"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "submitMessageSubmit",
  data() {
    return {
      form: {
        name: "",
        intro: "",
        sex: ""
      },
      type: "textarea",
      height: 420,
      autoHeight: false,
      checkboxList: [
        {
          name: "苹果",
          checked: false,
          disabled: false
        },
        {
          name: "雪梨",
          checked: false,
          disabled: false
        },
        {
          name: "柠檬",
          checked: false,
          disabled: false
        }
      ],
      radioList: [
        {
          name: "鲜甜",
          disabled: false
        },
        {
          name: "麻辣",
          disabled: false
        }
      ],
      radio: "",
      switchVal: false
    };
  },
  methods: {
    submit() {
    }
  }
};
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_upload2 = common_vendor.resolveComponent("u-upload");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_upload2 + _easycom_u_form2 + _easycom_u_button2)();
}
const _easycom_u_input = () => "../../uni_modules/vk-uview-ui/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u_upload = () => "../../uni_modules/vk-uview-ui/components/u-upload/u-upload.js";
const _easycom_u_form = () => "../../uni_modules/vk-uview-ui/components/u-form/u-form.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_form_item + _easycom_u_upload + _easycom_u_form + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.form.name = $event),
    b: common_vendor.p({
      placeholder: "添加标题更容易上首页哟~",
      modelValue: $data.form.name
    }),
    c: common_vendor.o(($event) => $data.form.intro = $event),
    d: common_vendor.p({
      height: $data.height,
      ["auto-height"]: $data.autoHeight,
      placeholder: "写一篇笔记,分享近期种草的宝藏地点吧",
      type: $data.type,
      modelValue: $data.form.intro
    }),
    e: common_vendor.sr("uForm", "1a4930dc-0"),
    f: common_vendor.p({
      model: $data.form
    }),
    g: common_vendor.o($options.submit),
    h: common_vendor.p({
      type: "warning"
    }),
    i: common_vendor.o($options.submit),
    j: common_vendor.p({
      type: "warning",
      shape: "circle"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/submitMessageSubmit/submitMessageSubmit.vue"]]);
wx.createComponent(Component);
