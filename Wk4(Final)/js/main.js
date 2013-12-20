$(function(){
	console.log("self executing loaded");
	
	//load landing-----------------------------------------------------------------------
	function loadLanding(){
	$("#wrap").empty();												//empty the wrapper
	$.get("template/template.html", function(htmlArg){					//get the template
		var land = $(htmlArg).find("#landingPageTemplate").html();	//find the script tag by ID
		$.template("landingtemplate", land);						//make the template
		var landhtml = $.render("","landingtemplate");				//render the template
	
			$("#wrap").append(landhtml);							//append or attach to wrapper div
		});
	};

	loadLanding();
	//loads landing as soon as page is loaded
	
	
	//load App---------------------------------------------------------------------------------
	function loadApp(){
		$("#wrap").empty();
 		$.get("template/template.html", function(htmlArg){
 			var home = $(htmlArg).find("#appHomeTemplate").html();
 			$.template("homeTemplate", home);
 			var homehtml = $.render("", "homeTemplate");
 			
 			$("#wrap").append(homehtml);
 			});
 			
 			
 				//setting up the Date to appear in the proper format
				var date = new Date();
				var month = date.getMonth(); 		//delivers month 
				var nDate = date.getDate();			//delivers the day number
				var day = date.getDay();			//delivers day index, e.g Saturday = 6, Sunday = 0
				var year = date.getFullYear();		//delivers year

				//arrays for the computer to reference
				var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

				var actualDate = days[day] + ", " + months[month] + " " + nDate + ", "+ year;
								

				$("<p>Today's Date:"+actualDate+"</p>").appendTo("#headquarters");
				//the above code was supposed to display the date
				console.log(actualDate);
				
				
				 			
 				$(document).on("click", ".logoutAffordance", function(){
					console.log("clicked to logout");
					
																		//logout
					$.get("xhr/logout.php", function(){
						$("#wrap").empty();
						console.log("loggedOut");
						loadLanding();
					})
					return false;
				});
				
				$(document).on("click", ".toTasks", function(){			//when a project is clicked, take to tasks
					console.log("clicked a project");
					//$("#wrap").empty();
					loadTasks();										//loads tasks page
				});
				
				$(document).on("click", ".myProfileButton", function(){
					console.log("clicked view profile");
					
					//$("#wrap").empty();
					loadProfile();
				});
 																		//content deleters
 		
 		$(document).on("click", "#project1Delete", function(){
			$("#dialog").dialog({
				resizable : false,
				height : 200,
				modal : true,
				buttons : {
					"Delete" : function(){
						$(this).dialog("close");
						$("#s1").remove();
					},
					Cancel : function(){
						$(this).dialog("close");
					}
				}
			});
		});
		
 		$(document).on("click", "#project2Delete", function(){
			$("#dialog").dialog({
				resizable : false,
				height : 200,
				modal : true,
				buttons : {
					"Delete" : function(){
						$(this).dialog("close");
						$("#s2").remove();
					},
					Cancel : function(){
						$(this).dialog("close");
					}
				}
			});
		});
		
 		$(document).on("click", "#project3Delete", function(){
			$("#dialog").dialog({
				resizable : false,
				height : 200,
				modal : true,
				buttons : {
					"Delete" : function(){
						$(this).dialog("close");
						$("#s3").remove();
					},
					Cancel : function(){
						$(this).dialog("close");
					}
				}
			});
		});
																//edit a project function. not completed
		$(document).on("click", "#edit", function(){
			console.log("clicked edit");
			$("#dialog-form").dialog({
				//autoOpen: false,
     		 	height: 500,
     			width: 600,
      			modal: true,
      			buttons: {
      				"Make these changes" : function(){
      					$(this).dialog("close");
      					var projectName = $("#editNameInput").val();
      					var projectStatus = $("#editStatusInput").val();
      					
      					$(".title1").empty();
      					$(".title1").append(projectName);
      					
      				},
      				Cancel : function(){
      					$(this).dialog("close");
      				}
      			}
			});
		});	
																	// all this code below adds a project

		$(document).on("click", ".projectAdd1", function(){
			console.log("clicked add project");
			var projectName = $(".nameInput1").val();				//collecting values from input fields, storing them in variables
			var projectDesc = $(".textArea1").val();
			var projectDDate = $(".dateInput1").val();
			var projectStatus = $(".choices1").val();
			var projectPriority = $(".priorityInput1").val();
			
			if(projectName === "" || projectDesc === "" || projectDDate === ""){
				console.log("field empty");
				$("#last").append("<p id='errorAdd'>Please Fill Out All Fields</p>");	//error message
			}
			
			else{
				$("<div id='slot4' class='slot'></div>").appendTo("#sortable");
				$("#slot4").append("<h2 class='title'>"+projectName+"</h2>");
				$("#slot4").append("<p class='priority'>"+projectPriority+"</p>");
				$("#slot4").append("<p class='slotText'>"+projectDDate+"</p>");
				$("#slot4").append("<p class='slotText'>"+projectDesc+"</p>");
				$("#slot4").append("<p class='slotText'>Tasks to Complete : 0</p>");
				if(projectStatus === "On Time"){
					$("#slot4").append("<img class='slotpic' src='images/onTrack.png' width=83 height=75/>")
				}
				if(projectStatus === "Finished"){
					$("#slot4").append("<img class='slotpic' src='images/completed.png' width=83 height=75/>")
				}
				if(projectStatus === "Urgent" || projectStatus ==="Delayed"){
					$("#slot4").append("<img class='slotpic' src='images/urgentIcon.png' width=83 height=75/>")
				}
				$("#slot4").append("<img class='slotedit' src='images/edit.png' width=80 height=23/>");
				$("#slot4").append("<img class='slotdelete' src='images/delete.png' width=81 height=24/>");
			}
			
			//console.log(projectName, projectDesc, projectDDate, projectStatus, projectPriority);
			
		});
		
		

		console.log("loadedApp");
	};
	
	//loadApp();
	
	
	//Load Tasks---------------------------------------------------------------------------------
	function loadTasks(){
		$("#wrap").empty();
		$.get("template/template.html", function(htmlArg){
			var tasks = $(htmlArg).find("#taskHomeTemplate").html();
			$.template("tasksTemplate", tasks);
			var taskshtml = $.render("","tasksTemplate");
			
			$("#wrap").append(taskshtml);
			
		});
 		$(document).on("click", "#task1Delete", function(){				//deleting tasks
			$("#dialog").dialog({
				resizable : false,
				height : 200,
				modal : true,
				buttons : {
					"Delete" : function(){
						$(this).dialog("close");
						$("#t1").remove();
					},
					Cancel : function(){
						$(this).dialog("close");
					}
				}
			});
		});
		
 		$(document).on("click", "#task2Delete", function(){
			$("#dialog").dialog({
				resizable : false,
				height : 200,
				modal : true,
				buttons : {
					"Delete" : function(){
						$(this).dialog("close");
						$("#t2").remove();
					},
					Cancel : function(){
						$(this).dialog("close");
					}
				}
			});
		});
		
 		$(document).on("click", "#task3Delete", function(){
			$("#dialog").dialog({
				resizable : false,
				height : 200,
				modal : true,
				buttons : {
					"Delete" : function(){
						$(this).dialog("close");
						$("#t3").remove();
					},
					Cancel : function(){
						$(this).dialog("close");
					}
				}
			});
		});
		
														//all this code adds a task
		$(document).on("click", ".taskAdd", function(){
			console.log("clicked add task");
			var taskName = $(".nameInput").val();
			var taskDesc = $(".textArea").val();
			var taskDDate = $(".dateInput").val();
			var taskStatus = $(".choices").val();
			var taskPriority = $(".priorityInput").val();
			
			if(taskName === "" || taskDesc === "" || taskDDate === ""){
				console.log("field empty");
				$("#last").append("<p id='errorAdd'>Please Fill Out All Fields</p>");
			}
			
			else{
				$("<div id='task4' class='task'></div>").appendTo("#sortablee");
				$("#task4").append("<h2>"+taskName+"</h2>");
				$("#task4").append("<p class='priority'>"+taskPriority+"</p>");
				$("#task4").append("<p class='taskText'>"+taskDDate+"</p>");
				$("#task4").append("<p class='taskText'>"+taskDesc+"</p>");
				if(taskStatus === "On Time"){
					$("#task4").append("<img class='taskpic' src='images/onTrack.png' width=83 height=75/>")
				}
				if(taskStatus === "Finished"){
					$("#task4").append("<img class='taskpic' src='images/completed.png' width=83 height=75/>")
				}
				if(taskStatus === "Urgent" || taskStatus ==="Delayed"){
					$("#task4").append("<img class='taskpic' src='images/urgentIcon.png' width=83 height=75/>")
				}
				$("#task4").append("<img class='taskedit' src='images/edit.png' width=80 height=23/>");
				$("#task4").append("<img class='taskdelete' src='images/delete.png' width=81 height=24/>");
			}
			
			//console.log(taskName, taskDesc, taskDDate, taskStatus, taskPriority);
			
		});
		
		console.log("loadedTasks");
	};
	
	//loadTasks();
	
	
	
	
	
	//load profile-----------------------------------------------------------------------
	
	function loadProfile(){
		$("#wrap").empty();
		$.get("template/template.html", function(htmlArg){
			var profile = $(htmlArg).find("#profilePageTemplate").html();
			$.template("profileTemplate", profile);
			var profilehtml = $.render("", "profileTemplate");
			
			$("#wrap").append(profilehtml);
			
		});
		
		$(document).on("click", "#friendDelete1", function(){
			$("#dialog").dialog({
				resizable : false,
				height : 200,
				modal : true,
				buttons : {
					"Delete" : function(){
						$(this).dialog("close");
						$(".friend1").remove();
					},
					Cancel : function(){
						$(this).dialog("close");
					}
				}
			});
		});
			
			$(document).on("click", "#friendDelete2", function(){
				console.log("clicked friend 2 delete");
				$("#dialog").dialog({
				resizable : false,
				height : 200,
				modal : true,
				buttons : {
					"Delete" : function(){
						$(this).dialog("close");
						$(".friend2").remove();
					},
					Cancel : function(){
						$(this).dialog("close");
					}
				}
				});
			});
		
		
		console.log("loadedProfile");
	};
	
	//loadProfile();

	
	var login = function(){										//login function
		var username = $("#username").val();
		var password = $("#password").val();
		console.log('login ajax working');
		$.ajax({
			url : "xhr/login.php",
			data : {
				username: username,
				password : password
			},
			type : "post",
			dataType : "json",
			success : function(response){
				console.log(response);
				if(response.error){
					loadLanding();
					console.log(username,password);
				}
				else{
					loadApp();				
				}
			}
		});
	};
		
	$(document).on("click", "#loginButton", function(){
		console.log("clicked login");
		login();
	});
	
	var signUp = function(){										//sign up function
		var email = $(".email").val();
		var user = $(".usernameReg").val();
		var pass = $(".passwordReg").val();
		
		console.log("clicked login");
	
		$.ajax({
			url : "xhr/register.php",
			data : {
				email : email,
				username : user,
				password :	pass
			},
			type : "post",
			dataType : "json",
			success : function(response){
				if(response.error){
					console.log(response.error);
					console.log("Something got fucked");
				}
				else{
					console.log("registered" + response);	
					username = response.user.user_n;
					loadApp();
				}
				}
			});
	};
	
	$(document).on("click", ".signupButton", function(){
		console.log("clicked signup");
		signUp();
	});
	
});