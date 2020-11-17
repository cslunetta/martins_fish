import { useFish } from "./FishDataProvider.js";
import { fish } from "./fish.js";

export const fishList = () => {
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishlist__container");
  const allTheFish = useFish();

  for (const fishObject of allTheFish) {
    // console.log("one fish!", fishObject)
    const fishHTML = fish(fishObject);
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTML;
  }
};
