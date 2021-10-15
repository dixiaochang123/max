//import { THREE } from '@corelibs/three.js';
//import { TextTexture } from './THREE.TextTexture.js';
//import { TextSprite } from './THREE.TextSprite.js';
//import {CoreUtils} from '@core/utils/CoreUtils.js';
//import { MaterialFactory } from "@core/commands/materials/MaterialFactory.js";
var alignValues = [
		'center',
		'left',
		'right',
	];
	var fontFamilyValues = [
		'Finger Paint',
		'Barrio',
		'Fredericka the Great',
		'Shadows Into Light',
		'Quicksand',
	];
	var fontStyleValues = [
		'normal',
		'italic',
	];
	var fontVariantValues = [
		'normal',
		'small-caps',
	];
	var fontWeightValues = [
		'normal',
		'bold',
	];
	
Object.assign(THREE, {
	TextSprite: TextSprite(THREE, THREE.TextTexture = TextTexture(THREE))
});

const initLength = function(opt) { //进行字符串按长度切割成数组
	//var restOpt = opt.texts.replace(/\s*/g, "")
	var restOpt = opt.texts
	var str = String(restOpt);
	var strArr = [];
	var n = Number(opt.lengths);

	for(var i = 0, l = str.length; i < l / n; i++) {
		
		var a = str.slice(n * i, n * (i + 1));

		strArr.push(a);

	}

	return strArr;
}

const initTextSprite = function(opt, obj) {

	// let data = initLength({
	// 	lengths: opt.textLength,
	// 	texts: opt.content
	// });

	let textMaterial = new THREE.TextSprite({
		material: {
			color: opt.color,
			fog: false,

		},
		redrawInterval: 30,
		minFontSize: 1,
		textSize: Number(opt.textSize),
		texture: {
			fontFamily: opt.fontFamily,
			text: opt.content.join('\n'),
			align: alignValues[1],
			fillStyle: '#e59500',
			fontFamily: fontFamilyValues[0],
			fontSize: 32,
			fontStyle: fontStyleValues[0],
			fontVariant: fontVariantValues[0],
			fontWeight: fontWeightValues[0],
			strokeStyle: '#840032',
			strokeWidth: 1/10,
			padding:1.06,
			// lineSpacing:.5

		},
	});
	
	textMaterial.material.map.fillStyle = "#ffffff";//定义字体颜色
	//textMaterial.material.map.padding = 1;//定义字体颜色
	
	if(obj) {

		obj.material = textMaterial.material;
		obj.material.depthTest = false;
		obj.updateScale()
		textMaterial.material.map.dispose()
		textMaterial.material.dispose()
		textMaterial.dispose();
		textMaterial = null;

	} else {

		return textMaterial;

	}

}

const updateText2d = function(obj, opt) { //更新文字

	if(obj) { //存在文字对象，进行删除更新，
		obj.material.map.dispose()
		obj.material.dispose()

		return initTextSprite(opt, obj);

	} else { //不存在，第一次产生文字对象，

		return initTextSprite(opt)

	}

}

class Text2D {

	constructor(param) {
		this.name = param.name ? param.name : ""; //name

		this.id = param.id ? param.id : ""; //id

		this.content = param.content ? param.content : "Text"; //文字内容

		this.textLength = param.textLength ? param.textLength : 10; //文字长度

		this.color = param.color ? param.color : 0xffffff; //文字颜色

		this.textSize = param.textSize ? param.textSize : 5; //文字大小

		this.fontFamily = param.fontFamily ? param.fontFamily : "Arial"; //字体

		this.dataInfo = {

			name: this.name,
			id: this.id,
			content: this.content,
			textLength: this.textLength,
			color: this.color,
			textSize: this.textSize,
			fontFamily: this.fontFamily,

		}

		this.text2D = updateText2d(false, this.dataInfo); //初始化字体对象

		function bybUpdate(e, _key, _tish) {

			let nowText = initLength({
				texts: _tish.text2D.userData.dataInfo.content,
				lengths: _tish.text2D.userData.dataInfo.textLength
			});

			_tish.text2D.userData.dataInfo[_key] = e; //更改 私有对象属性

			updateText2d(_tish.text2D, _tish.text2D.userData.dataInfo);

		}

		this.options = {
			'content': {
				"get": () => {

					return this.text2D.userData.dataInfo.content

				},
				"set": (e) => {

					bybUpdate(e, 'content', this)

				}
			},
			'textLength': {
				"get": () => {

					return this.text2D.userData.dataInfo.textLength
				},
				"set": (e) => {

					let nowText = initLength({
						texts: this.text2D.userData.dataInfo.content,
						lengths: e
					});

					this.text2D.userData.dataInfo.textLength = e; //更改 私有对象属性

					updateText2d(this.text2D, this.text2D.userData.dataInfo);
				}
			},

			'color': {
				"get": () => {

					return this.text2D.userData.dataInfo.color

				},
				"set": (e) => {

					bybUpdate(e, 'color', this)

				}
			},

			'textSize': {
				"get": () => {

					return this.text2D.userData.dataInfo.textSize

				},
				"set": (e) => {

					this.text2D.userData.dataInfo.textSize = e;
					this.text2D.textSize = e
				}
			},

			'fontFamily': {
				"get": () => {

					return this.text2D.userData.dataInfo.fontFamily

				},
				"set": (e) => {

					bybUpdate(e, 'fontFamily', this)

				}

			}
		}

		this.text2D.userData.options = this.options;

		this.text2D.userData.dataInfo = {};

		this.text2D.name = this.name;

		this.text2D.name = this.id;

		this.text2D.uId = this.id;
		this.text2D.userData._id = this.id
		this.text2D.userData._type = this.type
		this.text2D.userData._type_class = this.type_class ? this.type_class : 1
		this.text2D.userData.lable = this.lable ? this.lable : 1
		this.text2D.userData.icon = this.icon ? this.icon : 1
		this.text2D.userData._mesh = new THREE.Geometry()

		Object.assign(this.text2D.userData.dataInfo, this.dataInfo);

		Object.assign(this.text2D.material.userData, this.text2D.userData);

		Object.defineProperties(this.text2D.userData.options, this.options);
		//		let mat = MaterialFactory.create({
		//			"materialType": "sprite"
		//		});
		//		let mat = new THREE.SpriteMaterial({
		//			color:0xfefe00
		//		})

		//		function clone(origin) {
		//		  let originProto = Object.getPrototypeOf(origin);
		//		  return Object.assign(Object.create(originProto), origin);
		//		};
		//
		//Object.assign(this.text2D.material.userData,mat.userData)
		//		let _this = this;
		//		this.text2D.material.userData.copy = function(){
		//			return clone(_this.text2D)
		//		}
		//		this.text2D.material.userData.add = function(){
		//			return clone(_this.text2D)
		//		}
		this.text2D.material.depthTest = false

		return this.text2D

	}
}

let spriteText = (p) => {

	return new Text2D(p)
}