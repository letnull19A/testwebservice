document.addEventListener('DOMContentLoaded', function() {
   var calendarEl = document.getElementById('calendar');

   var calendar = new FullCalendar.Calendar(calendarEl, {
     plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
     locale: 'ru',
     height: 'parent',
     header: {
       left: 'prev,next today',
       center: 'title',
       right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
     },
     defaultView: 'dayGridMonth',
     defaultDate: '2022-05-22',
     navLinks: false, // can click day/week names to navigate views
     editable: false,
     eventLimit: true, // allow "more" link when too many events
     events: [
       {
         title: 'All Day Event',
         start: '2022-05-01',
       },
       {
         title: 'Long Event',
         start: '2022-05-07',
         end: '2022-05-10'
       },
       {
         title: 'Repeating Event',
         start: '2022-05-09T16:00:00'
       },
       {
         title: 'Repeating Event',
         start: '2022-05-16T16:00:00'
       },
       {
         title: 'Conference',
         start: '2022-05-11',
         end: '2022-05-13'
       },
       {
         title: 'Meeting',
         start: '2022-05-12T10:30:00',
         end: '2022-05-12T12:30:00'
       }
     ]
   });

   calendar.render();
 });