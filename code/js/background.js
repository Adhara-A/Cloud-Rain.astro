const header = document.querySelector(".header")

document.addEventListener('scroll',()=>{
    const scrollY = window.scrollY

    if (scrollY !== 0){
        header.style.position = `fixed;`;
        header.style.width = `100%`;
    }else{
        header.style.position = '';
    }
})
