import React, { useEffect, useState } from "react";
import * as THREE from "three";
import "./Intro.css";
import i_cell_text from "../cursor/I_CELL_TEXT.png";
import finger from "../cursor/point_finger.gif";
import { useNavigate } from "react-router-dom";

class IntroScene {
  constructor(options) {
    const defaults = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    Object.assign(this, options, defaults);

    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      1,
      10000
    );
    this.smokeParticles = [];

    this.init();
    this.addLights();
    this.addCamera();
    this.addParticles();
    this.addEventListeners();
    this.update();
  }

  init() {
    const { width, height, renderer, scene, camera } = this;

    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    const introContainer = document.querySelector(".intro");
    introContainer.appendChild(renderer.domElement);
  }

  addLights() {
    const light = new THREE.DirectionalLight(0xffffff, 0.75);
    light.position.set(-1, 0, 1);
    this.scene.add(light);
  }

  addCamera() {
    this.camera.position.z = 1000;
    this.scene.add(this.camera);
  }

  addParticles() {
    const textureLoader = new THREE.TextureLoader();

    textureLoader.load(
      "https://raw.githubusercontent.com/marcobiedermann/playground/master/three.js/smoke-particles/dist/assets/images/clouds.png",
      (texture) => {
        const smokeMaterial = new THREE.MeshLambertMaterial({
          color: 0xffffff,
          map: texture,
          transparent: true,
        });
        smokeMaterial.map.minFilter = THREE.LinearFilter;

        const smokeGeometry = new THREE.PlaneGeometry(300, 300);

        let limit = 150;

        while (limit--) {
          const smokeMesh = new THREE.Mesh(smokeGeometry, smokeMaterial);
          smokeMesh.position.set(
            Math.random() * 500 - 250,
            Math.random() * 500 - 250,
            Math.random() * 1000 - 100
          );
          smokeMesh.rotation.z = Math.random() * 360;
          this.smokeParticles.push(smokeMesh);
          this.scene.add(smokeMesh);
        }
      }
    );
  }

  evolveSmoke(delta) {
    const { smokeParticles } = this;

    for (let i = 0; i < smokeParticles.length; i++) {
      smokeParticles[i].rotation.z += delta * 0.2;
    }
  }

  render() {
    this.evolveSmoke(this.clock.getDelta());

    this.renderer.render(this.scene, this.camera);
  }

  update() {
    this.render();
    requestAnimationFrame(this.update.bind(this));
  }

  onResize() {
    const { camera } = this;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    camera.aspect = windowWidth / windowHeight;
    camera.updateProjectionMatrix();

    this.renderer.setSize(windowWidth, windowHeight);
  }

  addEventListeners() {
    window.addEventListener("resize", this.onResize.bind(this));
  }
}

const Intro = () => {
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const introScene = new IntroScene();

    const update = () => {
      introScene.render();
      requestAnimationFrame(update);
    };

    const redirectTimeout = setTimeout(() => {
      navigate("/home");
    }, 7000);

    const timeoutId = setTimeout(() => {
      setHidden(true);
    }, 4000);
    update();

    return () => {
      window.removeEventListener(
        "resize",
        introScene.onResize.bind(introScene)
      );
      clearTimeout(timeoutId);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setHidden(true);
  //   }, 4000);

  //   // Cleanup function to clear the timeout in case the component unmounts
  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <div className="intro">
      <img id="harry-potter" src={i_cell_text} alt="harry-potter" />
      <div
        style={{
          position: "fixed",
          bottom: "-10px",
          right: "0",
          display: "flex",
          alignItems: "center",
          zIndex: "9999",
          display: `${hidden ? "none" : ""}`,
        }}
      >
        <img src={finger} alt="" height={200} />
      </div>
    </div>
  );
};

export default Intro;
