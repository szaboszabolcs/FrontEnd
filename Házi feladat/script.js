
    function countCurrency(osszeg)
    {
        let bankjegyek = [ 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5 ];
        let bankjegyszamlalo = Array(12).fill(0);
        
        for (let i = 0; i < 12; i++) {
            if (osszeg >= bankjegyek[i]) {
                bankjegyszamlalo[i] = Math.floor(osszeg / bankjegyek[i]);
                osszeg = osszeg % bankjegyek[i];
            }
        }
        
        // bankjegyek kiiratása
       document.write("Bankjegyek száma: " + "<br/>");
        for (let i = 0; i < 12; i++) {
            if (bankjegyszamlalo[i] != 0) {
                document.write(bankjegyek[i]+ " Ft " + " : "
                    + bankjegyszamlalo[i] + " db" + "<br/>");
            }
        }
    }
     
    let osszeg = prompt("Adja meg az összeget: (Ft)")
    countCurrency(osszeg);
