let indoorEl = document.getElementById("INDOOR");
let outdoorEl = document.getElementById("VIRTUAL");
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
  {
    name: "Coding Contest",
    description:
      "This competition is designed to challenge participants with complex algorithms, data structures, and problem-solving tasks. Coders from different backgrounds will compete against the clock to solve as many problems as possible. The event will push participants to think critically and code efficiently. Whether you’re a beginner or an expert, this contest will test your limits and offer valuable learning opportunities. Join us for a day of intense coding and collaboration!",
    date: "23/08/2024",
    venue: "AB-2",
    category: "indoor",
    coordinators: [{ name: "Bro", phone: "9898989898" }],
  },
  {
    name: "Treasure Hunt",
    description:
      "Get ready for an adventurous day with our Treasure Hunt event! Teams will race against each other to solve clues and find hidden treasures scattered across the campus. This event is not just about speed; it’s about strategy, teamwork, and thinking outside the box. Participants will need to navigate through challenging puzzles and obstacles. The thrill of discovery and the joy of solving mysteries will make this an unforgettable experience. Don’t miss out on the fun and excitement!",
    date: "25/08/2024",
    venue: "Campus Grounds",
    category: "virtual",
    coordinators: [
      { name: "Alice", phone: "9123456789" },
      { name: "Bob", phone: "9876543210" },
    ],
  },
  {
    name: "Marathon",
    description:
      "Our annual Marathon is more than just a race; it’s a celebration of endurance, perseverance, and community spirit. Participants will take on a challenging route that winds through the city’s scenic paths. Whether you're running for fitness, charity, or personal achievement, this event offers something for everyone. The marathon is open to all levels, from seasoned runners to first-timers. Join us in this inspiring journey where every step counts towards a healthier, happier you.",
    date: "01/09/2024",
    venue: "City Park",
    category: "virtual",
    coordinators: [{ name: "Charlie", phone: "9988776655" }],
  },
  {
    name: "Quiz",
    description:
      "Test your knowledge and quick thinking in our exciting Quiz competition! Participants will be challenged on a wide range of topics, including science, history, literature, and pop culture. This event is perfect for trivia enthusiasts who love a good challenge. Teams will compete in several rounds, each more difficult than the last, to claim the title of Quiz Champions. Whether you’re a trivia buff or just looking for some fun, this event promises to be both educational and entertaining.",
    date: "10/09/2024",
    venue: "Lecture Hall 3",
    category: "indoor",
    coordinators: [
      { name: "Dave", phone: "9123454321" },
      { name: "Eve", phone: "9234567890" },
    ],
  },
  {
    name: "Debate",
    description:
      "Engage in a battle of wits and words in our Debate competition! This event offers a platform for participants to express their opinions on various current and controversial topics. Debaters will need to articulate their arguments clearly and persuasively while responding to counterarguments with poise. The competition will be judged on content, delivery, and critical thinking. Whether you're passionate about public speaking or just want to voice your opinions, this debate is the perfect arena to showcase your skills.",
    date: "18/09/2024",
    venue: "Debate Hall",
    category: "indoor",
    coordinators: [{ name: "Frank", phone: "9345678901" }],
  },
  {
    name: "Drawing",
    description:
      "Unleash your creativity in our Drawing competition! This event invites artists of all skill levels to showcase their talent through various drawing techniques. Participants will have the freedom to choose their medium and theme, allowing for maximum artistic expression. The competition will be judged on originality, technique, and overall impact. Whether you’re an experienced artist or just love to doodle, this event is a great opportunity to display your creativity and win exciting prizes.",
    date: "25/09/2024",
    venue: "Art Studio",
    category: "indoor",
    coordinators: [{ name: "Grace", phone: "9456789012" }],
  },
  {
    name: "Singing",
    description:
      "Showcase your vocal talents in our Singing competition! This event is open to solo performers, duets, and groups who are ready to entertain and impress the audience. Participants can choose from a variety of music genres, from classical to contemporary, ensuring a diverse and vibrant competition. The judges will be looking for vocal quality, stage presence, and overall performance. Whether you’re an aspiring singer or just love to perform, this competition is your chance to shine on stage.",
    date: "05/10/2024",
    venue: "Music Hall",
    category: "indoor",
    coordinators: [{ name: "Hank", phone: "9567890123" }],
  },
  {
    name: "Kite Competition",
    description:
      "Take to the skies in our Kite Competition, where creativity and skill meet the wind! Participants will design and fly their own kites, competing for the highest, longest, and most artistic flights. This event is perfect for families, friends, and kite enthusiasts who love to see their creations soar. The competition will be judged on design, flight performance, and creativity. Join us for a day of colorful kites and friendly competition, and let your imagination take flight!",
    date: "15/10/2024",
    venue: "Sports Ground",
    category: "virtual",
    coordinators: [
      { name: "Ivy", phone: "9678901234" },
      { name: "Jack", phone: "9789012345" },
    ],
  },
  {
    name: "Freefire",
    description:
      "Dive into the action-packed world of Freefire in our gaming tournament! This event will bring together gamers from all around to compete in one of the most popular battle royale games. Participants will need sharp reflexes, strategic thinking, and teamwork to survive and be the last one standing. The tournament will feature multiple rounds, with the intensity increasing as the field narrows down to the top players. Whether you’re a seasoned gamer or new to the game, this competition promises adrenaline-pumping action and exciting rewards.",
    date: "22/10/2024",
    venue: "Gaming Arena",
    category: "indoor",
    coordinators: [{ name: "Ken", phone: "9890123456" }],
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
    <p><span class="modal-title-label">Coordinators:</span> <span class="modal-title-value" id="eventCoordinators">${event.coordinators
      .map((coordinator) => `${coordinator.name} (${coordinator.phone})`)
      .join(", ")}</span></p>
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
