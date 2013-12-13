$(function(){
	function loadLanding(){
		$.get("template/landingPage.html", function(htmlArg){
			$.ajax({
				url : ,
				data : 
			});
			$("#wrap").append(html);
		};
	};
	function login(){
		var username = $("#username").val();
		var pass = $("#pass").val();
		$.ajax({
			url : "xhr/login.php",
			data : {
				username: username,
				pass : pass
			},
			type : "post",
			dataType : "json",
			success : function(response){
				console.log(response);
				if(response.user){
					loadApp();
				}
				else{
					loadLanding();
				}
			}
		});
	};
	
	function loadApp(){
		$("#wrap").empty();
	};
});