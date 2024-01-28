// pages/detail/detail.js
var common=require("../../common.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        article:{
            id:"32441",
            title:"厦门大学嘉庚学院组织师生收听收看党的二十大开幕会",
            poster:"https://www.xujc.com/uploads2/img/2022/10/16/2022101619565261.jpg",
            content:"10月16日上午10时，中国共产党第二十次全国代表大会在北京人民大会堂隆重开幕。厦门大学嘉庚学院党委组织广大干部和师生党员，以饱满的热情和昂扬的精神面貌，多渠道多形式认真收听收看党的二十大开幕会盛况。在主楼群3号楼大报告厅，校党委组织140余名师生与厦门大学漳州校区各单位师生代表共同观看党的二十大开幕会，聆听、学习习近平总书记代表第十九届中央委员会向党的二十大所作的报告。在公共教学楼1号楼多功能厅，我校第88期党校学员、马研班全体学员和团学组织学生干部代表300余人集中观看了开幕会。在观看直播现场，广大师生党员认真聆听、仔细记录，对大会报告的精彩内容和金句产生强烈共鸣。",
            add_date:"2022-10-16"
        }

    },
    /**
     * 自定义函数--添加收藏
     */
    addFavorites:function(options){
        let article=this.data.article;
        wx.setStorageSync(article.id, article);
        this.setData({
            isAdd:true
        })
    },
    /**
     * 自定义函数--取消收藏
     */
    cancelFavorites:function(){
        let article=this.data.article;
        wx.removeStorageSync(article.id);
        this.setData({
            isAdd:false
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let id=options.id
        let article=wx.getStorageSync(id)
        if(article!=""){
            this.setData({
                article:article,
                isAdd:true
            })
        }
        else{
            let result=common.getNewsDetail(id)
            if(result.code==200){
                this.setData({
                    article:result.news
                })
            }
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})