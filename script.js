var title = document.getElementById("title");
var Content = document.getElementById("Content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

btn.addEventListener("click", function(){
    if(title.value == "") {
        alert("標題不可為空白");
    }else if(Content.value == ""){
        alert("內容不可為空白");
    }else{
        list.innerHTML = list.innerHTML + `
        <div class="Article">
            <h2>${title.value}</h2>
            <p>${Content.value}</p>
        </div>
        `;
    }
    title.value = "";
    Content.value = ""; 
})