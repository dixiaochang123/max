import * as THREE from "three";
import * as topojson from "topojson";
import * as d3 from "d3";
import * as TWEEN from "@tweenjs/tween.js";

class Globe {
  constructor(container) {
    this.container = container;
    this.boundBox = this.container.getBoundingClientRect();
    this.pointColor = 0x03d4d6;
    this.pointOpacity = 0.4;
    this.chinaColor = this.pointColor;
    this.time = 2000;
    this.stopTime = 5000;
    this.needRotate = true;
  }

  setPointColor(color = 0x03d4d6, opacity = 0.4, chinaColor = 0x03d4d6) {
    this.pointColor = color;
    this.pointOpacity = opacity;
    this.chinaColor = chinaColor;
  }

  setAnimationTime(time = 2000) {
    this.time = time;
  }

  setStopTime(time = 5000) {
    this.stopTime = time;
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.geometry_land_target = new THREE.Geometry();
    this.geometry_china_target = new THREE.Geometry();
    this.totalPointGeometry = new THREE.Geometry();

    let render = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    render.setPixelRatio(window.devicePixelRatio);
    render.setSize(this.boundBox.width, this.boundBox.height);
    render.setClearColor(0x202020, 0.0);
    render.domElement.style.position = "absolute";
    this.container.appendChild(render.domElement);
    this.renderer = render;

    this.camera = new THREE.PerspectiveCamera(
      50,
      this.boundBox.width / this.boundBox.height,
      1,
      10000
    );
    this.camera.position.set(0, 200, 600);
    this.camera.lookAt(0, 0, 0);
  }

  loadJson(jsonUrl) {
    return d3.json(jsonUrl);
  }

  generatePoints(data) {
    let geometry_land = new THREE.Geometry();
    let geometry_china = new THREE.Geometry();
    let countries = topojson.feature(data, data.objects.countries);
    let geoFunc = geo(countries.features);
    let sphere = new THREE.SphereGeometry(230, 150, 150);
    let spherical = new THREE.Spherical();
    for (let index = 0, len = sphere.vertices.length; index < len; index++) {
      let vertice = sphere.vertices[index];
      spherical.setFromVector3(vertice);
      let lat = THREE.Math.radToDeg(Math.PI / 2 - spherical.phi);
      let lon = THREE.Math.radToDeg(spherical.theta);
      let country = geoFunc.search(lat, lon);
      if (country !== null) {
        if (country.code === "China") {
          this.geometry_china_target.vertices.push(vertice);
        } else {
          this.geometry_land_target.vertices.push(vertice);
        }
        let vertex = new THREE.Vector3();
        vertex.x = Math.random() * 1200 - 600;
        vertex.y = Math.random() * 1200 - 600;
        vertex.z = Math.random() * 1200 - 600;
        this.totalPointGeometry.vertices.push(vertex);
      }
    }
    let material_land = new THREE.PointsMaterial({
      size: 4,
      color: this.pointColor,
      transparent: true,
      opacity: this.pointOpacity,
    });
    let material_china = new THREE.PointsMaterial({
      size: 4,
      color: this.pointColor,
      transparent: true,
      opacity: this.pointOpacity,
    });
    material_china.needsUpdate = true;
    this.material_china = material_china;
    let allCount = this.totalPointGeometry.vertices.length;
    let landCount = this.geometry_land_target.vertices.length;
    for (let i = 0; i < allCount; i++) {
      if (i < landCount) {
        geometry_land.vertices.push(
          this.totalPointGeometry.vertices[i].clone()
        );
      } else {
        geometry_china.vertices.push(
          this.totalPointGeometry.vertices[i].clone()
        );
      }
    }
    let mesh_land = new THREE.Points(geometry_land, material_land);
    let mesh_china = new THREE.Points(geometry_china, material_china);
    this.group.add(mesh_land);
    this.group.add(mesh_china);
    this.geometry_land = geometry_land;
    this.geometry_china = geometry_china;
    this.geometryArray = [this.geometry_land, this.geometry_china];
  }

  render() {
    TWEEN.default.update();
    this.geometryArray.forEach((geometry) => {
      geometry.verticesNeedUpdate = true;
    });
    if (this.needRotate) {
      this.group.rotation.y += 0.01;
      let d = (250 * Math.PI) / 180 - this.group.rotation.y;
      if (d < 0.01 && d > 0) {
        this.needRotate = false;
        this.changeChinaColor();
        setTimeout(() => {
          this.needRotate = true;
        }, this.stopTime);
      }
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame((n) => {
      this.render();
    });
  }

  changeChinaColor() {
    let color = new THREE.Color(this.chinaColor);
    let delayTime = this.stopTime * 0.3;
    setTimeout(() => {
      this.material_china.color = color;
    }, 100);
    let tween = new TWEEN.Tween(this.material_china)
      .to({ opacity: 1.0 }, this.stopTime * 0.7)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .delay(delayTime);
    tween.start();
  }

  pointAnimation() {
    let time = this.time;
    let totalCount = this.totalPointGeometry.vertices.length;
    let landCount = this.geometry_land_target.vertices.length;
    for (let index = 0; index < totalCount; index++) {
      let from = null;
      let to = null;
      if (index < landCount) {
        from = this.geometry_land.vertices[index];
        to = this.geometry_land_target.vertices[index];
      } else {
        let number = index - landCount;
        from = this.geometry_china.vertices[number];
        to = this.geometry_china_target.vertices[number];
      }
      let delayTime = time * Math.random();
      let tween = new TWEEN.Tween(from)
        .to({ x: to.x, y: to.y, z: to.z }, time)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .delay(delayTime);
      tween.start();
    }
  }

  reset() {
    this.geometry_land.vertices = [];
    this.geometry_china.vertices = [];
    let allCount = this.totalPointGeometry.vertices.length;
    let landCount = this.geometry_land_target.vertices.length;
    for (let i = 0; i < allCount; i++) {
      if (i < landCount) {
        this.geometry_land.vertices.push(
          this.totalPointGeometry.vertices[i].clone()
        );
      } else {
        this.geometry_china.vertices.push(
          this.totalPointGeometry.vertices[i].clone()
        );
      }
    }
    this.pointAnimation();
  }
}

export default Globe;
