const taskName = document.querySelector('.taskName') as HTMLInputElement
const tableBody = document.querySelector('.tableBody') as HTMLTableElement
let totalTasks: string[] = []
let lastIndexDeleted: number
let nextIndex: number
function createTaskArea(): void {
    if (taskName.value === '') {
        alert('Name is required')
    } else {
        totalTasks.push(taskName.value)
        nextIndex = totalTasks.length
        let r = tableBody.insertRow()
        let c1 = r.insertCell()
        c1.innerHTML = taskName.value
        c1.classList.add(`${nextIndex-1}`)
        let c2 = r.insertCell() as HTMLTableCellElement
        c2.innerHTML = '<i class="bi bi-check"></i>'
        c2.onclick = () => { 
            if(c1.style.textDecoration == 'none'){
                c1.style.textDecoration = 'line-through' 
            }else if(!c1.style.textDecoration){
                c1.style.textDecoration = 'line-through'
            }else{
                c1.style.textDecoration = 'none'
            }
        }
        let c3 = r.insertCell() as HTMLTableCellElement
        c3.innerHTML = '<i class="bi bi-x"></i>'
        c3.onclick = () => {
            let task = String(c1.textContent)
            let rowID = totalTasks.indexOf(task)
            tableBody.deleteRow(rowID)
            totalTasks.splice(rowID,1)
        }
    }
}
