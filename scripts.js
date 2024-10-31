function obliczenia(){
    var x=parseFloat(document.dane.x.value);
    var stop=parseFloat(document.dane.stopx.value);
    if(stop<0){
        document.dane.wartx.value = "nieprawidłowa wartość stopnia";
    }
    else{
        if(stop==0){
            var liczby=prompt("podaj dane dla wyrazu wolnego");
            document.dane.wartx.value=liczba;
        }
        if(stop>0) {
            var dan=prompt("podaj dane dla wyrazu wolnego");
            var liczba=parseFloat(dan);
            for (var i=1;i<=stop;i++) {
                var dae=prompt("podaj wartość a:" +i);
                dan=parseFloat(dae);
                liczba=liczba+dan*potega(x,i);
            }
            document.dane.wartx.value=liczba;
        }
    }
}

function potega(licz, stop){
    var wynik=1;
    for (var i=1;i<=stop;i++){
        wynik=wynik*licz;
    }
    return wynik;
}