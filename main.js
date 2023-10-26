window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});

const functionApi = '';

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log('Website called function API.');
      count = res.count;
      document.getElementById('counter').innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });
  return count;
};
