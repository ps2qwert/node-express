var express = require('express');
var router = express.Router();
var querystring = require('querystring')
var http = require('http')
var url = require('url')




router.get('/', function(req, res, next) {
	let type = req.query.type,
		pos  = req.query.pos,
		size = req.query.size
		imgList = [];
	var data = [
		{
		  "title": "人民的名义", 
		  'flag' : 'dk',
		  "imgurls": [
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/dk/0.gif'
		    },
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/dk/1.gif'
		    },
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/dk/2.gif'
		    },
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/dk/4.gif'
		    },
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/dk/5.gif'
		    },
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/dk/6.gif'
		    },
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/dk/7.gif'
		    }
		  ]
		},
		{
		  "title": "1",
		  'flag' : 'dt', 
		  "imgurls": [
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/dt/1.gif'
		    },
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/dt/2.gif'
		    },
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/dt/3.gif'
		    }
		  ]
		},
		{
		  "title": "2",
		  'flag' : 'mgt', 
		  "imgurls": [
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/mgt/3.gif'
		    },
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/mgt/1.gif'
		    },
		    {
		      title : '滾蛋',
		      url : 'http://www.minizhen.com/pk/emjio/mgt/2.gif'
		    }
		  ]
		},
	]

	data.forEach(function(value, index) {
		if(value.flag == type ){
			imgList = value
		}
	});

	res.send(imgList);
});

module.exports = router;


