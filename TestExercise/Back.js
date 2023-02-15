

class Data{
    constructor(firstName,lastName,about,eyeColor){
        this.firstName = firstName;
        this.lastName = lastName;
        this.about = about;
        this.eyeColor = eyeColor;
    }
}

var a = 1;//

var arrayObject = [];//хранит все объекты из json

//далее создаю таблицу в документе
const table = document.createElement("table");
document.body.append(table);


const upload = document.querySelector('#upload');
//срабатывает каждый раз, когда выбираю файл в проводнике
upload.addEventListener('change', function (e) {
    try {
        const upload = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(upload);
        reader.addEventListener('load', (function () {return Parcer})(upload));
    }
    catch (ex) {
        console.log(ex);
    }
});



function InnerHtml(){ 
    table.innerHTML =   `<thead>
                            <tr>
                                <th>Имя</th>
                                <th>Фамилия</th>
                                <th>Описание</th>
                                <th>Цвет глаз</th>
                            </tr>
                        </thead>`;
    for(let i = 0; i < arrayObject.length; i++){
        table.innerHTML +=   `<tbody>
                            <tr>
                                <td><div>${arrayObject[i].firstName}</div></td> 
                                <td><div>${arrayObject[i].lastName}</div></td> 
                                <td><div class="about">${arrayObject[i].about}</div><button class="btn">(+)</button></td> 
                                <td><div>${arrayObject[i].eyeColor}</div></td> 
                            </tr>
                        </tbody>`;
    }
                        
}


//парсит json файл и загружает отображение таблицы
function Parcer(e) {
    array = JSON.parse(e.target.result);
    // выводим результат в консоль
    a*=2;
    for(let i = 0; i < array.length; i++){
        arrayObject.push(array[i]);
    }
    console.log(a);
    InnerHtml();
}


