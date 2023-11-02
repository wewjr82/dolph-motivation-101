// let dolphQuotes = [
//   "My hustle is nonstop. I never stop hustling.",
//   "In life, you get what you work for, not what you wish for.",
//   "Stay down until you come up.",
//   "It’s not about the money; it’s about the respect.",
//   "Don’t wait on nobody; do what you gotta do.",
//   "To whom much is given, much is tested.",
//   "You can't cheat the grind, it knows how much you've invested. It won't give you nothing you haven't worked for.",
//   "Stay focused, stay humble.",
//   "The best revenge is massive success.",
//   "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
//   "I'd rather hustle 24/7 than slave 9 to 5.",
//   "You gotta think outside the box if you want to make it out the hood.",
//   "I'm just a product of my environment trying to make it.",
//   "When you come from the bottom, you learn how to appreciate the little things.",
//   "Success is the best revenge against those who didn't believe in you.",
//   "I stay on a plane so much, they don't know if I'm a passenger or the pilot",
//   "Life's about making choices, and I choose to be successful.",
//   "You can't expect to see change if you never do anything different.",
//   "Hard work beats talent when talent doesn't work hard.",
//   "Every setback is a setup for a comeback.",
//   "You can't be afraid to fail if you want to succeed.",
//   "Money can’t buy happiness, but I'm happiest when I can buy what I want.",
//   "I’m just tryna live my life and stack my paper tall.",
//   "Every time they counted me out, I bounced back.",
//   "I had to separate myself, had to stay away from suckers.",
//   "Keep grindin', keep hustlin', keep chasing your dreams.",
//   "No matter where you come from, you can make it if you try.",
//   "When life knocks you down, get back up and keep moving forward.",
//   "Never let anyone dictate your worth or limit your potential.",
//   "Stay focused on your goals, and don't let distractions derail you.",
//   "Use your past struggles as fuel to drive you towards a better future.",
//   "Success is the best revenge, so I'm focused on winning.",
//   "Embrace the challenges, for they shape you into the person you are meant to be.",
//   "Even in the darkest times, believe in yourself and your ability to overcome.",
//   "Your potential is limitless if you are willing to put in the work and stay dedicated.",
//   "I had to hustle hard to make it out the struggle.",
//   "No matter the obstacles, I'm gonna rise above it all.",
//   "Every day is a chance to create the life you want.",
//   "My journey is a testament to the power of perseverance.",
//   "Through it all, I never lost sight of my ambitions.",
// ];

let dolphQuotes = [
  {
    quote: "My hustle is nonstop. I never stop hustling.",
    source: "/songs/Y2DL_Young_Dolph_Preach_Clean.mp3",
  },
  {
    quote: "In life, you get what you work for, not what you wish for.",
    source: "/songs/Y2DL_100_Shots-Young_Dolph_(Clean).mp3",
  },
  {
    quote: "It’s not about the money; it’s about the respect.",
    source:
      "/songs/Y2DL_Young_Dolph_-_Go_Get_Sum_Mo_Clean_ft_Gucci_Mane,_2_Chainz_&_Ty_Dolla_$ign_2023.mp3",
  },
  {
    quote:
      "You can't cheat the grind, it knows how much you've invested. It won't give you nothing you haven't worked for.",
    source: "/songs/Y2DL_Young_Dolph_-_Get_Paid_[Clean_Edit].mp3",
  },
  {
    quote: "Don’t wait on nobody; do what you gotta do.",
    source:
      "/songs/Y2DL_Young_Dolph_-_I_Pray_for_My_Enemies_(Clean_Version).mp3",
  },
  {
    quote: "The best revenge is massive success.",
    source: "/songs/Y2DL_Young_Dolph_-_Believe_Me_(Clean_Version).mp3",
  },
  {
    quote:
      "Money can’t buy happiness, but I'm happiest when I can buy what I want.",
    source: "/songs/Y2DL_Young_Dolph_-_Crashin'_Out_(Clean_Version).mp3",
  },
];

// Shuffling the array dolphQuotes
let shuffledQuotes = shuffle(dolphQuotes);

//Initializing variables
let lastAudio = null;
let currentIndex = 0;
let h3 = document.querySelector("h3");

let btn = document.querySelector("button");

// Adding click event listener to the button
btn.addEventListener("click", () => {
  const selectedQuote = dolphQuotes[currentIndex];

  // Update the heading with the selected quote's title
  h3.innerText = selectedQuote.quote;
  h3.style.padding = "20px 10px";

  // Pause the previous audio if it exists
  if (lastAudio) {
    lastAudio.pause();
  }

  // Create and play new audio
  let audio = new Audio(selectedQuote.source);
  audio.play();
  lastAudio = audio;

  // Update the current index for cycling through qquote
  currentIndex = (currentIndex + 1) % shuffledQuotes.length;
});

// Function to shuffle an array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap elements to shuffle the array
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
