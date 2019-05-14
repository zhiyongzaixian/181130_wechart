// pages/detail/detail.js
let listDatas = require('../../datas/list-data.js');
console.log(listDatas, typeof listDatas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    isCollected: false // 标识是否收藏
  },

  /**
   * 生命周期函数--监听页面加载
   */
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