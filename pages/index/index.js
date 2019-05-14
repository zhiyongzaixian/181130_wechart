// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '测试',
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    console.log(this.data.msg);
    //修改数据
    // React里边如何修改状态数据
    // this.state = {}
    // this.setState({})
    // 小程序
    

    setTimeout(() => {
      this.setData({
        msg: '修改以后的数据'
      })
      
    }, 1000)
    

    // 获取用户登录信息
    wx.getUserInfo({
      success: (res) => {
        console.log(res, '获取成功');
        this.setData({
          userInfo: res.userInfo
        })
      },
      fail: () => {
        console.log('获取失败');
      }
    })
  },
  handleGetUserInfo(res){
    console.log(res);
    if (res.detail.rawData){
      this.setData({
        userInfo: JSON.parse(res.detail.rawData)
      })
    }
  },
  toList(){
    // 跳转页面到list
    wx.switchTab({
      url: '/pages/list/list',
      success: () => {
        console.log('跳转成功');
      }
    })
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');

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