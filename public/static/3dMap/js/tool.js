// tween.js - http://github.com/sole/tween.js
'use strict';
var TWEEN = TWEEN || function() {
	var a = [];
	return {
		REVISION: "7",
		getAll: function() {
			return a
		},
		removeAll: function() {
			a = []
		},
		add: function(c) {
			a.push(c)
		},
		remove: function(c) {
			c = a.indexOf(c); - 1 !== c && a.splice(c, 1)
		},
		update: function(c) {
			if(0 === a.length) return !1;
			for(var b = 0, d = a.length, c = void 0 !== c ? c : Date.now(); b < d;) a[b].update(c) ? b++ : (a.splice(b, 1), d--);
			return !0
		}
	}
}();
TWEEN.Tween = function(a) {
	var c = {},
		b = {},
		d = 1E3,
		e = 0,
		f = null,
		h = TWEEN.Easing.Linear.None,
		r = TWEEN.Interpolation.Linear,
		k = [],
		l = null,
		m = !1,
		n = null,
		p = null;
	this.to = function(a, c) {
		null !== c && (d = c);
		b = a;
		return this
	};
	this.start = function(d) {
		TWEEN.add(this);
		m = !1;
		f = void 0 !== d ? d : Date.now();
		f += e;
		for(var g in b)
			if(null !== a[g]) {
				if(b[g] instanceof Array) {
					if(0 === b[g].length) continue;
					b[g] = [a[g]].concat(b[g])
				}
				c[g] = a[g]
			}
		return this
	};
	this.stop = function() {
		TWEEN.remove(this);
		return this
	};
	this.delay = function(a) {
		e = a;
		return this
	};
	this.easing =
		function(a) {
			h = a;
			return this
		};
	this.interpolation = function(a) {
		r = a;
		return this
	};
	this.chain = function() {
		k = arguments;
		return this
	};
	this.onStart = function(a) {
		l = a;
		return this
	};
	this.onUpdate = function(a) {
		n = a;
		return this
	};
	this.onComplete = function(a) {
		p = a;
		return this
	};
	this.update = function(e) {
		if(e < f) return !0;
		!1 === m && (null !== l && l.call(a), m = !0);
		var g = (e - f) / d,
			g = 1 < g ? 1 : g,
			i = h(g),
			j;
		for(j in c) {
			var s = c[j],
				q = b[j];
			a[j] = q instanceof Array ? r(q, i) : s + (q - s) * i
		}
		null !== n && n.call(a, i);
		if(1 == g) {
			null !== p && p.call(a);
			g = 0;
			for(i = k.length; g <
				i; g++) k[g].start(e);
			return !1
		}
		return !0
	}
};
TWEEN.Easing = {
	Linear: {
		None: function(a) {
			return a
		}
	},
	Quadratic: {
		In: function(a) {
			return a * a
		},
		Out: function(a) {
			return a * (2 - a)
		},
		InOut: function(a) {
			return 1 > (a *= 2) ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1)
		}
	},
	Cubic: {
		In: function(a) {
			return a * a * a
		},
		Out: function(a) {
			return --a * a * a + 1
		},
		InOut: function(a) {
			return 1 > (a *= 2) ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2)
		}
	},
	Quartic: {
		In: function(a) {
			return a * a * a * a
		},
		Out: function(a) {
			return 1 - --a * a * a * a
		},
		InOut: function(a) {
			return 1 > (a *= 2) ? 0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2)
		}
	},
	Quintic: {
		In: function(a) {
			return a * a * a *
				a * a
		},
		Out: function(a) {
			return --a * a * a * a * a + 1
		},
		InOut: function(a) {
			return 1 > (a *= 2) ? 0.5 * a * a * a * a * a : 0.5 * ((a -= 2) * a * a * a * a + 2)
		}
	},
	Sinusoidal: {
		In: function(a) {
			return 1 - Math.cos(a * Math.PI / 2)
		},
		Out: function(a) {
			return Math.sin(a * Math.PI / 2)
		},
		InOut: function(a) {
			return 0.5 * (1 - Math.cos(Math.PI * a))
		}
	},
	Exponential: {
		In: function(a) {
			return 0 === a ? 0 : Math.pow(1024, a - 1)
		},
		Out: function(a) {
			return 1 === a ? 1 : 1 - Math.pow(2, -10 * a)
		},
		InOut: function(a) {
			return 0 === a ? 0 : 1 === a ? 1 : 1 > (a *= 2) ? 0.5 * Math.pow(1024, a - 1) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2)
		}
	},
	Circular: {
		In: function(a) {
			return 1 -
				Math.sqrt(1 - a * a)
		},
		Out: function(a) {
			return Math.sqrt(1 - --a * a)
		},
		InOut: function(a) {
			return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
		}
	},
	Elastic: {
		In: function(a) {
			var c, b = 0.1;
			if(0 === a) return 0;
			if(1 === a) return 1;
			!b || 1 > b ? (b = 1, c = 0.1) : c = 0.4 * Math.asin(1 / b) / (2 * Math.PI);
			return -(b * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - c) * 2 * Math.PI / 0.4))
		},
		Out: function(a) {
			var c, b = 0.1;
			if(0 === a) return 0;
			if(1 === a) return 1;
			!b || 1 > b ? (b = 1, c = 0.1) : c = 0.4 * Math.asin(1 / b) / (2 * Math.PI);
			return b * Math.pow(2, -10 * a) * Math.sin((a - c) *
				2 * Math.PI / 0.4) + 1
		},
		InOut: function(a) {
			var c, b = 0.1;
			if(0 === a) return 0;
			if(1 === a) return 1;
			!b || 1 > b ? (b = 1, c = 0.1) : c = 0.4 * Math.asin(1 / b) / (2 * Math.PI);
			return 1 > (a *= 2) ? -0.5 * b * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - c) * 2 * Math.PI / 0.4) : 0.5 * b * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - c) * 2 * Math.PI / 0.4) + 1
		}
	},
	Back: {
		In: function(a) {
			return a * a * (2.70158 * a - 1.70158)
		},
		Out: function(a) {
			return --a * a * (2.70158 * a + 1.70158) + 1
		},
		InOut: function(a) {
			return 1 > (a *= 2) ? 0.5 * a * a * (3.5949095 * a - 2.5949095) : 0.5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2)
		}
	},
	Bounce: {
		In: function(a) {
			return 1 -
				TWEEN.Easing.Bounce.Out(1 - a)
		},
		Out: function(a) {
			return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
		},
		InOut: function(a) {
			return 0.5 > a ? 0.5 * TWEEN.Easing.Bounce.In(2 * a) : 0.5 * TWEEN.Easing.Bounce.Out(2 * a - 1) + 0.5
		}
	}
};
TWEEN.Interpolation = {
	Linear: function(a, c) {
		var b = a.length - 1,
			d = b * c,
			e = Math.floor(d),
			f = TWEEN.Interpolation.Utils.Linear;
		return 0 > c ? f(a[0], a[1], d) : 1 < c ? f(a[b], a[b - 1], b - d) : f(a[e], a[e + 1 > b ? b : e + 1], d - e)
	},
	Bezier: function(a, c) {
		var b = 0,
			d = a.length - 1,
			e = Math.pow,
			f = TWEEN.Interpolation.Utils.Bernstein,
			h;
		for(h = 0; h <= d; h++) b += e(1 - c, d - h) * e(c, h) * a[h] * f(d, h);
		return b
	},
	CatmullRom: function(a, c) {
		var b = a.length - 1,
			d = b * c,
			e = Math.floor(d),
			f = TWEEN.Interpolation.Utils.CatmullRom;
		return a[0] === a[b] ? (0 > c && (e = Math.floor(d = b * (1 + c))), f(a[(e -
			1 + b) % b], a[e], a[(e + 1) % b], a[(e + 2) % b], d - e)) : 0 > c ? a[0] - (f(a[0], a[0], a[1], a[1], -d) - a[0]) : 1 < c ? a[b] - (f(a[b], a[b], a[b - 1], a[b - 1], d - b) - a[b]) : f(a[e ? e - 1 : 0], a[e], a[b < e + 1 ? b : e + 1], a[b < e + 2 ? b : e + 2], d - e)
	},
	Utils: {
		Linear: function(a, c, b) {
			return(c - a) * b + a
		},
		Bernstein: function(a, c) {
			var b = TWEEN.Interpolation.Utils.Factorial;
			return b(a) / b(c) / b(a - c)
		},
		Factorial: function() {
			var a = [1];
			return function(c) {
				var b = 1,
					d;
				if(a[c]) return a[c];
				for(d = c; 1 < d; d--) b *= d;
				return a[c] = b
			}
		}(),
		CatmullRom: function(a, c, b, d, e) {
			var a = 0.5 * (b - a),
				d = 0.5 * (d - c),
				f =
				e * e;
			return(2 * c - 2 * b + a + d) * e * f + (-3 * c + 3 * b - 2 * a - d) * f + a * e + c
		}
	}
};

/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or arrow keys / touch: two-finger move

THREE.OrbitControls = function ( object, domElement ) {

	this.object = object;

	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the object orbits around
	this.target = new THREE.Vector3();

	// How far you can dolly in and out ( PerspectiveCamera only )
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// How far you can zoom in and out ( OrthographicCamera only )
	this.minZoom = 0;
	this.maxZoom = Infinity;

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// How far you can orbit horizontally, upper and lower limits.
	// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	this.minAzimuthAngle = - Infinity; // radians
	this.maxAzimuthAngle = Infinity; // radians

	// Set to true to enable damping (inertia)
	// If damping is enabled, you must call controls.update() in your animation loop
	this.enableDamping = false;
	this.dampingFactor = 0.25;

	// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
	// Set to false to disable zooming
	this.enableZoom = true;
	this.zoomSpeed = 1.0;

	// Set to false to disable rotating
	this.enableRotate = true;
	this.rotateSpeed = 1.0;

	// Set to false to disable panning
	this.enablePan = true;
	this.panSpeed = 1.0;
	this.screenSpacePanning = false; // if true, pan in screen-space
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	// If auto-rotate is enabled, you must call controls.update() in your animation loop
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// Set to false to disable use of the keys
	this.enableKeys = true;

	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	// Mouse buttons
	this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

	// for reset
	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.zoom0 = this.object.zoom;

	//
	// public methods
	//

	this.getPolarAngle = function () {

		return spherical.phi;

	};

	this.getAzimuthalAngle = function () {

		return spherical.theta;

	};

	this.saveState = function () {

		scope.target0.copy( scope.target );
		scope.position0.copy( scope.object.position );
		scope.zoom0 = scope.object.zoom;

	};

	this.reset = function () {

		scope.target.copy( scope.target0 );
		scope.object.position.copy( scope.position0 );
		scope.object.zoom = scope.zoom0;

		scope.object.updateProjectionMatrix();
		scope.dispatchEvent( changeEvent );

		scope.update();

		state = STATE.NONE;

	};

	// this method is exposed, but perhaps it would be better if we can make it private...
	this.update = function () {

		var offset = new THREE.Vector3();

		// so camera.up is the orbit axis
		var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
		var quatInverse = quat.clone().inverse();

		var lastPosition = new THREE.Vector3();
		var lastQuaternion = new THREE.Quaternion();

		return function update() {

			var position = scope.object.position;

			offset.copy( position ).sub( scope.target );

			// rotate offset to "y-axis-is-up" space
			offset.applyQuaternion( quat );

			// angle from z-axis around y-axis
			spherical.setFromVector3( offset );

			if ( scope.autoRotate && state === STATE.NONE ) {

				rotateLeft( getAutoRotationAngle() );

			}

			spherical.theta += sphericalDelta.theta;
			spherical.phi += sphericalDelta.phi;

			// restrict theta to be between desired limits
			spherical.theta = Math.max( scope.minAzimuthAngle, Math.min( scope.maxAzimuthAngle, spherical.theta ) );

			// restrict phi to be between desired limits
			spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

			spherical.makeSafe();


			spherical.radius *= scale;

			// restrict radius to be between desired limits
			spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

			// move target to panned location
			scope.target.add( panOffset );

			offset.setFromSpherical( spherical );

			// rotate offset back to "camera-up-vector-is-up" space
			offset.applyQuaternion( quatInverse );

			position.copy( scope.target ).add( offset );

			scope.object.lookAt( scope.target );

			if ( scope.enableDamping === true ) {

				sphericalDelta.theta *= ( 1 - scope.dampingFactor );
				sphericalDelta.phi *= ( 1 - scope.dampingFactor );

				panOffset.multiplyScalar( 1 - scope.dampingFactor );

			} else {

				sphericalDelta.set( 0, 0, 0 );

				panOffset.set( 0, 0, 0 );

			}

			scale = 1;

			// update condition is:
			// min(camera displacement, camera rotation in radians)^2 > EPS
			// using small-angle approximation cos(x/2) = 1 - x^2 / 8

			if ( zoomChanged ||
				lastPosition.distanceToSquared( scope.object.position ) > EPS ||
				8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

				scope.dispatchEvent( changeEvent );

				lastPosition.copy( scope.object.position );
				lastQuaternion.copy( scope.object.quaternion );
				zoomChanged = false;

				return true;

			}

			return false;

		};

	}();

	this.dispose = function () {

		scope.domElement.removeEventListener( 'contextmenu', onContextMenu, false );
		scope.domElement.removeEventListener( 'mousedown', onMouseDown, false );
		scope.domElement.removeEventListener( 'wheel', onMouseWheel, false );

		scope.domElement.removeEventListener( 'touchstart', onTouchStart, false );
		scope.domElement.removeEventListener( 'touchend', onTouchEnd, false );
		scope.domElement.removeEventListener( 'touchmove', onTouchMove, false );

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		window.removeEventListener( 'keydown', onKeyDown, false );

		//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

	};

	//
	// internals
	//

	var scope = this;

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };

	var STATE = { NONE: - 1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY_PAN: 4 };

	var state = STATE.NONE;

	var EPS = 0.000001;

	// current position in spherical coordinates
	var spherical = new THREE.Spherical();
	var sphericalDelta = new THREE.Spherical();

	var scale = 1;
	var panOffset = new THREE.Vector3();
	var zoomChanged = false;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.zoomSpeed );

	}

	function rotateLeft( angle ) {

		sphericalDelta.theta -= angle;

	}

	function rotateUp( angle ) {

		sphericalDelta.phi -= angle;

	}

	var panLeft = function () {

		var v = new THREE.Vector3();

		return function panLeft( distance, objectMatrix ) {

			v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
			v.multiplyScalar( - distance );

			panOffset.add( v );

		};

	}();

	var panUp = function () {

		var v = new THREE.Vector3();

		return function panUp( distance, objectMatrix ) {

			if ( scope.screenSpacePanning === true ) {

				v.setFromMatrixColumn( objectMatrix, 1 );

			} else {

				v.setFromMatrixColumn( objectMatrix, 0 );
				v.crossVectors( scope.object.up, v );

			}

			v.multiplyScalar( distance );

			panOffset.add( v );

		};

	}();

	// deltaX and deltaY are in pixels; right and down are positive
	var pan = function () {

		var offset = new THREE.Vector3();

		return function pan( deltaX, deltaY ) {

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			if ( scope.object.isPerspectiveCamera ) {

				// perspective
				var position = scope.object.position;
				offset.copy( position ).sub( scope.target );
				var targetDistance = offset.length();

				// half of the fov is center to top of screen
				targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

				// we use only clientHeight here so aspect ratio does not distort speed
				panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
				panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

			} else if ( scope.object.isOrthographicCamera ) {

				// orthographic
				panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
				panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

			} else {

				// camera neither orthographic nor perspective
				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
				scope.enablePan = false;

			}

		};

	}();

	function dollyIn( dollyScale ) {

		if ( scope.object.isPerspectiveCamera ) {

			scale /= dollyScale;

		} else if ( scope.object.isOrthographicCamera ) {

			scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
			scope.object.updateProjectionMatrix();
			zoomChanged = true;

		} else {

			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
			scope.enableZoom = false;

		}

	}

	function dollyOut( dollyScale ) {

		if ( scope.object.isPerspectiveCamera ) {

			scale *= dollyScale;

		} else if ( scope.object.isOrthographicCamera ) {

			scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
			scope.object.updateProjectionMatrix();
			zoomChanged = true;

		} else {

			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
			scope.enableZoom = false;

		}

	}

	//
	// event callbacks - update the object state
	//

	function handleMouseDownRotate( event ) {

		//console.log( 'handleMouseDownRotate' );

		rotateStart.set( event.clientX, event.clientY );

	}

	function handleMouseDownDolly( event ) {

		//console.log( 'handleMouseDownDolly' );

		dollyStart.set( event.clientX, event.clientY );

	}

	function handleMouseDownPan( event ) {

		//console.log( 'handleMouseDownPan' );

		panStart.set( event.clientX, event.clientY );

	}

	function handleMouseMoveRotate( event ) {

		//console.log( 'handleMouseMoveRotate' );

		rotateEnd.set( event.clientX, event.clientY );

		rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

		rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

		rotateStart.copy( rotateEnd );

		scope.update();

	}

	function handleMouseMoveDolly( event ) {

		//console.log( 'handleMouseMoveDolly' );

		dollyEnd.set( event.clientX, event.clientY );

		dollyDelta.subVectors( dollyEnd, dollyStart );

		if ( dollyDelta.y > 0 ) {

			dollyIn( getZoomScale() );

		} else if ( dollyDelta.y < 0 ) {

			dollyOut( getZoomScale() );

		}

		dollyStart.copy( dollyEnd );

		scope.update();

	}

	function handleMouseMovePan( event ) {

		//console.log( 'handleMouseMovePan' );

		panEnd.set( event.clientX, event.clientY );

		panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

		pan( panDelta.x, panDelta.y );

		panStart.copy( panEnd );

		scope.update();

	}

	function handleMouseUp( event ) {

		// console.log( 'handleMouseUp' );

	}

	function handleMouseWheel( event ) {

		// console.log( 'handleMouseWheel' );

		if ( event.deltaY < 0 ) {

			dollyOut( getZoomScale() );

		} else if ( event.deltaY > 0 ) {

			dollyIn( getZoomScale() );

		}

		scope.update();

	}

	function handleKeyDown( event ) {

		//console.log( 'handleKeyDown' );

		switch ( event.keyCode ) {

			case scope.keys.UP:
				pan( 0, scope.keyPanSpeed );
				scope.update();
				break;

			case scope.keys.BOTTOM:
				pan( 0, - scope.keyPanSpeed );
				scope.update();
				break;

			case scope.keys.LEFT:
				pan( scope.keyPanSpeed, 0 );
				scope.update();
				break;

			case scope.keys.RIGHT:
				pan( - scope.keyPanSpeed, 0 );
				scope.update();
				break;

		}

	}

	function handleTouchStartRotate( event ) {

		//console.log( 'handleTouchStartRotate' );

		rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

	}

	function handleTouchStartDollyPan( event ) {

		//console.log( 'handleTouchStartDollyPan' );

		if ( scope.enableZoom ) {

			var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
			var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

			var distance = Math.sqrt( dx * dx + dy * dy );

			dollyStart.set( 0, distance );

		}

		if ( scope.enablePan ) {

			var x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
			var y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

			panStart.set( x, y );

		}

	}

	function handleTouchMoveRotate( event ) {

		//console.log( 'handleTouchMoveRotate' );

		rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

		rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

		rotateStart.copy( rotateEnd );

		scope.update();

	}

	function handleTouchMoveDollyPan( event ) {

		//console.log( 'handleTouchMoveDollyPan' );

		if ( scope.enableZoom ) {

			var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
			var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

			var distance = Math.sqrt( dx * dx + dy * dy );

			dollyEnd.set( 0, distance );

			dollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );

			dollyIn( dollyDelta.y );

			dollyStart.copy( dollyEnd );

		}

		if ( scope.enablePan ) {

			var x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
			var y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

			panEnd.set( x, y );

			panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

			pan( panDelta.x, panDelta.y );

			panStart.copy( panEnd );

		}

		scope.update();

	}

	function handleTouchEnd( event ) {

		//console.log( 'handleTouchEnd' );

	}

	//
	// event handlers - FSM: listen for events and reset state
	//

	function onMouseDown( event ) {

		if ( scope.enabled === false ) return;

		if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }

	}

		switch ( event.button ) {

			case scope.mouseButtons.ORBIT:

				if ( scope.enableRotate === false ) return;

				handleMouseDownRotate( event );

				state = STATE.ROTATE;

				break;

			case scope.mouseButtons.ZOOM:

				if ( scope.enableZoom === false ) return;

				handleMouseDownDolly( event );

				state = STATE.DOLLY;

				break;

			case scope.mouseButtons.PAN:

				if ( scope.enablePan === false ) return;

				handleMouseDownPan( event );

				state = STATE.PAN;

				break;

		}

		if ( state !== STATE.NONE ) {

			document.addEventListener( 'mousemove', onMouseMove, false );
			document.addEventListener( 'mouseup', onMouseUp, false );

			scope.dispatchEvent( startEvent );

		}

	}

	function onMouseMove( event ) {

		if ( scope.enabled === false ) return;

		if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }

	}

		switch ( state ) {

			case STATE.ROTATE:

				if ( scope.enableRotate === false ) return;

				handleMouseMoveRotate( event );

				break;

			case STATE.DOLLY:

				if ( scope.enableZoom === false ) return;

				handleMouseMoveDolly( event );

				break;

			case STATE.PAN:

				if ( scope.enablePan === false ) return;

				handleMouseMovePan( event );

				break;

		}

	}

	function onMouseUp( event ) {

		if ( scope.enabled === false ) return;

		handleMouseUp( event );

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		scope.dispatchEvent( endEvent );

		state = STATE.NONE;

	}

	function onMouseWheel( event ) {

		if ( scope.enabled === false || scope.enableZoom === false || ( state !== STATE.NONE && state !== STATE.ROTATE ) ) return;

		if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }

	}
		event.stopPropagation();

		scope.dispatchEvent( startEvent );

		handleMouseWheel( event );

		scope.dispatchEvent( endEvent );

	}

	function onKeyDown( event ) {

		if ( scope.enabled === false || scope.enableKeys === false || scope.enablePan === false ) return;

		handleKeyDown( event );

	}

	function onTouchStart( event ) {

		if ( scope.enabled === false ) return;
 		if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }

	}

		switch ( event.touches.length ) {

			case 1:	// one-fingered touch: rotate

				if ( scope.enableRotate === false ) return;

				handleTouchStartRotate( event );

				state = STATE.TOUCH_ROTATE;

				break;

			case 2:	// two-fingered touch: dolly-pan

				if ( scope.enableZoom === false && scope.enablePan === false ) return;

				handleTouchStartDollyPan( event );

				state = STATE.TOUCH_DOLLY_PAN;

				break;

			default:

				state = STATE.NONE;

		}

		if ( state !== STATE.NONE ) {

			scope.dispatchEvent( startEvent );

		}

	}

	function onTouchMove( event ) {

		if ( scope.enabled === false ) return;

		if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }

	}
		event.stopPropagation();

		switch ( event.touches.length ) {

			case 1: // one-fingered touch: rotate

				if ( scope.enableRotate === false ) return;
				if ( state !== STATE.TOUCH_ROTATE ) return; // is this needed?

				handleTouchMoveRotate( event );

				break;

			case 2: // two-fingered touch: dolly-pan

				if ( scope.enableZoom === false && scope.enablePan === false ) return;
				if ( state !== STATE.TOUCH_DOLLY_PAN ) return; // is this needed?

				handleTouchMoveDollyPan( event );

				break;

			default:

				state = STATE.NONE;

		}

	}

	function onTouchEnd( event ) {

		if ( scope.enabled === false ) return;

		handleTouchEnd( event );

		scope.dispatchEvent( endEvent );

		state = STATE.NONE;

	}

	function onContextMenu( event ) {

		if ( scope.enabled === false ) return;

		if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }

	}

	}

	//

	scope.domElement.addEventListener( 'contextmenu', onContextMenu, false );

	scope.domElement.addEventListener( 'mousedown', onMouseDown, false );
	scope.domElement.addEventListener( 'wheel', onMouseWheel, false );

	scope.domElement.addEventListener( 'touchstart', onTouchStart, false );
	scope.domElement.addEventListener( 'touchend', onTouchEnd, false );
	scope.domElement.addEventListener( 'touchmove', onTouchMove, false );

	window.addEventListener( 'keydown', onKeyDown, false );

	// force an update at start

	this.update();

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

