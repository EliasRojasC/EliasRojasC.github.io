var currentSche = "";

var jsonDatabase = {
    "classes": {
        "mathhl":{
            "days":{
                "monday":{
                    "times":["9:35-10:20"]
                }
            },
            "name":"HL Math"
        },
        "mathsl":{
            "days":{
                "monday":{
                    "times":["11:15-12:00"]
                }
            },
            "name":"SL Math"
        },
        "precalc":{
            "days":{
                "monday":{
                    "times":["10:25-11:10"]
                }
            },
            "name":"10th Grade Precalc"
        },
        "applications":{
            "days":{
                "monday":{
                    "times":["12:05-12:50"]
                }
            },
            "name":"Applications"
        },
        "algebratwo":{
            "days":{
                "monday":{
                    "times":["9:35-10:20","10:25-11:10"]
                },
                "friday":{
                    "times":["10:25-11:10","11:15-12:00"]
                }
            },
            "name":"Algebra II"
        },
        "mathsoci":{
            "days":{
                "monday":{
                    "times":["11:15-12:00"]
                },
                "wednesday":{
                    "times":["9:35-10:20"]
                }
            },
            "name":"Math of Social Choice"
        },
        "geometry":{
            "days":{
                "thursday":{
                    "times":["9:35-10:20","10:25-11:10"]
                }
            },
            "name":"Geometry"
        },
        "analysis":{
            "days":{
                "monday":{
                    "times":["9:35-10:20"]
                }
            },
            "name":"Analysis"
        },
        "fande":{
            "days":{
                "monday":{
                    "times":["10:25-11:10"]
                }
            },
            "name":"Functions and Equations"
        },
        "mstudies":{
            "days":{
                "monday":{
                    "times":["11:15-12:00"]
                }
            },
            "name":"Math Studies"
        },
        "chem":{
            "days":{
                "monday":{
                    "times":["11:15-12:00","12:05-12:50"]
                },
                "wednesday":{
                    "times":["9:35-10:20"]
                }
            },
            "name":"Chemistry"
        },
        "bio":{
            "days":{
                "thursday":{
                    "times":["9:35-10:20","10:25-11:10"]
                }
            },
            "name":"Biology"
        },
        "env":{
            "days":{
                "monday":{
                    "times":["10:25-11:10"]
                },
                "wednesday":{
                    "times":["9:35-10:20","10:25-11:10"]
                }
            },
            "name":"Enviro"
        },
        "physone":{
            "days":{
                "monday":{
                    "times":["11:15-12:00","12:05-12:50"]
                },
                "friday":{
                    "times":["10:25-11:10"]
                }
            },
            "name":"Physics 1"
        },
        "phystwo":{
            "days":{
                "wednesday":{
                    "times":["12:05-12:50"]
                }
            },
            "name":"Physics 2"
        },
        "glopo":{
            "days":{
                "monday":{
                    "times":["9:35-10:20","11:15-12:00","12:05-12:50"]
                },
                "wednesday":{
                    "times":["9:35-10:20","11:15-12:00"]
                }
            },
            "name":"Global Politics"
        },
        "econ":{
            "days":{
                "tuesday":{
                    "times":["9:35-10:20","10:25-11:10"]
                }
            },
            "name":"Economics"
        },
        "hota":{
            "days":{
                "monday":{
                    "times":["9:35-10:20","10:25-11:10"]
                },
                "wednesday":{
                    "times":["10:25-11:10"]
                }
            },
            "name":"History of the Americas"
        },
        "spaten":{
            "days":{
                "monday":{
                    "times":["10:25-11:10","11:15-12:00"]
                }
            },
            "name":"Spanish 10"
        },
        "spatwe":{
            "days":{
                "monday":{
                    "times":["12:05-12:50"]
                }
            },
            "name":"IB Spanish 12"
        },
        "spanin":{
            "days":{
                "monday":{
                    "times":["13:00-13:45","14:00-14:45"]
                }
            },
            "name":"Spanish 9"
        },
        "spaele":{
            "days":{
                "wednesday":{
                    "times":["9:35-10:20","10:25-11:10"]
                }
            },
            "name":"IB Spanish 11"
        },
        "engele":{
            "days":{
                "wednesday":{
                    "times":["10:25-11:10","11:15-12:00","12:05-12:50"]
                }
            },
            "name":"English 11"
        },
        "eng12":{
            "days":{
                "monday":{
                    "times":["9:35-10:20"]
                },
                "wednesday":{
                    "times":["9:35-10:20","10:25-11:10"]
                }
            },
            "name":"English 12"
        },
        "crew":{
            "days":{
                "monday":{
                    "times":["12:05-12:50"]
                },
                "wednesday":{
                    "times":["12:05-12:50"]
                },
                "friday":{
                    "times":["12:05-12:50"]
                }
            },
            "name":"Creative Writing"
        },
        "eng10":{
            "days":{
                "wednesday":{
                    "times":["11:15-12:00","12:05-12:50"]
                }
            },
            "name":"English 10"
        },
        "lit":{
            "days":{
                "monday":{
                    "times":["13:00-13:45","14:00-14:45"]
                }
            },
            "name":"Literature (English 9)"
        },
        "tok":{
            "days":{
                "monday":{
                    "times":["10:25-11:10","11:15-12:00"]
                }
            },
            "name":"TOK"
        },
        "must":{
            "days":{
                "wednesday":{
                    "times":["9:35-10:20","10:25-11:10"]
                }
            },
            "name":"Music Theory"
        },
        "ibm":{
            "days":{
                "monday":{
                    "times":["9:35-10:20"]
                },
                "wednesday":{
                    "times":["11:15-12:00"]
                }
            },
            "name":"IB Music"
        },
        "musc":{
            "days":{
                "friday":{
                    "times":["11:15-12:00"]
                }
            },
            "name":"Musicianship"
        },
        "chamc":{
            "days":{
                "wednesday":{
                    "times":["10:25-11:10"]
                },
                "friday":{
                    "times":["11:15-12:00"]
                }
            },
            "name":"Chamber Choir"
        },
        "ibt":{
            "days":{
                "wednesday":{
                    "times":["11:15-12:00"]
                }
            },
            "name":"IB Theater"
        },
        "hsc":{
            "days":{
                "friday":{
                    "times":["10:25-11:10"]
                }
            },
            "name":"Afternoon HS Choir"
        },
        "cer":{
            "days":{
                "Never":{
                    "times":["This class isn't meeting. Please talk to your teacher"]
                }
            },
            "name":"Ceramics"
        },
        "scul":{
            "days":{
                "wednesday":{
                    "times":["11:15-12:00"]
                }
            },
            "name":"Sculpture"
        },
        "atwe":{
            "days":{
                "wednesday":{
                    "times":["11:15-12:00"]
                }
            },
            "name":"IB Art 12"
        },
        "aele":{
            "days":{
                "wednesday":{
                    "times":["12:05-12:50"]
                }
            },
            "name":"IB Art 11"
        },
        "print":{
            "days":{
                "tuesday":{
                    "times":["9:35-10:20"]
                }
            },
            "name":"Printmaking"
        }
    }
}

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
        output = output + prepareOutput("mathhl");
    } if(mathslcheckbox.checked === true){
        output = output + prepareOutput("mathsl");
    } if(precalccheckbox.checked === true){
        output = output + prepareOutput("precalc");
    } if(applicationscheckbox.checked === true){
        output = output + prepareOutput("applications");
    } if(algebra2checkbox.checked === true){
        output = output + prepareOutput("algebratwo");
    } if(socialchoicecheckbox.checked === true){
        output = output + prepareOutput("mathsoci");
    } if(geometrycheckbox.checked === true){
        output = output + prepareOutput("geometry");
    } if(analysischeckbox.checked === true){
        output = output + prepareOutput("analysis");
    } if(fandecheckbox.checked === true){
        output = output + prepareOutput("fande");
    } if(mathstudiescheckbox.checked === true){
        output = output + prepareOutput("mstudies");
    } if(chemcheckbox.checked === true){
        output = output + prepareOutput("chem");
    } if(biocheckbox.checked === true){
        output = output + prepareOutput("bio");
    } if(envcheckbox.checked === true){
        output = output + prepareOutput("env");
    } if(physcheckbox.checked === true){
        output = output + prepareOutput("physone");
    } if(phys2checkbox.checked === true){
        output = output + prepareOutput("phystwo");
    } if(glopocheckbox.checked === true){
        output = output + prepareOutput("glopo");
    } if(econcheckbox.checked === true){
        output = output + prepareOutput("econ");
    } if(HOTAcheckbox.checked === true){
        output = output + prepareOutput("hota");
    } if(spatencheckbox.checked === true){
        output = output + prepareOutput("spaten");
    } if(spatwecheckbox.checked === true){
        output = output + prepareOutput("spatwe");
    } if(spaninecheckbox.checked === true){
        output = output + prepareOutput("spanin");
    } if(spaelecheckbox.checked === true){
        output = output + prepareOutput("spaele");
    } if(engelecheckbox.checked === true){
        output = output + prepareOutput("engele");
    } if(engtwecheckbox.checked === true){
        output = output + prepareOutput("eng12");
    } if(crewcheckbox.checked === true){
        output = output + prepareOutput("crew");
    } if(engtencheckbox.checked === true){
        output = output + prepareOutput("eng10");
    } if(litcheckbox.checked === true){
        output = output + prepareOutput("lit");
    } if(TOKcheckbox.checked === true){
        output = output + prepareOutput("tok");
    } if(mustcheckbox.checked === true){
        output = output + prepareOutput("must");
    } if(IBMcheckbox.checked === true){
        output = output + prepareOutput("ibm");
    } if(muscheckbox.checked === true){
        output = output + prepareOutput("musc");
    } if(chamcheckbox.checked === true){
        output = output + prepareOutput("chamc");
    } if(IBTcheckbox.checked === true){
        output = output + prepareOutput("ibt");
    } if(HSCcheckbox.checked === true){
        output = output + prepareOutput("hsc");
    } if(CERcheckbox.checked === true){
        output = output + prepareOutput("cer")
    } if(sculcheckbox.checked === true){
        output = output + prepareOutput("scul");
    } if(IBAelecheckbox.checked === true){
        output = output + prepareOutput("atwe");
    } if(IBAtwecheckbox.checked === true){
        output = output + prepareOutput("aele");
    } if(PRIcheckbox.checked === true){
        output = output + prepareOutput("print");
    }

    currentSche = output;

    document.getElementById("modalbodytext").innerText = output;
}

function prepareOutput(course){
    var stringToReturn = "";
    var current = jsonDatabase.classes[course];
    stringToReturn = stringToReturn + current["name"] + "\n";
    var days = Object.keys(current["days"]);
    for (var item of days){
        var currentDay = current["days"][item];
        stringToReturn = stringToReturn + capitalize(item) + ": " + (JSON.stringify(current["days"][item]["times"]).replace(/[\[\]']+/g,'').replace(/['"]+/g, '')) + "\n";
    }
    stringToReturn = stringToReturn + "---\n";
    return(stringToReturn);
}

console.log(prepareOutpute("print"));

function onPrint(){
    var doc = new jsPDF();
    doc.text(10, 10, currentSche);
    doc.save('yourSchedule.pdf');
}

 function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}
