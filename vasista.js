let indoorEl = document.getElementById("INDOOR");
let outdoorEl = document.getElementById("OUTDOOR");
let esportsEl = document.getElementById("eSPORTS");
let designSection = document.getElementById("designSection");

// window.addEventListener("load", function () {
//   var music = document.getElementById("background-music");
//   music.play();
// });

const removeClass = () => {
  indoorEl.classList.remove("active-section-option");
  outdoorEl.classList.remove("active-section-option");
  esportsEl.classList.remove("active-section-option");
};
const mainData = [
  // Indoor events
  {
    name: "Quiz",
    description:
      "Test your knowledge on a wide range of topics in this thrilling quiz competition. Compete in challenging rounds to become the ultimate Quiz Champion.",
    date: "Will be intimated soon",
    venue: "Academic Block",
    category: "indoor",
    price: "<br>Single - ₹20<br>Dual - ₹30",
  },
  {
    name: "Coding Contest",
    description:
      "Challenge yourself with complex algorithms and problem-solving tasks in this intense coding competition. Test your limits and gain valuable learning experiences.",
    date: "Will be intimated soon",
    venue: "Academic Block",
    category: "indoor",
    price: "₹20",
  },
  {
    name: "Drawing",
    description:
      "Showcase your artistic skills in our Drawing competition. Express your creativity through various techniques and compete for exciting prizes.",
    date: "Will be intimated soon",
    venue: "Academic Block",
    category: "indoor",
    price: "₹20",
  },
  {
    name: "Debate",
    description:
      "Engage in a battle of wits in our Debate competition. Articulate your arguments and respond to counterarguments on various current and controversial topics.",
    date: "Will be intimated soon",
    venue: "Academic Block",
    category: "indoor",
    price: "₹20",
  },
  {
    name: "Singing",
    description:
      "Perform in our Singing competition, open to soloists, duets, and groups. Impress the judges with your vocal talent and stage presence.",
    date: "Will be intimated soon",
    venue: "Academic Block",
    category: "indoor",
    price: "₹20",
  },
  {
    name: "Extempore Speech",
    description:
      "Test your spontaneous speaking skills in our Extempore Speech competition. Participants will speak on a random topic with little preparation.",
    date: "Will be intimated soon",
    venue: "Academic Block",
    category: "indoor",
    price: "₹10",
  },
  {
    name: "Hackathon",
    description:
      "Join our Hackathon to innovate and build projects within a limited time. Collaborate with others and showcase your coding and problem-solving skills.",
    date: "Will be intimated soon",
    venue: "Academic Block",
    category: "indoor",
    price: "₹50",
  },
  {
    name: "GK",
    description:
      "Test your general knowledge across various topics in our GK competition. Challenge yourself and others in this engaging event.",
    date: "Will be intimated soon",
    venue: "Academic Block",
    category: "indoor",
    price: "<br>Single - ₹20<br>Dual - ₹30",
  },
  {
    name: "Mythology",
    description:
      "Dive into the fascinating world of mythology in this competition. Showcase your knowledge of ancient myths and legends.",
    date: "Will be intimated soon",
    venue: "Academic Block",
    category: "indoor",
    price: "<br>Single - ₹20<br>Dual - ₹30",
  },
  {
    name: "Chess",
    description:
      "Put your strategic thinking to the test in our Chess competition. Compete against other players and showcase your chess skills.",
    date: "Will be intimated soon",
    venue: "Academic Block",
    category: "indoor",
    price: "₹20",
  },
  {
    name: "Ludo",
    description:
      "Enjoy a classic game of Ludo in our Ludo competition. Test your luck and strategy to outplay your opponents.",
    date: "Will be intimated soon",
    venue: "Academic Block",
    category: "indoor",
    price: "₹20",
  },

  // Outdoor events
  {
    name: "Treasure Hunt",
    description:
      "Embark on an adventurous journey to solve clues and find hidden treasures across the campus. Teamwork and strategy are key to winning this fun event.",
    date: "Will be intimated soon",
    venue: "Will be intimated soon",
    category: "outdoor",
    price: "₹100",
  },
  {
    name: "Plastic Picking",
    description:
      "Participate in our Plastic Picking event to help clean up the environment. Make a difference while working together in this community effort.",
    date: "Will be intimated soon",
    venue: "Campus",
    category: "outdoor",
    price: "₹10",
  },
  {
    name: "Kite Fest",
    description:
      "Design and fly your own kite in this colorful and fun Kite Festival. Compete for the highest, longest, and most artistic flights.",
    date: "Will be intimated soon",
    venue: "Main Ground",
    category: "outdoor",
    price: "₹30",
  },
  {
    name: "Marathon",
    description:
      "Join our annual Marathon, a celebration of endurance and community spirit. Run through scenic city paths in this inspiring event open to all fitness levels.",
    date: "Will be intimated soon",
    venue: "Will be intimated soon",
    category: "outdoor",
    price: "₹10",
  },

  // Esports events
  {
    name: "Free Fire",
    description:
      "Compete in our Free Fire gaming tournament, a battle royale experience that tests reflexes, strategy, and teamwork.",
    date: "Will be intimated soon",
    venue: "Remote",
    category: "esports",
    price: "Will be intimated soon",
  },
  {
    name: "Photography",
    description:
      "Showcase your photography skills in our Photography competition. Capture stunning images and compete for the best shots.",
    date: "Will be intimated soon",
    venue: "Campus",
    category: "esports",
    price: "₹10",
  },
  {
    name: "Insta Reels",
    description:
      "Create and share engaging Insta Reels in our competition. Show off your creativity and editing skills to win exciting prizes.",
    date: "Will be intimated soon",
    venue: "Remote",
    category: "esports",
    price: "₹10",
  },
];