Object.defineProperties( THREE.OrbitControls.prototype, {

	center: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .center has been renamed to .target' );
			return this.target;

		}

	},

	// backward compatibility

	noZoom: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
			return ! this.enableZoom;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
			this.enableZoom = ! value;

		}

	},

	noRotate: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
			return ! this.enableRotate;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
			this.enableRotate = ! value;

		}

	},

	noPan: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
			return ! this.enablePan;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
			this.enablePan = ! value;

		}

	},

	noKeys: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
			return ! this.enableKeys;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
			this.enableKeys = ! value;

		}

	},

	staticMoving: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
			return ! this.enableDamping;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
			this.enableDamping = ! value;

		}

	},

	dynamicDampingFactor: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
			return this.dampingFactor;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
			this.dampingFactor = value;

		}

	}

} );


/**
 * @author Kyle-Larson https://github.com/Kyle-Larson
 * @author Takahiro https://github.com/takahirox
 * @author Lewy Blue https://github.com/looeee
 *
 * Loader loads FBX file and generates Group representing FBX scene.
 * Requires FBX file to be >= 7.0 and in ASCII or >= 6400 in Binary format
 * Versions lower than this may load but will probably have errors
 *
 * Needs Support:
 *  Morph normals / blend shape normals
 *  Animation tracks for morph targets
 *
 *	Euler rotation order
 *
 * FBX format references:
 * 	https://wiki.blender.org/index.php/User:Mont29/Foundation/FBX_File_Structure
 * 	http://help.autodesk.com/view/FBX/2017/ENU/?guid=__cpp_ref_index_html (C++ SDK reference)
 *
 * 	Binary format specification:
 *		https://code.blender.org/2013/08/fbx-binary-file-format-specification/
 */


