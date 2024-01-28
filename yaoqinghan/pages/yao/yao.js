// pages/yao/yao.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
/**
   * 自定义函数--拨打电话
   */
  callGroom:function(){
    wx.makePhoneCall({
      phoneNumber: '12345678932',
    })
  },
    /**
     * 生命周期函数--监听页面加载
     */
	bgm:null,
  music_url:"http://m10.music.126.net/20230610153931/e8185a6f8140609a141ec416a4bf52dd/ymusic/12c4/0f5a/8a8e/27f3899f4426f9950829ac444ffb8cea.mp3",
  
    onLoad(options) {
      this.bgm = wx.getBackgroundAudioManager()
      this.bgm.title="校歌"
      this.bgm.onCanplay(() => { this.bgm.play() })
      this.bgm.src = this.music_url
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