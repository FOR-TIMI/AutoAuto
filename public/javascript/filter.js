async function filterClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch('/api/filter-routes', {
      method: 'PUT',
      body: JSON.stringify({
        post_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.filter-btn-car-make').addEventListener('click', filterClickHandler);
  document.querySelector('.filter-btn-car-year').addEventListener('click', filterClickHandler);
  document.querySelector('.filter-btn-car-price').addEventListener('click', filterClickHandler);
  document.querySelector('.filter-btn-car-model').addEventListener('click', filterClickHandler);
  