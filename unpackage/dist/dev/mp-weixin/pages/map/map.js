"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      id: 0,
      title: "map",
      latitude: 39.909,
      longitude: 116.39742,
      covers: [{
        latitude: 39.909,
        longitude: 116.39742,
        iconPath: "../../../static/location.png"
      }, {
        latitude: 39.9,
        longitude: 116.39,
        iconPath: "../../../static/location.png"
      }]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/map/map.vue"]]);
wx.createPage(MiniProgramPage);
