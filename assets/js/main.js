$(document).ready(function(){
	//console.log("ready");

	$(".top-badge-notify").click(function() {
		var className = $(this).attr("id");
		console.log(className);
		var generatedName = "div-" + className.split("-")[1];
		console.log(generatedName);
		$("#"+generatedName).trigger("click");

	});

	$(".collection-card").click(function(e) {
		$(".div-details").hide();
		var targetName = $(this).attr("data-target");
		console.log(targetName);
		$(targetName).show();

		if(targetName == "#div-apt") {
			loadAppointments();
			doAnimation(".custom-card", "pulse");
		}
		if(targetName == "#div-inp") {
			doAnimation(".custom-card", "flipInX");
			$(".custom-card").show();
			$(".custom-card-info").hide();
		}
		if(targetName == "#div-otp") {
			doAnimation(".custom-card", "flipInX");
			$(".custom-card-info").hide();
			$(".custom-card").show();
		}
		if(targetName == "#div-ref") {
			doAnimation(".custom-card", "flipInX");
			$(".custom-card-info").hide();
			$(".custom-card").show();
		}
		
	});

	$(".card-flip-parent .custom-card").click(function() {
		var containerID = $(this).parent().attr("id");
		var divID2 = "#"+containerID + " .custom-card-info";
		$(this).hide();
		$(divID2).show();
		doAnimation(divID2, "flipInX");
	});

	$(".card-flip-parent .custom-card-info").click(function() {
		var containerID = $(this).parent().attr("id");
		var divID1 = "#"+containerID + " .custom-card";
		$(this).hide();
		$(divID1).show();
		doAnimation(divID1, "flipInX");
	});

	function doAnimation(container, animatorClass) {
		$(container).removeClass('bounceIn pulse flipInY flipInX animated').addClass(animatorClass + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	      $(this).removeClass(animatorClass + ' animated');
	    });
	}

	$(".ptd-action").click(function() {
		//$(document).load("patient.html");
		//window.location.replace("/patient.html");
		window.location.replace("file:///home/shakti/UI/Repository/UI/patient.html");
	});

	/*$("#div-outpatients").click(function(event) {
		//event.preventDefault();
		var tableOpened = $("#collapseTwo").hasClass("show");
		var calOpened = $("#collapseOne").hasClass("show");
		if(calOpened) {
			$("#div-appointments").trigger("click");
		}
		if(tableOpened) {
			$('head').append('<link id="mobile-table" rel="stylesheet" href="css/mobile-table.css" type="text/css" />');
		}
	});*/

	window.mobilecheck = function() {
	  var check = false;
	  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
	};
	//defaultView: window.mobilecheck() ? "basicDay" : "agendaWeek"
			
	if(window.mobilecheck()) {
		$("#patient-data").removeClass();
	} else {
		$("#patient-data").attr("class", "table table-hover table-sm");
	}

	$(window).on('resize', function(){
		if(window.mobilecheck()) {
			$("#patient-data").removeClass();
		} else {
			$("#patient-data").attr("class", "table table-hover table-sm");
		}
	});

	$('a[href="#collapseOne"]').click(function(){
		
	});

	var ua = navigator.userAgent,
	    event = (ua.match(/iPad/i)) ? "touchstart" : "click";
	if ($('.table').length > 0) {
		$('.table .theader').on(event, function() {
			$(this).toggleClass("active", "").nextUntil('.theader').css('display', function(i, v) {
				return this.style.display === 'table-row' ? 'none' : 'table-row';
			});
		});
	}


	function loadAppointments() {
		setTimeout(function() {
			//console.log("event");
			//var clientWidth = $(window).width();
			
			if(!window.mobilecheck()) {
				$(function () {
				    $('#calendar-apt').fullCalendar({
				      header: {
				        left: 'prev,next today',
				        center: 'title',
				        right: 'month,agendaWeek,agendaDay,listWeek'
				      },
				      aspectRatio: 2,
				      contentHeight: 400, 
				      defaultDate: moment(new Date()),
				      navLinks: true,
				      editable: true,
				      eventLimit: true,
				      events: [{
				          title: 'Cardiology',
				          start: '2019-07-01'
				        },
				        {
				          title: 'Cardiology',
				          start: '2019-07-07',
				          end: '2019-07-10'
				        },
				        {
				          id: 999,
				          title: 'Cardiology',
				          start: '2019-07-09T16:00:00'
				        },
				        {
				          id: 998,
				          title: 'Cardiology',
				          start: '2019-07-16T16:00:00'
				        },
				        {
				          title: 'Conference',
				          start: '2019-07-11',
				          end: '2019-07-13'
				        },
				        {
				          title: 'Meeting',
				          start: '2019-07-12T10:30:00',
				          end: '2019-07-12T12:30:00'
				        },
				        {
				          title: 'Surgery',
				          start: '2019-07-12T12:00:00'
				        },
				        {
				          title: 'Meeting',
				          start: '2019-07-12T14:30:00'
				        },
				        {
				          title: 'Appointment',
				          start: '2019-07-12T17:30:00'
				        },
				        {
				          title: 'Appointment',
				          start: '2019-07-12T20:00:00'
				        }
				      ],
				      select: function (startDate, endDate) {
				        var dateStart = moment(startDate);
				        var dateEnd = moment(endDate);

				        if (dateStart.isValid() && dateEnd.isValid()) {
				          $('#calendar-apt').fullCalendar('renderEvent', {
				            title: 'Long event',
				            start: dateStart,
				            end: dateEnd,
				            allDay: true,
				            navLinks: true,
				      		editable: true,
				      		eventLimit: true,
				          });
				        }
				      },
				      dayClick: function (date, jsEvent, view) {
					    var date = moment(date);

					    if (date.isValid()) {
					      $('#calendar-apt').fullCalendar('renderEvent', {
					        title: 'New Appointment',
					        start: date,
					        allDay: true
					      });
					    } else {
					      alert('Invalid');
					    }
					  },
				    })
				  });

				$('#calendar-apt').fullCalendar('renderEvent', {
					navLinks: true,
		      		editable: true,
				});
			} else {
				$(function () {
				    $('#calendar-apt').fullCalendar({
				      aspectRatio: 4,
				      contentHeight: 330, 
				      defaultDate: moment(new Date()),
				      navLinks: true,
				      editable: true,
				      eventLimit: true,
				      events: [{
				          title: 'Cardiology',
				          start: '2019-07-01'
				        },
				        {
				          title: 'Cardiology',
				          start: '2019-07-07',
				          end: '2019-07-10'
				        },
				        {
				          id: 999,
				          title: 'Cardiology',
				          start: '2019-07-09T16:00:00'
				        },
				        {
				          id: 998,
				          title: 'Cardiology',
				          start: '2019-07-16T16:00:00'
				        },
				        {
				          title: 'Conference',
				          start: '2019-07-11',
				          end: '2019-07-13'
				        },
				        {
				          title: 'Meeting',
				          start: '2019-07-12T10:30:00',
				          end: '2019-07-12T12:30:00'
				        },
				        {
				          title: 'Surgery',
				          start: '2019-07-12T12:00:00'
				        },
				        {
				          title: 'Meeting',
				          start: '2019-07-12T14:30:00'
				        },
				        {
				          title: 'Appointment',
				          start: '2019-07-12T17:30:00'
				        },
				        {
				          title: 'Appointment',
				          start: '2019-07-12T20:00:00'
				        }
				      ],
				      select: function (startDate, endDate) {
				        var dateStart = moment(startDate);
				        var dateEnd = moment(endDate);

				        if (dateStart.isValid() && dateEnd.isValid()) {
				          $('#calendar-apt').fullCalendar('renderEvent', {
				            title: 'Long event',
				            start: dateStart,
				            end: dateEnd,
				            allDay: true,
				            navLinks: true,
				      		editable: true,
				      		eventLimit: true,
				          });
				        }
				      },
				      dayClick: function (date, jsEvent, view) {
					    var date = moment(date);

					    if (date.isValid()) {
					      $('#calendar-apt').fullCalendar('renderEvent', {
					        title: 'New Appointment',
					        start: date,
					        allDay: true
					      });
					    } else {
					      alert('Invalid');
					    }
					  },
				    })
				  });

				$('#calendar-apt').fullCalendar('renderEvent', {
					navLinks: true,
		      		editable: true,
				});
			}				
		}, 100);
	}
});