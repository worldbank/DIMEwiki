function checklistTable(chkarray) {

  var tableString = '<table><tr><th colspan="4">Checklist Questionnaire pilot</th></tr>';
  tableString += '<tr><th colspan="4">Projet name: _______________________________________________</th>';
  tableString += '<tr><th colspan="4">Country: _______________________________________________</th>';
  tableString += '<tr><th colspan="4">District: _______________________________________________</th>';
  tableString += '<tr><td>cb</td><td>initials</td><td>number</td><td>item</td></tr>';

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