( function () {

	THREE.FBXLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	Object.assign( THREE.FBXLoader.prototype, {

		load: function ( url, onLoad, onProgress, onError ) {

			var self = this;

			var resourceDirectory = THREE.LoaderUtils.extractUrlBase( url );

			var loader = new THREE.FileLoader( this.manager );
			loader.setResponseType( 'arraybuffer' );
			loader.load( url, function ( buffer ) {

				try {

					var scene = self.parse( buffer, resourceDirectory );
					onLoad( scene );

				} catch ( error ) {

					window.setTimeout( function () {

						if ( onError ) onError( error );

						self.manager.itemError( url );

					}, 0 );

				}

			}, onProgress, onError );

		},

		parse: function ( FBXBuffer, resourceDirectory ) {

			var FBXTree;

			if ( isFbxFormatBinary( FBXBuffer ) ) {

				FBXTree = new BinaryParser().parse( FBXBuffer );

			} else {

				var FBXText = convertArrayBufferToString( FBXBuffer );

				if ( ! isFbxFormatASCII( FBXText ) ) {

					throw new Error( 'THREE.FBXLoader: Unknown format.' );

				}

				if ( getFbxVersion( FBXText ) < 7000 ) {

					throw new Error( 'THREE.FBXLoader: FBX version not supported, FileVersion: ' + getFbxVersion( FBXText ) );

				}

				FBXTree = new TextParser().parse( FBXText );

			}

			// console.log( FBXTree );

			var connections = parseConnections( FBXTree );
			var images = parseImages( FBXTree );
			var textures = parseTextures( FBXTree, new THREE.TextureLoader( this.manager ).setPath( resourceDirectory ), images, connections );
			var materials = parseMaterials( FBXTree, textures, connections );
			var deformers = parseDeformers( FBXTree, connections );
			var geometryMap = parseGeometries( FBXTree, connections, deformers );
			var sceneGraph = parseScene( FBXTree, connections, deformers.skeletons, geometryMap, materials );

			return sceneGraph;

		}

	} );

	// Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
	// and details the connection type
	function parseConnections( FBXTree ) {

		var connectionMap = new Map();

		if ( 'Connections' in FBXTree ) {

			var rawConnections = FBXTree.Connections.connections;

			rawConnections.forEach( function ( rawConnection ) {

				var fromID = rawConnection[ 0 ];
				var toID = rawConnection[ 1 ];
				var relationship = rawConnection[ 2 ];

				if ( ! connectionMap.has( fromID ) ) {

					connectionMap.set( fromID, {
						parents: [],
						children: []
					} );

				}

				var parentRelationship = { ID: toID, relationship: relationship };
				connectionMap.get( fromID ).parents.push( parentRelationship );

				if ( ! connectionMap.has( toID ) ) {

					connectionMap.set( toID, {
						parents: [],
						children: []
					} );

				}

				var childRelationship = { ID: fromID, relationship: relationship };
				connectionMap.get( toID ).children.push( childRelationship );

			} );

		}

		return connectionMap;

	}

	// Parse FBXTree.Objects.Video for embedded image data
	// These images are connected to textures in FBXTree.Objects.Textures
	// via FBXTree.Connections.
	function parseImages( FBXTree ) {

		var images = {};
		var blobs = {};

		if ( 'Video' in FBXTree.Objects ) {

			var videoNodes = FBXTree.Objects.Video;

			for ( var nodeID in videoNodes ) {

				var videoNode = videoNodes[ nodeID ];

				var id = parseInt( nodeID );

				images[ id ] = videoNode.RelativeFilename || videoNode.Filename;

				// raw image data is in videoNode.Content
				if ( 'Content' in videoNode ) {

					var arrayBufferContent = ( videoNode.Content instanceof ArrayBuffer ) && ( videoNode.Content.byteLength > 0 );
					var base64Content = ( typeof videoNode.Content === 'string' ) && ( videoNode.Content !== '' );

					if ( arrayBufferContent || base64Content ) {

						var image = parseImage( videoNodes[ nodeID ] );

						blobs[ videoNode.RelativeFilename || videoNode.Filename ] = image;

					}

				}

			}

		}

		for ( var id in images ) {

			var filename = images[ id ];

			if ( blobs[ filename ] !== undefined ) images[ id ] = blobs[ filename ];
			else images[ id ] = images[ id ].split( '\\' ).pop();

		}

		return images;

	}

	// Parse embedded image data in FBXTree.Video.Content
	function parseImage( videoNode ) {

		var content = videoNode.Content;
		var fileName = videoNode.RelativeFilename || videoNode.Filename;
		var extension = fileName.slice( fileName.lastIndexOf( '.' ) + 1 ).toLowerCase();

		var type;

		switch ( extension ) {

			case 'bmp':

				type = 'image/bmp';
				break;

			case 'jpg':
			case 'jpeg':

				type = 'image/jpeg';
				break;

			case 'png':

				type = 'image/png';
				break;

			case 'tif':

				type = 'image/tiff';
				break;

 			case 'tga':

				if ( typeof THREE.TGALoader !== 'function' ) {

					console.warn( 'FBXLoader: THREE.TGALoader is required to load TGA textures' );
					return;

				} else {

					if ( THREE.Loader.Handlers.get( '.tga' ) === null ) {

						THREE.Loader.Handlers.add( /\.tga$/i, new THREE.TGALoader() );

					}

					type = 'image/tga';
					break;

				}

			default:

				console.warn( 'FBXLoader: Image type "' + extension + '" is not supported.' );
				return;

		}

		if ( typeof content === 'string' ) { // ASCII format

			return 'data:' + type + ';base64,' + content;

		} else { // Binary Format

			var array = new Uint8Array( content );
			return window.URL.createObjectURL( new Blob( [ array ], { type: type } ) );

		}

	}

	// Parse nodes in FBXTree.Objects.Texture
	// These contain details such as UV scaling, cropping, rotation etc and are connected
	// to images in FBXTree.Objects.Video
	function parseTextures( FBXTree, loader, images, connections ) {

		var textureMap = new Map();

		if ( 'Texture' in FBXTree.Objects ) {

			var textureNodes = FBXTree.Objects.Texture;
			for ( var nodeID in textureNodes ) {

				var texture = parseTexture( textureNodes[ nodeID ], loader, images, connections );
				textureMap.set( parseInt( nodeID ), texture );

			}

		}

		return textureMap;

	}

	// Parse individual node in FBXTree.Objects.Texture
	function parseTexture( textureNode, loader, images, connections ) {

		var texture = loadTexture( textureNode, loader, images, connections );

		texture.ID = textureNode.id;

		texture.name = textureNode.attrName;

		var wrapModeU = textureNode.WrapModeU;
		var wrapModeV = textureNode.WrapModeV;

		var valueU = wrapModeU !== undefined ? wrapModeU.value : 0;
		var valueV = wrapModeV !== undefined ? wrapModeV.value : 0;

		// http://download.autodesk.com/us/fbx/SDKdocs/FBX_SDK_Help/files/fbxsdkref/class_k_fbx_texture.html#889640e63e2e681259ea81061b85143a
		// 0: repeat(default), 1: clamp

		texture.wrapS = valueU === 0 ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
		texture.wrapT = valueV === 0 ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;

		if ( 'Scaling' in textureNode ) {

			var values = textureNode.Scaling.value;

			texture.repeat.x = values[ 0 ];
			texture.repeat.y = values[ 1 ];

		}

		return texture;

	}

	// load a texture specified as a blob or data URI, or via an external URL using THREE.TextureLoader
	function loadTexture( textureNode, loader, images, connections ) {

		var fileName;

		var currentPath = loader.path;

		var children = connections.get( textureNode.id ).children;

		if ( children !== undefined && children.length > 0 && images[ children[ 0 ].ID ] !== undefined ) {

			fileName = images[ children[ 0 ].ID ];

			if ( fileName.indexOf( 'blob:' ) === 0 || fileName.indexOf( 'data:' ) === 0 ) {

				loader.setPath( undefined );

			}

		}

		var texture;

		if ( textureNode.FileName.slice( -3 ).toLowerCase() === 'tga' ) {

 			texture = THREE.Loader.Handlers.get( '.tga' ).load( fileName );

 		} else {

 			texture = loader.load( fileName );

 		}

		loader.setPath( currentPath );

		return texture;

	}

	// Parse nodes in FBXTree.Objects.Material
	function parseMaterials( FBXTree, textureMap, connections ) {

		var materialMap = new Map();

		if ( 'Material' in FBXTree.Objects ) {

			var materialNodes = FBXTree.Objects.Material;

			for ( var nodeID in materialNodes ) {

				var material = parseMaterial( FBXTree, materialNodes[ nodeID ], textureMap, connections );

				if ( material !== null ) materialMap.set( parseInt( nodeID ), material );

			}

		}

		return materialMap;

	}

	// Parse single node in FBXTree.Objects.Material
	// Materials are connected to texture maps in FBXTree.Objects.Textures
	// FBX format currently only supports Lambert and Phong shading models
	function parseMaterial( FBXTree, materialNode, textureMap, connections ) {

		var ID = materialNode.id;
		var name = materialNode.attrName;
		var type = materialNode.ShadingModel;

		//Case where FBX wraps shading model in property object.
		if ( typeof type === 'object' ) {

			type = type.value;

		}

		// Ignore unused materials which don't have any connections.
		if ( ! connections.has( ID ) ) return null;

		var parameters = parseParameters( FBXTree, materialNode, textureMap, ID, connections );

		var material;

		switch ( type.toLowerCase() ) {

			case 'phong':
				material = new THREE.MeshPhongMaterial();
				break;
			case 'lambert':
				material = new THREE.MeshLambertMaterial();
				break;
			default:
				console.warn( 'THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', type );
				material = new THREE.MeshPhongMaterial( { color: 0x3300ff } );
				break;

		}

		material.setValues( parameters );
		material.name = name;

		return material;

	}

	// Parse FBX material and return parameters suitable for a three.js material
	// Also parse the texture map and return any textures associated with the material
	function parseParameters( FBXTree, properties, textureMap, ID, connections ) {

		var parameters = {};

		if ( properties.BumpFactor ) {

			parameters.bumpScale = properties.BumpFactor.value;

		}
		if ( properties.Diffuse ) {

			parameters.color = new THREE.Color().fromArray( properties.Diffuse.value );

		} else if ( properties.DiffuseColor && properties.DiffuseColor.type === 'Color' ) {

			// The blender exporter exports diffuse here instead of in properties.Diffuse
			parameters.color = new THREE.Color().fromArray( properties.DiffuseColor.value );

		}
		if ( properties.DisplacementFactor ) {

			parameters.displacementScale = properties.DisplacementFactor.value;

		}
		if ( properties.Emissive ) {

			parameters.emissive = new THREE.Color().fromArray( properties.Emissive.value );

		} else if ( properties.EmissiveColor && properties.EmissiveColor.type === 'Color' ) {

			// The blender exporter exports emissive color here instead of in properties.Emissive
			parameters.emissive = new THREE.Color().fromArray( properties.EmissiveColor.value );

		}
		if ( properties.EmissiveFactor ) {

			parameters.emissiveIntensity = parseFloat( properties.EmissiveFactor.value );

		}
		if ( properties.Opacity ) {

			parameters.opacity = parseFloat( properties.Opacity.value );

		}
		if ( parameters.opacity < 1.0 ) {

			parameters.transparent = true;

		}
		if ( properties.ReflectionFactor ) {

			parameters.reflectivity = properties.ReflectionFactor.value;

		}
		if ( properties.Shininess ) {

			parameters.shininess = properties.Shininess.value;

		}
		if ( properties.Specular ) {

			parameters.specular = new THREE.Color().fromArray( properties.Specular.value );

		} else if ( properties.SpecularColor && properties.SpecularColor.type === 'Color' ) {

			// The blender exporter exports specular color here instead of in properties.Specular
			parameters.specular = new THREE.Color().fromArray( properties.SpecularColor.value );

		}

		connections.get( ID ).children.forEach( function ( child ) {

			var type = child.relationship;

			switch ( type ) {

				case 'Bump':
					parameters.bumpMap = textureMap.get( child.ID );
					break;

				case 'DiffuseColor':
					parameters.map = getTexture( FBXTree, textureMap, child.ID, connections );
					break;

				case 'DisplacementColor':
					parameters.displacementMap = getTexture( FBXTree, textureMap, child.ID, connections );
					break;


				case 'EmissiveColor':
					parameters.emissiveMap = getTexture( FBXTree, textureMap, child.ID, connections );
					break;

				case 'NormalMap':
					parameters.normalMap = getTexture( FBXTree, textureMap, child.ID, connections );
					break;

				case 'ReflectionColor':
					parameters.envMap = getTexture( FBXTree, textureMap, child.ID, connections );
					parameters.envMap.mapping = THREE.EquirectangularReflectionMapping;
					break;

				case 'SpecularColor':
					parameters.specularMap = getTexture( FBXTree, textureMap, child.ID, connections );
					break;

				case 'TransparentColor':
					parameters.alphaMap = getTexture( FBXTree, textureMap, child.ID, connections );
					parameters.transparent = true;
					break;

				case 'AmbientColor':
				case 'ShininessExponent': // AKA glossiness map
				case 'SpecularFactor': // AKA specularLevel
				case 'VectorDisplacementColor': // NOTE: Seems to be a copy of DisplacementColor
				default:
					console.warn( 'THREE.FBXLoader: %s map is not supported in three.js, skipping texture.', type );
					break;

			}

		} );

		return parameters;

	}

	// get a texture from the textureMap for use by a material.
	function getTexture( FBXTree, textureMap, id, connections ) {

		// if the texture is a layered texture, just use the first layer and issue a warning
		if ( 'LayeredTexture' in FBXTree.Objects && id in FBXTree.Objects.LayeredTexture ) {

			console.warn( 'THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.' );
			id = connections.get( id ).children[ 0 ].ID;

		}

		return textureMap.get( id );

	}

	// Parse nodes in FBXTree.Objects.Deformer
	// Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
	// Generates map of Skeleton-like objects for use later when generating and binding skeletons.
	function parseDeformers( FBXTree, connections ) {

		var skeletons = {};
		var morphTargets = {};

		if ( 'Deformer' in FBXTree.Objects ) {

			var DeformerNodes = FBXTree.Objects.Deformer;

			for ( var nodeID in DeformerNodes ) {

				var deformerNode = DeformerNodes[ nodeID ];

				var relationships = connections.get( parseInt( nodeID ) );

				if ( deformerNode.attrType === 'Skin' ) {

					var skeleton = parseSkeleton( relationships, DeformerNodes );
					skeleton.ID = nodeID;

					if ( relationships.parents.length > 1 ) console.warn( 'THREE.FBXLoader: skeleton attached to more than one geometry is not supported.' );
					skeleton.geometryID = relationships.parents[ 0 ].ID;

					skeletons[ nodeID ] = skeleton;

				} else if ( deformerNode.attrType === 'BlendShape' ) {

					var morphTarget = {
						id: nodeID,
					};

					morphTarget.rawTargets = parseMorphTargets( relationships, deformerNode, DeformerNodes, connections, FBXTree );
					morphTarget.id = nodeID;

					if ( relationships.parents.length > 1 ) console.warn( 'THREE.FBXLoader: morph target attached to more than one geometry is not supported.' );
					morphTarget.parentGeoID = relationships.parents[ 0 ].ID;

					morphTargets[ nodeID ] = morphTarget;

				}

			}

		}

		return {

			skeletons: skeletons,
			morphTargets: morphTargets,

		};

	}

	// Parse single nodes in FBXTree.Objects.Deformer
	// The top level skeleton node has type 'Skin' and sub nodes have type 'Cluster'
	// Each skin node represents a skeleton and each cluster node represents a bone
	function parseSkeleton( connections, deformerNodes ) {

		var rawBones = [];

		connections.children.forEach( function ( child ) {

			var boneNode = deformerNodes[ child.ID ];

			if ( boneNode.attrType !== 'Cluster' ) return;

			var rawBone = {

				ID: child.ID,
				indices: [],
				weights: [],
				transform: new THREE.Matrix4().fromArray( boneNode.Transform.a ),
				transformLink: new THREE.Matrix4().fromArray( boneNode.TransformLink.a ),
				linkMode: boneNode.Mode,

			};

			if ( 'Indexes' in boneNode ) {

				rawBone.indices = boneNode.Indexes.a;
				rawBone.weights = boneNode.Weights.a;

			}

			rawBones.push( rawBone );

		} );

		return {

			rawBones: rawBones,
			bones: []

		};

	}

	// The top level morph deformer node has type "BlendShape" and sub nodes have type "BlendShapeChannel"
	function parseMorphTargets( relationships, deformerNode, deformerNodes, connections ) {

		var rawMorphTargets = [];

		for ( var i = 0; i < relationships.children.length; i ++ ) {

			if ( i === 8 ) {

				console.warn( 'FBXLoader: maximum of 8 morph targets supported. Ignoring additional targets.' );

				break;

			}

			var child = relationships.children[ i ];

			var morphTargetNode = deformerNodes[ child.ID ];

			var rawMorphTarget = {

				name: morphTargetNode.attrName,
				initialWeight: morphTargetNode.DeformPercent,
				id: morphTargetNode.id,
				fullWeights: morphTargetNode.FullWeights.a

			};

			if ( morphTargetNode.attrType !== 'BlendShapeChannel' ) return;

			var targetRelationships = connections.get( parseInt( child.ID ) );

			targetRelationships.children.forEach( function ( child ) {

				if ( child.relationship === 'DeformPercent' ) {

					// TODO: animation of morph targets is currently unsupported
					rawMorphTarget.weightCurveID = child.ID;
					// weightCurve = FBXTree.Objects.AnimationCurveNode[ weightCurveID ];

				} else {

					rawMorphTarget.geoID = child.ID;
					// morphGeo = FBXTree.Objects.Geometry[ geoID ];

				}

			} );

			rawMorphTargets.push( rawMorphTarget );

		}

		return rawMorphTargets;

	}

	// Parse nodes in FBXTree.Objects.Geometry
	function parseGeometries( FBXTree, connections, deformers ) {

		var geometryMap = new Map();

		if ( 'Geometry' in FBXTree.Objects ) {

			var geoNodes = FBXTree.Objects.Geometry;

			for ( var nodeID in geoNodes ) {

				var relationships = connections.get( parseInt( nodeID ) );
				var geo = parseGeometry( FBXTree, relationships, geoNodes[ nodeID ], deformers );

				geometryMap.set( parseInt( nodeID ), geo );

			}

		}

		return geometryMap;

	}

	// Parse single node in FBXTree.Objects.Geometry
	function parseGeometry( FBXTree, relationships, geoNode, deformers ) {

		switch ( geoNode.attrType ) {

			case 'Mesh':
				return parseMeshGeometry( FBXTree, relationships, geoNode, deformers );
				break;

			case 'NurbsCurve':
				return parseNurbsGeometry( geoNode );
				break;

		}

	}

	// Parse single node mesh geometry in FBXTree.Objects.Geometry
	function parseMeshGeometry( FBXTree, relationships, geoNode, deformers ) {

		var skeletons = deformers.skeletons;
		var morphTargets = deformers.morphTargets;

		var modelNodes = relationships.parents.map( function ( parent ) {

			return FBXTree.Objects.Model[ parent.ID ];

		} );

		// don't create geometry if it is not associated with any models
		if ( modelNodes.length === 0 ) return;

		var skeleton = relationships.children.reduce( function ( skeleton, child ) {

			if ( skeletons[ child.ID ] !== undefined ) skeleton = skeletons[ child.ID ];

			return skeleton;

		}, null );

		var morphTarget = relationships.children.reduce( function ( morphTarget, child ) {

			if ( morphTargets[ child.ID ] !== undefined ) morphTarget = morphTargets[ child.ID ];

			return morphTarget;

		}, null );

		var preTransform = new THREE.Matrix4();

		// TODO: if there is more than one model associated with the geometry, AND the models have
		// different geometric transforms, then this will cause problems
		// if ( modelNodes.length > 1 ) { }

		// For now just assume one model and get the preRotations from that
		var modelNode = modelNodes[ 0 ];

		if ( 'GeometricRotation' in modelNode ) {

			var array = modelNode.GeometricRotation.value.map( THREE.Math.degToRad );
			array[ 3 ] = 'ZYX';

			preTransform.makeRotationFromEuler( new THREE.Euler().fromArray( array ) );

		}

		if ( 'GeometricTranslation' in modelNode ) {

			preTransform.setPosition( new THREE.Vector3().fromArray( modelNode.GeometricTranslation.value ) );

		}

		if ( 'GeometricScaling' in modelNode ) {

			preTransform.scale( new THREE.Vector3().fromArray( modelNode.GeometricScaling.value ) );

		}

		return genGeometry( FBXTree, geoNode, skeleton, morphTarget, preTransform );

	}

	// Generate a THREE.BufferGeometry from a node in FBXTree.Objects.Geometry
	function genGeometry( FBXTree, geoNode, skeleton, morphTarget, preTransform ) {

		var geo = new THREE.BufferGeometry();
		if ( geoNode.attrName ) geo.name = geoNode.attrName;

		var geoInfo = getGeoInfo( geoNode, skeleton );

		var buffers = genBuffers( geoInfo );

		var positionAttribute = new THREE.Float32BufferAttribute( buffers.vertex, 3 );

		preTransform.applyToBufferAttribute( positionAttribute );

		geo.addAttribute( 'position', positionAttribute );

		if ( buffers.colors.length > 0 ) {

			geo.addAttribute( 'color', new THREE.Float32BufferAttribute( buffers.colors, 3 ) );

		}

		if ( skeleton ) {

			geo.addAttribute( 'skinIndex', new THREE.Uint16BufferAttribute( buffers.weightsIndices, 4 ) );

			geo.addAttribute( 'skinWeight', new THREE.Float32BufferAttribute( buffers.vertexWeights, 4 ) );

			// used later to bind the skeleton to the model
			geo.FBX_Deformer = skeleton;

		}

		if ( buffers.normal.length > 0 ) {

			var normalAttribute = new THREE.Float32BufferAttribute( buffers.normal, 3 );

			var normalMatrix = new THREE.Matrix3().getNormalMatrix( preTransform );
			normalMatrix.applyToBufferAttribute( normalAttribute );

			geo.addAttribute( 'normal', normalAttribute );

		}

		buffers.uvs.forEach( function ( uvBuffer, i ) {

			// subsequent uv buffers are called 'uv1', 'uv2', ...
			var name = 'uv' + ( i + 1 ).toString();

			// the first uv buffer is just called 'uv'
			if ( i === 0 ) {

				name = 'uv';

			}

			geo.addAttribute( name, new THREE.Float32BufferAttribute( buffers.uvs[ i ], 2 ) );

		} );

		if ( geoInfo.material && geoInfo.material.mappingType !== 'AllSame' ) {

			// Convert the material indices of each vertex into rendering groups on the geometry.
			var prevMaterialIndex = buffers.materialIndex[ 0 ];
			var startIndex = 0;

			buffers.materialIndex.forEach( function ( currentIndex, i ) {

				if ( currentIndex !== prevMaterialIndex ) {

					geo.addGroup( startIndex, i - startIndex, prevMaterialIndex );

					prevMaterialIndex = currentIndex;
					startIndex = i;

				}

			} );

			// the loop above doesn't add the last group, do that here.
			if ( geo.groups.length > 0 ) {

				var lastGroup = geo.groups[ geo.groups.length - 1 ];
				var lastIndex = lastGroup.start + lastGroup.count;

				if ( lastIndex !== buffers.materialIndex.length ) {

					geo.addGroup( lastIndex, buffers.materialIndex.length - lastIndex, prevMaterialIndex );

				}

			}

			// case where there are multiple materials but the whole geometry is only
			// using one of them
			if ( geo.groups.length === 0 ) {

				geo.addGroup( 0, buffers.materialIndex.length, buffers.materialIndex[ 0 ] );

			}

		}

		addMorphTargets( FBXTree, geo, geoNode, morphTarget, preTransform );

		return geo;

	}

	function getGeoInfo( geoNode, skeleton ) {

		var geoInfo = {};

		geoInfo.vertexPositions = ( geoNode.Vertices !== undefined ) ? geoNode.Vertices.a : [];
		geoInfo.vertexIndices = ( geoNode.PolygonVertexIndex !== undefined ) ? geoNode.PolygonVertexIndex.a : [];

		if ( geoNode.LayerElementColor ) {

			geoInfo.color = getColors( geoNode.LayerElementColor[ 0 ] );

		}

		if ( geoNode.LayerElementMaterial ) {

			geoInfo.material = getMaterials( geoNode.LayerElementMaterial[ 0 ] );

		}

		if ( geoNode.LayerElementNormal ) {

			geoInfo.normal = getNormals( geoNode.LayerElementNormal[ 0 ] );

		}

		if ( geoNode.LayerElementUV ) {

			geoInfo.uv = [];

			var i = 0;
			while ( geoNode.LayerElementUV[ i ] ) {

				geoInfo.uv.push( getUVs( geoNode.LayerElementUV[ i ] ) );
				i ++;

			}

		}

		geoInfo.weightTable = {};

		if ( skeleton !== null ) {

			geoInfo.skeleton = skeleton;

			skeleton.rawBones.forEach( function ( rawBone, i ) {

				// loop over the bone's vertex indices and weights
				rawBone.indices.forEach( function ( index, j ) {

					if ( geoInfo.weightTable[ index ] === undefined ) geoInfo.weightTable[ index ] = [];

					geoInfo.weightTable[ index ].push( {

						id: i,
						weight: rawBone.weights[ j ],

					} );

				} );

			} );

		}

		return geoInfo;

	}

	function genBuffers( geoInfo ) {

		var buffers = {
			vertex: [],
			normal: [],
			colors: [],
			uvs: [],
			materialIndex: [],
			vertexWeights: [],
			weightsIndices: [],
		};

		var polygonIndex = 0;
		var faceLength = 0;
		var displayedWeightsWarning = false;

		// these will hold data for a single face
		var facePositionIndexes = [];
		var faceNormals = [];
		var faceColors = [];
		var faceUVs = [];
		var faceWeights = [];
		var faceWeightIndices = [];

		geoInfo.vertexIndices.forEach( function ( vertexIndex, polygonVertexIndex ) {

			var endOfFace = false;

			// Face index and vertex index arrays are combined in a single array
			// A cube with quad faces looks like this:
			// PolygonVertexIndex: *24 {
			//  a: 0, 1, 3, -3, 2, 3, 5, -5, 4, 5, 7, -7, 6, 7, 1, -1, 1, 7, 5, -4, 6, 0, 2, -5
			//  }
			// Negative numbers mark the end of a face - first face here is 0, 1, 3, -3
			// to find index of last vertex bit shift the index: ^ - 1
			if ( vertexIndex < 0 ) {

				vertexIndex = vertexIndex ^ - 1; // equivalent to ( x * -1 ) - 1
				endOfFace = true;

			}

			var weightIndices = [];
			var weights = [];

			facePositionIndexes.push( vertexIndex * 3, vertexIndex * 3 + 1, vertexIndex * 3 + 2 );

			if ( geoInfo.color ) {

				var data = getData( polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.color );

				faceColors.push( data[ 0 ], data[ 1 ], data[ 2 ] );

			}

			if ( geoInfo.skeleton ) {

				if ( geoInfo.weightTable[ vertexIndex ] !== undefined ) {

					geoInfo.weightTable[ vertexIndex ].forEach( function ( wt ) {

						weights.push( wt.weight );
						weightIndices.push( wt.id );

					} );


				}

				if ( weights.length > 4 ) {

					if ( ! displayedWeightsWarning ) {

						console.warn( 'THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.' );
						displayedWeightsWarning = true;

					}

					var wIndex = [ 0, 0, 0, 0 ];
					var Weight = [ 0, 0, 0, 0 ];

					weights.forEach( function ( weight, weightIndex ) {

						var currentWeight = weight;
						var currentIndex = weightIndices[ weightIndex ];

						Weight.forEach( function ( comparedWeight, comparedWeightIndex, comparedWeightArray ) {

							if ( currentWeight > comparedWeight ) {

								comparedWeightArray[ comparedWeightIndex ] = currentWeight;
								currentWeight = comparedWeight;

								var tmp = wIndex[ comparedWeightIndex ];
								wIndex[ comparedWeightIndex ] = currentIndex;
								currentIndex = tmp;

							}

						} );

					} );

					weightIndices = wIndex;
					weights = Weight;

				}

				// if the weight array is shorter than 4 pad with 0s
				while ( weights.length < 4 ) {

					weights.push( 0 );
					weightIndices.push( 0 );

				}

				for ( var i = 0; i < 4; ++ i ) {

					faceWeights.push( weights[ i ] );
					faceWeightIndices.push( weightIndices[ i ] );

				}

			}

			if ( geoInfo.normal ) {

				var data = getData( polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.normal );

				faceNormals.push( data[ 0 ], data[ 1 ], data[ 2 ] );

			}

			if ( geoInfo.material && geoInfo.material.mappingType !== 'AllSame' ) {

				var materialIndex = getData( polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.material )[ 0 ];

			}

			if ( geoInfo.uv ) {

				geoInfo.uv.forEach( function ( uv, i ) {

					var data = getData( polygonVertexIndex, polygonIndex, vertexIndex, uv );

					if ( faceUVs[ i ] === undefined ) {

						faceUVs[ i ] = [];

					}

					faceUVs[ i ].push( data[ 0 ] );
					faceUVs[ i ].push( data[ 1 ] );

				} );

			}

			faceLength ++;

			if ( endOfFace ) {

				genFace( buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength );

				polygonIndex ++;
				faceLength = 0;

				// reset arrays for the next face
				facePositionIndexes = [];
				faceNormals = [];
				faceColors = [];
				faceUVs = [];
				faceWeights = [];
				faceWeightIndices = [];

			}

		} );

		return buffers;

	}

	// Generate data for a single face in a geometry. If the face is a quad then split it into 2 tris
	function genFace( buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength ) {

		for ( var i = 2; i < faceLength; i ++ ) {

			buffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ 0 ] ] );
			buffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ 1 ] ] );
			buffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ 2 ] ] );

			buffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ ( i - 1 ) * 3 ] ] );
			buffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ ( i - 1 ) * 3 + 1 ] ] );
			buffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ ( i - 1 ) * 3 + 2 ] ] );

			buffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ i * 3 ] ] );
			buffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ i * 3 + 1 ] ] );
			buffers.vertex.push( geoInfo.vertexPositions[ facePositionIndexes[ i * 3 + 2 ] ] );

			if ( geoInfo.skeleton ) {

				buffers.vertexWeights.push( faceWeights[ 0 ] );
				buffers.vertexWeights.push( faceWeights[ 1 ] );
				buffers.vertexWeights.push( faceWeights[ 2 ] );
				buffers.vertexWeights.push( faceWeights[ 3 ] );

				buffers.vertexWeights.push( faceWeights[ ( i - 1 ) * 4 ] );
				buffers.vertexWeights.push( faceWeights[ ( i - 1 ) * 4 + 1 ] );
				buffers.vertexWeights.push( faceWeights[ ( i - 1 ) * 4 + 2 ] );
				buffers.vertexWeights.push( faceWeights[ ( i - 1 ) * 4 + 3 ] );

				buffers.vertexWeights.push( faceWeights[ i * 4 ] );
				buffers.vertexWeights.push( faceWeights[ i * 4 + 1 ] );
				buffers.vertexWeights.push( faceWeights[ i * 4 + 2 ] );
				buffers.vertexWeights.push( faceWeights[ i * 4 + 3 ] );

				buffers.weightsIndices.push( faceWeightIndices[ 0 ] );
				buffers.weightsIndices.push( faceWeightIndices[ 1 ] );
				buffers.weightsIndices.push( faceWeightIndices[ 2 ] );
				buffers.weightsIndices.push( faceWeightIndices[ 3 ] );

				buffers.weightsIndices.push( faceWeightIndices[ ( i - 1 ) * 4 ] );
				buffers.weightsIndices.push( faceWeightIndices[ ( i - 1 ) * 4 + 1 ] );
				buffers.weightsIndices.push( faceWeightIndices[ ( i - 1 ) * 4 + 2 ] );
				buffers.weightsIndices.push( faceWeightIndices[ ( i - 1 ) * 4 + 3 ] );

				buffers.weightsIndices.push( faceWeightIndices[ i * 4 ] );
				buffers.weightsIndices.push( faceWeightIndices[ i * 4 + 1 ] );
				buffers.weightsIndices.push( faceWeightIndices[ i * 4 + 2 ] );
				buffers.weightsIndices.push( faceWeightIndices[ i * 4 + 3 ] );

			}

			if ( geoInfo.color ) {

				buffers.colors.push( faceColors[ 0 ] );
				buffers.colors.push( faceColors[ 1 ] );
				buffers.colors.push( faceColors[ 2 ] );

				buffers.colors.push( faceColors[ ( i - 1 ) * 3 ] );
				buffers.colors.push( faceColors[ ( i - 1 ) * 3 + 1 ] );
				buffers.colors.push( faceColors[ ( i - 1 ) * 3 + 2 ] );

				buffers.colors.push( faceColors[ i * 3 ] );
				buffers.colors.push( faceColors[ i * 3 + 1 ] );
				buffers.colors.push( faceColors[ i * 3 + 2 ] );

			}

			if ( geoInfo.material && geoInfo.material.mappingType !== 'AllSame' ) {

				buffers.materialIndex.push( materialIndex );
				buffers.materialIndex.push( materialIndex );
				buffers.materialIndex.push( materialIndex );

			}

			if ( geoInfo.normal ) {

				buffers.normal.push( faceNormals[ 0 ] );
				buffers.normal.push( faceNormals[ 1 ] );
				buffers.normal.push( faceNormals[ 2 ] );

				buffers.normal.push( faceNormals[ ( i - 1 ) * 3 ] );
				buffers.normal.push( faceNormals[ ( i - 1 ) * 3 + 1 ] );
				buffers.normal.push( faceNormals[ ( i - 1 ) * 3 + 2 ] );

				buffers.normal.push( faceNormals[ i * 3 ] );
				buffers.normal.push( faceNormals[ i * 3 + 1 ] );
				buffers.normal.push( faceNormals[ i * 3 + 2 ] );

			}

			if ( geoInfo.uv ) {

				geoInfo.uv.forEach( function ( uv, j ) {

					if ( buffers.uvs[ j ] === undefined ) buffers.uvs[ j ] = [];

					buffers.uvs[ j ].push( faceUVs[ j ][ 0 ] );
					buffers.uvs[ j ].push( faceUVs[ j ][ 1 ] );

					buffers.uvs[ j ].push( faceUVs[ j ][ ( i - 1 ) * 2 ] );
					buffers.uvs[ j ].push( faceUVs[ j ][ ( i - 1 ) * 2 + 1 ] );

					buffers.uvs[ j ].push( faceUVs[ j ][ i * 2 ] );
					buffers.uvs[ j ].push( faceUVs[ j ][ i * 2 + 1 ] );

				} );

			}

		}

	}

	function addMorphTargets( FBXTree, parentGeo, parentGeoNode, morphTarget, preTransform ) {

		if ( morphTarget === null ) return;

		parentGeo.morphAttributes.position = [];
		parentGeo.morphAttributes.normal = [];

		morphTarget.rawTargets.forEach( function ( rawTarget ) {

			var morphGeoNode = FBXTree.Objects.Geometry[ rawTarget.geoID ];

			if ( morphGeoNode !== undefined ) {

				genMorphGeometry( parentGeo, parentGeoNode, morphGeoNode, preTransform );

			}

		} );

	}

	// a morph geometry node is similar to a standard  node, and the node is also contained
	// in FBXTree.Objects.Geometry, however it can only have attributes for position, normal
	// and a special attribute Index defining which vertices of the original geometry are affected
	// Normal and position attributes only have data for the vertices that are affected by the morph
	function genMorphGeometry( parentGeo, parentGeoNode, morphGeoNode, preTransform ) {

		var morphGeo = new THREE.BufferGeometry();
		if ( morphGeoNode.attrName ) morphGeo.name = morphGeoNode.attrName;

		var vertexIndices = ( parentGeoNode.PolygonVertexIndex !== undefined ) ? parentGeoNode.PolygonVertexIndex.a : [];

		// make a copy of the parent's vertex positions
		var vertexPositions = ( parentGeoNode.Vertices !== undefined ) ? parentGeoNode.Vertices.a.slice() : [];

		var morphPositions = ( morphGeoNode.Vertices !== undefined ) ? morphGeoNode.Vertices.a : [];
		var indices = ( morphGeoNode.Indexes !== undefined ) ? morphGeoNode.Indexes.a : [];

		for ( var i = 0; i < indices.length; i ++ ) {

			var morphIndex = indices[ i ] * 3;

			// FBX format uses blend shapes rather than morph targets. This can be converted
			// by additively combining the blend shape positions with the original geometry's positions
			vertexPositions[ morphIndex ] += morphPositions[ i * 3 ];
			vertexPositions[ morphIndex + 1 ] += morphPositions[ i * 3 + 1 ];
			vertexPositions[ morphIndex + 2 ] += morphPositions[ i * 3 + 2 ];

		}

		// TODO: add morph normal support
		var morphGeoInfo = {
			vertexIndices: vertexIndices,
			vertexPositions: vertexPositions,
		};

		var morphBuffers = genBuffers( morphGeoInfo );

		var positionAttribute = new THREE.Float32BufferAttribute( morphBuffers.vertex, 3 );
		positionAttribute.name = morphGeoNode.attrName;

		preTransform.applyToBufferAttribute( positionAttribute );

		parentGeo.morphAttributes.position.push( positionAttribute );

	}

	// Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists
	function getNormals( NormalNode ) {

		var mappingType = NormalNode.MappingInformationType;
		var referenceType = NormalNode.ReferenceInformationType;
		var buffer = NormalNode.Normals.a;
		var indexBuffer = [];
		if ( referenceType === 'IndexToDirect' ) {

			if ( 'NormalIndex' in NormalNode ) {

				indexBuffer = NormalNode.NormalIndex.a;

			} else if ( 'NormalsIndex' in NormalNode ) {

				indexBuffer = NormalNode.NormalsIndex.a;

			}

		}

		return {
			dataSize: 3,
			buffer: buffer,
			indices: indexBuffer,
			mappingType: mappingType,
			referenceType: referenceType
		};

	}

	// Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists
	function getUVs( UVNode ) {

		var mappingType = UVNode.MappingInformationType;
		var referenceType = UVNode.ReferenceInformationType;
		var buffer = UVNode.UV.a;
		var indexBuffer = [];
		if ( referenceType === 'IndexToDirect' ) {

			indexBuffer = UVNode.UVIndex.a;

		}

		return {
			dataSize: 2,
			buffer: buffer,
			indices: indexBuffer,
			mappingType: mappingType,
			referenceType: referenceType
		};

	}

	// Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists
	function getColors( ColorNode ) {

		var mappingType = ColorNode.MappingInformationType;
		var referenceType = ColorNode.ReferenceInformationType;
		var buffer = ColorNode.Colors.a;
		var indexBuffer = [];
		if ( referenceType === 'IndexToDirect' ) {

			indexBuffer = ColorNode.ColorIndex.a;

		}

		return {
			dataSize: 4,
			buffer: buffer,
			indices: indexBuffer,
			mappingType: mappingType,
			referenceType: referenceType
		};

	}

	// Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists
	function getMaterials( MaterialNode ) {

		var mappingType = MaterialNode.MappingInformationType;
		var referenceType = MaterialNode.ReferenceInformationType;

		if ( mappingType === 'NoMappingInformation' ) {

			return {
				dataSize: 1,
				buffer: [ 0 ],
				indices: [ 0 ],
				mappingType: 'AllSame',
				referenceType: referenceType
			};

		}

		var materialIndexBuffer = MaterialNode.Materials.a;

		// Since materials are stored as indices, there's a bit of a mismatch between FBX and what
		// we expect.So we create an intermediate buffer that points to the index in the buffer,
		// for conforming with the other functions we've written for other data.
		var materialIndices = [];

		for ( var i = 0; i < materialIndexBuffer.length; ++ i ) {

			materialIndices.push( i );

		}

		return {
			dataSize: 1,
			buffer: materialIndexBuffer,
			indices: materialIndices,
			mappingType: mappingType,
			referenceType: referenceType
		};

	}

	var dataArray = [];

	function getData( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

		var index;

		switch ( infoObject.mappingType ) {

			case 'ByPolygonVertex' :
				index = polygonVertexIndex;
				break;
			case 'ByPolygon' :
				index = polygonIndex;
				break;
			case 'ByVertice' :
				index = vertexIndex;
				break;
			case 'AllSame' :
				index = infoObject.indices[ 0 ];
				break;
			default :
				console.warn( 'THREE.FBXLoader: unknown attribute mapping type ' + infoObject.mappingType );

		}

		if ( infoObject.referenceType === 'IndexToDirect' ) index = infoObject.indices[ index ];

		var from = index * infoObject.dataSize;
		var to = from + infoObject.dataSize;

		return slice( dataArray, infoObject.buffer, from, to );

	}

	// Generate a NurbGeometry from a node in FBXTree.Objects.Geometry
	function parseNurbsGeometry( geoNode ) {

		if ( THREE.NURBSCurve === undefined ) {

			console.error( 'THREE.FBXLoader: The loader relies on THREE.NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry.' );
			return new THREE.BufferGeometry();

		}

		var order = parseInt( geoNode.Order );

		if ( isNaN( order ) ) {

			console.error( 'THREE.FBXLoader: Invalid Order %s given for geometry ID: %s', geoNode.Order, geoNode.id );
			return new THREE.BufferGeometry();

		}

		var degree = order - 1;

		var knots = geoNode.KnotVector.a;
		var controlPoints = [];
		var pointsValues = geoNode.Points.a;

		for ( var i = 0, l = pointsValues.length; i < l; i += 4 ) {

			controlPoints.push( new THREE.Vector4().fromArray( pointsValues, i ) );

		}

		var startKnot, endKnot;

		if ( geoNode.Form === 'Closed' ) {

			controlPoints.push( controlPoints[ 0 ] );

		} else if ( geoNode.Form === 'Periodic' ) {

			startKnot = degree;
			endKnot = knots.length - 1 - startKnot;

			for ( var i = 0; i < degree; ++ i ) {

				controlPoints.push( controlPoints[ i ] );

			}

		}

		var curve = new THREE.NURBSCurve( degree, knots, controlPoints, startKnot, endKnot );
		var vertices = curve.getPoints( controlPoints.length * 7 );

		var positions = new Float32Array( vertices.length * 3 );

		vertices.forEach( function ( vertex, i ) {

			vertex.toArray( positions, i * 3 );

		} );

		var geometry = new THREE.BufferGeometry();
		geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

		return geometry;

	}

	// create the main THREE.Group() to be returned by the loader
	function parseScene( FBXTree, connections, skeletons, geometryMap, materialMap ) {

		var sceneGraph = new THREE.Group();

		var modelMap = parseModels( FBXTree, skeletons, geometryMap, materialMap, connections );

		var modelNodes = FBXTree.Objects.Model;

		modelMap.forEach( function ( model ) {

			var modelNode = modelNodes[ model.ID ];
			setLookAtProperties( FBXTree, model, modelNode, connections, sceneGraph );

			var parentConnections = connections.get( model.ID ).parents;

			parentConnections.forEach( function ( connection ) {

				var parent = modelMap.get( connection.ID );
				if ( parent !== undefined ) parent.add( model );

			} );

			if ( model.parent === null ) {

				sceneGraph.add( model );

			}


		} );

		bindSkeleton( FBXTree, skeletons, geometryMap, modelMap, connections );

		addAnimations( FBXTree, connections, sceneGraph );

		createAmbientLight( FBXTree, sceneGraph );

		return sceneGraph;

	}

	// parse nodes in FBXTree.Objects.Model
	function parseModels( FBXTree, skeletons, geometryMap, materialMap, connections ) {

		var modelMap = new Map();
		var modelNodes = FBXTree.Objects.Model;

		for ( var nodeID in modelNodes ) {

			var id = parseInt( nodeID );
			var node = modelNodes[ nodeID ];
			var relationships = connections.get( id );

			var model = buildSkeleton( relationships, skeletons, id, node.attrName );

			if ( ! model ) {

				switch ( node.attrType ) {

					case 'Camera':
						model = createCamera( FBXTree, relationships );
						break;
					case 'Light':
						model = createLight( FBXTree, relationships );
						break;
					case 'Mesh':
						model = createMesh( FBXTree, relationships, geometryMap, materialMap );
						break;
					case 'NurbsCurve':
						model = createCurve( relationships, geometryMap );
						break;
					case 'LimbNode': // usually associated with a Bone, however if a Bone was not created we'll make a Group instead
					case 'Null':
					default:
						model = new THREE.Group();
						break;

				}

				model.name = THREE.PropertyBinding.sanitizeNodeName( node.attrName );
				model.ID = id;

			}

			setModelTransforms( FBXTree, model, node );
			modelMap.set( id, model );

		}

		return modelMap;

	}

	function buildSkeleton( relationships, skeletons, id, name ) {

		var bone = null;

		relationships.parents.forEach( function ( parent ) {

			for ( var ID in skeletons ) {

				var skeleton = skeletons[ ID ];

				skeleton.rawBones.forEach( function ( rawBone, i ) {

					if ( rawBone.ID === parent.ID ) {

						var subBone = bone;
						bone = new THREE.Bone();
						bone.matrixWorld.copy( rawBone.transformLink );

						// set name and id here - otherwise in cases where "subBone" is created it will not have a name / id
						bone.name = THREE.PropertyBinding.sanitizeNodeName( name );
						bone.ID = id;

						skeleton.bones[ i ] = bone;

						// In cases where a bone is shared between multiple meshes
						// duplicate the bone here and and it as a child of the first bone
						if ( subBone !== null ) {

							bone.add( subBone );

						}

					}

				} );

			}

		} );

		return bone;

	}

	// create a THREE.PerspectiveCamera or THREE.OrthographicCamera
	function createCamera( FBXTree, relationships ) {

		var model;
		var cameraAttribute;

		relationships.children.forEach( function ( child ) {

			var attr = FBXTree.Objects.NodeAttribute[ child.ID ];

			if ( attr !== undefined ) {

				cameraAttribute = attr;

			}

		} );

		if ( cameraAttribute === undefined ) {

			model = new THREE.Object3D();

		} else {

			var type = 0;
			if ( cameraAttribute.CameraProjectionType !== undefined && cameraAttribute.CameraProjectionType.value === 1 ) {

				type = 1;

			}

			var nearClippingPlane = 1;
			if ( cameraAttribute.NearPlane !== undefined ) {

				nearClippingPlane = cameraAttribute.NearPlane.value / 1000;

			}

			var farClippingPlane = 1000;
			if ( cameraAttribute.FarPlane !== undefined ) {

				farClippingPlane = cameraAttribute.FarPlane.value / 1000;

			}


			var width = window.innerWidth;
			var height = window.innerHeight;

			if ( cameraAttribute.AspectWidth !== undefined && cameraAttribute.AspectHeight !== undefined ) {

				width = cameraAttribute.AspectWidth.value;
				height = cameraAttribute.AspectHeight.value;

			}

			var aspect = width / height;

			var fov = 45;
			if ( cameraAttribute.FieldOfView !== undefined ) {

				fov = cameraAttribute.FieldOfView.value;

			}

			var focalLength = cameraAttribute.FocalLength ? cameraAttribute.FocalLength.value : null;

			switch ( type ) {

				case 0: // Perspective
					model = new THREE.PerspectiveCamera( fov, aspect, nearClippingPlane, farClippingPlane );
					if ( focalLength !== null ) model.setFocalLength( focalLength );
					break;

				case 1: // Orthographic
					model = new THREE.OrthographicCamera( - width / 2, width / 2, height / 2, - height / 2, nearClippingPlane, farClippingPlane );
					break;

				default:
					console.warn( 'THREE.FBXLoader: Unknown camera type ' + type + '.' );
					model = new THREE.Object3D();
					break;

			}

		}

		return model;

	}

	// Create a THREE.DirectionalLight, THREE.PointLight or THREE.SpotLight
	function createLight( FBXTree, relationships ) {

		var model;
		var lightAttribute;

		relationships.children.forEach( function ( child ) {

			var attr = FBXTree.Objects.NodeAttribute[ child.ID ];

			if ( attr !== undefined ) {

				lightAttribute = attr;

			}

		} );

		if ( lightAttribute === undefined ) {

			model = new THREE.Object3D();

		} else {

			var type;

			// LightType can be undefined for Point lights
			if ( lightAttribute.LightType === undefined ) {

				type = 0;

			} else {

				type = lightAttribute.LightType.value;

			}

			var color = 0xffffff;

			if ( lightAttribute.Color !== undefined ) {

				color = new THREE.Color().fromArray( lightAttribute.Color.value );

			}

			var intensity = ( lightAttribute.Intensity === undefined ) ? 1 : lightAttribute.Intensity.value / 100;

			// light disabled
			if ( lightAttribute.CastLightOnObject !== undefined && lightAttribute.CastLightOnObject.value === 0 ) {

				intensity = 0;

			}

			var distance = 0;
			if ( lightAttribute.FarAttenuationEnd !== undefined ) {

				if ( lightAttribute.EnableFarAttenuation !== undefined && lightAttribute.EnableFarAttenuation.value === 0 ) {

					distance = 0;

				} else {

					distance = lightAttribute.FarAttenuationEnd.value;

				}

			}

			// TODO: could this be calculated linearly from FarAttenuationStart to FarAttenuationEnd?
			var decay = 1;

			switch ( type ) {

				case 0: // Point
					model = new THREE.PointLight( color, intensity, distance, decay );
					break;

				case 1: // Directional
					model = new THREE.DirectionalLight( color, intensity );
					break;

				case 2: // Spot
					var angle = Math.PI / 3;

					if ( lightAttribute.InnerAngle !== undefined ) {

						angle = THREE.Math.degToRad( lightAttribute.InnerAngle.value );

					}

					var penumbra = 0;
					if ( lightAttribute.OuterAngle !== undefined ) {

						// TODO: this is not correct - FBX calculates outer and inner angle in degrees
						// with OuterAngle > InnerAngle && OuterAngle <= Math.PI
						// while three.js uses a penumbra between (0, 1) to attenuate the inner angle
						penumbra = THREE.Math.degToRad( lightAttribute.OuterAngle.value );
						penumbra = Math.max( penumbra, 1 );

					}

					model = new THREE.SpotLight( color, intensity, distance, angle, penumbra, decay );
					break;

				default:
					console.warn( 'THREE.FBXLoader: Unknown light type ' + lightAttribute.LightType.value + ', defaulting to a THREE.PointLight.' );
					model = new THREE.PointLight( color, intensity );
					break;

			}

			if ( lightAttribute.CastShadows !== undefined && lightAttribute.CastShadows.value === 1 ) {

				model.castShadow = true;

			}

		}

		return model;

	}

	function createMesh( FBXTree, relationships, geometryMap, materialMap ) {

		var model;
		var geometry = null;
		var material = null;
		var materials = [];

		// get geometry and materials(s) from connections
		relationships.children.forEach( function ( child ) {

			if ( geometryMap.has( child.ID ) ) {

				geometry = geometryMap.get( child.ID );

			}

			if ( materialMap.has( child.ID ) ) {

				materials.push( materialMap.get( child.ID ) );

			}

		} );

		if ( materials.length > 1 ) {

			material = materials;

		} else if ( materials.length > 0 ) {

			material = materials[ 0 ];

		} else {

			material = new THREE.MeshPhongMaterial( { color: 0xcccccc } );
			materials.push( material );

		}

		if ( 'color' in geometry.attributes ) {

			materials.forEach( function ( material ) {

				material.vertexColors = THREE.VertexColors;

			} );

		}

		if ( geometry.FBX_Deformer ) {

			materials.forEach( function ( material ) {

				material.skinning = true;

			} );

			model = new THREE.SkinnedMesh( geometry, material );

		} else {

			model = new THREE.Mesh( geometry, material );

		}

		return model;

	}

	function createCurve( relationships, geometryMap ) {

		var geometry = relationships.children.reduce( function ( geo, child ) {

			if ( geometryMap.has( child.ID ) ) geo = geometryMap.get( child.ID );

			return geo;

		}, null );

		// FBX does not list materials for Nurbs lines, so we'll just put our own in here.
		var material = new THREE.LineBasicMaterial( { color: 0x3300ff, linewidth: 1 } );
		return new THREE.Line( geometry, material );

	}

	// Parse ambient color in FBXTree.GlobalSettings - if it's not set to black (default), create an ambient light
	function createAmbientLight( FBXTree, sceneGraph ) {

		if ( 'GlobalSettings' in FBXTree && 'AmbientColor' in FBXTree.GlobalSettings ) {

			var ambientColor = FBXTree.GlobalSettings.AmbientColor.value;
			var r = ambientColor[ 0 ];
			var g = ambientColor[ 1 ];
			var b = ambientColor[ 2 ];

			if ( r !== 0 || g !== 0 || b !== 0 ) {

				var color = new THREE.Color( r, g, b );
				sceneGraph.add( new THREE.AmbientLight( color, 1 ) );

			}

		}

	}

	function setLookAtProperties( FBXTree, model, modelNode, connections, sceneGraph ) {

		if ( 'LookAtProperty' in modelNode ) {

			var children = connections.get( model.ID ).children;

			children.forEach( function ( child ) {

				if ( child.relationship === 'LookAtProperty' ) {

					var lookAtTarget = FBXTree.Objects.Model[ child.ID ];

					if ( 'Lcl_Translation' in lookAtTarget ) {

						var pos = lookAtTarget.Lcl_Translation.value;

						// DirectionalLight, SpotLight
						if ( model.target !== undefined ) {

							model.target.position.fromArray( pos );
							sceneGraph.add( model.target );

						} else { // Cameras and other Object3Ds

							model.lookAt( new THREE.Vector3().fromArray( pos ) );

						}

					}

				}

			} );

		}

	}

	// parse the model node for transform details and apply them to the model
	function setModelTransforms( FBXTree, model, modelNode ) {

		// http://help.autodesk.com/view/FBX/2017/ENU/?guid=__cpp_ref_class_fbx_euler_html
		if ( 'RotationOrder' in modelNode ) {

			var enums = [
				'XYZ', // default
				'XZY',
				'YZX',
				'ZXY',
				'YXZ',
				'ZYX',
				'SphericXYZ',
			];

			var value = parseInt( modelNode.RotationOrder.value, 10 );

			if ( value > 0 && value < 6 ) {

				// model.rotation.order = enums[ value ];

				// Note: Euler order other than XYZ is currently not supported, so just display a warning for now
				console.warn( 'THREE.FBXLoader: unsupported Euler Order: %s. Currently only XYZ order is supported. Animations and rotations may be incorrect.', enums[ value ] );

			} else if ( value === 6 ) {

				console.warn( 'THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.' );

			}

		}

		if ( 'Lcl_Translation' in modelNode ) {

			model.position.fromArray( modelNode.Lcl_Translation.value );

		}

		if ( 'Lcl_Rotation' in modelNode ) {

			var rotation = modelNode.Lcl_Rotation.value.map( THREE.Math.degToRad );
			rotation.push( 'ZYX' );
			model.quaternion.setFromEuler( new THREE.Euler().fromArray( rotation ) );

		}

		if ( 'Lcl_Scaling' in modelNode ) {

			model.scale.fromArray( modelNode.Lcl_Scaling.value );

		}

		if ( 'PreRotation' in modelNode ) {

			var array = modelNode.PreRotation.value.map( THREE.Math.degToRad );
			array[ 3 ] = 'ZYX';

			var preRotations = new THREE.Euler().fromArray( array );

			preRotations = new THREE.Quaternion().setFromEuler( preRotations );
			model.quaternion.premultiply( preRotations );

		}

	}

	function bindSkeleton( FBXTree, skeletons, geometryMap, modelMap, connections ) {

		var bindMatrices = parsePoseNodes( FBXTree );

		for ( var ID in skeletons ) {

			var skeleton = skeletons[ ID ];

			var parents = connections.get( parseInt( skeleton.ID ) ).parents;

			parents.forEach( function ( parent ) {

				if ( geometryMap.has( parent.ID ) ) {

					var geoID = parent.ID;
					var geoRelationships = connections.get( geoID );

					geoRelationships.parents.forEach( function ( geoConnParent ) {

						if ( modelMap.has( geoConnParent.ID ) ) {

							var model = modelMap.get( geoConnParent.ID );

							model.bind( new THREE.Skeleton( skeleton.bones ), bindMatrices[ geoConnParent.ID ] );

						}

					} );

				}

			} );

		}

	}

	function parsePoseNodes( FBXTree ) {

		var bindMatrices = {};

		if ( 'Pose' in FBXTree.Objects ) {

			var BindPoseNode = FBXTree.Objects.Pose;

			for ( var nodeID in BindPoseNode ) {

				if ( BindPoseNode[ nodeID ].attrType === 'BindPose' ) {

					var poseNodes = BindPoseNode[ nodeID ].PoseNode;

					if ( Array.isArray( poseNodes ) ) {

						poseNodes.forEach( function ( poseNode ) {

							bindMatrices[ poseNode.Node ] = new THREE.Matrix4().fromArray( poseNode.Matrix.a );

						} );

					} else {

						bindMatrices[ poseNodes.Node ] = new THREE.Matrix4().fromArray( poseNodes.Matrix.a );

					}

				}

			}

		}

		return bindMatrices;

	}

	function parseAnimations( FBXTree, connections ) {

		// since the actual transformation data is stored in FBXTree.Objects.AnimationCurve,
		// if this is undefined we can safely assume there are no animations
		if ( FBXTree.Objects.AnimationCurve === undefined ) return undefined;

		var curveNodesMap = parseAnimationCurveNodes( FBXTree );

		parseAnimationCurves( FBXTree, connections, curveNodesMap );

		var layersMap = parseAnimationLayers( FBXTree, connections, curveNodesMap );
		var rawClips = parseAnimStacks( FBXTree, connections, layersMap );

		return rawClips;

	}

	// parse nodes in FBXTree.Objects.AnimationCurveNode
	// each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )
	// and is referenced by an AnimationLayer
	function parseAnimationCurveNodes( FBXTree ) {

		var rawCurveNodes = FBXTree.Objects.AnimationCurveNode;

		var curveNodesMap = new Map();

		for ( var nodeID in rawCurveNodes ) {

			var rawCurveNode = rawCurveNodes[ nodeID ];

			if ( rawCurveNode.attrName.match( /S|R|T/ ) !== null ) {

				var curveNode = {

					id: rawCurveNode.id,
					attr: rawCurveNode.attrName,
					curves: {},

				};

				curveNodesMap.set( curveNode.id, curveNode );

			}

		}

		return curveNodesMap;

	}

	// parse nodes in FBXTree.Objects.AnimationCurve and connect them up to
	// previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated
	// axis ( e.g. times and values of x rotation)
	function parseAnimationCurves( FBXTree, connections, curveNodesMap ) {

		var rawCurves = FBXTree.Objects.AnimationCurve;

		for ( var nodeID in rawCurves ) {

			var animationCurve = {

				id: rawCurves[ nodeID ].id,
				times: rawCurves[ nodeID ].KeyTime.a.map( convertFBXTimeToSeconds ),
				values: rawCurves[ nodeID ].KeyValueFloat.a,

			};

			var relationships = connections.get( animationCurve.id );

			if ( relationships !== undefined ) {

				var animationCurveID = relationships.parents[ 0 ].ID;
				var animationCurveRelationship = relationships.parents[ 0 ].relationship;

				if ( animationCurveRelationship.match( /X/ ) ) {

					curveNodesMap.get( animationCurveID ).curves[ 'x' ] = animationCurve;

				} else if ( animationCurveRelationship.match( /Y/ ) ) {

					curveNodesMap.get( animationCurveID ).curves[ 'y' ] = animationCurve;

				} else if ( animationCurveRelationship.match( /Z/ ) ) {

					curveNodesMap.get( animationCurveID ).curves[ 'z' ] = animationCurve;

				}

			}

		}

	}

	// parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references
	// to various AnimationCurveNodes and is referenced by an AnimationStack node
	// note: theoretically a stack can have multiple layers, however in practice there always seems to be one per stack
	function parseAnimationLayers( FBXTree, connections, curveNodesMap ) {

		var rawLayers = FBXTree.Objects.AnimationLayer;

		var layersMap = new Map();

		for ( var nodeID in rawLayers ) {

			var layerCurveNodes = [];

			var connection = connections.get( parseInt( nodeID ) );

			if ( connection !== undefined ) {

				// all the animationCurveNodes used in the layer
				var children = connection.children;

				children.forEach( function ( child, i ) {

					if ( curveNodesMap.has( child.ID ) ) {

						var curveNode = curveNodesMap.get( child.ID );

						// check that the curves are defined for at least one axis, otherwise ignore the curveNode
						if ( curveNode.curves.x !== undefined || curveNode.curves.y !== undefined || curveNode.curves.z !== undefined ) {

							if ( layerCurveNodes[ i ] === undefined ) {

								var modelID;

								connections.get( child.ID ).parents.forEach( function ( parent ) {

									if ( parent.relationship !== undefined ) modelID = parent.ID;

								} );

								var rawModel = FBXTree.Objects.Model[ modelID.toString() ];

								var node = {

									modelName: THREE.PropertyBinding.sanitizeNodeName( rawModel.attrName ),
									initialPosition: [ 0, 0, 0 ],
									initialRotation: [ 0, 0, 0 ],
									initialScale: [ 1, 1, 1 ],

								};

								if ( 'Lcl_Translation' in rawModel ) node.initialPosition = rawModel.Lcl_Translation.value;

								if ( 'Lcl_Rotation' in rawModel ) node.initialRotation = rawModel.Lcl_Rotation.value;

								if ( 'Lcl_Scaling' in rawModel ) node.initialScale = rawModel.Lcl_Scaling.value;

								// if the animated model is pre rotated, we'll have to apply the pre rotations to every
								// animation value as well
								if ( 'PreRotation' in rawModel ) node.preRotations = rawModel.PreRotation.value;

								layerCurveNodes[ i ] = node;

							}

							layerCurveNodes[ i ][ curveNode.attr ] = curveNode;

						}



					}

				} );

				layersMap.set( parseInt( nodeID ), layerCurveNodes );

			}

		}

		return layersMap;

	}

	// parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation
	// hierarchy. Each Stack node will be used to create a THREE.AnimationClip
	function parseAnimStacks( FBXTree, connections, layersMap ) {

		var rawStacks = FBXTree.Objects.AnimationStack;

		// connect the stacks (clips) up to the layers
		var rawClips = {};

		for ( var nodeID in rawStacks ) {

			var children = connections.get( parseInt( nodeID ) ).children;

			if ( children.length > 1 ) {

				// it seems like stacks will always be associated with a single layer. But just in case there are files
				// where there are multiple layers per stack, we'll display a warning
				console.warn( 'THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.' );

			}

			var layer = layersMap.get( children[ 0 ].ID );

			rawClips[ nodeID ] = {

				name: rawStacks[ nodeID ].attrName,
				layer: layer,

			};

		}

		return rawClips;

	}

	// take raw animation data from parseAnimations and connect it up to the loaded models
	function addAnimations( FBXTree, connections, sceneGraph ) {

		sceneGraph.animations = [];

		var rawClips = parseAnimations( FBXTree, connections );

		if ( rawClips === undefined ) return;


		for ( var key in rawClips ) {

			var rawClip = rawClips[ key ];

			var clip = addClip( rawClip );

			sceneGraph.animations.push( clip );

		}

	}

	function addClip( rawClip ) {

		var tracks = [];

		rawClip.layer.forEach( function ( rawTracks ) {

			tracks = tracks.concat( generateTracks( rawTracks ) );

		} );

		return new THREE.AnimationClip( rawClip.name, - 1, tracks );

	}

	function generateTracks( rawTracks ) {

		var tracks = [];

		if ( rawTracks.T !== undefined && Object.keys( rawTracks.T.curves ).length > 0 ) {

			var positionTrack = generateVectorTrack( rawTracks.modelName, rawTracks.T.curves, rawTracks.initialPosition, 'position' );
			if ( positionTrack !== undefined ) tracks.push( positionTrack );

		}

		if ( rawTracks.R !== undefined && Object.keys( rawTracks.R.curves ).length > 0 ) {

			var rotationTrack = generateRotationTrack( rawTracks.modelName, rawTracks.R.curves, rawTracks.initialRotation, rawTracks.preRotations );
			if ( rotationTrack !== undefined ) tracks.push( rotationTrack );

		}

		if ( rawTracks.S !== undefined && Object.keys( rawTracks.S.curves ).length > 0 ) {

			var scaleTrack = generateVectorTrack( rawTracks.modelName, rawTracks.S.curves, rawTracks.initialScale, 'scale' );
			if ( scaleTrack !== undefined ) tracks.push( scaleTrack );

		}

		return tracks;

	}

	function generateVectorTrack( modelName, curves, initialValue, type ) {

		var times = getTimesForAllAxes( curves );
		var values = getKeyframeTrackValues( times, curves, initialValue );

		return new THREE.VectorKeyframeTrack( modelName + '.' + type, times, values );

	}

	function generateRotationTrack( modelName, curves, initialValue, preRotations ) {

		if ( curves.x !== undefined ) {

			interpolateRotations( curves.x );
			curves.x.values = curves.x.values.map( THREE.Math.degToRad );

		}
		if ( curves.y !== undefined ) {

			interpolateRotations( curves.y );
			curves.y.values = curves.y.values.map( THREE.Math.degToRad );

		}
		if ( curves.z !== undefined ) {

			interpolateRotations( curves.z );
			curves.z.values = curves.z.values.map( THREE.Math.degToRad );

		}

		var times = getTimesForAllAxes( curves );
		var values = getKeyframeTrackValues( times, curves, initialValue );

		if ( preRotations !== undefined ) {

			preRotations = preRotations.map( THREE.Math.degToRad );
			preRotations.push( 'ZYX' );

			preRotations = new THREE.Euler().fromArray( preRotations );
			preRotations = new THREE.Quaternion().setFromEuler( preRotations );

		}

		var quaternion = new THREE.Quaternion();
		var euler = new THREE.Euler();

		var quaternionValues = [];

		for ( var i = 0; i < values.length; i += 3 ) {

			euler.set( values[ i ], values[ i + 1 ], values[ i + 2 ], 'ZYX' );

			quaternion.setFromEuler( euler );

			if ( preRotations !== undefined )quaternion.premultiply( preRotations );

			quaternion.toArray( quaternionValues, ( i / 3 ) * 4 );

		}

		return new THREE.QuaternionKeyframeTrack( modelName + '.quaternion', times, quaternionValues );

	}

	function getKeyframeTrackValues( times, curves, initialValue ) {

		var prevValue = initialValue;

		var values = [];

		var xIndex = - 1;
		var yIndex = - 1;
		var zIndex = - 1;

		times.forEach( function ( time ) {

			if ( curves.x ) xIndex = curves.x.times.indexOf( time );
			if ( curves.y ) yIndex = curves.y.times.indexOf( time );
			if ( curves.z ) zIndex = curves.z.times.indexOf( time );

			// if there is an x value defined for this frame, use that
			if ( xIndex !== - 1 ) {

				var xValue = curves.x.values[ xIndex ];
				values.push( xValue );
				prevValue[ 0 ] = xValue;

			} else {

				// otherwise use the x value from the previous frame
				values.push( prevValue[ 0 ] );

			}

			if ( yIndex !== - 1 ) {

				var yValue = curves.y.values[ yIndex ];
				values.push( yValue );
				prevValue[ 1 ] = yValue;

			} else {

				values.push( prevValue[ 1 ] );

			}

			if ( zIndex !== - 1 ) {

				var zValue = curves.z.values[ zIndex ];
				values.push( zValue );
				prevValue[ 2 ] = zValue;

			} else {

				values.push( prevValue[ 2 ] );

			}

		} );

		return values;

	}

	// For all animated objects, times are defined separately for each axis
	// Here we'll combine the times into one sorted array without duplicates
	function getTimesForAllAxes( curves ) {

		var times = [];

		// first join together the times for each axis, if defined
		if ( curves.x !== undefined ) times = times.concat( curves.x.times );
		if ( curves.y !== undefined ) times = times.concat( curves.y.times );
		if ( curves.z !== undefined ) times = times.concat( curves.z.times );

		// then sort them and remove duplicates
		times = times.sort( function ( a, b ) {

			return a - b;

		} ).filter( function ( elem, index, array ) {

			return array.indexOf( elem ) == index;

		} );

		return times;

	}

	// Rotations are defined as Euler angles which can have values  of any size
	// These will be converted to quaternions which don't support values greater than
	// PI, so we'll interpolate large rotations
	function interpolateRotations( curve ) {

		for ( var i = 1; i < curve.values.length; i ++ ) {

			var initialValue = curve.values[ i - 1 ];
			var valuesSpan = curve.values[ i ] - initialValue;

			var absoluteSpan = Math.abs( valuesSpan );

			if ( absoluteSpan >= 180 ) {

				var numSubIntervals = absoluteSpan / 180;

				var step = valuesSpan / numSubIntervals;
				var nextValue = initialValue + step;

				var initialTime = curve.times[ i - 1 ];
				var timeSpan = curve.times[ i ] - initialTime;
				var interval = timeSpan / numSubIntervals;
				var nextTime = initialTime + interval;

				var interpolatedTimes = [];
				var interpolatedValues = [];

				while ( nextTime < curve.times[ i ] ) {

					interpolatedTimes.push( nextTime );
					nextTime += interval;

					interpolatedValues.push( nextValue );
					nextValue += step;

				}

				curve.times = inject( curve.times, i, interpolatedTimes );
				curve.values = inject( curve.values, i, interpolatedValues );

			}

		}

	}

	// parse an FBX file in ASCII format
	function TextParser() {}

	Object.assign( TextParser.prototype, {

		getPrevNode: function () {

			return this.nodeStack[ this.currentIndent - 2 ];

		},

		getCurrentNode: function () {

			return this.nodeStack[ this.currentIndent - 1 ];

		},

		getCurrentProp: function () {

			return this.currentProp;

		},

		pushStack: function ( node ) {

			this.nodeStack.push( node );
			this.currentIndent += 1;

		},

		popStack: function () {

			this.nodeStack.pop();
			this.currentIndent -= 1;

		},

		setCurrentProp: function ( val, name ) {

			this.currentProp = val;
			this.currentPropName = name;

		},

		parse: function ( text ) {

			this.currentIndent = 0;
			this.allNodes = new FBXTree();
			this.nodeStack = [];
			this.currentProp = [];
			this.currentPropName = '';

			var self = this;

			var split = text.split( '\n' );

			split.forEach( function ( line, i ) {

				var matchComment = line.match( /^[\s\t]*;/ );
				var matchEmpty = line.match( /^[\s\t]*$/ );

				if ( matchComment || matchEmpty ) return;

				var matchBeginning = line.match( '^\\t{' + self.currentIndent + '}(\\w+):(.*){', '' );
				var matchProperty = line.match( '^\\t{' + ( self.currentIndent ) + '}(\\w+):[\\s\\t\\r\\n](.*)' );
				var matchEnd = line.match( '^\\t{' + ( self.currentIndent - 1 ) + '}}' );

				if ( matchBeginning ) {

					self.parseNodeBegin( line, matchBeginning );

				} else if ( matchProperty ) {

					self.parseNodeProperty( line, matchProperty, split[ ++ i ] );

				} else if ( matchEnd ) {

					self.popStack();

				} else if ( line.match( /^[^\s\t}]/ ) ) {

					// large arrays are split over multiple lines terminated with a ',' character
					// if this is encountered the line needs to be joined to the previous line
					self.parseNodePropertyContinued( line );

				}

			} );

			return this.allNodes;

		},

		parseNodeBegin: function ( line, property ) {

			var nodeName = property[ 1 ].trim().replace( /^"/, '' ).replace( /"$/, '' );

			var nodeAttrs = property[ 2 ].split( ',' ).map( function ( attr ) {

				return attr.trim().replace( /^"/, '' ).replace( /"$/, '' );

			} );

			var node = { name: nodeName };
			var attrs = this.parseNodeAttr( nodeAttrs );

			var currentNode = this.getCurrentNode();

			// a top node
			if ( this.currentIndent === 0 ) {

				this.allNodes.add( nodeName, node );

			} else { // a subnode

				// if the subnode already exists, append it
				if ( nodeName in currentNode ) {

				// special case Pose needs PoseNodes as an array
					if ( nodeName === 'PoseNode' ) {

						currentNode.PoseNode.push( node );

					} else if ( currentNode[ nodeName ].id !== undefined ) {

						currentNode[ nodeName ] = {};
						currentNode[ nodeName ][ currentNode[ nodeName ].id ] = currentNode[ nodeName ];

					}

					if ( attrs.id !== '' ) currentNode[ nodeName ][ attrs.id ] = node;

				} else if ( typeof attrs.id === 'number' ) {

					currentNode[ nodeName ] = {};
					currentNode[ nodeName ][ attrs.id ] = node;

				} else if ( nodeName !== 'Properties70' ) {

					if ( nodeName === 'PoseNode' )	currentNode[ nodeName ] = [ node ];
					else currentNode[ nodeName ] = node;

				}

			}

			if ( typeof attrs.id === 'number' ) node.id = attrs.id;
			if ( attrs.name !== '' ) node.attrName = attrs.name;
			if ( attrs.type !== '' ) node.attrType = attrs.type;

			this.pushStack( node );

		},

		parseNodeAttr: function ( attrs ) {

			var id = attrs[ 0 ];

			if ( attrs[ 0 ] !== '' ) {

				id = parseInt( attrs[ 0 ] );

				if ( isNaN( id ) ) {

					id = attrs[ 0 ];

				}

			}

			var name = '', type = '';

			if ( attrs.length > 1 ) {

				name = attrs[ 1 ].replace( /^(\w+)::/, '' );
				type = attrs[ 2 ];

			}

			return { id: id, name: name, type: type };

		},

		parseNodeProperty: function ( line, property, contentLine ) {

			var propName = property[ 1 ].replace( /^"/, '' ).replace( /"$/, '' ).trim();
			var propValue = property[ 2 ].replace( /^"/, '' ).replace( /"$/, '' ).trim();

			// for special case: base64 image data follows "Content: ," line
			//	Content: ,
			//	 "/9j/4RDaRXhpZgAATU0A..."
			if ( propName === 'Content' && propValue === ',' ) {

				propValue = contentLine.replace( /"/g, '' ).replace( /,$/, '' ).trim();

			}

			var currentNode = this.getCurrentNode();
			var parentName = currentNode.name;

			if ( parentName === 'Properties70' ) {

				this.parseNodeSpecialProperty( line, propName, propValue );
				return;

			}

			// Connections
			if ( propName === 'C' ) {

				var connProps = propValue.split( ',' ).slice( 1 );
				var from = parseInt( connProps[ 0 ] );
				var to = parseInt( connProps[ 1 ] );

				var rest = propValue.split( ',' ).slice( 3 );

				rest = rest.map( function ( elem ) {

					return elem.trim().replace( /^"/, '' );

				} );

				propName = 'connections';
				propValue = [ from, to ];
				append( propValue, rest );

				if ( currentNode[ propName ] === undefined ) {

					currentNode[ propName ] = [];

				}

			}

			// Node
			if ( propName === 'Node' ) currentNode.id = propValue;

			// connections
			if ( propName in currentNode && Array.isArray( currentNode[ propName ] ) ) {

				currentNode[ propName ].push( propValue );

			} else {

				if ( propName !== 'a' ) currentNode[ propName ] = propValue;
				else currentNode.a = propValue;

			}

			this.setCurrentProp( currentNode, propName );

			// convert string to array, unless it ends in ',' in which case more will be added to it
			if ( propName === 'a' && propValue.slice( - 1 ) !== ',' ) {

				currentNode.a = parseNumberArray( propValue );

			}

		},

		parseNodePropertyContinued: function ( line ) {

			var currentNode = this.getCurrentNode();

			currentNode.a += line;

			// if the line doesn't end in ',' we have reached the end of the property value
			// so convert the string to an array
			if ( line.slice( - 1 ) !== ',' ) {

				currentNode.a = parseNumberArray( currentNode.a );

			}

		},

		// parse "Property70"
		parseNodeSpecialProperty: function ( line, propName, propValue ) {

			// split this
			// P: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1
			// into array like below
			// ["Lcl Scaling", "Lcl Scaling", "", "A", "1,1,1" ]
			var props = propValue.split( '",' ).map( function ( prop ) {

				return prop.trim().replace( /^\"/, '' ).replace( /\s/, '_' );

			} );

			var innerPropName = props[ 0 ];
			var innerPropType1 = props[ 1 ];
			var innerPropType2 = props[ 2 ];
			var innerPropFlag = props[ 3 ];
			var innerPropValue = props[ 4 ];

			// cast values where needed, otherwise leave as strings
			switch ( innerPropType1 ) {

				case 'int':
				case 'enum':
				case 'bool':
				case 'ULongLong':
				case 'double':
				case 'Number':
				case 'FieldOfView':
					innerPropValue = parseFloat( innerPropValue );
					break;

				case 'Color':
				case 'ColorRGB':
				case 'Vector3D':
				case 'Lcl_Translation':
				case 'Lcl_Rotation':
				case 'Lcl_Scaling':
					innerPropValue = parseNumberArray( innerPropValue );
					break;

			}

			// CAUTION: these props must append to parent's parent
			this.getPrevNode()[ innerPropName ] = {

				'type': innerPropType1,
				'type2': innerPropType2,
				'flag': innerPropFlag,
				'value': innerPropValue

			};

			this.setCurrentProp( this.getPrevNode(), innerPropName );

		},

	} );

	// Parse an FBX file in Binary format
	function BinaryParser() {}

	Object.assign( BinaryParser.prototype, {

		parse: function ( buffer ) {

			var reader = new BinaryReader( buffer );
			reader.skip( 23 ); // skip magic 23 bytes

			var version = reader.getUint32();

			console.log( 'THREE.FBXLoader: FBX binary version: ' + version );

			var allNodes = new FBXTree();

			while ( ! this.endOfContent( reader ) ) {

				var node = this.parseNode( reader, version );
				if ( node !== null ) allNodes.add( node.name, node );

			}

			return allNodes;

		},

		// Check if reader has reached the end of content.
		endOfContent: function ( reader ) {

			// footer size: 160bytes + 16-byte alignment padding
			// - 16bytes: magic
			// - padding til 16-byte alignment (at least 1byte?)
			//	(seems like some exporters embed fixed 15 or 16bytes?)
			// - 4bytes: magic
			// - 4bytes: version
			// - 120bytes: zero
			// - 16bytes: magic
			if ( reader.size() % 16 === 0 ) {

				return ( ( reader.getOffset() + 160 + 16 ) & ~ 0xf ) >= reader.size();

			} else {

				return reader.getOffset() + 160 + 16 >= reader.size();

			}

		},

		// recursively parse nodes until the end of the file is reached
		parseNode: function ( reader, version ) {

			var node = {};

			// The first three data sizes depends on version.
			var endOffset = ( version >= 7500 ) ? reader.getUint64() : reader.getUint32();
			var numProperties = ( version >= 7500 ) ? reader.getUint64() : reader.getUint32();

			// note: do not remove this even if you get a linter warning as it moves the buffer forward
			var propertyListLen = ( version >= 7500 ) ? reader.getUint64() : reader.getUint32();

			var nameLen = reader.getUint8();
			var name = reader.getString( nameLen );

			// Regards this node as NULL-record if endOffset is zero
			if ( endOffset === 0 ) return null;

			var propertyList = [];

			for ( var i = 0; i < numProperties; i ++ ) {

				propertyList.push( this.parseProperty( reader ) );

			}

			// Regards the first three elements in propertyList as id, attrName, and attrType
			var id = propertyList.length > 0 ? propertyList[ 0 ] : '';
			var attrName = propertyList.length > 1 ? propertyList[ 1 ] : '';
			var attrType = propertyList.length > 2 ? propertyList[ 2 ] : '';

			// check if this node represents just a single property
			// like (name, 0) set or (name2, [0, 1, 2]) set of {name: 0, name2: [0, 1, 2]}
			node.singleProperty = ( numProperties === 1 && reader.getOffset() === endOffset ) ? true : false;

			while ( endOffset > reader.getOffset() ) {

				var subNode = this.parseNode( reader, version );

				if ( subNode !== null ) this.parseSubNode( name, node, subNode );

			}

			node.propertyList = propertyList; // raw property list used by parent

			if ( typeof id === 'number' ) node.id = id;
			if ( attrName !== '' ) node.attrName = attrName;
			if ( attrType !== '' ) node.attrType = attrType;
			if ( name !== '' ) node.name = name;

			return node;

		},

		parseSubNode: function ( name, node, subNode ) {

			// special case: child node is single property
			if ( subNode.singleProperty === true ) {

				var value = subNode.propertyList[ 0 ];

				if ( Array.isArray( value ) ) {

					node[ subNode.name ] = subNode;

					subNode.a = value;

				} else {

					node[ subNode.name ] = value;

				}

			} else if ( name === 'Connections' && subNode.name === 'C' ) {

				var array = [];

				subNode.propertyList.forEach( function ( property, i ) {

					// first Connection is FBX type (OO, OP, etc.). We'll discard these
					if ( i !== 0 ) array.push( property );

				} );

				if ( node.connections === undefined ) {

					node.connections = [];

				}

				node.connections.push( array );

			} else if ( subNode.name === 'Properties70' ) {

				var keys = Object.keys( subNode );

				keys.forEach( function ( key ) {

					node[ key ] = subNode[ key ];

				} );

			} else if ( name === 'Properties70' && subNode.name === 'P' ) {

				var innerPropName = subNode.propertyList[ 0 ];
				var innerPropType1 = subNode.propertyList[ 1 ];
				var innerPropType2 = subNode.propertyList[ 2 ];
				var innerPropFlag = subNode.propertyList[ 3 ];
				var innerPropValue;

				if ( innerPropName.indexOf( 'Lcl ' ) === 0 ) innerPropName = innerPropName.replace( 'Lcl ', 'Lcl_' );
				if ( innerPropType1.indexOf( 'Lcl ' ) === 0 ) innerPropType1 = innerPropType1.replace( 'Lcl ', 'Lcl_' );

				if ( innerPropType1 === 'Color' || innerPropType1 === 'ColorRGB' || innerPropType1 === 'Vector' || innerPropType1 === 'Vector3D' || innerPropType1.indexOf( 'Lcl_' ) === 0 ) {

					innerPropValue = [
						subNode.propertyList[ 4 ],
						subNode.propertyList[ 5 ],
						subNode.propertyList[ 6 ]
					];

				} else {

					innerPropValue = subNode.propertyList[ 4 ];

				}

				// this will be copied to parent, see above
				node[ innerPropName ] = {

					'type': innerPropType1,
					'type2': innerPropType2,
					'flag': innerPropFlag,
					'value': innerPropValue

				};

			} else if ( node[ subNode.name ] === undefined ) {

				if ( typeof subNode.id === 'number' ) {

					node[ subNode.name ] = {};
					node[ subNode.name ][ subNode.id ] = subNode;

				} else {

					node[ subNode.name ] = subNode;

				}

			} else {

				if ( subNode.name === 'PoseNode' ) {

					if ( ! Array.isArray( node[ subNode.name ] ) ) {

						node[ subNode.name ] = [ node[ subNode.name ] ];

					}

					node[ subNode.name ].push( subNode );

				} else if ( node[ subNode.name ][ subNode.id ] === undefined ) {

					node[ subNode.name ][ subNode.id ] = subNode;

				}

			}

		},

		parseProperty: function ( reader ) {

			var type = reader.getString( 1 );

			switch ( type ) {

				case 'C':
					return reader.getBoolean();

				case 'D':
					return reader.getFloat64();

				case 'F':
					return reader.getFloat32();

				case 'I':
					return reader.getInt32();

				case 'L':
					return reader.getInt64();

				case 'R':
					var length = reader.getUint32();
					return reader.getArrayBuffer( length );

				case 'S':
					var length = reader.getUint32();
					return reader.getString( length );

				case 'Y':
					return reader.getInt16();

				case 'b':
				case 'c':
				case 'd':
				case 'f':
				case 'i':
				case 'l':

					var arrayLength = reader.getUint32();
					var encoding = reader.getUint32(); // 0: non-compressed, 1: compressed
					var compressedLength = reader.getUint32();

					if ( encoding === 0 ) {

						switch ( type ) {

							case 'b':
							case 'c':
								return reader.getBooleanArray( arrayLength );

							case 'd':
								return reader.getFloat64Array( arrayLength );

							case 'f':
								return reader.getFloat32Array( arrayLength );

							case 'i':
								return reader.getInt32Array( arrayLength );

							case 'l':
								return reader.getInt64Array( arrayLength );

						}

					}

					if ( window.Zlib === undefined ) {

						console.error( 'THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js' );

					}

					var inflate = new Zlib.Inflate( new Uint8Array( reader.getArrayBuffer( compressedLength ) ) ); // eslint-disable-line no-undef
					var reader2 = new BinaryReader( inflate.decompress().buffer );

					switch ( type ) {

						case 'b':
						case 'c':
							return reader2.getBooleanArray( arrayLength );

						case 'd':
							return reader2.getFloat64Array( arrayLength );

						case 'f':
							return reader2.getFloat32Array( arrayLength );

						case 'i':
							return reader2.getInt32Array( arrayLength );

						case 'l':
							return reader2.getInt64Array( arrayLength );

					}

				default:
					throw new Error( 'THREE.FBXLoader: Unknown property type ' + type );

			}

		}

	} );


	function BinaryReader( buffer, littleEndian ) {

		this.dv = new DataView( buffer );
		this.offset = 0;
		this.littleEndian = ( littleEndian !== undefined ) ? littleEndian : true;

	}

	Object.assign( BinaryReader.prototype, {

		getOffset: function () {

			return this.offset;

		},

		size: function () {

			return this.dv.buffer.byteLength;

		},

		skip: function ( length ) {

			this.offset += length;

		},

		// seems like true/false representation depends on exporter.
		// true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
		// then sees LSB.
		getBoolean: function () {

			return ( this.getUint8() & 1 ) === 1;

		},

		getBooleanArray: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getBoolean() );

			}

			return a;

		},

		getUint8: function () {

			var value = this.dv.getUint8( this.offset );
			this.offset += 1;
			return value;

		},

		getInt16: function () {

			var value = this.dv.getInt16( this.offset, this.littleEndian );
			this.offset += 2;
			return value;

		},

		getInt32: function () {

			var value = this.dv.getInt32( this.offset, this.littleEndian );
			this.offset += 4;
			return value;

		},

		getInt32Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getInt32() );

			}

			return a;

		},

		getUint32: function () {

			var value = this.dv.getUint32( this.offset, this.littleEndian );
			this.offset += 4;
			return value;

		},

		// JavaScript doesn't support 64-bit integer so calculate this here
		// 1 << 32 will return 1 so using multiply operation instead here.
		// There's a possibility that this method returns wrong value if the value
		// is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
		// TODO: safely handle 64-bit integer
		getInt64: function () {

			var low, high;

			if ( this.littleEndian ) {

				low = this.getUint32();
				high = this.getUint32();

			} else {

				high = this.getUint32();
				low = this.getUint32();

			}

			// calculate negative value
			if ( high & 0x80000000 ) {

				high = ~ high & 0xFFFFFFFF;
				low = ~ low & 0xFFFFFFFF;

				if ( low === 0xFFFFFFFF ) high = ( high + 1 ) & 0xFFFFFFFF;

				low = ( low + 1 ) & 0xFFFFFFFF;

				return - ( high * 0x100000000 + low );

			}

			return high * 0x100000000 + low;

		},

		getInt64Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getInt64() );

			}

			return a;

		},

		// Note: see getInt64() comment
		getUint64: function () {

			var low, high;

			if ( this.littleEndian ) {

				low = this.getUint32();
				high = this.getUint32();

			} else {

				high = this.getUint32();
				low = this.getUint32();

			}

			return high * 0x100000000 + low;

		},

		getFloat32: function () {

			var value = this.dv.getFloat32( this.offset, this.littleEndian );
			this.offset += 4;
			return value;

		},

		getFloat32Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getFloat32() );

			}

			return a;

		},

		getFloat64: function () {

			var value = this.dv.getFloat64( this.offset, this.littleEndian );
			this.offset += 8;
			return value;

		},

		getFloat64Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getFloat64() );

			}

			return a;

		},

		getArrayBuffer: function ( size ) {

			var value = this.dv.buffer.slice( this.offset, this.offset + size );
			this.offset += size;
			return value;

		},

		getString: function ( size ) {

			var a = new Uint8Array( size );

			for ( var i = 0; i < size; i ++ ) {

				a[ i ] = this.getUint8();

			}

			var nullByte = a.indexOf( 0 );
			if ( nullByte >= 0 ) a = a.slice( 0, nullByte );

			return THREE.LoaderUtils.decodeText( a );

		}

	} );

	// FBXTree holds a representation of the FBX data, returned by the TextParser ( FBX ASCII format)
	// and BinaryParser( FBX Binary format)
	function FBXTree() {}

	Object.assign( FBXTree.prototype, {

		add: function ( key, val ) {

			this[ key ] = val;

		},

	} );

	function isFbxFormatBinary( buffer ) {

		var CORRECT = 'Kaydara FBX Binary  \0';

		return buffer.byteLength >= CORRECT.length && CORRECT === convertArrayBufferToString( buffer, 0, CORRECT.length );

	}

	function isFbxFormatASCII( text ) {

		var CORRECT = [ 'K', 'a', 'y', 'd', 'a', 'r', 'a', '\\', 'F', 'B', 'X', '\\', 'B', 'i', 'n', 'a', 'r', 'y', '\\', '\\' ];

		var cursor = 0;

		function read( offset ) {

			var result = text[ offset - 1 ];
			text = text.slice( cursor + offset );
			cursor ++;
			return result;

		}

		for ( var i = 0; i < CORRECT.length; ++ i ) {

			var num = read( 1 );
			if ( num === CORRECT[ i ] ) {

				return false;

			}

		}

		return true;

	}

	function getFbxVersion( text ) {

		var versionRegExp = /FBXVersion: (\d+)/;
		var match = text.match( versionRegExp );
		if ( match ) {

			var version = parseInt( match[ 1 ] );
			return version;

		}
		throw new Error( 'THREE.FBXLoader: Cannot find the version number for the file given.' );

	}

	// Converts FBX ticks into real time seconds.
	function convertFBXTimeToSeconds( time ) {

		return time / 46186158000;

	}


	// Parses comma separated list of numbers and returns them an array.
	// Used internally by the TextParser
	function parseNumberArray( value ) {

		var array = value.split( ',' ).map( function ( val ) {

			return parseFloat( val );

		} );

		return array;

	}

	function convertArrayBufferToString( buffer, from, to ) {

		if ( from === undefined ) from = 0;
		if ( to === undefined ) to = buffer.byteLength;

		return THREE.LoaderUtils.decodeText( new Uint8Array( buffer, from, to ) );

	}

	function append( a, b ) {

		for ( var i = 0, j = a.length, l = b.length; i < l; i ++, j ++ ) {

			a[ j ] = b[ i ];

		}

	}

	function slice( a, b, from, to ) {

		for ( var i = from, j = 0; i < to; i ++, j ++ ) {

			a[ j ] = b[ i ];

		}

		return a;

	}

	// inject array a2 into array a1 at index
	function inject( a1, index, a2 ) {

		return a1.slice( 0, index ).concat( a2 ).concat( a1.slice( index ) );

	}

} )();


