$(function() {
    $('#source, #planner').sortable({
        connectWith: '.connectedSortable'
    }).disableSelection();

    $(document).dblclick('.ui-state-default', function() {
        $('[contenteditable]', this).focus()
    });

    var doc = new jsPDF();
    doc.setProperties({
        title: 'Title',
        subject: 'This is the subject',
        author: 'Author Name',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'Creator Name'
    });

    $('#cmd').click(function() {
        //doc.save('tagesplaner.pdf');
        let items = $('#planner').sortable('toArray');
        items.forEach(function(item) {
            console.log($('#' + item + ' > img').attr('src'));
        });
    });
});
