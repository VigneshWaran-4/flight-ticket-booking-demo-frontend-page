const bookingForm = document.getElementById('bookingForm');
const resultsDiv = document.getElementById('results');

bookingForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;
  
  
  const flights = [
    { id: 1, from: 'Delhi', to: 'Mumbai', date: '2024-04-01', price: 200 },
    { id: 2, from: 'Delhi', to: 'Bangalore', date: '2024-04-01', price: 250 },
    { id: 3, from: 'Mumbai', to: 'Delhi', date: '2024-04-02', price: 180 },
  ];
  

  const filteredFlights = flights.filter(flight => 
    flight.from.toLowerCase() === from.toLowerCase() &&
    flight.to.toLowerCase() === to.toLowerCase() &&
    flight.date === date
  );
  

  displayResults(filteredFlights);
});

function displayResults(flights) {
  resultsDiv.innerHTML = ''; 
  
  if (flights.length === 0) {
    resultsDiv.innerHTML = '<p>No flights found for the selected criteria.</p>';
    return;
  }
  
  const ul = document.createElement('ul');
  
  flights.forEach(flight => {
    const li = document.createElement('li');
    li.textContent = `Flight from ${flight.from} to ${flight.to} on ${flight.date} - Price: $${flight.price}`;
    ul.appendChild(li);
  });
  
  resultsDiv.appendChild(ul);
}
