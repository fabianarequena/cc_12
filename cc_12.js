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


// Task 3 - JavaScript

// Function to add product item
function addProduct() {
    const inventoryList = document.getElementById('inventoryList');
    
    const productItem = document.createElement('li');
    productItem.setAttribute('class', 'product-item');
    productItem.setAttribute('data-product', `Product ${inventoryList.children.length + 1}`);
    productItem.innerText = `Product ${inventoryList.children.length + 1}`;
    
    // Add click listener to remove product
    productItem.addEventListener('click', function() {
        inventoryList.removeChild(productItem);
    });
    
    inventoryList.appendChild(productItem);
}


// Task 4 - JavaScript

const customerSection = document.getElementById('customerSection');

// Parent listener
customerSection.addEventListener('click', () => {
    console.log('Customer section clicked');
});

// Add event listener to each customer card
const customerCards = document.querySelectorAll('.customer-card');

customerCards.forEach(card => {
    card.addEventListener('click', (event) => {
        console.log('Customer card clicked');
        event.stopPropagation();  // Control event bubbling - remove this line to test bubbling
    });
});
