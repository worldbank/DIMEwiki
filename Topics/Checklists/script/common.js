
/* Functions creating divs ready to be loaded at the wiki */
$(function () {


//This is a list of all checklist. Add to this array when you add a new checklist. For any other edits to the checklists, see the instructions here: https://github.com/worldbank/DIMEwiki/Topics/Checklists
checklists = [
  'chk_surveyprep', 'chk_questcont', 'chk_questdata',
  'chk_microdata', 'chk_datacleaning', 'checklist1', 'chk_reviewgraphs'
];

//Loop over all the checklists
for (chkNum in checklists) {

  //Get checklist name
  var chkName = checklists[chkNum];

  //Test if a div with the name of the checklist exist on the article just loaded
  if (document.getElementById(chkName) != null ) {

    //If a div with that name exist, generate the checklist and put it in that div
    getChecklist(chkName);
  }
}

function getChecklist(chklistname) {

 var requri   =   'https://api.github.com/repos/worldbank/DIMEwiki/contents/Topics/Checklists/checklists/'+ chklistname + '.js';

 //Call the GitHub API
 requestJSON(requri, function(json) {

   //If call unsuccessful, give error message
   if(json.message == "Not Found" ) {
      document.getElementById(chklistname).innerHTML = "<h3>Checklist not found, check the name of the checklist</h3>"

    } else {

      //Call is successfull


      //Function to decode result from GitHub
      function b64DecodeUnicode(str) {
         //Source https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
         // Going backwards: from bytestream, to percent-encoding, to original string.
           return decodeURIComponent(atob(str).split('').map(function(c) {
             return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
         }).join(''));
       }

       //Decode result and put it in parse it to JSON format
       var checklistSTR = b64DecodeUnicode(json.content);
       var checklist = JSON.parse("[" + checklistSTR + "]");

       //Create the checklist table and put it to the html div.
       document.getElementById(chklistname).innerHTML =  createChecklistTable(checklist,chklistname);

     }
  }); // end requestJSON Ajax call
}

//The function that calls the GitHub API
function requestJSON(url, callback) {
 $.ajax({
   url: url,
   complete: function(xhr) {
     callback.call(null, xhr.responseJSON);
   }
 });
}


/* Functions needed for checklists */

function createChecklistTable(chkarray, chkName) {

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

 var tableFooter = '<tr><td colspan="4">The checklist are edited through GitHub. This checklist corresponds to the file with the name <b>' + chkName+ '.js</b>. To read a simple step by step guide on how to edit the checklist, see this documentation:<br><a href="https://github.com/worldbank/DIMEwiki/tree/master/Topics/Checklists">https://github.com/worldbank/DIMEwiki/tree/master/Topics/Checklists</a>.</td></tr>'

 tableString += tableFooter +'</table>'

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
