function changeIBAN() // no ';' here
{
    var elem = document.getElementById("myIBAN");
    if (elem.value=="IBAN") elem.value = "PT50 0035 0592 00012475 830 33";
    else elem.value = "IBAN";
}

function changeMBW() // no ';' here
{
    var elem = document.getElementById("myMBW");
    if (elem.value=="MBWay") elem.value = "961610333";
    else elem.value = "MBWay";
}