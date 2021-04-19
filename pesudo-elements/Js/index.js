// sessionStorage.clear();

window.addEventListener('load', e => {
    deletBtn.style.display = "none";
    var sce = 0;
    if(sessionStorage.length <= 0)
    {
        warning.innerHTML = "0";
    }else
    {

        for(var i=0; i < sessionStorage.length; i++){
            var LKey = sessionStorage.key(i);
            var Lget = sessionStorage.getItem(LKey);
            sce = sce + Number(Lget);
        }
        sce = String(sce);
        allNums.innerHTML = sce;
    }
    if(sce == "NaN")
    {
        showAll();
    }
});

/* add Slots to loccal storage when */ 
// setup vars
var addSlotButton = document.querySelector("#addSlotsButton");
var warning = document.querySelector(".warning");
var allNums = document.querySelector("#allreaded");

// function to add every thing to sessionStorage
addSlotButton.addEventListener("click", addslotfunc);

function addslotfunc(){
    var sure = Number(prompt("أدخل عدد الصفحات"));
    if(sure <= 0)
    {

        warning.innerHTML += "<div class='badge bg-danger tonone' onclick='myfunc()' style=''>نص أو رقم غير مقبول</div>";

    }else if(sure >= 1)
    {
        
        if(sessionStorage.getItem(randomNum()) != null || sessionStorage.getItem(randomNum()) != undefined)
        {
            warning.innerHTML = "حاول مرةً أخرى";
        }else
        {
            sessionStorage.setItem(randomNum(), sure);
            showAll();
        }

    }
}
/* it ends in here  */


/* add function that is going to show u all what u saved */
// setup vars
var showNumsBTN = document.querySelector("#showreaded");
showNumsBTN.addEventListener('click', showAll);
// the function
function showAll(){
    deletBtn.style.display = "inline-block";
    var sce = 0;
    if(sessionStorage.length <= 0)
    {
        warning.innerHTML = "لا يوجد أي شيء تم قراءته";
    }else
    {
        var els = "";
        els += "<table class='tabel' ><tr><th class='id' title=''></th><th>عدد الصفحات</th></tr>";
        for(var i=0; i < sessionStorage.length; i++){
            var LKey = sessionStorage.key(i);
            var Lget = sessionStorage.getItem(LKey);
            els += "<tr>";
            els += "<td>" + `<input class='tick' type='checkbox' data-id='${LKey}'>` + "</td>"; 
            els += `<td>` + Lget + "</td>";
            els += "</tr>";
            sce = sce + Number(Lget);
        }
        els += "</table>";
        warning.innerHTML = els;
        allNums.innerHTML = sce;

    }
    selectorAll = document.querySelectorAll('.tick');
    for(let i=0;i < selectorAll.length;){
        // selectorAll[i].setAttribute('data-class-num', false);
        selectorAll[i].addEventListener('click', e => {
            if(e.target.classList.contains("checked") == true){
                e.target.classList.remove("checked");
            }else{
                e.target.classList.add("checked");
            }
        });
        i++;
    };
}


// function to generate or render a spiceal num 
function randomNum() {
    var Num1 = Math.floor(Math.random() * 9);
    var Num2 = Math.floor(Math.random() * 9);
    var Num3 = Math.floor(Math.random() * 9);
    var Num4 = Math.floor(Math.random() * 9);
    var alldone = `${Num1}${Num2}${Num3}${Num4}`;
    return alldone;
}



// function when click on the checkbox input
var deletBtn = document.querySelector("#deletbtn");
var selectorAll = document.querySelectorAll('.tick');

// fk i dont have time to explaine
var bigone = document.getElementById("bigone");
bigone.addEventListener('mouseover', () => {
    selectorAll = document.querySelectorAll('.tick');
});


deletBtn.addEventListener('click', e => {
    var checked = document.querySelectorAll(".checked");
    var cc = "";
    if(checked.length <= 0){
        alert("select to delete");
    }else{
        cc = confirm("هل متأكد لحذف [ " + checked.length + " ] البيانات");
    }
    if(cc == true){
        for(let i=0; i < checked.length;){
            var itemToRemoveFromLS = checked[i].getAttribute('data-id');
            sessionStorage.removeItem(itemToRemoveFromLS);
            i++;
        }
        showAll();
    }
});
function myfunc(){
    var hh = document.querySelectorAll(".tonone");
    for(var i=0; i < hh.length;){
        hh[i].style.display = "none";
        console.log(hh[i]);
        console.log(hh.length);
        i++;
    }
}