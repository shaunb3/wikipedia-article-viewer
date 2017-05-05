$(document).ready(function(){
	
	

	$("#search").click(function(){
		$("#output").html("");
		var searchTerm = $("#searchTerm").val();

		var api ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";

		$.ajax({
			type:"get",
			url:api,
			async:false,
			dataType :"json",
			success: function(data){
				console.log(data);

				for(var i = 0; i<data[1].length; i++)
				{
					$("#output").append("<li><h2><a href=" +'"'+ data[3][i]+'"'+">" + data[1][i]+ "</a>" +"</h2>" + "<p>"+ data[2][i]+"</p>" + "</li>");
				}
			},
			error: function(data){
				alert("error");
			}
		});
	});
});

//<h1><a href="#">Some Link Text</a></h1>
//"<li><h2>"+data[1][i]+ "</h2>" + "<p>"+ data[2][i]+"</p>" + "</li>"