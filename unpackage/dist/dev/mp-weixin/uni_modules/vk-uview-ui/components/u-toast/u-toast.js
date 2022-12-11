"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-toast",
  props: {
    zIndex: {
      type: [Number, String],
      default: ""
    }
  },
  data() {
    return {
      isShow: false,
      timer: null,
      config: {
        params: {},
        title: "",
        type: "",
        duration: 2e3,
        isTab: false,
        url: "",
        icon: true,
        position: "center",
        callback: null,
        back: false
      },
      tmpConfig: {}
    };
  },
  computed: {
    iconName() {
      if (["error", "warning", "success", "info"].indexOf(this.tmpConfig.type) >= 0 && this.tmpConfig.icon) {
        let icon = this.$u.type2icon(this.tmpConfig.type);
        return icon;
      }
    },
    uZIndex() {
      return this.isShow ? this.zIndex ? this.zIndex : this.$u.zIndex.toast : "999999";
    }
  },
  methods: {
    show(options) {
      this.tmpConfig = this.$u.deepMerge(this.config, options);
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.isShow = true;
      this.timer = setTimeout(() => {
        this.isShow = false;
        clearTimeout(this.timer);
        this.timer = null;
        typeof this.tmpConfig.callback === "function" && this.tmpConfig.callback();
        this.timeEnd();
      }, this.tmpConfig.duration);
    },
    hide() {
      this.isShow = false;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    timeEnd() {
      if (this.tmpConfig.url) {
        if (this.tmpConfig.url[0] != "/")
          this.tmpConfig.url = "/" + this.tmpConfig.url;
        if (Object.keys(this.tmpConfig.params).length) {
          let query = "";
          if (/.*\/.*\?.*=.*/.test(this.tmpConfig.url)) {
            query = this.$u.queryParams(this.tmpConfig.params, false);
            this.tmpConfig.url = this.tmpConfig.url + "&" + query;
          } else {
            query = this.$u.queryParams(this.tmpConfig.params);
            this.tmpConfig.url += query;
          }
        }
        if (this.tmpConfig.isTab) {
          common_vendor.index.switchTab({
            url: this.tmpConfig.url
          });
        } else {
          common_vendor.index.navigateTo({
            url: this.tmpConfig.url
          });
        }
      } else if (this.tmpConfig.back) {
        this.$u.route({
          type: "back"
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.tmpConfig.icon
  }, $data.tmpConfig.icon ? {
    b: common_vendor.p({
      name: $options.iconName,
      size: 30,
      color: $data.tmpConfig.type
    })
  } : {}, {
    c: common_vendor.t($data.tmpConfig.title),
    d: common_vendor.n($data.isShow ? "u-show" : ""),
    e: common_vendor.n("u-type-" + $data.tmpConfig.type),
    f: common_vendor.n("u-position-" + $data.tmpConfig.position),
    g: $options.uZIndex
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-509fd82b"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/uni_modules/vk-uview-ui/components/u-toast/u-toast.vue"]]);
wx.createComponent(Component);
