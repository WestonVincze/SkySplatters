import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector"
import "@babylonjs/loaders/glTF";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder, SceneLoader, FreeCamera, Camera } from "@babylonjs/core";

// "i, i, captain"
// instantiate...
// - canvas
// - engine
// - scene 
// inject html
const app = () => {
  // local state (private variables)
  let _canvas: HTMLCanvasElement;
  let _engine: Engine;
  let _scene: Scene;
  let _camera: FreeCamera;
  let _mesh: Mesh;

  return async () => {
    _canvas = document.createElement("canvas");
    document.body.appendChild(_canvas);

    _engine = new Engine(_canvas);
    _scene = new Scene(_engine);
    _camera = new FreeCamera("camera1", new Vector3(0, 0, 0,), _scene);
    _camera.setTarget(Vector3.Zero());

    // import model
    await SceneLoader.ImportMeshAsync(null, "./models/pigeon/", "pigeon-v12.glb", _scene).then((res) => {
      const body = res.meshes[0];
    });

  }
}

const game = app();
game();