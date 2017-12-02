
/* Arrays with data needed for checklists */

   chk_surveyprep =
   [
     [1,'All stages'],
       [2,'Have you identified a sufficient number of qualified interviewers?'],
       [2,'Have you trained the interviewers on the survey instrument?'],
       [2,'Have you identified a comparable area and population for the pilot?'],
       [2,'Have you secured all approvals / letters of support needed in your context?'],
       [2,'Has someone contacted the local leaders in the pilot area to inform them of planned survey activity?'],
       [2,'Will the team be staying overnight in the pilot area? If so, do you have necessary permissions to travel (from government, World Bank, etc)?'],
       [2,'Has someone taken care of the logistics (e.g. car rentals, meals or per diem for interviewers)?'],
       [2,'Do you have a venue reserved for training the interviewers?'],
     [1,'Pre-Pilot'],
       [2,'Do you have a set protocol for identifying participants in focus group discussions?'],
       [2,'Do you have a form prepared for interviewers to record qualitative observations and notes from discussion?'],
       [2,'Have you tested interviewers’ note-taking abilities during the training and provided feedback on content and handwriting?'],
       [2,'If you do not speak the local language(s), do you have a tried-and-true research assistant to accompany you to translate?'],
     [1,'Content-Focused Pilot'],
       [2,'Is the questionnaire you are piloting fully translated into the local language?'],
       [2,'Is the instrument formatted for printing? Make sure there are sufficient margins on all pages for taking notes.'],
       [2,'Did you print enough copies of the instrument for all interviewers and all people accompanying interviews to have a copy for each planned interview?'],
       [2,'Does the survey instrument include both the research team language and local language (where different)? If not, remember to print out copies in each language as applicable.'],
       [2,'Do you have access to a printer to print revisions in real time if significant changes are needed?'],
       [2,'Have you instructed interviewers (or observers) to record the start and end time for each module?'],
     [1,'Data-Focused Pilot'],
       [2,'Have you office-tested the final version of the programmed instrument for any bugs, and to ensure that all questions appear as expected and reflect the final translation?'],
       [2,'Have you set up a SurveyCTO server for the pilot? (For DIME members: Remember, no data can be uploaded to the DIME Test server.)'],
         [3,'Is the name for the pilot form on the server clearly distinguishable from the final survey?'],
         [3,'Have you assigned a form id unique to the pilot? (to avoid confusing pilot data with final data)'],
         [3,'Do all team members who need it have log-on information?'],
       [2,'Is the SurveyCTO Collect app updated to the version of SurveyCTO your server is running? (See the ‘Collect’ tab on your server for instructions.)'],
         [3,'Best to update your server and app to the latest version of SurveyCTO before starting the pilot.'],
         [3,'Once you have piloted, avoid updating the app even if a new version is released, to avoid compatibility issues.'],
       [2,'Are all tablets / phones running the most updated version of their operating system (OS)? (or at a minimum, are they all running exactly the same OS?)'],
       [2,'Are all tablets / phones set to the correct date and time?'],
       [2,'Is the pilot-form downloaded and ready-to-go on all tablets?'],
       [2,'Are all tablets fully charged? Do you have battery packs with you in case any batteries run out?'],
       [2,'Do you have a couple of paper copies of the survey, for observers to use, and/or as a last resort in case of unsolvable tablet problems?'],
       [2,'Have you built in time to the field plan to make any required revisions to the programming and re-download the revised forms on all tablets?'],
       [2,'Have you set up Stata do-files for importing and labeling data?'],
       [2,'Have you set up a Stata do-file for running high frequency checks?']
   ];

 questionnaire_chk_content = [
     [1,'Pre-pilot'],
       [2,'Are the conceptual / structural issues identified in the early questionnaire design process sufficiently explored?'],
       [2,'How might the composition of the focus (gender, age, religion, caste/socioeconomic status) affect responses?'],
       [2,'Try to get at how potential respondents think about the key indicators you are trying to measure'],
       [2,'Do you have a translator providing simultaneous translation? If not, does the amount of note-taking correspond to the amount of discussion?'],
     [1,'Survey Design'],
       [2,'Do the questions make sense to the respondent?'],
         [3,'Watch how the respondent reacts to each question – any confusion? How is the reaction time?'],
         [3,'Are there questions that require explanation by enumerator, or clarification from respondent?'],
         [3,'Follow-up with the enumerator (and possibly the respondent) on questions that seemed problematic: is the issue translation? Phrasing? Conceptual? Cultural?'],
       [2,'Are answer options comprehensive?'],
         [3,'Ensure that all ‘other’ responses are specified and recorded'],
       [2,'Is the enumerator following the scripted translations?'],
         [3,'If not, ask the enumerator to note any translation issues to discuss with the team.'],
         [3,'If you do not speak the language, you can still note if interviewer’s questions were noticeably longer/shorter than the written question.'],
     [1,'Interview flow and timing'],
       [2,'How is the flow of the interview?'],
         [3,'Any pauses? (likely areas where interviewers need more instructions)'],
         [3,'Are there times when the respondent looks bored? Uncomfortable? Losing interest?'],
       [2,'Could the order of modules be improved? The order of questions within modules?'],
       [2,'How long does the interview take?'],
         [3,'Check length of each module by noting start and stop time.'],
         [3,'Expect that pilot interviews will take much longer than actual interviews (likely twice as long) – interviewers are expected to do extra probing, take qualitative notes, and record open-ended responses, and the survey instrument may not yet flow well']
     ];

   questionnaire_chk_data = [
     [1,'Pre-pilot'],
       [2,'Are the conceptual / structural issues identified in the early questionnaire design process sufficiently explored?'],
       [2,'How might the composition of the focus (gender, age, religion, caste/socioeconomic status) affect responses?'],
       [2,'Try to get at how potential respondents think about the key indicators you are trying to measure'],
       [2,'Do you have a translator providing simultaneous translation? If not, does the amount of note-taking correspond to the amount of discussion?'],
     [1,'Programming'],
       [2,'Are all skip patterns working as expected?'],
       [2,'Are questions displaying properly on the screen?'],
         [3,'Are there any questions that should be grouped / ungrouped?'],
       [2,'Did all modules appear?'],
       [2,'Are built-in data checks (for outliers or inconsistent responses) working correctly?'],
     [1,'Interview flow and timing'],
       [2,'How is the flow of the interview?'],
         [3,'Any pauses? (likely areas where interviewers need more instructions)'],
         [3,'Are there times when the respondent looks bored? Uncomfortable? Losing interest?'],
       [2,'Could the order of modules be improved? The order of questions within modules?'],
       [2,'How long does the interview take?'],
         [3,'Check length of each module by noting start and stop time.'],
         [3,'Expect that pilot interviews will take much longer than actual interviews (likely twice as long) – interviewers are expected to do extra probing, take qualitative notes, and record open-ended responses, and the survey instrument may not yet flow well'],
     [1,'Data'],
       [2,'Export pilot data from servers to .csv files (if CAPI) and import it into Stata, using either odkmeta or the Stata template provided by Survey CTO.'],
         [3,'It is extremely important to make sure the export works as you expect and you are able to open and check the dataset in Stata!'],
       [2,'Do all modules appear? Do all variables in all modules appear?'],
         [3,'Pay close attention to tables and nested loops.'],
       [2,'Check labels'],
         [3,'Are all variables correctly labeled in English (and not too long for Stata)?'],
         [3,'Check that values for categorical responses are labeled in English (and not too long for Stata)'],
       [2,'Check that all skip patterns worked as expected'],
       [2,'Check for (unexpected) missing data by variable'],
       [2,'Check variance: both high and low.'],
         [3,'If all pilot respondents give the same answer, the data point may not be informative.'],
         [3,'High variance may indicate question needs to be more precise or checks built in to the survey instrument to alert enumerator of extreme values in real time.'],
         [3,'These checks depend on large sample (rough rule of thumb: not informative if n<30).'],
       [2,'Does all ‘pre-loaded’ data appear as expected?'],
     [1,'High frequency checks'],
       [2,'Use the dataset to program a do-file for high-frequency checks (see DIME template for example)'],
       [2,'Run the high-frequency do-file and de-bug as needed'],
       [2,'Export results of checks, and discuss and agree with the survey firm on a final format for communicating and resolving issues discovered in the checks']
   ];

   chk_microdata = [
     [1,'Data Cleaning'],
       [2,'Does the ID variable uniquely identify observations?'],
       [2,'Are all variables labelled?'],
       [2,'Is any factor variable missing value labels?'],
       [2,'Are all missing values coded correctly?'],
       [2,'Do variable names match the accompanying questionnaire?'],
       [2,'Is the ID the first variable listed?'],
       [2,'Does the other variables’ order match the accompanying questionnaire?'],
     [1,'De-identification'],
 [2, 'Make sure all personally-identifying information (PII) is removed!'],
   [3,'DROP names of survey respondent, household members, enumerator, and associated contact information'],
   [3,'ENCRYPT categorical variables by simply dropping the labels for encoded variables (if string, encode first). This applies to names of schools, village and possibly names of other administrative units (will differ by country and by project)'],
   [3,'MASK values of GPS coordinates if GPS information is related to the research question. Otherwise, remove GPS variables'],
       [2,'Remove variables identifying treatment assignment'],
 [2,'Remove any sensitive, potentially identifying information according to survey context. Possible examples include religion and ethnicity.'],
     [1,'Saving Data Set'],
 [2,'Use the cleaned dataset that does not include constructed variables'],
 [2,'Use compress to reduce the file size'],
 [2,'Save in the earliest Stata version compatible with your data formats'],
     [1,'Supporting Documents'],
 [2,'Questionnaires'],
   [3,'Paper format equivalent is better than CTO form'],
   [3,'Names of villages, schools, health facilities, etc listed as response options should be removed'],
 [2,'Data dictionary, if applicable'],
 [2,'Enumerator manuals'],
 [2,'IE Concept Note'],
 [2,'Baseline report, if available'],
 [2,'Methodology description'],
 [2,'Publications citation'],
 [2,'Data cleaning documentation:'],
   [3,'Codes for missing in survey and in dataset'],
   [3,'Record of any corrections made'],
   [3,'If variables were masked for de-identification, report method used'],
     [1,'Submission'],
 [2,'We recommend publishing data sets as impact evaluation surveys under licensed access'],
 [2,'Go to MicroData Library Home Page (http://microdatalib.worldbank.org/) and log in with your UPI and passcode.'],
 [2,'Click the link to “Deposit data” and next “Sign in to get started”.'],
 [2,'If you are a returning user, all the projects that you have deposited will show up in the list either as “DRAFT” or “PROCESSED”. If you are a first-time user, click “Create New Project” to start with the process. Mandatory fields will be marked with stars. Provide “Title”, “Short name”, one paragraph of “Description” and Collaboration which will the email address of other Bank staff who may be authorized to make future edit and review this project. All the information provided here can be edited later.'],
 [2,'Fill each field as much as possible based on project information, which can be found in concept note, baseline report or other project documents.'],
 [2,'Load data files and other documents'],
 [2,'Review by Team Member: Send the links to project editing page to PIs, project manager, field coordinators and other team members for review and comments before submitting the project.'],
 [2,'Review by Data Group:  After submitting the project, staff from Development Data Group will review the form and uploaded data files, confirm the successful documentation and access authority, or contact the project creator with further questions.']
   ];

   chk_datacleaning = [
     [1,'Before data cleaning: Importing the data'],
       [2,'Check for importing issues such as broken lines when importing .csv files'],
       [2,'Make sure you have unique IDs'],
       [2,'De-identify all data and save in a new .dta file'],
       [2,'Never make any changes to the raw data'],
     [1,'Important steps for data cleaning'],
       [2,'Label variables, don’t use special characters'],
       [2,'Recode and label missing values: your data set should not have observations with -777, -88 or -9 values, for example'],
       [2,'Encode variables: all categorical variables should be saved as labeled numeric variables, no strings'],
       [2,'Don’t change variable names from questionnaire, except for nested repeat groups and reshaped roster data'],
       [2,'Test variables consistency'],
       [2,'Identify and document outliers'],
       [2,'Compress dataset so it is saved in the most efficient format'],
       [2,'Save cleaned data set with an informative name. Avoid saving in a very recent Stata version'],
     [1,'Optional steps in data cleaning'],
       [2,'Order variables – unique ID always first, then same order as questionnaire'],
 [2,'Drop variables that only make sense for questionnaire review (duration, notes, calculates)'],
       [2,'Rename roster variables'],
       [2,'Categorize variables listed as “others”'],
       [2,'Add metadata as notes: original survey question, relevance, constraints, etc']
   ];

