var all = new Array("#bandog","#pitbull","#burbul","#samoed","#malamut","#yakut","#greenland","#inuit","#haski","#barbet",
    "#chau","#bolonka","#mops","#pikines","#toy","#york","#shiba","#gold","#fox","#austrian","#basset","#bigl",
    "#runner","#nenec");

var novice = new Array("#pitbull","#barbet","#bolonka","#mops","#pikines","#toy","#york","#gold","#fox","#basset","#bigl","#nenec");

var warm = new Array("#bandog","#pitbull","#burbul","#barbet","#chau","#bolonka","#mops","#toy","#york",
"#fox","#basset","#austrian","#bigl","#runner","#shiba","#haski","#inuit","#gold");

var cold = new Array("#samoed","#malamut","#yakut", "#greenland" ,"#nenec", "#haski","#inuit","#gold","#fox","#austrian","#bigl","#runner" , "#pikines" , "#shiba");

var flat = new Array("#chau","#bolonka","#mops","#pikines","#toy","#york","#shiba","#gold", "#basset", "#bigl");

var house = all;

var lot_of_time = new Array("#samoed","#malamut","#yakut","#greenland","#inuit","#haski",
    "#mops","#pikines","#york","#shiba","#fox","#bigl",
    "#runner","#nenec");

var little_of_time = new Array("#bandog","#pitbull","#burbul","#barbet",
    "#chau","#bolonka","#toy","#gold","#austrian","#basset");

var large = new Array("#bandog","#burbul","#malamut","#greenland","#inuit","#haski","#barbet","#gold","#fox","#runner");

var medium = new Array("#pitbull","#samoed","#yakut","#chau","#shiba","#austrian","#basset","#bigl","#nenec");

var small = new Array("#bolonka","#mops","#pikines","#toy","#york");

var activity_yes = new Array("#bandog","#pitbull","#burbul","#samoed","#malamut","#yakut","#greenland","#inuit","#haski",
    "#austrian","#runner","#nenec");

var activity_no = new Array("#chau","#bolonka","#mops","#pikines","#toy","#york", "#basset","#shiba","#gold","#fox","#bigl","#barbet");

var fight = new Array("#bandog","#pitbull","#burbul");

var ride = new Array("#samoed","#malamut","#yakut","#greenland","#inuit","#haski");

var decor = new Array("#chau","#bolonka","#mops","#pikines","#toy","#york");

var hunt = new Array("#barbet","#shiba","#gold","#fox","#austrian","#basset","#bigl",
    "#runner","#nenec");

var names =[["#bandog","#pitbull","#burbul","#samoed","#malamut","#yakut","#greenland","#inuit","#haski","#barbet",
    "#chau","#bolonka","#mops","#pikines","#toy","#york","#shiba","#gold","#fox","#austrian","#basset","#bigl",
    "#runner","#nenec"],["Бандог","Питбуль-<br>терьер","Бурбуль","Самоед","Маламут","Якутская лайка","Гренландская","Северная<br>инуитцкая","Хаски","Барбет",
    "Чау-чау","Болонка","Мопс","Пикинес","Той терьер","Йорк","Шиба<br>ину","Ретривер","Фоксхаунд","Австр. гончая","Бассет-хаунд","Бигль",
    "Веймаранер","Ненецкая<br>лайка"]]

var all_ln = all.length;
var novice_ln = novice.length;
var warm_ln = warm.length;
var cold_ln = cold.length;
var flat_ln = flat.length;
var house_ln = house.length;
var lot_of_time_ln = lot_of_time.length;
var little_of_time_ln = little_of_time.length;
var large_ln = large.length;
var medium_ln = medium.length;
var small_ln = small.length;
var activity_yes_ln = activity_yes.length;
var activity_no_ln = activity_no.length;
var fight_ln = fight.length;
var ride_ln = ride.length;
var decor_ln = decor.length;
var hunt_ln = hunt.length;

var st = false;



