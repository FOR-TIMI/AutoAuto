var inst = mobiscroll.eventcalendar('#demo-custom-event-popover', {
    theme: 'ios',
    themeVariant: 'light',
    clickToCreate: false,
    dragToCreate: false,
    dragToMove: false,
    dragToResize: false,
    eventDelete: false,
    view: {
        calendar: {
            labels: false,
            popover: true,
            popoverClass: 'custom-event-popover'
        }
    },
    renderEventContent: function (data) {
        return '<div">' + data.title + '</div>' +
            '<div class="md-custom-event-cont">' +
            '<img class="md-custom-event-img" src="' + getParticipant(data.original.participant).img + '"/>' +
            '<div class="mbsc-custom-event-name">' + getParticipant(data.original.participant).name + '</div>' +
            '<button mbsc-button class="md-custom-event-btn" data-color="primary" data-variant="outline">Add participant</button>' +
            '</div>';
    },
    onEventClick: function (event, inst) {
        if (event.domEvent.target.classList.contains('md-custom-event-btn')) {
            event.domEvent.stopPropagation();
            mobiscroll.toast({
                message: getParticipant(event.event.participant).name + '\'s event clicked'
            });
        }
    }
});

function getParticipant(id) {
    switch (id) {
        case 1:
            return {
                img: 'https://img.mobiscroll.com/demos/m1.png',
                name: 'Barry L.'
            };
        case 2:
            return {
                img: 'https://img.mobiscroll.com/demos/f1.png',
                name: 'Hortense T.'
            };
        case 3:
            return {
                img: 'https://img.mobiscroll.com/demos/m2.png',
                name: 'Carl H.'
            };
    }
}

mobiscroll.util.http.getJson('https://trial.mobiscroll.com/custom-events/', function (events) {
    inst.setEvents(events);
}, 'jsonp');