/* Functions creating divs ready to be loaded at the wiki */
$(function () {

/*nothing is done with this array yet*/
 /*elements = [
   ['dimewiki-chk-surveyprep'  ,checklistTable ,chk_surveyprep],
   ['dimewiki-chk-questcont'   ,checklistTable ,questionnaire_chk_content],
   ['dimewiki-chk-questdata'   ,checklistTable ,questionnaire_chk_data],
   ['dimewiki-chk-microdata'   ,checklistTable ,chk_microdata],
   ['dimewiki-chk-datacleaning'   ,checklistTable ,chk_datacleaning]
 ]*/


 //console.log('Yes Man');


 if (document.getElementById("dimewiki-chk-surveyprep") != null ) {
   //console.log(chk_surveyprep);
   document.getElementById('dimewiki-chk-surveyprep').innerHTML = checklistTable(chk_surveyprep);
 }
 if (document.getElementById("dimewiki-chk-questcont") != null ) {
   //console.log(questionnaire_chk_content);
   document.getElementById('dimewiki-chk-questcont').innerHTML = checklistTable(questionnaire_chk_content);
 }
 if (document.getElementById("dimewiki-chk-questdata") != null ) {
   //console.log(questionnaire_chk_data);
   document.getElementById('dimewiki-chk-questdata').innerHTML = checklistTable(questionnaire_chk_data);
 }
 if (document.getElementById("dimewiki-chk-microdata") != null ) {
   //console.log(chk_microdata);
   document.getElementById('dimewiki-chk-microdata').innerHTML = checklistTable(chk_microdata);
 }
 if (document.getElementById("dimewiki-chk-datacleaning") != null ) {
   //console.log(chk_datacleaning);
   document.getElementById('dimewiki-chk-datacleaning').innerHTML = checklistTable(chk_datacleaning);
 }

if (document.getElementById("checklist1") != null ) {

 getChecklist('checklist1');

 }



function getChecklist(chklistname) {

 var requri   =   'https://api.github.com/repos/worldbank/DIMEwiki/contents/Topics/Checklists/checklists/'+ chklistname + '.js?ref=checklistAjax';

 console.log(chklistname);

  requestJSON(requri, function(json) {

   if(json.message == "Not Found" ) {
      document.getElementById('checklist1').innerHTML = "<h2>Checklist not found, check the name of the checklist</h2>"

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
