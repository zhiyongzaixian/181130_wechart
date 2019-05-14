// pages/detail/detail.js
let listDatas = require('../../datas/list-data.js');
console.log(listDatas, typeof listDatas);


let appDatas = getApp();
console.log(appDatas, typeof appDatas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    isCollected: false, // 标识是否收藏
    isMusicPlay: false // 标识音乐是否播放
  },
  
  /**
   * 生命周期函数--监听页面加载
   */

  onShareAppMessage(res) {
    console.log(res, 'xxxx');
    return {
      title: '我的转发内容',
      path: '/pages/detail/detail',
      IMAGEURL: '/images/index/cart.jpg'
    }
  },
  onLoad: function (options) {

   

    console.log(options);// 请求的参数对象
    let index = options.index;
    this.setData({
      detailObj: listDatas.list_data[index],
      index: index
    })

    // 更新当前页面的是否收藏的状态
    let storageObj = wx.getStorageSync('isCollected');
    // 判断当前页面是否收藏
    if(storageObj[index]){
      this.setData({
        isCollected: true
      })
    }

    // 判断当前页面是否在播放 ---> app的data中的状态
    if(appDatas.data.isPlay && appDatas.data.pageIndex === index){
      this.setData({
        isMusicPlay: true
      })
    }

    // 监听音乐播放和暂停
    wx.onBackgroundAudioPlay( () =>{
      console.log('音乐播放');
      this.setData({
        isMusicPlay: true
      })


      // 将播放的状态缓存到app的data中
      appDatas.data.isPlay = true;
      appDatas.data.pageIndex = index;

    })

    wx.onBackgroundAudioPause( ()  => {
      console.log('音乐暂停');
      this.setData({
        isMusicPlay: false
      })

      // 将播放的状态缓存到app的data中
      appDatas.data.isPlay = false;
    })
    

  },
  // 处理收藏的方法
  handleCollection(){

    // 更新isCollected的状态值
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected 
    })

    // 提示功能
    let title = isCollected?'收藏成功':'取消收藏';
    wx.showToast({
      title
    })

    // 缓存是否收藏的状态到本地
    // 思路： {0: true, 1: false, 2: true}
    let index = this.data.index;
    //let obj = {};导致永远只有一个页面的状态
    let obj = wx.getStorageSync('isCollected');
    console.log('----', obj, '----------');
    // 预处理 ‘’ || {0: true}
    obj = obj?obj:{};
    obj[index] = isCollected;
    wx.setStorage({
      key: 'isCollected',
      data: obj
    })
  },
  // 处理分享大的方法
  handleShare(){
    wx.showActionSheet({
      itemList: [
        '分享到朋友圈', '分享到微博','分享给微信好友'
      ],
    })
  },
  // 处理音乐播放
  handleMusicPlay(){
    let isMusicPlay = !this.data.isMusicPlay;
    this.setData({
      isMusicPlay
    })

    let { dataUrl, title, coverImgUrl} = this.data.detailObj.music;
    if(isMusicPlay){
      
      wx.playBackgroundAudio({
        dataUrl,
        title,
        coverImgUrl
      })
    }else {
      wx.pauseBackgroundAudio()
    }

  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})