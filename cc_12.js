// Task 1

// Select dashboard using both methods
const dashboardById = document.getElementById('dashboard');
const dashboardByQuery = document.querySelector('#dashboard');

// Create new metric card element
const revenueCard = document.createElement('div');

// Set attributes for class and id
revenueCard.setAttribute('class', 'metric-card');
revenueCard.setAttribute('id', 'revenueCard');

// Populate with content
revenueCard.innerHTML = `<h3>Revenue</h3><p>$0</p>`;

// Append to dashboard
dashboardById.appendChild(revenueCard);


// Task 2

// Select all metric cards
const metricCards = document.querySelectorAll('.metric-card');

// Convert NodeList to Array
const metricCardsArray = Array.from(metricCards);

// Update each card using forEach
metricCardsArray.forEach(card => {
    card.innerText += " - Updated"; // Appends ' - Updated' to each card's text
    card.style.backgroundColor = "#f0f0f0"; // Change background for visibility
});