function showModal(event) {
  const modalTitle = document.getElementById("eventModalLabel");
  const modalBody = document.getElementById("eventModalBody");

  // Set the modal title
  modalTitle.textContent = event.name;

  // Create the modal content
  modalBody.innerHTML = `
    <p><span class="modal-title-label">Date:</span> <span class="modal-title-value">${
      event.date
    }</span></p>
    <p><span class="modal-title-label">Venue:</span> <span class="modal-title-value">${
      event.venue
    }</span></p>
    <p><span class="modal-title-label">Price:</span> <span class="modal-title-value">${
      event.price
    }</span></p>
    <p><span class="modal-title-label">Description:</span></p>
    <p class="modal-title-value">${event.description}</p>
  `;

  // Show the modal
  const eventModal = new bootstrap.Modal(document.getElementById("eventModal"));
  eventModal.show();
}

function createTimelineCard(event) {
  // Create the container for the timeline card

  // Helper function to create a timeline element with classes
  function createElementWithClass(tag, classNames) {
    const element = document.createElement(tag);
    element.className = classNames;
    return element;
  }

  // Create and append the empty space on the left
  const leftEmpty = createElementWithClass("div", "timeline-empty");
  designSection.appendChild(leftEmpty);

  // Create and append the middle section with the circle
  const middle = createElementWithClass("div", "timeline-middle");
  const circle = createElementWithClass("div", "timeline-circle");
  middle.appendChild(circle);
  designSection.appendChild(middle);

  // Create and append the content on the right
  const content = createElementWithClass(
    "div",
    "timeline-component timeline-content"
  );
  const title = document.createElement("h3");
  title.textContent = event.name;
  const description = document.createElement("p");
  description.textContent = `Venue: ${event.venue}`;

  content.appendChild(title);
  content.appendChild(description);
  content.addEventListener("click", () => showModal(event));
  designSection.appendChild(content);
}

function createRightTimelineCard(event) {
  // Create the container for the timeline card

  // Helper function to create a timeline element with classes
  function createElementWithClass(tag, classNames) {
    const element = document.createElement(tag);
    element.className = classNames;
    return element;
  }
  // Create and append the content on the right
  const content = createElementWithClass(
    "div",
    "timeline-component timeline-content"
  );
  const title = document.createElement("h3");
  title.textContent = event.name;
  const description = document.createElement("p");
  description.textContent = `Venue: ${event.venue}`;

  content.appendChild(title);
  content.appendChild(description);
  content.addEventListener("click", () => showModal(event));
  designSection.appendChild(content);

  // Create and append the empty space on the left

  // Create and append the middle section with the circle
  const middle = createElementWithClass("div", "timeline-middle");
  const circle = createElementWithClass("div", "timeline-circle");
  middle.appendChild(circle);
  designSection.appendChild(middle);

  const leftEmpty = createElementWithClass("div", "timeline-empty");
  designSection.appendChild(leftEmpty);

  // Append the timeline card to the timeline-container
}

const modifyData = (element) => {
  element.classList.add("active-section-option");
  const filteredData = mainData.filter(
    (eachItem) => eachItem.category === element.textContent.toLowerCase()
  );
  console.log(filteredData);
  designSection.textContent = "";
  for (let i = 0; i < filteredData.length; i++) {
    if (i % 2 == 0) {
      createTimelineCard(filteredData[i]);
    } else {
      createRightTimelineCard(filteredData[i]);
    }
  }
};

indoorEl.addEventListener("click", () => {
  removeClass();
  modifyData(indoorEl);
});

outdoorEl.addEventListener("click", () => {
  removeClass();
  modifyData(outdoorEl);
});

esportsEl.addEventListener("click", () => {
  removeClass();
  modifyData(esportsEl);
});
modifyData(indoorEl);
