export const location = (location) => {
  return `
    <section class="location card">
      <div><img class="location__image" src="./images/${location.image}" alt=""></div>
      <div class="location__details">
        <div class="location__name">${location.name}</div>
        <div class="location__url"><a href="${location.url}">${location.urlText}</a> </div>
        <div class="location__desc">${location.desc}</div>
      </div>
    </section>
  `;
};
