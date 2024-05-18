
   // Load elements from JSON file
    fetch('elements.json')
      .then(response => response.json())
      .then(elements => {
        const elementsDiv = document.getElementById('elements');
        elements.forEach(element => {
          const div = document.createElement('div');
          div.className = 'element';
          div.textContent = element.name;
          div.onclick = () => showCombinations(element);
          elementsDiv.appendChild(div);
        });
      })
      .catch(error => console.error('Error loading elements:', error));

    function showCombinations(element) {
      const combinationsDiv = document.getElementById('combinations');
      combinationsDiv.innerHTML = `<h2>${element.name} Combinations</h2>`;
      if (element.combinations && element.combinations.length > 0) {
        element.combinations.forEach((combination, index) => {
          combinationsDiv.innerHTML += `<p><strong>Step ${index + 1}:</strong> ${combination}</p>`;
        });
      } else {
        combinationsDiv.innerHTML += '<p>No combinations found for this element.</p>';
      }
    }

    document.getElementById('searchInput').addEventListener('input', function(event) {
      const searchTerm = event.target.value.toLowerCase();
      const elementsDiv = document.getElementById('elements');
      const elements = elementsDiv.getElementsByClassName('element');
      for (const element of elements) {
        const elementName = element.textContent.toLowerCase();
        if (elementName.includes(searchTerm)) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      }
    });
