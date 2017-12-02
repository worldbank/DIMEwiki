
/* Functions creating divs ready to be loaded at the wiki */
$(function () {
console.log("Test Log");
//This is a list of all checklist. Add to this array when you add a new checklist. For any other edits to the checklists, see the instructions here: https://github.com/worldbank/DIMEwiki/Topics/Checklists
checklists = [
  'chk_surveyprep', 'chk_questcont', 'chk_questdata',
  'chk_microdata', 'chk_datacleaning', 'checklist1'
];

//Loop over all the checklists
for (chkNum in checklists) {
  //console.log("ChecklistNum " + chkNum);
  //console.log("ChecklistName " + checklists[chkNum]);

  var chkName = checklists[chkNum];
  //Test if a div with the name of the checklist exist on the article just loaded
  if (document.getElementById(chkName) != null ) {
    console.log("This ChecklistName " + chkName);
    //If a div with that name exist, generate the checklist and put it in that div
    getChecklist(chkName);

  }
}


 // if (document.getElementById("dimewiki-chk-surveyprep") != null ) {
 //   //console.log(chk_surveyprep);
 //   document.getElementById('dimewiki-chk-surveyprep').innerHTML = checklistTable(chk_surveyprep);
 // }
 // if (document.getElementById("dimewiki-chk-questcont") != null ) {
 //   //console.log(questionnaire_chk_content);
 //   document.getElementById('dimewiki-chk-questcont').innerHTML = checklistTable(questionnaire_chk_content);
 // }
 // if (document.getElementById("dimewiki-chk-questdata") != null ) {
 //   //console.log(questionnaire_chk_data);
 //   document.getElementById('dimewiki-chk-questdata').innerHTML = checklistTable(questionnaire_chk_data);
 // }
 // if (document.getElementById("dimewiki-chk-microdata") != null ) {
 //   //console.log(chk_microdata);
 //   document.getElementById('dimewiki-chk-microdata').innerHTML = checklistTable(chk_microdata);
 // }
 // if (document.getElementById("dimewiki-chk-datacleaning") != null ) {
 //   //console.log(chk_datacleaning);
 //   document.getElementById('dimewiki-chk-datacleaning').innerHTML = checklistTable(chk_datacleaning);
 // }





function getChecklist(chklistname) {

 var requri   =   'https://api.github.com/repos/worldbank/DIMEwiki/contents/Topics/Checklists/checklists/'+ chklistname + '.js?ref=checklistAjax';

 console.log(chklistname);

  requestJSON(requri, function(json) {

   if(json.message == "Not Found" ) {
      document.getElementById(chklistname).innerHTML = "<h2>Checklist not found, check the name of the checklist</h2>"

 } else {

     //File found start by decoding content

     //Source https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
     function b64DecodeUnicode(str) {
       // Going backwards: from bytestream, to percent-encoding, to original string.
         return decodeURIComponent(atob(str).split('').map(function(c) {
           return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
       }).join(''));
     }

     var checklistSTR = b64DecodeUnicode(json.content);
     var checklist = JSON.parse("[" + checklistSTR + "]");

     document.getElementById(chklistname).innerHTML =  checklistTable(checklist);

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






/* Functions needed for checklists */

function checklistTable(chkarray) {

 var tableString = '<table class="chk_table">';
 tableString += '<tr><th rowspan="5" colspan="3" style="text-align: center;"><img alt="DIME Image" src="/images/a/a8/DIMEi2i.png" class="chk_logo_img"></th>';
 tableString += '<tr><th class="chk_header">Project name: _______________________________________</th>';
 tableString += '<tr><th class="chk_header">Country: ___________________________________________</th>';
 tableString += '<tr><th class="chk_header">District: ____________________________________________</th>';
 tableString += '<tr><th class="chk_header">Year, Month and/or Day:  _____________________________</th>';

var levelTracker = [0]

 for ( row = 0 ; row < chkarray.length ; ++row ) {
   var thisLevel =chkarray[row][0];
   var thisIndex = thisLevel - 1;
   var thisItem =chkarray[row][1];



   if ( levelTracker.length > thisLevel) {
     levelTracker.splice(thisLevel, levelTracker.length - (thisLevel));
   } else if ( levelTracker.length < thisLevel) {
     levelTracker.push(0)
   }

   ++levelTracker[thisIndex]


   var number = levelTracker.join(".")

   tableString += checklistRow(thisLevel, thisItem, number)
 }
 tableString += '</table>'

 return tableString

}


function checklistRow(thisLevel, thisItem, number)
{

 var  tableString = '';

 if (thisLevel == 1) {
     tableString += '<tr class="chk_row1"><td colspan="4">'+ number +'. '+ thisItem +'</td></tr>';
     tableString += '<tr><td></td><td>Initials</td><td>#No</td><td>Checklist Item</td></tr>';
     return tableString

 } else {

   switch (thisLevel) {
       case 2:
           tr_class = 'class="chk_row2"';
           break;
       case 3:
           tr_class = 'class="chk_row3"';
           break;
       case 4:
           tr_class = 'class="chk_row4"';
           break;
       default:
         /*implicitly 5 or above*/
           tr_class = 'class="chk_row5"';
   }

   tableString += '<tr '+tr_class+'><td nowrap>[ __ ]</td><td></td><td nowrap class="chk_number">'+ number +'</td><td class="chk_item">'+ thisItem +'</td></tr>';

   return tableString
 }
}

}());
