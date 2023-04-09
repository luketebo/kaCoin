"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "swiperBarIndex",
  setup(__props) {
    const itemArr = [
      {
        id: 0,
        top: "美食",
        topImg: "/static/image/index/xiaochi.png",
        bottom: "医疗/健康",
        bottomImg: "/static/image/index/yiliaofuwu.png"
      },
      {
        id: 1,
        top: "景点",
        topImg: "/static/image/index/jingdian.png",
        bottom: "理发/男士",
        bottomImg: "/static/image/index/jiandao.png"
      },
      {
        id: 2,
        top: "酒店/民宿",
        topImg: "/static/image/index/jiudian.png",
        bottom: "学习培训",
        bottomImg: "/static/image/index/xuexijihua.png"
      },
      {
        id: 3,
        top: "休闲/玩乐",
        topImg: "/static/image/index/jiubei.png",
        bottom: "生活服务",
        bottomImg: "/static/image/index/shenghuofuwu.png"
      },
      {
        id: 4,
        top: "电影/演出",
        topImg: "/static/image/index/kandianying.png",
        bottom: "母婴服务",
        bottomImg: "/static/image/index/muying.png"
      },
      {
        id: 5,
        top: "美团外卖",
        topImg: "/static/image/index/tongchengwaimai.png",
        bottom: "宠物",
        bottomImg: "/static/image/index/chongwu.png"
      },
      {
        id: 6,
        top: "KTV",
        topImg: "/static/image/index/maikefeng-Kge-KTV-huatong.png",
        bottom: "商场/购物",
        bottomImg: "/static/image/index/gouwuche-gouwu-shoucang.png"
      },
      {
        id: 7,
        top: "结婚/婚纱",
        topImg: "/static/image/index/jinianri.png",
        bottom: "飞机票/机票",
        bottomImg: "/static/image/index/tubiaozhizuomoban_feijipiao.png"
      },
      {
        id: 8,
        top: "鲜花",
        topImg: "/static/image/index/xianhua.png",
        bottom: "家居/装修",
        bottomImg: "/static/image/index/jiaju.png"
      },
      {
        id: 9,
        top: "面包甜点",
        topImg: "/static/image/index/tiandian.png",
        bottom: "全部服务",
        bottomImg: "/static/image/index/quanbu.png"
      }
    ];
    common_vendor.computed(() => (name, type = "jpg") => {
      const path = `/static/image/index/${name}.${type}`;
      const modules = /* @__PURE__ */ Object.assign({ "/static/image/index/chongwu.png": common_assets.__vite_glob_0_0, "/static/image/index/gouwuche-gouwu-shoucang.png": common_assets.__vite_glob_0_1, "/static/image/index/jiaju.png": common_assets.__vite_glob_0_2, "/static/image/index/jiandao.png": common_assets.__vite_glob_0_3, "/static/image/index/jingdian.png": common_assets.__vite_glob_0_4, "/static/image/index/jinianri.png": common_assets.__vite_glob_0_5, "/static/image/index/jiubei.png": common_assets.__vite_glob_0_6, "/static/image/index/jiudian.png": common_assets.__vite_glob_0_7, "/static/image/index/kandianying.png": common_assets.__vite_glob_0_8, "/static/image/index/maikefeng-Kge-KTV-huatong.png": common_assets.__vite_glob_0_9, "/static/image/index/muying.png": common_assets.__vite_glob_0_10, "/static/image/index/quanbu.png": common_assets.__vite_glob_0_11, "/static/image/index/shenghuofuwu.png": common_assets.__vite_glob_0_12, "/static/image/index/tiandian.png": common_assets.__vite_glob_0_13, "/static/image/index/tongchengwaimai.png": common_assets.__vite_glob_0_14, "/static/image/index/tubiaozhizuomoban_feijipiao.png": common_assets.__vite_glob_0_15, "/static/image/index/xianhua.png": common_assets.__vite_glob_0_16, "/static/image/index/xiaochi.png": common_assets.__vite_glob_0_17, "/static/image/index/xuexijihua.png": common_assets.__vite_glob_0_18, "/static/image/index/yiliaofuwu.png": common_assets.__vite_glob_0_19 });
      console.log(modules[path].default);
      return modules[path];
    });
    const tomoreDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/detail/moreDetail",
        success: (res) => {
        },
        fail: () => {
        },
        complete: () => {
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(itemArr, (item, k0, i0) => {
          return {
            a: item.topImg,
            b: common_vendor.t(item.top),
            c: item.bottomImg,
            d: common_vendor.t(item.bottom)
          };
        }),
        b: common_vendor.o(($event) => tomoreDetail())
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b55ff52e"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/swiperBarIndex/swiperBarIndex.vue"]]);
wx.createComponent(Component);
