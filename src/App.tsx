import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import "pepjs";
import SceneComponent from "babylonjs-hook";

export default function App() {
	let box;
	
	function onSceneReady(scene: BABYLON.Scene) {
		const canvas = scene.getEngine().getRenderingCanvas();

		const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, BABYLON.Vector3.Zero(), scene);
		camera.attachControl(canvas, true);

		const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

		box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
	}

	function onRender(scene: BABYLON.Scene) {
		const deltaTimeInMillis = scene.getEngine().getDeltaTime();

		const rpm = 10;

		box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
	}
	
	return <SceneComponent className="w-screen h-auto focus:outline-none touch-none" antialias onSceneReady={onSceneReady} onRender={onRender} />;
}