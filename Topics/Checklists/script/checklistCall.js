$(function(){
  $('#ghsubmitbtn').on('click', function(e){

    console.log("click!");
    e.preventDefault();

    var checklistname = $('#chcklistName').val();


    var requri   =   'https://api.github.com/repos/worldbank/DIMEwiki/contents/Topics/Checklists/checklists/'+ checklistname + '.js?ref=checklistAjax'


    requestJSON(requri, function(json) {


      if(json.message == "Not Found" ) {
        $('#ghapidata').html("<h2>Checklist not found</h2>");

      } else {

        console.log(json);

        var checklistSTR = atob(json.content);
        var checklist = JSON.parse("[" + checklistSTR + "]");

        console.log(checklist);
        console.log(checklist.length);

        outputPageContent();

        //Add functions that test format of the checklist



        function outputPageContent() {

          var outhtml = ''

          console.log("output!");
          if(checklist.length == 0) {
            outhtml = outhtml + '<p>Checklist of lenght 0 or incorrectly read</p>';

          } else {
            console.log("Tabletime!");
            outhtml = outhtml + '<table>'
            for (var i = 0; i < checklist.length; i++) {
              console.log(checklist[i]);
                outhtml = outhtml + '<tr><td>' + checklist[i][0] + '</td><td>' + checklist[i][1] + '</td></tr>'
            };
            outhtml = outhtml + '</table>'
          }
          $('#ghapidata').html(outhtml);
        }
      }
    }); // end requestJSON Ajax call
  }); // end click event handler

  function requestJSON(url, callback) {
    $.ajax({

      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON);
      }
    });
  }
});
