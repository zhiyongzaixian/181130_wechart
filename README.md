## 小程序开发流程
  1. 全局
    - 1. 注册小程序应用： App({})
    - 2. 写全局的配置文件: app.json
    ```
      {
        "pages": [
          "pages/index/index"
        ],
        "window": {
          "navigationBarBackgroundColor": "#8ed145",
          "navigationBarTextStyle": "black",
          "navigationBarTitleText": "welcome to atguigu",
          "backgroundColor": "#eeeeee",
          "backgroundTextStyle": "light",
          "enablePullDownRefresh": false
        }
      }

    ```

  2. 局部(页面)


## 注意点
  1. 写完的东西一定要保存
  2. 注意顺序问题

## 小程序特点：
  1. 没有DOM，一切基于组件化
  2. 小程序中是单项数据流 model ---> view
  3. 事件绑定：
    1. 冒泡事件： bind + 事件名
    2. 非冒泡事件: catch + 事件名
  4. 路由
    1. 前端路由：路由路径
      1. wx.navigateTo(Object object)
      2. 路由跳转的依据是：页面的路径
    2. 后台路由：url地址
  5. template
    1. 定义模板: name=模板名
    2. 引入模板  import
    3. 使用模板: is=模板名
    3. 向模板内部导入数据
      1. data = 模板数据
  6. 遍历数据
    1. 语法: wx:for=遍历数据
    2. 注意点: wx:key = 唯一值
    3. 默认的个体：item，默认下标： index

