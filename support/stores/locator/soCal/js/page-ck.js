// Place page specific jQuery here
$(function(){$(".tab-content").first().show();$(".tabs li:first").addClass("active");$("input").change(function(){var e=$(this).attr("id");$(this).is(":checked")?$(".legend_icons").find("."+e).parent().removeClass("muted"):$(".legend_icons").find("."+e).parent().addClass("muted")});document.documentElement.clientWidth<=1099?$(".locate-stores-filters legend").click(function(){$(".filter-section").slideToggle("slow",function(){});$(this).toggleClass("rotate_chevron")}):$("#stores_map_details").show();$(window).resize(function(){if($(window).width()<=1099)$(".locate-stores-filters legend").click(function(){$(".filter-section").slideToggle("slow",function(){});$(this).toggleClass("rotate_chevron")});else if($(window).width()>1099){$("#stores_map_map").show();$("#stores_map_details").show()}currState=$(".tabs ul li").closest(".active").text();if($(window).width()>=500&&$(window).width()<=1099){$("#stores_map_details").hide();$("#stores_map_map").hide();currState=="Map"?$("#stores_map_map").show():$("#stores_map_details").show()}})});var selected_tab=$(this).find("a").attr("href");$(selected_tab).show();