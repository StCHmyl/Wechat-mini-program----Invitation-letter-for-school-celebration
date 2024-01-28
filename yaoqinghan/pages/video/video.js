// pages/video/video.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        danmuTxt:"",
        list:[
            {
                id:"32352",
                title:"2023年招生宣传片《你的TKKC》",
                videoUrl:"http://20.xujc.com/_upload/article/videos/b6/50/d064da8e4558be18390e4dd0cccf/61a93e66-2c36-48dc-83fe-ea18f271654d-B.mp4",
                src:"http://20.xujc.com/_upload/article/images/b6/50/d064da8e4558be18390e4dd0cccf/2fb4a049-9191-49d9-98af-bdaa97e7147e.jpg"
            },{
                id:"32384",
                title:"“嘉”人的一天",
                videoUrl:"http://20.xujc.com/_upload/article/videos/0f/4c/b04c883c4f1181c9a036b94d2c78/8c39e107-4163-4ab2-a096-8b1e4111399d.mp4" ,
                src:"http://20.xujc.com/_upload/article/images/0f/4c/b04c883c4f1181c9a036b94d2c78/5509f5b4-7e1c-4f01-93c7-cc787524b81a.jpg"
            },{
                id:"32617",
                title:"【音乐片】这是一所不一样的大学",
                videoUrl:"http://20.xujc.com/_upload/article/videos/bc/4b/b7acd0c345d0a63521b336261ea4/0991a5af-0d0b-4fad-a3de-ad73be3b7b93-B.mp4",
                src:"http://20.xujc.com/_upload/article/images/bc/4b/b7acd0c345d0a63521b336261ea4/6556f9b0-3a36-4dfe-b581-a11dcdc07a3d.jpg"
            }
        ]

    },
    /**
     * 自定义函数--播放视频
     */
    playVideo:function(e){
        this.videoCtx.stop()
        this.setData({
            src:e.currentTarget.dataset.url
        })
        this.videoCtx.play()
    },
     /**
     * 自定义函数--获取弹幕
     */
    getDanmu:function(e){
        this.setData({
            danmuTxt:e.detail.value
        })
    },
    sendDanmu:function(e){
        this.videoCtx.sendDanmu({
            text:this.data.danmuTxt,
            color:"red"
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.videoCtx=wx.createVideoContext('myVideo')
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