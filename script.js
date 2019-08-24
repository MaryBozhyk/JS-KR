let getId = x => document.getElementById(x);
let clickB = 0
getId('bold').addEventListener('click', function () {
    clickB++
    if (clickB % 2 == 1) {
        getId('text-form').style.fontWeight = 'bold'
    } else {
        getId('text-form').style.fontWeight = 'normal'
    }
})
let clickI = 0
getId('italic').addEventListener('click', function () {
    clickI++
    if (clickI % 2 == 1) {
        getId('text-form').style.fontStyle = 'italic'
    } else {
        getId('text-form').style.fontStyle = 'normal'
    }
})
let clickU = 0
getId('underline').addEventListener('click', function () {
    clickU++
    if (clickU % 2 == 1) {
        getId('text-form').style.textDecoration = 'underline'
    } else {
        getId('text-form').style.textDecoration = ''
    }
})
let clickS = 0
getId('strike').addEventListener('click', function () {
    clickS++
    if (clickS % 2 == 1) {
        getId('text-form').style.textDecoration = 'line-through'
    } else {
        getId('text-form').style.textDecoration = ''
    }
})
getId('left-align').addEventListener('click', function () {
    getId('text-form').style.textAlign = 'left'
})
getId('center-align').addEventListener('click', function () {
    getId('text-form').style.textAlign = 'center'
})
getId('right-align').addEventListener('click', function () {
    getId('text-form').style.textAlign = 'right'
})
let fontFamilyArray = [`"Arial", sans-serif`, `"Georgia", sans-serif`, ` "Impact", sans-serif`, `"Tahoma", sans-serif`, `'Times New Roman', sans-serif`, `'Verdana', sans-serif`]
let fontFamily = document.querySelectorAll('.font-family')
for (let i = 0; i < fontFamily.length; i++) {
    fontFamily[i].style.fontFamily = fontFamilyArray[i]
    fontFamily[i].addEventListener('click', function () {
        getId('text-form').style.fontFamily = fontFamilyArray[i]
    })
}
let fontSize = document.querySelectorAll('.font-size')
for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener('click', function () {
        getId('text-form').style.fontSize = this.innerHTML
    })
}
getId('color').addEventListener('click', function () {
    getId('text-color-menu').style.display = 'flex'
    getId('black-bgr').style.display = 'block'
})
getId('black-bgr').addEventListener('click', function () {
    this.style.display = 'none'
    getId('text-color-menu').style.display = ''
    getId('bgr-color-menu').style.display = ''
    getId('table-create').style.display = '';
    getId('ol-create').style.display = '';
    getId('ul-create').style.display = '';
})
const ColorArray = ['#00cc99', '#008060', '#00cc66', '#008040', '#3399ff', '#0059b3', '#b366ff', '#5900b3', '#262626', '#4d4d4d', '#ffcc00', '#ff9933', '#ff6600', '#b34700', '#ff3300', '#ff0000', '#e6e6e6', '#e6e6e6', '#999999', '#808080', '#000000']
const textColor = document.querySelectorAll('.text-color')
const bgrColor = document.querySelectorAll('.bgr-color')
for (let i = 0; i < textColor.length; i++) {
    textColor[i].style.backgroundColor = ColorArray[i]
    bgrColor[i].style.backgroundColor = ColorArray[i]
    textColor[i].addEventListener('click', function () {
        getId('text-form').style.color = ColorArray[i]
    })
    bgrColor[i].addEventListener('click', function () {
        document.body.style.background = ColorArray[i]
    })
}
getId('bgr').addEventListener('click', function () {
    getId('bgr-color-menu').style.display = 'block'
    getId('black-bgr').style.display = 'block'
})
const imagesArray = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.png', 'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg']
const bgrImage = document.querySelectorAll('.bgr-image')
for (let i = 0; i < imagesArray.length; i++) {
    bgrImage[i].style.backgroundImage = `url(${imagesArray[i]})`
    bgrImage[i].addEventListener('click', function () {
        document.body.style.backgroundImage = `url(${imagesArray[i]})`
    })
}
let file = getId('inputGroupFile04');
file.addEventListener('change', function (event) {
    let file = URL.createObjectURL(event.target.files[0])
    document.body.style.background = `url(${file})`
})
getId('edit').addEventListener('click', function () {
    getId('edit-block').style.display = 'block';
    getId('main-block').style.display = 'none';
    getId('exampleFormControlTextarea1').value = getId('text-form').innerHTML
})
getId('save').addEventListener('click', function () {
    getId('main-block').style.display = 'block';
    getId('edit-block').style.display = 'none';
    getId('text-form').innerHTML = getId('exampleFormControlTextarea1').value
})
getId('table').addEventListener('click', function () {
    getId('table-create').style.display = 'flex';
    getId('black-bgr').style.display = 'block'
})
getId('reset').addEventListener('click', function () {
    getId('td-count').value = ''
    getId('tr-count').value = ''
    getId('td-width').value = ''
    getId('td-height').value = ''
    getId('border-width').value = ''
    getId('border-style').value = 'solid'
    getId('border-color').value = ''
})

