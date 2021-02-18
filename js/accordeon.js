


export function accordeon(array, openClass) {
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener('click', (e) => {toggleItem(e, openClass)}, false)
  }
}


function toggleItem(e, copyOpen){
  let openCopy = document.querySelector("." + copyOpen);
  let sameElem = false;
  if (openCopy){
    closeItem(openCopy, copyOpen);
    sameElem = openCopy.previousElementSibling === e.target;
  }
  if (!sameElem){
    let panel = e.target.nextElementSibling;
    openItem(panel, copyOpen);
  }
}

function closeItem(openCopy, copyOpen){
  openCopy.classList.remove(copyOpen);
}

function openItem(panel, copyOpen){
  panel.classList.add(copyOpen);
}

