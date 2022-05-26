
 const socket = io();
 const messages = document.querySelector('.messages')
 const form = document.querySelector('.form')
 const input = document.querySelector('.input')
 const nameBlock = document.querySelector('.name')

 const user = prompt('Your name')
 nameBlock.innerHTML = `${user}`
 
 form.addEventListener('submit', (e) => {
     e.preventDefault()

     if(input.value){
        socket.emit('chat message', {
            message: input.value,
            name: user
        })
        input.value = ''
     }
 })

 socket.on('chat message', (data) => {
     const item = document.createElement('li')
     item.innerHTML = `<span>${data.name}</span>: ${data.message}`
    //  item.innerHTML = `${data.message}`
     messages.appendChild(item)
 })

