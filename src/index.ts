import { ComponentOne } from "./tree-shaking/component-one";
import { ComponentTwo } from "./tree-shaking/component-two";

export { ComponentOne, ComponentTwo };

export default {
  myTest: () => alert(90),
};
