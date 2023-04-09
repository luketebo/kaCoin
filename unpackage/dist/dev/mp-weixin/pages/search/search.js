"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      hotItem: [
        {
          title: "重庆热搜",
          content: [
            {
              num: 1,
              content: "秋嬢嬢火锅",
              hot: "87509"
            },
            {
              num: 2,
              content: "茶颜悦色奶茶",
              hot: "83336"
            },
            {
              num: 3,
              content: "雨树餐厅",
              hot: "82008"
            },
            {
              num: 4,
              content: "南坪美食",
              hot: "77625"
            },
            {
              num: 5,
              content: "李子坝小黄楼",
              hot: "76658"
            },
            {
              num: 6,
              content: "黄泥滂美食",
              hot: "76658"
            },
            {
              num: 7,
              content: "洪崖洞附近美食",
              hot: "73572"
            },
            {
              num: 8,
              content: "适合过生日的餐厅",
              hot: "70564"
            },
            {
              num: 9,
              content: "鼎凰花胶鸡",
              hot: "70564"
            },
            {
              num: 10,
              content: "井里海鲜自助餐",
              hot: "65604"
            }
          ]
        },
        {
          title: "精选内容",
          content: [
            {
              num: 1,
              content: "南滨路江景餐厅",
              hot: "88847"
            },
            {
              num: 2,
              content: "重庆海鲜自助餐推荐",
              hot: "84696"
            },
            {
              num: 3,
              content: "重庆夜景打卡地",
              hot: "84694"
            },
            {
              num: 4,
              content: "重庆晚上适合晚上玩",
              hot: "83619"
            },
            {
              num: 5,
              content: "云龟山露营基地",
              hot: "82658"
            },
            {
              num: 6,
              content: "万分之五精酿烧鸟",
              hot: "79920"
            },
            {
              num: 7,
              content: "解放碑美食推荐",
              hot: "77159"
            },
            {
              num: 8,
              content: "马尔代夫重庆分夫",
              hot: "73514"
            },
            {
              num: 9,
              content: "武隆天坑一日游",
              hot: "72585"
            },
            {
              num: 10,
              content: "美心红酒小镇",
              hot: "70241"
            }
          ]
        },
        {
          title: "美食推荐",
          content: [
            {
              num: 1,
              content: "向玉珍烤五花总店",
              hot: "87877"
            },
            {
              num: 2,
              content: "萌达鳗",
              hot: "83706"
            },
            {
              num: 3,
              content: "窈窕江湖小酒馆",
              hot: "81530"
            },
            {
              num: 4,
              content: "黄妈手撕烤兔",
              hot: "80809"
            },
            {
              num: 5,
              content: "东西THINGS",
              hot: "77164"
            },
            {
              num: 6,
              content: "都点蘸蘸水菜",
              hot: "76298"
            },
            {
              num: 7,
              content: "啵樱冰粉",
              hot: "75752"
            },
            {
              num: 8,
              content: "蜜糖和果树",
              hot: "72564"
            },
            {
              num: 9,
              content: "山城老堂口",
              hot: "70564"
            },
            {
              num: 10,
              content: "吾夜",
              hot: "68828"
            }
          ]
        }
      ],
      itemSearch: [
        {
          iS: "眼镜店"
        },
        {
          iS: "火锅"
        },
        {
          iS: "乌鱼"
        },
        {
          iS: "午餐"
        },
        {
          iS: "吴胖子"
        }
      ],
      itemArr: [
        {
          SN: "中国"
        },
        {
          SN: "熙街"
        },
        {
          SN: "美食"
        },
        {
          SN: "重庆"
        },
        {
          SN: "秀湖"
        }
      ]
    };
  },
  methods: {
    toSearchDetail() {
      common_vendor.index.navigateTo({
        url: "searchDetail/searchDetail"
      });
    }
  }
};
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  _easycom_u_search2();
}
const _easycom_u_search = () => "../../uni_modules/vk-uview-ui/components/u-search/u-search.js";
if (!Math) {
  _easycom_u_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toSearchDetail()),
    b: common_vendor.p({
      placeholder: "日照香炉生紫烟",
      ["show-action"]: true,
      ["action-text"]: "搜索",
      clearabled: true,
      shape: "squre"
    }),
    c: common_vendor.f($data.itemSearch, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.iS)
      };
    }),
    d: common_vendor.f($data.itemArr, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.SN)
      };
    }),
    e: common_vendor.f($data.hotItem, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.f(item.content, (content, index, i1) => {
          return {
            a: common_vendor.t(content.num),
            b: common_vendor.n(index > 2 ? "" : "Searchactive"),
            c: common_vendor.t(content.content),
            d: common_vendor.t(content.hot)
          };
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c10c040c"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
