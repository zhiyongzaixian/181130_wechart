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