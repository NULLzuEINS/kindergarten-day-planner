$(function() {
  $("#sortable1, #sortable2, #sortable3").sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();

  $(document).dblclick(".ui-state-default", function() {
    $("[contenteditable]", this).focus()
  });


  $('#cmd').click(function() {
var doc = new jsPDF();

var specialElementHandlers = {
 '#editor': function(element, renderer){
  return true;
 }
};

doc.fromHTML($('body').get(0), 15, 15, {
 'width': 170,
 'elementHandlers': specialElementHandlers
});
    doc.save('sample-file.pdf');
  });
});
