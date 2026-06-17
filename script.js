// =====================================================
// EVENTS DATA
// This array stores all farm events.
// Each event is an object with information about:
// - name
// - season
// - description
// - image
// - dates
// =====================================================
const farmEvents = [
  {
    name: "Strawberry Picking",
    season: "Spring",
    description: "Pick sweet, juicy strawberries fresh from our fields.",
    image: "assets/images/strawberry.png",
    dates: "May 10 - June 15"
  },
  {
    name: "Sunflower U-Pick",
    season: "Summer",
    description: "Wander rows of sunflowers and cut your own bouquet.",
    image: "assets/images/sunflower.png",
    dates: "July 5 - August 10"
  },
  {
    name: "Hayrides",
    season: "Summer",
    description: "Hop on the tractor for a scenic ride around the farm.",
    image: "assets/images/hayride.png",
    dates: "Every Saturday in Summer"
  },
  {
    name: "Corn Maze",
    season: "Fall",
    description: "Get lost (and found) in our giant six-acre corn maze.",
    image: "assets/images/corn-maze.png",
    dates: "September 20 - October 31"
  },
  {
    name: "Pumpkin Patch",
    season: "Fall",
    description: "Pick the perfect pumpkin from our family-grown patch.",
    image: "assets/images/pumpkin.png",
    dates: "October 1 - October 31"
  },
  {
    name: "Fall Harvest Festival",
    season: "Fall",
    description: "Live music, hayrides, and cider donuts all weekend.",
    image: "assets/images/event.png",
    dates: "October 12 - October 13"
  },
  {
    name: "Holiday Market",
    season: "Winter",
    description: "Handmade gifts, hot cocoa, and seasonal goodies.",
    image: "assets/images/holiday-market.png",
    dates: "December 6 - December 22"
  },
  {
    name: "Christmas Trees",
    season: "Winter",
    description: "Cut your own Christmas tree. Free hot cider!",
    image: "assets/images/christmas-trees.png",
    dates: "Day after Thanksgiving - December 24"
  }
];

// =====================================================
// PRODUCTS DATA
// This array stores products sold at the farm.
// Each product object contains:
// - name
// - category
// - description
// - image
// - price
// =====================================================
const farmProducts = [
  {
    name: "Fresh Eggs",
    category: "Pantry",
    description: "A dozen eggs from our pasture-raised hens.",
    image: "assets/images/eggs.png",
    price: "$8"
  },
  {
    name: "Raw Honey",
    category: "Pantry",
    description: "Pure wildflower honey from our farm bees.",
    image: "assets/images/honey.png",
    price: "$14"
  },
  {
    name: "Strawberry Preserves",
    category: "Pantry",
    description: "Small-batch preserves from hand-picked berries.",
    image: "assets/images/jam.png",
    price: "$10"
  },
  {
    name: "Apple Cider",
    category: "Pantry",
    description: "Fresh-pressed cider from our orchard.",
    image: "assets/images/cider.png",
    price: "$12"
  },
  {
    name: "Sourdough Bread",
    category: "Bakery",
    description: "Crusty sourdough baked in our farm kitchen.",
    image: "assets/images/sourdough.png",
    price: "$9"
  },
  {
    name: "Apple Pie",
    category: "Bakery",
    description: "Homemade pie with apples from our orchard.",
    image: "assets/images/apple-pie.png",
    price: "$18"
  },
  {
    name: "Produce Basket",
    category: "Produce",
    description: "A weekly mix of seasonal fruits and veggies.",
    image: "assets/images/produce-basket.png",
    price: "$25"
  },
  {
    name: "Beeswax Candles",
    category: "Gifts",
    description: "Hand-poured candles made from our hive wax.",
    image: "assets/images/candles.png",
    price: "$15"
  },
  {
    name: "Farm Tote Bag",
    category: "Gifts",
    description: "Canvas tote with the Hollow Creek Farm logo.",
    image: "assets/images/tote-bag.png",
    price: "$12"
  }
];