/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */(function() {'use strict';var l=void 0,aa=this;function r(c,d){var a=c.split("."),b=aa;!(a[0]in b)&&b.execScript&&b.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)!a.length&&d!==l?b[e]=d:b=b[e]?b[e]:b[e]={}};var t="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;function v(c){var d=c.length,a=0,b=Number.POSITIVE_INFINITY,e,f,g,h,k,m,n,p,s,x;for(p=0;p<d;++p)c[p]>a&&(a=c[p]),c[p]<b&&(b=c[p]);e=1<<a;f=new (t?Uint32Array:Array)(e);g=1;h=0;for(k=2;g<=a;){for(p=0;p<d;++p)if(c[p]===g){m=0;n=h;for(s=0;s<g;++s)m=m<<1|n&1,n>>=1;x=g<<16|p;for(s=m;s<e;s+=k)f[s]=x;++h}++g;h<<=1;k<<=1}return[f,a,b]};function w(c,d){this.g=[];this.h=32768;this.d=this.f=this.a=this.l=0;this.input=t?new Uint8Array(c):c;this.m=!1;this.i=y;this.r=!1;if(d||!(d={}))d.index&&(this.a=d.index),d.bufferSize&&(this.h=d.bufferSize),d.bufferType&&(this.i=d.bufferType),d.resize&&(this.r=d.resize);switch(this.i){case A:this.b=32768;this.c=new (t?Uint8Array:Array)(32768+this.h+258);break;case y:this.b=0;this.c=new (t?Uint8Array:Array)(this.h);this.e=this.z;this.n=this.v;this.j=this.w;break;default:throw Error("invalid inflate mode");
}}var A=0,y=1,B={t:A,s:y};
w.prototype.k=function(){for(;!this.m;){var c=C(this,3);c&1&&(this.m=!0);c>>>=1;switch(c){case 0:var d=this.input,a=this.a,b=this.c,e=this.b,f=d.length,g=l,h=l,k=b.length,m=l;this.d=this.f=0;if(a+1>=f)throw Error("invalid uncompressed block header: LEN");g=d[a++]|d[a++]<<8;if(a+1>=f)throw Error("invalid uncompressed block header: NLEN");h=d[a++]|d[a++]<<8;if(g===~h)throw Error("invalid uncompressed block header: length verify");if(a+g>d.length)throw Error("input buffer is broken");switch(this.i){case A:for(;e+
g>b.length;){m=k-e;g-=m;if(t)b.set(d.subarray(a,a+m),e),e+=m,a+=m;else for(;m--;)b[e++]=d[a++];this.b=e;b=this.e();e=this.b}break;case y:for(;e+g>b.length;)b=this.e({p:2});break;default:throw Error("invalid inflate mode");}if(t)b.set(d.subarray(a,a+g),e),e+=g,a+=g;else for(;g--;)b[e++]=d[a++];this.a=a;this.b=e;this.c=b;break;case 1:this.j(ba,ca);break;case 2:for(var n=C(this,5)+257,p=C(this,5)+1,s=C(this,4)+4,x=new (t?Uint8Array:Array)(D.length),S=l,T=l,U=l,u=l,M=l,F=l,z=l,q=l,V=l,q=0;q<s;++q)x[D[q]]=
C(this,3);if(!t){q=s;for(s=x.length;q<s;++q)x[D[q]]=0}S=v(x);u=new (t?Uint8Array:Array)(n+p);q=0;for(V=n+p;q<V;)switch(M=E(this,S),M){case 16:for(z=3+C(this,2);z--;)u[q++]=F;break;case 17:for(z=3+C(this,3);z--;)u[q++]=0;F=0;break;case 18:for(z=11+C(this,7);z--;)u[q++]=0;F=0;break;default:F=u[q++]=M}T=t?v(u.subarray(0,n)):v(u.slice(0,n));U=t?v(u.subarray(n)):v(u.slice(n));this.j(T,U);break;default:throw Error("unknown BTYPE: "+c);}}return this.n()};
var G=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],D=t?new Uint16Array(G):G,H=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],I=t?new Uint16Array(H):H,J=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],K=t?new Uint8Array(J):J,L=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],da=t?new Uint16Array(L):L,ea=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,
13,13],N=t?new Uint8Array(ea):ea,O=new (t?Uint8Array:Array)(288),P,fa;P=0;for(fa=O.length;P<fa;++P)O[P]=143>=P?8:255>=P?9:279>=P?7:8;var ba=v(O),Q=new (t?Uint8Array:Array)(30),R,ga;R=0;for(ga=Q.length;R<ga;++R)Q[R]=5;var ca=v(Q);function C(c,d){for(var a=c.f,b=c.d,e=c.input,f=c.a,g=e.length,h;b<d;){if(f>=g)throw Error("input buffer is broken");a|=e[f++]<<b;b+=8}h=a&(1<<d)-1;c.f=a>>>d;c.d=b-d;c.a=f;return h}
function E(c,d){for(var a=c.f,b=c.d,e=c.input,f=c.a,g=e.length,h=d[0],k=d[1],m,n;b<k&&!(f>=g);)a|=e[f++]<<b,b+=8;m=h[a&(1<<k)-1];n=m>>>16;if(n>b)throw Error("invalid code length: "+n);c.f=a>>n;c.d=b-n;c.a=f;return m&65535}
w.prototype.j=function(c,d){var a=this.c,b=this.b;this.o=c;for(var e=a.length-258,f,g,h,k;256!==(f=E(this,c));)if(256>f)b>=e&&(this.b=b,a=this.e(),b=this.b),a[b++]=f;else{g=f-257;k=I[g];0<K[g]&&(k+=C(this,K[g]));f=E(this,d);h=da[f];0<N[f]&&(h+=C(this,N[f]));b>=e&&(this.b=b,a=this.e(),b=this.b);for(;k--;)a[b]=a[b++-h]}for(;8<=this.d;)this.d-=8,this.a--;this.b=b};
w.prototype.w=function(c,d){var a=this.c,b=this.b;this.o=c;for(var e=a.length,f,g,h,k;256!==(f=E(this,c));)if(256>f)b>=e&&(a=this.e(),e=a.length),a[b++]=f;else{g=f-257;k=I[g];0<K[g]&&(k+=C(this,K[g]));f=E(this,d);h=da[f];0<N[f]&&(h+=C(this,N[f]));b+k>e&&(a=this.e(),e=a.length);for(;k--;)a[b]=a[b++-h]}for(;8<=this.d;)this.d-=8,this.a--;this.b=b};
w.prototype.e=function(){var c=new (t?Uint8Array:Array)(this.b-32768),d=this.b-32768,a,b,e=this.c;if(t)c.set(e.subarray(32768,c.length));else{a=0;for(b=c.length;a<b;++a)c[a]=e[a+32768]}this.g.push(c);this.l+=c.length;if(t)e.set(e.subarray(d,d+32768));else for(a=0;32768>a;++a)e[a]=e[d+a];this.b=32768;return e};
w.prototype.z=function(c){var d,a=this.input.length/this.a+1|0,b,e,f,g=this.input,h=this.c;c&&("number"===typeof c.p&&(a=c.p),"number"===typeof c.u&&(a+=c.u));2>a?(b=(g.length-this.a)/this.o[2],f=258*(b/2)|0,e=f<h.length?h.length+f:h.length<<1):e=h.length*a;t?(d=new Uint8Array(e),d.set(h)):d=h;return this.c=d};
w.prototype.n=function(){var c=0,d=this.c,a=this.g,b,e=new (t?Uint8Array:Array)(this.l+(this.b-32768)),f,g,h,k;if(0===a.length)return t?this.c.subarray(32768,this.b):this.c.slice(32768,this.b);f=0;for(g=a.length;f<g;++f){b=a[f];h=0;for(k=b.length;h<k;++h)e[c++]=b[h]}f=32768;for(g=this.b;f<g;++f)e[c++]=d[f];this.g=[];return this.buffer=e};
w.prototype.v=function(){var c,d=this.b;t?this.r?(c=new Uint8Array(d),c.set(this.c.subarray(0,d))):c=this.c.subarray(0,d):(this.c.length>d&&(this.c.length=d),c=this.c);return this.buffer=c};function W(c,d){var a,b;this.input=c;this.a=0;if(d||!(d={}))d.index&&(this.a=d.index),d.verify&&(this.A=d.verify);a=c[this.a++];b=c[this.a++];switch(a&15){case ha:this.method=ha;break;default:throw Error("unsupported compression method");}if(0!==((a<<8)+b)%31)throw Error("invalid fcheck flag:"+((a<<8)+b)%31);if(b&32)throw Error("fdict flag is not supported");this.q=new w(c,{index:this.a,bufferSize:d.bufferSize,bufferType:d.bufferType,resize:d.resize})}
W.prototype.k=function(){var c=this.input,d,a;d=this.q.k();this.a=this.q.a;if(this.A){a=(c[this.a++]<<24|c[this.a++]<<16|c[this.a++]<<8|c[this.a++])>>>0;var b=d;if("string"===typeof b){var e=b.split(""),f,g;f=0;for(g=e.length;f<g;f++)e[f]=(e[f].charCodeAt(0)&255)>>>0;b=e}for(var h=1,k=0,m=b.length,n,p=0;0<m;){n=1024<m?1024:m;m-=n;do h+=b[p++],k+=h;while(--n);h%=65521;k%=65521}if(a!==(k<<16|h)>>>0)throw Error("invalid adler-32 checksum");}return d};var ha=8;r("Zlib.Inflate",W);r("Zlib.Inflate.prototype.decompress",W.prototype.k);var X={ADAPTIVE:B.s,BLOCK:B.t},Y,Z,$,ia;if(Object.keys)Y=Object.keys(X);else for(Z in Y=[],$=0,X)Y[$++]=Z;$=0;for(ia=Y.length;$<ia;++$)Z=Y[$],r("Zlib.Inflate.BufferType."+Z,X[Z]);}).call(this);


