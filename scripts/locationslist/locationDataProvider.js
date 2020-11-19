const locationListing = [
  {
    image: "barrier_reef.jpg",
    name: "Great Barrier Reef",
    url: "https://www.australia.com/en-us/places/cairns-and-surrounds/%20%20%20%20guide-to-the-great-barrier-reef.html",
    urlText: "Australian Guide to the Great Barrier Reef",
    desc: "Home to diverse marine life of the most vivid colours, the Great Barrier Reef offers the opportunity for great adventure, both in luxury and on a budget. Whether you explore the stunning Whitsunday Islands, trek the ancient Daintree Rainforest or relax on luxurious tropical islands such as Hayman and Lizard, a day on the reef is all about the unforgettable nature that surrounds you.",
  },
  {
    image: "AscentionIsland.jpg",
    name: "Ascention Island",
    url: "https://www.bbc.com/news/%20magazine-36076411",
    urlText: "Ascension: The island where nothing makes sense",
    desc: "Volcanic Island",
  },
  // {
  //   image: "barrier_reef.jpg",
  //   name: "Great Barrier Reef",
  //   url: "https://www.australia.com/en-us/places/cairns-and-surrounds/%20%20%20%20guide-to-the-great-barrier-reef.html",
  //   urlText: "Australian Guide to the Great Barrier Reef",
  //   desc: "Home to diverse marine life of the most vivid colours, the Great Barrier Reef offers the opportunity for great adventure, both in luxury and on a budget. Whether you explore the stunning Whitsunday Islands, trek the ancient Daintree Rainforest or relax on luxurious tropical islands such as Hayman and Lizard, a day on the reef is all about the unforgettable nature that surrounds you.",
  // },
];

export const useLocation = () => {
  return locationListing.slice();
};
