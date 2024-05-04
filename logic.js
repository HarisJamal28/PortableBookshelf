var Main = document.getElementById('Main');
var AddBook = document.getElementById('AddBook');
var Shelf = document.getElementById('Shelf');
var Rack = document.getElementById('Rack');
var items, itemsM;
var i=1;
var k = 0;
var more = false;

    AddBook.addEventListener('change',function(){
        let Shelf = document.getElementById('Shelf');
        const file = this.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function(e){
                const imgDataUrl = e.target.result;
                localStorage.setItem('Books', imgDataUrl);
                const img = new Image();
                img.src = imgDataUrl;
                k++;
                console.log(k);
                img.onload = function(){
                    // if(k>=5) {
                    //     CreateShelf();
                    //     let Shelf1 = document.getElementById('Shelf'+`${i}`);
                    //     Shelf1.appendChild(img);
                    //     console.log(Rack.querySelectorAll('.Shelf'));
                    // }else{
                        Shelf.appendChild(img);
                    // }
                    
                };
            };
            reader.readAsDataURL(file);
        }
    })

function Save(){
    let find = Rack.querySelectorAll('.Shelf');
    console.log(find);

    items = Shelf.innerHTML;
    // if(k>=5){
    //     more = true;
    //     itemsM = Shelf1.innerHTML;
    //     localStorage.setItem('AllBooks',itemsM);
    // }
    localStorage.setItem('AllBooks',items);
}

function Reset(){
    localStorage.setItem('AllBooks','');
    k=1;
    location.reload();
}

window.onload = function(){
Shelf.innerHTML = localStorage.getItem('AllBooks');
// if(more){
//     let Shelf1 = document.getElementById('Shelf1');
//     Shelf1.innerHTML = localStorage.getItem('AllBooks');
// }
}



function CreateShelf(){
    let br = document.createElement('br');
    let rack = document.createElement('div')
    let div = document.createElement('div');
    rack.classList.add('Rack');
    div.setAttribute('id',`Shelf${i}`);
    div.classList.add('Shelf');

    Rack.appendChild(br);
    Rack.appendChild(div);
    Rack.appendChild(rack);
}

