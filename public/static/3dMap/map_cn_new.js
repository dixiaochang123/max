import * as THREE from './jsm/three.module.js';
	import {
		OrbitControls
	} from './jsm/OrbitControls.js';
	import {
		FBXLoader
	} from './jsm/FBXLoader.js';
	import {
		GLTFLoader
	} from './jsm/GLTFLoader.js';
	import {
		TWEEN
	} from './jsm/tween.module.min.js';
	import {
		Sky
	} from './jsm/Sky.js';
	import {
		Reflector
	} from './jsm/Reflector.js';
	
	import { EffectComposer } from './jsm/postprocessing/EffectComposer.js';
	import { RenderPass } from './jsm/postprocessing/RenderPass.js';
	import { UnrealBloomPass } from './jsm/postprocessing/UnrealBloomPass.js';

	let camera, scene,bloomScene,composer, renderer, light;
	let controls,diverPoint,cubeTexture
	let Bplace = [],Bplace1 = []
	let loadModelFlag = false
	let timeJg = 0
	let timeJg1 = 0
	let isMapCompleteDo = false
	
	var _Shaders = {
		//发光
		GlowVShader: [
			"varying vec3   vVertexWorldPosition;",
			"varying vec3  vVertexNormal;",
			"void main(){",
			"vVertexNormal = normalize(normalMatrix * normal);//将法线转换到视图坐标系中",
			"vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;//将顶点转换到世界坐标系中",
			// set gl_Position
			"gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
			"}"
		].join("\n"),
		//渐变--半径物体
		GradualChRVShader: [
			"uniform vec3 startPos;//起始位置",
			"uniform float size;//渐变长度",
			"uniform float opacity;",
			"varying float mOpacity;",
			"void main(){",
			"float distance = position.y - startPos.y;",
			"mOpacity = opacity - opacity / size * distance;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
			"}"
		].join("\n"),
		//渐变--点--动画
		pointVShader_move: [
			"varying vec3 mPosition;",
			"varying float vOpacity;",
			"varying float vType;",
			"uniform float u_time;//周期0-1",
			"uniform float u_move;",
			"uniform float size;",
			"attribute float noise;",
			"attribute float type;",
			"void main(){",
			"   vType = type;",
			"   mPosition = position;",
			"   float t = noise + u_time;",
			"   t = t >1.0?(t-1.0):t;",
			"   vec3 mP = vec3(position.x,position.y+t*u_move,position.z);",
			"   vOpacity = sin(3.1415926*t)*1.2;",
			"   vOpacity = vOpacity>1.0?1.0:vOpacity;",
			"   gl_PointSize = size;",
			"   gl_Position = projectionMatrix * modelViewMatrix * vec4(mP, 1.0);",
			"}"
		].join("\n"),
		//渐变--点--动画
		pointFShader_move: [
			"varying vec3 mPosition;",
			"varying float vOpacity;",
			"varying float vType;",
			"uniform sampler2D map1;",
			"uniform sampler2D map2;",
			"void main(){",
			"   gl_FragColor = vType>0.5? vec4(1.0,1.0,1.0,vOpacity)*texture2D( map1, gl_PointCoord ): vec4(1.0,1.0,1.0,vOpacity)*texture2D( map2, gl_PointCoord );",
			"}"
		].join("\n"),
		//渐变--平面--动画
		GradualChPVShader_move: [
			"varying vec3 mPosition;",
			"varying float vOpacity;",
			"uniform float u_time;//周期0-1",
			"uniform float u_move;",
			"uniform float u_noise;",
			"void main(){",
			"   mPosition = position;",
			"   float t = u_noise + u_time;",
			"   t = t >1.0?(t-1.0):t;",
			"   vec3 mP = vec3(position.x,position.y+t*u_move,position.z);",
			"   vOpacity = sin(3.1415926*t)*1.2;",
			"   vOpacity = vOpacity>1.0?1.0:vOpacity;",
			"   gl_Position = projectionMatrix * modelViewMatrix * vec4(mP, 1.0);",
			"}"
		].join("\n"),
		//渐变--平面
		GradualChPVShader: [
			"varying vec3 mPosition;",
			"void main(){",
			"mPosition = position;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
			"}"
		].join("\n"),
		//点粒子
		pointVShader: [
			"attribute float size;",
			"attribute float opacity;",
			"varying float topacity;",
			"void main(){",
			"topacity = opacity;",
			"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
			"gl_PointSize = size * ( 300.0 / -mvPosition.z );",
			"gl_Position = projectionMatrix * mvPosition;",
			"}"
		].join("\n"),
	
		//内发光
		GlowInFShader: [
			"uniform vec3 glowColor;",
			"uniform float coeficient;",
			"uniform float power;",
			"varying vec3 vVertexNormal;",
			"varying vec3 vVertexWorldPosition;",
			"void main(){",
			"vec3 worldCameraToVertex= vVertexWorldPosition - cameraPosition;//世界坐标系中从相机位置到顶点位置的距离",
			"vec3 viewCameraToVertex = (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;//视图坐标系中从相机位置到顶点位置的距离",
			"viewCameraToVertex = normalize(viewCameraToVertex);//规一化",
			"float intensity = pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);",
			"gl_FragColor = vec4(glowColor, ((intensity <= 0.0)?1.0:intensity));",
			"}"
		].join("\n"),
		//外发光
		GlowOutFShader: [
			"uniform vec3   glowColor;",
			"uniform float coeficient;",
			"uniform float power;",
			"varying vec3  vVertexNormal;",
			"varying vec3  vVertexWorldPosition;",
	
			"void main(){",
			"vec3 worldVertexToCamera= cameraPosition - vVertexWorldPosition; //世界坐标系中顶点位置到相机位置到的距离",
			"vec3 viewCameraToVertex = (viewMatrix * vec4(worldVertexToCamera, 0.0)).xyz;//视图坐标系中",
			"viewCameraToVertex = normalize(viewCameraToVertex);//规一化",
			"float intensity = pow(coeficient + dot(vVertexNormal, viewCameraToVertex),power);",
			//if(intensity > 0.45){ intensity = 1.0;}
			"gl_FragColor = vec4(glowColor, ((intensity>0.45)?1.0:intensity));",
			"}"
		].join("\n"),
		//渐变--半径物体
		GradualChRFShader: [
			"uniform vec3 color;",
			"varying float mOpacity;",
			"void main(){",
			"gl_FragColor = vec4(color, mOpacity);",
			"}"
		].join("\n"),
		//渐变--平面--圆
		GradualChPFShader: [
			"uniform vec3 color;",
			"uniform vec3 center;//中心位置",
			"uniform float size;//渐变长度",
			"uniform float opacity;",
			"varying vec3 mPosition;",
			"void main(){",
			"float dis = distance(mPosition,center);",
			"float mOpacity = dis>size?0.0:opacity * (1.0- dis/size );",
			"gl_FragColor = vec4(color, mOpacity);",
			"}"
		].join("\n"),
		//渐变--平面1--圆环
		GradualChFPFShader: [
			"uniform vec3 color;",
			"uniform vec3 center;//中心位置",
			"uniform float size;//渐变长度",
			"uniform float iPower;",
			"uniform float oPower;",
			"uniform float opacity;",
	
			"varying vec3 mPosition;",
			"void main(){",
			"float dis = distance(mPosition,center);",
	
			// "float mOpacity = opacity;",
			// "if(dis>size){//外圈",
			// "mOpacity *= (dis-size)>size?0.0:1.0 - (dis-size)/size;",
			// "mOpacity = pow(mOpacity,oPower);",
			// "}",
			// "else if(dis<size){//内圈" ,
			// "mOpacity *= dis/size;" ,
			// "mOpacity = pow(mOpacity,iPower);",
			// "}" ,
	
			"float mOpacity = dis>size?pow(1.0*(dis-size)>size?0.0:(1.0 - (dis-size)/size),oPower):",
			"dis<size?pow(1.0*(dis/size),iPower):1.0;",
			"vec3 c;",
			"float cFlag = 4.0*pow(mOpacity,2.0);",
			"c = vec3(color[0]*cFlag,color[1]*cFlag,color[2]*cFlag);",
	
	
			// "if((mOpacity*opacity)<=0.0){",
			// "discard;",
			// // "gl_FragColor = vec4(1.0,0.0,0.0,1.0);",
			// "}else{",
			// "gl_FragColor = vec4(color,mOpacity*opacity);" ,
			// "}",
	
			"gl_FragColor = vec4(c,pow(mOpacity,2.0)*opacity);",
			"}"
		].join("\n"),
		//渐变--平面--平面
		GradualChPPFShader: [
			"uniform vec3 color;",
			"uniform vec3 center;//中心位置",
			"uniform float size;//渐变长度",
			"uniform float dividing;//分割长度",
			"uniform float sizeY;//渐变长度",
			"uniform float power;",
			"uniform float opacity;",
			"varying float vOpacity;",
			"varying vec3 mPosition;",
			"void main(){",
			"float disX = mPosition.x - center.x;",
			"float mOpacity = disX>dividing?pow((1.0 - (disX-dividing)/size),power):",
			"disX<dividing?pow(1.0*(disX/dividing),power):1.0;",
	
			"float disY = abs(mPosition.y - center.y);",
			"float dis = distance(mPosition,center);",
			"float ins = dis>=sizeY?0.0:1.0-dis/sizeY;",
	
			"gl_FragColor = vec4(color,mOpacity*opacity*ins*vOpacity);",
			"}"
		].join("\n"),
		pointFShader: [
			"uniform sampler2D map;",
			"uniform vec3 color;",
			"varying float topacity;",
			"void main(){",
			"vec4 tColor = texture2D( map, gl_PointCoord );",
			"gl_FragColor = vec4( color * tColor.rgb, tColor.a*topacity )*1.5;",
			"}"
		].join("\n"),
		
		//自发光
		vertexShaderSun: [
			"uniform vec3 viewVector;",
			"varying float intensity;",
			"void main(){",
			"gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );",
			"vec3 actual_normal = vec3(modelMatrix * vec4(normal, 0.0));",
			"intensity = pow( dot(normalize(viewVector), actual_normal), 6.0 );",
			"}"
		].join("\n"),
		fragmentShaderSun: [
			"uniform vec3 colors;",
			"varying float intensity;",
			"void main(){",
			"vec3 glow = colors * intensity;",
			"gl_FragColor = vec4( glow, 1 );",
			"}"
		].join("\n"),
	
	};
	
	
	

	init();
	animate();
	
	

	function init() {

		renderer = new THREE.WebGLRenderer({
			antialias: true,
			canvas: document.querySelector("#cc"),
			alpha:true,
		});
		
		 renderer.setClearColor(1,1,1,0);
		 renderer.setClearAlpha(0.0)
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		//renderer.shadowMap.enabled = true; //渲染器接收阴影渲染
		renderer.gammaInput = true;
		renderer.gammaOutput = true

		scene = new THREE.Scene();
		//scene.background = 0x000000;
		
		bloomScene = new THREE.Scene();
		//bloomScene.background = 0x000000;
		

		camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 200000);
		camera.position.set(202.85441858888763,4778.330941008487,2304.9005408173025); //相机位置
		controls = new OrbitControls(camera, document.querySelector("#cc")); //添加控制器
		controls.enabled = false
		
		var renderScene = new RenderPass( bloomScene, camera );
		var params = {
		    exposure: 2.0,
		    bloomStrength: 1.5,
		    bloomThreshold: 0,
		    bloomRadius: 0.0
		};
		var bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
		bloomPass.renderToScreen = true;
		bloomPass.threshold = params.bloomThreshold;
		bloomPass.strength = params.bloomStrength;
		bloomPass.radius = params.bloomRadius;
		// renderer.toneMappingExposure = Math.pow( params.exposure, 4.0 );
		//composer
		composer = new EffectComposer(renderer);
		composer.setSize( window.innerWidth, window.innerHeight );
		composer.addPass( renderScene );
		composer.addPass( bloomPass );

		let x = -3000,
			y = 3000,
			z = -2000
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				let SpotLight = new THREE.SpotLight(0xffffff, 0.2);
				SpotLight.position.set(x, y, z);
				scene.add(SpotLight);
				//var pointLightHelper = new THREE.PointLightHelper( SpotLight, 10 );
				//scene.add( pointLightHelper );
				z += 3000
			}
			z = -3000
			x += 3000
		}

		rayBreathing()
		
		
		//加载散点
		//创建发散点
		var sPoints ={data:[],colors:[],heights:[],type:[],noise:[]};
		
		var minX = -4149;var maxX = 3544;
		var minZ = 805;var maxZ = -2171;
		
		for(var j=0;j<40;j++){
		
		    var tx = Math.random()*(maxX-minX+1)+minX;
		    var ty = 200;
		    var tz = Math.random()*(maxZ-minZ+1)+minZ;
		    // point.point//radius
		    sPoints.data.push(tx,ty,tz);
		    var one = Math.random();
		    sPoints.colors.push(one>0.5?0x175ce5:0xffab21);
		    sPoints.type.push(one);
		    sPoints.noise.push(Math.random());
		    sPoints.heights.push((Math.random()*(600-300+1)+300));
		}
		
		diverPoint = new THREE.Object3D();
		diverPoint.name = 'diverPoint';
		//createPoint(sPoints,600/*移动距离*/);
		
		
		var cubeTextureLoader = new THREE.CubeTextureLoader();
		cubeTextureLoader.setPath('./cube/Park3Med/');
		cubeTexture = cubeTextureLoader.load([
			'px.jpg', 'nx.jpg',
			'py.jpg', 'ny.jpg',
			'pz.jpg', 'nz.jpg',
		]);
		
		// setTimeout(function(){
		// 	scene.add( diverPoint );
		// }, 14000);
		
		// //加载模型
		// setTimeout(function(){ 
		// 	initModel() 
		// }, 13000);

		scene.add( diverPoint );
		
		
		let type = getQueryVariable("type")
		
		initModel(type) 
		
		
		
		console.log(scene)
		
		//加载服务器模型
		
		
		
		//服务器特效
		
		window.addEventListener('resize', onWindowResize, false);
		
	}
	
	
	//发散点线
	function createPoint(parm,len){
	    //添加点的粒子
	    var geo = new THREE.BufferGeometry();
	    geo.addAttribute('position', new THREE.Float32BufferAttribute(parm.data, 3));
	    geo.addAttribute('type',new THREE.Float32BufferAttribute(parm.type, 1));
	    geo.addAttribute('noise',new THREE.Float32BufferAttribute(parm.noise, 1));
	
	    var	point = new THREE.Points( geo, new THREE.ShaderMaterial({
	        uniforms: {
	            size: { value: 10 },//发散长度x
	            u_time: { value: 0 },
	            u_move: { value: len },
	            map1: { value: creatCircleTexture('0,0,255') },
	            map2: { value: creatCircleTexture('255,171,33') }
	        },
	        transparent: true,
	        side:THREE.DoubleSide,
	        blending: THREE.AdditiveBlending,
	        depthWrite:false,
	        vertexShader: _Shaders.pointVShader_move,
	        fragmentShader: _Shaders.pointFShader_move
	    }) );
		
	    diverPoint.add( point );
	    point._moveLine = true;
	
		
	    for(var i=0;i<parm.data.length;i+=3){
	        var color = new THREE.Color(parm.colors[i/3]);
	
	        var h = parm.heights[i/3];
	        var w = 40,tw = w/4;
	        var tgeo = new THREE.PlaneBufferGeometry( w, h )
	        var linePlane = new THREE.Mesh( tgeo, new THREE.ShaderMaterial({
	            uniforms: {
	                color: { value:  color },
	                center: { value: new THREE.Vector3(0,h/2,0) },
	                opacity:{ value: 1.0 },
	                power: { value: 4.0 },//内圈
	                dividing: { value: tw },//分割距离
	                size: { value: tw },//发散长度x
	                u_time: { value: 0 },
	                u_move: { value: len },
	                u_noise:{value: parm.noise[i/3]},
	                sizeY: { value: h }//发散长度y
	            },
	            transparent: true,
	            side:THREE.DoubleSide,
	            depthWrite:false,
	            blending: THREE.AdditiveBlending,
	            vertexShader: _Shaders.GradualChPVShader_move,
	            fragmentShader: _Shaders.GradualChPPFShader
	        }) );
			
			
	        linePlane.position.set(parm.data[i]-tw,parm.data[i+1]-h/2,parm.data[i+2]);
	        linePlane._moveLine = true;
	        diverPoint.add(linePlane);
	        //白色
	        var rlinePlane = linePlane.clone();
	        rlinePlane.material = linePlane.material.clone();
	        rlinePlane.material.uniforms.color.value = new THREE.Color(0xffffff);
	        rlinePlane.material.uniforms.power.value = 16.0;
	        rlinePlane.material.uniforms.sizeY.value = h*0.5;
	        rlinePlane._moveLine = true;
	        diverPoint.add(rlinePlane);
	    }
		
		console.log(diverPoint)
	}
	
	
	
	//生成连线 111111
	function connection(adress_from,adress_to,color,isContinued,cuxi){
		
		let obj_world_from = returnWorldPosByName(adress_from)
		let obj_world_to = returnWorldPosByName(adress_to)
		if(!isEmpty(obj_world_from)&&!isEmpty(obj_world_to)){
			obj_world_from.y = 630
			obj_world_to.y = 630
			
			let obj_center = new THREE.Vector3()
			// obj_center.x = (obj_world_from.x - obj_world_to.x)/2
			// obj_center.y = 430
			// obj_center.z = (obj_world_from.z - obj_world_to.z)/2
			var newpip = [
			    {
			        data: [
						obj_world_from,
						//obj_center,
						obj_world_to,
			        ],
					seg: 180,
					color:color
			    }
			];
			
			for(var tpip of newpip){
			    dopip(tpip,adress_from,adress_to,cuxi);
				createTt(adress_to)
				
			}
		}
		
		
		
		//initJf(obj_world_to)
		
	}
	
	//创建贴图
	let ttUrl = ''
	let ttScale = 220
	let spriteMaterial_yun = new THREE.SpriteMaterial( { map: createMap(`img/yun.png`, 1), color: 0xffffff ,transparent:true } );
	let spriteMaterial_serve = new THREE.SpriteMaterial( { map: createMap('img/server.png', 1), color: 0xffffff ,transparent:true } );
	
	function createTt(adress_to){
		let obj_world_to = returnWorldPosByName(adress_to)
		if(isEmpty(obj_world_to)){
			return false
		}
		
		let titlePlane 
		let modelName = '4_'+adress_to
		
		if(scene.getObjectByName(modelName)){
			return false
		}
		
		//let spriteMaterial_yun = new THREE.SpriteMaterial( { map: createMap(`img/sheng/${adress_to}.png`, 1), color: 0xffffff ,transparent:true } );
		
		if(adress_to=='guiyang_' || adress_to=='huhehaote_'){
			ttScale = 250
			titlePlane = new THREE.Sprite( spriteMaterial_yun );
		}else if(adress_to=='beijing_' || adress_to=='shanghai_' || adress_to=='chengdu_' || adress_to=='guangzhou_'){
			ttScale = 180
			titlePlane = new THREE.Sprite( spriteMaterial_yun );
		}else{
			ttScale = 140
			titlePlane = new THREE.Sprite( spriteMaterial_serve );
		}
		
		
		titlePlane.name = modelName
		titlePlane.scale.set(ttScale,ttScale,ttScale)
		titlePlane.position.set(obj_world_to.x, obj_world_to.y+250, obj_world_to.z)
		Bplace1.push(titlePlane)
		scene.add( titlePlane );
		
		
		let spriteMaterial_txt = new THREE.SpriteMaterial( { map: createTexture_txt(arr_txt1[adress_to]), color: 0xffffff ,transparent:true } );
		let titlePlane_txt = new THREE.Sprite( spriteMaterial_txt );
		
		titlePlane_txt.name = '5_'+adress_to
		
		titlePlane_txt.scale.set(300,300,300)
		
		if(adress_to=='huhehaote_'){
			titlePlane_txt.position.set(obj_world_to.x-150, obj_world_to.y+420, obj_world_to.z)
		}else if(adress_to=='lasa_'){
			titlePlane_txt.position.set(obj_world_to.x+70, obj_world_to.y+420, obj_world_to.z)
		}else if(adress_to=='guangzhou_'){
			titlePlane_txt.position.set(obj_world_to.x-60, obj_world_to.y+420, obj_world_to.z)
		}else if(adress_to=='shanghai_'){
			titlePlane_txt.position.set(obj_world_to.x-80, obj_world_to.y+480, obj_world_to.z)
		}else if(adress_to=='lanzhou_'){
			titlePlane_txt.position.set(obj_world_to.x+80, obj_world_to.y+420, obj_world_to.z)
		}else{
			titlePlane_txt.position.set(obj_world_to.x-20, obj_world_to.y+420, obj_world_to.z)
		}
		
		
		scene.add( titlePlane_txt );
		
	}
	
	
	function createTexture_txt(adress_to) {
		var texureCanvas
		
		var tips = document.createElement('canvas');
		tips.width = 128;
		tips.height = 128;
		var tipsTexture = tips.getContext('2d');
		tipsTexture.font = '25px Microsoft YaHei';
		tipsTexture.fillStyle = "#fff";
		tipsTexture.fillText(adress_to, 0, 85);
		
		texureCanvas = new THREE.CanvasTexture(tips)
		return texureCanvas
	}
	
	
	//获取某物体的世界坐标
	function returnWorldPosByName(name) {
		let obj = scene.getObjectByName(name);
		let obj_world_pos
		if(!isEmpty(obj)){
			obj_world_pos = obj.getWorldPosition(new THREE.Vector3())
		}
		return obj_world_pos;
	}
	
	function dopip(parm,adress_from,obj_world_to,cuxi){
		//1.点之间的 线
		var pipeSpline = new THREE.CatmullRomCurve3(parm.data);
		var tubeGeometry = new THREE.TubeBufferGeometry( pipeSpline, parm.seg, 2.5, 40, false );
		var mesh = new THREE.Mesh( tubeGeometry, new THREE.MeshBasicMaterial({
		    color:0x305596,
		    opacity:0,//0.8
		    transparent: true,
		}) );
		mesh.visible = false
		mesh.name = '1_'+adress_from+obj_world_to
		mesh.op = 0.8/clin_count;
		scene.add( mesh );
		
		
		tubeGeometry = new THREE.TubeBufferGeometry( pipeSpline, parm.seg, 2.5, 3, false );
		var tmesh = new THREE.Mesh( tubeGeometry, new THREE.MeshBasicMaterial({
		    color: parm.color,
		    opacity:0,
		    transparent: true
		}) );
		tmesh.name = '2_'+adress_from+obj_world_to
		tmesh.uu = mesh.uuid
		bloomScene.add( tmesh );
		
		tmesh.visible = false;
		tmesh.isPIP = mesh.isPIP = true;
		
		
		var count = Math.ceil((tubeGeometry.parameters.path.getLength())/12.0);
		//创建管道的粒子点
		var point = createMovePoint(tubeGeometry.parameters.path.getSpacedPoints(count),parm.color,adress_from,obj_world_to,cuxi);
		mesh.moveP = point;
		scene.add( point );
	}
	

	//移动粒子-管道  222222222222
	function createMovePoint(path,color,adress_from,obj_world_to,cuxi){
		let ss = 100
		if(cuxi==200){
			ss = 200
		}
	    var geo = new THREE.BufferGeometry()
	    var vertices = [];
	    var sizes = [];
	    var opacitys = [];
	    for(var i =0;i<40;i++){
	        vertices.push(0,0,0);
	        sizes.push(parseInt(ss)-i*1);
	        opacitys.push((1.0-0.8*i/29));
	    }
		
	    geo.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
	    geo.addAttribute( 'size', new THREE.Float32BufferAttribute( sizes, 1 ) );
	    geo.addAttribute( 'opacity', new THREE.Float32BufferAttribute( opacitys, 1 ) );
	    var	point = new THREE.Points( geo, new THREE.ShaderMaterial({
	        uniforms: {
	            color:{value: new THREE.Color(color)},
	            map: { value: creatSpotTexture() }
	        },
	        transparent: true,
	        depthTest: false,
	        depthWrite: false,
	        blending: THREE.AdditiveBlending,
	        vertexShader: _Shaders.pointVShader,
	        fragmentShader: _Shaders.pointFShader
	    }) );
	    point.visible = false;
	    point.path = path;
	    point.index = 0;
	    point.renderOrder = 2;
		point.name = '3_'+adress_from+obj_world_to
	    return point;
	}
	
	
	
	//加载模型
	function initModel(type) {
		let loader = new GLTFLoader();
		loader.load('./model/map_cn11.glb', (e) => {
			Bplace.push(...e.scene.children)
			//e.scene.scale.set(40000, 40000, 40000);
			e.scene.scale.set(12, 20, 12);
			e.scene.position.z = -10
			e.scene.traverse((s) => {
				if (s.isMesh) {
					//s.rotation.x = -Math.PI / 2
					// s.position.x = s.position.x*15000
					// s.position.y = s.position.x*15000
					// s.position.z = s.position.x*15000
					
					s.material.transparent = true
					s.material.opacity = 0.0
					let tween = new TWEEN.Tween(s.material)
						.to({
							 opacity: 0.85
						}, 2000)
						.easing(TWEEN.Easing.Linear.None)
						.start()
						.onUpdate(() => {
						});
				}
			})
			scene.add(e.scene)
			if(!isEmpty(type)){
				if(type==0){
					defaultInit()
				}else{
					caseInitFun(type)
				}
				
			}
			loadModelFlag = true
			
			if(isMapCompleteDo){
				for(let obj of arr_duibi){
					let randomc = Math.random()*2
					let ramc = randomc.toFixed(0)
					connection('shanghai_',arr_pro_con[obj],colorArr[ramc],false,200)
				}
				createTt('shanghai_')
			}
			
			
		}, (xhr) => {
			window.loadProgress = xhr.loaded / xhr.total * 100
		})
	}
	
	
	function initJf(obj_world_to) {
		let loader1 = new GLTFLoader();
		loader1.load('./model/b03.glb', (e) => {
			Bplace1.push(...e.scene.children)
			//e.scene.scale.set(40000, 40000, 40000);
			console.log(e)
			
			e.scene.position.x = obj_world_to.x
			e.scene.position.y = 500
			e.scene.position.z = obj_world_to.z
			
			e.scene.scale.set(10, 10, 10);
			e.scene.traverse((s) => {
				if (s.isMesh) {
					// s.material.wireframe = true
					// s.material.r = 0
					// s.material.g = 0
					// s.material.b = 0
					s.material.transparent = true
					s.material.envMap = cubeTexture;
					s.material.envMapIntensity = 10
					
					s.material.opacity = 0.0
					let tween = new TWEEN.Tween(s.material)
						.to({
							 opacity: 0.4
						}, 2000)
						.easing(TWEEN.Easing.Linear.None)
						.start()
						.onUpdate(() => {
						});
				}
			})
			
			scene.add(e.scene)
		}, (xhr) => {
		})
	}
	
	
	function defaultInit(){
		
		//西藏
		connection('lasa_','wulumuqi_',0xFF7021,false,130)
		connection('wulumuqi_','lasa_',0x175ce5,false,130)
		
		connection('lasa_','xining_',0xFF7021,false,130)
		connection('xining_','lasa_',0x175ce5,false,130)
		
		connection('lasa_','chengdu_',0xFF7021,false,130)
		connection('chengdu_','lasa_',0x175ce5,false,130)
		
		connection('lasa_','kunming_',0xFF7021,false,130)
		connection('kunming_','lasa_',0x175ce5,false,130)
		
		//银川
		connection('yinchuan_','wulumuqi_',0xFF7021,false,130)
		connection('wulumuqi_','yinchuan_',0x175ce5,false,130)
		
		connection('yinchuan_','huhehaote_',0xFF7021,false,130)
		connection('huhehaote_','yinchuan_',0x175ce5,false,130)
		
		//哈尔滨
		connection('haerbing_','huhehaote_',0xFF7021,false,130)
		connection('huhehaote_','haerbing_',0x175ce5,false,130)
		
		connection('haerbing_','changchun_',0xFF7021,false,130)
		connection('changchun_','haerbing_',0x175ce5,false,130)
		
		connection('haerbing_','shenyang_',0xFF7021,false,130)
		connection('shenyang_','haerbing_',0x175ce5,false,130)
		
		
		//昆明
		connection('kunming_','chengdu_',0xFF7021,false,130)
		connection('chengdu_','kunming_',0x175ce5,false,130)
		
		
		connection('kunming_','guiyang_',0xFF7021,false,130)
		connection('guiyang_','kunming_',0x175ce5,false,130)
		
		connection('kunming_','nanning_',0xFF7021,false,130)
		connection('nanning_','kunming_',0x175ce5,false,130)
		
		connection('kunming_','hainan_',0xFF7021,false,130)
		connection('hainan_','kunming_',0x175ce5,false,130)
		
		//海南
		connection('hainan_','nanning_',0xFF7021,false,130)
		connection('nanning_','hainan_',0x175ce5,false,130)
		
		connection('hainan_','guangzhou_',0xFF7021,false,130)
		connection('guangzhou_','hainan_',0x175ce5,false,130)
		
		//广西
		connection('nanning_','guiyang_',0xFF7021,false,130)
		connection('guiyang_','nanning_',0x175ce5,false,130)
		
		
		connection('nanning_','guangzhou_',0xFF7021,false,130)
		connection('guangzhou_','nanning_',0x175ce5,false,130)
		
		
		connection('nanning_','changsha_',0xFF7021,false,130)
		connection('changsha_','nanning_',0x175ce5,false,130)
		
		//广东
		connection('guangzhou_','fuzhou_',0xFF7021,false,130)
		connection('fuzhou_','guangzhou_',0x175ce5,false,130)
		
		connection('guangzhou_','nanchang_',0xFF7021,false,130)
		connection('nanchang_','guangzhou_',0x175ce5,false,130)
		
		connection('guangzhou_','changsha_',0xFF7021,false,130)
		connection('changsha_','guangzhou_',0x175ce5,false,130)
		
		
		//湖南
		connection('changsha_','guiyang_',0xFF7021,false,130)
		connection('guiyang_','changsha_',0x175ce5,false,130)
		
		connection('changsha_','chongqing_',0xFF7021,false,130)
		connection('chongqing_','changsha_',0x175ce5,false,130)
		
		connection('changsha_','wuhan_',0xFF7021,false,130)
		connection('wuhan_','changsha_',0x175ce5,false,130)
		
		connection('changsha_','nanchang_',0xFF7021,false,130)
		connection('nanchang_','changsha_',0x175ce5,false,130)
		
		
		//贵州
		connection('guiyang_','chengdu_',0xFF7021,false,130)
		connection('chengdu_','guiyang_',0x175ce5,false,130)
		
		connection('guiyang_','chongqing_',0xFF7021,false,130)
		connection('chongqing_','guiyang_',0x175ce5,false,130)
		
		//重庆
		connection('chongqing_','xian_',0xFF7021,false,130)
		connection('xian_','chongqing_',0x175ce5,false,130)
		
		connection('chongqing_','wuhan_',0xFF7021,false,130)
		connection('wuhan_','chongqing_',0x175ce5,false,130)
		
		
		connection('chongqing_','chengdu_',0xFF7021,false,130)
		connection('chengdu_','chongqing_',0x175ce5,false,130)
		
		
		//新疆
		// connection('wulumuqi_','yinchuan_',0xFF7021,false,130)
		// connection('yinchuan_','wulumuqi_',0xFF7021,false,130)
		
		connection('wulumuqi_','yinchuan_',0xFF7021,false,130)
		connection('yinchuan_','wulumuqi_',0x175ce5,false,130)
		connection('wulumuqi_','xining_',0xFF7021,false,130)
		connection('xining_','wulumuqi_',0x175ce5,false,130)
		
		//甘肃
		connection('lanzhou_','xining_',0xFF7021,false,130)
		connection('xining_','lanzhou_',0x175ce5,false,130)
		
		connection('lanzhou_','xian_',0xFF7021,false,130)
		connection('xian_','lanzhou_',0x175ce5,false,130)
		
		connection('lanzhou_','yinchuan_',0xFF7021,false,130)
		connection('yinchuan_','lanzhou_',0x175ce5,false,130)
		
		//四川
		connection('chengdu_','xining_',0xFF7021,false,130)
		connection('xining_','chengdu_',0x175ce5,false,130)
		
		connection('chengdu_','lanzhou_',0xFF7021,false,130)
		connection('lanzhou_','chengdu_',0x175ce5,false,130)
		
		connection('chengdu_','xian_',0xFF7021,false,130)
		connection('xian_','chengdu_',0x175ce5,false,130)
		
		
		//银川
		connection('yinchuan_','huhehaote_',0xFF7021,false,130)
		connection('huhehaote_','yinchuan_',0x175ce5,false,130)
		
		connection('yinchuan_','taiyuan_',0xFF7021,false,130)
		connection('taiyuan_','yinchuan_',0x175ce5,false,130)
		
		connection('yinchuan_','xian_',0xFF7021,false,130)
		connection('xian_','yinchuan_',0x175ce5,false,130)
		
		// 内蒙古
		connection('huhehaote_','haerbing_',0xFF7021,false,130)
		connection('haerbing_','huhehaote_',0x175ce5,false,130)
		
		connection('huhehaote_','changchuan_',0xFF7021,false,130)
		connection('changchuan_','huhehaote_',0x175ce5,false,130)
		
		connection('huhehaote_','beijing_',0xFF7021,false,130)
		connection('beijing_','huhehaote_',0x175ce5,false,130)
		
		
		//黑龙江
		connection('haerbing_','changchuan_',0xFF7021,false,130)
		connection('changchuan_','haerbing_',0x175ce5,false,130)
		
		connection('haerbing_','beijing_',0xFF7021,false,130)
		connection('beijing_','haerbing_',0x175ce5,false,130)
		
		
		//辽宁
		connection('shenyang_','changchuan_',0xFF7021,false,130)
		connection('changchuan_','shenyang_',0x175ce5,false,130)
		
		connection('shenyang_','beijing_',0xFF7021,false,130)
		connection('beijing_','shenyang_',0x175ce5,false,130)
		
		//北京
		connection('beijing_','taiyuan_',0xFF7021,false,130)
		connection('taiyuan_','beijing_',0x175ce5,false,130)
		
		connection('beijing_','jinan_',0xFF7021,false,130)
		connection('jinan_','beijing_',0x175ce5,false,130)
		
		//西安
		connection('xian_','wuhan_',0xFF7021,false,130)
		connection('wuhan_','xian_',0x175ce5,false,130)
		
		connection('xian_','zhengzhou_',0xFF7021,false,130)
		connection('zhengzhou_','xian_',0x175ce5,false,130)
		
		
		
		connection('wuhan_','nanchang_',0xFF7021,false,130)
		connection('nanchang_','wuhan_',0x175ce5,false,130)
		
		//太原
		connection('taiyuan_','xian_',0xFF7021,false,130)
		connection('xian_','taiyuan_',0x175ce5,false,130)
		
		connection('taiyuan_','zhengzhou_',0xFF7021,false,130)
		connection('zhengzhou_','taiyuan_',0x175ce5,false,130)
		
		
		
		//石家庄
		connection('shijiazhuang_','taiyuan_',0xFF7021,false,130)
		connection('taiyuan_','shijiazhuang_',0x175ce5,false,130)
		
		connection('shijiazhuang_','beijing_',0xFF7021,false,130)
		connection('beijing_','shijiazhuang_',0x175ce5,false,130)
		
		connection('shijiazhuang_','zhengzhou_',0xFF7021,false,130)
		connection('zhengzhou_','shijiazhuang_',0x175ce5,false,130)
		
		//济南
		connection('jinan_','shanghai_',0xFF7021,false,130)
		connection('shanghai_','jinan_',0x175ce5,false,130)
		
		connection('jinan_','nanjing_',0xFF7021,false,130)
		connection('nanjing_','jinan_',0x175ce5,false,130)
		
		connection('jinan_','hefei_',0xFF7021,false,130)
		connection('hefei_','jinan_',0x175ce5,false,130)
		
		connection('jinan_','zhengzhou_',0xFF7021,false,130)
		connection('zhengzhou_','jinan_',0x175ce5,false,130)
		
		//上海
		connection('shanghai_','nanjing_',0xFF7021,false,130)
		connection('nanjing_','shanghai_',0x175ce5,false,130)
		
		connection('shanghai_','hangzhou_',0xFF7021,false,130)
		connection('hangzhou_','shanghai_',0x175ce5,false,130)
		
		//杭州
		connection('hangzhou_','nanjing_',0xFF7021,false,130)
		connection('nanjing_','hangzhou_',0x175ce5,false,130)
		
		connection('hangzhou_','hefei_',0xFF7021,false,130)
		connection('hefei_','hangzhou_',0x175ce5,false,130)
		
		connection('hangzhou_','fuzhou_',0xFF7021,false,130)
		connection('fuzhou_','hangzhou_',0x175ce5,false,130)
		
		//福建
		connection('fuzhou_','nanchang_',0xFF7021,false,130)
		connection('nanchang_','fuzhou_',0x175ce5,false,130)
		
		//南昌
		connection('zhengzhou_','wuhan_',0xFF7021,false,130)
		connection('wuhan_','zhengzhou_',0x175ce5,false,130)
		
		
		connection('zhengzhou_','hefei_',0xFF7021,false,130)
		connection('hefei_','zhengzhou_',0x175ce5,false,130)
		
		//安徽
		connection('hefei_','wuhan_',0xFF7021,false,130)
		connection('wuhan_','hefei_',0x175ce5,false,130)
		
		connection('hefei_','nanchang_',0xFF7021,false,130)
		connection('nanchang_','hefei_',0x175ce5,false,130)
		
		connection('changchun_','huhehaote_',0xFF7021,false,130)
		connection('huhehaote_','changchun_',0x175ce5,false,130)
		
		connection('shenyang_','jinan_',0xFF7021,false,130)
		connection('jinan_','shenyang_',0x175ce5,false,130)
	}
	
	// 河北、太原、辽宁、吉林、黑龙江、江苏、浙江、
	// 安徽、福建、江西、济南、河南、湖北、
	// 湖南、广东、海南、四川、贵州、云南、西安、甘肃、西宁、台湾
	// 内蒙古、广西壮族、西藏、银川、新疆维
	// 北京 天津 重庆 香港 澳门
	
	let arr_pro = [
			'hefei_','beijing_','chongqing_','fuzhou_','lanzhou_','guangzhou_',
			'nanning_','guiyang_','hainan_','shijiazhuang_','haerbing_','zhengzhou_',
			'wuhan_',
			'changsha_','nanjing_','nanchang_','changchun_','shenyang_','huhehaote_',
			'yinchuan_','xining_','jinan_','shanghai_','xian_','taiyuan_',
			'chengdu_','tianjing_','wulumuqi_','lasa_','kunming_','hangzhou_',
		]
	
	let arr_pro_con = [
			'hefei_','beijing_','chongqing_','fuzhou_','lanzhou_','guangzhou_',
			'nanning_','guiyang_','hainan_','shijiazhuang_','haerbing_','zhengzhou_',
			'wuhan_',
			'changsha_','nanjing_','nanchang_','changchun_','shenyang_','huhehaote_',
			'yinchuan_','xining_','jinan_','xian_','taiyuan_',
			'chengdu_','tianjing_','wulumuqi_','lasa_','kunming_','hangzhou_',
		]
	
	let arr_pro_dx = [
			'HF','BJ','CQ','FZ','LZ','GZ',
			'NN','GY','HN','SJZ','HEB','ZZ',
			'WH',
			'CS','NJ','NC','CC','SY','HHHT',
			'YC','XN','JN','XA','TY',
			'CD','TJ','WLMQ','LS','KM','HZ',
		]
			
		
	let arr_txt = {
		'hefei_':'安徽','beijing_':'北京','chongqing_':'重庆','fuzhou_':'福建','lanzhou_':'甘肃','guangzhou_':'广东',
		'nanning_':'广西','guiyang_':'贵州','hainan_':'海南','shijiazhuang_':'河北','haerbing_':'黑龙江','zhengzhou_':'河南',
		'wuhan_':'湖北',
		'changsha_':'湖南','nanjing_':'江苏','nanchang_':'江西','changchun_':'吉林','shenyang_':'辽宁','huhehaote_':'内蒙古',
		'yinchuan_':'银川','xining_':'西宁','jinan_':'济南','shanghai_':'上海','xian_':'西安','taiyuan_':'太原',
		'chengdu_':'四川','tianjing':'天津','wulumuqi_':'新疆','lasa_':'西藏','kunming_':'云南','hangzhou_':'浙江'
	}
	let arr_txt1 = {
		'hefei_':'合肥','beijing_':'北京','chongqing_':'重庆','fuzhou_':'福州','lanzhou_':'兰州','guangzhou_':'广州',
		'nanning_':'南宁','guiyang_':'贵阳','hainan_':'海南','shijiazhuang_':'石家庄','haerbing_':'哈尔滨','zhengzhou_':'郑州',
		'wuhan_':'武汉',
		'changsha_':'长沙','nanjing_':'南京','nanchang_':'南昌','changchun_':'长春','shenyang_':'沈阳','huhehaote_':'呼和浩特',
		'yinchuan_':'银川','xining_':'西宁','jinan_':'济南','shanghai_':'上海','xian_':'西安','taiyuan_':'太原',
		'chengdu_':'成都','tianjing':'天津','wulumuqi_':'乌鲁木齐','lasa_':'拉萨','kunming_':'昆明','hangzhou_':'杭州',
	}
	
	let colorArr = [
		0xFF7021,
		0x175ce5,
	]
	
	
	window.newInit = function sss(type){
		window.removeConnection()
		window.caseInitFun(type)
	}
	
	let arr_duibi = []
	
	window.caseInitFun = function caseInit(type,isChange,isMapCompleted){
		if(isMapCompleted){
			isMapCompleteDo = true
		}
		
		clin_count = 20
		anim_start = true
		console.log('------------------------------------------------------------------')
		console.log(type)
		
		let ss = type-arr_duibi.length
		console.log(ss)
		if(ss>0){
			for(let i=1;i<=ss;i++){
				let random = Math.random()*24
				let ram = random.toFixed(0)
				
				ram = duibi(ram)
				
			}
		}else if(ss<0){
			ss = Math.abs(ss);
			for(let i=1;i<=ss;i++){
				arr_duibi.splice(1, 1);
			}
		}else{
			if(isChange){
				arr_duibi = []
				for(let i=1;i<=type;i++){
					let random = Math.random()*24
					let ram = random.toFixed(0)
					ram = duibi(ram)
				}
			}
		}
		
		for(let obj of arr_duibi){
			let randomc = Math.random()*2
			let ramc = randomc.toFixed(0)
			connection('shanghai_',arr_pro_con[obj],colorArr[ramc],false,200)
		}
		createTt('shanghai_')
		
		
		
		parent.window.getOrderInfo(arr_txt1[arr_pro_con[arr_duibi[0]]],arr_pro_dx[arr_duibi[0]])
		
	}
	
	function duibi(ram){
		console.log('ram:'+ram)
		if(isEmpty(arr_duibi)){
			arr_duibi.push(ram)
			return ram;
		}else{
			
			for(let i=0;i<=arr_duibi.length-1;i++){
				if(ram == arr_duibi[i]){
					if(ram == 0){
						ram = ram+10
					}else{
						ram = ram-1
					}
					duibi(ram)
					return false;
				}
				if(i==arr_duibi.length-1 && ram != arr_duibi[i]){
					arr_duibi.push(ram)
					return ram;
				}
			}
			
			
			// for(let obj of arr_duibi){
			// 	console.log(obj)
			// 	if(ram == obj){
			// 		ram = ram-1
			// 		duibi(ram)
			// 	}else{
			// 		arr_duibi.push(ram)
			// 		return ram;
			// 	}
			// }
		}
	}
	
	console.log(scene)
	console.log(bloomScene) 
	//rrrrrrrrrrrrrrrrrrrrrrrrr
	window.removeConnection = function(type){
		anim_start = true
		
		let children = scene.children
		
		for(let i = 0;i< children.length;i++){
			let name = children[i].name
			if(name.split('_').length>1){
				children.splice(i, 1);
				if(i != 0) i--;
			}
		}
		
		
		let children_b = bloomScene.children
		
		for(let i = 0;i< children_b.length;i++){
			if(name.split('_').length>1){
				children_b.splice(i, 1);
				if(i != 0) i--;
			}
		}
		
		
		// for(let i=0;i<=arr_pro.length-1;i++){
		// 	for(let j=0;j<=arr_pro.length-1;j++){
		// 		let ss1 = scene.getObjectByName('1_'+arr_pro[i]+arr_pro[j])
		// 		let ss2 = bloomScene.getObjectByName('2_'+arr_pro[i]+arr_pro[j])
		// 		let ss3 = scene.getObjectByName('3_'+arr_pro[i]+arr_pro[j])
		// 		console.log(ss1)
		// 		if(!isEmpty(ss1)){
		// 			ss1.parent.remove(ss1)
		// 		}
		// 		if(!isEmpty(ss2)){
		// 			ss2.parent.remove(ss2)
		// 		}
		// 		if(!isEmpty(ss3)){
		// 			ss3.parent.remove(ss3)
		// 		}
		// 	}
		// 	let ss4 = scene.getObjectByName('4_'+arr_pro[i]) //贴图
		// 	let ss5 = scene.getObjectByName('5_'+arr_pro[i]) //文字
		// 	if(!isEmpty(ss4)){
		// 		ss4.parent.remove(ss4)
		// 	}
		// 	if(!isEmpty(ss5)){
		// 		ss5.parent.remove(ss5)
		// 	}
		// }
		
		console.log(scene)
		console.log(bloomScene)
	}
	
	
	function removeObj(ss){
		if(isEmpty(ss)){
			return false
		}else{
			removeObj(ss)
		}
	}
	
	
	
	//粒子移动
	function animPipMove(){
	    scene.traverse(function(child){
	        if(child.isPIP){
	            var point = child.moveP;
	            point.index++;
	            if(point.index >= point.path.length){
	                point.index = 0;
	            }
	            var position = point.geometry.attributes.position;
	            var index = point.index;
	            for(var i=0;i<40;i++){
	                position.setXYZ(i,point.path[index].x,point.path[index].y,point.path[index].z);
	                index--
	                (index<0)&&(index=0);
	            }
				// if(index<0){
				// 	index = 0
				// 	clin_count = 20
				// 	anim_start = true
				// }
	            point.geometry.attributes.position.needsUpdate = true;
	        }
	    });
	}
	
	//render 粒子移动 33333333333333
	var clin_count = 20,anim_start = true;
	function animToStart(){
		clin_count--;
		
		scene.traverse(function(child){
		    if(child.isCylin){
		        child.material.uniforms.size.value +=child.h;
		    }else if(child.isPIP){
		        child.material.opacity +=child.op;
		    }
		});
		
	    if(clin_count<=0){
	        bloomScene.traverse(function(child) {
	            if(child.isPIP){
	                var mesh = scene.getObjectByProperty('uuid',child.uu);
	                (mesh)&&(mesh.moveP.visible = child.visible = true);
	            }
	        });
	        anim_start = false;
	    }
	}
	
	//render 散点移动效果
	var oldTime_diverPoint = new Date();
	function animDiverPoint(){
	    var t= new Date(),
			dt = t - oldTime_diverPoint;
			oldTime_diverPoint = t;
	    dt/=1000;
	    if(dt>1) return;
	    diverPoint&&diverPoint.traverse(function(obj){
	        if(obj._moveLine){
	            var t = obj.material.uniforms.u_time.value,
				
				//var t = 0.01,
				k = 0.25;
	            t+=dt*k;
				//console.log(obj.material.uniforms)
				
	            if(t>1.0) t-=1.0;
	            obj.material.uniforms.u_time.value = t;
	        }
	    });
	}
	
	function onWindowResize() {
	
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	
		renderer.setSize(window.innerWidth, window.innerHeight);
	
	}
	
	//图标动画
	let aiss = 200
	let aissFlag = true
	function animate() {
		requestAnimationFrame(animate);
		TWEEN.update();
		render();
		
		// for(let obj of Bplace1){
		// 	obj.rotation.y +=0.01
		// }
		if(timeJg==0){
			timeJg++
			return false
		}else if(timeJg==1 && timeJg1 == 1){
			timeJg--
			for(let obj of Bplace1){
				// if(obj.name =='4_guiyang_'){
				// 	console.log(obj.position.y)
				// }
				
				
				if(aiss > 0){
					aissFlag = true
					obj.position.y +=1
					aiss--
				}else if(aiss == 0){
					if(aissFlag){
						aiss = -199
					}else{
						aiss = 200
					}
				}else if(aiss < 0){
					aissFlag = false
					obj.position.y -=1
					aiss++
				}
			}
		}else{
			timeJg1++
			return false
		}
		
		(loadModelFlag && clin_count>0 && anim_start)&&(animToStart());
		(bloomScene.children.length && !anim_start)&&(animPipMove());
		//散点移动
		//animDiverPoint()
		
	}
	
	function render() {
		renderer.render(scene, camera);
	}
	
	

	function rayBreathing() {
		document.addEventListener('click', ray);
		function ray(e) {
			var Sx = event.clientX;
			var Sy = event.clientY;
			var x = (Sx / window.innerWidth) * 2 - 1;
			var y = -(Sy / window.innerHeight) * 2 + 1;
			var standardVector = new THREE.Vector3(x, y, 0.5);
			var worldVector = standardVector.unproject(camera);
			var ray = worldVector.sub(camera.position).normalize();
			var raycaster = new THREE.Raycaster(camera.position, ray);
			var intersects = raycaster.intersectObjects(Bplace, true); //Bplace

			const mtcj = ['matoubeiwei', 'matouchangjing', 'bianma']

			if (intersects.length > 0) {
				let bone = intersects[0]
				console.log(`moveCamera(new THREE.Vector3(${bone.point.x},${bone.point.y},${bone.point.z}))`)
				console.log(bone.object)
				console.log(`${camera.position.x},${camera.position.y},${camera.position.z}`)
				console.log(bone.object.position)
				//checkIsScene(bone.object,e)
			}
		}
	}

	function checkIsScene(obj, e) {
		if (obj.parent.type != 'Scene') {
			checkIsScene(obj.parent)
		} else {
			//clickCallBack(e,obj.userData)
		}
	}

	window.moveCamera = (vec, lookAtPos, lookAtFlag, duration) => {
		if (isEmpty(duration)) duration = 2000
		if (isEmpty(lookAtFlag)) lookAtFlag = 'true'

		let userData = camera.userData
		if (isEmpty(lookAtPos)) {
			lookAtPos = new THREE.Vector3(userData.targetX, userData.targetY, userData.targetZ)
		}

		console.log(camera)
		let tween = new TWEEN.Tween(camera.userData)
			.to({
				x: vec.x,
				y: vec.y,
				z: vec.z,
				targetX: lookAtPos.x,
				targetY: lookAtPos.y,
				targetZ: lookAtPos.z,
			}, duration)
			.easing(TWEEN.Easing.Linear.None)
			.start()
			.onUpdate(() => {
				userData = camera.userData
				camera.position.set(userData.x, userData.y, userData.z)
				camera.lookAt(userData.targetX, userData.targetY, userData.targetZ)
				if (lookAtFlag == 'true') {
					controls.target.set(lookAtPos.x, lookAtPos.y, lookAtPos.z)
				}
			});
		tween.onComplete(() => {
			console.log(camera)
			console.log(controls.target)
		})

	}

	//俯视视角
	window.setPolarPort = () => {
		conFalse(true)
		moveCamera(new THREE.Vector3(0, 250, 41), new THREE.Vector3(0, 0, 0))
	}
	//自由视角
	window.setAutoPort = () => {
		conFalse(true)
		moveCamera(new THREE.Vector3(-21, 62, 258), new THREE.Vector3(0, 0, 0))
	}
	//创建贴图
	function createMap(url, reNum) {
		var maps = new THREE.TextureLoader().load(url)
		maps.wrapS = maps.wrapT = THREE.RepeatWrapping;
		maps.repeat.set(reNum, reNum)//纹理 y,x方向重铺16次
		maps.needsUpdate = true;//纹理更新
		return maps//返回对象
	}

	//判断字符是否为空的方法
	function isEmpty(obj) {
		if (typeof obj == "undefined" || obj == null || obj == "" || JSON.stringify(obj) == "{}") {
			return true;
		} else {
			return false;
		}
	}

	//获取某物体的世界坐标
	window.returnWorldPosByName = (name) => {
		let obj = scene.getObjectByName(name);
		let obj_world_pos = obj.getWorldPosition(new THREE.Vector3())
		return obj_world_pos;
	}
	
	
	function getQueryVariable(variable){
	   var query = window.location.search.substring(1);
	   var vars = query.split("&");
	   for (var i=0;i<vars.length;i++) {
			   var pair = vars[i].split("=");
			   if(pair[0] == variable){return pair[1];}
	   }
	   return(false);
	}

	//控制器禁用
	window.conFalse = (flag) => {
		controls.enabled = flag
	}

	window.createSprite = (name,pos)=>{
		if(scene.getObjectByName(name)){
			scene.getObjectByName(name).parent.remove(scene.getObjectByName(name))
		}
		
		let spriteMaterial = new THREE.SpriteMaterial( { map: createTexture(name), color: 0xffffff ,transparent:true } );
		let titlePlane = new THREE.Sprite( spriteMaterial );
		titlePlane.scale.set(1,1,1)
		titlePlane.name = name
		titlePlane.position.set(pos.x,pos.y,pos.z)
		scene.add( titlePlane );
	}


	
	//创建贴图
	function createTexture(txt) {
		var tips = document.createElement('canvas');
		tips.width = 256;
		tips.height = 256;
		var tipsTexture = tips.getContext('2d');
		tipsTexture.lineWidth = '4px'
		tipsTexture.strokeStyle = '#fff'
		tipsTexture.fillStyle = 'rgba(0,0,0,0.5)';
		tipsTexture.beginPath();
	
		tipsTexture.moveTo(40, 0);
		tipsTexture.lineTo(250, 0);
		tipsTexture.lineTo(250, 100);
		tipsTexture.lineTo(200, 140);
		tipsTexture.lineTo(0, 140);
		tipsTexture.lineTo(0, 40);
		tipsTexture.closePath();
		tipsTexture.stroke()
		tipsTexture.fill()

		tipsTexture.font = '50px Microsoft YaHei';

		tipsTexture.fillStyle = "#499ebb";

		tipsTexture.fillText(txt, 30, 80);

		var texureCanvas = new THREE.CanvasTexture(tips)

		return texureCanvas
	}
	
	//高亮显示
	window.lightMac = (name) => {
		let mac = scene.getObjectByName(name)
		mac.material.opacity = 0.8
		
	}
	
	//粒子 画出map
	function creatSpotTexture( size, power ) {
		var s = size * 16 || 256, 
			m = power || 0,
			cvs = document.createElement("canvas"),
			ctx = cvs.getContext("2d");
		cvs.width = s; 
		cvs.height = s;
		var i, 
			c = 255, 
			p = s/2, 
			r = s/2,
			grad = ctx.createRadialGradient(p,p,0,p,p,r),
			Cubic = function (k, n) {
				if (n === 2) return k * k;
				if (n === 3) return k * k * k;
				return k;
			};
		for(i=0; i<s; i++) {
			var p1 = (i/(s-1)).toFixed(2) * 1,
				o = (1 - p1) * 0.8,
				o1 = Cubic(o, m).toFixed(2),
				c1 = 'rgba('+c+','+c+','+c+','+o1+')';
			grad.addColorStop(p1, c1);
		}
		ctx.fillStyle = grad;
		ctx.arc( p, p, r, 0, 2*Math.PI );
		ctx.fill();
		var texture = new THREE.Texture(cvs);
		texture.needsUpdate = true;
		return texture;
	}
	
	//散点画出map
	function creatCircleTexture( value,size, power ) {
	    var s = size * 16 || 256, m = power || 2,
	        cvs = document.createElement("canvas"),
	        ctx = cvs.getContext("2d");
	    cvs.width = s; cvs.height = s;
	
	    var p = s/2, r = s/2;
	    ctx.beginPath();
	    var grd=ctx.createRadialGradient(p,p,0,p,p,r);
	    grd.addColorStop(0,"white");
	    grd.addColorStop(0.2,"rgba("+value+"1.0)");
	    grd.addColorStop(0.35,"rgba("+value+"0.2)");
	    grd.addColorStop(1,"rgba("+value+"0.15)");
	    ctx.fillStyle = grd;
	    ctx.arc( p, p, r, 0, 2*Math.PI );
	    ctx.fill();
	    ctx.closePath();
	
	    ctx.beginPath();
	    r /= 4;
	    ctx.fillStyle = 'white';
	    ctx.arc( p, p, r, 0, 2*Math.PI );
	    ctx.fill();
	    ctx.closePath();
	
	    var texture = new THREE.Texture(cvs);
	    texture.needsUpdate = true;
	    return texture;
	}
	
	
	
	
	