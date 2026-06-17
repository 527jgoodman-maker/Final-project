// ===== EVENTS DATA =====
const farmEvents = [
  { name: "Strawberry Picking", season: "Spring", description: "Pick sweet, juicy strawberries fresh from our fields.", image: "assets/images/strawberry.png", dates: "May 10 - June 15" },
  { name: "Sunflower U-Pick", season: "Summer", description: "Wander rows of sunflowers and cut your own bouquet.", image: "assets/images/sunflower.png", dates: "July 5 - August 10" },
  { name: "Hayrides", season: "Summer", description: "Hop on the tractor for a scenic ride around the farm.", image: "assets/images/hayride.png", dates: "Every Saturday in Summer" },
  { name: "Corn Maze", season: "Fall", description: "Get lost (and found) in our giant six-acre corn maze.", image: "assets/images/corn-maze.png", dates: "September 20 - October 31" },
  { name: "Pumpkin Patch", season: "Fall", description: "Pick the perfect pumpkin from our family-grown patch.", image: "assets/images/pumpkin.png", dates: "October 1 - October 31" },
  { name: "Fall Harvest Festival", season: "Fall", description: "Live music, hayrides, and cider donuts all weekend.", image: "assets/images/event.png", dates: "October 12 - October 13" },
  { name: "Holiday Market", season: "Winter", description: "Handmade gifts, hot cocoa, and seasonal goodies.", image: "assets/images/holiday-market.png", dates: "December 6 - December 22" },
  { name: "Christmas Trees", season: "Winter", description: "Cut your own Christmas tree. Free hot cider!", image: "assets/images/christmas-trees.png", dates: "Day after Thanksgiving - December 24" }
];

// ===== PRODUCTS DATA =====
const farmProducts = [
  { name: "Fresh Eggs", category: "Pantry", description: "A dozen eggs from our pasture-raised hens.", image: "assets/images/eggs.png", price: "$8" },
  { name: "Raw Honey", category: "Pantry", description: "Pure wildflower honey from our farm bees.", image: "assets/images/honey.png", price: "$14" },
  { name: "Strawberry Preserves", category: "Pantry", description: "Small-batch preserves from hand-picked berries.", image: "assets/images/jam.png", price: "$10" },
  { name: "Apple Cider", category: "Pantry", description: "Fresh-pressed cider from our orchard.", image: "assets/images/cider.png", price: "$12" },
  { name: "Sourdough Bread", category: "Bakery", description: "Crusty sourdough baked in our farm kitchen.", image: "assets/images/sourdough.png", price: "$9" },
  { name: "Apple Pie", category: "Bakery", description: "Homemade pie with apples from our orchard.", image: "assets/images/apple-pie.png", price: "$18" },
  { name: "Produce Basket", category: "Produce", description: "A weekly mix of seasonal fruits and veggies.", image: "assets/images/produce-basket.png", price: "$25" },
  { name: "Beeswax Candles", category: "Gifts", description: "Hand-poured candles made from our hive wax.", image: "assets/images/candles.png", price: "$15" },
  { name: "Farm Tote Bag", category: "Gifts", description: "Canvas tote with the Hollow Creek Farm logo.", image: "assets/images/tote-bag.png", price: "$12" }
];

// ===== SHOW EVENTS =====
function showEvents(season) {
  const grid = document.getElementById("eventsGrid");
  grid.innerHTML = "";
  farmEvents.forEach(function (e) {
    if (season === "All" || e.season === season) {
      grid.innerHTML += `
        <div class="col-sm-6 col-lg-4">
          <article class="card product-card h-100">
            <img src="${e.image}" class="card-img-top" alt="${e.name} at Hollow Creek Farm" />
            <div class="card-body product-card-body">
              <span class="product-tag">${e.season}</span>
              <h3>${e.name}</h3>
              <p class="event-dates">${e.dates}</p>
              <p>${e.description}</p>
            </div>
          </article>
        </div>`;
    }
  });
}

// ===== SHOW PRODUCTS =====
function showProducts(category) {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";
  farmProducts.forEach(function (p) {
    if (category === "All" || p.category === category) {
      grid.innerHTML += `
        <div class="col-sm-6 col-lg-4">
          <article class="card product-card h-100">
            <img src="${p.image}" class="card-img-top" alt="${p.name} from Hollow Creek Farm" />
            <div class="card-body product-card-body">
              <span class="product-tag">${p.category}</span>
              <h3>${p.name}</h3>
              <p>${p.description}</p>
              <p class="price">${p.price}</p>
            </div>
          </article>
        </div>`;
    }
  });
}

// ===== FILTER BUTTONS =====
document.querySelectorAll("#eventFilters .filter-btn").forEach(function (btn) {
  btn.onclick = function () {
    document.querySelectorAll("#eventFilters .filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    showEvents(btn.dataset.season);
  };
});

document.querySelectorAll("#productFilters .filter-btn").forEach(function (btn) {
  btn.onclick = function () {
    document.querySelectorAll("#productFilters .filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    showProducts(btn.dataset.category);
  };
});

// ===== CONTACT FORM =====
function validateAndSend(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    msg.textContent = "Please fill out every field.";
    msg.className = "form-message mt-3 text-danger";
  } else if (!email.includes("@") || !email.includes(".")) {
    msg.textContent = "Please enter a valid email address.";
    msg.className = "form-message mt-3 text-danger";
  } else {
    msg.textContent = "Thanks, " + name + "! Your message has been sent.";
    msg.className = "form-message mt-3 text-success";
    document.getElementById("contactForm").reset();
  }
}

// ===== SHOW EVERYTHING ON PAGE LOAD =====
showEvents("All");
showProducts("All");
