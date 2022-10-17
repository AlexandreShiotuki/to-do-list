document.querySelector('.newTask').addEventListener('click', function(){
   if (document.querySelector('#addTask input').value.length == 0) {
    alert('ESCREVA A SUA TAREFA')
}  else if (document.querySelector('#addTask input').value.length > 45) {
    alert('O número máximo de caractéres foi atingido')
    document.querySelector('#addTask input').value = ''
    document.querySelector('#addTask input').focus()
}  
  else if (screen.width < 600 && document.querySelector('#addTask input').value.length > 25) { 
    alert('O número máximo de caractéres foi atingido')
    document.querySelector('#addTask input').value = ''
    document.querySelector('#addTask input').focus()
  }
 else {
    document.querySelector('#tasks').innerHTML += `
    <div id="task">
      <span id="taskName">
        ${document.querySelector('#addTask input').value}
      </span>
      <div class="status">  
       <button class="remove"><i class="fa-solid fa-trash fa-lg"></i></button>
      </div>
      </div>
        
`
 let currentTask = document.querySelectorAll('.remove')
 for (let i=0; i < currentTask.length; i++) {
    currentTask[i].onclick = function() {
        var el = document.getElementById('task')
        this.parentNode.parentNode.remove(el)
           }
       }
 // LIMPA O INPUT APÓS ADICIONÁ-LO
 document.querySelector('#addTask input').value = ''
 document.querySelector('#addTask input').focus()
}
})

