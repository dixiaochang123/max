module.exports = {
	//案例数据
    caseInfo: [
		// industry:行业
		// scale:规模
		// name://案例名称
		// serverNum:云主机数量
		// duration:使用时长   =  serverNum*Math.random()*2
		// onlineUserNumber:在线用户数（万） = (serverNum*100+serverNum*Math.random()*50)/10000
		// peakUserNumber:巅峰用户数（万） = (serverNum*300+serverNum*Math.random()*50)/10000
		// caseTopMap:对应的案例拓扑图
		// showPro:展示产品
		// actualPro:实际产品
		
		{
			id: 101,industry:'教育行业',scale:'max',name: '上海***区教育局',serverNum:300,caseTopMap:'jyhy_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 102,industry:'教育行业',scale:'max',name: '上海***区教育局',serverNum:343,caseTopMap:'jyhy_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			
			actualPro:[{name:'专属云'},{name:'DDoS高防IP'},{name:'GPU云主机'},{name:'弹性负载均衡ELB'},{name:'web应用防火墙'},{name:'云间高速'}],
			// actualPro:[{name:'web应用防火墙'},{name:'云间高速'},{name:'GPU云主机'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 103,industry:'教育行业',scale:'max',name: '上海***区教育局',serverNum:370,caseTopMap:'jyhy_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 104,industry:'教育行业',scale:'max',name: '上海***区教育局',serverNum:285,caseTopMap:'jyhy_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 105,industry:'教育行业',scale:'max',name: '上海***区教育局',serverNum:310,caseTopMap:'jyhy_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 106,industry:'教育行业',scale:'max',name: '上海***区教育局',serverNum:288,caseTopMap:'jyhy_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		


				
		{
			id: 101,industry:'教育行业',scale:'zhong',name: '上海***大学',serverNum:116,caseTopMap:'jyhy_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 102,industry:'教育行业',scale:'zhong',name: '上海***大学',serverNum:98,caseTopMap:'jyhy_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 103,industry:'教育行业',scale:'zhong',name: '上海***大学',serverNum:89,caseTopMap:'jyhy_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 104,industry:'教育行业',scale:'zhong',name: '上海***学院',serverNum:125,caseTopMap:'jyhy_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 105,industry:'教育行业',scale:'zhong',name: '上海***学院',serverNum:114,caseTopMap:'jyhy_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 106,industry:'教育行业',scale:'zhong',name: '上海***学院',serverNum:102,caseTopMap:'jyhy_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		
		
		
		

		{
			id: 101,industry:'教育行业',scale:'min',name: '上海***培训学校',serverNum:116,caseTopMap:'jyhy_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 102,industry:'教育行业',scale:'min',name: '上海***培训机构',serverNum:98,caseTopMap:'jyhy_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 103,industry:'教育行业',scale:'min',name: '上海***教育中心',serverNum:89,caseTopMap:'jyhy_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 104,industry:'教育行业',scale:'min',name: '上海***教育机构',serverNum:125,caseTopMap:'jyhy_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 105,industry:'教育行业',scale:'min',name: '上海***培训学校',serverNum:114,caseTopMap:'jyhy_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 106,industry:'教育行业',scale:'min',name: '上海***培训学校',serverNum:102,caseTopMap:'jyhy_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		
		
		
		{
			id: 106,industry:'政府机关',scale:'max',name: '上海***区大数据中心',serverNum:305,caseTopMap:'zfjg_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
			
		},
		{
			id: 106,industry:'政府机关',scale:'max',name: '上海***区大数据中心',serverNum:312,caseTopMap:'zfjg_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'max',name: '上海***区大数据中心',serverNum:351,caseTopMap:'zfjg_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'max',name: '上海***区大数据中心',serverNum:298,caseTopMap:'zfjg_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'max',name: '上海***区大数据中心',serverNum:267,caseTopMap:'zfjg_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'max',name: '上海***区大数据中心',serverNum:286,caseTopMap:'zfjg_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		
		
		
		
		
		{
			id: 106,industry:'政府机关',scale:'zhong',name: '上海***区大数据中心',serverNum:130,caseTopMap:'zfjg_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'zhong',name: '上海***区大数据中心',serverNum:146,caseTopMap:'zfjg_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'zhong',name: '上海***区大数据中心',serverNum:115,caseTopMap:'zfjg_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'zhong',name: '上海***区大数据中心',serverNum:106,caseTopMap:'zfjg_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'zhong',name: '上海***区大数据中心',serverNum:144,caseTopMap:'zfjg_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'zhong',name: '上海***区大数据中心',serverNum:160,caseTopMap:'zfjg_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		
		
		{
			id: 106,industry:'政府机关',scale:'min',name: '上海***区大数据中心',serverNum:25,caseTopMap:'zfjg_ming_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'min',name: '上海***区大数据中心',serverNum:37,caseTopMap:'zfjg_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'min',name: '上海***区大数据中心',serverNum:35,caseTopMap:'zfjg_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'min',name: '上海***区大数据中心',serverNum:16,caseTopMap:'zfjg_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'min',name: '上海***区大数据中心',serverNum:22,caseTopMap:'zfjg_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'政府机关',scale:'min',name: '上海***区大数据中心',serverNum:33,caseTopMap:'zfjg_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'CDN内容分发'},{name:'弹性负载均衡ELB'}],
		},
		
		
		
		
		
		
		{
			id: 101,industry:'金融行业',scale:'max',name: '上海***证券交易所',serverNum:375,caseTopMap:'jrhy_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 102,industry:'金融行业',scale:'max',name: '***银行上海分行',serverNum:330,caseTopMap:'jrhy_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 103,industry:'金融行业',scale:'max',name: '***银行上海分行',serverNum:344,caseTopMap:'jyhy_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 104,industry:'金融行业',scale:'max',name: '***银行上海分行',serverNum:365,caseTopMap:'jyhy_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 105,industry:'金融行业',scale:'max',name: '***保险上海分公司',serverNum:310,caseTopMap:'jyhy_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 106,industry:'金融行业',scale:'max',name: '***保险上海分公司',serverNum:384,caseTopMap:'jyhy_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		
		
		
		
		
		
		{
			id: 101,industry:'金融行业',scale:'zhong ',name: '***证券公司',serverNum:290,caseTopMap:'jrhy_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 102,industry:'金融行业',scale:'zhong',name: '***证券公司',serverNum:210,caseTopMap:'jrhy_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 103,industry:'金融行业',scale:'zhong',name: '***证券公司',serverNum:234,caseTopMap:'jyhy_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 104,industry:'金融行业',scale:'zhong',name: '***证券公司',serverNum:256,caseTopMap:'jyhy_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 105,industry:'金融行业',scale:'zhong',name: '***证券公司',serverNum:377,caseTopMap:'jyhy_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 106,industry:'金融行业',scale:'zhong',name: '***证券公司',serverNum:345,caseTopMap:'jyhy_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		
		
		
		
		
		
		
		{
			id: 101,industry:'金融行业',scale:'min ',name: '***证券公司',serverNum:177,caseTopMap:'jrhy_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 102,industry:'金融行业',scale:'min',name: '***证券公司',serverNum:135,caseTopMap:'jrhy_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 103,industry:'金融行业',scale:'min',name: '***证券公司',serverNum:114,caseTopMap:'jyhy_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 104,industry:'金融行业',scale:'min',name: '***证券公司',serverNum:121,caseTopMap:'jyhy_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 105,industry:'金融行业',scale:'min',name: '***证券公司',serverNum:144,caseTopMap:'jyhy_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		{
			id: 106,industry:'金融行业',scale:'min',name: '***证券公司',serverNum:136,caseTopMap:'jyhy_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'CDN内容分发'},{name:'物理机'},{name:'云直播'}],
		},
		
		
		
		
	

		{
			id: 101,industry:'通用行业',scale:'max',name: '***有限责任公司',serverNum:350,caseTopMap:'tyhy_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 102,industry:'通用行业',scale:'max',name: '***股份有限公司',serverNum:376,caseTopMap:'tyhy_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 103,industry:'通用行业',scale:'max',name: '***集团',serverNum:345,caseTopMap:'tyhy_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 104,industry:'通用行业',scale:'max',name: '***有限责任公司',serverNum:312,caseTopMap:'tyhy_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 105,industry:'通用行业',scale:'max',name: '***股份有限公司',serverNum:301,caseTopMap:'tyhy_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 106,industry:'通用行业',scale:'max',name: '***集团',serverNum:334,caseTopMap:'tyhy_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		

		{
			id: 101,industry:'通用行业',scale:'zhong',name: '***有限责任公司',serverNum:150,caseTopMap:'tyhy_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 102,industry:'通用行业',scale:'zhong',name: '***有限责任公司',serverNum:104,caseTopMap:'tyhy_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 103,industry:'通用行业',scale:'zhong',name: '***有限责任公司',serverNum:125,caseTopMap:'tyhy_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 104,industry:'通用行业',scale:'zhong',name: '***有限责任公司',serverNum:222,caseTopMap:'tyhy_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 105,industry:'通用行业',scale:'zhong',name: '***有限责任公司',serverNum:135,caseTopMap:'tyhy_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 106,industry:'通用行业',scale:'zhong',name: '***有限责任公司',serverNum:254,caseTopMap:'tyhy_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		
		
		{
			id: 101,industry:'通用行业',scale:'min',name: '***有限责任公司',serverNum:50,caseTopMap:'tyhy_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 102,industry:'通用行业',scale:'min',name: '***有限责任公司',serverNum:74,caseTopMap:'tyhy_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 103,industry:'通用行业',scale:'min',name: '***有限责任公司',serverNum:68,caseTopMap:'tyhy_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 104,industry:'通用行业',scale:'min',name: '***有限责任公司',serverNum:42,caseTopMap:'tyhy_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 105,industry:'通用行业',scale:'min',name: '***有限责任公司',serverNum:35,caseTopMap:'tyhy_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		{
			id: 106,industry:'通用行业',scale:'min',name: '***有限责任公司',serverNum:24,caseTopMap:'tyhy_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'对象存储OOS'},{name:'专属云'},{name:'弹性负载均衡ELB'},{name:'云直播'}],
		},
		
		
		
		

		{
			id: 101,industry:'工业行业',scale:'max',name: '中国***飞机有限公司',serverNum:325,caseTopMap:'gyhy_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 102,industry:'工业行业',scale:'max',name: '中国***化工有限公司',serverNum:374,caseTopMap:'gyhy_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 103,industry:'工业行业',scale:'max',name: '中国***汽车有限公司',serverNum:368,caseTopMap:'gyhy_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 104,industry:'工业行业',scale:'max',name: '中国***船舶有限公司',serverNum:332,caseTopMap:'gyhy_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 105,industry:'工业行业',scale:'max',name: '中国***重工有限公司',serverNum:335,caseTopMap:'gyhy_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'工业行业',scale:'max',name: '中国***机械有限公司',serverNum:343,caseTopMap:'gyhy_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		
		
		
		
		
		{
			id: 101,industry:'工业行业',scale:'zhong',name: '上海***水泥股份有限公司',serverNum:144,caseTopMap:'gyhy_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 102,industry:'工业行业',scale:'zhong',name: '上海***电梯股份有限公司',serverNum:174,caseTopMap:'gyhy_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 103,industry:'工业行业',scale:'zhong',name: '上海***电子股份有限公司',serverNum:208,caseTopMap:'gyhy_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 104,industry:'工业行业',scale:'zhong',name: '上海***服装股份有限公司',serverNum:142,caseTopMap:'gyhy_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 105,industry:'工业行业',scale:'zhong',name: '上海***医疗器械股份有限公司',serverNum:115,caseTopMap:'gyhy_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'工业行业',scale:'zhong',name: '上海***仪表股份有限公司',serverNum:243,caseTopMap:'gyhy_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		
		{
			id: 101,industry:'工业行业',scale:'min',name: '上海***食品有限公司',serverNum:14,caseTopMap:'gyhy_max_1',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 102,industry:'工业行业',scale:'min',name: '上海***印刷包装有限公司',serverNum:23,caseTopMap:'gyhy_max_2',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 103,industry:'工业行业',scale:'min',name: '上海***建材有限公司',serverNum:58,caseTopMap:'gyhy_max_3',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 104,industry:'工业行业',scale:'min',name: '上海***灯饰有限公司',serverNum:62,caseTopMap:'gyhy_max_4',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 105,industry:'工业行业',scale:'min',name: '上海***玻璃有限公司',serverNum:85,caseTopMap:'gyhy_max_5',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},
		{
			id: 106,industry:'工业行业',scale:'min',name: '上海***汽车配件有限公司',serverNum:43,caseTopMap:'gyhy_max_6',
			showPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'弹性云主机'}],
			actualPro:[{name:'弹性云主机'},{name:'关系数据库MySQL'},{name:'DDoS高防IP'},{name:'CDN内容分发'},{name:'web应用防火墙'},{name:'弹性负载均衡ELB'}],
		},





		


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
    ],
	
	//案例页面：通过行业规模查询对应产品排名
	rankProInfo: [
		// industry:行业
		// scale:规模
		// product:产品
		//	name：产品
		//  value1:行业占比
		//	value2:同比上周
		{
			industry:'教育行业',scale:'max',
			product:[
				{name:'弹性云主机',value1:94.6,value2:3.2},
				{name:'关系数据库MySQL',value1:75.4,value2:1.2},
				{name:'对象存储OOS',value1:55.9,value2:2.9}
			]
		},
		{
			industry:'教育行业',scale:'zhong',
			product:[
				{name:'弹性云主机',value1:97.4,value2:2.2},
				{name:'关系数据库MySQL',value1:75.1,value2:4.1},
				{name:'对象存储OOS',value1:62.4,value2:5.2}
			]
		},
		{
			industry:'教育行业',scale:'min',
			product:[
				{name:'弹性云主机',value1:99.5,value2:1.6},
				{name:'关系数据库MySQL',value1:75.6,value2:1.2},
				{name:'对象存储OOS',value1:62.7,value2:1.7}
			]
		},
		
		
		
		{
			industry:'政府机关',scale:'max',
			product:[
				{name:'弹性云主机',value1:94.6,value2:6.2},
				{name:'关系数据库MySQL',value1:75.4,value2:1.2},
				{name:'对象存储OOS',value1:55.9,value2:2.2}
			]
		},
		{
			industry:'政府机关',scale:'zhong',
			product:[
				{name:'弹性云主机',value1:97.4,value2:2.2},
				{name:'关系数据库MySQL',value1:75.1,value2:4.1},
				{name:'对象存储OOS',value1:62.4,value2:5.2}
			]
		},
		{
			industry:'政府机关',scale:'min',
			product:[
				{name:'弹性云主机',value1:99.5,value2:1.6},
				{name:'关系数据库MySQL',value1:75.6,value2:1.2},
				{name:'对象存储OOS',value1:62.7,value2:1.7}
			]
		},
		
		{
			industry:'金融行业',scale:'max',
			product:[
				{name:'弹性云主机',value1:94.6,value2:6.2},
				{name:'关系数据库MySQL',value1:75.4,value2:1.2},
				{name:'对象存储OOS',value1:55.9,value2:2.2}
			]
		},
		{
			industry:'金融行业',scale:'zhong',
			product:[
				{name:'弹性云主机',value1:97.4,value2:2.2},
				{name:'关系数据库MySQL',value1:75.1,value2:4.1},
				{name:'对象存储OOS',value1:62.4,value2:5.2}
			]
		},
		{
			industry:'金融行业',scale:'min',
			product:[
				{name:'弹性云主机',value1:99.5,value2:1.6},
				{name:'关系数据库MySQL',value1:75.6,value2:1.2},
				{name:'对象存储OOS',value1:62.7,value2:1.7}
			]
		},
		
		{
			industry:'通用行业',scale:'max',
			product:[
				{name:'弹性云主机',value1:94.6,value2:6.2},
				{name:'关系数据库MySQL',value1:75.4,value2:1.2},
				{name:'对象存储OOS',value1:55.9,value2:2.2}
			]
		},
		{
			industry:'通用行业',scale:'zhong',
			product:[
				{name:'弹性云主机',value1:97.4,value2:2.2},
				{name:'关系数据库MySQL',value1:75.1,value2:4.1},
				{name:'对象存储OOS',value1:62.4,value2:5.2}
			]
		},
		{
			industry:'通用行业',scale:'min',
			product:[
				{name:'弹性云主机',value1:99.5,value2:1.6},
				{name:'关系数据库MySQL',value1:75.6,value2:1.2},
				{name:'对象存储OOS',value1:62.7,value2:1.7}
			]
		},
		
		
		
		{
			industry:'工业行业',scale:'max',
			product:[
				{name:'弹性云主机',value1:94.6,value2:6.2},
				{name:'关系数据库MySQL',value1:75.4,value2:1.2},
				{name:'对象存储OOS',value1:55.9,value2:2.2}
			]
		},
		{
			industry:'工业行业',scale:'zhong',
			product:[
				{name:'弹性云主机',value1:97.4,value2:2.2},
				{name:'关系数据库MySQL',value1:75.1,value2:4.1},
				{name:'对象存储OOS',value1:62.4,value2:5.2}
			]
		},
		{
			industry:'工业行业',scale:'min',
			product:[
				{name:'弹性云主机',value1:99.5,value2:1.6},
				{name:'关系数据库MySQL',value1:75.6,value2:1.2},
				{name:'对象存储OOS',value1:62.7,value2:1.7}
			]
		},
		
		
	],
}