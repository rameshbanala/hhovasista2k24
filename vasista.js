let indoorEl = document.getElementById("INDOOR");
let outdoorEl = document.getElementById("OUTDOOR");
let esportsEl = document.getElementById("EARENA");
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
    name: "Aptitude",
    description:
      "<ul><li>Consists of Two Rounds, of which round 1 will be conducted on Thursday.</li><li>Round 2 will be conducted on Saturday for those who have qualified in round 1.</li><li>Seating will be provided.</li></ul>",
    date: "22-08-2024, At 5:00pm",
    venue: "Academic Block-2",
    category: "indoor",
    price: "<br>Single - ₹20<br>Dual - ₹30",
  },
  {
    name: "Mythology",
    description:
      "<ul><li>Consists of Two Rounds, of which round 1 will be conducted on Thursday.</li><li>Round 2 will be conducted on Saturday for those who have qualified in round 1.</li><li>Seating will be provided.</li></ul>",
    date: "22-08-2024, At 5:40pm",
    venue: "Academic Block-2",
    category: "indoor",
    price: "<br>Single - ₹20<br>Dual - ₹30",
  },
  {
    name: "GK",
    description:
      "<ul><li>Consists of Two Rounds, of which round 1 will be conducted on Thursday.</li><li>Round 2 will be conducted on Saturday for those who have qualified in round 1.</li><li>Seating will be provided.</li></ul>",
    date: "22-08-2024, At 6:10pm",
    venue: "Academic Block-2",
    category: "indoor",
    price: "<br>Single - ₹20<br>Dual - ₹30",
  },
  {
    name: "Painting",
    description:
      '<ul><li>Painting will start at 6:50 p.m. on Thursday and end at 8:20  p.m.</li><li>The theme is "The Essence of Shri Krishna\'s Life."</li><li><b>Drawing sheets will be provided, you should bring the remaining equipment based on your own requirements.</b></li></ul>',
    date: "22-08-2024, At 6:50pm",
    venue: "Academic Block-2",
    category: "indoor",
    price: "₹20",
  },
  {
    name: "Debate",
    description:
      "Engage in a battle of wits in our Debate competition. Articulate your arguments and respond to counterarguments on various current and controversial topics.",
    date: "23-08-2024, At 5:00pm",
    venue: "Academic Block-2",
    category: "indoor",
    price: "₹20",
  },
  {
    name: "Singing",
    description:
      "Perform in our Singing competition, open to soloists, duets, and groups. Impress the judges with your vocal talent and stage presence.",
    date: "23-08-2024, At 5:00pm",
    venue: "Academic Block-2",
    category: "indoor",
    price: "₹20",
  },
  {
    name: "Chess",
    description:
      "Put your strategic thinking to the test in our Chess competition. Compete against other players and showcase your chess skills.",
    date: "23-08-2024, At 6:30pm",
    venue: "Academic Block-2",
    category: "indoor",
    price: "₹20",
  },

  {
    name: "Extempo Speech",
    description:
      "Test your spontaneous speaking skills in our Extempore Speech competition. Participants will speak on a random topic with little preparation.",
    date: "24-08-2024, At 7:00pm",
    venue: "Academic Block-2",
    category: "indoor",
    price: "₹10",
  },
  {
    name: "Hackathon",
    description:
      "Join our Hackathon to innovate and build projects within a limited time. Collaborate with others and showcase your coding and problem-solving skills.",
    date: "Starts on 23-08-2024,  ends on 25-08-2024",
    venue: "Academic Block-2",
    category: "E-ARENA",
    price: "₹50",
  },

  {
    name: "Coding Contest",
    description:
      "Challenge yourself with complex algorithms and problem-solving tasks in this intense coding competition. Test your limits and gain valuable learning experiences.",
    date: "24-08-2024, Starts At 6:15pm",
    venue: "Academic Block-2",
    category: "E-ARENA",
    price: "₹20",
  },

  {
    name: "Ludo",
    description:
      "Enjoy a classic game of Ludo in our Ludo competition. Test your luck and strategy to outplay your opponents.",
    date: "25-08-2024, AT 3:00 PM",
    venue: "Academic Block-2",
    category: "E-ARENA",
    price: "₹20",
  },

  // Outdoor events
  {
    name: "Marathon",
    description:
      "Join our annual Marathon, a celebration of endurance and community spirit. Run through scenic city paths in this inspiring event open to all fitness levels.",
    date: "25-08-2024, Starts at 6 AM",
    venue: "Within RK valley Campus",
    category: "outdoor",
    price: "₹10",
  },
  {
    name: "Treasure Hunt",
    description:
      "Embark on an adventurous journey to solve clues and find hidden treasures across the campus. Teamwork and strategy are key to winning this fun event.",
    date: "25-08-2024, 9 AM - 3 PM",
    venue: "Starts from AB-1",
    category: "outdoor",
    price: "₹100",
  },
  {
    name: "Plastic Picking",
    description:
      "Participate in our Plastic Picking event to help clean up the environment. Make a difference while working together in this community effort.",
    date: "25-08-2024, 9 AM - 3 PM",
    venue: "Campus",
    category: "outdoor",
    price: "₹10",
  },
  {
    name: "Kite Festival",
    description:
      "Design and fly your own kite in this colorful and fun Kite Festival. Compete for the highest, longest, and most artistic flights.",
    date: "25-08-2024, At 4:30pm",
    venue: "Rk Valley Ground",
    category: "outdoor",
    price: "₹30",
  },
  {
    name: "Rangoli",
    description:
      "Begin the celebrations of Vasista with Beautiful and vibrant Rangoli",
    date: "26-08-2024, Early Morning At 6:00am",
    venue: "AB1 road",
    category: "outdoor",
    price: "₹20",
  },

  // Esports events
  {
    name: "Free Fire",
    description:
      "<b>PRIZE POOL BASED ON REGISTRATIONS</b><br>Compete in our Free Fire gaming tournament, a battle royale experience that tests reflexes, strategy, and teamwork.",
    date: "23-08-2024",
    venue: "Remote",
    category: "E-ARENA",
    price: "Rs.100",
  },
  {
    name: "Photography",
    description:
      "Showcase your photography skills in our Photography competition. Capture stunning images and compete for the best shots.",
    date: "Ends on 25-08-2024 night",
    venue: "Campus",
    category: "E-ARENA",
    price: "₹10",
  },
  {
    name: "Insta Reels",
    description:
      "Create and share engaging Insta Reels in our competition. Show off your creativity and editing skills to win exciting prizes.",
    date: "Ends on 25-08-2024 night",
    venue: "Remote",
    category: "E-ARENA",
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
    <p><span class="modal-title-label">Date:</span> <span class="modal-title-value">${event.date}</span></p>
    <p><span class="modal-title-label">Venue:</span> <span class="modal-title-value">${event.venue}</span></p>
    <p><span class="modal-title-label">Price:</span> <span class="modal-title-value">${event.price}</span></p>
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
  description.textContent = `Venue: `;
  description.style.fontWeight = "bold";
  description.style.fontSize = "18px";

  const spanEl = document.createElement("span");
  spanEl.textContent = event.venue;
  spanEl.style.fontWeight = "400";
  spanEl.style.fontSize = "16px";
  description.appendChild(spanEl);

  const date_of_event = document.createElement("p");
  date_of_event.textContent = `Date: `;
  date_of_event.style.fontWeight = "bold";
  date_of_event.style.fontSize = "18px";

  const spanEl2 = document.createElement("span");
  spanEl2.textContent = event.date;
  spanEl2.style.fontWeight = "400";
  spanEl2.style.fontSize = "16px";
  date_of_event.appendChild(spanEl2);

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(date_of_event);
  content.style.cursor = "pointer";
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
  description.textContent = `Venue: `;
  description.style.fontWeight = "bold";
  description.style.fontSize = "18px";

  const spanEl = document.createElement("span");
  spanEl.textContent = event.venue;
  spanEl.style.fontWeight = "400";
  spanEl.style.fontSize = "16px";
  description.appendChild(spanEl);

  const date_of_event = document.createElement("p");
  date_of_event.textContent = `Date: `;
  date_of_event.style.fontWeight = "bold";
  date_of_event.style.fontSize = "18px";

  const spanEl2 = document.createElement("span");
  spanEl2.textContent = event.date;
  spanEl2.style.fontWeight = "400";
  spanEl2.style.fontSize = "16px";
  date_of_event.appendChild(spanEl2);
  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(date_of_event);
  content.style.cursor = "pointer";
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
    (eachItem) =>
      eachItem.category.toLowerCase() === element.textContent.toLowerCase()
  );
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
