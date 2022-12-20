"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "centerBarIndex",
  setup(__props) {
    const itemArr = [
      {
        name: "\u5173\u6CE8",
        id: 0
      },
      {
        name: "\u63A8\u8350",
        id: 1
      },
      {
        name: "\u9644\u8FD1",
        id: 2
      },
      {
        name: "\u6253\u5361\u5730",
        id: 3
      },
      {
        name: "\u5496\u5561",
        id: 4
      },
      {
        name: "\u7F8E\u98DF",
        id: 5
      },
      {
        name: "\u6E9C\u5A03",
        id: 6
      },
      {
        name: "\u5BA0\u7269",
        id: 7
      },
      {
        name: "\u8FD0\u52A8",
        id: 8
      },
      {
        name: "\u6559\u57F9",
        id: 9
      },
      {
        name: "\u7ED3\u5A5A",
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
