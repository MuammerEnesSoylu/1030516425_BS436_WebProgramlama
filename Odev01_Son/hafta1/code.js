var cevap = Math.floor(Math.random() * 3) + 1;

function kontrol1(){

    var imgdogru = "https://i.cbc.ca/1.5359228.1573744932!/fileImage/httpImage/smudge-the-viral-cat.jpg";
    var imgyanlis = "https://i.kym-cdn.com/photos/images/newsfeed/001/505/717/49b.jpg";

    var imgdegis0 = document.getElementById('img0');
    var imgdegis1 = document.getElementById('img1');
    var imgdegis2 = document.getElementById('img2');
    var mesaj = document.getElementById('alan');
    var yenile = document.getElementById('yenile');
    if (cevap === 1)
    {
        imgdegis0.src =imgdogru;
        imgdegis1.src =imgyanlis;
        imgdegis2.src =imgyanlis;
        mesaj.innerHTML = "Doğru Bildiniz Tebrikler Yeniden Oynamak için ";
        yenile.innerHTML = "TIKLAYINIZ";
    }
    else
    {
        imgdegis0.src =imgyanlis;
        mesaj.innerHTML = "Lütfen Tekrar Deneyin";
        yenile.innerHTML ="";
    }
}

function kontrol2(){
    var imgdogru = "https://i.cbc.ca/1.5359228.1573744932!/fileImage/httpImage/smudge-the-viral-cat.jpg";
    var imgyanlis = "https://i.kym-cdn.com/photos/images/newsfeed/001/505/717/49b.jpg";

    var imgdegis0 = document.getElementById('img0');
    var imgdegis1 = document.getElementById('img1');
    var imgdegis2 = document.getElementById('img2');
    var mesaj = document.getElementById('alan');
    var yenile = document.getElementById('yenile');
    if (cevap === 2)
    {
        imgdegis0.src =imgyanlis;
        imgdegis1.src =imgdogru;
        imgdegis2.src =imgyanlis;
        mesaj.innerHTML = "Doğru Bildiniz Tebrikler Yeniden Oynamak için ";
        yenile.innerHTML = "TIKLAYINIZ";
    }
    else
    {
        imgdegis1.src =imgyanlis;
        mesaj.innerHTML = "Lütfen Tekrar Deneyin";
        yenile.innerHTML ="";
    }
}

function kontrol3(){
    var imgdogru = "https://i.cbc.ca/1.5359228.1573744932!/fileImage/httpImage/smudge-the-viral-cat.jpg";
    var imgyanlis = "https://i.kym-cdn.com/photos/images/newsfeed/001/505/717/49b.jpg";

    var imgdegis0 = document.getElementById('img0');
    var imgdegis1 = document.getElementById('img1');
    var imgdegis2 = document.getElementById('img2');
    var mesaj = document.getElementById('alan');
    var yenile = document.getElementById('yenile');
    if (cevap === 3)
    {
        imgdegis0.src =imgyanlis;
        imgdegis1.src =imgyanlis;
        imgdegis2.src =imgdogru;
        mesaj.innerHTML = "Doğru Bildiniz Tebrikler Yeniden Oynamak için ";
        yenile.innerHTML = "TIKLAYINIZ";
    }
    else
    {
        imgdegis2.src =imgyanlis;
        mesaj.innerHTML = "Lütfen Tekrar Deneyin";
        yenile.innerHTML ="";
    }
}
