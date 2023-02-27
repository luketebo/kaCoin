"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      loadStatus: "loadmore",
      flowList: [],
      list: [
        {
          price: 35,
          title: "北国风光，千里冰封，万里雪飘",
          shop: "李白杜甫白居易旗舰店",
          image: "http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg"
        },
        {
          price: 75,
          title: "望长城内外，惟余莽莽",
          shop: "李白杜甫白居易旗舰店",
          image: "http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg"
        },
        {
          price: 385,
          title: "大河上下，顿失滔滔",
          shop: "李白杜甫白居易旗舰店",
          image: "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"
        },
        {
          price: 784,
          title: "欲与天公试比高",
          shop: "李白杜甫白居易旗舰店",
          image: "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg"
        },
        {
          price: 7891,
          title: "须晴日，看红装素裹，分外妖娆",
          shop: "李白杜甫白居易旗舰店",
          image: "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg"
        },
        {
          price: 2341,
          shop: "李白杜甫白居易旗舰店",
          title: "江山如此多娇，引无数英雄竞折腰",
          image: "http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg"
        },
        {
          price: 661,
          shop: "李白杜甫白居易旗舰店",
          title: "惜秦皇汉武，略输文采",
          image: "http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg"
        },
        {
          price: 1654,
          title: "唐宗宋祖，稍逊风骚",
          shop: "李白杜甫白居易旗舰店",
          image: "http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg"
        },
        {
          price: 1678,
          title: "一代天骄，成吉思汗",
          shop: "李白杜甫白居易旗舰店",
          image: "http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg"
        },
        {
          price: 924,
          title: "只识弯弓射大雕",
          shop: "李白杜甫白居易旗舰店",
          image: "http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg"
        },
        {
          price: 8243,
          title: "俱往矣，数风流人物，还看今朝",
          shop: "李白杜甫白居易旗舰店",
          image: "http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg"
        }
      ]
    };
  },
  onLoad() {
    this.addRandomData();
  },
  onReachBottom() {
    this.loadStatus = "loading";
    setTimeout(() => {
      this.addRandomData();
      this.loadStatus = "loadmore";
    }, 1e3);
  },
  methods: {
    addRandomData() {
      for (let i = 0; i < 10; i++) {
        let index = this.$u.random(0, this.list.length - 1);
        let item = JSON.parse(JSON.stringify(this.list[index]));
        item.id = this.$u.guid();
        this.flowList.push(item);
      }
    },
    remove(id) {
      this.$refs.uWaterfall.remove(id);
    },
    clear() {
      this.$refs.uWaterfall.clear();
    }
  }
};
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_lazy_load2 = common_vendor.resolveComponent("u-lazy-load");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_waterfall2 = common_vendor.resolveComponent("u-waterfall");
  const _easycom_u_loadmore2 = common_vendor.resolveComponent("u-loadmore");
  (_easycom_u_button2 + _easycom_u_lazy_load2 + _easycom_u_icon2 + _easycom_u_waterfall2 + _easycom_u_loadmore2)();
}
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
const _easycom_u_lazy_load = () => "../../uni_modules/vk-uview-ui/components/u-lazy-load/u-lazy-load.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_waterfall = () => "../../uni_modules/vk-uview-ui/components/u-waterfall/u-waterfall.js";
const _easycom_u_loadmore = () => "../../uni_modules/vk-uview-ui/components/u-loadmore/u-loadmore.js";
if (!Math) {
  (_easycom_u_button + _easycom_u_lazy_load + _easycom_u_icon + _easycom_u_waterfall + _easycom_u_loadmore)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.clear),
    b: common_vendor.w(({
      leftList
    }, s0, i0) => {
      return {
        a: common_vendor.f(leftList, (item, index, i1) => {
          return {
            a: "f12e0bbb-2-" + i0 + "-" + i1 + ",f12e0bbb-1",
            b: common_vendor.p({
              threshold: "-450",
              ["border-radius"]: "10",
              image: item.image,
              index
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.price),
            e: common_vendor.t(item.shop),
            f: common_vendor.o(($event) => $options.remove(item.id), index),
            g: "f12e0bbb-3-" + i0 + "-" + i1 + ",f12e0bbb-1",
            h: index
          };
        }),
        b: i0,
        c: s0
      };
    }, {
      name: "left",
      path: "b",
      vueId: "f12e0bbb-1"
    }),
    c: common_vendor.p({
      name: "close-circle-fill",
      color: "#fa3534",
      size: "34"
    }),
    d: common_vendor.w(({
      rightList
    }, s0, i0) => {
      return {
        a: common_vendor.f(rightList, (item, index, i1) => {
          return {
            a: "f12e0bbb-4-" + i0 + "-" + i1 + ",f12e0bbb-1",
            b: common_vendor.p({
              threshold: "-450",
              ["border-radius"]: "10",
              image: item.image,
              index
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.price),
            e: common_vendor.t(item.shop),
            f: common_vendor.o(($event) => $options.remove(item.id), index),
            g: "f12e0bbb-5-" + i0 + "-" + i1 + ",f12e0bbb-1",
            h: index
          };
        }),
        b: i0,
        c: s0
      };
    }, {
      name: "right",
      path: "d",
      vueId: "f12e0bbb-1"
    }),
    e: common_vendor.p({
      name: "close-circle-fill",
      color: "#fa3534",
      size: "34"
    }),
    f: common_vendor.sr("uWaterfall", "f12e0bbb-1"),
    g: common_vendor.o(($event) => $data.flowList = $event),
    h: common_vendor.p({
      modelValue: $data.flowList
    }),
    i: common_vendor.o($options.addRandomData),
    j: common_vendor.p({
      ["bg-color"]: "rgb(240, 240, 240)",
      status: $data.loadStatus
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f12e0bbb"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/detail/moreDetail.vue"]]);
wx.createPage(MiniProgramPage);
