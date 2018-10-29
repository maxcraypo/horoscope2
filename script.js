
var signs=["aquaries", "pisces", "aries", "taurus", "gemini" ,"cancer", "leo", "virgo", "libra", "scorpio", " sagitarius", " capricorn" ];
var predictions=["you will take bread","this year will not be your year, try another", "you will have a romantic encounter with mr albinson", "all of your dreams may or may not come true, I cant say for sure",
    " you will trade bodies with mr miller" , " this is your year, start the revolution", " you will enjoy a papa johns pizza, papa bless ya  ", " keep working hard its gonna pay off", " you will get the bread, keep grinding", "its all down hill from here", " of course you put your own birhtday" , " good morning friends, lets obtain wheat" ]
var images= ["images/aquarius.png" , "images/pices.jpg" , "images/aries.jpg" , " image/taurus.jpg", "images/gemini.png" , "images/cancer.png" , "images/leo.png" ,"images/virgio.png", "images/libra.png" , "images/scorpio.png" ,"images/sagittarius.jpg", "images/capricorn.png"  ];


function displaySign(){
    var month=document.getElementById("month").value;
    var day= document.getElementById("day").value;
    var name= document.getElementById("name").value;
    var sign=determineSign(day,month);
    if(noName(name)==false){
        return false;
    }
    if(wrongMonth(day,month)){
        return false;
    }
    signs[sign];
    predictions[sign];
    images[sign];
    document.getElementById("username").innerHTML="hello" +  " " + name;
    document.getElementById("sign").innerHTML=" your sign is" + " " + signs[sign];
    document.getElementById("message").innerHTML=" dear " + name + "," + predictions[sign];
    document.getElementById("picture").src=images[sign];
    if(todayBday(day,month )){
        document.getElementById("bday").innerHTML="happy birthday bud, this year is gonna be extra spicy for you!!";
    }
}

function determineSign(day,month){
    if((month==1 && day >=20) || (month==2 && day<19)){
        return 0;
    }
    if((month==2 && day >=19) || (month==3 && day < 20)){
        return 1 ;
    }

    if(month==3 && day >= 21 || (month==4 && day <20)){
        return 2
    }
    if((month==4 && day >= 20) || (month == 5 && day <21)  ){
        return 3;
    }
    if((month ==5 && day >= 21) || (month ==6 && day < 21)){
        return  4;
    }
    if((month==6 && day >= 21) || (month==7 && day < 23)){
        return 5;
    }
    if((month==7 && day >= 23) || (month==8 && day < 23)){
        return 6;
    }
    if((month==8 && day >= 23) || (month==9 && day < 23)){
        return 7;
    }
    if((month==9 && day >= 23) || (month==10 && day < 23)){
        return  8;
    }
    if((month==10 && day >= 23) || (month==11 && day < 22)){
        return 9;
    }
    if((month==11 && day >= 22) || (month==12 && day < 22)){
        return 10;
    }
    if((month==12 && day> 22) || (month==1 && day <20)){
        return 11;
    }
}
function noName(name){
    if(name==""){
        alert("enter a real name or date");
        return false;
    }
}

function wrongMonth(day,month){
    if(month==9 && day==31 || month==4 && day==31 || month==6 && day==31 || month==11 && day==31 || month==2 && day>=29){
        alert("enter a real name or date");
    }
    return false;
}

function todayBday(day,month) {
    var today = new Date();
    var days= today.getDate();
    var months=today.getMonth()+1;
    if(days==day && months==month){
        return true;
    }
    return false;
}