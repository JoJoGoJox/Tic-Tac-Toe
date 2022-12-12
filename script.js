const box = document.querySelectorAll(".box"); 
let move = 0; 
box.forEach((item) => { 
  item.addEventListener("click", () => { 
    if (move % 2 === 0) { 
      if (checkFree(item)) { 
        item.innerHTML = "X"; 
        move++; 
      } 
    } else { 
      if (checkFree(item)) { 
        item.innerHTML = "O"; 
        move++; 
      } 
    } 
 
    if (checkWinner()) { 
      const whoWon = move % 2 === 0 ? "O" : "X"; 
      setTimeout(() => { 
        alert(`Winner ${whoWon}`); 
        window.location.reload(); 
      }, 10); 
    } 
  }); 
}); 
 
function checkFree(item) { 
  if (item.innerHTML === "") { 
    return true; 
  } else { 
    return false; 
  } 
} 
 
function checkWinner() { 
  if ( 
    box[0].innerHTML === "X" && 
    box[1].innerHTML === "X" && 
    box[2].innerHTML === "X" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[3].innerHTML === "X" && 
    box[4].innerHTML === "X" && 
    box[5].innerHTML === "X" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[6].innerHTML === "X" && 
    box[7].innerHTML === "X" && 
    box[8].innerHTML === "X" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[0].innerHTML === "X" && 
    box[4].innerHTML === "X" && 
    box[8].innerHTML === "X" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[2].innerHTML === "X" && 
    box[4].innerHTML === "X" && 
    box[6].innerHTML === "X" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[0].innerHTML === "X" && 
    box[3].innerHTML === "X" && 
    box[6].innerHTML === "X" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[1].innerHTML === "X" && 
    box[4].innerHTML === "X" && 
    box[7].innerHTML === "X" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[2].innerHTML === "X" && 
    box[5].innerHTML === "X" && 
    box[8].innerHTML === "X" 
  ) { 
    return true; 
  } 
 
  // Нолики 
 
  if ( 
    box[0].innerHTML === "O" && 
    box[1].innerHTML === "O" && 
    box[2].innerHTML === "O" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[3].innerHTML === "O" && 
    box[4].innerHTML === "O" && 
    box[5].innerHTML === "O" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[6].innerHTML === "O" && 
    box[7].innerHTML === "O" && 
    box[8].innerHTML === "O" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[0].innerHTML === "O" && 
    box[4].innerHTML === "O" && 
    box[8].innerHTML === "O" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[2].innerHTML === "O" && 
    box[4].innerHTML === "O" && 
    box[6].innerHTML === "O" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[0].innerHTML === "O" && 
    box[3].innerHTML === "O" && 
    box[6].innerHTML === "O" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[1].innerHTML === "O" && 
    box[4].innerHTML === "O" && 
    box[7].innerHTML === "O" 
  ) { 
    return true; 
  } 
 
  if ( 
    box[2].innerHTML === "O" && 
    box[5].innerHTML === "O" && 
    box[8].innerHTML === "O" 
  ) { 
    return true; 
  } 
}


