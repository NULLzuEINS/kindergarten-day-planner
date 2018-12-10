$(function() {
    var items = [{
        title: '',
        src: ''
    }];

    $('#source, #planner').sortable({
        connectWith: '.connectedSortable'
    }).disableSelection();

    $(document).dblclick('.ui-state-default', function() {
        $('[contenteditable]', this).focus()
    });

    var doc = new jsPDF("p", "mm", "a4");
    doc.setProperties({
        title: 'Tagesablauf',
        subject: 'This is the subject',
        author: 'Author Name',
        keywords: 'kindergarten',
        creator: 'NULLzuEINS Inh. André Lademann'
    });

    var settings = {
        image: {
            ratio: 3 / 4
        },
        page: {
            paddingHorizontal: 20,
            paddingVertical: 20
        }
    };

    settings.image.width = doc.internal.pageSize.getWidth() - settings.page.paddingHorizontal * 2;
    settings.image.height = settings.image.width * settings.image.ratio;

    $('#cmd').click(function() {
        let items = $('#planner').sortable('toArray');
        items.forEach(function(item, index) {
            let image = new Image();
            let imageItem = $('#' + item + ' > img');
            let imagePositionVertical;
            if (index %= 1) {
                console.log(index)
                imagePositionVertical = settings.page.paddingVertical;
            } else {
                imagePositionVertical = settings.page.paddingVertical + settings.image.height;
            }
            image.src = imageItem.attr('src');
            image.alt = imageItem.attr('alt');
            image.title = imageItem.attr('title');
            doc.addImage(
                image,
                'png',
                settings.page.paddingHorizontal,
                imagePositionVertical,
                settings.image.width,
                settings.image.height
            );
            doc.addPage();
        });
        doc.save('tagesablauf.pdf');
    });
});
