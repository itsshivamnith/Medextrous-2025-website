import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let frameId;
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x080e10, 0.92);
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced lighting system
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const createSpotlight = (color, position) => {
      const light = new THREE.SpotLight(color, 2, 50, Math.PI / 4, 0.5, 1);
      light.position.set(...position);
      light.castShadow = true;
      scene.add(light);
      return light;
    };

    const spotlight1 = createSpotlight(0x00ffcc, [10, 10, 15]);
    const spotlight2 = createSpotlight(0x0077ff, [-10, -10, 15]);

    // Create blueprint grid
    const createGrid = () => {
      const gridHelper = new THREE.GridHelper(100, 60, 0x0050d6, 0x0050d6);
      gridHelper.position.z = -20;
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.2;
      scene.add(gridHelper);
    };
    createGrid();

    // Enhanced gear creation with detailed geometry
    const createGear = (params) => {
      const {
        radius,
        teeth,
        depth,
        color,
        position,
        bevelSize = 0.1,
        spokesCount = 5
      } = params;

      const gearGroup = new THREE.Group();
      const outerRadius = radius;
      const toothHeight = radius * 0.2;
      
      const mainGeometry = new THREE.CylinderGeometry(
        outerRadius, outerRadius, depth,
        teeth * 2, 1, false
      );

      const material = new THREE.MeshPhongMaterial({
        color: color,
        metalness: 0.9,
        roughness: 0.2,
        transparent: true,
        opacity: 0.95,
        emissive: color,
        emissiveIntensity: 0.3,
        side: THREE.DoubleSide
      });

      const mainGear = new THREE.Mesh(mainGeometry, material);
      gearGroup.add(mainGear);

      // Add teeth
      for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * Math.PI * 2;
        const toothGeometry = new THREE.BoxGeometry(
          toothHeight,
          depth * 1.2,
          radius * 0.25
        );
        const tooth = new THREE.Mesh(toothGeometry, material);
        
        tooth.position.x = Math.cos(angle) * (outerRadius + toothHeight / 2);
        tooth.position.z = Math.sin(angle) * (outerRadius + toothHeight / 2);
        tooth.rotation.y = angle;
        gearGroup.add(tooth);
      }

      // Add spokes
      for (let i = 0; i < spokesCount; i++) {
        const angle = (i / spokesCount) * Math.PI * 2;
        const spokeGeometry = new THREE.BoxGeometry(radius * 0.8, depth * 0.8, radius * 0.1);
        const spoke = new THREE.Mesh(spokeGeometry, material);
        spoke.rotation.y = angle;
        gearGroup.add(spoke);
      }

      const hubGeometry = new THREE.CylinderGeometry(radius * 0.2, radius * 0.2, depth * 1.2, 16);
      const hub = new THREE.Mesh(hubGeometry, material);
      gearGroup.add(hub);

      gearGroup.position.set(...position);
      return gearGroup;
    };

    // Create gears
    const gears = [];
    const gearConfigs = [
      {
        radius: 1.3,
        teeth: 16,
        depth: 0.4,
        color: 0x3366ff,
        position: [-8, 4, -8],
        rotationSpeed: 0.01,
        spokesCount: 6
      },
      {
        radius: 1.3,
        teeth: 16,
        depth: 0.4,
        color: 0x66bfbf,
        position: [8, 4, -8],
        rotationSpeed: -0.015,
        spokesCount: 6
      },
      {
        radius: 1.3,
        teeth: 16,
        depth: 0.4,
        color: 0x0f76b8a,
        position: [-8, -4, -8],
        rotationSpeed: 0.012,
        spokesCount: 6
      },
      {
        radius: 1.3,
        teeth: 16,
        depth: 0.4,
        color: 0xffcc33,
        position: [8, -4, -8],
        rotationSpeed: -0.02,
        spokesCount: 6
      }
    ];

    gearConfigs.forEach(config => {
      const gear = createGear(config);
      gear.userData = {
        rotationSpeed: config.rotationSpeed,
        originalPosition: [...config.position],
        time: Math.random() * Math.PI * 2
      };
      gears.push(gear);
      scene.add(gear);
    });

    // Add mechanical particles
    const particleCount = 150;
    const particles = new THREE.Group();
    
    const particleGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);
    const particleMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ffcc,
      emissive: 0x00ffcc,
      emissiveIntensity: 0.5
    });

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 5
      );
      particle.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )
      };
      particles.add(particle);
    }
    scene.add(particles);

    camera.position.z = 8;
    let time = 0;

    // Handle scroll
    let scrollProgress = 0;
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = Math.min(window.scrollY / maxScroll, 1);
    };
    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const animate = () => {
      time += 0.005;
      
      // Animate gears with scroll-based fade out and movement
      gears.forEach(gear => {
        // Rotate the gear
        gear.rotation.z += gear.userData.rotationSpeed;
        
        // Update gear position with subtle floating movement and scroll-based offset
        gear.userData.time += 0.01;
        const floatRadius = 0.5;
        const originalPos = gear.userData.originalPosition;
        
        // Move gears away from center and fade out based on scroll
        const scrollOffset = scrollProgress * 20; // Move gears outward
        const direction = originalPos[0] > 0 ? 1 : -1; // Determine which direction to move
        
        gear.position.x = originalPos[0] + (Math.sin(gear.userData.time) * floatRadius) + (scrollOffset * direction);
        gear.position.y = originalPos[1] + Math.cos(gear.userData.time) * floatRadius;
        gear.position.z = originalPos[2] + Math.sin(gear.userData.time * 0.5) * (floatRadius * 0.5);
        
        // Fade out gears
        gear.traverse(child => {
          if (child.material) {
            child.material.opacity = Math.max(0.95 * (1 - scrollProgress * 1.5), 0);
          }
        });
      });

      // Animate particles
      particles.children.forEach(particle => {
        particle.position.add(particle.userData.velocity);
        particle.rotation.x += 0.01;
        particle.rotation.y += 0.01;

        if (Math.abs(particle.position.x) > 10) particle.position.x *= -0.9;
        if (Math.abs(particle.position.y) > 10) particle.position.y *= -0.9;
        if (Math.abs(particle.position.z) > 10) particle.position.z *= -0.9;
      });

      // Subtle camera movement
      camera.position.x = Math.sin(time) * 0.5;
      camera.position.y = Math.cos(time) * 0.5;
      camera.lookAt(scene.position);

      // Animate spotlights
      spotlight1.intensity = 1.5 + Math.sin(time * 2) * 0.5;
      spotlight2.intensity = 1.5 + Math.cos(time * 2) * 0.5;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameId);
      mountRef.current?.removeChild(renderer.domElement);
      
      scene.traverse(object => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ThreeBackground;