// Tao class 
class TestCard {

    $container;
    $tdNo;
    $tdName;
    $tdRequire;
    $tdEstimate;
    $tdImportance;
    $tdDelete;

    constructor() {
        this.$container = document.createElement('tr');

        this.$tdNo = document.createElement('td');
        this.$tdNo.classList.add('stt');

        this.$tdName = document.createElement('td');
        this.$tdRequire = document.createElement('td');
        this.$tdEstimate = document.createElement('td');
        this.$tdImportance = document.createElement('td');

        this.$tdDelete = document.createElement('td');
        this.$tdDelete.innerHTML = `<span class="pink">Delete</span>`;
        this.$tdDelete.addEventListener('click', this.delete);
    }

    render() {
        this.$container.appendChild(this.$tdNo);
        this.$container.appendChild(this.$tdName);
        this.$container.appendChild(this.$tdRequire);
        this.$container.appendChild(this.$tdEstimate);
        this.$container.appendChild(this.$tdImportance);
        this.$container.appendChild(this.$tdDelete);
        return this.$container;
    }

    delete() {

        Swal.fire({
            title: 'Bạn có chắc muốn xóa?',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            denyButtonText: `Hủy`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                // Lay du lieu tu localStorage
                let taskData = localStorage.getItem('TaskData');
                taskData = JSON.parse(taskData);

                let index = Number(this.parentNode.querySelector('.stt').innerText);
                // Xoa xong luu lai vao localStorage 
                taskData.splice(index - 1, 1);
                localStorage.setItem('TaskData', JSON.stringify(taskData));

                // Reload trang 
                location.reload();
            } 
        })



    }
}

export { TestCard };