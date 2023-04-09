"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_topBarIndex2 = common_vendor.resolveComponent("topBarIndex");
  const _easycom_swiperBarIndex2 = common_vendor.resolveComponent("swiperBarIndex");
  const _easycom_concernIndex2 = common_vendor.resolveComponent("concernIndex");
  (_easycom_topBarIndex2 + _easycom_swiperBarIndex2 + _easycom_concernIndex2)();
}
const _easycom_topBarIndex = () => "../../components/topBarIndex/topBarIndex.js";
const _easycom_swiperBarIndex = () => "../../components/swiperBarIndex/swiperBarIndex.js";
const _easycom_concernIndex = () => "../../components/concernIndex/concernIndex.js";
if (!Math) {
  (_easycom_topBarIndex + _easycom_swiperBarIndex + _easycom_concernIndex)();
}
const __default__ = {
  data() {
    return {
      currentIndex: 1,
      res: 1
    };
  },
  methods: {
    changePage(res) {
      return res;
    },
    getItemIndex(index, id) {
      this.currentIndex = index;
      this.res = index;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
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
        name: "美食",
        id: 4
      },
      {
        name: "直播",
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
    let likes = common_vendor.ref(false);
    let likeNum = common_vendor.ref(1);
    const onClickLike = () => {
      likes.value = !likes.value;
      if (likes.value) {
        likeNum.value++;
      } else {
        likeNum.value--;
      }
    };
    const toPostDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/detail/postDetail"
      });
    };
    const recommend = [{
      ImgURL: "/static/image/paigu.jpg",
      title: "很美味，很好吃",
      avtor: "/static/image/demo.jpg",
      name: "十月"
    }, {
      ImgURL: "https://pic4.zhimg.com/v2-45fb6a9d1aca9ec1301389112016fe87_r.jpg",
      title: "你敢信这景是重庆动物园？",
      avtor: "https://pic4.zhimg.com/v2-570aad7dbef96e49ab01780ab7ebc98b_r.jpg",
      name: "椰椰泡茶"
    }, {
      ImgURL: "https://pic4.zhimg.com/v2-02a93f89683201ff0979ab63dc344483_r.jpg",
      title: "晚上的鸿恩寺拍照真的绝~",
      avtor: "https://pic2.zhimg.com/v2-7f5e7ec5909bc70c37badc889ed52089_r.jpg",
      name: "牛奶糖117"
    }, {
      ImgURL: "https://pic1.zhimg.com/v2-780edcc54351725965dc76dd891a04f8_r.jpg",
      title: "南坪的这家终于来了，果然没让我失望",
      avtor: "https://pic3.zhimg.com/v2-1ef95ba71ce4e5a1f14401047efc5d36_r.jpg",
      name: "热雪奇迹"
    }, {
      ImgURL: "https://pic3.zhimg.com/v2-4a8c10ea8ec34049a2c7cb3f99b94d1e_r.jpg",
      title: "重庆赏花 | 海棠与樱花你能分辨吗",
      avtor: "https://pic3.zhimg.com/v2-829c2851efbe7a789da27fc05ec67f46_r.jpg",
      name: "明说明话"
    }, {
      ImgURL: "https://pic2.zhimg.com/v2-369807d37475a79102c27d12da55b8fd_r.jpg",
      title: "春天的湿地公园",
      avtor: "https://pic1.zhimg.com/v2-9007142c053eb1cebdc8bda4c8bea1dc_r.jpg",
      name: "摄影师景川"
    }, {
      ImgURL: "https://pic4.zhimg.com/80/v2-7067735303605615fc276a376a7d8a5f_720w.webp",
      title: "这里不是日本，是中国！",
      avtor: "https://pic4.zhimg.com/v2-09892b017cb86cd9b4f3c424523b518b_r.jpg",
      name: "南鱼伯"
    }, {
      ImgURL: "https://pic2.zhimg.com/v2-696b347aa5b02a943706d5de13dc6ec1_r.jpg",
      title: "在重庆，不要错过广阳岛的春天",
      avtor: "https://pic4.zhimg.com/v2-df0f9630b13b5155fe57ed5da88062f3_r.jpg",
      name: "蠢萌蠢萌喵"
    }, {
      ImgURL: "https://pic3.zhimg.com/v2-90f14ed9dcb7d95e2b902eee43abb292_r.jpg",
      title: "居然第一次进来",
      avtor: "https://pic4.zhimg.com/v2-0edeae4ae97593e0308f55455c90063b_r.jpg",
      name: "绿川悦子"
    }, {
      ImgURL: "https://pic1.zhimg.com/v2-d07703a854091b5466c2c61c8307bb64_r.jpg",
      title: "重庆小江南——彩云湖随摄",
      avtor: "https://pic1.zhimg.com/v2-764199c9470ff436082f35610f1f81f4_r.jpg",
      name: "爱吃的小胖子"
    }];
    const Native = [
      {
        ImgURL: "http://www.luketebo.icu:888/native/1.jpg",
        title: "每次来都只是在熙街消费",
        avator: "https://picx.zhimg.com/80/v2-e1c0cd5aebfa62318f12b1295d7004f5_720w.webp?source=1940ef5c",
        name: "大清早的猪"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/native/2.jpg",
        title: "如何在大学城浪费光阴",
        avator: "https://picx.zhimg.com/80/v2-95ed6ea0f78292c9cad905ad117c7fcc_720w.webp?source=1940ef5c",
        name: "黑娃很贪吃"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/native/3.jpg",
        title: "为了麻辣金钱牛肚我要来这里100次",
        avator: "https://pica.zhimg.com/80/v2-64176df43629b8aebcab92e2b8212083_720w.webp?source=1940ef5c",
        name: "迷糊十一"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/native/4.jpg",
        title: "虎峰山下的绝美避世小院",
        avator: "https://picx.zhimg.com/80/v2-29c615a14037b9898e3641f5523e8ca2_720w.webp?source=1940ef5c",
        name: "研_"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/native/5.jpg",
        title: "大学城试过环境最好的舞蹈室",
        avator: "https://picx.zhimg.com/80/v2-b6dfcc3c00478268ddada7bd8c79d187_720w.webp?source=1940ef5c",
        name: "一只小绵羊"
      }
    ];
    const KaCoinLocation = [
      {
        ImgURL: "http://www.luketebo.icu:888/Location/1.jpg",
        title: "追梦到西周",
        avator: "https://picx.zhimg.com/80/v2-07b5dc350a9ab8509ebeff670b8f893b_720w.webp?source=1940ef5c",
        name: "十月"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/Location/2.jpg",
        title: "城中灯红酒绿",
        avator: "https://picx.zhimg.com/80/v2-07b5dc350a9ab8509ebeff670b8f893b_720w.webp?source=1940ef5c",
        name: "十月"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/Location/3.jpg",
        title: "山和远方",
        avator: "https://picx.zhimg.com/80/v2-07b5dc350a9ab8509ebeff670b8f893b_720w.webp?source=1940ef5c",
        name: "十月"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/Location/4.jpg",
        title: "瀑布",
        avator: "https://picx.zhimg.com/80/v2-07b5dc350a9ab8509ebeff670b8f893b_720w.webp?source=1940ef5c",
        name: "十月"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/Location/5.jpg",
        title: "赛博朋克",
        avator: "https://picx.zhimg.com/80/v2-07b5dc350a9ab8509ebeff670b8f893b_720w.webp?source=1940ef5c",
        name: "十月"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/Location/6.jpg",
        title: "登临欧洲城堡",
        avator: "https://picx.zhimg.com/80/v2-07b5dc350a9ab8509ebeff670b8f893b_720w.webp?source=1940ef5c",
        name: "十月"
      }
    ];
    const Food = [
      {
        ImgURL: "http://www.luketebo.icu:888/food/1.jpg",
        title: "直接买了店里最火的两款",
        avator: "https://picx.zhimg.com/80/v2-8a4c8a4526a6dbaa33209aeaa4cbc3f8_720w.webp?source=1940ef5c",
        name: "RQ"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/food/2.jpg",
        title: "重庆26r的自助随便吃！",
        avator: "https://pica.zhimg.com/80/v2-4a70998f1ca9b52676f2d5612f786235_720w.webp?source=1940ef5c",
        name: "逃跑的肥牛卷"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/food/3.jpg",
        title: "真的好好吃，骗人的是小狗!",
        avator: "https://pic1.zhimg.com/80/v2-d55905cf8e4cddc49b09f3f6e5d8367a_720w.webp?source=1940ef5c",
        name: "吨吨饭桶"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/food/4.jpg",
        title: "团购双人餐的话女生四个人吃都够了",
        avator: "https://pica.zhimg.com/80/v2-361712a7bf9d49a371d6f9aa68114bb2_720w.webp?source=1940ef5c",
        name: "十一吃货"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/food/5.jpg",
        title: "我去专门是为了吃草莓",
        avator: "https://picx.zhimg.com/80/v2-b4c25a40719102c1a236178b8b2e388c_720w.webp?source=1940ef5c",
        name: "好运来"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/food/6.jpg",
        title: "慕名前来，秒杀两人餐，够够的了",
        avator: "https://picx.zhimg.com/80/v2-ac05fafee4a4d79921107c310c531f37_720w.webp?source=1940ef5c",
        name: "今天又吃啥了你"
      }
    ];
    const Live = [
      {
        ImgURL: "http://www.luketebo.icu:888/Live/3.jpg",
        title: "美团外卖天台直播",
        avator: "https://picx.zhimg.com/80/v2-6b40d5f462399addb81f0df387d9c86e_720w.webp?source=1940ef5c",
        name: "AdF643674522"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/Live/4.jpg",
        title: "周四中午11点真人直播",
        avator: "https://pica.zhimg.com/80/v2-9d38d912a8f9a8e556af0c69f0b69d42_720w.webp?source=1940ef5c",
        name: "哎"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/Live/1.jpg",
        title: "夜宵专场：小龙虾21.9起",
        avator: "https://pica.zhimg.com/80/v2-287e5ca4bee0994633ea0453928dca5a_720w.webp?source=1940ef5c",
        name: "Ql_483746"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/Live/6.jpg",
        title: "美莱超值播超省钱",
        avator: "https://pic1.zhimg.com/80/v2-9827a51da130ed80c0da1387d4810266_720w.webp?source=1940ef5c",
        name: "美莱"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/Live/5.jpg",
        title: "美团大众点评新年宠粉首播",
        avator: "https://picx.zhimg.com/80/v2-a1324453a4859d5861e77fc27bdede2c_720w.webp?source=1940ef5c",
        name: "美团到店"
      },
      {
        ImgURL: "http://www.luketebo.icu:888/Live/2.jpg",
        title: "澳门锦鲤",
        avator: "https://picx.zhimg.com/80/v2-097bf2e2b5f78c2a17b67388d1a5e71c_720w.webp?source=1940ef5c",
        name: "吃喝玩乐购"
      }
    ];
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(itemArr, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.n(index == _ctx.currentIndex ? "active" : ""),
            c: common_vendor.o(($event) => _ctx.getItemIndex(index, item.id), item.id),
            d: item.id
          };
        }),
        b: _ctx.res == 0
      }, _ctx.res == 0 ? {} : _ctx.res == 1 ? {
        d: common_vendor.f(recommend, (item, k0, i0) => {
          return common_vendor.e({
            a: item.ImgURL,
            b: common_vendor.t(item.title),
            c: item.avtor,
            d: common_vendor.t(item.name)
          }, !common_vendor.unref(likes) ? {
            e: common_assets._imports_2
          } : {
            f: common_assets._imports_3
          });
        }),
        e: common_vendor.o(($event) => toPostDetail()),
        f: !common_vendor.unref(likes),
        g: common_vendor.t(common_vendor.unref(likeNum)),
        h: common_vendor.o(onClickLike)
      } : _ctx.res == 2 ? {
        j: common_vendor.f(Native, (item, k0, i0) => {
          return common_vendor.e({
            a: item.ImgURL,
            b: common_vendor.t(item.title),
            c: item.avator,
            d: common_vendor.t(item.name)
          }, !common_vendor.unref(likes) ? {
            e: common_assets._imports_2
          } : {
            f: common_assets._imports_3
          });
        }),
        k: common_vendor.o(($event) => toPostDetail()),
        l: !common_vendor.unref(likes),
        m: common_vendor.t(common_vendor.unref(likeNum)),
        n: common_vendor.o(onClickLike)
      } : _ctx.res == 3 ? {
        p: common_vendor.f(KaCoinLocation, (item, k0, i0) => {
          return common_vendor.e({
            a: item.ImgURL,
            b: common_vendor.t(item.title),
            c: item.avator,
            d: common_vendor.t(item.name)
          }, !common_vendor.unref(likes) ? {
            e: common_assets._imports_2
          } : {
            f: common_assets._imports_3
          });
        }),
        q: common_vendor.o(($event) => toPostDetail()),
        r: !common_vendor.unref(likes),
        s: common_vendor.t(common_vendor.unref(likeNum)),
        t: common_vendor.o(onClickLike)
      } : _ctx.res == 4 ? {
        w: common_vendor.f(Food, (item, k0, i0) => {
          return common_vendor.e({
            a: item.ImgURL,
            b: common_vendor.t(item.title),
            c: item.avator,
            d: common_vendor.t(item.name)
          }, !common_vendor.unref(likes) ? {
            e: common_assets._imports_2
          } : {
            f: common_assets._imports_3
          });
        }),
        x: common_vendor.o(($event) => toPostDetail()),
        y: !common_vendor.unref(likes),
        z: common_vendor.t(common_vendor.unref(likeNum)),
        A: common_vendor.o(onClickLike)
      } : _ctx.res == 5 ? {
        C: common_vendor.f(Live, (item, k0, i0) => {
          return common_vendor.e({
            a: item.ImgURL,
            b: common_vendor.t(item.title),
            c: item.avator,
            d: common_vendor.t(item.name)
          }, !common_vendor.unref(likes) ? {
            e: common_assets._imports_2
          } : {
            f: common_assets._imports_3
          });
        }),
        D: common_vendor.o(($event) => toPostDetail()),
        E: !common_vendor.unref(likes),
        F: common_vendor.t(common_vendor.unref(likeNum)),
        G: common_vendor.o(onClickLike)
      } : {
        I: common_vendor.f(recommend, (item, k0, i0) => {
          return common_vendor.e({
            a: item.ImgURL,
            b: common_vendor.t(item.title),
            c: item.avtor,
            d: common_vendor.t(item.name)
          }, !common_vendor.unref(likes) ? {
            e: common_assets._imports_2
          } : {
            f: common_assets._imports_3
          });
        }),
        J: common_vendor.o(($event) => toPostDetail()),
        K: !common_vendor.unref(likes),
        L: common_vendor.t(common_vendor.unref(likeNum)),
        M: common_vendor.o(onClickLike)
      }, {
        c: _ctx.res == 1,
        i: _ctx.res == 2,
        o: _ctx.res == 3,
        v: _ctx.res == 4,
        B: _ctx.res == 5,
        H: _ctx.res >= 6
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
