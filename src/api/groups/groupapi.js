export const fetchGroup=  async () => {
    fetch('http://localhost:3500/group')
      .then(response => response.json())
      .then((data) => {return data} )
      .catch(error => console.error('Error fetching data: ', error));
  };
