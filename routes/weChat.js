var express = require('express');
var router = express.Router();
var querystring = require('querystring')
var http = require('http')
var url = require('url')
var request = require('request')
var sha1 = require('sha1')


var createNonceStr = function () {
  return Math.random().toString(36).substr(2, 15);
};

var createTimestamp = function () {
  return parseInt(new Date().getTime() / 1000) + '';
};


router.get('/', function(req, res, next) {

 let wechat = {
 	grant_type : 'client_credential',
 	appid : 'wx2f2acc82cac37107',
 	appSecret : '1a44bb9110398c579e0e8cbdb55e1d2e'
 }

 request('https://api.weixin.qq.com/cgi-bin/token?grant_type=' + wechat.grant_type + '&appid=' + wechat.appid + '&secret=' + wechat.appSecret, (err, response, body) => {
  let access_token = JSON.parse(body).access_token
  console.log(body);

  request('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + access_token + '&type=jsapi', (err, response, body) => {
    let jsapi_ticket = JSON.parse(body).ticket
	console.log(jsapi_ticket)
    let nonce_str = createNonceStr()  // 密钥，字符串任意，可以随机生成
    let timestamp = new Date().getTime() // 时间戳
    let url = req.query.url  // 使用接口的url链接，不包含#后的内容
 
    // 将请求以上字符串，先按字典排序，再以'&'拼接，如下：其中j > n > t > u，此处直接手动排序
    let str = 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + nonce_str + '×tamp=' + timestamp + '&url=' + url
 
    // 用sha1加密
    let signature = sha1(str)
 
    res.send({
     appId: wechat.appid,
     timestamp: timestamp,
     nonceStr: nonce_str,
     signature: signature,
    })
  })
 })
});

module.exports = router;


