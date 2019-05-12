$(document).ready(() => {
  $('#submitButton').click(() => {
    const input = document.getElementById('inputTextArea').value;
    // My Server URL
    const Url = 'http://localhost:4000/api';
    // Dictionary API URL
    const defineUrl = `https://dictionaryapi.com/api/v3/references/collegiate/json/${input}?key=''`;
    // Font Awesome Icons
    const checkMark = `<i class="fas fa-trophy"></i>`;
    const wrongMark = `<i class="fas fa-skull"></i>`;

    // Request --> My server (--> MongoDB)
    // Passing '{word: input}' to Server
    // Get Response Back After Checking
    // Input Against The Words in My MongoDB
    // Response will be..
    // Object if Word
    // Empty [] if not Word

    $.ajax({
      url: Url,
      type: 'GET',
      data: { word: input },
      success(result) {
        // Response: Word= Object, Non-Word = Empty []
        // If Length Exists - Must be a word!
        if (result.length > 0) {
          // If it's a Word --> Request Dictionary API
          $.ajax({
            url: defineUrl,
            type: 'GET',
            success(res) {
              // .html('') Will Clear the Div for Re-Submissions
              $('.definition').html('');
              $('.results').html('');
              $('.result')
                .removeClass('resultToggle')
                .removeClass('resultGreen')
                .removeClass('resultRed')
                .addClass('resultGreen');
              // Append Div with Results + Font Awesome Icon
              $('.results').append(`${input} ${checkMark}`);
              $('.definition').append(
                `<span id='def'>Definition: </span><span>${
                  res[0].shortdef[0]
                }</span>`
              );
            },
          });
          // Not a Word!
        } else {
          // .html('') Will Clear the Div for Re-Submissions
          $('.definition').html('');
          $('.results').html('');
          $('.result')
            .removeClass('resultToggle')
            .removeClass('resultRed')
            .removeClass('resultGreen')
            .addClass('resultRed');
          // Append Div with Results + Font Awesome Icon
          $('.results').append(`${input} ${wrongMark}`);
        }
      },
      error(error) {
        console.log(`Error: ${error}`);
      },
    });
  });

  // Closing { }
});
