document.addEventListener('DOMContentLoaded', function (){
    

     const coords = document.querySelector('.coords');

  document.addEventListener('mousemove', function (event) {
    const x = event.clientX;
    const y = event.clientY;

    coords.textContent = `X: ${x} | Y: ${y}`;

    // Дополнительное задание: изменение цвета
    if (x > 500) {
      coords.style.color = 'red';
    } else {
      coords.style.color = 'black';
    }
  });


 });