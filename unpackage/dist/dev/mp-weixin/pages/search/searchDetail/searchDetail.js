"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      merchant: [
        {
          ImgURL: "http://www.luketebo.icu:888/merchant/1.jpg",
          name: "乡村岁月 · 原乡特色农家菜 ",
          appraise: "⭐⭐⭐⭐ 3.9 315条 ￥71/条",
          comments: '"[粉丝虾仁] 好评，每只虾都很大"'
        },
        {
          ImgURL: "http://www.luketebo.icu:888/merchant/2.jpg",
          name: "阿姨印象 (龙湖U城店)",
          appraise: "⭐⭐⭐⭐⭐ 4.8 2039条 ￥62/人",
          comments: '"在尖顶坡地铁站附近的帅哥..."'
        },
        {
          ImgURL: "http://www.luketebo.icu:888/merchant/3.jpg",
          name: "潘一桃 · 烤肉无限续(大学城店)",
          appraise: "⭐⭐⭐⭐⭐ 4.8 865条 ￥48/人",
          comments: '"很好吃，沾碟的味道超级正，巨推荐来吃"'
        },
        {
          ImgURL: "http://www.luketebo.icu:888/merchant/4.jpg",
          name: "渝厨生态火锅(熙街店)",
          appraise: "⭐⭐⭐⭐⭐ 4.7 995条 ￥64/人",
          comments: '"火锅味道还行，菜品也很新鲜"'
        },
        {
          ImgURL: "http://www.luketebo.icu:888/merchant/5.jpg",
          name: "醉小酒馆 · 川菜 · 江湖菜",
          appraise: "⭐⭐⭐⭐ 4.4 4081条 ￥67/人",
          comments: '"味道不错，酒不错，菜品卖好"'
        }
      ]
    };
  }
};
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  _easycom_u_search2();
}
const _easycom_u_search = () => "../../../uni_modules/vk-uview-ui/components/u-search/u-search.js";
if (!Math) {
  _easycom_u_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.toSearchDetail()),
    b: common_vendor.p({
      ["show-action"]: true,
      ["action-text"]: "搜索",
      clearabled: true,
      shape: "squre"
    }),
    c: common_vendor.f($data.merchant, (item, k0, i0) => {
      return {
        a: item.ImgURL,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.appraise),
        d: common_vendor.t(item.comments)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4de96a9c"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/search/searchDetail/searchDetail.vue"]]);
wx.createPage(MiniProgramPage);
