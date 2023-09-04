const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const Imge = document.getElementById("home");

const texy = document.getElementById("descrip");

function ChangeIMG1()
{
    Imge.style.backgroundImage= 'url(../Deneme/0_mask-group-339_1a926983.jpg)';
    texy.textContent = "Coolray ile yolları fethedin!"
}

function ChangeIMG2()
{
    Imge.style.backgroundImage= 'url(../Deneme/images/0_mask-group-342_3f31bba8.jpg)';
    texy.textContent = "Yeni Okavango İle Göz Alıcılık Ve Gücü Birleştirdik"
    
}



rightArrow.addEventListener('click',ChangeIMG1);

leftArrow.addEventListener('click',ChangeIMG2);