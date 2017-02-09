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
   ]

   standAloneTopics = [
     'Stata Coding Practices','SurveyCTO Coding Practices','Geo Spatial Data','Check Lists for Field Coordinators','i2i Trust Fund for Impact Evaluation','Impact Evaluation Team','Cost-effectiveness Analysis']
   standAloneTopics.sort(function(a, b){return 0.5 - Math.random()});


/* Arrays with data needed for checklists */


/* Functions creating divs ready to be loaded at the wiki */
$(function () {

  document.getElementById('dimewiki-mainpage-lc-js').innerHTML = dispTopics_lc(lifeCycleTopics);
  document.getElementById('dimewiki-mainpage-sa-js').innerHTML = dispTopics_sa(standAloneTopics);


}());


/* Functions needed for checklists */



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
