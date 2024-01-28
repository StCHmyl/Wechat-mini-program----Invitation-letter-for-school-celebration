// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:118.05,
    latitude:24.37,
    markers:[{
      id:0,
      iconPath:"/images/navi.png",
      latitude:24.37,
      longitude:118.05,
      width:50,
      height:50
    }]
  },
  /**
   * 自定义函数--点击图标
   */
  markertap:function(){
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name:"厦门大学嘉庚学院",
      address:"福建省漳州招商开发区南滨大道"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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