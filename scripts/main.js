function scrollTop(){
    var profolio = document.getElementById("portfolioItems");
    document.querySelector("#scollTop").onclick = (event) => {
       console.log(profolio.scrollTop);
    };
}
scrollTop()
