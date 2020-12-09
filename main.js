var answer_selected = false;
var mouse_in_grid = false;
var seen_answer = false;
var cur_percent = 10;

function fill_grid(fill_amt) {
  if(mouse_in_grid) {
    for(var i=1; i<=fill_amt; i++) {
      cell = document.querySelector('#i' + i);
      cell.querySelector('#percent').setAttribute('x','100%');
      cell.style.color = 'pink';
    }

    cell = document.querySelector('#i' + fill_amt);
    partial_person = cell.querySelector('#percent');
    partial_person.setAttribute('x', cur_percent*10+'%');
    console.log("rip");

    for(var i=fill_amt+1; i<=100; i++) {
      cell = document.querySelector('#i' + i);
      if (cell.classList.contains('blank')) {
        cell.style.color = 'black';
      } else {
        cell.style.color = 'red';
      }
    }
  }
}

$(document).ready(function() {
  $(".cell").mousemove(function(event){            
      var relX = event.pageX - $(this).offset().left;
      var width = $('.cell').width();
      cur_percent = Math.round((relX/width) * 10);
  });
});

function choose_answer(fill_amt) {
  for(var i=1; i<=fill_amt; i++) {
    cell = document.querySelector('#i' + i);
    cell.style.color = 'red';
    cell.classList.add('selected');
    cell.classList.remove('blank')
    cell.classList.remove('partial_fill');
  }
  cell = document.querySelector('#i' + fill_amt);
  cell.classList.add('partial_fill');
  partial_person = cell.querySelector('#percent');
  partial_person.setAttribute('x', cur_percent*10+'%');
  guess = document.querySelector('#guess');
  guess.innerHTML = fill_amt-1+(cur_percent/10);

  for(var i=fill_amt+1; i<=100; i++) {
    cell = document.querySelector('#i' + i);
    cell.style.color = 'black';
    cell.classList.add('blank');
    cell.classList.remove('selected')
    cell.classList.remove('partial_fill');
  }
}

function make_grid(fill_grid, choose_answer) {
  var grid = document.createElement('table');
  grid.addEventListener("mouseenter", function() {if(!seen_answer) {mouse_in_grid=true;}});
  grid.addEventListener("mouseleave", function(){
      selected = document.querySelector('#guess');
      selected = parseFloat(guess.innerHTML);
      for(var i=1; i<=100; i++) {
        cell = document.querySelector('#i' + i);
        if (selected != null && i <= Math.ceil(selected)) {
          cell.style.color = 'red';
        } else {
          cell.style.color = 'black';
        }
      }
      partial = document.querySelector('.partial_fill')
      if (partial != null) {
        percent = ((selected%1)*100)+'%'
        console.log(((selected%1)*100)+'%')
        partial.querySelector('#percent').setAttribute('x', percent);
      }
      console.log("bottom");
      mouse_in_grid=false;
    });
  grid.className = 'grid';

  var blank2 = `
    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-fill" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>`

  var blank = `
    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="person">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </clipPath>
      </defs>
      <rect x="0" y="0" fill="currentColor" width="100%" height="100%" clip-path="url(#person)" />
      <rect id="percent" x="100%" y="0" fill="black" width="100%" height="100%" clip-path="url(#person)" />
    </svg>`
  
  let i = 0
  for (var r=0; r<10; ++r) {
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c=0; c<10; ++c){
      var cell = tr.appendChild(document.createElement('td'));
      i++
      cell.setAttribute('id', 'i'+i);
      cell.classList.add('blank');
      cell.classList.add('cell');
      cell.style.color = 'black';
      cell.insertAdjacentHTML( 'beforeend', blank );
      cell.addEventListener("mouseover", (function(i, clicked){ 
                                      return function(){fill_grid(i); }
                                     })(i),false);
      cell.addEventListener("click", (function(i){ 
                                      return function(){choose_answer(i); }
                                     })(i),false);
    }
  }
  return grid
}

officer_grid = document.querySelector('#officer_grid');
grid = make_grid(fill_grid, choose_answer);
officer_grid.appendChild(grid);

function showResults() {
  
}