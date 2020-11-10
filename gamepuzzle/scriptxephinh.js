// change image at 1st row
function change1(){
    let a = document.getElementById('img1').src.indexOf("image/cat1.jpg")
    let b = document.getElementById('img1').src.indexOf("image/charizard1.jpg")
    let c = document.getElementById('img1').src.indexOf("image/dog1.jpg")
    if(a > -1){
        document.getElementById('img1').src = 'image/charizard1.jpg'
    } else if (b > -1){
        document.getElementById('img1').src = 'image/dog1.jpg'
    } else if(c > -1){
        document.getElementById('img1').src = 'image/cat1.jpg'
    }
}
// change image at 2nd row
function change2(){
    let a = document.getElementById('img2').src.indexOf("image/cat2.jpg")
    let b = document.getElementById('img2').src.indexOf("image/charizard2.jpg")
    let c = document.getElementById('img2').src.indexOf("image/dog2.jpg")
    if(a > -1){
        document.getElementById('img2').src = 'image/charizard2.jpg'
    } else if (b > -1){
        document.getElementById('img2').src = 'image/dog2.jpg'
    } else if(c > -1){
        document.getElementById('img2').src = 'image/cat2.jpg'
    }
}
// change image at 3rd row
function change3(){
    let a = document.getElementById('img3').src.indexOf("image/cat3.jpg")
    let b = document.getElementById('img3').src.indexOf("image/charizard3.jpg")
    let c = document.getElementById('img3').src.indexOf("image/dog3.jpg")
    if(a > -1){
        document.getElementById('img3').src = 'image/charizard3.jpg'
    } else if (b > -1){
        document.getElementById('img3').src = 'image/dog3.jpg'
    } else if(c > -1){
        document.getElementById('img3').src = 'image/cat3.jpg'
    }
}
// change image at 4th row
function change4(){
    let a = document.getElementById('img4').src.indexOf("image/cat4.jpg")
    let b = document.getElementById('img4').src.indexOf("image/charizard4.jpg")
    let c = document.getElementById('img4').src.indexOf("image/dog4.jpg")
    if(a > -1){
        document.getElementById('img4').src = 'image/charizard4.jpg'
    } else if (b > -1){
        document.getElementById('img4').src = 'image/dog4.jpg'
    } else if(c > -1){
        document.getElementById('img4').src = 'image/cat4.jpg'
    }
}
// check image
function check(){
    let a1 = document.getElementById('img1').src.indexOf("image/cat1.jpg")
    let b1 = document.getElementById('img2').src.indexOf("image/cat2.jpg")
    let c1 = document.getElementById('img3').src.indexOf("image/cat3.jpg")
    let d1 = document.getElementById('img4').src.indexOf("image/cat4.jpg")
    let a2 = document.getElementById('img1').src.indexOf("image/dog1.jpg")
    let b2 = document.getElementById('img2').src.indexOf("image/dog2.jpg")
    let c2 = document.getElementById('img3').src.indexOf("image/dog3.jpg")
    let d2 = document.getElementById('img4').src.indexOf("image/dog4.jpg")
    let a3 = document.getElementById('img1').src.indexOf("image/charizard1.jpg")
    let b3 = document.getElementById('img2').src.indexOf("image/charizard2.jpg")
    let c3 = document.getElementById('img3').src.indexOf("image/charizard3.jpg")
    let d3 = document.getElementById('img4').src.indexOf("image/charizard4.jpg")
    if (a1 > -1 && b1 > -1 && c1 > -1 && d1 > -1){
        alert('Congratulation to you')
    }
    if (a2 > -1 && b2 > -1 && c2 > -1 && d2 > -1){
        alert('Congratulation to you')
    }
    if (a3 > -1 && b3 > -1 && c3 > -1 && d3 > -1){
        alert('Congratulation to you')
    }
}
