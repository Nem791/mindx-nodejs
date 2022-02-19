import { TestCard } from "./TestCard.js";

function loadData(taskData) {
    // Tham chieu container cua cac row Task 
    const tBody = document.getElementById('table-row');
    tBody.innerHTML = null;


    if (taskData.length == 0) {
        tBody.innerHTML = 'Chưa thêm Task nào';
    } else {
        taskData.forEach((element, index) => {
            const testCard = new TestCard();

            // Gan gia tri vao table 
            testCard.$tdNo.innerText = index + 1;
            testCard.$tdName.innerText = element.name;
            testCard.$tdRequire.innerText = element.doAt;
            testCard.$tdEstimate.innerText = element.timeRequired;
            testCard.$tdImportance.innerText = element.importance;

            tBody.appendChild(testCard.render());
        })
    }

    return taskData;
}

export {loadData};

