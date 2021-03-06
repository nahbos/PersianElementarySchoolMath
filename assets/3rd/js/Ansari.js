function p13ques1() {
  check("p13q1_1",8)
  check("res","corr")

}

function p13ques2() {
  check("p13q2_1",16)
  check("p13q2_2",22)
  check("p13q2_3",30)
  check("p13q2_4",10)

}
 function check(id,c){
  x = document.getElementById(id).value;
  if (x == c) {
    document.getElementById(id).style.background = "lightgreen";
    } else {
      document.getElementById(id).style.background = "#e45f5f";
    }
 }


 function p14ques1() {
  check("p14q1_1",2)
  check("p14q1_2",8)
  check("p14q1_3",17)
  check("p14q1_4",142)

  check("p14q2_1",19)
  check("p14q2_2",34)
  check("p14q2_3",229)

}


function p14ques2() {
  check("p14q3_1",20)
  check("p14q3_2",25)
  check("p14q3_3",150)

  check("p14q4_1",5)
  check("p14q4_2",40)
  check("p14q4_3",120)

}

function p14ques3() {
  check("p14q5_1",14)
  check("p14q5_2",28)
  check("p14q5_3",145)

  check("p14q5_4",29)
  check("p14q5_5",43)
  check("p14q5_6",160)

}

function p14d() {
  check("p14d",6)
}

function p15ques1() {
  check("p15q1_1",9)

  check("p15q2_1",25)
  check("p15q2_2",30)
  check("p15q2_3",35)
  check("p15q2_4",40)
  check("p15q2_5",45)
  check("p15q2_6",50)
  check("p15q2_7",55)
  check("p15q2_8",60)

  check("res","corr")

}



function p15ques2() {
  check("p15q3_1_1",15)

  check("p15q3_1",35)
  check("p15q3_2",55)

  check("p15q4_1",25)
  check("p15q4_2",45)
  check("p15q4_3",30)

  check("p15q5_1_1",5)
  check("p15q5_1_2",15)

  check("p15q5_1",40)
  check("p15q5_2",45)
  check("p15q6_1",35)
  check("p15q6_2",30)

}
 




function checkplace(a,b,x1,x2,y1,y2){
  if (x1<a && x2>a && y1<b && y2>b ){
    rep = true
  }
  else{
    rep = false
  }
  return rep
}



function getCurrentPageFromURL() {
  /*
  This function extracts page number from url
  */
  let numberPattern = /\d+/g;
  let url_numbers = window.location.href.match(numberPattern);
  return parseInt(url_numbers[url_numbers.length - 1])
}
let current_page = getCurrentPageFromURL()
console.log("current page : " + current_page)


function prevPage() {
  if (current_page > 1) {
      current_page--;
      changePage(current_page);
  }
}

function nextPage() {
  current_page++;
  changePage(current_page);
}

function changePage(page) {

  window.location.href = `./book_3_${page}.html`;

}

function loadPageChanger() {
  document.querySelector(".page-number input").value = current_page
}


document.addEventListener("DOMContentLoaded", function (event) {
  const input = document.querySelector(".page-number input")
  input.addEventListener('keypress', changePageOnEnter);

  function changePageOnEnter(e) {
      if (e.key === "Enter") {
          changePage(input.value)
      }
  }
  document.querySelector(".prev-page,.prev").addEventListener("click", prevPage);
  document.querySelector(".next-page,.next").addEventListener("click", nextPage);

  loadPageChanger();
});