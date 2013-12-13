$(function(){
	console.log("self executing loaded");
	
	
	function loadLanding(){
	$("#wrap").empty();
	$.get("template/template.html", function(htmlArg){
		var land = $(htmlArg).find("#landingPageTemplate").html();
		$.template("landingtemplate", land);
		var landhtml = $.render("","landingtemplate");

			$("#wrap").append(landhtml);
		});
	};

	loadLanding();
	
	function loadApp(){
		$("#wrap").empty();
 		$.get("template/template.html", function(htmlArg){
 			var home = $(htmlArg).find("#appHomeTemplate").html();
 			$.template("homeTemplate", home);
 			var homehtml = $.render("", "homeTemplate");
 			
 			$("#wrap").append(homehtml);
 			
 				$(document).on("click", ".logoutAffordance", function(){
					console.log("clicked to logout");
					
					
					$.get("xhr/logout.php", function(){
						$("#wrap").empty();
						console.log("loggedOut");
						loadLanding();
					})
					return false;
				});
				$(document).on("click", ".toTasks", function(){
					console.log("clicked a project");
					
					loadTasks();
				});
				$(document).on("click", ".myProfileButton", function(){
					console.log("clicked view profile");
					
					loadProfile();
				});

 		});

		console.log("loadedApp");
	};
	
	//loadApp();
	
	function loadTasks(){
		$("#wrap").empty();
		$.get("template/template.html", function(htmlArg){
			var tasks = $(htmlArg).find("#taskHomeTemplate").html();
			$.template("tasksTemplate", tasks);
			var taskshtml = $.render("","tasksTemplate");
			
			$("#wrap").append(taskshtml);
			
		});
		console.log("loadedTasks");
	};
	
	//loadTasks();
	
	function loadProfile(){
		$("#wrap").empty();
		$.get("template/template.html", function(htmlArg){
			var profile = $(htmlArg).find("#profilePageTemplate").html();
			$.template("profileTemplate", profile);
			var profilehtml = $.render("", "profileTemplate");
			
			$("#wrap").append(profilehtml);
			

		});
		console.log("loadedProfile");
	};
	
	//loadProfile();

	
	var login = function(){
		var username = $("#username").val();
		var password = $("#password").val();
		console.log('clicked');
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
		console.log("clicked");
		login();
	});
	
	var signUp = function(){
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