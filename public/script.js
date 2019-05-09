$(document).ready(() => {


  $('#submitButton').click(() => {
    const input = document.getElementById('inputTextArea').value;
    const Url = 'http://localhost:4000/api'

    $.ajax({
        url: Url, 
        type: 'GET',
        data: {word: input},
        success(result) {
          
          if (result.length > 0) {
              
              const checkMark = `<i class="fas fa-trophy"></i>`


              $('.result').html('')
              $('#result').removeClass('resultToggle').removeClass('resultGreen').removeClass('resultRed').addClass('resultGreen')
              $('.result').append(`${input} ${checkMark}`)
              
            
          } else {
              
              const wrongMark = `<i class="fas fa-skull"></i>`

              $('.result').html('')
              $('#result').removeClass('resultToggle').removeClass('resultRed').removeClass('resultGreen').addClass('resultRed')
              $('.result').append(`${input} ${wrongMark}`)
            
          }
        },
        error(error) {
          console.log(error)
        }
      })
    })
  
  
  
  
  
  
  
  
  
  //doc.ready end
  })
