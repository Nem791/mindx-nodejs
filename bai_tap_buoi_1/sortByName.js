import { loadData } from "./loadData.js";

function myDisplay() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve("Example");
    })

    
    let taskData = localStorage.getItem('TaskData');
    taskData = JSON.parse(taskData);

    myPromise.then(() => {
        if (document.querySelector('#cars').value == "Thứ tự") {
            console.log(loadData(taskData));
        } else if (document.querySelector('#cars').value == "Tên") {
            taskData = taskData.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            console.log(loadData(taskData));
        }
    })
}

let sortBtn = document.getElementById('sort-btn');
sortBtn.addEventListener('click', () => {
    myDisplay();
})

myDisplay();