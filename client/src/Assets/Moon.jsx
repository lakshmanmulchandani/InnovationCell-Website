import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Moon = () => {
  const mount = useRef(null);

  useEffect(() => {
    const textureURL =
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg';
    const displacementURL =
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg';
    const worldURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg';

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;

    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(2, 60, 60);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(textureURL);
    const displacementMap = textureLoader.load(displacementURL);
    const worldTexture = textureLoader.load(worldURL);

    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: texture,
      displacementMap: displacementMap,
      displacementScale: 0.06,
      bumpMap: displacementMap,
      bumpScale: 0.04,
      reflectivity: 0,
      shininess: 0,
    });

    const moon = new THREE.Mesh(geometry, material);

    const light = new THREE.DirectionalLight(0xFFFFFF, 1);
    light.position.set(-100, 10, 50);
    scene.add(light);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.1);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 0, 0);
    scene.add(hemiLight);

    const worldGeometry = new THREE.SphereGeometry(1000, 60, 60);
    const worldMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: worldTexture,
      side: THREE.BackSide,
    });
    const world = new THREE.Mesh(worldGeometry, worldMaterial);
    scene.add(world);

    scene.add(moon);
    camera.position.z = 5;

    moon.rotation.x = 3.1415 * 0.02;
    moon.rotation.y = 3.1415 * 1.54;

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.002;
      moon.rotation.x += 0.0001;
      world.rotation.y += 0.0001;
      world.rotation.x += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize, false);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <div ref={mount} />;
};

export default Moon;
