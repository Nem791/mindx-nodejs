import { TestCard } from "./TestCard.js";


// Tham chieu container cua cac row Task 
const tBody = document.getElementById('table-row');
console.log(tBody)

// Tham chieu button Create 
const createbtn = document.querySelector('.button-three');

// Gan su kien click 
createbtn.addEventListener('click', () => {
    // Thu vien sweetAlert 
    Swal.fire({
        title: '<strong>New Task</strong>',
        html:
            `<div>
            <div id="form-main-container">
            <div id="form-area">
              <div id="form-body">
                <div>
                  <div class="col-12">
                    <fieldset class="form-group">
                      <label class="form-label" for="input4">Name</label>
                      <input type="text" class="form-control" id="input4" placeholder="Input" required>
                    </fieldset>
                  </div>
                  <div class="col-12">
                    <fieldset class="form-group">
                      <label class="form-label" for="input5">Do at</label>
                      <input type="text" class="form-control" id="input5" placeholder="Input" required>
                    </fieldset>
                  </div>
                  <div class="col-12">
                    <fieldset class="form-group">
                      <label class="form-label" for="input6">Time required</label>
                      <input type="text" class="form-control" id="input6" placeholder="Input" required>
                    </fieldset>
                  </div>
                  <div class="col-12">
                    <fieldset class="form-group">
                      <label class="form-label" for="input6">Importance</label>
                      <input type="text" class="form-control" id="input7" placeholder="Input" required>
                    </fieldset>
                  </div>
                </div>
                <div>
                 
                </div>
              </div>
            </div>
          </div>
          </div>`,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Tạo',
        confirmButtonAriaLabel: 'Thumbs up, great!',
    }).then((result) => {

        // Tao danh sach 
        if (result.isConfirmed) {
          const taskData = JSON.parse(localStorage.getItem('TaskData'));
          console.log(taskData)


            // Luu vao localStorage 
            // Khoi tao gia tri local storage 
            if (localStorage.getItem('TaskData') == null) {
                localStorage.setItem('TaskData', JSON.stringify([]));
            }

            taskData.push({
                name: document.getElementById('input4').value,
                doAt: document.getElementById('input5').value,
                timeRequired: document.getElementById('input6').value,
                importance: document.getElementById('input7').value
            });
            localStorage.setItem('TaskData', JSON.stringify(taskData));

            location.reload();

        }
    })


})



