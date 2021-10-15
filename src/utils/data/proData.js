module.exports = {
	//行业规模 =>产品数据
	proInfo: [
		// industry:行业
		// scale:规模
		// name:案例名称
		// proTopMap:对应的案例拓扑图
		// value1 用户数量占比
		// value2 上周同比
		// value3 云主机占比
		// value4 上周同比
		// value5 网络带宽占比
		// value6 上周同比
		// checked1 选择
		// checked2 扩容
		// 新配置项
		//cpu cpu1 cpu2 
		//系统盘 xtp1 xtp2
		//带宽 dk1 dk2
		//价格 jg
		//价格单位 jgunit
		//规格 gg1 gg2
		//时间 date1 date2
		//内存 nc1 nc2
		//硬盘 yp1 yp2
		//实例类型 slly1 slly2
		//存储空间 cckj1 cckj2
		//容量 rl1 rl2
		//数量 number1 number2
		//vCPUs vCPUs1 vCPUs2
		//最大收发包 maxsfb1 maxsfb2
		//防护能力 fhnl1 fhnl2
		//防护带宽 fhdk1 fhdk2
		//域名包 ymb1 ymb2
		
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'max',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'max',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'max',name: '对象存储OOS',proTopMap:'对象存储OOS',cpu1:'500',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'100',xtpunit1:'Mbps',dk1:'1M',dk2:'50M',jg:'50',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'max',name: 'CDN内容分发',proTopMap:'CDN内容分发',rl:'300',rlunit:'G',number:1,numberunit:'个',jg:'38.25',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'max',name: '物理机',proTopMap:'物理机',cpu1:'20',cpu2:'2.2',cpu3:'128',cpu4:'500000',cpuunit1:'core',cpuunit2:'GHz',cpuunit3:'GB',cpuunit4:'DDR4',cupuunit5:'个',jg:'35860',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'max',name: '云直播',proTopMap:'云直播',cpu1:'2*16',cpu2:'384',cpu3:'6*6',cpu4:'6*696',cpuunit1:'core',cpuunit2:'G',cpuunit3:'T',cpuunit4:'SATA',jg:'18.6',jgunit:'元/小时',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'zhong',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:75,value2:3.7,value3:49,value4:7.3,value5:98.88,value6:7.1},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'zhong',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:78,value2:11.4,value3:89,value4:3.3,value5:92.5,value6:4.9},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'zhong',name: '对象存储OOS',proTopMap:'对象存储OOS',cpu1:'500',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'100',xtpunit1:'Mbps',dk1:'1M',dk2:'50M',jg:'50',jgunit:'元/年',value1:80,value2:8.02,value3:81,value4:6.4,value5:95.5,value6:6.9},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'zhong',name: 'CDN内容分发',proTopMap:'CDN内容分发',rl:'300',rlunit:'G',number:1,numberunit:'个',jg:'38.25',jgunit:'元/年',value1:92,value2:12,value3:84,value4:6.0,value5:96.5,value6:7.5},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'zhong',name: '物理机',proTopMap:'物理机',cpu1:'20',cpu2:'2.2',cpu3:'128',cpu4:'500000',cpuunit1:'core',cpuunit2:'GHz',cpuunit3:'GB',cpuunit4:'DDR4',cupuunit5:'个',jg:'35860',jgunit:'元/年',value1:97,value2:8.2,value3:78,value4:4.3,value5:91.9,value6:5.7},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'zhong',name: '云直播',proTopMap:'云直播',cpu1:'2*16',cpu2:'384',cpu3:'6*6',cpu4:'6*696',cpuunit1:'core',cpuunit2:'G',cpuunit3:'T',cpuunit4:'SATA',jg:'18.6',jgunit:'元/小时',value1:98,value2:11.4,value3:87,value4:7.9,value5:92.5,value6:5.5},
		
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'min',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:93,value2:11.2,value3:82,value4:6.3,value5:11.5,value6:7.7},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'min',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:99,value2:11.2,value4:88,value4:6.9,value5:95.8,value6:7.3},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'min',name: '对象存储OOS',proTopMap:'对象存储OOS',cpu1:'500',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'100',xtpunit1:'Mbps',dk1:'1M',dk2:'50M',jg:'50',jgunit:'元/年',value1:90,value2:8.2,value3:28,value4:5.4,value5:97.2,value6:6.9},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'min',name: 'CDN内容分发',proTopMap:'CDN内容分发',rl:'300',rlunit:'G',number:1,numberunit:'个',jg:'38.25',jgunit:'元/年',value1:97,value2:11.2,value3:48,value4:5.9,value5:99.5,value6:7.1},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'min',name: '物理机',proTopMap:'物理机',cpu1:'20',cpu2:'2.2',cpu3:'128',cpu4:'500000',cpuunit1:'core',cpuunit2:'GHz',cpuunit3:'GB',cpuunit4:'DDR4',cupuunit5:'个',jg:'35860',jgunit:'元/年',value1:99,value2:9.1,value3:37,value4:4.9,value5:96.8,value6:8.4},
		{checked1:false,checked2:false,checked3:false,industry:'教育行业',scale:'min',name: '云直播',proTopMap:'云直播',cpu1:'2*16',cpu2:'384',cpu3:'6*6',cpu4:'6*696',cpuunit1:'core',cpuunit2:'G',cpuunit3:'T',cpuunit4:'SATA',jg:'18.6',jgunit:'元/小时',value1:94,value2:15.7,value3:80,value4:3.2,value5:90.9,value6:4.9},
		
		
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'max',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:97,value2:15.2,value3:88,value4:7.9,value5:93.5,value6:7.9},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'max',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:90,value2:16.2,value3:87,value4:5.7,value5:92.8,value6:7.9},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'max',name: '对象存储OOS',proTopMap:'对象存储OOS',cpu1:'500',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'100',xtpunit1:'Mbps',dk1:'1M',dk2:'50M',jg:'50',jgunit:'元/年',value1:91,value2:18.2,value3:84,value4:6.1,value5:94.2,value6:7.5},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'max',name: '专属云',proTopMap:'专属云',rl:'36',rlunit:'核',number:321,numberunit:'GB',jg:'9996',jgunit:'元/月',value1:98,value2:11.2,value3:80,value4:8.0,value5:97.1,value6:4.7},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'max',name: 'CDN内容分发',proTopMap:'CDN内容分发',rl:'300',rlunit:'G',number:1,numberunit:'个',jg:'38.25',jgunit:'元/年',value1:97,value2:10.8,value3:83,value4:5.5,value5:99.3,value6:6.4},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'max',name: '弹性负载均衡ELB',proTopMap:'弹性负载均衡ELB',cpu1:'2',cpu2:'4',cpu3:'80',cpuunit1:'核',cpuunit2:'G',jg:'29.9',jgunit:'元/月',value1:98,value2:11.7,value3:89,value4:5.4,value5:96.9,value6:7.7},
		
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'zhong',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:99,value2:10.2,value3:81,value4:5.7,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'zhong',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'zhong',name: '对象存储OOS',proTopMap:'对象存储OOS',cpu1:'500',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'100',xtpunit1:'Mbps',dk1:'1M',dk2:'50M',jg:'50',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:6.0,value5:93.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'zhong',name: '专属云',proTopMap:'专属云',rl:'36',rlunit:'核',number:321,numberunit:'GB',jg:'9996',jgunit:'元/月',value1:99,value2:10.2,value3:89,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'zhong',name: 'CDN内容分发',proTopMap:'CDN内容分发',rl:'300',rlunit:'G',number:1,numberunit:'个',jg:'38.25',jgunit:'元/年',value1:96,value2:10.1,value3:88,value4:6.9,value5:94.4,value6:5.5},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'zhong',name: '弹性负载均衡ELB',proTopMap:'弹性负载均衡ELB',cpu1:'2',cpu2:'4',cpu3:'80',cpuunit1:'核',cpuunit2:'G',jg:'29.9',jgunit:'元/月',value1:91,value2:12.2,value3:88,value4:5.9,value5:92.5,value6:7.5},
		
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'min',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:93,value2:11.2,value3:98,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'min',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'min',name: '对象存储OOS',proTopMap:'对象存储OOS',cpu1:'500',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'100',xtpunit1:'Mbps',dk1:'1M',dk2:'50M',jg:'50',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'min',name: '专属云',proTopMap:'专属云',rl:'36',rlunit:'核',number:321,numberunit:'GB',jg:'9996',jgunit:'元/月',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'min',name: 'CDN内容分发',proTopMap:'CDN内容分发',rl:'300',rlunit:'G',number:1,numberunit:'个',jg:'38.25',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'政府机关',scale:'min',name: '弹性负载均衡ELB',proTopMap:'弹性负载均衡ELB',cpu1:'2',cpu2:'4',cpu3:'80',cpuunit1:'核',cpuunit2:'G',jg:'29.9',jgunit:'元/月',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		
		
		
		
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'max',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'max',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'max',name: '对象存储OOS',proTopMap:'对象存储OOS',cpu1:'500',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'100',xtpunit1:'Mbps',dk1:'1M',dk2:'50M',jg:'50',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'max',name: 'CDN内容分发',proTopMap:'CDN内容分发',rl:'300',rlunit:'G',number:1,numberunit:'个',jg:'38.25',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'max',name: '物理机',proTopMap:'物理机',cpu1:'20',cpu2:'2.2',cpu3:'128',cpu4:'500000',cpuunit1:'core',cpuunit2:'GHz',cpuunit3:'GB',cpuunit4:'DDR4',cupuunit5:'个',jg:'35860',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'max',name: '云间高速',proTopMap:'云间高速',cpu1:'50,100',cpuunit1:'Mb',dk1:'200M',jg:'145',jgunit:'元/M/月',value1:99,value2:10.6,value3:78,value4:5.9,value5:93.5,value6:7.5},
		
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'zhong',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:99,value2:12.2,value3:80,value4:5.7,value5:91.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'zhong',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:7.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'zhong',name: '对象存储OOS',proTopMap:'对象存储OOS',cpu1:'500',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'100',xtpunit1:'Mbps',dk1:'1M',dk2:'50M',jg:'50',jgunit:'元/年',value1:99,value2:10.2,value3:8,value4:5.9,value5:94.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'zhong',name: 'CDN内容分发',proTopMap:'CDN内容分发',rl:'300',rlunit:'G',number:1,numberunit:'个',jg:'38.25',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:56.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'zhong',name: '物理机',proTopMap:'物理机',cpu1:'20',cpu2:'2.2',cpu3:'128',cpu4:'500000',cpuunit1:'core',cpuunit2:'GHz',cpuunit3:'GB',cpuunit4:'DDR4',cupuunit5:'个',jg:'35860',jgunit:'元/年',value1:94,value2:10.5,value3:78,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'zhong',name: '云间高速',proTopMap:'云间高速',cpu1:'50,100',cpuunit1:'Mb',dk1:'200M',jg:'145',jgunit:'元/M/月',value1:99,value2:13.2,value3:84,value4:5.9,value5:97.5,value6:6.5},
		
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'min',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:92,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'min',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:99,value2:15.7,value3:88,value4:6.1,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'min',name: '对象存储OOS',proTopMap:'对象存储OOS',cpu1:'500',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'100',xtpunit1:'Mbps',dk1:'1M',dk2:'50M',jg:'50',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:9.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'min',name: 'CDN内容分发',proTopMap:'CDN内容分发',rl:'300',rlunit:'G',number:1,numberunit:'个',jg:'38.25',jgunit:'元/年',value1:99,value2:10.2,value3:85,value4:5.9,value5:92.6,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'min',name: '物理机',proTopMap:'物理机',cpu1:'20',cpu2:'2.2',cpu3:'128',cpu4:'500000',cpuunit1:'core',cpuunit2:'GHz',cpuunit3:'GB',cpuunit4:'DDR4',cupuunit5:'个',jg:'35860',jgunit:'元/年',value1:99,value2:10.2,value3:80,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'金融行业',scale:'min',name: '云间高速',proTopMap:'云间高速',cpu1:'50,100',cpuunit1:'Mb',dk1:'200M',jg:'145',jgunit:'元/M/月',value1:99,value2:10.8,value3:88,value4:5.9,value5:97.5,value6:6.5},
		



		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'max',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:98,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'max',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'max',name: '对象存储OOS',proTopMap:'对象存储OOS',cpu1:'500',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'100',xtpunit1:'Mbps',dk1:'1M',dk2:'50M',jg:'50',jgunit:'元/年',value1:96,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'max',name: 'GPU云主机',proTopMap:'GPU云主机',cpu1:'2',cpu2:'32',cpu3:'500000',cpuunit1:'个',cpuunit2:'iB',jg:'35860',jgunit:'元/年',value1:93,value2:10.2,value3:88,value4:5.5,value5:98.5,value6:3.5},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'max',name: '弹性负载均衡ELB',proTopMap:'弹性负载均衡ELB',cpu1:'2',cpu2:'4',cpu3:'80',cpuunit1:'核',cpuunit2:'G',jg:'29.9',jgunit:'元/月',value1:94,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:4.5},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'max',name: '云直播',proTopMap:'云直播',cpu1:'2*16',cpu2:'384',cpu3:'6*6',cpu4:'6*696',cpuunit1:'core',cpuunit2:'G',cpuunit3:'T',cpuunit4:'SATA',jg:'18.6',jgunit:'元/小时',value1:99,value2:10.2,value3:88,value4:5.9,value5:94.5,value6:6.5},
		
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'zhong',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.1,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'zhong',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:96.5,value6:8.5},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'zhong',name: '对象存储OOS',proTopMap:'对象存储OOS',cpu1:'500',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'100',xtpunit1:'Mbps',dk1:'1M',dk2:'50M',jg:'50',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'zhong',name: 'GPU云主机',proTopMap:'GPU云主机',cpu1:'2',cpu2:'32',cpu3:'500000',cpuunit1:'个',cpuunit2:'iB',jg:'35860',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'zhong',name: '弹性负载均衡ELB',proTopMap:'弹性负载均衡ELB',cpu1:'2',cpu2:'4',cpu3:'80',cpuunit1:'核',cpuunit2:'G',jg:'29.9',jgunit:'元/月',value1:99,value2:10.2,value3:87,value4:5.9,value5:97.5,value6:7.3},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'zhong',name: '云直播',proTopMap:'云直播',cpu1:'2*16',cpu2:'384',cpu3:'6*6',cpu4:'6*696',cpuunit1:'core',cpuunit2:'G',cpuunit3:'T',cpuunit4:'SATA',jg:'18.6',jgunit:'元/小时',value1:99,value2:10.2,value3:88,value4:5.9,value5:93.8,value6:6.5},
		
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'min',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:97,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'min',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'min',name: '对象存储OOS',proTopMap:'对象存储OOS',cpu1:'500',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'100',xtpunit1:'Mbps',dk1:'1M',dk2:'50M',jg:'50',jgunit:'元/年',value1:93,value2:12.4,value3:88,value4:7.7,value5:93.5,value6:5.9},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'min',name: 'GPU云主机',proTopMap:'GPU云主机',cpu1:'2',cpu2:'32',cpu3:'500000',cpuunit1:'个',cpuunit2:'iB',jg:'35860',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:5.6},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'min',name: '弹性负载均衡ELB',proTopMap:'弹性负载均衡ELB',cpu1:'2',cpu2:'4',cpu3:'80',cpuunit1:'核',cpuunit2:'G',jg:'29.9',jgunit:'元/月',value1:99,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:5.5},
		{checked1:false,checked2:false,checked3:false,industry:'通用行业',scale:'min',name: '云直播',proTopMap:'云直播',cpu1:'2*16',cpu2:'384',cpu3:'6*6',cpu4:'6*696',cpuunit1:'core',cpuunit2:'G',cpuunit3:'T',cpuunit4:'SATA',jg:'18.6',jgunit:'元/小时',value1:97,value2:10.2,value3:88,value4:5.9,value5:99.5,value6:6.5},
		



		
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'max',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:97,value2:14.2,value3:81,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'max',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:99,value2:10.2,value3:88,value4:5.9,value5:92.4,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'max',name: 'DDoS高防IP',proTopMap:'DDoS高防IP',cpu1:'100',cpuunit1:'Gbps',jg:'139400',jgunit:'元/年',value1:91,value2:10.2,value3:85,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'max',name: 'CDN内容分发',proTopMap:'CDN内容分发',rl:'300',rlunit:'G',number:1,numberunit:'个',jg:'38.25',jgunit:'元/年',value1:94,value2:10.2,value3:85,value4:6.6,value5:97.5,value6:3.7},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'max',name: 'web应用防火墙',proTopMap:'web应用防火墙',cpu1:'1',cpuunit1:'个',dk1:'200M',jg:'35577',jgunit:'元/年',value1:99,value2:10.2,value3:77,value4:5.9,value5:98.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'max',name: '弹性负载均衡ELB',proTopMap:'弹性负载均衡ELB',cpu1:'2',cpu2:'4',cpu3:'80',cpuunit1:'核',cpuunit2:'G',jg:'29.9',jgunit:'元/月',value1:98,value2:10.2,value3:88,value4:5.5,value5:95.5,value6:9.1},
		
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'zhong',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:90,value2:10.2,value3:88,value4:5.9,value5:97.5,value6:5.5},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'zhong',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:99,value2:10.2,value3:81,value4:5.8,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'zhong',name: 'DDoS高防IP',proTopMap:'DDoS高防IP',cpu1:'100',cpuunit1:'Gbps',jg:'139400',jgunit:'元/年',value1:91,value2:10.2,value3:84,value4:5.9,value5:97.5,value6:3.0},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'zhong',name: 'CDN内容分发',proTopMap:'CDN内容分发',rl:'300',rlunit:'G',number:1,numberunit:'个',jg:'38.25',jgunit:'元/年',value1:92,value2:10.2,value3:88,value4:4.4,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'zhong',name: 'web应用防火墙',proTopMap:'web应用防火墙',cpu1:'1',cpuunit1:'个',dk1:'200M',jg:'35577',jgunit:'元/年',value1:97,value2:10.2,value3:84,value4:5.9,value5:90.9,value6:5.4},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'zhong',name: '弹性负载均衡ELB',proTopMap:'弹性负载均衡ELB',cpu1:'2',cpu2:'4',cpu3:'80',cpuunit1:'核',cpuunit2:'G',jg:'29.9',jgunit:'元/月',value1:96,value2:10.2,value3:88,value4:7.3,value5:97.5,value6:6.5},
		
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'min',name: '弹性云主机',proTopMap:'弹性云主机',cpu1:'2',cpu2:'4',cpuunit1:'核',cpuunit2:'G',xtp1:'40',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'247',jgunit:'元/年',value1:92,value2:10.2,value3:88,value4:6.9,value5:92.5,value6:7.7},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'min',name: '关系数据库MySQL',proTopMap:'关系数据库MySQL',cpu1:'8',cpu2:'16',cpuunit1:'核',cpuunit2:'G',xtp1:'300',xtpunit1:'GB',dk1:'1M',dk2:'50M',jg:'13068',jgunit:'元/年',value1:97,value2:10.2,value3:81,value4:5.9,value5:97.5,value6:8.7},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'min',name: 'DDoS高防IP',proTopMap:'DDoS高防IP',cpu1:'100',cpuunit1:'Gbps',jg:'139400',jgunit:'元/年',value1:94,value2:13.7,value3:78,value4:5.9,value5:97.5,value6:4.3},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'min',name: 'CDN内容分发',proTopMap:'CDN内容分发',rl:'300',rlunit:'G',number:1,numberunit:'个',jg:'38.25',jgunit:'元/年',value1:99,value2:15.5,value3:80,value4:5.9,value5:97.5,value6:6.5},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'min',name: 'web应用防火墙',proTopMap:'web应用防火墙',cpu1:'1',cpuunit1:'个',dk1:'200M',jg:'35577',jgunit:'元/年',value1:89,value2:9.9,value3:86,value4:6.5,value5:97.5,value6:4.8},
		{checked1:false,checked2:false,checked3:false,industry:'工业行业',scale:'min',name: '弹性负载均衡ELB',proTopMap:'弹性负载均衡ELB',cpu1:'2',cpu2:'4',cpu3:'80',cpuunit1:'核',cpuunit2:'G',jg:'29.9',jgunit:'元/月',value1:94,value2:10.2,value3:84,value4:5.9,value5:97.5,value6:6.7},
		
		
		
	]
}