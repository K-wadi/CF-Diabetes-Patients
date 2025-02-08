fetch(`${process.env.REACT_APP_API_URL}/endpoint`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  console.log(process.env.REACT_APP_API_URL);
