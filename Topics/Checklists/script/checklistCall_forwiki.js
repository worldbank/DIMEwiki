function getChecklist(chklistname) {

  var requri   =   'https://api.github.com/repos/worldbank/DIMEwiki/contents/Topics/Checklists/checklists/'+ chklistname + '.js?ref=checklistAjax';

  console.log(chklistname);

   requestJSON(requri, function(json) {

    if(json.message == "Not Found" ) {
       document.getElementById('checklist1').innerHTML = "<h2>Checklist not found, check the name of the checklist</h2>"

  } else {

      var checklistSTR = atob(json.content);
      var checklist = JSON.parse("[" + checklistSTR + "]");

      document.getElementById('checklist1').innerHTML =  checklistTable(checklist);

    }
 }); // end requestJSON Ajax call
}

function requestJSON(url, callback) {
  $.ajax({
    url: url,
    complete: function(xhr) {
      callback.call(null, xhr.responseJSON);
    }
  });
}
