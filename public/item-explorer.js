fetch('/')
  .then(response => response.text())
  .then(data => {
    console.log('Server response:', data);
    // Yahan aap data ko page pe show bhi kar sakte hain
    // document.getElementById('output').innerText = data;
  })
  .catch(error => {
    console.error('Error fetching from server:', error);
  });