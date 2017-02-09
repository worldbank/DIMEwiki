/* Arrays with data needed for the main page */

  lifeCycleTopics = [
     ['Image file','Impact Evaluation Design', 'A brief introduction to common IE methods, concept note, monitoring compliance and impact evaluation manual. The page also has links to sample IE concept note, protocol for monitoring compliance and impact evaluation manual.'],
     ['Image file','Sampling & Power Calculations','This page discusses how to create a statistically valid sample representative of the population of interest for impact evaluation.'],
     ['Image file','Human Subjects Approval','Fill this in by edit the page MediaWiki:Common.js'],
     ['Image file','Preparing for Data Collection','Fill this in by edit the page MediaWiki:Common.js'],
     ['Image file','Survey Firm Procurement','Fill this in by edit the page MediaWiki:Common.js'],
     ['Image file','Questionnaire Design','Fill this in by edit the page MediaWiki:Common.js'],
     ['Image file','Questionnaire Translation','Fill this in by edit the page MediaWiki:Common.js'],
     ['Image file','Questionnaire Programming','This topic discusses how to take the questionnaire you developed during Questionnaire Design and make it a digital CAPI questionnaire. It discusses how to plan that work and best practices to remember to make the work flow as easy as possible for the enumerator as well as reducing the risk for lost or corrupted data.'],
     ['Image file','Survey Pilot','This page discusses what a survey pilot is, and also discusses the stages, timeline, people involved, and the structure of a survey pilot.'],
     ['Image file','Enumerator Training','This page highlights the best practices to follow during enumerator training and the development of enumerator manual.'],
     ['Image file','Monitoring Data Quality','This page discusses ways in which survey data can be monitored for quality. The page also includes practical tips on data quality management and tips on how to conduct duplicate and survey log checks, high frequency checks, and back checks.'],
     ['Image file','Data Management','Fill this in by edit the page MediaWiki:Common.js'],
     ['Image file','Data Cleaning','Fill this in by edit the page MediaWiki:Common.js'],
     ['Image file','Data Analysis','Fill this in by edit the page MediaWiki:Common.js'],
     ['Image file','Reproducible Research','Fill this in by edit the page MediaWiki:Common.js']
   ];

   standAloneTopics = [
     'Stata Coding Practices','SurveyCTO Coding Practices','Geo Spatial Data','Check Lists for Field Coordinators','i2i Trust Fund for Impact Evaluation','Impact Evaluation Team','Cost-effectiveness Analysis'];
   standAloneTopics.sort(function(a, b){return 0.5 - Math.random()});


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
      [1,'Content-focused Pilot'],
        [2,'Is the questionnaire you are piloting fully translated into the local language?'],
        [2,'Is the instrument formatted for printing? Make sure there are sufficient margins on all pages for taking notes.'],
        [2,'Did you print enough copies of the instrument for all interviewers and all people accompanying interviews to have a copy for each planned interview?'],
        [2,'Does the survey instrument include both the research team language and local language (where different)? If not, remember to print out copies in each language as applicable.'],
        [2,'Do you have access to a printer to print revisions in real time if significant changes are needed?'],
        [2,'Have you instructed interviewers (or observers) to record the start and end time for each module?'],
      [1,'Data-focused Pilot'],
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
      ]

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
    ]

/* Functions creating divs ready to be loaded at the wiki */
$(function () {

/*nothing is done with this array yet*/
  elements = [
    ['dimewiki-mainpage-lc-js'  ,dispTopics_lc  ,lifeCycleTopics],
    ['dimewiki-mainpage-sa-js'  ,dispTopics_sa  ,standAloneTopics],
    ['dimewiki-chk-surveyprep'  ,checklistTable ,chk_surveyprep],
    ['dimewiki-chk-questcont'   ,checklistTable ,questionnaire_chk_content],
    ['dimewiki-chk-questdata'   ,checklistTable ,questionnaire_chk_data]
  ]


  /*console.log(Questionnaire_chk_Content);*/

  if (document.getElementById("dimewiki-mainpage-lc-js") != null ) {
    document.getElementById('dimewiki-mainpage-lc-js').innerHTML = dispTopics_lc(lifeCycleTopics);
  }
  if (document.getElementById("dimewiki-mainpage-sa-js") != null ) {
    document.getElementById('dimewiki-mainpage-sa-js').innerHTML = dispTopics_sa(standAloneTopics);
  }
  if (document.getElementById("dimewiki-chk-surveyprep") != null ) {
    document.getElementById('dimewiki-chk-surveyprep').innerHTML = checklistTable(chk_surveyprep);
  }
  if (document.getElementById("dimewiki-chk-questcont") != null ) {
    document.getElementById('dimewiki-chk-questcont').innerHTML = checklistTable(questionnaire_chk_content);
  }
  if (document.getElementById("dimewiki-chk-questdata") != null ) {
    document.getElementById('dimewiki-chk-questdata').innerHTML = checklistTable(questionnaire_chk_data);
  }



}());


/* Functions needed for checklists */

function checklistTable(chkarray) {

  var tableString = '<table class="chk_table">';
  tableString += '<tr><th colspan="4">Project name: _______________________________________________</th>';
  tableString += '<tr><th colspan="4">Country: _______________________________________________</th>';
  tableString += '<tr><th colspan="4">District: _______________________________________________</th>';
  tableString += '<tr><td></td><td>Initials</td><td>Number</td><td>Checklist Item</td></tr>';

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

  var checkbox = (thisLevel == 1  ? '' : '[ __ ]')

  switch (thisLevel) {
      case 1:
          tr_class = 'class="chk_row1"';
          break;
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

  return '<tr '+tr_class+'><td nowrap>'+checkbox+'</td><td></td><td nowrap class="chk_number">'+ number +'</td><td class="chk_item">'+ thisItem +'</td></tr>';

}


/* Functions needed for the main page */



function dispTopics_lc(topicArray)
  {
    var topicTable = '<div class="table-div"><table style="width:100%">';
    topicTable += '<col width=20%><col width=80%><tr>';

    for ( topic = 0 ; topic < topicArray.length ; ++topic ) {

      topicTable += '<td rowspan="2">'+ topicArray[topic][0] +'</td>';
      topicTable += '<td class="td_lc_titl"><a href="/wiki/'+ topicArray[topic][1] +'">'+ topicArray[topic][1] +'</a></td>';
      topicTable += '</tr><tr>';
      topicTable += '<td class="td_lc_desc">'+ topicArray[topic][2] +'</td></tr>';

    }

    topicTable += '</table></div>';

    return topicTable;
  }

  function dispTopics_sa(topicArray)
  {

    var topicTable = '<div class="table-div"><table style="width:100%">';

    for ( topic = 0 ; topic < topicArray.length ; ++topic ) {

      topicTable += '<tr><td class="td_sa"><a href="/wiki/'+ topicArray[topic] +'">'+ topicArray[topic] +'</a></td></tr>';
    }

    topicTable += '</table></div>';

    return topicTable;
  }
