var taskName = document.querySelector('.taskName');
var tableBody = document.querySelector('.tableBody');
var totalTasks = [];
var lastIndexDeleted;
var nextIndex;
function createTaskArea() {
    if (taskName.value === '') {
        alert('Name is required');
    }
    else {
        totalTasks.push(taskName.value);
        nextIndex = totalTasks.length;
        var r = tableBody.insertRow();
        var c1_1 = r.insertCell();
        c1_1.innerHTML = taskName.value;
        c1_1.classList.add("".concat(nextIndex - 1));
        var c2 = r.insertCell();
        c2.innerHTML = '<i class="bi bi-check"></i>';
        c2.onclick = function () {
            if (c1_1.style.textDecoration == 'none') {
                c1_1.style.textDecoration = 'line-through';
            }
            else {
                c1_1.style.textDecoration = 'none';
            }
        };
        var c3 = r.insertCell();
        c3.innerHTML = '<i class="bi bi-x"></i>';
        c3.onclick = function () {
            var task = String(c1_1.textContent);
            var rowID = totalTasks.indexOf(task);
            tableBody.deleteRow(rowID);
            totalTasks.splice(rowID, 1);
        };
    }
}
