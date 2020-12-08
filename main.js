var answer_selected = false;
var mouse_in_grid = false;
var seen_answer = false;

function fill_grid(fill_amt) {
  if(mouse_in_grid) {
    for(var i=1; i<=fill_amt; i++) {
      cell = document.querySelector('#i' + i);
      cell.style.color = 'pink';
    }
    for(var i=fill_amt+1; i<=100; i++) {
      cell = document.querySelector('#i' + i);
      if (cell.className == 'blank') {
        cell.style.color = 'black';
      } else {
        cell.style.color = 'red';
      }
    }
  }
}

function choose_answer(fill_amt) {
  // answer_selected = true;
  // console.log("clicked")
  for(var i=1; i<=fill_amt; i++) {
    cell = document.querySelector('#i' + i);
    cell.style.color = 'red';
    cell.setAttribute('class', 'selected')
    guess = document.querySelector('#guess');
    guess.innerHTML = i;
  }
  for(var i=fill_amt+1; i<=100; i++) {
    cell = document.querySelector('#i' + i);
    cell.style.color = 'black';
    cell.setAttribute('class', 'blank')
  }
}

function make_grid(fill_grid, choose_answer) {
  var grid = document.createElement('table');
  grid.addEventListener("mouseenter", function() {if(!seen_answer) {mouse_in_grid=true;}});
  grid.addEventListener("mouseleave", function(){ 
      for(var i=1; i<=100; i++) {
        cell = document.querySelector('#i' + i);
        if (cell.className == 'blank') {
          cell.style.color = 'black';
        } else {
          cell.style.color = 'red';
        }
      }
      mouse_in_grid=false;
    });
  grid.className = 'grid';

  var blank = `
    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-fill" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>`
  
  let i = 0
  for (var r=0; r<10; ++r) {
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c=0; c<10; ++c){
      var cell = tr.appendChild(document.createElement('td'));
      i++
      cell.setAttribute('id', 'i'+i);
      cell.setAttribute('class', 'blank');
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