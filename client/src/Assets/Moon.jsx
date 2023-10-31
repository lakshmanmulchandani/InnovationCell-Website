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

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;

    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    const moonGeometry = new THREE.SphereGeometry(3, 60, 60);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(textureURL);
    const displacementMap = textureLoader.load(displacementURL);

    const moonMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: texture,
      displacementMap: displacementMap,
      displacementScale: 0.06,
      bumpMap: displacementMap,
      bumpScale: 0.04,
      reflectivity: 0,
      shininess: 1,
    });

    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    scene.add(moon);

    const light = new THREE.DirectionalLight(0xFFFFFF, 1);
    light.position.set(-200, 100, 100);
    scene.add(light);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 6);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 0, 0);
    scene.add(hemiLight);

    const earthGeometry = new THREE.SphereGeometry(10, 60, 60);
    const earthMaterial = new THREE.MeshBasicMaterial({
      color: 0x181B3E,
      side: THREE.BackSide,
    });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      moon.rotation.x += 0.00001;
      earth.rotation.y += 0.00001;
      earth.rotation.x += 0.00005;
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
