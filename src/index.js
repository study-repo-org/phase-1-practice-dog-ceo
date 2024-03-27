document.addEventListener("DOMContentLoaded", function () {
  // Challenge 1: Fetch images of dogs and add them to the DOM
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogImageContainer = document.getElementById("dog-image-container");
      data.message.forEach((imageUrl) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        dogImageContainer.appendChild(imgElement);
      });
    });

  // Challenge 2: Fetch all dog breeds and add them to the <ul>
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogBreedsList = document.getElementById("dog-breeds");
      for (const breed in data.message) {
        const breedListItem = document.createElement("li");
        breedListItem.textContent = breed;
        dogBreedsList.appendChild(breedListItem);
      }
    });

  // Challenge 3: Change font color of <li> on click
  const dogBreedsList = document.getElementById("dog-breeds");
  dogBreedsList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      event.target.style.color = "blue"; // Change font color to blue (you can choose any color)
    }
  });

  // Challenge 4: Filter breeds based on selected letter from dropdown
  const breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener("change", function (event) {
    const selectedLetter = event.target.value;
    const breedListItems = document.querySelectorAll("#dog-breeds li");
    breedListItems.forEach((item) => {
      if (item.textContent.startsWith(selectedLetter)) {
        item.style.display = "block"; // Show the breed if it starts with the selected letter
      } else {
        item.style.display = "none"; // Hide the breed if it doesn't start with the selected letter
      }
    });
  });
});
