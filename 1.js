// 引入express
const express = require('express')

// 创建服务器
const app = express()

// 接受 get 且 url 为 / 的请求
app.get('/', (req,res) => {
  // send会检测响应内容的类型，自动设置http状态码，响应的内容类型及编码
  res.send('hello world')
})

app.get('/menu', (req,res) => {
  res.send({ name: '首页', key: 1 })
})

// 监听3000端口
app.listen(3000)
