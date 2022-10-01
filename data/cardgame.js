const cardQuestions = [
  {
    questionText: "Which image has been taken by James Webb Telescope?",
    id: 1,
    answerOptions: [
      { answerImage: "/images/cardgame/hubble/1.jpg", isCorrect: false, id: 1 },
      { answerImage: "/images/cardgame/webb/1.jpg", isCorrect: true, id: 2 },
    ],
    title: "SMACS J0723.3-7327",
    story: "Infrared image from the James Webb Space Telescope, its first deep field showing gravitational lensing of distant galaxies. Distance(co-moving)	about 4 billion light years.",
    mistakeStory: "SMACS 0723 was previously imaged by Hubble. While the images appear somewhat similar, the JWST image is richer, offering a view of thousands of distant galaxies in unprecedented detail. The new space telescope has superior light gathering power and was able to capture many more distant galaxies in the same field, including the faintest objects ever seen in the infrared. Some of the galaxies in the image are shown as they appeared more than 13 billion years ago, when the universe was still very young.",
  },
  {
    questionText: "Which image has been taken by James Webb Telescope?",
    id: 2,
    answerOptions: [
      { answerImage: "/images/cardgame/hubble/2.jpg", isCorrect: false, id: 1 },
      { answerImage: "/images/cardgame/webb/2.jpg", isCorrect: true, id: 2 },
    ],
    title: "NGC 3132 - Southern Ring Nebula",
    story: "NGC 3132, better known as the Southern Ring Nebula, is an expanding cloud of gas thrown off by a dying star about 2,500 light-years from Earth. The bright star in the center may look like the culprit, but it's not - that honor belongs to the much fainter star right next to it. The James Webb image on the right provides a clear boost in resolution, bringing the details of the cloud into sharp focus and revealing that the dimmer star is in fact shrouded in its own little cloud of dust.",
    mistakeStory: "This image is the Southern Ring as seen by Hubble in an image released in 1998. NGC 3132, better known as the Southern Ring Nebula, is an expanding cloud of gas thrown off by a dying star about 2,500 light-years from Earth. The bright star in the center may look like the culprit, but it's not - that honor belongs to the much fainter star right next to it.",
  },
  {
    questionText: "Which image has been taken by James Webb Telescope?",
    id: 3,
    answerOptions: [
      { answerImage: "/images/cardgame/webb/3.jpg", isCorrect: true, id: 1 },
      { answerImage: "/images/cardgame/hubble/3.jpg", isCorrect: false, id: 2 },
    ],
    title: "Stephan's Quintet",
    story: "Stephan's Quintet, a visual grouping of five galaxies, is best known for being prominently featured in the holiday classic film, “It's a Wonderful Life.” Today, NASA's James Webb Space Telescope reveals Stephan’s Quintet in a new light. This enormous mosaic is Webb's largest image to date, covering about one-fifth of the Moon's diameter. It contains over 150 million pixels and is constructed from almost 1,000 separate image files. The information from Webb provides new insights into how galactic interactions may have driven galaxy evolution in the early universe.",
    mistakeStory: "Stephan's Quintet is 290 million light-years (90 million parsecs) away. The foreground, superposed NGC 7320 is 40 million light-years (12 million parsecs) away.",
  },
  {
    questionText: "Which image has been taken by James Webb Telescope?",
    id: 4,
    answerOptions: [
      { answerImage: "/images/cardgame/hubble/4.jpg", isCorrect: false, id: 1 },
      { answerImage: "/images/cardgame/webb/4.jpg", isCorrect: true, id: 2 },
    ],
    title: "SMACS J0723.3-7327",
    story: "This landscape of “mountains” and “valleys” speckled with glittering stars is actually the edge of a nearby, young, star-forming region called NGC 3324 in the Carina Nebula. Captured in infrared light by NASA's new James Webb Space Telescope, this image reveals for the first time previously invisible areas of star birth.",
    mistakeStory: "Located in the Southern Hemisphere, NGC 3324 is at the northwest corner of the Carina Nebula (NGC 3372), home of the Keyhole Nebula and the active, outbursting star Eta Carinae. The entire Carina Nebula complex is located at a distance of roughly 7,200 light-years, and lies in the constellation Carina. This image is a composite of data taken with two of Hubble's science instruments. Data taken with the Advanced Camera for Surveys (ACS) in 2006 isolated light emitted by hydrogen. More recent data, taken in 2008 with the Wide Field Planetary Camera 2 (WFPC2), isolated light emitted by sulfur and oxygen gas. To create a color composite, the data from the sulfur filter are represented by red, from the oxygen filter by blue, and from the hydrogen filter by green.",
  },
];

export default cardQuestions;
