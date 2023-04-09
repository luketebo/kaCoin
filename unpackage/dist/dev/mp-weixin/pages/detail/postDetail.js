"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  const _easycom_u_parse2 = common_vendor.resolveComponent("u-parse");
  const _easycom_u_field2 = common_vendor.resolveComponent("u-field");
  (_easycom_u_swiper2 + _easycom_uni_title2 + _easycom_u_parse2 + _easycom_u_field2)();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_uni_title = () => "../../uni_modules/uni-title/components/uni-title/uni-title.js";
const _easycom_u_parse = () => "../../uni_modules/vk-uview-ui/components/u-parse/u-parse.js";
const _easycom_u_field = () => "../../uni_modules/vk-uview-ui/components/u-field/u-field.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_uni_title + _easycom_u_parse + _easycom_u_field)();
}
const __default__ = {
  data() {
    return {
      list: [
        {
          image: "https://pic.quanjing.com/78/xj/QJ6162413612.jpg@!350h",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东"
        },
        {
          image: "https://pic.quanjing.com/pv/9x/QJ9127809843.jpg@!350h",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://pic.quanjing.com/sn/13/QJ9130228192.jpg@!350h",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"
        }
      ],
      content: `
									<p>免费且风景怡人的观光圣地</p>
									<p>鸿恩寺森林公园 位于重庆市江北区红石路。</p>
									<p>该寺寺名为鸿恩寺，却与寺庙无关，仅仅只是一</p>
									<p>座简单的仿古楼台，这么说你敢信吗😂</p>
									<p>据说建文帝朱允炆被明成祖朱槺推翻时，建文帝</p>
									<p>逃至龙脊山上，被观音菩萨派来的鸿雁搭救😁。</p>
									<p>后来建文帝的追随者来到山上建起一座寺庙隐</p>
									<p>居，为东山在起做准备。为了报鸿雁的搭救之</p>
									<p>恩，就为寺庙取名为鸿恩寺，并供奉观世音</p>
									<p>菩萨，一直留存至今，吸引无数粉丝打卡！👍</p>
									
						`,
      comments: ""
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "postDetail",
  setup(__props) {
    let likes = common_vendor.ref(false);
    let star = common_vendor.ref(false);
    let likeNum = common_vendor.ref(100);
    let starNum = common_vendor.ref(90);
    const onClickLike = () => {
      likes.value = !likes.value;
      if (likes.value) {
        likeNum.value++;
      } else {
        likeNum.value--;
      }
    };
    const onClickStar = () => {
      star.value = !star.value;
      if (likes.value) {
        starNum.value++;
      } else {
        starNum.value--;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          list: _ctx.list,
          mode: "number",
          height: "600",
          ["indicator-pos"]: "bottomRight",
          autoplay: false
        }),
        b: common_vendor.p({
          type: "h3",
          title: "鸿恩寺 | 背景故事"
        }),
        c: common_vendor.p({
          html: _ctx.content,
          ["lazy-load"]: true,
          ["show-with-animation"]: true
        }),
        d: common_vendor.o(($event) => _ctx.comments = $event),
        e: common_vendor.p({
          ["label-width"]: "0",
          placeholder: "说点什么吧",
          modelValue: _ctx.comments
        }),
        f: !common_vendor.unref(likes)
      }, !common_vendor.unref(likes) ? {
        g: common_assets._imports_2
      } : {
        h: common_assets._imports_3
      }, {
        i: common_vendor.t(common_vendor.unref(likeNum)),
        j: common_vendor.o(onClickLike),
        k: !common_vendor.unref(star)
      }, !common_vendor.unref(star) ? {
        l: common_assets._imports_2$1
      } : {
        m: common_assets._imports_3$1
      }, {
        n: common_vendor.t(common_vendor.unref(starNum)),
        o: common_vendor.o(onClickStar),
        p: common_assets._imports_4
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-766bc1e6"], ["__file", "D:/Code-repository/Hbuilder/kaCoin/pages/detail/postDetail.vue"]]);
wx.createPage(MiniProgramPage);
