"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "centerBarIndex",
  setup(__props) {
    const itemArr = [
      {
        name: "关注",
        id: 0
      },
      {
        name: "推荐",
        id: 1
      },
      {
        name: "附近",
        id: 2
      },
      {
        name: "打卡地",
        id: 3
      },
      {
        name: "咖啡",
        id: 4
      },
      {
        name: "美食",
        id: 5
      },
      {
        name: "溜娃",
        id: 6
      },
      {
        name: "宠物",
        id: 7
      },
      {
        name: "运动",
        id: 8
      },
      {
        name: "教培",
        id: 9
      },
      {
        name: "结婚",
        id: 10
      }
    ];
    let currentIndex = common_vendor.ref(1);
    const getItemIndex = (index, id) => {
      currentIndex.value = index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(itemArr, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.n(index == common_vendor.unref(currentIndex) ? "active" : ""),
            c: common_vendor.o(($event) => getItemIndex(index, item.id), item.id),
            d: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6e355c99"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/components/centerBarIndex/centerBarIndex.vue"]]);
wx.createComponent(Component);
