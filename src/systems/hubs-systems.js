import {CursorTargettingSystem} from "./cursor-targetting-system";
import {ConstraintsSystem} from "./constraints-system";

AFRAME.registerSystem("hubs-systems", {
  init() {
    this.cursorTargettingSystem = new CursorTargettingSystem();
    this.constraintsSystem = new ConstraintsSystem();
  },
  tick(t, dt) {
    const systems = AFRAME.scenes[0].systems;
    systems.userinput.tick2();
    this.cursorTargettingSystem.tick();
    systems.interaction.tick2();
    this.constraintsSystem.tick();
  }
});