// =====================================================
// SHOW EVENTS
// This function displays event cards on the page.
//
// Parameter:
// season = the season selected by the user
//
// If "All" is selected, every event is shown.
// Otherwise, only matching events are displayed.
// =====================================================
function showEvents(season) {

  // Get the events grid from the HTML
  const grid = document.getElementById("eventsGrid");

  // Clear any existing event cards
  grid.innerHTML = "";

  // Loop through every event in the array
  farmEvents.forEach(function (e) {

    // Check if event should be shown
    if (season === "All" || e.season === season) {

      // Add an event card to the page
      grid.innerHTML += `
        <div class="col-sm-6 col-lg-4">
          <article class="card product-card h-100">

            <!-- Event image -->
            <img src="${e.image}"
                 class="card-img-top"
                 alt="${e.name} at Hollow Creek Farm" />

            <div class="card-body product-card-body">

              <!-- Season tag -->
              <span class="product-tag">${e.season}</span>

              <!-- Event title -->
              <h3>${e.name}</h3>

              <!-- Event dates -->
              <p class="event-dates">${e.dates}</p>

              <!-- Event description -->
              <p>${e.description}</p>

            </div>
          </article>
        </div>`;
    }
  });
}

// =====================================================
// SHOW PRODUCTS
// This function displays product cards.
//
// Parameter:
// category = category selected by the user
//
// If "All" is selected, every product is shown.
// Otherwise only matching categories are displayed.
// =====================================================
function showProducts(category) {

  // Get the products grid from HTML
  const grid = document.getElementById("productsGrid");

  // Clear old products
  grid.innerHTML = "";

  // Loop through every product
  farmProducts.forEach(function (p) {

    // Check if product should be shown
    if (category === "All" || p.category === category) {

      // Add product card to page
      grid.innerHTML += `
        <div class="col-sm-6 col-lg-4">
          <article class="card product-card h-100">

            <!-- Product image -->
            <img src="${p.image}"
                 class="card-img-top"
                 alt="${p.name} from Hollow Creek Farm" />

            <div class="card-body product-card-body">

              <!-- Product category -->
              <span class="product-tag">${p.category}</span>

              <!-- Product name -->
              <h3>${p.name}</h3>

              <!-- Product description -->
              <p>${p.description}</p>

              <!-- Product price -->
              <p class="price">${p.price}</p>

            </div>
          </article>
        </div>`;
    }
  });
}

// =====================================================
// EVENT FILTER BUTTONS
//
// Finds every event filter button.
// When a button is clicked:
//
// 1. Remove active class from all buttons
// 2. Add active class to clicked button
// 3. Show matching events
// =====================================================
document
  .querySelectorAll("#eventFilters .filter-btn")
  .forEach(function (btn) {

    btn.onclick = function () {

      // Remove active class from every button
      document
        .querySelectorAll("#eventFilters .filter-btn")
        .forEach(function (b) {
          b.classList.remove("active");
        });

      // Highlight clicked button
      btn.classList.add("active");

      // Show selected season
      showEvents(btn.dataset.season);
    };
  });

// =====================================================
// PRODUCT FILTER BUTTONS
//
// Same idea as event filters.
// Clicking a button filters products.
// =====================================================
document
  .querySelectorAll("#productFilters .filter-btn")
  .forEach(function (btn) {

    btn.onclick = function () {

      // Remove active state from all buttons
      document
        .querySelectorAll("#productFilters .filter-btn")
        .forEach(function (b) {
          b.classList.remove("active");
        });

      // Highlight selected button
      btn.classList.add("active");

      // Show selected category
      showProducts(btn.dataset.category);
    };
  });

// =====================================================
// CONTACT FORM VALIDATION
//
// Runs when the form is submitted.
//
// Checks:
// 1. Are all fields filled out?
// 2. Does email look valid?
//
// If valid:
// - Show success message
// - Clear form
//
// If invalid:
// - Show error message
// =====================================================
function validateAndSend(event) {

  // Stop page from refreshing
  event.preventDefault();

  // Get form values and remove extra spaces
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Area where messages appear
  const msg = document.getElementById("formMsg");

  // Check if any field is empty
  if (name === "" || email === "" || message === "") {

    msg.textContent = "Please fill out every field.";
    msg.className = "form-message mt-3 text-danger";

  }

  // Simple email validation
  else if (!email.includes("@") || !email.includes(".")) {

    msg.textContent = "Please enter a valid email address.";
    msg.className = "form-message mt-3 text-danger";

  }

  // If everything is valid
  else {

    msg.textContent =
      "Thanks, " + name + "! Your message has been sent.";

    msg.className = "form-message mt-3 text-success";

    // Clear the form
    document.getElementById("contactForm").reset();
  }
}

// =====================================================
// PAGE LOAD
//
// When the website first opens:
// - Show all events
// - Show all products
// =====================================================
showEvents("All");
showProducts("All");