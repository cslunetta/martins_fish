export const fish = (fish) => {
  return `
    <section class="fish card">
      <div><img  class="fish__image image--card" src="./images/${fish.image}"></div>
      <div class="fish__name">Name: ${fish.name}</div>
      <div class="fish__species">Species: ${fish.species}</div>
      <div class="fish__length">Length: ${fish.length}</div>
      <div class="fish__location">Location: ${fish.location}</div>
      <div class="fish__diet">Diet: ${fish.food}</div>
    </section>
  `;
};
