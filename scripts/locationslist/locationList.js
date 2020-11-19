import { useLocation } from "./locationDataProvider.js";
import {location} from "./location.js"

export const locationList = () => {
  const contentElement = document.querySelector(".locations__container");
  const allLocations = useLocation();

  for (const locationObject of allLocations) {
    const locationHTML = location(locationObject);
    contentElement.innerHTML += locationHTML;
  }
};