function getValue(radioObject) {
                
                var radios = document.getElementsByTagName('FORM1');
                var value = null;

                for (var i = 0; i < radioObject.length; i++) {
                    if (radioObject[i].checked) {
                        value = radioObject[i].value;
                        break;
                    }
                }
                if (value == null)
                {
                    value = -1;
                }
                return value;
            }

            function showResults()
            {
                
                var length = all.length;

                for(var i = 0; i<length; i++){
                    $(all[i]).stop().animate({"opacity": "0.4"}, "medium"); 

                }

                var  resp0 = new Array();
                resp0 [24] = new Array();
                var resp1 = new Array;
                resp1 [24] = new Array();
                var resp2 = new Array();
                resp2 [24] = new Array();
                var resp3,resp4,resp5,resp6 = new Array();

                
                var out = all;
                var outln = out.length;

                
                
                ch1 = getValue(document.FORM1.q1);
                ch2 = getValue(document.FORM1.q2);
                ch3 = getValue(document.FORM1.q3);
                ch4 = getValue(document.FORM1.q4);
                ch5 = getValue(document.FORM1.q5);
                ch6 = getValue(document.FORM1.q6);

                var check = ch1 + ch2 + ch3 + ch3 + ch4 + ch5 + ch6;


                if (document.getElementById("q0").checked){
                        out = novice; 
                    }


                
                var tmp = new Array();
                //tmp [24] = new Array();
               
                //Теплый климат
                if (ch1 == 1){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < warm_ln; j++ ){
                                if(out[i] == warm[j]){
                                       tmp.push(out[i]);
                                    
                                }
                            }
                        }
                    out [24] = new Array();
                    out = tmp; 
                }

                //Холодный климат
                if (ch1 == 2){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < cold_ln; j++ ){
                                if(out[i] == cold[j]){
                                    tmp.push(out[i]);
                                }
                            }
                        }
                    out [24] = new Array();
                    out = tmp;           
                }

                var tmp1 = new Array(); 
                //tmp1 [24] = new Array();

                //Для квартиры
                if (ch2 == 1){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < flat_ln; j++ ){
                                if(out[i] == flat[j]){
                                       tmp1.push(out[i]);
                                }
                            }
                        } 
                    out [24] = new Array();
                    out = tmp1;
                }

                //Для частного дома
                if (ch2 == 2){
                    
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < house_ln; j++ ){
                                if(out[i] == house[j]){
                                    tmp1.push(out[i]);
                                }
                            }
                        }
                    out [24] = new Array();
                    out = tmp1;
                }


                var tmp2 = new Array();
                //tmp2 [24] = new Array();

                //Необходимость в повышенном внимании
                if (ch3 == 1){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < lot_of_time_ln; j++ ){
                                if(out[i] == lot_of_time[j]){
                                    tmp2.push(out[i]);
                                }
                            }
                        }

                    out [24] = new Array();
                    out = tmp2;            
                }

                //Повышенное внимание не обязательно
                if (ch3 == 2){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < little_of_time_ln; j++ ){
                                if(out[i] == little_of_time[j]){
                                       tmp2.push(out[i]);
                                }
                            }
                        }
                    out [24] = new Array();
                    out = tmp2;
                }


                var tmp3 = new Array();
                //tmp3 [24] = new Array();

                //Большие
                if (ch4 == 1){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < large_ln; j++ ){
                                if(out[i] == large[j]){
                                    tmp3.push(out[i]);
                                }
                            }
                        }

                    out [24] = new Array();
                    out = tmp3;            
                }

                //Средние
                if (ch4 == 2){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < medium_ln; j++ ){
                                if(out[i] == medium[j]){
                                       tmp3.push(out[i]);
                                }
                            }
                        }
                    out [24] = new Array();
                    out = tmp3;
                }

                //Маленькие
                if (ch4 == 3){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < small_ln; j++ ){
                                if(out[i] == small[j]){
                                       tmp3.push(out[i]);
                                }
                            }
                        }
                    out [24] = new Array();
                    out = tmp3;
                }


                var tmp4 = new Array();
                //tmp4 [24] = new Array();

                //Необходимы тренировки/дрессировки
                if (ch5 == 1){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < activity_yes_ln; j++ ){
                                if(out[i] == activity_yes[j]){
                                    tmp4.push(out[i]);
                                }
                            }
                        }

                    out [24] = new Array();
                    out = tmp4;            
                }


                //Необязательны тренировки/дрессировки
                if (ch5 == 2){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < activity_no_ln; j++ ){
                                if(out[i] == activity_no[j]){
                                    tmp4.push(out[i]);
                                }
                            }
                        }

                    out [24] = new Array();
                    out = tmp4;            
                }


                var tmp5 = new Array();
                //tmp5 [24] = new Array();

                //Бойцовские
                if (ch6 == 1){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < fight_ln; j++ ){
                                if(out[i] == fight[j]){
                                    tmp5.push(out[i]);
                                }
                            }
                        }

                    out [24] = new Array();
                    out = tmp5;            
                }


                //Декоративные
                if (ch6 == 2){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < decor_ln; j++ ){
                                if(out[i] == decor[j]){
                                    tmp5.push(out[i]);
                                }
                            }
                        }

                    out [24] = new Array();
                    out = tmp5;            
                }

                //Ездовые
                if (ch6 == 3){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < ride_ln; j++ ){
                                if(out[i] == ride[j]){
                                    tmp5.push(out[i]);
                                }
                            }
                        }

                    out [24] = new Array();
                    out = tmp5;            
                }

                //Охотничьи
                if (ch6 == 4){
                        for(var i = 0; i < out.length; i++){
                            for(var j = 0; j < hunt_ln; j++ ){
                                if(out[i] == hunt[j]){
                                    tmp5.push(out[i]);
                                }
                            }
                        }

                    out [24] = new Array();
                    out = tmp5;            
                }

                if(document.getElementById("q0").checked || check != -7){
                    var str;
                    var content;
                    var name;
                    //alert(out + " " + out.length);
                    var out_ln = out.length;
                    if(out_ln != 0){
                        for(var i = 0; i < out.length; i++){
                            $(out[i]).stop().animate({"opacity": "1"}, "medium");
                            for(var j = 0; j < all.length; j++){
                                if(out[i] == names[0][j]){
                                    name = names[1][j];
                                    str = out[i];
                                    str = out[i].substr(1);
                                    content += "<div class=\"thumbnail\"> <a href=\"../info/" + str + ".html\" class=\"portfolio-box\"> <img src=\"../all/img/" + str + ".jpg\" class=\"img-responsive\" alt=\"\"> <div class=\"portfolio-box-caption\"> <div class=\"portfolio-box-caption-content\">" + name + "</div></div></a></div>"
                                }
                            }
                       
                        }

                        content = content.substr(9);
                    }

                    if(str != null){
                     
                        if (st == false){
                            
                            
                            $("#res").slick('unslick'); 
                            $("#res").html(content); 
                            $("#res").slick({
                                infinite: true,
                                slidesToShow: 3,
                                slidesToScroll: 1,

                            });
                            $("#res").slideToggle(500);
                            $("#res").css("display", "block");  
                            $('#res').get(0).slick.setPosition();
                            st = true;
                        }
                        else{
                            
                            $("#res").slick('unslick');
                            $("#res").html(content); 
                            $("#res").slick({
                                infinite: true,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                initialSlide: 1
                            });
                        }
                        
                    } 
                    else{
                         content = "";
                    $("#res").slideToggle(500);
                    $("#res").slick('unslick');
                    $("#res").html(content);
                    st = false;

                    }                 
                }
                else{

                    content = "";
                    $("#res").slideToggle(500);
                    $("#res").slick('unslick');
                    $("#res").html(content); 
                    st = false;
                }      
                    
            }

function empty( mixed_var ) {   // Determine whether a variable is empty
    // 
    // +   original by: Philippe Baumann

    return ( mixed_var === "" || mixed_var === 0   || mixed_var === "0" || mixed_var === null  || 
        mixed_var === false  ||  ( is_array(mixed_var) && mixed_var.length === 0 ) );
}

function is_array( mixed_var ) {    // Finds whether a variable is an array
    // 
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Legaev Andrey
    // +   bugfixed by: Cord

    return ( mixed_var instanceof Array );
}
