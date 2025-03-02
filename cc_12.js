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
