

var art_list=["art1.jpg","art2.jpg","art3.jpg","art4.jpg","art5.jpg","art6.jpg","art7.jpg","art8.jpg"];
var titles=["art1","art2","art3","art4","art5","art6","art7","art8"];
var messages=["poster, sweet home","poster, sweet home","poster, sweet home","poster, sweet home","poster, sweet home","poster, sweet home","poster, sweet home","poster, sweet home"];

//var divContents= document.querySelector(".contents");
////for (i in art_list){
//var divItems = document.createElement("div");
//divItems.className="items";
//divContents.appendChild(divItems);
////}
contents=document.querySelector(".contents");
bottom=document.querySelector(".bottom");

//addBtn=document.createElement("input");
//addBtn.type=""



for (i in art_list){
div=document.createElement("div");
div.className='base';
div_items=document.createElement("div");
div_items.className="items";



a=document.createElement("a");
a.href="detail"+(parseInt(i)+1)+".html";
span=document.createElement("span");
img=document.createElement("img");
img.src="art/"+art_list[i];
img.style.width="100%";
h4=document.createElement("h4");
title=document.createTextNode(titles[i]);
txt=document.createTextNode(messages[i]);
a.appendChild(img);
h4.appendChild(title);
span.appendChild(txt);
div.appendChild(a);
div.appendChild(h4);
div.appendChild(span);
contents.appendChild(div);
}


//document.body.insertBefore(contents,bottom);


//<a href="detail1.html"><img src="art/art1.jpg"></a><h4>art1</h4><span>poster, sweet home</span>


