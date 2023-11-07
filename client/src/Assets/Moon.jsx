import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import moon2 from "./images/moon1.jpeg";

const Moon = () => {
  const earthRef = useRef();
  const moonRef = useRef();
  const moonSize = 2;

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a WebGL renderer with a transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    earthRef.current.appendChild(renderer.domElement);

    // Create a sphere for the moon
    const moonGeometry = new THREE.SphereGeometry(moonSize, 32, 32);
    const moonTexture = new THREE.TextureLoader().load(moon2); // Load your moon texture
    const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(0, 0, 0); // Position the moon at the center
    scene.add(moon);
    moonRef.current = moon;

    // Add some lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the moon
      moon.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up and stop the animation when the component unmounts
      window.removeEventListener('resize', animate);
    };
  }, []);

  return (
    <div ref={earthRef} />
  );
};

export default Moon;
