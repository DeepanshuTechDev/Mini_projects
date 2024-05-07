const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const box2 = document.querySelector('.canvas')
    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            if(e.target.id=='grey'){
                body.style.backgroundColor = e.target.id
                box2.style.backgroundColor = 'green'
                box2.style.color = 'white'
            }   
            if(e.target.id=='white'){
                body.style.backgroundColor = e.target.id
                box2.style.backgroundColor = 'orange'
                box2.style.color = 'white'  
            }
            if(e.target.id=='blue'){
                body.style.backgroundColor = e.target.id            
                box2.style.backgroundColor = 'indigo'
                box2.style.color = 'white'
                
            }
            if(e.target.id=='yellow'){
                body.style.backgroundColor = e.target.id
                box2.style.backgroundColor = 'pink'
                box2.style.color = 'black'
            }
            if(e.target.id=='red'){
                body.style.backgroundColor = e.target.id
                box2.style.backgroundColor = 'black'
                box2.style.color = 'white'
            }
            if(e.target.id=='purple'){
                body.style.backgroundColor = e.target.id
                box2.style.backgroundColor = 'silver'
                box2.style.color = 'black'
            }
        })})
  