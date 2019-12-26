// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item

for (i =2; i < 4; i++) {
    var list = document.querySelector('#myUL' + [i]);
    console.log(list);
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        }
    }, false);
}


// var list = document.querySelector('#myUL');
// var list2 = document.querySelector('#myUL2');
// var list3 = document.querySelector('#myUL3');
// console.log(list, list2, list3);
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
// list2.addEventListener('click', function(ev) {
//     if (ev.target.tagName === 'LI') {
//       ev.target.classList.toggle('checked');
//     }
//   }, false);
// list3.addEventListener('click', function(ev) {
// if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
// }
// }, false);



// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput1").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Wpisz nazwę zadania do realizacji.");
  } else {
    document.getElementById("myUL1").appendChild(li);
  }
  document.getElementById("myInput1").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


function newElement2() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput2").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Wpisz zadanie, które doszło w trakcie prac");
    } else {
      document.getElementById("myUL2").appendChild(li);
    }
    document.getElementById("myInput2").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }


  function newElement3() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput3").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Dopisz zadanie, które ukończyłeś");
    } else {
      document.getElementById("myUL3").appendChild(li);
    }
    document.getElementById("myInput3").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }