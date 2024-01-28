// pages/index/index.js
var common=require("../../common.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        content:"hello",
        swiperImg:[
            {src:"http://20.xujc.com/_upload/article/images/0d/4a/ff262dea4b38aa0cf819f38c31bb/200aeab7-5ea5-4816-a58d-a4ae66f14826.jpg"},
            {src:"http://20.xujc.com/_upload/article/images/b1/b0/1349e92c412fbc9d686d1d62218c/0d2ade68-17f1-4475-bd35-a825e1d7b99f.jpg"},
            {src:"http://20.xujc.com/_upload/article/images/b1/b0/1349e92c412fbc9d686d1d62218c/a81f28b4-c265-4713-9c24-401fb6e944a0.jpg"}
        ],
        newsList:[]
    },
    goToDetail:function(e){
        let id=e.currentTarget.dataset.id
        wx.navigateTo({
          url: '../detail/detail?id='+id,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let list=common.getNewsList()
        this.setData({
            newsList:list
        })
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