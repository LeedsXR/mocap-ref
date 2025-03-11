// filepath: d:\Work\Goblin Academy\MoBuPython\mocap-ref\main.js
import modelPlayer from 'js-3d-model-viewer';

const viewerElement = document.getElementById('marker-placement-viewer');
const opts = {
  grid: true,
  trackball: false,
  background: 'rgb(100, 100, 100)'
};
const scene = modelPlayer.prepareScene(viewerElement, opts);
modelPlayer.loadGlb(scene, './assets/MocapMan.glb'); // Urls are fine here.