  document.addEventListener('DOMContentLoaded', function (){
      let c = 0;
      const bu = document.querySelector('.clickButton');
      const display = document.querySelector('.clickCount');
      const mes = document.querySelector('.mes');

      bu.addEventListener('click', function(){
        c++;
        display.textContent = c;

        if (c >= 15) {
          bu.disabled = true;
          mes.textContent = "Максимальное количество кликов!";
      }
      });


//////////////////////////////////////////////////////////////////////////////////////////////




      let t = 10;
      const dis = document.querySelector('.timer');
      const reset = document.querySelector('.reset');
      let i;

      function startTimer(){
        i = setInterval(function (){
          t--;
          dis.textContent = t;

          if (t <= 0) {
            clearInterval(i);
            dis.textContent = "Время вышло!";
          }
        }, 1000);
      }
      
      reset.addEventListener('click', function (){
        clearInterval(i);
        t = 10;
        dis.textContent = t;
        startTimer();
      });
      startTimer();


//////////////////////////////////////////////////////////////////////////////////////////////


      let o = 0;
      let interval;
      const play = document.querySelector('.timer');
      const start = document.querySelector('.start');
      const stop = document.querySelector('.stop');
      const r = document.querySelector('.r');

      start.addEventListener('click', function (){
        if (!interval) {
          interval = setInterval(function (){
            o++;
            play.textContent = o;
          }, 1000);
        }
      });

      stop.addEventListener('click', function (){
        clearInterval(interval);
        interval = null;
      });

      r.addEventListener('click', function (){
        clearInterval(interval);
        interval = null;
        o = 0;
        play.textContent = o;
      });

// почему то не работает(((




    });