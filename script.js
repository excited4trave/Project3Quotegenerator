function generate(){

//document.getElementsByClassName("quote_box",p)="new quote generated";
var quotes={"― Alysha Speer":'"You never really know whats coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it instead of drown in its monstrosity."',"― Deepak Chopra":'"vSex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.alue1"',"― Albert Einstein":'"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."'}
var authors=Object.keys(quotes);
//console.log(authors);
var author=authors[Math.floor(Math.random()*authors.length)];
var quote=quotes[author];
document.getElementById("quote").innerHTML=quote;
document.getElementById("author").innerHTML=author;

}