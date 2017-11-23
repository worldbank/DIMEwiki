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
