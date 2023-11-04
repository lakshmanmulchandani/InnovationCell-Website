

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import moon2 from "./images/moon1.jpeg";

const Moon = () => {
  const earthRef = useRef();
  const moonRef = useRef();
  const moonSize = (window.innerWidth / 1920) *3.3;

  useEffect(() => {
    const updatesize = () => {
      const newMoonSize = (window.innerWidth / 5000) * moonSize;
      moonRef.current.scale.set(newMoonSize, newMoonSize, newMoonSize);
    };

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a WebGL renderer with a transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    earthRef.current.appendChild(renderer.domElement);

    // Create a sphere for Earth
    // const earthGeometry = new THREE.SphereGeometry(moonSize, 32, 32);
    // const earthTexture = new THREE.TextureLoader().load(moon2); // Load your Earth texture
    // const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
    // const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    // scene.add(earth);

    // Create a sphere for the moon
    const moonGeometry = new THREE.SphereGeometry(moonSize, 32, 32);
    const moonTexture = new THREE.TextureLoader().load(moon2); // Load your moon texture
    const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(2, 0, 0); // Position the moon to the right of the Earth
    scene.add(moon);
    moonRef.current = moon; // Set the moon reference for scaling

    // Add some lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate Earth
      // earth.rotation.y += 0.005;

      // Rotate the moon
      moon.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();
    window.addEventListener('resize', updatesize);

    return () => {
      window.removeEventListener('resize', updatesize);
    };
  }, []);

  return (
    <div ref={earthRef} />
  );
};

export default Moon;



// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import moon2 from "./images/moon1.jpeg";

// const Moon = () => {
//   const earthRef = useRef();
//   const moonRef = useRef();
//   // const moonSize = (window.innerWidth / 1920) * 3.3;
//   const moonSize = 3.3;
//   const moonMargin = 0.5; // Adjust the margin value as needed

//   useEffect(() => {
//     const updatesize = () => {
//       // const newMoonSize = (window.screen.width / 1920) * moonSize;
//       const newMoonSize = moonSize;
//       // const newMoonMargin = (window.screen.width / 1920) * moonMargin;
//       const newMoonMargin =  moonMargin;

//       moonRef.current.scale.set(newMoonSize, newMoonSize, newMoonSize);
//       moonRef.current.position.set(newMoonMargin, 0, 0); // Update moon position based on margin
//     };

//     // Create a scene
//     const scene = new THREE.Scene();

//     // Create a camera
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Create a WebGL renderer with a transparent background
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     earthRef.current.appendChild(renderer.domElement);

//     // Create a sphere for the moon
//     const moonGeometry = new THREE.SphereGeometry(3, 32, 32);
//     const moonTexture = new THREE.TextureLoader().load(moon2); // Load your moon texture
//     const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
//     const moon = new THREE.Mesh(moonGeometry, moonMaterial);
//     moon.position.set(0, 0, 0); // Position the moon with dynamic margin
//     scene.add(moon);
//     moonRef.current = moon; // Set the moon reference for scaling and positioning

//     // Add some lighting
//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     // Animation function
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate the moon
//       moon.rotation.y += 0.005;

//       renderer.render(scene, camera);
//     };

//     animate();
//     window.addEventListener('resize', updatesize);

//     return () => {
//       window.removeEventListener('resize', updatesize);
//     };
//   }, []);

//   return (
//     <div ref={earthRef} />
//   );
// };

// export default Moon;








// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import moon2 from "./images/moon1.jpeg";

// const Moon = () => {
//   const earthRef = useRef();
//   const moonRef = useRef();
//   const moonSize = (window.innerWidth / 1920) * 3.3;
//   const moonMargin = (window.innerWidth / 1920) * 0.01; // Adjust the margin value as needed

//   useEffect(() => {
//     const updatesize = () => {
//       const newMoonSize = (window.innerWidth / 1920) * moonSize;
//       const newMoonMargin = (window.innerWidth / 1920) * moonMargin;

//       moonRef.current.scale.set(newMoonSize, newMoonSize, newMoonSize);
//       moonRef.current.position.set(newMoonMargin, 0, 0); // Update moon position based on margin
//     };

//     // Create a scene
//     const scene = new THREE.Scene();

//     // Create a camera
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Create a WebGL renderer with a transparent background
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     earthRef.current.appendChild(renderer.domElement);

//     // Create a sphere for the moon
//     const moonGeometry = new THREE.SphereGeometry(moonSize, 32, 32);
//     const moonTexture = new THREE.TextureLoader().load(moon2); // Load your moon texture
//     const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
//     const moon = new THREE.Mesh(moonGeometry, moonMaterial);
//     moon.position.set(moonMargin, 0, 0); // Position the moon with dynamic margin
//     scene.add(moon);
//     moonRef.current = moon; // Set the moon reference for scaling and positioning

//     // Add some lighting
//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     // Animation function
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate the moon
//       moon.rotation.y += 0.005;

//       renderer.render(scene, camera);
//     };

//     animate();
//     window.addEventListener('resize', updatesize);

//     return () => {
//       window.removeEventListener('resize', updatesize);
//     };
//   }, []);

//   return (
//     <div ref={earthRef} />
//   );
// };

// export default Moon;
