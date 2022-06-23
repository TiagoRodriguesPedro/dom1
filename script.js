let trocaimagem = document.getElementById("img");
const btntroca = document.getElementById("Troca");
const imagens =["foto1.jpg","foto2.jpg","foto3.jpg"];
let vezes = -1;



btntroca.addEventListener("click",(event) =>{
event.preventDefault();
vezes++;
if(vezes === 3){
    vezes = 0;
}

proximaimamgem();
});

function proximaimamgem (){
 trocaimagem.innerHTML= `
<img src="${imagens[vezes]}" alt="foto1">
`;
}