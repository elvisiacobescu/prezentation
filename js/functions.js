$(document).ready(function() {

    //carusel
    var $carousel = $('#carousel').carousel({
        indicator: true,
        duration: 0.1
    });
    setInterval(function() {
        $carousel.carousel('next');
    }, 9000);
    //add butons
    addbutonsExp();
    addbutonshob();
    //fixt meniu
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        if (scroll > 970) {
            $("#section2").addClass("fixheader");
        } else {
            $("#section2").removeClass("fixheader")
        }
    });
    $("#meniu li").click(
            function() {
                var itemApasat = $(this).attr('id');
                // console.log(itemApasat);
                switch (itemApasat) {
                    case "macasa":

                        $('html, body').animate({
                            scrollTop: $("#section1").offset().top
                        }, 1000);
                        break;
                    case "mexp":
                        $('html, body').animate({
                            scrollTop: $("#section3").offset().top - 60
                        }, 1000);
                        break;
                    case "mhobiuri":
                        $('html, body').animate({
                            scrollTop: $("#section4").offset().top - 60
                        }, 1000);
                        break;
                    case "mdorinte":
                        $('html, body').animate({
                            scrollTop: $("#section5").offset().top - 60
                        }, 1000);
                        break;
                    case "mcontact":
                        $('html, body').animate({
                            scrollTop: $("#section6").offset().top - 60
                        }, 1000);
                        break;
                    default:

                }
            }
        )
        //

});

function addbutonsExp() {
    var Reqobj = {
        functie: "getexp"
    }
    var jsonreq = JSON.stringify(Reqobj)
    var urlreq = "php/functions.php?obj=" + jsonreq;
    //console.log(urlreq);

    $.ajax({
        url: urlreq,
        success: function(data) {
            var datas = $.parseJSON(data)
                //console.log(datas);
            for (var i = 0; i < datas.length; i++) {
                $("#exp").append('<li><div class="circle"></div><img src="img/css.jpg" alt="no simg" class="img75raund" title="test1"></li>');
                $("#exp li:last img").attr('src', datas[i].photo);
                $("#exp li:last img").attr('title', datas[i].nume);
                if (i === 0) {
                    $("#exp li:last div").addClass("active");
                    $("#descriptionExp").html("<h2>" + datas[0].nume + "</h2><p><span class='space'> </span>" + datas[0].descriere + "</p>");
                }
                switch (datas[i].nivel) {
                    case "40":
                        $("#exp li:last div").addClass("circle40")
                        break;
                    case "50":
                        $("#exp li:last div").addClass("circle50")
                        break;
                    case "60":
                        $("#exp li:last div").addClass("circle60")
                        break;
                    case "70":
                        $("#exp li:last div").addClass("circle70")
                        break;
                    case "80":
                        $("#exp li:last div").addClass("circle80")
                        break;
                    case "90":
                        $("#exp li:last div").addClass("circle90")
                        break;
                    case "100":
                        $("#exp li:last div").addClass("circle100")
                        break;
                    default:

                }
            }
            //$("#hob li:first").find("div").addClass("active");
            //console.log($("#exp li:first"));
            $("#exp li img").tooltip({
                show: {
                    effect: "explode",
                    duration: 200
                }
            }, {
                track: true
            });

            $("#exp li img").hover(function() {
                //action goes here
                //console.log($(this).parent("li").find("div"));
                $(this).parent("li").find("div").addClass("hoverd");
            }, function() {
                //ation gous hire // hover out
                $(this).parent("li").find("div").removeClass("hoverd");
            });
            $("#exp li").click(function() {
                var el = this;
                var num = 0;
                $("#descriptionExp").html("<h2>" + datas[$("#exp li").index(this)].nume + "</h2><p><span class='space'> </span>" + datas[$("#exp li").index(this)].descriere + "</p>");
                $("#exp li .active").removeClass("active");
                $(this).find("div").addClass("active");
                $('html, body').animate({
                    scrollTop: $("#section3").offset().top - 100
                }, 1000);
            })
        },
        error: function() {
            console.log("apelule a iesuat");
        }
    })
}

function addbutonshob() {
    var Reqobj = {
        functie: "gethob"
    }
    var jsonreq = JSON.stringify(Reqobj)
    var urlreq = "php/functions.php?obj=" + jsonreq;
    $.ajax({
        url: urlreq,
        success: function(data) {
            //    console.log(data);
            if (data != "") {
                var datas = $.parseJSON(data)
                    //      console.log(datas);
                for (var i = 0; i < datas.length; i++) {
                    $("#hob").append('<li><img src="img/css.jpg" alt="no simg" class="img75raund" title="test1"></li>');
                    $("#hob li:last img").attr('src', datas[i].photo);
                    $("#hob li:last img").attr('title', datas[i].nume);
                    if (i === 0) {
                        $("#hob li:last img").addClass("active");
                        $("#descriptionhob").html("<h2>" + datas[0].nume + "</h2><p><span class='space'> </span>" + datas[0].descriere + "</p>");
                    }

                }


                $("#hob li img").tooltip({
                    show: {
                        effect: "fadeIn",
                        duration: 200
                    }
                }, {
                    track: true
                });

                $("#hob li").click(function() {
                    $("#hob li .active").removeClass("active");
                    $(this).find("img").addClass("active");
                    $("#descriptionhob").html("<h2>" + datas[$("#hob li").index(this)].nume + "</h2><p><span class='space'> </span>" + datas[$("#hob li").index(this)].descriere + "</p>");
                    $('html, body').animate({
                        scrollTop: $("#section4").offset().top - 60
                    }, 1000);
                });

            } else console.log("json gol");


        },
        error: function() {
            console.log("apelule a iesuat");
        }


    })

}