/**
 * @author jbouny / https://github.com/jbouny
 *
 * Work based on :
 * @author Slayvin / http://slayvin.net : Flat mirror for three.js
 * @author Stemkoski / http://www.adelphi.edu/~stemkoski : An implementation of water shader based on the flat mirror
 * @author Jonas Wagner / http://29a.ch/ && http://29a.ch/slides/2012/webglwater/ : Water shader explanations in WebGL
 */

THREE.Water = function ( geometry, options ) {

	THREE.Mesh.call( this, geometry );

	var scope = this;

	options = options || {};

	var textureWidth = options.textureWidth !== undefined ? options.textureWidth : 512;
	var textureHeight = options.textureHeight !== undefined ? options.textureHeight : 512;

	var clipBias = options.clipBias !== undefined ? options.clipBias : 0.0;
	var alpha = options.alpha !== undefined ? options.alpha : 1.0;
	var time = options.time !== undefined ? options.time : 0.0;
	var normalSampler = options.waterNormals !== undefined ? options.waterNormals : null;
	var sunDirection = options.sunDirection !== undefined ? options.sunDirection : new THREE.Vector3( 0.70707, 0.70707, 0.0 );
	var sunColor = new THREE.Color( options.sunColor !== undefined ? options.sunColor : 0xffffff );
	var waterColor = new THREE.Color( options.waterColor !== undefined ? options.waterColor : 0x7F7F7F );
	var eye = options.eye !== undefined ? options.eye : new THREE.Vector3( 0, 0, 0 );
	var distortionScale = options.distortionScale !== undefined ? options.distortionScale : 20.0;
	var side = options.side !== undefined ? options.side : THREE.FrontSide;
	var fog = options.fog !== undefined ? options.fog : false;

	//

	var mirrorPlane = new THREE.Plane();
	var normal = new THREE.Vector3();
	var mirrorWorldPosition = new THREE.Vector3();
	var cameraWorldPosition = new THREE.Vector3();
	var rotationMatrix = new THREE.Matrix4();
	var lookAtPosition = new THREE.Vector3( 0, 0, - 1 );
	var clipPlane = new THREE.Vector4();

	var view = new THREE.Vector3();
	var target = new THREE.Vector3();
	var q = new THREE.Vector4();

	var textureMatrix = new THREE.Matrix4();

	var mirrorCamera = new THREE.PerspectiveCamera();

	var parameters = {
		minFilter: THREE.LinearFilter,
		magFilter: THREE.LinearFilter,
		format: THREE.RGBFormat,
		stencilBuffer: false
	};

	var renderTarget = new THREE.WebGLRenderTarget( textureWidth, textureHeight, parameters );

	if ( ! THREE.Math.isPowerOfTwo( textureWidth ) || ! THREE.Math.isPowerOfTwo( textureHeight ) ) {

		renderTarget.texture.generateMipmaps = false;

	}

	var mirrorShader = {

		uniforms: THREE.UniformsUtils.merge( [
			THREE.UniformsLib[ 'fog' ],
			THREE.UniformsLib[ 'lights' ],
			{
				normalSampler: { value: null },
				mirrorSampler: { value: null },
				alpha: { value: 1.0 },
				time: { value: 0.0 },
				size: { value: 1.0 },
				distortionScale: { value: 20.0 },
				textureMatrix: { value: new THREE.Matrix4() },
				sunColor: { value: new THREE.Color( 0x7F7F7F ) },
				sunDirection: { value: new THREE.Vector3( 0.70707, 0.70707, 0 ) },
				eye: { value: new THREE.Vector3() },
				waterColor: { value: new THREE.Color( 0x555555 ) }
			}
		] ),

		vertexShader: [
			'uniform mat4 textureMatrix;',
			'uniform float time;',

			'varying vec4 mirrorCoord;',
			'varying vec4 worldPosition;',

			THREE.ShaderChunk[ 'fog_pars_vertex' ],
			THREE.ShaderChunk[ 'shadowmap_pars_vertex' ],

			'void main() {',
			'	mirrorCoord = modelMatrix * vec4( position, 1.0 );',
			'	worldPosition = mirrorCoord.xyzw;',
			'	mirrorCoord = textureMatrix * mirrorCoord;',
			'	vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );',
			'	gl_Position = projectionMatrix * mvPosition;',

			THREE.ShaderChunk[ 'fog_vertex' ],
			THREE.ShaderChunk[ 'shadowmap_vertex' ],

			'}'
		].join( '\n' ),

		fragmentShader: [
			'uniform sampler2D mirrorSampler;',
			'uniform float alpha;',
			'uniform float time;',
			'uniform float size;',
			'uniform float distortionScale;',
			'uniform sampler2D normalSampler;',
			'uniform vec3 sunColor;',
			'uniform vec3 sunDirection;',
			'uniform vec3 eye;',
			'uniform vec3 waterColor;',

			'varying vec4 mirrorCoord;',
			'varying vec4 worldPosition;',

			'vec4 getNoise( vec2 uv ) {',
			'	vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);',
			'	vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );',
			'	vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );',
			'	vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );',
			'	vec4 noise = texture2D( normalSampler, uv0 ) +',
			'		texture2D( normalSampler, uv1 ) +',
			'		texture2D( normalSampler, uv2 ) +',
			'		texture2D( normalSampler, uv3 );',
			'	return noise * 0.5 - 1.0;',
			'}',

			'void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {',
			'	vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );',
			'	float direction = max( 0.0, dot( eyeDirection, reflection ) );',
			'	specularColor += pow( direction, shiny ) * sunColor * spec;',
			'	diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;',
			'}',

			THREE.ShaderChunk[ 'common' ],
			THREE.ShaderChunk[ 'packing' ],
			THREE.ShaderChunk[ 'bsdfs' ],
			THREE.ShaderChunk[ 'fog_pars_fragment' ],
			THREE.ShaderChunk[ 'lights_pars_begin' ],
			THREE.ShaderChunk[ 'shadowmap_pars_fragment' ],
			THREE.ShaderChunk[ 'shadowmask_pars_fragment' ],

			'void main() {',
			'	vec4 noise = getNoise( worldPosition.xz * size );',
			'	vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );',

			'	vec3 diffuseLight = vec3(0.0);',
			'	vec3 specularLight = vec3(0.0);',

			'	vec3 worldToEye = eye-worldPosition.xyz;',
			'	vec3 eyeDirection = normalize( worldToEye );',
			'	sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );',

			'	float distance = length(worldToEye);',

			'	vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;',
			'	vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.z + distortion ) );',

			'	float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );',
			'	float rf0 = 0.3;',
			'	float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );',
			'	vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;',
			'	vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);',
			'	vec3 outgoingLight = albedo;',
			'	gl_FragColor = vec4( outgoingLight, alpha );',

			THREE.ShaderChunk[ 'tonemapping_fragment' ],
			THREE.ShaderChunk[ 'fog_fragment' ],

			'}'
		].join( '\n' )

	};

	var material = new THREE.ShaderMaterial( {
		fragmentShader: mirrorShader.fragmentShader,
		vertexShader: mirrorShader.vertexShader,
		uniforms: THREE.UniformsUtils.clone( mirrorShader.uniforms ),
	//	transparent: true,
		lights: true,
		side: side,
		fog: fog
	} );

	material.uniforms.mirrorSampler.value = renderTarget.texture;
	material.uniforms.textureMatrix.value = textureMatrix;
	material.uniforms.alpha.value = alpha;
	material.uniforms.time.value = time;
	material.uniforms.normalSampler.value = normalSampler;
	material.uniforms.sunColor.value = sunColor;
	material.uniforms.waterColor.value = waterColor;
	material.uniforms.sunDirection.value = sunDirection;
	material.uniforms.distortionScale.value = distortionScale;

	material.uniforms.eye.value = eye;

	scope.material = material;

	scope.onBeforeRender = function ( renderer, scene, camera ) {

		mirrorWorldPosition.setFromMatrixPosition( scope.matrixWorld );
		cameraWorldPosition.setFromMatrixPosition( camera.matrixWorld );

		rotationMatrix.extractRotation( scope.matrixWorld );

		normal.set( 0, 0, 1 );
		normal.applyMatrix4( rotationMatrix );

		view.subVectors( mirrorWorldPosition, cameraWorldPosition );

		// Avoid rendering when mirror is facing away

		if ( view.dot( normal ) > 0 ) return;

		view.reflect( normal ).negate();
		view.add( mirrorWorldPosition );

		rotationMatrix.extractRotation( camera.matrixWorld );

		lookAtPosition.set( 0, 0, - 1 );
		lookAtPosition.applyMatrix4( rotationMatrix );
		lookAtPosition.add( cameraWorldPosition );

		target.subVectors( mirrorWorldPosition, lookAtPosition );
		target.reflect( normal ).negate();
		target.add( mirrorWorldPosition );

		mirrorCamera.position.copy( view );
		mirrorCamera.up.set( 0, 1, 0 );
		mirrorCamera.up.applyMatrix4( rotationMatrix );
		mirrorCamera.up.reflect( normal );
		mirrorCamera.lookAt( target );

		mirrorCamera.far = camera.far; // Used in WebGLBackground

		mirrorCamera.updateMatrixWorld();
		mirrorCamera.projectionMatrix.copy( camera.projectionMatrix );

		// Update the texture matrix
		textureMatrix.set(
			0.5, 0.0, 0.0, 0.5,
			0.0, 0.5, 0.0, 0.5,
			0.0, 0.0, 0.5, 0.5,
			0.0, 0.0, 0.0, 1.0
		);
		textureMatrix.multiply( mirrorCamera.projectionMatrix );
		textureMatrix.multiply( mirrorCamera.matrixWorldInverse );

		// Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
		// Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
		mirrorPlane.setFromNormalAndCoplanarPoint( normal, mirrorWorldPosition );
		mirrorPlane.applyMatrix4( mirrorCamera.matrixWorldInverse );

		clipPlane.set( mirrorPlane.normal.x, mirrorPlane.normal.y, mirrorPlane.normal.z, mirrorPlane.constant );

		var projectionMatrix = mirrorCamera.projectionMatrix;

		q.x = ( Math.sign( clipPlane.x ) + projectionMatrix.elements[ 8 ] ) / projectionMatrix.elements[ 0 ];
		q.y = ( Math.sign( clipPlane.y ) + projectionMatrix.elements[ 9 ] ) / projectionMatrix.elements[ 5 ];
		q.z = - 1.0;
		q.w = ( 1.0 + projectionMatrix.elements[ 10 ] ) / projectionMatrix.elements[ 14 ];

		// Calculate the scaled plane vector
		clipPlane.multiplyScalar( 2.0 / clipPlane.dot( q ) );

		// Replacing the third row of the projection matrix
		projectionMatrix.elements[ 2 ] = clipPlane.x;
		projectionMatrix.elements[ 6 ] = clipPlane.y;
		projectionMatrix.elements[ 10 ] = clipPlane.z + 1.0 - clipBias;
		projectionMatrix.elements[ 14 ] = clipPlane.w;

		eye.setFromMatrixPosition( camera.matrixWorld );

		//

		var currentRenderTarget = renderer.getRenderTarget();

		var currentVrEnabled = renderer.vr.enabled;
		var currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;

		scope.visible = false;

		renderer.vr.enabled = false; // Avoid camera modification and recursion
		renderer.shadowMap.autoUpdate = false; // Avoid re-computing shadows

		renderer.render( scene, mirrorCamera, renderTarget, true );

		scope.visible = true;

		renderer.vr.enabled = currentVrEnabled;
		renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;

		renderer.setRenderTarget( currentRenderTarget );

	};

};

THREE.Water.prototype = Object.create( THREE.Mesh.prototype );
THREE.Water.prototype.constructor = THREE.Water;
