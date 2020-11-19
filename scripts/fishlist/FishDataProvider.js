const fishCollection = [
  {
    name: "Tom",
    species: "Goldfish",
    length: 3,
    location: "Neigbor's backyard pond",
    food: "Cheetos",
    image: "goldfish.jpg",
  },
  {
    name: "Frank",
    species: "Blue Angelfish",
    length: 2,
    location: "Bermuda",
    food: "Sponges",
    image: "blueangelfish.jpg",
  },
  {
    name: "Dory",
    species: "Blue Tang",
    length: 10,
    location: "Ascension Island",
    food: "Marine plants and detritus",
    image: "bluetang.jpg",
  },
  {
    name: "Robert",
    species: "Shark",
    length: 48,
    location: "Middle of the ocean",
    food: "People",
    image: "shark.jpg",
  }
];

export const useFish = () => {
  return fishCollection.slice();
};
