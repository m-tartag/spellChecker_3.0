$(document).ready(() => {


  $('#submitButton').click(() => {
    const input = document.getElementById('inputTextArea').value;
    const Url = 'http://localhost:4000/api'
    const checkMark = `<i class="fas fa-trophy"></i>`
    const wrongMark = `<i class="fas fa-skull"></i>`

    $.ajax({
        url: Url, 
        type: 'GET',
        data: {word: input},
        success(result) {
          if (result.length > 0) {
              
              $('.result').html('')
              $('#result').removeClass('resultToggle').removeClass('resultGreen').removeClass('resultRed').addClass('resultGreen')
              $('.result').append(`${input} ${checkMark}`)
            
          } else {
              
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
