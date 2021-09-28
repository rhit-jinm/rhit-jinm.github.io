function scrollTop(){
   
    document.querySelector("#scollTop").onclick = (event) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

scrollTop();
