$(document).ready(function() {
    $("#bgp1").click(function(){
		$("body").css("background","rgb(204,255,255)");
		});
});
$(document).ready(function() {
    $("#bgp2").click(function(){
		$("body").css("background","rgb(255,255,255)");
		});
});
$(document).ready(function() {
    $("#bgp3").click(function(){
		$("body").css("background","rgb(231,233,209)");
		});
});
$(document).ready(function() {
	$("#ding").click(function(){
		var x=$("#ding1").text();
        var a=parseInt(x)+1;
		$("#ding1").text(a);
		});  
});
$(document).ready(function() {
    $("#cai").click(function(){
		var y=$("#cai1").text();
		var b=parseInt(y)+1;
		$("#cai1").text(b);
		});
});
// JavaScript Document