function toggleMode(){
    const html= document.documentElement
    html.classList.toggle('light')

    //if(html.classlist.contains('light')){
        //html.classlist.remove('light')
        //} else {
        // html.classlist.add('light')
        
       // } o de baixo faz o mesmo porem reduzido de programacao

    

       //PARA MUDAR PARA IMAGEM LIGHT AVATAR ( COMO AINDA NÃO TEM A LIGHT IMAGE, NÃO VAI SURTIR ALTERAÇÕES.)

       //PEGAR A TAG IMG
       const img= document.querySelector("#profile img")

        //SUBSTITUIR A IMAGEM
        if(html.classList.contains('light')){
       //CONDIÇÃO SE TIVER LIGHT MODE ADICIONAR IMAGEM LIGHT
        img.setAttribute('scr', './assets/avatar.png')
        }else{
       //SE TIVER SEM LIGHT MODE MANTER IMAGEM NORMAL.
        img.setAttribute('src', './assets/avatar.png')
        }
}