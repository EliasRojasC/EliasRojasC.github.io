var currentSche = "";

function getValue() {

    var output = "";

    var mathhlcheckbox = document.getElementById("mathhl");
    var mathslcheckbox = document.getElementById("mathsl");
    var precalccheckbox = document.getElementById("precalc");
    var applicationscheckbox = document.getElementById("applications");
    var algebra2checkbox = document.getElementById("algebra2");
    var socialchoicecheckbox = document.getElementById("socialchoice");
    var geometrycheckbox = document.getElementById("geometry");
    var analysischeckbox = document.getElementById("analysis");
    var fandecheckbox = document.getElementById("fande");
    var mathstudiescheckbox = document.getElementById("mathstudies");
    var chemcheckbox = document.getElementById("chem");
    var biocheckbox = document.getElementById("bio");
    var envcheckbox = document.getElementById("env");
    var physcheckbox = document.getElementById("phys");
    var phys2checkbox = document.getElementById("phys2");
    var glopocheckbox = document.getElementById("glopo");
    var econcheckbox = document.getElementById("econ");
    var HOTAcheckbox = document.getElementById("HOTA");
    var spatencheckbox = document.getElementById("spa10");
    var spatwecheckbox = document.getElementById("spa12");
    var spaninecheckbox = document.getElementById("spa9");
    var spaelecheckbox = document.getElementById("spa11");
    var engelecheckbox = document.getElementById("eng11");
    var engtwecheckbox = document.getElementById("eng12");
    var crewcheckbox = document.getElementById("crew");
    var engtencheckbox = document.getElementById("eng10");
    var litcheckbox = document.getElementById("lit");
    var TOKcheckbox = document.getElementById("TOK");
    var mustcheckbox = document.getElementById("must");
    var IBMcheckbox = document.getElementById("IBM");
    var muscheckbox = document.getElementById("mus");
    var chamcheckbox = document.getElementById("cham");
    var IBTcheckbox = document.getElementById("IBT");
    var HSCcheckbox = document.getElementById("HSC");
    var CERcheckbox = document.getElementById("CER");
    var sculcheckbox = document.getElementById("scul");
    var IBAtwecheckbox = document.getElementById("IBA12");
    var IBAelecheckbox = document.getElementById("IBA11");
    var PRIcheckbox = document.getElementById("PRI");

    if(mathhlcheckbox.checked === true){
        output = output + "HL Math \n Must take both days. This class currently conflicts with IB art 12 check back for corrections \n Monday: 9:35-10:20 \n Friday: 9:35-10:20 \n ----\n"
    } if(mathslcheckbox.checked === true){
        output = output + "SL Math \n Must take both days \n Monday: 11:15-12:00 \n Friday: 11:15-12:00 \n ----\n"
    } if(precalccheckbox.checked === true){
        output = output + "10th Grade PreCalc \n Must take both days \n Monday: 10:25-11:10 \n Friday: 10:25-11:10 \n ----\n"
    } if(applicationscheckbox.checked === true){
        output = output + "Applications \n Must take both days \n Monday: 12:05-12:50 \n Friday: 12:05-12:50 \n ----\n"
    } if(algebra2checkbox.checked === true){
        output = output + "Algebra 2 (Note this class is offered more that once a day.) \n Must take one session per week \n Monday: 9:35-10:20, 10:25-11:10 \n Friday: 10:25-11:10, 11:15-12:00 \n ----\n"
    } if(socialchoicecheckbox.checked === true){
        output = output + "Math of Social Choice \n Must take once a week \n Monday: 11:15-12:00 \n Wednesday: 9:35-10:20 \n ----\n"
    } if(geometrycheckbox.checked === true){
        output = output + "Geometry \n Must take once a week \n Thursday: 9:35-10:20, 10:25-11:10 \n ----\n"
    } if(analysischeckbox.checked === true){
        output = output + "Analysis \n Must take both days \n Monday: 9:35-10:20 \n Friday: 9:35-10:20 \n ----\n"
    } if(fandecheckbox.checked === true){
        output = output + "Functions and Equations \n Must take both days \n Monday: 10:25-11:10 \n Friday: 10:25-11:10 \n ----\n"
    } if(mathstudiescheckbox.checked === true){
        output = output + "Math Studies \n Must take both days \n Monday: 11:15-12:00 \n Friday: 12:05-12:50 \n ----\n"
    } if(chemcheckbox.checked === true){
        output = output + "Chemistry (Note this class is offered more that once a day.) \n Must take both days \n Monday: 11:15-12:00, 12:05-12:50 \n Friday: 9:35-10:20, 10:25-11:10 \n ----\n"
    } if(biocheckbox.checked === true){
        output = output + "Biology (Note this class is offered more that once a day.) \n Must take once a week \n Friday: 9:35-10:20, 10:25-11:10 \n ----\n"
    } if(envcheckbox.checked === true){
        output = output + "Enviro (Note this class is offered more that once a day.) \n Must take both days \n Monday: 9:35-10:20, 10:25-11:10 \n Wednesday: 9:35-10:20, 10:25-11:10 \n ----\n"
    } if(physcheckbox.checked === true){
        output = output + "Physics 1 (Note this class is offered more that once a day.) \n Must take both days \n Monday: 11:15-12:00, 12:05-12:50 \n Friday: 9:35-10:20, 10:25-11:10 \n ----\n"
    } if(phys2checkbox.checked === true){
        output = output + "Physics 2 \n Must take both days \n Wednesday: 11:15-12:00 \n Friday: 12:05-12:50 \n ----\n"
    } if(glopocheckbox.checked === true){
        output = output + "Global Politics (Note this class is offered more that once a day.)\n Must take once a week \n Monday: 9:35-10:20, 11:15-12:00, 12:05-12:50 \n Wednesday: 9:35-10:20, 11:15-12:00 \n ----\n"
    } if(econcheckbox.checked === true){
        output = output + "Economics (Note this class is offered more that once a day.)\n Must take once a week \n Tuesday: 9:35-10:20, 10:25-11:10 \n ----\n"
    } if(HOTAcheckbox.checked === true){
        output = output + "HOTA (Note this class is offered more that once a day.) \n Must take once a week \n Monday: 9:35-10:20, 10:25-11:10 \n Wednesday: 10:25-11:10 \n ----\n"
    } if(spatencheckbox.checked === true){
        output = output + "Spanish 10 (Note this class is offered more that once a day) \n You only have to go to either Wed or Fri. Must take twice a week \n Monday: 10:25-11:10, 11:15-12:00 \n Wednesday: 11:15-12:00 \n Friday: 11:15-12:00 \n ----\n"
    } if(spatwecheckbox.checked === true){
        output = output + "Spanish 12 (Note this class is offered more that once a day.) \n You only have to go to either Wed or Fri. Must take twice a week. This class currently conflicts with IB Music check back for updates) \n Monday: 12:05-12:50 \n Wednesday: 9:35-10:20 \n Friday: 10:25-11:10 \n ----\n"
    } if(spaninecheckbox.checked === true){
        output = output + "Spanish 9 (Note this class is offered more that once a day) \n Must take once a week \n Monday: 1:00-1:45, 2:00-2:45 \n ----\n"
    } if(spaelecheckbox.checked === true){
        output = output + "Spanish 11 (Note this class is offered more that once a day) \n Must take once a week \n Wednesday: 9:35-10:20, 10:25-11:10 \n ----\n"
    } if(engelecheckbox.checked === true){
        output = output + "English 11 (Note this class is offered more that once a day) \n Must take once a week \n Wednesday: 10:25-11:10, 11:15-12:00, 12:05-12:50 \n ----\n"
    } if(engtwecheckbox.checked === true){
        output = output + "English 12 (Note this class is offered more that once a day. \n Must take twice a week. You only have to go to either Mon or Wed \n Monday: 9:35-10:20 \n Wednesday: 9:35-10:20, 10:25-11:10 \n Friday: 9:35-10:20, 10:25-11:10, 11:15-12:00 \n ----\n"
    } if(crewcheckbox.checked === true){
        output = output + "Creative Writing (Note this class is offered more that once a day) \n Must take once a week \n Monday: 1:00-1:45, 2:00-2:45 \n ----\n"
    } if(engtencheckbox.checked === true){
        output = output + "English 10 (Note this class is offered more that once a day) \n Must take once a week \n Wednesday: 11:15-12:00, 12:05-12:50 \n ----\n"
    } if(litcheckbox.checked === true){
        output = output + "Literature (Note this class is offered more that once a day) \n Must take once a week \n Monday: 1:00-1:45, 2:00-2:45 \n ----\n"
    } if(TOKcheckbox.checked === true){
        output = output + "TOK (Note this class is offered more that once a day \n Must take twice a week. You only have to go to either Wed or Fri) \n Monday: 10:25-11:10, 11:15-12:00 \n Wednesday: 10:25-11:10 \n Friday: 10:25-11:10 \n ----\n"
    } if(mustcheckbox.checked === true){
        output = output + "Music Theory (Note this class is offered more that once a day) \n Must take once a week \n Wednesday: 9:35-10:20, 10:25-11:10 \n ----\n"
    } if(IBMcheckbox.checked === true){
        output = output + "IB Music (Note this class is offered more that once a day) \n Must take once a week. This class currently conflicts with IB Spanish 12, check back for corrections) \n Monday: 12:05-12:50 \n Wednesday: 11:15-12:00 \n ----\n"
    } if(muscheckbox.checked === true){
        output = output + "Musicianship \n Must take once a week \n Friday: 11:15-12:00 \n ----\n"
    } if(chamcheckbox.checked === true){
        output = output + "Chamber Choir \n Must take once a week (This might change) \n Wednesday: 10:25-11:10 \n Friday: 11:15-12:00 \n ----\n"
    } if(IBTcheckbox.checked === true){
        output = output + "IB Theater \n Must take once a week \n Wednesday: 11:15-12:00 \n ----\n"
    } if(HSCcheckbox.checked === true){
        output = output + "Afternoon HS Choir \n Must take once a week \n Friday: 10:25-11:10 \n ----\n"
    } if(CERcheckbox.checked === true){
        output = output + "Ceramics (Note this class is offered more that once a day) \n Must take twice a week. You only have to go to either Wed or Fri \n Monday: 11:15-12:00, 12:05-12:50 \n Wednesday: 10:25-11:10 \n Friday: 10:25-11:10 \n ----\n"
    } if(sculcheckbox.checked === true){
        output = output + "Sculpture \n Must take twice a week \n Wednesday: 11:15-12:00 \n Friday: 9:35-10:20 \n ----\n"
    } if(IBAelecheckbox.checked === true){
        output = output + "IB Art 11 \n Must take once a week \n Wednesday: 12:05-12:50 \n ----\n"
    } if(IBAtwecheckbox.checked === true){
        output = output + "IB Art 12 \n Must take twice a week. This class currently conflicts with IB Hl Math, check back for corrections \n Wednesday: 11:15-12:00 \n Friday: 9:35-10:20 \n ----\n"
    } if(PRIcheckbox.checked === true){
        output = output + "Printmaking \n Must take once a week \n Thursday: 10:25-11:10 \n ----\n"
    }

    currentSche = output;

    document.getElementById("modalbodytext").innerText = output;
}

function onPrint(){
    var doc = new jsPDF();
    doc.text(10, 10, currentSche);
    doc.save('yourSchedule.pdf');
}
