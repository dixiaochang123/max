module.exports = {
	//产品对应指标
    indexInfo: [
		//name: 产品名称
		// indexNum:第几个指标
		// indexDetail:指标明细
		// firstNum:初始值
		// endNum:结束值
		// startNum:起始数
		// warnNum:预警数 maxNum*0.8
		// maxNum: 最大值
		// addNum: 扩容目标值  ( % :addNum / 3) (数值:addNum * 3)
		// addMultiple: 扩容倍数
		// aniTime:动画时间
		// israte: 是否百分比
		// max：抖动 最大值
		// min：抖动 最小值
		
        {name:'弹性云主机',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:100,endNum:57,startNum:0,aniTime:3,addMultiple:3,israte:true,max:60,min:55},//服务器使用率
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:100,endNum:81,startNum:0,aniTime:3,addMultiple:3,israte:true,max:85,min:78},//磁盘使用率
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:100,endNum:87,startNum:0,aniTime:3,addMultiple:3,israte:true},//CPU使用率
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:100,endNum:63,startNum:0,aniTime:3,addMultiple:3,israte:true},//内存使用率
			
			{indexNum:3,indexDetail:1,firstNum:0,maxNum:3000,endNum:950,startNum:0,aniTime:3,addMultiple:3,israte:false},//带宽大小
			{indexNum:3,indexDetail:2,firstNum:0,maxNum:400,endNum:120,startNum:0,aniTime:3,addMultiple:3,israte:false},//实时流量
			{indexNum:3,indexDetail:3,firstNum:0,maxNum:70,endNum:23,startNum:0,aniTime:3,addMultiple:3,israte:false},//网络时延
			{indexNum:3,indexDetail:4,firstNum:0,maxNum:0.5,endNum:0.32,startNum:0,aniTime:3,addMultiple:3,israte:true},//丢包率
			
			{indexNum:4,indexDetail:1,firstNum:0,maxNum:90000,endNum:76000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			
			{indexNum:5,indexDetail:1,firstNum:0,maxNum:30000,endNum:10000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:5,indexDetail:2,firstNum:0,maxNum:60,endNum:20,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:5,indexDetail:3,firstNum:0,maxNum:100,endNum:48,startNum:0,aniTime:3,addMultiple:3,israte:true},//柱状1
			{indexNum:5,indexDetail:4,firstNum:0,maxNum:100,endNum:76,startNum:0,aniTime:3,addMultiple:3,israte:true},//柱状2
			
			{indexNum:6,indexDetail:1,firstNum:0,maxNum:15000,endNum:1800,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:2,firstNum:0,maxNum:15000,endNum:1300,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:3,firstNum:0,maxNum:15000,endNum:1000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:4,firstNum:0,maxNum:15000,endNum:1200,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:5,firstNum:0,maxNum:15000,endNum:1300,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:6,firstNum:0,maxNum:150000,endNum:1450,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:7,firstNum:0,maxNum:150000,endNum:1550,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:8,firstNum:0,maxNum:150000,endNum:2800,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:9,firstNum:0,maxNum:150000,endNum:3700,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:10,firstNum:0,maxNum:150000,endNum:3800,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:10,firstNum:0,maxNum:150000,endNum:4500,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:11,firstNum:0,maxNum:150000,endNum:4300,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:12,firstNum:0,maxNum:150000,endNum:4150,startNum:0,aniTime:3,addMultiple:3,israte:false},
			// {indexNum:6,indexDetail:13,firstNum:0,maxNum:100,endNum:100,startNum:0,aniTime:3,addMultiple:3,israte:true},

		]},



		{name:'对象存储OOS',data:[  
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:30000,endNum:3000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:2300,endNum:2300,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:3000,endNum:950,startNum:0,aniTime:3,addMultiple:3,israte:false},
			
			{indexNum:3,indexDetail:1,firstNum:0,maxNum:24000,endNum:7200,startNum:0,aniTime:3,addMultiple:3,israte:false},
		]},



		{name:'关系数据库MySQL',data:[
			{indexNum:1,indexDetail:1,firstNum:1000,maxNum:20000,endNum:12000,startNum:0,aniTime:3,addMultiple:3,israte:false},//马上获得锁的查询数目
			{indexNum:1,indexDetail:2,firstNum:1000,maxNum:20000,endNum:14000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:3,firstNum:1000,maxNum:20000,endNum:3000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:4,firstNum:1000,maxNum:20000,endNum:6000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:5,firstNum:1000,maxNum:20000,endNum:4000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:6,firstNum:1000,maxNum:20000,endNum:8000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:7,firstNum:1000,maxNum:20000,endNum:1000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:8,firstNum:1000,maxNum:20000,endNum:5000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:9,firstNum:1000,maxNum:20000,endNum:8000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:10,firstNum:1000,maxNum:20000,endNum:12000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:11,firstNum:1000,maxNum:20000,endNum:15000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:12,firstNum:1000,maxNum:20000,endNum:13000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:13,firstNum:1000,maxNum:20000,endNum:9000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:14,firstNum:1000,maxNum:20000,endNum:11000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:15,firstNum:1000,maxNum:20000,endNum:16000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:16,firstNum:1000,maxNum:20000,endNum:12000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:17,firstNum:1000,maxNum:20000,endNum:9000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:18,firstNum:1000,maxNum:20000,endNum:3000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:19,firstNum:1000,maxNum:20000,endNum:7000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:20,firstNum:1000,maxNum:20000,endNum:12000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:21,firstNum:1000,maxNum:20000,endNum:9000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:22,firstNum:1000,maxNum:20000,endNum:11000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:23,firstNum:1000,maxNum:20000,endNum:6000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:24,firstNum:1000,maxNum:20000,endNum:11000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:25,firstNum:1000,maxNum:20000,endNum:18000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:26,firstNum:1000,maxNum:20000,endNum:9000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:27,firstNum:1000,maxNum:20000,endNum:15000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:28,firstNum:1000,maxNum:20000,endNum:4000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:29,firstNum:1000,maxNum:20000,endNum:9000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:30,firstNum:1000,maxNum:20000,endNum:14000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:31,firstNum:1000,maxNum:20000,endNum:11000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:32,firstNum:1000,maxNum:20000,endNum:15000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:33,firstNum:1000,maxNum:20000,endNum:8000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:34,firstNum:1000,maxNum:20000,endNum:11000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:35,firstNum:1000,maxNum:20000,endNum:3000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:36,firstNum:1000,maxNum:20000,endNum:9000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:37,firstNum:1000,maxNum:20000,endNum:14000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:38,firstNum:1000,maxNum:20000,endNum:19000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:39,firstNum:1000,maxNum:20000,endNum:14000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:40,firstNum:1000,maxNum:20000,endNum:8000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:41,firstNum:1000,maxNum:20000,endNum:13000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:42,firstNum:1000,maxNum:20000,endNum:9000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:43,firstNum:1000,maxNum:20000,endNum:12000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:44,firstNum:1000,maxNum:20000,endNum:6000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:45,firstNum:1000,maxNum:20000,endNum:9000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:46,firstNum:1000,maxNum:20000,endNum:14000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:47,firstNum:1000,maxNum:20000,endNum:7000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:48,firstNum:1000,maxNum:20000,endNum:15000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:49,firstNum:1000,maxNum:20000,endNum:9000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:50,firstNum:1000,maxNum:20000,endNum:12000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:51,firstNum:1000,maxNum:20000,endNum:9000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:52,firstNum:1000,maxNum:20000,endNum:15000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:53,firstNum:1000,maxNum:20000,endNum:5000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:54,firstNum:1000,maxNum:20000,endNum:14000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:55,firstNum:1000,maxNum:20000,endNum:9000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:56,firstNum:1000,maxNum:20000,endNum:17000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:57,firstNum:1000,maxNum:20000,endNum:7000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:58,firstNum:1000,maxNum:20000,endNum:13000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:59,firstNum:1000,maxNum:20000,endNum:6000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:60,firstNum:1000,maxNum:20000,endNum:15000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:61,firstNum:1000,maxNum:20000,endNum:6000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:62,firstNum:1000,maxNum:20000,endNum:13000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:63,firstNum:1000,maxNum:20000,endNum:8000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:64,firstNum:1000,maxNum:20000,endNum:12000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:65,firstNum:1000,maxNum:20000,endNum:6000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:66,firstNum:1000,maxNum:20000,endNum:14000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:67,firstNum:1000,maxNum:20000,endNum:5000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:68,firstNum:1000,maxNum:20000,endNum:12000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:69,firstNum:1000,maxNum:20000,endNum:8000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:70,firstNum:1000,maxNum:20000,endNum:16000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:71,firstNum:1000,maxNum:20000,endNum:9000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:72,firstNum:1000,maxNum:20000,endNum:13000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			// {indexNum:1,indexDetail:73,firstNum:1000,maxNum:2000,endNum:13000,startNum:0,aniTime:3,addMultiple:3,israte:true},

			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},//不能马上获得锁的数据
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:6,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:7,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:8,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:9,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:10,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:11,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:12,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:13,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:14,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:15,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:16,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:17,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:18,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:19,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:20,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:21,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:22,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:23,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:24,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:25,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:26,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:27,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:28,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:29,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:30,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:31,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:32,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:33,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:34,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:35,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:36,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:37,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:38,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:39,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:40,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:41,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:42,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:43,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:44,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:45,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:46,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:47,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:48,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:49,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:50,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:51,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:52,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:53,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:54,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:55,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:56,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:57,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:58,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:59,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:60,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:61,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:62,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:63,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:64,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:65,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:66,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:67,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:68,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:69,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:70,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:71,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:72,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},

			
			{indexNum:3,indexDetail:1,firstNum:0,maxNum:100,endNum:38,startNum:0,aniTime:3,addMultiple:3,israte:false},//插入数据
			{indexNum:3,indexDetail:2,firstNum:0,maxNum:100,endNum:62,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:3,firstNum:0,maxNum:100,endNum:49,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:4,firstNum:0,maxNum:100,endNum:72,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:5,firstNum:0,maxNum:100,endNum:38,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:6,firstNum:0,maxNum:100,endNum:22,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:7,firstNum:0,maxNum:100,endNum:39,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:8,firstNum:0,maxNum:100,endNum:51,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:9,firstNum:0,maxNum:100,endNum:17,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:10,firstNum:0,maxNum:100,endNum:69,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:11,firstNum:0,maxNum:100,endNum:38,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:12,firstNum:0,maxNum:100,endNum:61,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:13,firstNum:0,maxNum:100,endNum:27,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:14,firstNum:0,maxNum:100,endNum:58,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:15,firstNum:0,maxNum:100,endNum:27,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:16,firstNum:0,maxNum:100,endNum:53,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:17,firstNum:0,maxNum:100,endNum:37,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:18,firstNum:0,maxNum:100,endNum:85,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:19,firstNum:0,maxNum:100,endNum:39,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:20,firstNum:0,maxNum:100,endNum:79,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:21,firstNum:0,maxNum:100,endNum:17,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:22,firstNum:0,maxNum:100,endNum:61,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:23,firstNum:0,maxNum:100,endNum:27,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:24,firstNum:0,maxNum:100,endNum:63,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:25,firstNum:0,maxNum:100,endNum:43,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:26,firstNum:0,maxNum:100,endNum:70,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:27,firstNum:0,maxNum:100,endNum:38,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:28,firstNum:0,maxNum:100,endNum:66,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:29,firstNum:0,maxNum:100,endNum:30,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:30,firstNum:0,maxNum:100,endNum:70,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:31,firstNum:0,maxNum:100,endNum:16,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:32,firstNum:0,maxNum:100,endNum:45,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:33,firstNum:0,maxNum:100,endNum:29,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:34,firstNum:0,maxNum:100,endNum:54,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:35,firstNum:0,maxNum:100,endNum:38,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:36,firstNum:0,maxNum:100,endNum:52,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:37,firstNum:0,maxNum:100,endNum:28,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:38,firstNum:0,maxNum:100,endNum:75,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:39,firstNum:0,maxNum:100,endNum:31,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:40,firstNum:0,maxNum:100,endNum:68,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:41,firstNum:0,maxNum:100,endNum:30,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:42,firstNum:0,maxNum:100,endNum:75,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:43,firstNum:0,maxNum:100,endNum:42,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:44,firstNum:0,maxNum:100,endNum:65,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:45,firstNum:0,maxNum:100,endNum:37,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:46,firstNum:0,maxNum:100,endNum:59,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:47,firstNum:0,maxNum:100,endNum:29,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:48,firstNum:0,maxNum:100,endNum:48,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:49,firstNum:0,maxNum:100,endNum:23,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:50,firstNum:0,maxNum:100,endNum:61,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:51,firstNum:0,maxNum:100,endNum:16,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:52,firstNum:0,maxNum:100,endNum:45,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:53,firstNum:0,maxNum:100,endNum:28,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:54,firstNum:0,maxNum:100,endNum:73,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:55,firstNum:0,maxNum:100,endNum:19,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:56,firstNum:0,maxNum:100,endNum:39,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:57,firstNum:0,maxNum:100,endNum:27,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:58,firstNum:0,maxNum:100,endNum:78,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:59,firstNum:0,maxNum:100,endNum:29,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:60,firstNum:0,maxNum:100,endNum:64,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:61,firstNum:0,maxNum:100,endNum:26,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:62,firstNum:0,maxNum:100,endNum:83,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:63,firstNum:0,maxNum:100,endNum:61,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:64,firstNum:0,maxNum:100,endNum:73,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:65,firstNum:0,maxNum:100,endNum:42,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:66,firstNum:0,maxNum:100,endNum:54,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:67,firstNum:0,maxNum:100,endNum:85,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:68,firstNum:0,maxNum:100,endNum:30,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:69,firstNum:0,maxNum:100,endNum:70,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:70,firstNum:0,maxNum:100,endNum:47,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:71,firstNum:0,maxNum:100,endNum:89,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:72,firstNum:0,maxNum:100,endNum:23,startNum:0,aniTime:3,addMultiple:3,israte:false},

			
			{indexNum:4,indexDetail:1,firstNum:0,maxNum:1000,endNum:730,startNum:0,aniTime:3,addMultiple:3,israte:false},//查询数据
			{indexNum:4,indexDetail:2,firstNum:0,maxNum:1000,endNum:790,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:3,firstNum:0,maxNum:1000,endNum:710,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:4,firstNum:0,maxNum:1000,endNum:1000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:5,firstNum:0,maxNum:1000,endNum:720,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:6,firstNum:0,maxNum:1000,endNum:775,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:7,firstNum:0,maxNum:1000,endNum:723,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:8,firstNum:0,maxNum:1000,endNum:795,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:9,firstNum:0,maxNum:1000,endNum:719,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:10,firstNum:0,maxNum:1000,endNum:780,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:11,firstNum:0,maxNum:1000,endNum:723,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:12,firstNum:0,maxNum:1000,endNum:770,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:13,firstNum:0,maxNum:1000,endNum:729,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:14,firstNum:0,maxNum:1000,endNum:787,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:15,firstNum:0,maxNum:1000,endNum:725,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:16,firstNum:0,maxNum:1000,endNum:769,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:17,firstNum:0,maxNum:1000,endNum:735,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:18,firstNum:0,maxNum:1000,endNum:1000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:19,firstNum:0,maxNum:1000,endNum:726,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:20,firstNum:0,maxNum:1000,endNum:789,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:21,firstNum:0,maxNum:1000,endNum:725,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:22,firstNum:0,maxNum:1000,endNum:794,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:23,firstNum:0,maxNum:1000,endNum:725,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:24,firstNum:0,maxNum:1000,endNum:752,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:25,firstNum:0,maxNum:1000,endNum:715,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:26,firstNum:0,maxNum:1000,endNum:783,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:27,firstNum:0,maxNum:1000,endNum:728,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:28,firstNum:0,maxNum:1000,endNum:1000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:29,firstNum:0,maxNum100:0,endNum:724,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:30,firstNum:0,maxNum:1000,endNum:785,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:31,firstNum:0,maxNum:1000,endNum:742,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:32,firstNum:0,maxNum:1000,endNum:793,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:33,firstNum:0,maxNum:1000,endNum:735,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:34,firstNum:0,maxNum:1000,endNum:782,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:35,firstNum:0,maxNum:1000,endNum:725,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:36,firstNum:0,maxNum:1000,endNum:793,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:37,firstNum:0,maxNum:1000,endNum:717,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:38,firstNum:0,maxNum:1000,endNum:709,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:39,firstNum:0,maxNum:1000,endNum:784,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:40,firstNum:0,maxNum:1000,endNum:725,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:41,firstNum:0,maxNum:1000,endNum:793,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:42,firstNum:0,maxNum:1000,endNum:715,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:43,firstNum:0,maxNum:1000,endNum:802,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:44,firstNum:0,maxNum:1000,endNum:736,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:45,firstNum:0,maxNum:1000,endNum:792,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:46,firstNum:0,maxNum:1000,endNum:728,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:47,firstNum:0,maxNum:1000,endNum:784,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:48,firstNum:0,maxNum:1000,endNum:709,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:49,firstNum:0,maxNum:1000,endNum:774,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:50,firstNum:0,maxNum:1000,endNum:712,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:51,firstNum:0,maxNum:1000,endNum:763,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:52,firstNum:0,maxNum:1000,endNum:707,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:53,firstNum:0,maxNum:1000,endNum:778,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:54,firstNum:0,maxNum:1000,endNum:731,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:55,firstNum:0,maxNum:1000,endNum:780,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:56,firstNum:0,maxNum:1000,endNum:732,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:57,firstNum:0,maxNum:1000,endNum:794,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:58,firstNum:0,maxNum:1000,endNum:726,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:59,firstNum:0,maxNum:1000,endNum:786,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:60,firstNum:0,maxNum:1000,endNum:737,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:61,firstNum:0,maxNum:1000,endNum:773,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:62,firstNum:0,maxNum:1000,endNum:736,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:63,firstNum:0,maxNum:1000,endNum:784,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:64,firstNum:0,maxNum:1000,endNum:720,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:65,firstNum:0,maxNum:1000,endNum:790,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:66,firstNum:0,maxNum:1000,endNum:725,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:67,firstNum:0,maxNum:1000,endNum:782,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:68,firstNum:0,maxNum:1000,endNum:735,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:69,firstNum:0,maxNum:1000,endNum:791,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:70,firstNum:0,maxNum:1000,endNum:710,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:71,firstNum:0,maxNum:1000,endNum:780,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:4,indexDetail:72,firstNum:0,maxNum:1000,endNum:711,startNum:0,aniTime:3,addMultiple:3,israte:false},

			
			{indexNum:6,indexDetail:1,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},//删除数据
			{indexNum:6,indexDetail:2,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:3,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:4,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:5,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:6,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:7,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:8,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:9,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:10,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:11,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:12,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:13,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:14,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:15,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:16,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:17,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:18,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:19,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:20,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:21,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:22,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:23,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:24,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:25,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:26,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:27,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:28,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:29,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:30,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:31,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:32,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:33,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:34,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:35,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:36,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:37,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:38,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:39,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:40,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:41,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:42,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:43,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:44,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:45,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:46,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:47,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:48,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:49,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:50,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:51,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:52,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:53,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:54,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:55,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:56,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:57,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:58,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:59,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:60,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:61,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:62,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:63,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:64,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:65,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:66,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:67,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:68,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:69,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:70,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:71,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:72,firstNum:0,maxNum:00,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},			

		]},

		{name:'CDN内容分发',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:20,endNum:20,startNum:0,aniTime:3,addMultiple:2,israte:true},//网络时延
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:0.01,endNum:0.01,startNum:0,aniTime:3,addMultiple:1.5,israte:true},//丢包率
			{indexNum:1,indexDetail:3,firstNum:0,maxNum:3000,endNum:950,startNum:0,aniTime:3,addMultiple:3,israte:false}, //宽带大小
			{indexNum:1,indexDetail:4,firstNum:0,maxNum:500,endNum:120,startNum:0,aniTime:3,addMultiple:3,israte:false},//实时流量
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:3300,endNum:1600,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:5600,endNum:2700,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:7200,endNum:3200,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:9600,endNum:4000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:8600,endNum:3500,startNum:0,aniTime:3,addMultiple:3,israte:false},	
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:5600,endNum:3100,startNum:0,aniTime:3,addMultiple:3,israte:false},	
		]},



		{name:'专属云',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:3000,endNum:1000,startNum:0,aniTime:3,addMultiple:3,israte:true},
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:1200,endNum:400,startNum:0,aniTime:3,addMultiple:3,israte:true},
                                                
			{indexNum:2,indexDetail:3,firstNum:500,maxNum:950,endNum:950,startNum:0,aniTime:3,addMultiple:3,israte:true}

		]},
 


        {name:'DDoS高防IP',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:100,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},//被攻击统计
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:100,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:false},//发起攻击统计
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:150000,endNum:5000,startNum:0,aniTime:3,addMultiple:3,israte:false},//国际发起
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:150000,endNum:12000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:150000,endNum:15000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:150000,endNum:15000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:150000,endNum:20000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:6,firstNum:0,maxNum:150000,endNum:15000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:7,firstNum:0,maxNum:150000,endNum:21000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:8,firstNum:0,maxNum:150000,endNum:13000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:9,firstNum:0,maxNum:150000,endNum:11000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:10,firstNum:0,maxNum:150000,endNum:13000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:11,firstNum:0,maxNum:150000,endNum:16000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:12,firstNum:0,maxNum:150000,endNum:19000,startNum:0,aniTime:3,addMultiple:3,israte:false},

			{indexNum:3,indexDetail:13,firstNum:0,maxNum:150000,endNum:18000,startNum:0,aniTime:3,addMultiple:3,israte:false},//国内发起
			{indexNum:3,indexDetail:14,firstNum:0,maxNum:150000,endNum:23000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:15,firstNum:0,maxNum:150000,endNum:28000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:16,firstNum:0,maxNum:150000,endNum:31000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:17,firstNum:0,maxNum:150000,endNum:42000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:18,firstNum:0,maxNum:150000,endNum:39500,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:19,firstNum:0,maxNum:150000,endNum:46000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:20,firstNum:0,maxNum:150000,endNum:35000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:21,firstNum:0,maxNum:150000,endNum:30000,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:22,firstNum:0,maxNum:150000,endNum:39500,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:23,firstNum:0,maxNum:150000,endNum:43500,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:24,firstNum:0,maxNum:150000,endNum:38000,startNum:0,aniTime:3,addMultiple:3,israte:false},
                                ]},



		{name:'web应用防火墙',data:[  
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:170462,endNum:170462,startNum:0,aniTime:3,addMultiple:3,israte:false},//高级
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:61905,endNum:61905,startNum:0,aniTime:3,addMultiple:3,israte:false},//中级
			{indexNum:1,indexDetail:3,firstNum:0,maxNum:372509,endNum:372509,startNum:0,aniTime:3,addMultiple:3,israte:false},//SQL注入攻击数 低级

			{indexNum:2,indexDetail:1,firstNum:0,maxNum:1,endNum:1,startNum:0,aniTime:3,addMultiple:3,israte:true,name:'拒绝代码'},//高危漏洞类型统计 拒绝代码
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:3,endNum:30,startNum:0,aniTime:3,addMultiple:3,israte:true,name:'CSRF夸张请求伪造'},//CSRF夸张请求伪造
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:true,name:'目录列表'},//目录列表
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:true,name:'代码执行'},//代码执行
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:28,endNum:28,startNum:0,aniTime:3,addMultiple:3,israte:true,name:'信息泄露'},//信息泄露
			{indexNum:2,indexDetail:6,firstNum:0,maxNum:24,endNum:24,startNum:0,aniTime:3,addMultiple:3,israte:true,name:'XSS注入'},//XSS注入
			{indexNum:2,indexDetail:7,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:true,name:'弱密码'},//弱密码
			{indexNum:2,indexDetail:8,firstNum:0,maxNum:0,endNum:0,startNum:0,aniTime:3,addMultiple:3,israte:true,name:'URL重定向'},//URL重定向
			{indexNum:2,indexDetail:9,firstNum:0,maxNum:11,endNum:11,startNum:0,aniTime:3,addMultiple:3,israte:true,name:'SQL注入'},//SQL注入
			{indexNum:2,indexDetail:10,firstNum:0,maxNum:3,endNum:3,startNum:0,aniTime:3,addMultiple:3,israte:true,name:'目录追历'},//目录追历
			{indexNum:2,indexDetail:11,firstNum:0,maxNum:2,endNum:2,startNum:0,aniTime:3,addMultiple:3,israte:true,name:'密码猜解'},//密码猜解
			{indexNum:2,indexDetail:12,firstNum:0,maxNum:1,endNum:1,startNum:0,aniTime:3,addMultiple:3,israte:true,name:'暗链发现'},//暗链发现

		]},



		{name:'云间高速',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:500,endNum:120,startNum:0,aniTime:3,addMultiple:3,israte:false},//实时流量
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:3000,endNum:960,startNum:0,aniTime:3,addMultiple:3,israte:false},//宽带大小
			{indexNum:1,indexDetail:3,firstNum:0,maxNum:90,endNum:6,startNum:0,aniTime:3,addMultiple:3,israte:false},//网络时延
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:10,endNum:3,startNum:0,aniTime:3,addMultiple:3,israte:false,max:7,min:3},//时延
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:10,endNum:5,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:10,endNum:8,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:10,endNum:6,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:10,endNum:9,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:6,firstNum:0,maxNum:10,endNum:7,startNum:0,aniTime:3,addMultiple:3,israte:false},
            {indexNum:2,indexDetail:7,firstNum:0,maxNum:10,endNum:6,startNum:0,aniTime:3,addMultiple:3,israte:false},
			
			{indexNum:3,indexDetail:1,firstNum:0,maxNum:7,endNum:4,startNum:0,aniTime:3,addMultiple:3,israte:false},//抖动
			{indexNum:3,indexDetail:2,firstNum:0,maxNum:7,endNum:7,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:3,firstNum:0,maxNum:7,endNum:6,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:4,firstNum:0,maxNum:7,endNum:4,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:5,firstNum:0,maxNum:7,endNum:5,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:6,firstNum:0,maxNum:7,endNum:3,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:7,firstNum:0,maxNum:7,endNum:5,startNum:0,aniTime:3,addMultiple:3,israte:false},			
		]},



		{name:'云直播',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:950,endNum:950,startNum:0,aniTime:3,addMultiple:3,israte:false},//宽带
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:28,endNum:14,startNum:0,aniTime:3,addMultiple:3,israte:false},//网络时延
			{indexNum:1,indexDetail:3,firstNum:0,maxNum:0.00,endNum:0.00,startNum:0,aniTime:3,addMultiple:2,israte:true},//丢包率
			{indexNum:1,indexDetail:4,firstNum:0,maxNum:100,endNum:1,startNum:0,aniTime:3,addMultiple:3,israte:false},//AI审核
			{indexNum:1,indexDetail:5,firstNum:0,maxNum:100,endNum:1,startNum:0,aniTime:3,addMultiple:3,israte:false},//实施转码
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:4121739,endNum:1121739,startNum:0,aniTime:3,addMultiple:3,israte:false},//高峰连接数
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:714476,endNum:214476,startNum:0,aniTime:3,addMultiple:3,israte:false},//用户数
	
		]},



		{name:'物理机',data:[
			 {indexNum:1,indexDetail:1,firstNum:0,maxNum:100,endNum:52,startNum:0,aniTime:3,addMultiple:3,israte:true,title:'CPU使用率'},//CPU使用率
			 {indexNum:1,indexDetail:2,firstNum:0,maxNum:5,endNum:1,startNum:0,aniTime:3,addMultiple:3,israte:true,title:'CPU iowait'},//CPU iowait
			 {indexNum:1,indexDetail:3,firstNum:0,maxNum:100,endNum:56,startNum:0,aniTime:3,addMultiple:3,israte:true,title:'内存使用率'},//内存使用率
                                               
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:100,endNum:3.06,startNum:0,aniTime:3,addMultiple:3,israte:false,title:'当前打开的文件描述符'},//当前打开的文件描述符
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:100,endNum:15,startNum:0,aniTime:3,addMultiple:3,israte:true,title:'根分区使用率'},//根分区使用率
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:100,endNum:27,startNum:0,aniTime:3,addMultiple:3,israte:true,title:'最大分区（/）使用率'},//最大分区（/）使用率
			
		]},
 


        {name:'GPU云主机',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:95,endNum:60,startNum:0,aniTime:3,addMultiple:3,range:7,israte:true},//GPU使用率
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:100,endNum:70,startNum:0,aniTime:3,addMultiple:3,range:2,israte:true},//解码器使用率
			{indexNum:1,indexDetail:3,firstNum:0,maxNum:100,endNum:35,startNum:0,aniTime:3,addMultiple:3,range:2,israte:true},//GPU显存使用率
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:80,endNum:65,startNum:0,aniTime:3,addMultiple:3,israte:false},//GPU温度
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:80,endNum:66,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:80,endNum:68,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:80,endNum:68,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:80,endNum:67,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:6,firstNum:0,maxNum:80,endNum:67,startNum:0,aniTime:3,addMultiple:3,israte:false},
            {indexNum:2,indexDetail:7,firstNum:0,maxNum:80,endNum:67,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:8,firstNum:0,maxNum:80,endNum:68,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:9,firstNum:0,maxNum:80,endNum:67,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:10,firstNum:0,maxNum:80,endNum:68,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:11,firstNum:0,maxNum:80,endNum:69,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:12,firstNum:0,maxNum:80,endNum:70,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:13,firstNum:0,maxNum:80,endNum:70,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:14,firstNum:0,maxNum:80,endNum:68,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:15,firstNum:0,maxNum:80,endNum:69,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:16,firstNum:0,maxNum:80,endNum:70,startNum:0,aniTime:3,addMultiple:3,israte:false},
            {indexNum:2,indexDetail:17,firstNum:0,maxNum:80,endNum:71,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:18,firstNum:0,maxNum:80,endNum:71,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:19,firstNum:0,maxNum:80,endNum:70,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:20,firstNum:0,maxNum:80,endNum:69,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:21,firstNum:0,maxNum:80,endNum:68,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:22,firstNum:0,maxNum:80,endNum:69,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:23,firstNum:0,maxNum:80,endNum:68,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:24,firstNum:0,maxNum:80,endNum:66,startNum:0,aniTime:3,addMultiple:3,israte:false},

		]},

                        
                             
        {name:'弹性负载均衡ELB',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:9685147,endNum:2685147,startNum:0,aniTime:3,addMultiple:3,israte:false},//网络连接数
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:100,endNum:14.37,startNum:0,aniTime:3,addMultiple:3,israte:true},//网络连接数 同比百分比   
			{indexNum:1,indexDetail:3,firstNum:0,maxNum:100,endNum:65,startNum:0,aniTime:3,addMultiple:3,israte:true},//单机负载
			{indexNum:1,indexDetail:4,firstNum:0,maxNum:100,endNum:0.16,startNum:0,aniTime:3,addMultiple:3,israte:true},//单机负载 同比百分比
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:15000,endNum:2164,startNum:0,aniTime:3,addMultiple:3,israte:false},//高峰并发值
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:15000,endNum:3416,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:15000,endNum:3782,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:15000,endNum:2940,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:15000,endNum:3389,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:6,firstNum:0,maxNum:15000,endNum:2691,startNum:0,aniTime:3,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:7,firstNum:0,maxNum:15000,endNum:3461,startNum:0,aniTime:3,addMultiple:3,israte:false},
                                         	
		]},




    ],
}