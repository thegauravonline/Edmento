var vpath="https://"+location.hostname+"/";$(".pop-close").click(function(){$('#modal1').hide();$('#modal1').removeClass("in");});$(document).ready(function()
{$(function()
{$("#date").datepicker({dateFormat:'yy-mm-dd'});$("#event_date").datepicker({dateFormat:'yy-mm-dd'});$("#datetime").datepicker({dateFormat:'yy-mm-dd hh:mm'});$("#datetime2").datepicker({dateFormat:'yy-mm-dd hh:mm'});});});$(function(){$("#tabs").tabs({beforeLoad:function(event,ui)
{$('#response').html("");ui.jqXHR.fail(function()
{$('.ui-tabs-panel').html("");ui.panel.html("Loading....");});}});});function selectState(id,value)
{$("#state_id").val(id);$("#state_name").val(value);$("#state-suggesstion-box").hide();}
function selectCity(id,value)
{$("#city_id").val(id);$("#city_name").val(value);$("#city-suggesstion-box").hide();}
function selectLocality(id,value)
{$("#locality_id").val(id);$("#locality_name").val(value);$("#locality-suggesstion-box").hide();}
function getCollegeEnq(x)
{var vpath="https://"+location.hostname+"/";$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:"action=courses&college_id="+x}).done(function(data)
{$("#lead_response").html("");$("#course_id").html(data.list);$("#college_id").val(x);}).fail(function()
{alert("Posting failed.");});}
function getCollegeFav(x)
{var vpath="https://"+location.hostname+"/";$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:"action=courses&college_id="+x}).done(function(data)
{$("#lead_response").html("");$("#course_id").html(data.list);$("#college_id").val(x);$("#fav_college_id").val(x);$("#brochureModal").modal();}).fail(function()
{alert("Posting failed.");});}
function getStudentApplied(x)
{var vpath="https://"+location.hostname+"/";$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:"action=courses&college_id="+x}).done(function(data)
{$("#lead_response").html("");$("#course_id").html(data.list);$("#college_id").val(x);$("#fav_college_id").val(x);$("#studentappliedModal").modal();}).fail(function()
{alert("Posting failed.");});}
$(function(){var vpath="https://"+location.hostname+"/";var college_search,course_id,cat_id,city_id,state_id,exam_id,facility_id,ownership_id,appoval_id;$('.item_filter').click(function(){$('.college-listing').html("<img src='"+vpath+"img/loaderIcon.gif'>");course_id=multiple_values('course_id');cat_id=multiple_values('cat_id');city_id=multiple_values('city_id');state_id=multiple_values('state_id');exam_id=multiple_values('exam_id');facility_id=multiple_values('facility_id');ownership_id=multiple_values('ownership_id');appoval_id=multiple_values('appoval_id');college_search=1;$.ajax({url:vpath+"ajax_home",type:'post',data:{college_search:college_search,course_id:course_id,cat_id:cat_id,city_id:city_id,state_id:state_id,exam_id:exam_id,facility_id:facility_id,ownership_id:ownership_id,appoval_id:appoval_id},success:function(result){$('.college-listing').html(result);$('.search_title').html("<h3>Showing All Colleges as Per Search Criteria</h3>");$('.total').html("");}});});});function multiple_values(inputclass){var val=new Array();$("."+inputclass+":checked").each(function(){val.push($(this).val());});return val;}
$(document).ready(function(){$(".more-search-options ").niceScroll({cursorborder:"",cursorcolor:"#F8A228",boxzoom:true});});$('.logright-slider').slick({infinite:true,slidesToShow:1,slidesToScroll:1,dots:false,arrows:true,responsive:[{breakpoint:1720,settings:{slidesToShow:1,}},{breakpoint:1365,settings:{slidesToShow:1,}},{breakpoint:1024,settings:{slidesToShow:1,}},{breakpoint:768,settings:{slidesToShow:1,}}]});$('.simple_slick_carousel_block').slick({infinite:true,slidesToShow:4,slidesToScroll:1,dots:false,arrows:true,responsive:[{breakpoint:1720,settings:{slidesToShow:4,}},{breakpoint:1365,settings:{slidesToShow:4,}},{breakpoint:768,settings:{slidesToShow:2,}},{breakpoint:400,settings:{slidesToShow:1,}}]});$(document).on('ready',function(){$('.cat-itemslider').slick({slidesToShow:6,slidesToScroll:1,autoplay:false,autoplaySpeed:2000,arrows:true,responsive:[{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:480,settings:{slidesToShow:2}}]});});$('.similar-slider').slick({slidesToShow:3,slidesToScroll:1,autoplay:true,autoplaySpeed:2000,});$(document).on('ready',function(){$('.vendor-slider').slick({slidesToShow:4,slidesToScroll:1,autoplay:false,autoplaySpeed:2000,arrows:true,});});$(document).on('ready',function(){$(".circlechart").circlechart();});function readURL(input){if(input.files&&input.files[0]){var reader=new FileReader();reader.onload=function(e){$('#imagePreview').css('background-image','url('+e.target.result+')');$('#imagePreview').hide();$('#imagePreview').fadeIn(650);}
reader.readAsDataURL(input.files[0]);}}
$("#imageUpload").change(function(){readURL(this);});$(document).ready(function(){var vpath="https://"+location.hostname+"/";$("#form").submit(function(event){event.preventDefault();$('#response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data)
{if(data.url)
{window.location=data.url;}
else
{$("#response").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}
if(data.total)
{$(".total").html(data.total);}
$('html, body').animate({scrollTop:0},1000);}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#password_form").submit(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";$('#password_response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}
else
{$("#password_response").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#login_form").submit(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";$('#login_response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}
else
{$("#login_response").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#comment-form").submit(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";$('#comment-response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}
else
{$("#comment-response").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#expert_form").submit(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";$('#expert_response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}
else
{$("#expert_response").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#college_register").submit(function(event){var vpath="https://"+location.hostname+"/";event.preventDefault();$('#college_register_response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}
else
{$("#college_register_response").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}
$('html, body').animate({scrollTop:0},1000);}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#student_register").submit(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";$('#student_register_response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}
else
{$("#student_register_response").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#password_form").submit(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";$('#password_form_response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}
else
{$("#password_form_response").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#lead_form").submit(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";$('#lead_response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}
else
{$("#lead_response").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#AdvertisementFrm").submit(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";$('#advertisement_susmessage').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}
else
{$("#advertisement_susmessage").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#LoanFrm").submit(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";$('#loan_susmessage').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}
else
{$("#loan_susmessage").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#VisaFrm").submit(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";$('#visa_susmessage').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}
else
{$("#visa_susmessage").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#contact_form").submit(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";$('#contact_response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}
else
{$("#contact_response").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#search_form").submit(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:new FormData(this),contentType:false,cache:false,processData:false}).done(function(data){if(data.url)
{window.location=data.url;}}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});$("#submitok").click(function(event){event.preventDefault();var vpath="https://"+location.hostname+"/";var formData=new FormData($('#formc')[0]);$('#response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:formData,contentType:false,cache:false,processData:false}).done(function(data){if(data.msg=="loginok")
{window.location=vpath+'dashboard';}
else
{$("#response3").html(data.msg);}
if(data.list)
{$(".list").html(data.list);}
$('html, body').animate({scrollTop:0},1000);}).fail(function(jqXHR,textStatus,errorThrown)
{alert(textStatus);});return false;});});$('.description').summernote({tabsize:1,height:200,toolbar:[['style',['bold','italic','underline']],['fontsize',['fontsize']],['color',['color']],['para',['ul','ol','paragraph']],['height',['height']],['table',['table']],['insert',['link','picture','hr']],],});$(document).ready(function()
{var vpath="https://"+location.hostname+"/";$("#country_id").change(function()
{var id=$(this).val();$.ajax({type:"POST",url:vpath+"ajax_home",data:"country_id="+id+"&get_state_option=1"}).done(function(html)
{$("#state_id").html(html);})});$("#state_id").change(function()
{var id=$(this).val();$.ajax({type:"POST",url:vpath+"ajax_home",data:"state_id="+id+"&get_city_option=1"}).done(function(html)
{$("#city_id").html(html);})});$("#city_id").change(function()
{var id=$(this).val();$.ajax({type:"POST",url:vpath+"ajax_home",data:"city_id="+id+"&get_city_option=1"}).done(function(html)
{$("#zone").html(html);})});});function deleteImage(x)
{var vpath="https://"+location.hostname+"/";$('#response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:"del_id="+x+"&delete_picture=1"}).done(function(data)
{$("#response").html(data.msg);if(data.list)
{$(".list").html(data.list);}
if(data.total)
{$(".total").html(data.total);}}).fail(function()
{alert("Posting failed.");});}
function deleteVideo(x)
{var vpath="https://"+location.hostname+"/";$('#response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:"del_id="+x+"&delete_video=1"}).done(function(data)
{$("#response").html(data.msg);if(data.list)
{$(".list").html(data.list);}
if(data.total)
{$(".total").html(data.total);}}).fail(function()
{alert("Posting failed.");});}
function getNext(x)
{var vpath="https://"+location.hostname+"/";$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:"next_id="+x}).done(function(data)
{window.location.href=data.url;}).fail(function()
{alert("Posting failed.");});}
function deletePackage(x)
{var vpath="https://"+location.hostname+"/";$('#response').html("<img src='"+vpath+"img/loaderIcon.gif'>");$.ajax({type:"POST",dataType:"json",url:vpath+"ajax_home",data:"del_id="+x+"&delete_package=1"}).done(function(data)
{$("#response").html(data.msg);if(data.list)
{$(".list").html(data.list);}
if(data.total)
{$(".total").html(data.total);}}).fail(function()
{alert("Posting failed.");});}
$(".reg-toggle-btn").click(function(){$("#login-body").hide();$("#register-body").show();});$(".log-toggle-btn").click(function(){$("#login-body").show();$("#register-body").hide();$("#forgot-body").hide();});$(".forgot-password-button").click(function(){$("#forgot-body").show();$("#register-body").hide();$("#login-body").hide();});$(function(){$('a[href*=#]').on('click',function(e){e.preventDefault();$('html, body').animate({scrollTop:$($(this).attr('href')).offset().top},500,'linear');});});$(document).ready(function(){$("#mobile-serch").click(function(){$(".search-sec").slideToggle();});});$(document).ready(function(){$("#ft-clumn1").click(function(){$(".planing-link").slideToggle();});});$(document).ready(function(){$("#ft-clumn2").click(function(){$(".vendor-link").slideToggle();});});$(document).ready(function(){$("#ft-clumn3").click(function(){$(".cat-link").slideToggle();});});$('#num-click').click(function(e){e.preventDefault();$('#mytabs a[href="#tab1default"]').tab('show');})
$(function(){$(".fav-btn-icon").click(function(){$("fav-btn-like").toggleClass("press",1000);});});$(".mob-search-icon").click(function(){$(".search-top").slideToggle();});$('.m-menu .nav-tabs > li > a').hover(function(){$(this).tab('show');});$("#showLogin").click(function(){$(".modalback").show();});$('#slick-demo').slick({slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});$('#slick-demo').slickLightbox({src:'src',itemSelector:'.item img'});window.onscroll=function(){myFunction()};var header=document.getElementById("myHeader");var sticky=header.offsetTop;function myFunction(){if(window.pageYOffset>sticky)
{header.classList.add("sticky");}
else
{header.classList.remove("sticky");}}
function changeHeight(){document.getElementById('ed-course').style.height="auto";}