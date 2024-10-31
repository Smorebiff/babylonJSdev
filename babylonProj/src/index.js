import { Engine } from "@babylonjs/core";
import createStartScene from "/workspaces/babylonJSdev/babylonProj/src/createStartScreen";
import './main.css';
const CanvasName = "renderCanvas";
let canvas = document.createElement("canvas");
canvas.id = CanvasName;
canvas.classList.add("background-canvas");
document.body.appendChild(canvas);
let eng = new Engine(canvas, true, {}, true);
let startScene = createStartScene(eng);
eng.runRenderLoop(() => {
    startScene.scene.render();
});
