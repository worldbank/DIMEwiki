function dispTopics_lc(topicArray)
  {
    var topicTable = '<div class="table-div"><table style="width:100%">';
    topicTable += '<col width=30%><col width=70%><tr>';
    topicTable += '<td rowspan="2">'+ topicArray[0] +'</td>';
    topicTable += '<td class="td_lc_titl">'+ topicArray[1] +'</td>';
    topicTable += '</tr><tr>';
    topicTable += '<td class="td_lc_desc">'+ topicArray[2] +'</td>';

    topicTable += '</tr></table></div>';

    return topicTable;
  }

  function dispTopics_sa(topic)
  {
    var topicTable = '<div class="table-div"><table style="width:100%">';
    topicTable += '<tr><td class="td_sa">'+ topic +'</td></tr>';
    topicTable += '</table></div>';

    return topicTable;
  }
