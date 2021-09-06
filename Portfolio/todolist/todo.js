const inputVal = document.getElementsByClassName('inputVal')[0]
const btnPush = document.getElementsByClassName('btnPush')[0]

//  var localItem = JSON.parse(localStorage.getItem(localItem))
btnPush.addEventListener('click', ()=>{
    if(inputVal.value.trim() != 0){

 var localItem = JSON.parse(localStorage.getItem('localItem'))

if(localItem === null){
    taskList = []
}else{
    taskList = localItem;
}
taskList.push(inputVal.value)
localStorage.setItem('localItem', JSON.stringify(taskList))
    }
showList()
})

function showList(){
     let outPut = '';
     let taskListShow = document.querySelector('.todoListItem')
     let localItems = JSON.parse(localStorage.getItem('localItem'));
    if(localItems === null){
        taskList = []
    }else{
        taskList = localItems;
    }
    taskList.forEach((data, index) => {
        outPut += `

    <tr>
      <th scope="row">${index}</th>
      <td class="pText">${data}</td>
      <td><button class="deleteTask" onclick="deleteItem(${index})">x</button></td>
      <td><button class="updateTask" onclick="updateItem(${index})">Update</button></td>
    </tr>
    `   
    });
    taskListShow.innerHTML = outPut;
}
showList();

function deleteItem(index){
         let localItems = JSON.parse(localStorage.getItem('localItem'));
         taskList.splice(index, 1)
         localStorage.setItem('localItem', JSON.stringify(taskList))
         showList();
}

function updateItem(index){
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    console.log(index);
    // console.log(localItems);
    for (var k in localItems) {
    console.log((localItems[k].indexOf()));
        // if(localItems === index){
        //     console.log("ok");
        // }
}
   
  
}

function clearTask(){
    localStorage.clear()
    showList()
}