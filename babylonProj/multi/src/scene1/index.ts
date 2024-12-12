import { Engine} from "@babylonjs/core";
import createStartScene from "/workspaces/babylonJSdev/babylonProj/multi/src/scene1/createStartScene.ts";
import createRunScene from "/workspaces/babylonJSdev/babylonProj/multi/src/scene1/createRunScene.ts";
import "./main.css";


const CanvasName = "renderCanvas";

let canvas = document.createElement("canvas");
canvas.id = CanvasName;

canvas.classList.add("background-canvas");
document.body.appendChild(canvas);

let eng = new Engine(canvas, true, {}, true);
let startScene = createStartScene(eng);
createRunScene(startScene);

eng.runRenderLoop(() => {
  startScene.scene.render();
});