getId('create-table').addEventListener('click', function () {
    let rows = getId('td-count').value
    let columns = getId('tr-count').value
    let width = getId('td-width').value
    let hight = getId('td-height').value
    let borderWidth = getId('border-width').value
    let borderType = getId('border-style').value
    let borderColor = getId('border-color').value
    let i = 1
    while (i <= rows) {
        getId('exampleFormControlTextarea1').value += (`<table>`)
        exampleFormControlTextarea1.value += (`<tr>`)
        let j = 1
        while (j <= columns) {
            exampleFormControlTextarea1.value += (`<td style="width:${width}px;height:${hight}px; border: ${borderWidth}px ${borderType} ${borderColor}; color: ${borderColor}">TD</td>`)
            j++
        }
        exampleFormControlTextarea1.value += (`</tr>`)
        i++
    }
    getId('exampleFormControlTextarea1').value += (`</table>`)
})
getId('ordered-list').addEventListener('click', function () {
    getId('ol-create').style.display = 'flex';
    getId('black-bgr').style.display = 'block'
})
getId('ol-reset').addEventListener('click', function () {
    getId('ol-count').value = ''
    getId('ol-type').value = 'decimal'
})
getId('create-ol').addEventListener('click', function () {
    let liCount = getId('ol-count').value
    let listType = getId('ol-type').value
    getId('exampleFormControlTextarea1').value += (`<ol style ="list-style-type: ${listType}">`)
    for (let i = 1; i <= liCount; i++) {
        getId('exampleFormControlTextarea1').value += (`<li>item ${i}</li>`)
    }
    getId('exampleFormControlTextarea1').value += (`</ol>`)
})
getId('unordered-list').addEventListener('click', function () {
    getId('ul-create').style.display = 'flex';
    getId('black-bgr').style.display = 'block'
})
getId('ul-reset').addEventListener('click', function () {
    getId('ul-count').value = ''
    getId('ul-type').value = 'sircle'
})
getId('create-ul').addEventListener('click', function () {
    let liCount = getId('ul-count').value
    let listType = getId('ul-type').value
    getId('exampleFormControlTextarea1').value += (`<ul style ="list-style-type: ${listType}">`)
    for (let i = 1; i <= liCount; i++) {
        getId('exampleFormControlTextarea1').value += (`<li>item ${i}</li>`)
    }
    getId('exampleFormControlTextarea1').value += (`</ul>`)
})
getId('log').addEventListener('click', function () {
    getId('sign-in').style.display = 'flex'
    getId('black-bgr-sn').style.display = 'block'
})
getId('sign-press').addEventListener('click', function () {
    console.log(getId('password').value)
    if (getId('login').value === "admin" && getId('password').value === "admin") {
        getId('sign-in').style.display = 'none'
        getId('black-bgr-sn').style.display = 'none'
        getId('sign-in').reset();
    }
})