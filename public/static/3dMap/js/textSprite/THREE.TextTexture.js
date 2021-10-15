
function TextTexture(t) {


	function i() {
		return document.createElement("canvas")
	}

	function e(t) {
		return void 0 === t
	}

	function n(t, e) {
		if(t.length) {
			var n = i().getContext("2d");
			return n.font = e, t.map(function(t) {
				return n.measureText(t).width
			}).reduce(function(t, i) {
				return Math.max(t, i)
			})
		}
		return 0
	}
	return function(s) {
		function r(e) {

			void 0 === e && (e = {});
			var n = e.align;
			void 0 === n && (n = "center");
			var r = e.anisotropy,
				o = e.fillStyle;
			void 0 === o && (o = "#fff");
			var h = e.fontFamily;
			void 0 === h && (h = "sans-serif");
			var l = e.fontSize;
			void 0 === l && (l = 16);
			var a = e.fontStyle;
			void 0 === a && (a = "normal");
			var f = e.fontVariant;
			void 0 === f && (f = "normal");
			var d = e.fontWeight;
			void 0 === d && (d = "normal");
			var g = e.format,
				u = e.lineSpacing;
			void 0 === u && (u = .15);
			var c = e.magFilter;
			void 0 === c && (c = t.LinearFilter);
			var x = e.mapping,
				_ = e.minFilter;
			void 0 === _ && (_ = t.LinearFilter);
			var p = e.padding;
			void 0 === p && (p = .25);
			var S = e.strokeStyle;
			void 0 === S && (S = "#000");
			var y = e.strokeWidth;
			void 0 === y && (y = 0);
			var v = e.text;
			void 0 === v && (v = "");
			var I = e.type,
				P = e.wrapS,
				W = e.wrapT;
			s.call(this, i(), x, P, W, c, _, g, I, r), this._align = n, this._fillStyle = o, this._fontFamily = h, this._fontSize = l, this._fontStyle = a, this._fontVariant = f, this._fontWeight = d, this._lineSpacing = u, this._padding = p, this._strokeStyle = S, this._strokeWidth = y, this._text = v, this.redrawNow()
		}
		s && (r.__proto__ = s), r.prototype = Object.create(s && s.prototype), r.prototype.constructor = r;
		var o = {
			align: {
				configurable: !0
			},
			fillStyle: {
				configurable: !0
			},
			font: {
				configurable: !0
			},
			fontFamily: {
				configurable: !0
			},
			fontSize: {
				configurable: !0
			},
			fontStyle: {
				configurable: !0
			},
			fontVariant: {
				configurable: !0
			},
			fontWeight: {
				configurable: !0
			},
			height: {
				configurable: !0
			},
			heightInPixels: {
				configurable: !0
			},
			lines: {
				configurable: !0
			},
			lineSpacing: {
				configurable: !0
			},
			lineSpacingInPixels: {
				configurable: !0
			},
			padding: {
				configurable: !0
			},
			paddingInPixels: {
				configurable: !0
			},
			strokeStyle: {
				configurable: !0
			},
			strokeWidth: {
				configurable: !0
			},
			strokeWidthInPixels: {
				configurable: !0
			},
			text: {
				configurable: !0
			},
			textHeight: {
				configurable: !0
			},
			textHeightInPixels: {
				configurable: !0
			},
			textWidthInPixels: {
				configurable: !0
			},
			widthInPixels: {
				configurable: !0
			}
		};
		return o.align.get = function() {
			return this._align
		}, o.align.set = function(t) {
			this._align !== t && (this._align = t, this.redraw())
		}, o.fillStyle.get = function() {
			return this._fillStyle
		}, o.fillStyle.set = function(t) {
			this._fillStyle !== t && (this._fillStyle = t, this.redraw())
		}, o.font.get = function() {
			return t = this.fontStyle, i = this.fontVariant, e = this.fontWeight, n = this.fontSize, s = this.fontFamily, [t, i, e, n + "px", s].join(" ");
			var t, i, e, n, s
		}, o.fontFamily.get = function() {
			return this._fontFamily
		}, o.fontFamily.set = function(t) {
			this._fontFamily !== t && (this._fontFamily = t, this._textWidthInPixels = void 0, this.redraw())
		}, o.fontSize.get = function() {
			return this._fontSize
		}, o.fontSize.set = function(t) {
			this._fontSize !== t && (this._fontSize = t, this._textWidthInPixels = void 0, this.redraw())
		}, o.fontStyle.get = function() {
			return this._fontStyle
		}, o.fontStyle.set = function(t) {
			this._fontStyle !== t && (this._fontStyle = t, this._textWidthInPixels = void 0, this.redraw())
		}, o.fontVariant.get = function() {
			return this._fontVariant
		}, o.fontVariant.set = function(t) {
			this._fontVariant !== t && (this._fontVariant = t, this._textWidthInPixels = void 0, this.redraw())
		}, o.fontWeight.get = function() {
			return this._fontWeight
		}, o.fontWeight.set = function(t) {
			this._fontWeight !== t && (this._fontWeight = t, this._textWidthInPixels = void 0, this.redraw())
		}, o.height.get = function() {
			return this.textHeight + this.strokeWidth + 2 * this.padding
		}, o.heightInPixels.get = function() {
			return this.height * this.fontSize
		}, o.lines.get = function() {
			var t;
			return e(this._lines) && (this._lines = (t = this.text) ? t.split("\n") : []), this._lines
		}, o.lineSpacing.get = function() {
			return this._lineSpacing
		}, o.lineSpacing.set = function(t) {
			this._lineSpacing !== t && (this._lineSpacing = t, this.redraw())
		}, o.lineSpacingInPixels.get = function() {
			return this.fontSize * this.lineSpacing
		}, o.padding.get = function() {
			return this._padding
		}, o.padding.set = function(t) {
			this._padding !== t && (this._padding = t, this.redraw())
		}, o.paddingInPixels.get = function() {
			return this.padding * this.fontSize
		}, r.prototype.redraw = function() {
			var t = this;
			clearTimeout(this._redrawTimeoutId), this._redrawTimeoutId = setTimeout(function() {
				t.redrawNow()
			}, 0)
		}, r.prototype.redrawNow = function() {
			var t = this;
			clearTimeout(this._redrawTimeoutId);
			var i = this.image,
				e = i.getContext("2d");
			if(e.clearRect(0, 0, i.width, i.height), this.widthInPixels && this.heightInPixels) {
				var n;
				switch(i.width = this.widthInPixels, i.height = this.heightInPixels, e.font = this.font, e.textBaseline = "middle", this.align) {
					case "left":
						e.textAlign = "left", n = this.paddingInPixels + this.strokeWidthInPixels / 2;
						break;
					case "right":
						e.textAlign = "right", n = this.paddingInPixels + this.strokeWidthInPixels / 2 + this.textWidthInPixels;
						break;
					case "center":
						e.textAlign = "center", n = this.paddingInPixels + this.strokeWidthInPixels / 2 + this.textWidthInPixels / 2
				}
				var s = this.paddingInPixels + this.strokeWidthInPixels / 2 + this.fontSize / 2;
				
				drawC(e, 0, 0, i.width, i.height, i.width/i.height*20, '#DC143C', 'stroke');
     			drawC(e, 0, 0, i.width, i.height, i.width/i.height*20, 'rgba(111,111,111,0.5)', 'fill')
				
				e.fillStyle = this.fillStyle, e.miterLimit = 1, e.lineWidth = this.strokeWidthInPixels, e.strokeStyle = this.strokeStyle, this.lines.forEach(function(i) {
					
					t.strokeWidthInPixels && e.strokeText(i, n, s), e.fillText(i, n, s), s += t.fontSize + t.lineSpacingInPixels
				})
				

			} else i.width = i.height = 1;
			this.needsUpdate = !0
		}, o.strokeStyle.get = function() {
			return this._strokeStyle
		}, o.strokeStyle.set = function(t) {
			this._strokeStyle !== t && (this._strokeStyle = t, this.redraw())
		}, o.strokeWidth.get = function() {
			return this._strokeWidth
		}, o.strokeWidth.set = function(t) {
			this._strokeWidth !== t && (this._strokeWidth = t, this.redraw())
		}, o.strokeWidthInPixels.get = function() {
			return this._strokeWidth * this.fontSize
		}, o.text.get = function() {
			return this._text
		}, o.text.set = function(t) {
			this._text !== t && (this._text = t, this._lines = void 0, this._textWidthInPixels = void 0, this.redraw())
		}, o.textHeight.get = function() {
			return this.lines.length ? this.lines.length + this.lineSpacing * (this.lines.length - 1) : 0
		}, o.textHeightInPixels.get = function() {
			return this.textHeight * this.fontSize
		}, o.textWidthInPixels.get = function() {
			return e(this._textWidthInPixels) && (this._textWidthInPixels = n(this.lines, this.font)), this._textWidthInPixels
		}, o.widthInPixels.get = function() {
			return this.textWidthInPixels + this.strokeWidthInPixels + 2 * this.paddingInPixels
		}, Object.defineProperties(r.prototype, o), r
	}(t.Texture)
}

function drawC(ctx, x, y, width, height, radius, color, type){
    	ctx.lineWidth = 3
            ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height - radius);
        ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
        ctx.lineTo(x + width - radius, y + height);
        ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
        ctx.lineTo(x + width, y + radius);
        ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
        ctx.lineTo(x + radius, y);
        ctx.quadraticCurveTo(x, y, x, y + radius);
        ctx[type + 'Style'] = color || params.color;
        ctx.closePath();
        ctx[type]();
}
//export {
//	TextTexture
//}