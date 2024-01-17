'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';

function SnowScene(): JSX.Element {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let camera: THREE.PerspectiveCamera;
		let scene: THREE.Scene;
		let renderer: THREE.WebGLRenderer;
		let stats: Stats;
		let parameters: [number[], THREE.Texture, number][];
		const materials: THREE.PointsMaterial[] = [];

		init();
		animate();

		function init() {
			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
			camera.position.z = 1000;

			scene = new THREE.Scene();
			scene.fog = new THREE.FogExp2(0x000000, 0.0008);

			const geometry = new THREE.BufferGeometry();
			const vertices: number[] = [];

			const textureLoader = new THREE.TextureLoader();

			const assignSRGB = (texture: THREE.Texture) => {
				texture.encoding = THREE.sRGBEncoding;
			};

			const sprite1 = textureLoader.load('snow/snowflake1.png', assignSRGB);
			const sprite2 = textureLoader.load('snow/snowflake2.png', assignSRGB);
			const sprite3 = textureLoader.load('snow/snowflake3.png', assignSRGB);
			const sprite4 = textureLoader.load('snow/snowflake4.png', assignSRGB);
			const sprite5 = textureLoader.load('snow/snowflake5.png', assignSRGB);

			for (let i = 0; i < 5000; i++) {
				const x = Math.random() * 2000 - 1000;
				const y = Math.random() * 2000 - 1000;
				const z = Math.random() * 2000 - 1000;

				vertices.push(x, y, z);
			}

			geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

			parameters = [
				[[1.0, 0.2, 0.5], sprite2, 20],
				[[0.95, 0.1, 0.5], sprite3, 15],
				[[0.9, 0.05, 0.5], sprite1, 10],
				[[0.85, 0, 0.5], sprite5, 8],
				[[0.8, 0, 0.5], sprite4, 5],
			];

			for (let i = 0; i < parameters.length; i++) {
				const color = parameters[i][0];
				const sprite = parameters[i][1];
				const size = parameters[i][2];

				materials[i] = new THREE.PointsMaterial({
					size: size,
					map: sprite,
					blending: THREE.AdditiveBlending,
					depthTest: false,
					transparent: true,
				});
				materials[i].color.setHSL(color[0], color[1], color[2]);

				const particles = new THREE.Points(geometry, materials[i]);

				particles.rotation.x = Math.random() * 6;
				particles.rotation.y = Math.random() * 6;
				particles.rotation.z = Math.random() * 6;

				scene.add(particles);
			}

			renderer = new THREE.WebGLRenderer();
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
			containerRef.current?.appendChild(renderer.domElement);
			stats = new Stats();
			containerRef.current?.appendChild(stats.dom);
			window.addEventListener('resize', onWindowResize);
		}

		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		function animate() {
			requestAnimationFrame(animate);

			render();
			stats.update();
		}

		function render() {
			const time = Date.now() * 0.00005;

			for (let i = 0; i < scene.children.length; i++) {
				const object = scene.children[i];

				if (object instanceof THREE.Points) {
					object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
				}
			}

			for (let i = 0; i < materials.length; i++) {
				const color = parameters[i][0];
				const h = ((360 * (color[0] + time)) % 360) / 360;
				materials[i].color.setHSL(h, color[1], color[2]);
			}

			renderer.render(scene, camera);
		}
	}, []);

	return <div ref={containerRef}></div>;
}

export default SnowScene;
