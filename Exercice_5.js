const fetchData = async function() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };
  
  fetchData().then(function(data) {
    console.log(data);
  });