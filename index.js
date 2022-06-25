
function greenSignal(id) {
  for (let index = 30; index >= 0; index--) {
    setTimeout(() => {
      document.getElementById("green-"+id).innerHTML = index;
      document.getElementsByClassName("grnclr")[id-1].style.background =
        "rgb(2, 196, 2)";
      console.log(index);

      setTimeout(() => {
        document.getElementsByClassName("grnclr")[id-1].style.background =
          "rgb(1, 93, 1)";
      }, 30000);
    }, 1000 * (30 - index));
  }
}

function yellowSignal(id) {
  for (let index = 5; index >= 0; index--) {
    setTimeout(() => {
      document.getElementById("yellow-"+id).innerHTML = index;
      document.getElementsByClassName("ylclr")[id-1].style.background =
        "rgb(226, 96, 3)";
      console.log(index);

      setTimeout(() => {
        document.getElementsByClassName("ylclr")[id-1].style.background =
          "rgb(120, 74, 3)";
      }, 5000);
    }, 1000 * (5 - index));
  }
}

function redSignal(start,id) {
  for (let index = start; index >= 0; index--) {
    setTimeout(() => {
      document.getElementById("red-"+ id).innerHTML = index;
      document.getElementsByClassName("redclr")[id-1].style.background =
        "rgb(255, 0, 0)";
      console.log(index);
    }, 1000 * (start - index));
  }
}


//first 
redSignal(35,2);//35
redSignal(70,3);//70
redSignal(105,4);//105

greenSignal(1);//30
setTimeout(() => {
  yellowSignal(1);//5
}, 30000);
//second
setTimeout(() => {
  redSignal(105,1);//105
  greenSignal(2);//30
  setTimeout(() => {
    yellowSignal(2);//5
  }, 30000);
}, 35000);

setTimeout(() => {
   redSignal(105,2)
  greenSignal(3);
  setTimeout(() => {
    yellowSignal(3);
  }, 30000);
}, 70000);
setTimeout(() => {
  greenSignal(4);
  redSignal(35,1);//35
  redSignal(70,2);//70
  redSignal(105,3);//105
  setTimeout(() => {
    yellowSignal(4);
  }, 30000);
}, 105000);

function refresh(t) {
  setTimeout("location.reload(true);", t);
}
