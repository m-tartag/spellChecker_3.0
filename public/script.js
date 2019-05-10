$(document).ready(() => {

  $('#submitButton').click(() => {
    const input = document.getElementById('inputTextArea').value;
    const Url = 'http://localhost:4000/api'
    const defineUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/${input}?key=782db00d-932d-43aa-9e2d-053051f3251b`
    const checkMark = `<i class="fas fa-trophy"></i>`
    const wrongMark = `<i class="fas fa-skull"></i>`

    // API call to my server (which serves me my mongoDB)
    $.ajax({
        url: Url, 
        type: 'GET',
        data: {word: input},
        success(result) {
          if (result.length > 0) {

            // If word exists - call definition API

            $.ajax({
                url: defineUrl, 
                type: 'GET',
                success(result) {
                 
                  $('.definition').html('')
                  $('.results').html('')
                  $('.result').removeClass('resultToggle').removeClass('resultGreen').removeClass('resultRed').addClass('resultGreen')
                  $('.results').append(`${input} ${checkMark}`)
                  $('.definition').append(`<span id='def'>Definition: </span><span>${result[0].shortdef[0]}</span>`)
                  
                  }
                })

          } else {
              
              $('.definition').html('')
              $('.results').html('')
              $('.result').removeClass('resultToggle').removeClass('resultRed').removeClass('resultGreen').addClass('resultRed')
              $('.results').append(`${input} ${wrongMark}`)
              
          }
        },
        error(error) {
          console.log(error)
        }
      })
    })
  
  
  
  
  
  
  
  
  
  //doc.ready end
  })
