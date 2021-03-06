const kpilist = [
  {
    "id": "N00002",
    "title": "Personalkostnader som andel av verksamhetens kostnader, andel (%)"
  },
  {
    "id": "N00003",
    "title": "Personalkostnader, kr/inv"
  },
  {
    "id": "N00005",
    "title": "Utjämningssystemet enl resultaträkning, kr/inv"
  },
  {
    "id": "N00006",
    "title": "Momsavgift, kr/inv (-2002)"
  },
  {
    "id": "N00007",
    "title": "Invånarrelaterat bidrag, kr/inv (-2004)"
  },
  {
    "id": "N00008",
    "title": "Åldersrelaterat bidrag, kr/inv (-2004)"
  },
  {
    "id": "N00009",
    "title": "Intäkter kommunen totalt, kr/inv"
  },
  {
    "id": "N00011",
    "title": "Inkomstutjämning, bidrag/avgift, kr/inv. 1 nov fg år"
  },
  {
    "id": "N00012",
    "title": "Kostnadsutjämning, bidrag/avgift, kr/inv"
  },
  {
    "id": "N00013",
    "title": "Generellt statsbidrag, kr/inv (-2004)"
  },
  {
    "id": "N00014",
    "title": "Regleringsbidrag/avgift, kr/inv (2005-)"
  },
  {
    "id": "N00016",
    "title": "Utjämningssystemet enl SCB, kr/inv"
  },
  {
    "id": "N00018",
    "title": "Införandebidrag, kr/inv (2005-)"
  },
  {
    "id": "N00019",
    "title": "Strukturbidrag, kr/inv (2005-)"
  },
  {
    "id": "N00020",
    "title": "Nivåjustering, kr/inv (-2004)"
  },
  {
    "id": "N00021",
    "title": "Intäkter egentlig verksamhet, kr/inv"
  },
  {
    "id": "N00022",
    "title": "Kostnadsutj.netto: förskola och skolbarnsomsorg, kr/inv 1 nov fg år"
  },
  {
    "id": "N00023",
    "title": "Kostnadsutj.netto: Grundskola, kr/inv. 1 nov fg år"
  },
  {
    "id": "N00024",
    "title": "Kostnadsutj.netto: Äldreomsorg, kr/inv 1 nov fg år"
  },
  {
    "id": "N00025",
    "title": "Kostnadsutj.netto: Individ- och familjeomsorg, kr/inv 1 nov fg år"
  },
  {
    "id": "N00026",
    "title": "Kostnadsutj.netto: Gymnasieskolan, kr/inv 1 nov fg år"
  },
  {
    "id": "N00027",
    "title": "Kostnadsutj.netto: Löner, kr/inv 1 nov fg år"
  },
  {
    "id": "N00028",
    "title": "Kostnadsutj.netto: Bebyggelsestruktur, kr/inv. 1 nov fg år"
  },
  {
    "id": "N00029",
    "title": "Kostnadsutj.netto: Barn med utländsk bakgrund, kr/inv 1 nov fg år (2000-)"
  },
  {
    "id": "N00030",
    "title": "Kostnadsutj.netto: Vatten och avlopp, kr/inv 1 nov fg år (-2004)"
  },
  {
    "id": "N00031",
    "title": "Kostnadsutj.netto: Kollektivtrafik, kr/inv 1 nov fg år"
  },
  {
    "id": "N00032",
    "title": "Kostnadsutj.netto: Gator och vägar, kr/inv. 1 nov fg år (-2004)"
  },
  {
    "id": "N00033",
    "title": "Kostnadsutj.netto: Uppvärmning, kr/inv 1 nov fg år (-2004)"
  },
  {
    "id": "N00034",
    "title": "Kostnadsutj.netto: Administration mm i glesbygd, kr/inv. 1 nov fg år (-2004)"
  },
  {
    "id": "N00035",
    "title": "Kostnadsutj.netto: Byggkostnader, kr/inv. 1 nov fg år (-2004)"
  },
  {
    "id": "N00036",
    "title": "Kostnadsutj.netto: Kallort, kr/inv 1 nov fg år (-2004)"
  },
  {
    "id": "N00037",
    "title": "Kostnadsutj.netto: Svagt befolkningsunderlag, kr/inv 1 nov fg år (-2004)"
  },
  {
    "id": "N00038",
    "title": "Kostnadsutj.netto: Sysselsättningsbefr. åtg., kr/inv. 1 nov fg år (-2004)"
  },
  {
    "id": "N00039",
    "title": "Kostnadsutj.netto: Befolkningsförändring, kr/inv 1 nov fg år"
  },
  {
    "id": "N00040",
    "title": "Underlag för utjämning, kr/inv. 1 nov fg år"
  },
  {
    "id": "N00041",
    "title": "Länsvis skattesats, (%)"
  },
  {
    "id": "N00042",
    "title": "Garanterad skattekraft, kr/inv 1 nov fg år"
  },
  {
    "id": "N00047",
    "title": "Kompensationsgrad, (%)"
  },
  {
    "id": "N00053",
    "title": "Månadsavlönad personal, totalt kommunalt anställda, antal"
  },
  {
    "id": "N00060",
    "title": "Månadsavlönad personal, kommunalt anställda i ledningsarbete, antal"
  },
  {
    "id": "N00061",
    "title": "Månadsavlönad personal, kommunalt anställda handläggare, antal"
  },
  {
    "id": "N00062",
    "title": "Månadsavlönad personal, kommunalt anställda administratörer, antal"
  },
  {
    "id": "N00063",
    "title": "Månadsavlönad personal, kommunalt anställda i övrigt socialt kurativt arbete, antal (-2017)"
  },
  {
    "id": "N00064",
    "title": "Månadsavlönad personal, kommunalt anställda tekniker, antal"
  },
  {
    "id": "N00065",
    "title": "Månadsavlönad personal, kommunalt anställda i vaktmästeri, trädgård, anläggning m.m., antal"
  },
  {
    "id": "N00066",
    "title": "Månadsavlönad personal, kommunalt anställda i köks- och måltidsarbete, antal"
  },
  {
    "id": "N00067",
    "title": "Månadsavlönad personal, kommunalt anställda i städ, tvätt och renhållning, antal"
  },
  {
    "id": "N00068",
    "title": "Månadsavlönad personal, kommunalt anställda inom övrig verksamhet, antal"
  },
  {
    "id": "N00073",
    "title": "Årsarbetare, kommunalt anställda i ledningsarbete, antal"
  },
  {
    "id": "N00074",
    "title": "Årsarbetare, kommunalt anställda handläggare, antal"
  },
  {
    "id": "N00075",
    "title": "Årsarbetare, kommunalt anställda administratörer, antal"
  },
  {
    "id": "N00076",
    "title": "Årsarbetare, kommunalt anställda i övrigt socialt kurativt arbete, antal (-2017)"
  },
  {
    "id": "N00077",
    "title": "Årsarbetare, kommunalt anställda tekniker, antal"
  },
  {
    "id": "N00078",
    "title": "Årsarbetare, kommunalt anställda i vaktmästeri, trädgård, anläggning m.m., antal"
  },
  {
    "id": "N00079",
    "title": "Årsarbetare, kommunalt anställda i köks- och måltidsarbete, antal"
  },
  {
    "id": "N00080",
    "title": "Årsarbetare, kommunalt anställda i städ, tvätt och renhållning, antal"
  },
  {
    "id": "N00081",
    "title": "Årsarbetare, kommunalt anställda inom övrig verksamhet, antal"
  },
  {
    "id": "N00082",
    "title": "Gemensamma kostnader fördelade till egentlig verksamhet totalt, andel (%)"
  },
  {
    "id": "N00090",
    "title": "Sjukfrånvaro kommunalt anställda totalt, (%)"
  },
  {
    "id": "N00091",
    "title": "Sjukfrånvaro kommunalt anställda mer än 59 dagar som andel av total sjukfrånvaro, (%)"
  },
  {
    "id": "N00092",
    "title": "Sjukfrånvaro för kommunalt anställda <30 år, (%)"
  },
  {
    "id": "N00093",
    "title": "Sjukfrånvaro för kommunalt anställda 30-49 år, (%)"
  },
  {
    "id": "N00094",
    "title": "Sjukfrånvaro för kommunalt anställda >49 år, (%)"
  },
  {
    "id": "N00095",
    "title": "Kostnad egentlig verksamhet, kr/inv"
  },
  {
    "id": "N00096",
    "title": "Nettokostnad egentlig verksamhet, kr/inv"
  },
  {
    "id": "N00097",
    "title": "Nettokostnadsavvikelse totalt (exkl. LSS), andel (%)"
  },
  {
    "id": "N00098",
    "title": "Årsarbetare, totalt kommunalt anställda, antal"
  },
  {
    "id": "N00100",
    "title": "Strukturkostnad kommunen, kr/inv"
  },
  {
    "id": "N00101",
    "title": "Standardkostnad barn och ungdom med utländsk bakgrund, kr/inv"
  },
  {
    "id": "N00102",
    "title": "Standardkostnad befolkningsförändring, kr/inv"
  },
  {
    "id": "N00103",
    "title": "Standardkostnad bebyggelsestruktur, kr/inv"
  },
  {
    "id": "N00104",
    "title": "Standardkostnad löner, kr/inv"
  },
  {
    "id": "N00105",
    "title": "Standardkostnad kollektivtrafik, kr/inv"
  },
  {
    "id": "N00106",
    "title": "Månadsavlönad personal, kommunalt anställda i administrationsarbete, antal"
  },
  {
    "id": "N00107",
    "title": "Månadsavlönad personal, kommunalt anställda i kultur-, turism- och friluftsliv, antal"
  },
  {
    "id": "N00108",
    "title": "Månadsavlönad personal, kommunalt anställda i förskola, skola, fritids m.m., antal"
  },
  {
    "id": "N00109",
    "title": "Månadsavlönad personal, kommunalt anställda i kurativt och socialt arbete, antal (-2017)"
  },
  {
    "id": "N00110",
    "title": "Månadsavlönad personal, kommunalt anställda i teknikarbete, antal"
  },
  {
    "id": "N00111",
    "title": "Månadsavlönad personal, kommunalt anställda i vård och omsorgsarbete, antal (-2017)"
  },
  {
    "id": "N00112",
    "title": "Årsarbetare, kommunalt anställda i administrationsarbete, antal"
  },
  {
    "id": "N00113",
    "title": "Årsarbetare, kommunalt anställda i kultur, turism och friluftsliv, antal"
  },
  {
    "id": "N00114",
    "title": "Årsarbetare, kommunalt anställda i förskola, skola, fritids m.m., antal"
  },
  {
    "id": "N00115",
    "title": "Årsarbetare, kommunalt anställda i socialt och kurativt arbete, antal (-2017)"
  },
  {
    "id": "N00116",
    "title": "Årsarbetare, kommunalt anställda i teknikarbete antal"
  },
  {
    "id": "N00117",
    "title": "Årsarbetare, kommunalt anställda i vård- och omsorgsarbete, antal (-2017)"
  },
  {
    "id": "N00119",
    "title": "Köp av egentlig verksamhet från privatägda företag, andel (%)"
  },
  {
    "id": "N00120",
    "title": "Köp av egentlig verksamhet från föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N00121",
    "title": "Köp av egentlig verksamhet från andra kommuner, andel (%)"
  },
  {
    "id": "N00122",
    "title": "Köp av egentlig verksamhet totalt från kommunägda företag, andel (%)"
  },
  {
    "id": "N00123",
    "title": "Köp av egentlig verksamhet totalt från övriga motparter, andel (%)"
  },
  {
    "id": "N00200",
    "title": "Tillsvidareanställda månadsavlönade, kommunalt anställda, andel (%)"
  },
  {
    "id": "N00201",
    "title": "Visstidsanställda månadsavlönade, kommunalt anställda, andel (%)"
  },
  {
    "id": "N00202",
    "title": "Visstidsanställda timavlönade, kommun, andel (%)"
  },
  {
    "id": "N00203",
    "title": "Arbetad tid utförd av tillsvidareanställda månadsavlönade, kommunalt anställda, andel (%)"
  },
  {
    "id": "N00204",
    "title": "Arbetad tid utförd av visstidsanställda månadsavlönade, kommun, andel (%)"
  },
  {
    "id": "N00205",
    "title": "Arbetad tid utförd av visstidsanställda timavlönade, kommun, andel (%)"
  },
  {
    "id": "N00206",
    "title": "Heltidsanställda månadsavlönade, kommun, andel (%)"
  },
  {
    "id": "N00207",
    "title": "Deltidsanställda (75-99 %) månadsavlönade, kommun, andel (%)"
  },
  {
    "id": "N00208",
    "title": "Deltidsanställda (1-74 %) månadsavlönade, kommun, andel (%)"
  },
  {
    "id": "N00209",
    "title": "Heltidsarbetande månadsavlönade, kommun, andel (%)"
  },
  {
    "id": "N00210",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade, kommun, andel (%)"
  },
  {
    "id": "N00211",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade, kommun, andel (%)"
  },
  {
    "id": "N00212",
    "title": "Anställda -34 år, kommun, andel (%)"
  },
  {
    "id": "N00213",
    "title": "Anställda 35-54 år, kommun, andel (%)"
  },
  {
    "id": "N00214",
    "title": "Anställda 55+, kommun, andel (%)"
  },
  {
    "id": "N00215",
    "title": "Nya tillsvidareanställda under året, kommun, andel (%)"
  },
  {
    "id": "N00216",
    "title": "Avgångna tillsvidareanställda under året, kommunalt anställda, andel (%)"
  },
  {
    "id": "N00217",
    "title": "Anställda utrikes födda, kommun, balanstal"
  },
  {
    "id": "N00218",
    "title": "Anställda med eftergymnasial utbildning, kommun, andel (%)"
  },
  {
    "id": "N00219",
    "title": "Anställda 55+ år, antal"
  },
  {
    "id": "N00220",
    "title": "Utrikes födda 18-64 år bland anställda, andel (%)"
  },
  {
    "id": "N00221",
    "title": "Utrikes födda 18-64 år, andel (%)"
  },
  {
    "id": "N00222",
    "title": "Anställda kvinnor, andel (%)"
  },
  {
    "id": "N00223",
    "title": "Heltidsanställd månadsavlönad personal, kommunalt anställda, antal"
  },
  {
    "id": "N00224",
    "title": "Heltidsanställd månadsavlönad personal som arbetar heltid, kommunalt anställda, antal"
  },
  {
    "id": "N00225",
    "title": "Heltidsanställd månadsavlönad personal som arbetar deltid, kommunalt anställda, antal"
  },
  {
    "id": "N00226",
    "title": "Heltidsanställd månadsavlönad personal ledig från sitt arbete, kommunalt anställda, antal"
  },
  {
    "id": "N00227",
    "title": "Deltidsanställd månadsavlönad personal, kommunalt anställda, antal"
  },
  {
    "id": "N00229",
    "title": "Deltidsanställd månadsavlönad personal ledig från sitt arbete, kommunalt anställda, antal"
  },
  {
    "id": "N00230",
    "title": "Timavlönad personal, kommunalt anställda, antal"
  },
  {
    "id": "N00232",
    "title": "Helt lediga från sitt arbete, kommunalt anställda, antal"
  },
  {
    "id": "N00233",
    "title": "Tillsvidareanställd månadsavlönad personal, kommunalt anställda, antal"
  },
  {
    "id": "N00234",
    "title": "Deltidsanställda (75-99 %) månadsavlönade, kommun, antal"
  },
  {
    "id": "N00235",
    "title": "Deltidsanställda (1-74 %) månadsavlönade, kommun, antal"
  },
  {
    "id": "N00236",
    "title": "Heltidsarbetande månadsavlönade, kommun, antal"
  },
  {
    "id": "N00237",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade, kommun, antal"
  },
  {
    "id": "N00238",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade, kommun, antal"
  },
  {
    "id": "N00239",
    "title": "Ny tillsvidareanställd månadsavlönad personal, antal."
  },
  {
    "id": "N00240",
    "title": "Heltidsarbetande personal, ranking (-2017)"
  },
  {
    "id": "N00242",
    "title": "Genomsnittlig sysselsättningsgrad för anställda månadsavlönade i kommunen, (%)"
  },
  {
    "id": "N00244",
    "title": "Deltidsanställd månadsavlönad arbetande deltid, kommunalt anställda, antal"
  },
  {
    "id": "N00401",
    "title": "Utsläpp till luft av växthusgaser totalt, ton CO2-ekv/inv."
  },
  {
    "id": "N00403",
    "title": "Ekologiskt odlad åkermark, andel (%)"
  },
  {
    "id": "N00404",
    "title": "Antibiotikaförsäljning kommun, recept/1000 inv"
  },
  {
    "id": "N00410",
    "title": "Nöjd Inflytande-Index - Påverkan"
  },
  {
    "id": "N00485",
    "title": "Förväntat värde förvärvsarbetande skyddsbehövande och anhöriga (flyktingar) 20-64 år, andel (%)"
  },
  {
    "id": "N00486",
    "title": "Avvikelse från förväntat värde, förvärvsarbetande skyddsbehövande och anhöriga (flyktingar) 20-64 år, andel (%)"
  },
  {
    "id": "N00487",
    "title": "Antibiotikaförsäljning åldersstandardiserat kommun, recept/1000 (medelbefolkning) inv."
  },
  {
    "id": "N00700",
    "title": "Förvärvsarbetande skyddsbehövande och anhöriga (flyktingar) 20-64 år, andel (%)"
  },
  {
    "id": "N00701",
    "title": "Studerande skyddsbehövande och anhöriga (flyktingar) 20-64 år, andel (%)"
  },
  {
    "id": "N00702",
    "title": "Försörjningsstöd som andel av nettoinkomsten bland skyddsbehövande och anhöriga (flyktingar) 20-64 år, andel (%)"
  },
  {
    "id": "N00703",
    "title": "Skyddsbehövande och anhöriga (flyktingar) 20-25 år som varken förvärvsarbetar eller studerar, andel (%)"
  },
  {
    "id": "N00704",
    "title": "Skyddsbehövande och anhöriga (flyktingar) med kort vistelsetid i Sverige 0-6 år, andel (%)"
  },
  {
    "id": "N00705",
    "title": "Skyddsbehövande och anhöriga (flyktingar) med förgymnasial utbildning, andel (%)"
  },
  {
    "id": "N00706",
    "title": "Skyddsbehövande och anhöriga (flyktingar) med gymnasial utbildning, andel (%)"
  },
  {
    "id": "N00707",
    "title": "Skyddsbehövande och anhöriga (flyktingar) med eftergymnasial-eller forskarutbildning, andel (%)"
  },
  {
    "id": "N00708",
    "title": "Arbetslöshet bland inrikes födda 20-64 år, andel (%) av bef."
  },
  {
    "id": "N00709",
    "title": "Skyddsbehövande och anhöriga (flyktingar) med vistelsetid 0-2 år i Sverige, andel (%)"
  },
  {
    "id": "N00710",
    "title": "Skyddsbehövande och anhöriga (flyktingar) med vistelsetid 3-6 år i Sverige, andel (%)"
  },
  {
    "id": "N00712",
    "title": "Förvärvsarbetande eller studerande skyddsbehövande och anhöriga (flyktingar) 20-64 år, andel (%)"
  },
  {
    "id": "N00800",
    "title": "Invånare 16-64 år som är arbetslösa el. i konjunkturberoende program, andel av bef (%)"
  },
  {
    "id": "N00801",
    "title": "Egentlig verksamhet i kommunal regi, andel (%)"
  },
  {
    "id": "N00803",
    "title": "Köp av egentlig verksamhet totalt, andel (%)"
  },
  {
    "id": "N00900",
    "title": "Skattesats, totalt, (%)"
  },
  {
    "id": "N00901",
    "title": "Skattesats till kommun, (%)"
  },
  {
    "id": "N00902",
    "title": "Skattesats till region, (%)"
  },
  {
    "id": "N00903",
    "title": "Skattekraft kommun, kr/inv"
  },
  {
    "id": "N00904",
    "title": "Skattekraft som andel av rikets medelskattekraft kommun, (%)"
  },
  {
    "id": "N00905",
    "title": "Mediannettoinkomst, kr/inv 20+"
  },
  {
    "id": "N00906",
    "title": "Sammanräknad förvärvsinkomst i åldern 20-64 år (median), kr"
  },
  {
    "id": "N00907",
    "title": "Sammanräknad förvärvsinkomst i åldern 16-19 år (median), kr"
  },
  {
    "id": "N00908",
    "title": "Förvärvsarbetande invånare 16-19 år, andel (%)"
  },
  {
    "id": "N00909",
    "title": "Förvärvsarbetande invånare 20-24 år, andel (%)"
  },
  {
    "id": "N00910",
    "title": "Förvärvsarbetande invånare 25-34 år, andel (%)"
  },
  {
    "id": "N00911",
    "title": "Förvärvsarbetande invånare 35-49 år, andel (%)"
  },
  {
    "id": "N00912",
    "title": "Förvärvsarbetande invånare 50-59 år, andel (%)"
  },
  {
    "id": "N00913",
    "title": "Förvärvsarbetande invånare 60-64 år, andel (%)"
  },
  {
    "id": "N00914",
    "title": "Förvärvsarbetande invånare 20-64 år, andel (%)"
  },
  {
    "id": "N00915",
    "title": "Förvärvsarbetande i statlig sektor, andel (%)"
  },
  {
    "id": "N00916",
    "title": "Förvärvsarbetande i privat sektor, andel (%)"
  },
  {
    "id": "N00917",
    "title": "Förvärvsarbetande i kommun-/ regionsektor, andel (%)"
  },
  {
    "id": "N00918",
    "title": "Förvärvsarbetande i övriga sektorer, andel (%)"
  },
  {
    "id": "N00919",
    "title": "Arbetslöshet 18-64 år, andel (%) av bef."
  },
  {
    "id": "N00920",
    "title": "Utpendling, andel (%)"
  },
  {
    "id": "N00921",
    "title": "Bor och arbetar i kommunen, andel (%)"
  },
  {
    "id": "N00922",
    "title": "Egen företagare, antal"
  },
  {
    "id": "N00923",
    "title": "Medellivslängd män, år"
  },
  {
    "id": "N00924",
    "title": "Nettopendling, andel (%)"
  },
  {
    "id": "N00925",
    "title": "Medellivslängd kvinnor, år"
  },
  {
    "id": "N00927",
    "title": "Demografisk försörjningskvot"
  },
  {
    "id": "N00928",
    "title": "Arbetslöshet 16-24 år, andel (%) av bef."
  },
  {
    "id": "N00929",
    "title": "Långtidsarbetslöshet 16-24 år, andel (%) av bef."
  },
  {
    "id": "N00930",
    "title": "Långtidsarbetslöshet 15-74 år, andel (%) av arbetslösa"
  },
  {
    "id": "N00931",
    "title": "Långtidsarbetslöshet 25-64 år, andel (%) av arbetslösa"
  },
  {
    "id": "N00932",
    "title": "Långtidsarbetslöshet 16-24 år, andel (%) av arbetslösa"
  },
  {
    "id": "N00933",
    "title": "Sammanräknad förvärvsinkomst i åldern 20-24 år(median), kr"
  },
  {
    "id": "N00934",
    "title": "Sammanräknad förvärvsinkomst i åldern 25-34 år(median), kr"
  },
  {
    "id": "N00935",
    "title": "Sammanräknad förvärvsinkomst i åldern 35-49 år kommun(median), kr"
  },
  {
    "id": "N00936",
    "title": "Sammanräknad förvärvsinkomst i åldern 50-59 år kommun(median), kr"
  },
  {
    "id": "N00937",
    "title": "Sammanräknad förvärvsinkomst i åldern 60-64 år(median), kr"
  },
  {
    "id": "N00938",
    "title": "Sjukpenningtalet, dagar/registrerad försäkrad"
  },
  {
    "id": "N00939",
    "title": "Uttagna dagar med föräldrapenning, antal/mottagare"
  },
  {
    "id": "N00940",
    "title": "Uttagna dagar med tillfällig föräldrapenning (VAB), antal/mottagare"
  },
  {
    "id": "N00941",
    "title": "Nyregistrerade företag, antal/1000 invånare"
  },
  {
    "id": "N00942",
    "title": "Föräldrapenningdagar som tas ut av kvinnor, andel av antal dagar (%)"
  },
  {
    "id": "N00943",
    "title": "Föräldrapenningdagar som tas ut av män, andel av antal dagar (%)"
  },
  {
    "id": "N00944",
    "title": "Tillfälliga föräldrapenningdagar (VAB) som tas ut av kvinnor, andel av antal dagar (%)"
  },
  {
    "id": "N00945",
    "title": "Tillfälliga föräldrapenningdagar (VAB) som tas ut av män, andel av antal dagar (%)"
  },
  {
    "id": "N00946",
    "title": "Förvärvsarbetande totalt kommun, antal"
  },
  {
    "id": "N00947",
    "title": "Bor och arbetar i kommunen, antal"
  },
  {
    "id": "N00948",
    "title": "Utpendling, antal"
  },
  {
    "id": "N00951",
    "title": "Lönegap median kvinnor - median män anställda av kommunen, kr"
  },
  {
    "id": "N00952",
    "title": "Kvinnors mediannettoinkomst som andel av mäns mediannettoinkomst, andel (%)"
  },
  {
    "id": "N00953",
    "title": "Kvinnors mediannettoinkomst som andel av mäns mediannettoinkomst, kommunalt anställda, andel (%)"
  },
  {
    "id": "N00954",
    "title": "Tätortsgrad (senaste mätning)"
  },
  {
    "id": "N00955",
    "title": "Långtidsarbetslöshet 25-64 år, andel (%) av bef."
  },
  {
    "id": "N00956",
    "title": "Ginikoeffecient, index"
  },
  {
    "id": "N00957",
    "title": "Ohälsotal, dagar"
  },
  {
    "id": "N00958",
    "title": "Kvinnors mediannettoinkomst som andel av mäns mediannettoinkomst, anställda av regionen, andel (%)"
  },
  {
    "id": "N00959",
    "title": "Medelålder, år"
  },
  {
    "id": "N00960",
    "title": "Inskrivna i etableringsuppdraget under året , antal"
  },
  {
    "id": "N00961",
    "title": "Inskrivna i etableringsuppdraget med högst förgymnasial utbildning, andel (%)"
  },
  {
    "id": "N00962",
    "title": "Inskrivna i etableringsuppdraget med gymnasial utbildning,  andel (%)"
  },
  {
    "id": "N00963",
    "title": "Inskrivna i etableringsuppdraget med eftergymnasial utbildning längre än 2 år, andel (%)"
  },
  {
    "id": "N00964",
    "title": "Lämnat etableringsuppdraget under året, antal"
  },
  {
    "id": "N00965",
    "title": "Lämnat etableringsuppdraget och börjat arbeta (status dag 1), andel (%) (-2015)"
  },
  {
    "id": "N00966",
    "title": "Lämnat etableringsuppdraget och börjat studera (status dag 1), andel (%) (-2015)"
  },
  {
    "id": "N00967",
    "title": "Lämnat etableringsuppdraget och börjat arbeta eller studera (status dag 1), andel (%) (-2015)"
  },
  {
    "id": "N00968",
    "title": "Inpendling, andel (%)"
  },
  {
    "id": "N00969",
    "title": "Inskrivna i etableringsuppdraget med förgymnasial utbildning kortare än 9 år, andel (%)"
  },
  {
    "id": "N00970",
    "title": "Inskrivna i etableringsuppdraget med förgymnasial utbildning 9 (10) år, andel (%)"
  },
  {
    "id": "N00971",
    "title": "Lämnat etableringsuppdraget och börjat arbeta (status efter 90 dagar), andel (%)"
  },
  {
    "id": "N00972",
    "title": "Lämnat etableringsuppdraget och börjat studera (status efter 90 dagar), andel (%)"
  },
  {
    "id": "N00973",
    "title": "Lämnat etableringsuppdraget och börjat arbeta eller studera (status efter 90 dagar), andel (%)"
  },
  {
    "id": "N00974",
    "title": "Ohälsotal, 16-19 år, dagar"
  },
  {
    "id": "N00975",
    "title": "Ohälsotal, 20-29 år, dagar"
  },
  {
    "id": "N00976",
    "title": "Ohälsotal, 30-39 år, dagar"
  },
  {
    "id": "N00977",
    "title": "Ohälsotal, 40-49 år, dagar"
  },
  {
    "id": "N00978",
    "title": "Ohälsotal, 50-59 år, dagar"
  },
  {
    "id": "N00979",
    "title": "Ohälsotal, 60-64 år, dagar"
  },
  {
    "id": "N00980",
    "title": "Äldre äldre av invånare 65+, andel (%)"
  },
  {
    "id": "N00981",
    "title": "Förvärvsarbetande dagbefolkning, antal"
  },
  {
    "id": "N00982",
    "title": "Inpendling, antal"
  },
  {
    "id": "N00983",
    "title": "Arbetslöshet 16-24 år, andel (%) av registerbaserad arbetskraft"
  },
  {
    "id": "N00984",
    "title": "Långtidsarbetslöshet 16-24 år, andel (%) av registerbaserad arbetskraft"
  },
  {
    "id": "N00985",
    "title": "Långtidsarbetslöshet 25-64 år, andel (%) av registerbaserad arbetskraft"
  },
  {
    "id": "N00986",
    "title": "Långtidsarbetslöshet 16-64 år, andel (%) av registerbaserad arbetskraft"
  },
  {
    "id": "N00987",
    "title": "Arbetslöshet 25-64 år, andel (%) av registerbaserad arbetskraft"
  },
  {
    "id": "N00988",
    "title": "Arbetslöshet 16-64 år, andel (%) av registerbaserad arbetskraft"
  },
  {
    "id": "N00989",
    "title": "Skuldsatta invånare 18+ hos Kronofogden, andel (%)"
  },
  {
    "id": "N00990",
    "title": "Medianskuld hos Kronofogden, kr"
  },
  {
    "id": "N00991",
    "title": "Lämnat etableringsuppdraget och deltar i arbetsmarknadspolitiska program (Status efter 90 dagar), andel (%). Källa: SCB."
  },
  {
    "id": "N00992",
    "title": "Care Need Index (CNI), index"
  },
  {
    "id": "N00994",
    "title": "Inskrivna i etableringsuppdraget som saknar formell grundläggande utbildning, andel (%)"
  },
  {
    "id": "N00995",
    "title": "Lämnat etableringsuppdraget och börjat arbete med stöd (exkl. nystartsjobb) (status efter 90 dagar), andel (%)"
  },
  {
    "id": "N01401",
    "title": "Ekonomiskt utsatta äldre 65+, andel (%)"
  },
  {
    "id": "N01700",
    "title": "Individer med sjukpenning räknat i helårsekvivalenter, antal"
  },
  {
    "id": "N01701",
    "title": "Individer med rehabilitieringspenning räknat i helårsekvivalenter, antal"
  },
  {
    "id": "N01702",
    "title": "Individer med aktivitetsersättning räknat i helårsekvivalenter, antal"
  },
  {
    "id": "N01703",
    "title": "Individer med sjukersättning räknat i helårsekvivalenter, antal"
  },
  {
    "id": "N01704",
    "title": "Individer med arbetslöshetsersättning räknat i helårsekvivalenter, antal"
  },
  {
    "id": "N01705",
    "title": "Individer med aktivitetsstöd räknat i helårsekvivalenter, antal"
  },
  {
    "id": "N01706",
    "title": "Individer med utvecklingsersättning räknat i helårsekvivalenter, antal"
  },
  {
    "id": "N01707",
    "title": "Individer med etableringsersättning räknat i helårsekvivalenter, antal"
  },
  {
    "id": "N01708",
    "title": "Individer med etableringstillägg räknat i helårsekvivalenter, antal"
  },
  {
    "id": "N01709",
    "title": "Individer med bostadsersättning räknat i helårsekvivalenter, antal"
  },
  {
    "id": "N01710",
    "title": "Individer med ekonomiskt bistånd räknat i helårsekvivalenter, antal"
  },
  {
    "id": "N01711",
    "title": "Individer med utbetalat stöd räknat i helårsekvivalenter för samtliga ersättningsformer, antal"
  },
  {
    "id": "N01712",
    "title": "Invånare 65+ med eftergymnasial utbildning, andel (%)"
  },
  {
    "id": "N01713",
    "title": "Invånare 16-64 år, antal"
  },
  {
    "id": "N01714",
    "title": "Invånare 65+ med förgymnasial utbildning, andel (%)"
  },
  {
    "id": "N01715",
    "title": "Invånare 0-4 år, andel (%)"
  },
  {
    "id": "N01716",
    "title": "Invånare födda i öst- och sydeuropa (ej EU), Afrika, Asien eller Sydamerika, andel (%)"
  },
  {
    "id": "N01717",
    "title": "Invånare 65+ och ensamboende, andel (%)"
  },
  {
    "id": "N01718",
    "title": "Ensamstående förälder med barn 17 år och yngre, andel (%)"
  },
  {
    "id": "N01719",
    "title": "Invånare, 1 år eller äldre som flyttat in eller bytt distrikt i kommunen, andel (%)"
  },
  {
    "id": "N01720",
    "title": "Arbetslösa eller i åtgärd minst en dag under året, 16-64 år, andel (%)"
  },
  {
    "id": "N01721",
    "title": "Invånare, 25-64 år, med låg utbildningsnivå, andel (%)"
  },
  {
    "id": "N01722",
    "title": "Invånare 65+ med gymnasial utbildning, andel (%)"
  },
  {
    "id": "N01723",
    "title": "Invånare 65+ med uppgift om utbildningsnivå saknas, andel (%)"
  },
  {
    "id": "N01800",
    "title": "Flyttningsnetto, antal"
  },
  {
    "id": "N01801",
    "title": "Inflyttade till kommunen, antal"
  },
  {
    "id": "N01802",
    "title": "Utflyttade från kommunen, antal"
  },
  {
    "id": "N01803",
    "title": "Födelsenetto"
  },
  {
    "id": "N01804",
    "title": "Födda, antal"
  },
  {
    "id": "N01805",
    "title": "Döda, antal"
  },
  {
    "id": "N01806",
    "title": "Immigrationsnetto"
  },
  {
    "id": "N01807",
    "title": "Immigrerade, antal"
  },
  {
    "id": "N01808",
    "title": "Emigrerade, antal"
  },
  {
    "id": "N01809",
    "title": "Invånare 06-15 år, andel (%)"
  },
  {
    "id": "N01810",
    "title": "Invånare 16-18 år, andel (%)"
  },
  {
    "id": "N01811",
    "title": "Invånare 0-64 år, andel (%)"
  },
  {
    "id": "N01812",
    "title": "Invånare 65-79 år, andel (%)"
  },
  {
    "id": "N01813",
    "title": "Invånare 80+, andel (%)"
  },
  {
    "id": "N01814",
    "title": "Invånare 07-15 år, andel (%)"
  },
  {
    "id": "N01815",
    "title": "Invånare 01-12 år, andel (%)"
  },
  {
    "id": "N01816",
    "title": "Invånare 01-05 år, andel (%)"
  },
  {
    "id": "N01817",
    "title": "Invånare 0 år, antal"
  },
  {
    "id": "N01818",
    "title": "Invånare 1 år, antal"
  },
  {
    "id": "N01819",
    "title": "Invånare 2 år, antal"
  },
  {
    "id": "N01820",
    "title": "Invånare 3 år, antal"
  },
  {
    "id": "N01821",
    "title": "Invånare 4 år, antal"
  },
  {
    "id": "N01822",
    "title": "Invånare 5 år, antal"
  },
  {
    "id": "N01823",
    "title": "Invånare 6 år, antal"
  },
  {
    "id": "N01824",
    "title": "Invånare 7 år, antal"
  },
  {
    "id": "N01825",
    "title": "Invånare 8 år, antal"
  },
  {
    "id": "N01826",
    "title": "Invånare 9 år, antal"
  },
  {
    "id": "N01827",
    "title": "Invånare 10 år, antal"
  },
  {
    "id": "N01828",
    "title": "Invånare 11 år, antal"
  },
  {
    "id": "N01829",
    "title": "Invånare 12 år, antal"
  },
  {
    "id": "N01830",
    "title": "Invånare 13 år, antal"
  },
  {
    "id": "N01831",
    "title": "Invånare 14 år, antal"
  },
  {
    "id": "N01832",
    "title": "Invånare 15 år, antal"
  },
  {
    "id": "N01833",
    "title": "Invånare 16 år, antal"
  },
  {
    "id": "N01834",
    "title": "Invånare 17 år, antal"
  },
  {
    "id": "N01835",
    "title": "Invånare 18 år, antal"
  },
  {
    "id": "N01836",
    "title": "Invånare 19 år, antal"
  },
  {
    "id": "N01837",
    "title": "Invånare 20 år, antal"
  },
  {
    "id": "N01838",
    "title": "Invånare 21 år, antal"
  },
  {
    "id": "N01839",
    "title": "Invånare 22 år, antal"
  },
  {
    "id": "N01840",
    "title": "Invånare 23 år, antal"
  },
  {
    "id": "N01841",
    "title": "Invånare 24 år, antal"
  },
  {
    "id": "N01842",
    "title": "Invånare 25 år, antal"
  },
  {
    "id": "N01843",
    "title": "Invånare 26 år, antal"
  },
  {
    "id": "N01844",
    "title": "Invånare 27 år, antal"
  },
  {
    "id": "N01845",
    "title": "Invånare 28 år, antal"
  },
  {
    "id": "N01846",
    "title": "Invånare 29 år, antal"
  },
  {
    "id": "N01847",
    "title": "Invånare 30 år, antal"
  },
  {
    "id": "N01848",
    "title": "Invånare 31 år, antal"
  },
  {
    "id": "N01849",
    "title": "Invånare 32 år, antal"
  },
  {
    "id": "N01850",
    "title": "Invånare 33 år, antal"
  },
  {
    "id": "N01851",
    "title": "Invånare 34 år, antal"
  },
  {
    "id": "N01852",
    "title": "Invånare 35 år, antal"
  },
  {
    "id": "N01853",
    "title": "Invånare 36 år, antal"
  },
  {
    "id": "N01854",
    "title": "Invånare 37 år, antal"
  },
  {
    "id": "N01855",
    "title": "Invånare 38 år, antal"
  },
  {
    "id": "N01856",
    "title": "Invånare 39 år, antal"
  },
  {
    "id": "N01857",
    "title": "Invånare 40 år, antal"
  },
  {
    "id": "N01858",
    "title": "Invånare 41 år, antal"
  },
  {
    "id": "N01859",
    "title": "Invånare 42 år, antal"
  },
  {
    "id": "N01860",
    "title": "Invånare 43 år, antal"
  },
  {
    "id": "N01861",
    "title": "Invånare 44 år, antal"
  },
  {
    "id": "N01862",
    "title": "Invånare 45 år, antal"
  },
  {
    "id": "N01863",
    "title": "Invånare 46 år, antal"
  },
  {
    "id": "N01864",
    "title": "Invånare 47 år, antal"
  },
  {
    "id": "N01865",
    "title": "Invånare 48 år, antal"
  },
  {
    "id": "N01866",
    "title": "Invånare 49 år, antal"
  },
  {
    "id": "N01867",
    "title": "Invånare 50 år, antal"
  },
  {
    "id": "N01868",
    "title": "Invånare 51 år, antal"
  },
  {
    "id": "N01869",
    "title": "Invånare 52 år, antal"
  },
  {
    "id": "N01870",
    "title": "Invånare 53 år, antal"
  },
  {
    "id": "N01871",
    "title": "Invånare 54 år, antal"
  },
  {
    "id": "N01872",
    "title": "Invånare 55 år, antal"
  },
  {
    "id": "N01873",
    "title": "Invånare 56 år, antal"
  },
  {
    "id": "N01874",
    "title": "Invånare 57 år, antal"
  },
  {
    "id": "N01875",
    "title": "Invånare 58 år, antal"
  },
  {
    "id": "N01876",
    "title": "Invånare 59 år, antal"
  },
  {
    "id": "N01877",
    "title": "Invånare 60 år, antal"
  },
  {
    "id": "N01878",
    "title": "Invånare 61 år, antal"
  },
  {
    "id": "N01879",
    "title": "Invånare 62 år, antal"
  },
  {
    "id": "N01880",
    "title": "Invånare 63 år, antal"
  },
  {
    "id": "N01881",
    "title": "Invånare 64 år, antal"
  },
  {
    "id": "N01882",
    "title": "Invånare 65 år, antal"
  },
  {
    "id": "N01883",
    "title": "Invånare 66 år, antal"
  },
  {
    "id": "N01884",
    "title": "Invånare 67 år, antal"
  },
  {
    "id": "N01885",
    "title": "Invånare 68 år, antal"
  },
  {
    "id": "N01886",
    "title": "Invånare 69 år, antal"
  },
  {
    "id": "N01887",
    "title": "Invånare 70 år, antal"
  },
  {
    "id": "N01888",
    "title": "Invånare 71 år, antal"
  },
  {
    "id": "N01889",
    "title": "Invånare 72 år, antal"
  },
  {
    "id": "N01890",
    "title": "Invånare 73 år, antal"
  },
  {
    "id": "N01891",
    "title": "Invånare 74 år, antal"
  },
  {
    "id": "N01892",
    "title": "Invånare 75 år, antal"
  },
  {
    "id": "N01893",
    "title": "Invånare 76 år, antal"
  },
  {
    "id": "N01894",
    "title": "Invånare 77 år, antal"
  },
  {
    "id": "N01895",
    "title": "Invånare 78 år, antal"
  },
  {
    "id": "N01896",
    "title": "Invånare 79 år, antal"
  },
  {
    "id": "N01897",
    "title": "Invånare 80 år, antal"
  },
  {
    "id": "N01898",
    "title": "Invånare 81 år, antal"
  },
  {
    "id": "N01899",
    "title": "Invånare 82 år, antal"
  },
  {
    "id": "N01900",
    "title": "Invånare 83 år, antal"
  },
  {
    "id": "N01901",
    "title": "Invånare 84 år, antal"
  },
  {
    "id": "N01902",
    "title": "Invånare 85 år, antal"
  },
  {
    "id": "N01903",
    "title": "Invånare 86 år, antal"
  },
  {
    "id": "N01904",
    "title": "Invånare 87 år, antal"
  },
  {
    "id": "N01905",
    "title": "Invånare 88 år, antal"
  },
  {
    "id": "N01906",
    "title": "Invånare 89 år, antal"
  },
  {
    "id": "N01907",
    "title": "Invånare 90 år, antal"
  },
  {
    "id": "N01908",
    "title": "Invånare 91 år, antal"
  },
  {
    "id": "N01909",
    "title": "Invånare 92 år, antal"
  },
  {
    "id": "N01910",
    "title": "Invånare 93 år, antal"
  },
  {
    "id": "N01911",
    "title": "Invånare 94 år, antal"
  },
  {
    "id": "N01912",
    "title": "Invånare 95 år, antal"
  },
  {
    "id": "N01913",
    "title": "Invånare 96 år, antal"
  },
  {
    "id": "N01914",
    "title": "Invånare 97 år, antal"
  },
  {
    "id": "N01915",
    "title": "Invånare 98 år, antal"
  },
  {
    "id": "N01916",
    "title": "Invånare 99 år, antal"
  },
  {
    "id": "N01917",
    "title": "Invånare 100+, antal"
  },
  {
    "id": "N01918",
    "title": "Invånare 0-64 år, antal"
  },
  {
    "id": "N01919",
    "title": "Invånare 0-19 år, antal"
  },
  {
    "id": "N01920",
    "title": "Invånare 0-18 år, antal"
  },
  {
    "id": "N01921",
    "title": "Invånare 0-12 år, antal"
  },
  {
    "id": "N01922",
    "title": "Invånare 0-6 år, antal"
  },
  {
    "id": "N01923",
    "title": "Invånare 6-12 år, antal"
  },
  {
    "id": "N01924",
    "title": "Invånare 1-12 år, antal"
  },
  {
    "id": "N01925",
    "title": "Invånare 1-6 år, antal"
  },
  {
    "id": "N01926",
    "title": "Invånare 1-5 år, antal"
  },
  {
    "id": "N01927",
    "title": "Invånare 13-18 år, antal"
  },
  {
    "id": "N01928",
    "title": "Invånare 13-15 år, antal"
  },
  {
    "id": "N01929",
    "title": "Invånare 16-18 år, antal"
  },
  {
    "id": "N01930",
    "title": "Invånare 7-15 år, antal"
  },
  {
    "id": "N01931",
    "title": "Invånare 19-64 år, antal"
  },
  {
    "id": "N01932",
    "title": "Invånare 40-64 år, antal"
  },
  {
    "id": "N01933",
    "title": "Invånare 40-59 år, antal"
  },
  {
    "id": "N01934",
    "title": "Invånare 60-64 år, antal"
  },
  {
    "id": "N01935",
    "title": "Invånare 20-39 år, antal"
  },
  {
    "id": "N01936",
    "title": "Invånare 20-22 år, antal"
  },
  {
    "id": "N01937",
    "title": "Invånare 23-39 år, antal"
  },
  {
    "id": "N01938",
    "title": "Invånare 65+, antal"
  },
  {
    "id": "N01939",
    "title": "Invånare 65-84 år, antal"
  },
  {
    "id": "N01940",
    "title": "Invånare 65-69 år, antal"
  },
  {
    "id": "N01941",
    "title": "Invånare 70-74 år, antal"
  },
  {
    "id": "N01942",
    "title": "Invånare 75-79 år, antal"
  },
  {
    "id": "N01943",
    "title": "Invånare 80-84 år, antal"
  },
  {
    "id": "N01944",
    "title": "Invånare 85+, antal"
  },
  {
    "id": "N01945",
    "title": "Invånare 85-89 år, antal"
  },
  {
    "id": "N01946",
    "title": "Invånare 90-94 år, antal"
  },
  {
    "id": "N01947",
    "title": "Invånare 95-99 år, antal"
  },
  {
    "id": "N01948",
    "title": "Invånare 0-20 år, antal"
  },
  {
    "id": "N01950",
    "title": "Utrikes födda vuxna invånare, andel (%)"
  },
  {
    "id": "N01951",
    "title": "Invånare  totalt, antal"
  },
  {
    "id": "N01952",
    "title": "Invånare 0-5 år, antal"
  },
  {
    "id": "N01953",
    "title": "Invånare 6-15 år, antal"
  },
  {
    "id": "N01954",
    "title": "Invånare 16-19 år, antal"
  },
  {
    "id": "N01955",
    "title": "Invånare 20-64 år, antal"
  },
  {
    "id": "N01956",
    "title": "Invånare 65-79 år, antal"
  },
  {
    "id": "N01957",
    "title": "Invånare 80+, antal"
  },
  {
    "id": "N01958",
    "title": "Förändring i antal invånare under senaste femårsperioden, andel (%)"
  },
  {
    "id": "N01960",
    "title": "Invånare 65+, andel (%)"
  },
  {
    "id": "N01961",
    "title": "Invånare 20-64 år, andel (%)"
  },
  {
    "id": "N01962",
    "title": "Invånare 16-19 år, andel (%)"
  },
  {
    "id": "N01963",
    "title": "Förändring i antal invånare sen föregående år, andel (%)"
  },
  {
    "id": "N01964",
    "title": "Inrikes flyttningsnetto"
  },
  {
    "id": "N01965",
    "title": "Inrikes inflyttade, antal"
  },
  {
    "id": "N01966",
    "title": "Inrikes utflyttade, antal"
  },
  {
    "id": "N01967",
    "title": "Unga vuxna av invånare 18-64 år, andel (%)"
  },
  {
    "id": "N01968",
    "title": "Invånare 25-44 år med eftergymnasial utbildning, andel (%)"
  },
  {
    "id": "N01969",
    "title": "Invånare 25-44 år med gymnasial utbildning, andel (%)"
  },
  {
    "id": "N01970",
    "title": "Invånare 25-44 år med förgymnasial utbildning, andel (%)"
  },
  {
    "id": "N01971",
    "title": "Invånare 25-44 år med uppgift om utbildningsnivå saknas, andel (%)"
  },
  {
    "id": "N01972",
    "title": "Invånare 45-64 år med eftergymnasial utbildning, andel (%)"
  },
  {
    "id": "N01973",
    "title": "Invånare 45-64 år med gymnasial utbildning, andel (%)"
  },
  {
    "id": "N01974",
    "title": "Invånare 45-64 år med förgymnasial utbildning, andel (%)"
  },
  {
    "id": "N01975",
    "title": "Invånare 45-64 år med uppgift om utbildningsnivå saknas, andel (%)"
  },
  {
    "id": "N01976",
    "title": "Invånare 0-19 och 65+, antal"
  },
  {
    "id": "N01977",
    "title": "Invånare 20-24 år, antal"
  },
  {
    "id": "N01978",
    "title": "Invånare 25-34 år, antal"
  },
  {
    "id": "N01979",
    "title": "Invånare 35-44 år, antal"
  },
  {
    "id": "N01980",
    "title": "Invånare 45-54 år, antal"
  },
  {
    "id": "N01981",
    "title": "Invånare 55-64 år, antal"
  },
  {
    "id": "N01982",
    "title": "Invånare 25-64 år med eftergymnasial utbildning, andel (%)"
  },
  {
    "id": "N01983",
    "title": "Invånare 25-64 år med gymnasial utbildning, andel (%)"
  },
  {
    "id": "N01984",
    "title": "Invånare 25-64 år med förgymnasial utbildning, andel (%)"
  },
  {
    "id": "N01985",
    "title": "Invånare 25-64 år med uppgift om utbildningsnivå saknas, andel (%)"
  },
  {
    "id": "N01986",
    "title": "Kommunmottagna i flyktingmottagandet med uppehållstillstånd, antal"
  },
  {
    "id": "N01987",
    "title": "Kommunmottagna i flyktingmottagandet efter anvisning med uppehållstillstånd, antal"
  },
  {
    "id": "N01990",
    "title": "Asylsökande/inskrivna i Migrationsverkets mottagningssystem, antal"
  },
  {
    "id": "N01991",
    "title": "Asylsökande/inskrivna i Migrationsverkets mottagningssystem, antal i ABO"
  },
  {
    "id": "N01992",
    "title": "Asylsökande/inskrivna i Migrationsverkets mottagningssystem, antal i EBO"
  },
  {
    "id": "N01993",
    "title": "Asylsökande/inskrivna i Migrationsverkets mottagningssystem, antal/1000 inv"
  },
  {
    "id": "N01994",
    "title": "Invånare 0-19 år, andel (%)"
  },
  {
    "id": "N01995",
    "title": "Asylsökande/inskrivna i Migrationsverkets mottagningssystem, antal i övrigt boende"
  },
  {
    "id": "N01996",
    "title": "Kommunmottagna i flyktingmottagandet med uppehållstillstånd 0-5 år, antal"
  },
  {
    "id": "N01997",
    "title": "Kommunmottagna i flyktingmottagandet med uppehållstillstånd 6-15 år, antal"
  },
  {
    "id": "N01998",
    "title": "Kommunmottagna i flyktingmottagandet med uppehållstillstånd 16-17 år, antal"
  },
  {
    "id": "N01999",
    "title": "Kommunmottagna i flyktingmottagandet med uppehållstillstånd 18-19 år, antal"
  },
  {
    "id": "N02000",
    "title": "Kommunmottagna i flyktingmottagandet med uppehållstillstånd 20-64 år, antal"
  },
  {
    "id": "N02001",
    "title": "Kommunmottagna i flyktingmottagandet med uppehållstillstånd 65+ år, antal"
  },
  {
    "id": "N02002",
    "title": "Anvisade ensamkommande barn, antal"
  },
  {
    "id": "N02003",
    "title": "Invånare 85+, andel (%)"
  },
  {
    "id": "N02004",
    "title": "Invånare 90+, andel (%)"
  },
  {
    "id": "N02005",
    "title": "Invånare 95+, andel (%)"
  },
  {
    "id": "N02006",
    "title": "Kommunmottagna i flyktingmottagandet med uppehållstillstånd, antal/1000 inv"
  },
  {
    "id": "N02010",
    "title": "Lungcancer, dödlighet, 15 år+, antal/100 000 inv"
  },
  {
    "id": "N02797",
    "title": "Invånare 16-24 som varken arbetar eller studerar, andel (%)"
  },
  {
    "id": "N02798",
    "title": "Invånare 25-29 som varken studerar eller arbetar, andel (%)"
  },
  {
    "id": "N02799",
    "title": "Födda barn, antal per 1000 invånare"
  },
  {
    "id": "N02890",
    "title": "Personer 20-64 som fått arbetslöshetsersättning någon period under året, andel (%)"
  },
  {
    "id": "N02900",
    "title": "Utrikes födda invånare 0-19 år, andel (%)"
  },
  {
    "id": "N02901",
    "title": "Invånare 0-19 år med föräldrar som har högst grundskoleutbildning, andel (%)"
  },
  {
    "id": "N02902",
    "title": "Invånare 0-19 år med minst en långtidsarbetslös förälder, andel (%)"
  },
  {
    "id": "N02903",
    "title": "Invånare 0-19 år med minst en förälder med sjuk- eller aktivitetsersättning, andel (%)"
  },
  {
    "id": "N02904",
    "title": "Invånare 0-19 år i ekonomiskt utsatta hushåll, andel (%)"
  },
  {
    "id": "N02905",
    "title": "Invånare 15-17 år lagförda för brott, antal/1000 inv"
  },
  {
    "id": "N02906",
    "title": "Invånare 17-24 år som varken arbetar eller studerar, andel (%)"
  },
  {
    "id": "N02907",
    "title": "Framskrivning, förväntat antal invånare om 5 år"
  },
  {
    "id": "N02908",
    "title": "Framskrivning, förväntat antal invånare 0-5 år om 5 år"
  },
  {
    "id": "N02909",
    "title": "Framskrivning, förväntat antal invånare 6-15 år om 5 år"
  },
  {
    "id": "N02910",
    "title": "Framskrivning, förväntat antal invånare 16-19 år om 5 år"
  },
  {
    "id": "N02911",
    "title": "Framskrivning, förväntat antal invånare 20-64 år om 5 år"
  },
  {
    "id": "N02912",
    "title": "Framskrivning, förväntat antal invånare 65+ om 5 år"
  },
  {
    "id": "N02913",
    "title": "Framskrivning, förväntat antal invånare 65-79 år om 5 år"
  },
  {
    "id": "N02914",
    "title": "Framskrivning, förväntat antal invånare 80+ om 5 år"
  },
  {
    "id": "N02915",
    "title": "Framskrivning, förväntad förändring i antal invånare kommande 5 år, (%)"
  },
  {
    "id": "N02916",
    "title": "Framskrivning, förväntad förändring i antal invånare 0-5 år kommande 5 år, (%)"
  },
  {
    "id": "N02917",
    "title": "Framskrivning, förväntad förändring i antal invånare 6-15 år kommande 5 år, (%)"
  },
  {
    "id": "N02918",
    "title": "Framskrivning, förväntad förändring i antal invånare 16-19 år kommande 5 år, (%)"
  },
  {
    "id": "N02919",
    "title": "Framskrivning, förväntad förändring i antal invånare 20-64 år kommande 5 år, (%)"
  },
  {
    "id": "N02920",
    "title": "Framskrivning, förväntad förändring i antal invånare 65+ kommande 5 år, (%)"
  },
  {
    "id": "N02921",
    "title": "Framskrivning, förväntad förändring i antal invånare 65-79 kommande 5 år, (%)"
  },
  {
    "id": "N02922",
    "title": "Framskrivning, förväntad förändring i antal invånare 80+ kommande 5 år, (%)"
  },
  {
    "id": "N02923",
    "title": "Kvinnor i befolkningen kommun, andel (%)"
  },
  {
    "id": "N02924",
    "title": "Framskrivning, förväntad försörjningskvot om 5 år"
  },
  {
    "id": "N02925",
    "title": "Utrikes födda exklusive EU/EFTA, andel (%)"
  },
  {
    "id": "N02926",
    "title": "Utrikes födda, andel (%)"
  },
  {
    "id": "N02927",
    "title": "Inflyttade till kommunen 0-5 år, antal"
  },
  {
    "id": "N02928",
    "title": "Inflyttade till kommunen 6-19 år, antal"
  },
  {
    "id": "N02929",
    "title": "Inflyttade till kommunen 20-64 år, antal"
  },
  {
    "id": "N02930",
    "title": "Inflyttade till kommunen 65-79 år, antal"
  },
  {
    "id": "N02931",
    "title": "Inflyttade till kommunen 80+ år, antal"
  },
  {
    "id": "N02932",
    "title": "Utflyttade från kommunen 0-5 år, antal"
  },
  {
    "id": "N02933",
    "title": "Utflyttade från kommunen 6-19 år, antal"
  },
  {
    "id": "N02934",
    "title": "Utflyttade från kommunen 20-64 år, antal"
  },
  {
    "id": "N02935",
    "title": "Utflyttade från kommunen 65-79 år, antal"
  },
  {
    "id": "N02936",
    "title": "Utflyttade från kommunen 80+ år, antal"
  },
  {
    "id": "N02937",
    "title": "Invånare per kvadratkilometer, inv./antal"
  },
  {
    "id": "N02938",
    "title": "Hushåll, antal"
  },
  {
    "id": "N02939",
    "title": "Ensamstående hushåll, antal"
  },
  {
    "id": "N02940",
    "title": "Sammanboende hushåll, antal"
  },
  {
    "id": "N02941",
    "title": "Övriga hushåll, antal"
  },
  {
    "id": "N02942",
    "title": "Ensamstående hushåll, andel (%)"
  },
  {
    "id": "N02943",
    "title": "Sammanboende hushåll, andel (%)"
  },
  {
    "id": "N02944",
    "title": "Övriga hushåll, andel (%)"
  },
  {
    "id": "N02945",
    "title": "Asylsökande/inskrivna i Migrationsverkets mottagningssystem 0-6 år, antal"
  },
  {
    "id": "N02946",
    "title": "Asylsökande/inskrivna i Migrationsverkets mottagningssystem 7-15 år, antal"
  },
  {
    "id": "N02947",
    "title": "Asylsökande/inskrivna i Migrationsverkets mottagningssystem 16-17 år, antal"
  },
  {
    "id": "N02948",
    "title": "Asylsökande/inskrivna i Migrationsverkets mottagningssystem 18-19 år, antal"
  },
  {
    "id": "N02949",
    "title": "Asylsökande/inskrivna i Migrationsverkets mottagningssystem 20-64 år, antal"
  },
  {
    "id": "N02950",
    "title": "Asylsökande/inskrivna i Migrationsverkets mottagningssystem 65+ år, antal"
  },
  {
    "id": "N02951",
    "title": "Födda barn i kommunen, antal/1000 inv"
  },
  {
    "id": "N02952",
    "title": "Framskrivning, förväntad andel invånare 0-5 år om 5 år i kommunen, andel (%)"
  },
  {
    "id": "N02953",
    "title": "Framskrivning, förväntad andel invånare 6-15 år om 5 år i kommunen, andel (%)"
  },
  {
    "id": "N02954",
    "title": "Framskrivning, förväntad andel invånare 16-19 år om 5 år i kommunen, andel (%)"
  },
  {
    "id": "N02955",
    "title": "Framskrivning, förväntad andel invånare 0-19 år om 5 år i kommunen, andel (%)"
  },
  {
    "id": "N02956",
    "title": "Framskrivning, förväntad andel invånare 20-64 år om 5 år i kommunen, andel (%)"
  },
  {
    "id": "N02957",
    "title": "Framskrivning, förväntad andel invånare 65-79 år om 5 år i kommunen, andel (%)"
  },
  {
    "id": "N02958",
    "title": "Framskrivning, förväntad andel invånare 80+ år om 5 år i kommunen, andel (%)"
  },
  {
    "id": "N02959",
    "title": "Invånare 3-19 år, antal"
  },
  {
    "id": "N02961",
    "title": "Förvärvsarbetande inom jordbruk, skogsbruk och fiske, dagbefolkning, andel (%)"
  },
  {
    "id": "N02962",
    "title": "Förvärvsarbetande inom tillverkning och utvinning, dagbefolkning, andel (%)"
  },
  {
    "id": "N02963",
    "title": "Förvärvsarbetande inom energiförsörjning och miljöverksamhet, dagbefolkning, andel (%)"
  },
  {
    "id": "N02964",
    "title": "Förvärvsarbetande inom byggverksamhet, dagbefolkning, andel (%)"
  },
  {
    "id": "N02965",
    "title": "Förvärvsarbetande inom handel, dagbefolkning, andel (%)"
  },
  {
    "id": "N02966",
    "title": "Förvärvsarbetande inom transport och magasinering, dagbefolkning, andel (%)"
  },
  {
    "id": "N02967",
    "title": "Förvärvsarbetande inom hotell- och restaurangverksamhet, dagbefolkning, andel (%)"
  },
  {
    "id": "N02968",
    "title": "Förvärvsarbetande inom information och kommunikation, dagbefolkning, andel (%)"
  },
  {
    "id": "N02969",
    "title": "Förvärvsarbetande inom finans- och försäkringsverksamhet, dagbefolkning, andel (%)"
  },
  {
    "id": "N02970",
    "title": "Förvärvsarbetande inom fastighetsverksamhet, dagbefolkning, andel (%)"
  },
  {
    "id": "N02971",
    "title": "Förvärvsarbetande inom företagstjänster, dagbefolkning, andel (%)"
  },
  {
    "id": "N02972",
    "title": "Förvärvsarbetande inom offentlig förvaltning och försvar, dagbefolkning, andel (%)"
  },
  {
    "id": "N02973",
    "title": "Förvärvsarbetande inom utbildning, dagbefolkning, andel (%)"
  },
  {
    "id": "N02974",
    "title": "Förvärvsarbetande inom vård och omsorg, sociala tjänster, dagbefolkning, andel (%)"
  },
  {
    "id": "N02975",
    "title": "Förvärvsarbetande inom kulturella och personliga tjänster m.m., dagbefolkning, andel (%)"
  },
  {
    "id": "N02976",
    "title": "Förvärvsarbetande inom okänd verksamhet, dagbefolkning, andel (%)"
  },
  {
    "id": "N02977",
    "title": "Förvärvsarbetande inom jordbruk, skogsbruk och fiske, nattbefolkning, andel (%)"
  },
  {
    "id": "N02978",
    "title": "Förvärvsarbetande inom tillverkning och utvinning, nattbefolkning, andel (%)"
  },
  {
    "id": "N02979",
    "title": "Förvärvsarbetande inom energiförsörjning och miljöverksamhet, nattbefolkning, andel (%)"
  },
  {
    "id": "N02980",
    "title": "Förvärvsarbetande inom byggverksamhet, nattbefolkning, andel (%)"
  },
  {
    "id": "N02981",
    "title": "Förvärvsarbetande inom handel, nattbefolkning, andel (%)"
  },
  {
    "id": "N02982",
    "title": "Förvärvsarbetande inom transport och magasinering, nattbefolkning, andel (%)"
  },
  {
    "id": "N02983",
    "title": "Förvärvsarbetande inom hotell- och restaurangverksamhet, nattbefolkning, andel (%)"
  },
  {
    "id": "N02984",
    "title": "Förvärvsarbetande inom information och kommunikation, nattbefolkning, andel (%)"
  },
  {
    "id": "N02985",
    "title": "Förvärvsarbetande inom finans- och försäkringsverksamhet, nattbefolkning, andel (%)"
  },
  {
    "id": "N02986",
    "title": "Förvärvsarbetande inom fastighetsverksamhet, nattbefolkning, andel (%)"
  },
  {
    "id": "N02987",
    "title": "Förvärvsarbetande inom företagstjänster, nattbefolkning, andel (%)"
  },
  {
    "id": "N02988",
    "title": "Förvärvsarbetande inom offentlig förvaltning och försvar, nattbefolkning, andel (%)"
  },
  {
    "id": "N02989",
    "title": "Förvärvsarbetande inom utbildning, nattbefolkning, andel (%)"
  },
  {
    "id": "N02990",
    "title": "Förvärvsarbetande inom vård och omsorg, sociala tjänster, nattbefolkning, andel (%)"
  },
  {
    "id": "N02991",
    "title": "Förvärvsarbetande inom kulturella och personliga tjänster m.m., nattbefolkning, andel (%)"
  },
  {
    "id": "N02992",
    "title": "Förvärvsarbetande inom okänd verksamhet, nattbefolkning, andel (%)"
  },
  {
    "id": "N02993",
    "title": "Landareal, kvadratkilometer"
  },
  {
    "id": "N02994",
    "title": "Förvärvsarbetande skyddsbehövande och anhöriga (flyktingar) 20-64 år, vistelsetid 4-6 år, andel (%)"
  },
  {
    "id": "N02995",
    "title": "Förvärvsarbetande skyddsbehövande och anhöriga (flyktingar) 20-64 år, vistelsetid 10+ år, andel (%)"
  },
  {
    "id": "N02996",
    "title": "Invånare 75+, andel (%)"
  },
  {
    "id": "N02997",
    "title": "Invånare 70+, andel (%)"
  },
  {
    "id": "N02998",
    "title": "Invånare 75+, antal"
  },
  {
    "id": "N02999",
    "title": "Invånare 70+, antal"
  },
  {
    "id": "N03001",
    "title": "Resultat före extraord. poster (kommunen), andel (%) av skatt & generella statsbidrag"
  },
  {
    "id": "N03002",
    "title": "Soliditet inkl pensionsåtag. kommun, (%)"
  },
  {
    "id": "N03003",
    "title": "Rörelsekapital kommun, kr/inv"
  },
  {
    "id": "N03004",
    "title": "Borgensförbindelser och övriga ansvarsförbindelser kommun, kr/inv"
  },
  {
    "id": "N03006",
    "title": "Försäljn. av anläggningstillg. som andel av skatt och generella statsbidrag kommun, (%)"
  },
  {
    "id": "N03007",
    "title": "Årets resultat kommun, kr/inv"
  },
  {
    "id": "N03008",
    "title": "Extraordinära poster kommunen, kr/inv"
  },
  {
    "id": "N03009",
    "title": "Generella statsbidrag och utjämning kommun, kr/inv"
  },
  {
    "id": "N03010",
    "title": "Skatteintäkter kommun, kr/inv"
  },
  {
    "id": "N03011",
    "title": "Verksamhetens nettokostnader enligt resultaträkningen kommun, kr/inv"
  },
  {
    "id": "N03012",
    "title": "Avskrivningar kommun, kr/inv"
  },
  {
    "id": "N03013",
    "title": "Verksamhetens kostnader totalt, kr/inv"
  },
  {
    "id": "N03014",
    "title": "Verksamhetens intäkter kommun, kr/inv"
  },
  {
    "id": "N03016",
    "title": "Självfinansieringsgrad för kommunens verksamhet, (%)"
  },
  {
    "id": "N03018",
    "title": "Extraordinära poster företagen, kr/inv"
  },
  {
    "id": "N03025",
    "title": "Sysselsättningsstöd, kr/inv (-2008)"
  },
  {
    "id": "N03026",
    "title": "Övriga bidrag från staten, kr/inv"
  },
  {
    "id": "N03028",
    "title": "Garanterat återbetalningsskydd kr/inv (-1998)"
  },
  {
    "id": "N03031",
    "title": "Nettokostnad som andel av skatt & generella statsbidrag kommunkoncern, (%)"
  },
  {
    "id": "N03032",
    "title": "Finansnetto som andel av skatt & generella statsbidrag kommunkoncern, (%)"
  },
  {
    "id": "N03033",
    "title": "Resultat före extraordinära poster (kommunkoncern), andel (%) av skatt & generella statsbidrag"
  },
  {
    "id": "N03034",
    "title": "Soliditet inkl pensionsåtag. kommunkoncern, (%)"
  },
  {
    "id": "N03035",
    "title": "Årets resultat kommunkoncern, kr/inv"
  },
  {
    "id": "N03036",
    "title": "Eget kapital kommunen, kr/inv"
  },
  {
    "id": "N03037",
    "title": "Borgensförbindelser och övriga ansvarsförbindelser inkl pensionsförpliktelser och löneskatt, kommun, kr/inv"
  },
  {
    "id": "N03038",
    "title": "Eget kapital kommunkoncern, kr/inv"
  },
  {
    "id": "N03039",
    "title": "Tillgångar totalt kommun, kr/inv"
  },
  {
    "id": "N03040",
    "title": "Skulder totalt kommun, kr/inv"
  },
  {
    "id": "N03041",
    "title": "Materiella & immateriella anläggningstillgångar kommunen, kr/inv"
  },
  {
    "id": "N03042",
    "title": "Finansiella anläggningstillgångar kommunen, kr/inv"
  },
  {
    "id": "N03043",
    "title": "Omsättningstillgångar kommunen, kr/inv"
  },
  {
    "id": "N03044",
    "title": "Avsättning för pensioner och löneskatt kommun, kr/inv"
  },
  {
    "id": "N03045",
    "title": "Andra avsättningar än pensioner och löneskatt kommun, kr/inv"
  },
  {
    "id": "N03046",
    "title": "Långfristiga skulder kommunen, kr/inv"
  },
  {
    "id": "N03047",
    "title": "Kortfristiga skulder kommunen, kr/inv"
  },
  {
    "id": "N03048",
    "title": "Pensionsförpl o löneskatt ej redov i balansräkning kommun, kr/inv"
  },
  {
    "id": "N03049",
    "title": "Tillgångar totalt kommunkoncern, kr/inv"
  },
  {
    "id": "N03050",
    "title": "Skulder totalt kommunkoncern, kr/inv"
  },
  {
    "id": "N03051",
    "title": "Materiella & immateriella anläggningstillgångar kommunkoncern, kr/inv"
  },
  {
    "id": "N03052",
    "title": "Finansiella anläggningstillgångar kommunkoncern, kr/inv"
  },
  {
    "id": "N03053",
    "title": "Omsättningstillgångar kommunkoncern, kr/inv"
  },
  {
    "id": "N03054",
    "title": "Avsättningar totalt kommunkoncern, kr/inv"
  },
  {
    "id": "N03055",
    "title": "Långfristiga skulder kommunkoncern, kr/inv"
  },
  {
    "id": "N03056",
    "title": "Kortfristiga skulder kommunkoncern, kr/inv"
  },
  {
    "id": "N03057",
    "title": "Extraordinära poster kommunkoncern, kr/inv"
  },
  {
    "id": "N03058",
    "title": "Verksamhetens nettokostnader enligt resultaträkningen kommunkoncern, kr/inv"
  },
  {
    "id": "N03059",
    "title": "Finansnetto kommunkoncern, kr/inv"
  },
  {
    "id": "N03060",
    "title": "Skatteintäkter och generella statsbidrag kommunkoncern, kr/inv"
  },
  {
    "id": "N03061",
    "title": "Verksamhetens intäkter kommunkoncern, kr/inv"
  },
  {
    "id": "N03062",
    "title": "Verksamhetens kostnader kommunkoncern, kr/inv"
  },
  {
    "id": "N03063",
    "title": "Avskrivningar kommunkoncern, kr/inv"
  },
  {
    "id": "N03064",
    "title": "LSS-utjämning kommunen, kr/inv"
  },
  {
    "id": "N03065",
    "title": "LSS-utjämning netto, kr/inv 1 nov fg år"
  },
  {
    "id": "N03066",
    "title": "Kostnad kommunens verksamhet totalt, kr/inv"
  },
  {
    "id": "N03067",
    "title": "Nettokostnad kommunens verksamhet totalt, kr/inv"
  },
  {
    "id": "N03068",
    "title": "Rörelsekapital kommunkoncern, kr/inv"
  },
  {
    "id": "N03100",
    "title": "Nettokostnad som andel av skatt och generella statsbidrag kommun, (%)"
  },
  {
    "id": "N03101",
    "title": "Finansnetto som andel av skatt och generella statsbidrag kommunen, (%)"
  },
  {
    "id": "N03102",
    "title": "Årets resultat som andel av skatt & generella statsbidrag kommun, (%)"
  },
  {
    "id": "N03103",
    "title": "Självfinansieringsgrad för kommunens investeringar, andel (%)"
  },
  {
    "id": "N03104",
    "title": "Nettoinvesteringar i kommunen, andel (%) av skatt & generella statsbidrag"
  },
  {
    "id": "N03105",
    "title": "Kassalikviditet kommunen, (%)"
  },
  {
    "id": "N03106",
    "title": "Soliditet kommun, (%)"
  },
  {
    "id": "N03107",
    "title": "Resultat före extraordinära poster kommunen, kr/inv"
  },
  {
    "id": "N03108",
    "title": "Finansnetto kommunen, kr/inv"
  },
  {
    "id": "N03109",
    "title": "Kassalikviditet kommunkoncern, (%)"
  },
  {
    "id": "N03110",
    "title": "Soliditet kommunkoncern, (%)"
  },
  {
    "id": "N03111",
    "title": "Resultat före extraordinära poster kommunkoncern, kr/inv"
  },
  {
    "id": "N03112",
    "title": "Årets resultat som andel av skatt & generella statsbidrag kommunkoncern, (%)"
  },
  {
    "id": "N03113",
    "title": "Avsättningar kommun, kr/inv"
  },
  {
    "id": "N03116",
    "title": "Aktier, andelar samt bostadsrätter i kommunens koncernföretag, kr/inv"
  },
  {
    "id": "N03117",
    "title": "Långfristiga fordringar kommun, kr/inv"
  },
  {
    "id": "N03118",
    "title": "Långfristiga fordringar i kommunens koncernföretag, kr/inv"
  },
  {
    "id": "N03120",
    "title": "Långfristiga skulder till koncernföretag, kr/inv"
  },
  {
    "id": "N03121",
    "title": "Borgen o andra förpliktelser gentemot kommunala bostadsföretag, kr/inv"
  },
  {
    "id": "N03122",
    "title": "Borgen o andra förpliktelser gentemot övriga kommunala företag, kr/inv"
  },
  {
    "id": "N03124",
    "title": "Finansiella intäkter kommunkoncern, kr/inv"
  },
  {
    "id": "N03125",
    "title": "Skulder och avsättningar kommunen, kr/inv"
  },
  {
    "id": "N03126",
    "title": "Skulder och avsättningar kommunkoncern, kr/inv"
  },
  {
    "id": "N03132",
    "title": "Nettoinvesteringar, totalt kommun, kr/inv"
  },
  {
    "id": "N03133",
    "title": "Ränta pensionsskuld kommun, kr/inv"
  },
  {
    "id": "N03135",
    "title": "Borgen o andra förplikt. gentemot övriga bostadsföretag/föreningar, kr/inv"
  },
  {
    "id": "N03136",
    "title": "Bidrag till statlig infrastruktur kommun, kr/inv"
  },
  {
    "id": "N03137",
    "title": "Bidrag till statlig infrastruktur kommunkoncern, kr/inv"
  },
  {
    "id": "N03139",
    "title": "Balanskravsresultat kommun, kr/inv"
  },
  {
    "id": "N03140",
    "title": "Aktier, andelar samt bostadsrätter kommun, kr/inv"
  },
  {
    "id": "N03141",
    "title": "Nettoinvesteringar exkl. finansiella investeringar kommun, kr/inv"
  },
  {
    "id": "N03142",
    "title": "Kostnad forskning och utveckling kommun, kr/inv"
  },
  {
    "id": "N03143",
    "title": "Resultat efter synnerliga skäl i kommun, kr/inv"
  },
  {
    "id": "N03144",
    "title": "Summa lån kommun, kr/inv"
  },
  {
    "id": "N03148",
    "title": "Investeringsutgifter kommunen totalt, kr/inv"
  },
  {
    "id": "N03149",
    "title": "Investeringsinkomster kommunen totalt, kr/inv"
  },
  {
    "id": "N03160",
    "title": "Investeringsutgifter inom vård och omsorg kommun, kr/inv"
  },
  {
    "id": "N03161",
    "title": "Investeringsutgifter inom utbildningsverksamhet kommun, kr/inv (-2017)"
  },
  {
    "id": "N03162",
    "title": "Investeringsutgifter inom infrastruktur, skydd mm kommun, kr/inv"
  },
  {
    "id": "N03163",
    "title": "Investeringsutgifter inom kultur- och fritidsverksamhet kommun, kr/inv"
  },
  {
    "id": "N03164",
    "title": "Investeringsutgifter inom politisk verksamhet kommun, kr/inv"
  },
  {
    "id": "N03165",
    "title": "Investeringsutgifter inom förskola, fritidshem och annan pedagogisk verksamhet kommun, kr/inv) (-2017)"
  },
  {
    "id": "N03166",
    "title": "Investeringsutgifter inom näringsliv och bostäder kommun, kr/inv"
  },
  {
    "id": "N03167",
    "title": "Investeringsutgifter inom särskilt riktade insatser kommun, kr/inv"
  },
  {
    "id": "N03168",
    "title": "Investeringsutgifter inom energi, vatten och avfall kommun, kr/inv"
  },
  {
    "id": "N03169",
    "title": "Investeringsutgifter inom kommunikationer kommun, kr/inv"
  },
  {
    "id": "N03700",
    "title": "Bruttoregionalprodukt (BRP), kr/inv"
  },
  {
    "id": "N03701",
    "title": "Bruttoregionalprodukt (BRP), kr/sysselsatt"
  },
  {
    "id": "N05001",
    "title": "Intäkter politisk verksamhet, kr/inv"
  },
  {
    "id": "N05002",
    "title": "Nettokostnad politisk verksamhet, kr/inv"
  },
  {
    "id": "N05003",
    "title": "Nettokostnad stöd till politiska partier, kr/inv"
  },
  {
    "id": "N05004",
    "title": "Nettokostnad revision, kr/inv"
  },
  {
    "id": "N05005",
    "title": "Nettokostnad övrig politisk verksamhet, kr/inv"
  },
  {
    "id": "N05006",
    "title": "Kostnad nämnd- och styrelseverksamhet, kr/inv"
  },
  {
    "id": "N05007",
    "title": "Kostnad stöd till politiska partier, kr/inv"
  },
  {
    "id": "N05008",
    "title": "Kostnad revision, kr/inv"
  },
  {
    "id": "N05009",
    "title": "Kostnad övr politisk verksamhet, kr/inv"
  },
  {
    "id": "N05010",
    "title": "Kostnad politisk verksamhet, kr/inv"
  },
  {
    "id": "N05011",
    "title": "Nettokostnad nämnd- och styrelseverksamhet, kr/inv"
  },
  {
    "id": "N05012",
    "title": "Nettoinvesteringar inom politisk verksamhet kommun, kr/inv (-2015)"
  },
  {
    "id": "N05013",
    "title": "Köp av politisk verksamhet, totalt, andel (%)"
  },
  {
    "id": "N05014",
    "title": "Gemensamma kostnader fördelade till politisk verksamhet, andel (%)"
  },
  {
    "id": "N05015",
    "title": "Nettokostnad, revision, tkr"
  },
  {
    "id": "N05016",
    "title": "Kostnad lön + PO, revision, tkr"
  },
  {
    "id": "N05017",
    "title": "Övriga kostnader, revision, tkr"
  },
  {
    "id": "N05018",
    "title": "Köp av verksamhet, revision, tkr"
  },
  {
    "id": "N05019",
    "title": "Nettokostnad, revision, promille av total verksamhetskostnad"
  },
  {
    "id": "N05020",
    "title": "Nettokostnad revision kommun, kr/inv"
  },
  {
    "id": "N05401",
    "title": "Valdeltagande i senaste kommunalvalet, andel (%)"
  },
  {
    "id": "N05402",
    "title": "Valdeltagande i senaste regionvalet, andel (%)"
  },
  {
    "id": "N05403",
    "title": "Valdeltagande i senaste riksdagsvalet, andel (%)"
  },
  {
    "id": "N05404",
    "title": "Valdeltagande i senaste europaparlamentsvalet, andel (%)"
  },
  {
    "id": "N05405",
    "title": "Revisionsberättelse utan anmärkning eller avstyrkt ansvarsfrihet kommun, (Ja=1, Nej=0)"
  },
  {
    "id": "N05406",
    "title": "Ansvarsprövning i KF utan anmärkning och med beviljad ansvarsfrihet för samtliga ledamöter, (Ja=1, Nej=0)"
  },
  {
    "id": "N05701",
    "title": "Förtroendevalda revisorer i kommunen, antal"
  },
  {
    "id": "N05801",
    "title": "Röster på Socialdemokraterna i senaste kommunvalet, andel (%)"
  },
  {
    "id": "N05802",
    "title": "Röster på Vänsterpartiet i senaste kommunvalet, andel (%)"
  },
  {
    "id": "N05803",
    "title": "Röster på Miljöpartiet i senaste kommunvalet, andel (%)"
  },
  {
    "id": "N05804",
    "title": "Röster på Sverigedemokraterna i senaste kommunvalet, andel (%)"
  },
  {
    "id": "N05805",
    "title": "Röster på Moderaterna i senaste kommunvalet, andel (%)"
  },
  {
    "id": "N05806",
    "title": "Röster på Liberalerna i senaste kommunvalet, andel (%)"
  },
  {
    "id": "N05807",
    "title": "Röster på Centerpartiet i senaste kommunvalet, andel (%)"
  },
  {
    "id": "N05808",
    "title": "Röster på Kristdemokraterna i senaste kommunvalet, andel (%)"
  },
  {
    "id": "N05809",
    "title": "Röster på övriga partier i senaste kommunvalet, andel (%)"
  },
  {
    "id": "N05810",
    "title": "Förtroendevalda kommunpolitiker på heltid, andel (%)"
  },
  {
    "id": "N05811",
    "title": "Förtroendevalda kommunpolitiker på deltid, andel (%)"
  },
  {
    "id": "N05812",
    "title": "Antal invånare per förtroendevald kommunpolitiker"
  },
  {
    "id": "N05813",
    "title": "Antal förtroendeuppdrag per förtroendevald kommunpolitiker"
  },
  {
    "id": "N05814",
    "title": "Kvinnor bland förtroendevalda kommunpolitiker, andel (%)"
  },
  {
    "id": "N05815",
    "title": "Kvinnor i kommunfullmäktige, andel (%)"
  },
  {
    "id": "N05816",
    "title": "Kvinnor på ordförandeposter i kommunen, andel (%)"
  },
  {
    "id": "N05817",
    "title": "Förtroendevalda kommunpolitiker i åldern 18-29 år, andel (%)"
  },
  {
    "id": "N05818",
    "title": "Förtroendevalda kommunpolitiker i åldern 30-49 år, andel (%)"
  },
  {
    "id": "N05819",
    "title": "Förtroendevalda kommunpolitiker i åldern 50-64 år, andel (%)"
  },
  {
    "id": "N05820",
    "title": "Förtroendevalda kommunpolitiker i åldern 65+, andel (%)"
  },
  {
    "id": "N05821",
    "title": "Kommunfullmäktigeledamöter i åldern 18-29 år, andel (%)"
  },
  {
    "id": "N05822",
    "title": "Kommunfullmäktigeledamöter i åldern 30-49 år, andel (%)"
  },
  {
    "id": "N05823",
    "title": "Kommunfullmäktigeledamöter i åldern 50-64 år, andel (%)"
  },
  {
    "id": "N05824",
    "title": "Kommunfullmäktigeledamöter i åldern 65+, andel (%)"
  },
  {
    "id": "N05825",
    "title": "Utrikes födda bland förtroendevalda kommunpolitiker, andel (%)"
  },
  {
    "id": "N05826",
    "title": "Utrikes födda i kommunfullmäktige, andel (%)"
  },
  {
    "id": "N05827",
    "title": "Medianbruttoinkomst kommunens förtroendevalda politiker, kr/person"
  },
  {
    "id": "N05828",
    "title": "Män på ordförandeposter i kommunen, andel (%)"
  },
  {
    "id": "N05829",
    "title": "Politiskt styre i kommunen (0=vänster, 1=blocköverskridande, 2=alliansstyre, 3=Övrigt Styre)"
  },
  {
    "id": "N05830",
    "title": "Förtroendevalda som hoppat av kommunfullmäktige, andel (%)"
  },
  {
    "id": "N05831",
    "title": "Valdistrikt med lägst valdeltagande i senaste kommunalval, andel (%)"
  },
  {
    "id": "N05832",
    "title": "Utrikes födda i kommunfullmäktige, balanstal"
  },
  {
    "id": "N05833",
    "title": "Valdistrikt med högst valdeltagande i senaste kommunalval, andel (%)"
  },
  {
    "id": "N07001",
    "title": "Kostnad fysisk o. teknisk planering, bostadsförbättringar, kr/inv"
  },
  {
    "id": "N07002",
    "title": "Kostnad konsument och energirådgivning, kr/inv"
  },
  {
    "id": "N07003",
    "title": "Kostnad turistverksamhet, kr/inv"
  },
  {
    "id": "N07004",
    "title": "Kostnad väg- och järnvägsnät, parkering, kr/inv"
  },
  {
    "id": "N07005",
    "title": "Kostnad parker, kr/inv"
  },
  {
    "id": "N07006",
    "title": "Kostnad miljö- och hälsoskydd, myndighetsutövning, kr/inv"
  },
  {
    "id": "N07007",
    "title": "Kostnad miljö, hälsa och hållbar utveckling, ej myndighetsutövning, kr/inv"
  },
  {
    "id": "N07008",
    "title": "Kostnad alkoholtillstånd m.m., kr/inv"
  },
  {
    "id": "N07009",
    "title": "Kostnad räddningstjänst, kr/inv"
  },
  {
    "id": "N07010",
    "title": "Kostnad totalförsvar och samhällsskydd, kr/inv"
  },
  {
    "id": "N07011",
    "title": "Intäkter infrastruktur, skydd mm, kr/inv"
  },
  {
    "id": "N07012",
    "title": "Intäkter fysisk o. teknisk planering, bostadsförbättringar, kr/inv"
  },
  {
    "id": "N07013",
    "title": "Intäkter konsument och energirådgivning, kr/inv"
  },
  {
    "id": "N07014",
    "title": "Intäkter turistverksamhet, kr/inv"
  },
  {
    "id": "N07015",
    "title": "Intäkter väg- och järnvägsnät, parkering, kr/inv"
  },
  {
    "id": "N07016",
    "title": "Intäkter parker, kr/inv"
  },
  {
    "id": "N07017",
    "title": "Intäkter miljö- och hälsoskydd, myndighetsutövning, kr/inv"
  },
  {
    "id": "N07018",
    "title": "Intäkter miljö hälsa och hållbar utveckling, kr/inv"
  },
  {
    "id": "N07019",
    "title": "Intäkter alkoholtillstånd m.m., kr/inv"
  },
  {
    "id": "N07020",
    "title": "Intäkter räddningstjänst, kr/inv"
  },
  {
    "id": "N07021",
    "title": "Intäkter totalförsvar och samhällsskydd, kr/inv"
  },
  {
    "id": "N07022",
    "title": "Nettokostnad konsument och energirådgivning, kr/inv"
  },
  {
    "id": "N07023",
    "title": "Nettokostnad turistverksamhet, kr/inv"
  },
  {
    "id": "N07024",
    "title": "Nettokostnad väg- och järnvägsnät, parkering, kr/inv"
  },
  {
    "id": "N07025",
    "title": "Nettokostnad parker, kr/inv"
  },
  {
    "id": "N07026",
    "title": "Nettokostnad miljö- och hälsoskydd, myndighetsutövning, kr/inv"
  },
  {
    "id": "N07027",
    "title": "Nettokostnad miljö hälsa och hållbar utveckling, kr/inv"
  },
  {
    "id": "N07028",
    "title": "Nettokostnad alkoholtillstånd m.m, kr/inv"
  },
  {
    "id": "N07029",
    "title": "Nettokostnad totalförsvar och samhällsskydd, kr/inv"
  },
  {
    "id": "N07030",
    "title": "Månadsavlönad personal, kommunalt anställda teknisk handläggare, antal"
  },
  {
    "id": "N07031",
    "title": "Månadsavlönad personal, kommunalt anställda ingenjörer, antal"
  },
  {
    "id": "N07032",
    "title": "Månadsavlönad personal, kommunalt anställda i räddningstjänstarbete, antal"
  },
  {
    "id": "N07033",
    "title": "Årsarbetare, kommunalt anställda teknisk handläggare, antal"
  },
  {
    "id": "N07034",
    "title": "Årsarbetare, kommunalt anställda ingenjörer, antal"
  },
  {
    "id": "N07035",
    "title": "Årsarbetare, kommunalt anställda i räddningstjänstarbete, antal"
  },
  {
    "id": "N07036",
    "title": "Kostnad infrastruktur, skydd mm, kr/inv"
  },
  {
    "id": "N07037",
    "title": "Nettokostnad infrastruktur, skydd m.m., kr/inv"
  },
  {
    "id": "N07038",
    "title": "Nettokostnad fysisk o. teknisk planering, bostadsförbättringar, kr/inv"
  },
  {
    "id": "N07039",
    "title": "Nettokostnad väg- och järnvägsnät, parkering samt parker, kr/inv"
  },
  {
    "id": "N07040",
    "title": "Nettokostnad miljö, hälsa, myndighetsutöv mm, kr/inv"
  },
  {
    "id": "N07041",
    "title": "Nettokostnad räddningstjänst, kr/inv"
  },
  {
    "id": "N07042",
    "title": "Nettoinvesteringar inom infrastruktur, skydd mm kommun, kr/inv (-2015)"
  },
  {
    "id": "N07043",
    "title": "Köp av infrastruktur, skydd mm. från privatägda företag, andel (%)"
  },
  {
    "id": "N07044",
    "title": "Köp av infrastruktur, skydd mm. från kommunägda företag, andel (%)"
  },
  {
    "id": "N07045",
    "title": "Köp av infrastruktur, skydd mm. från övriga motparter, andel (%)"
  },
  {
    "id": "N07046",
    "title": "Gemensamma kostnader fördelade till infrastruktur, skydd mm, andel (%)"
  },
  {
    "id": "N07400",
    "title": "Miljöbilar, andel av totalt antal bilar i det geografiska området, (%)"
  },
  {
    "id": "N07401",
    "title": "Anmälda misshandelsbrott mot kvinna, inomhus i nära relation med offret i kommunen, antal/100 000 inv"
  },
  {
    "id": "N07402",
    "title": "Anmälda brott om grov kvinnofridskränkning i kommunen, antal/100 000 inv"
  },
  {
    "id": "N07403",
    "title": "Anmälda våldsbrott, antal/100 000 inv"
  },
  {
    "id": "N07418",
    "title": "Befolkning i kollektivtrafiknära läge, andel (%)"
  },
  {
    "id": "N07494",
    "title": "Nöjd Region-Index - Trygg & säker mot inbrott i hemmet, medelbetyg (skala 0-10)"
  },
  {
    "id": "N07495",
    "title": "Nöjd Region-Index - Trygg & säker mot hot, rån och misshandel ,medelbetyg (skala 0-10)"
  },
  {
    "id": "N07496",
    "title": "Nöjd Region-Index - Trygg & säker utomhus på kvällar och nätter, medelbetyg (skala 0-10)"
  },
  {
    "id": "N07497",
    "title": "Nöjd Medborgar-index - Tillgång till gångvägar/cykelvägar, medelbetyg (skala 0-10)"
  },
  {
    "id": "N07498",
    "title": "Nöjd Medborgar-Index - Grönområden, parker och natur, medelbetyg (skala 0-10)"
  },
  {
    "id": "N07800",
    "title": "Köp av infrastruktur och skydd totalt, andel (%)"
  },
  {
    "id": "N07802",
    "title": "Bilväg i kommunen, kommunal, meter/inv."
  },
  {
    "id": "N07803",
    "title": "Cykelväg i kommunen, kommunal, meter/inv."
  },
  {
    "id": "N07804",
    "title": "Sjukhusrapporterade olyckor inom vägtransportområde, antal/100 000 inv."
  },
  {
    "id": "N07805",
    "title": "Bilväg i kommunen, total, meter/inv."
  },
  {
    "id": "N07806",
    "title": "Cykelväg i kommunen, total, meter/inv."
  },
  {
    "id": "N07810",
    "title": "Bil- och cykelväg i kommunen, kommunal, meter"
  },
  {
    "id": "N07811",
    "title": "Bilväg i kommunen, kommunal, meter"
  },
  {
    "id": "N07812",
    "title": "Cykelväg i kommunen, kommunal, meter"
  },
  {
    "id": "N07900",
    "title": "Tillgång till bredband om minst 100 Mbit/s, andel (%)"
  },
  {
    "id": "N07901",
    "title": "Bostäder med hyresrätter, antal/1000 inv"
  },
  {
    "id": "N07902",
    "title": "Bostäder med bostadsrätter, antal/1000 inv"
  },
  {
    "id": "N07903",
    "title": "Bostäder med äganderätter, antal/1000 inv"
  },
  {
    "id": "N07904",
    "title": "Bostäder där uppgift om upprättelseform saknas, antal/1000 inv"
  },
  {
    "id": "N07905",
    "title": "Färdigställda bostäder i småhus under året, antal/1000 inv"
  },
  {
    "id": "N07906",
    "title": "Färdigställda bostäder i flerfamiljshus under året, antal/1000 inv"
  },
  {
    "id": "N07907",
    "title": "Trångboddhet i flerbostadshus, enligt norm 2, andel (%)"
  },
  {
    "id": "N07908",
    "title": "Fastighetspris bostadsrätt, kr/kvm"
  },
  {
    "id": "N07909",
    "title": "Fastighetspris småhus, kr/kvm"
  },
  {
    "id": "N07910",
    "title": "Fastighetspris fritidshus, kr/kvm"
  },
  {
    "id": "N07911",
    "title": "Fritidshus, antal/1000 inv"
  },
  {
    "id": "N07912",
    "title": "Genomsnittlig boyta, kvm/inv"
  },
  {
    "id": "N07913",
    "title": "Bostäder totalt, antal/1000 inv."
  },
  {
    "id": "N07914",
    "title": "Trångboddhet i flerbostadshus, enligt norm 3, andel (%)"
  },
  {
    "id": "N07923",
    "title": "Planberedskap för nya bostäder som kan byggas med stöd av alla gällande detaljplaner den 31/12, antal/1000 inv"
  },
  {
    "id": "N07924",
    "title": "Bostäder som planlagts under två senaste åren, antal/1000 inv"
  },
  {
    "id": "N07925",
    "title": "Bostäder som beviljats bygglov under två senaste åren, antal/1000 inv"
  },
  {
    "id": "N07926",
    "title": "Mediantid från planuppdrag till antagande under de två senaste åren, mediantid i månader"
  },
  {
    "id": "N07927",
    "title": "Mediantid från samrådsstart till antagande under de två senaste åren, mediantid i månader"
  },
  {
    "id": "N09001",
    "title": "Kostnad musik och kulturskola, kr/inv 7-15 år"
  },
  {
    "id": "N09002",
    "title": "Kostnad allmän fritidsverksamhet, kr/inv"
  },
  {
    "id": "N09003",
    "title": "Kostnad idrotts- och fritidsanläggningar, kr/inv"
  },
  {
    "id": "N09004",
    "title": "Kostnad fritidsgårdar, kr/inv"
  },
  {
    "id": "N09005",
    "title": "Kostnad musik- och kulturskola, kr/inv"
  },
  {
    "id": "N09006",
    "title": "Kostnad stöd till studieorganistaioner, kr/inv"
  },
  {
    "id": "N09007",
    "title": "Kostnad allmän kulturverksamhet, kr/inv"
  },
  {
    "id": "N09008",
    "title": "Kostnad bibliotek, kr/inv"
  },
  {
    "id": "N09009",
    "title": "Intäkter fritidsverksamhet, kr/inv"
  },
  {
    "id": "N09010",
    "title": "Intäkter allmän fritidsverksamhet, kr/inv"
  },
  {
    "id": "N09011",
    "title": "Intäkter fritidsgårdar, kr/inv"
  },
  {
    "id": "N09012",
    "title": "Intäkter Idrotts- och fritidsanläggningar, kr/inv"
  },
  {
    "id": "N09013",
    "title": "Intäkter kulturverksamhet, kr/inv"
  },
  {
    "id": "N09014",
    "title": "Intäkter musik- och kulturskola, kr/inv"
  },
  {
    "id": "N09015",
    "title": "Intäkter stöd till studieorganisationer, kr/inv"
  },
  {
    "id": "N09016",
    "title": "Intäkter allmän kulturverksamhet, kr/inv"
  },
  {
    "id": "N09017",
    "title": "Intäkter bibliotek, kr/inv"
  },
  {
    "id": "N09018",
    "title": "Nettokostnad fritidsverksamhet, kr/inv"
  },
  {
    "id": "N09019",
    "title": "Nettokostnad allmän fritidsverksamhet, kr/inv"
  },
  {
    "id": "N09020",
    "title": "Nettokostnad fritidsgårdar, kr/inv"
  },
  {
    "id": "N09021",
    "title": "Nettokostnad Idrotts- och fritidsanläggningar, kr/inv"
  },
  {
    "id": "N09022",
    "title": "Nettokostnad kulturverksamhet, kr/inv"
  },
  {
    "id": "N09023",
    "title": "Nettokostnad musik- och kulturskola, kr/inv"
  },
  {
    "id": "N09024",
    "title": "Nettokostnad stöd till studieorganisationer, kr/inv"
  },
  {
    "id": "N09025",
    "title": "Nettokostnad allmän kulturverksamhet, kr/inv"
  },
  {
    "id": "N09026",
    "title": "Nettokostnad bibliotek, kr/inv"
  },
  {
    "id": "N09027",
    "title": "Månadsavlönad personal, kommunalt anställda fritidsledare, antal"
  },
  {
    "id": "N09028",
    "title": "Månadsavlönad personal, kommunalt anställda bibliotekarier, biblioteksassistenter, antal"
  },
  {
    "id": "N09029",
    "title": "Månadsavlönad personal, kommunalt anställda i övrig kultur, turism och friluftsliv, antal"
  },
  {
    "id": "N09030",
    "title": "Månadsavlönad personal, kommunalt anställda inom kultur och fritid, antal"
  },
  {
    "id": "N09031",
    "title": "Årsarbetare, kommunalt anställda fritidsledare, antal"
  },
  {
    "id": "N09032",
    "title": "Årsarbetare, kommunalt anställda bibliotekarier, biblioteksassistenter, antal"
  },
  {
    "id": "N09033",
    "title": "Årsarbetare, kommunalt anställda i övrig kultur, turism och friluftsliv, antal"
  },
  {
    "id": "N09034",
    "title": "Årsarbetare, kommunalt anställda inom kultur och fritid, antal"
  },
  {
    "id": "N09035",
    "title": "Anställda vid kommunala bibliotek, antal/10 000 inv"
  },
  {
    "id": "N09036",
    "title": "Nettoinvesteringar inom kultur- och fritidsverksamhet kommun, kr/inv (-2015)"
  },
  {
    "id": "N09040",
    "title": "Köp av kultur och fritid, totalt, andel (%)"
  },
  {
    "id": "N09041",
    "title": "Köp av kultur och fritid från privatägda företag, andel (%)"
  },
  {
    "id": "N09042",
    "title": "Gemensamma kostnader fördelade till kulturverksamhet, andel (%)"
  },
  {
    "id": "N09043",
    "title": "Gemensamma kostnader fördelade till fritidsverksamhet, andel (%)"
  },
  {
    "id": "N09100",
    "title": "Kostnad kulturverksamhet, kr/inv"
  },
  {
    "id": "N09101",
    "title": "Kostnad för kulturverksamhet, andel av total driftskostnad, (%)"
  },
  {
    "id": "N09102",
    "title": "Kostnad fritidsverksamhet, kr/inv"
  },
  {
    "id": "N09103",
    "title": "Kostnad för fritidsverksamhet, andel av total driftskostnad, (%)"
  },
  {
    "id": "N09104",
    "title": "Kostnad öppen fritidsverksamhet, kr/inv"
  },
  {
    "id": "N09200",
    "title": "Tillsvidareanställda månadsavlönade inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09201",
    "title": "Visstidsanställda månadsavlönade inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09202",
    "title": "Visstidsanställda timavlönade inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09203",
    "title": "Arbetad tid utförd av tillsvidareanställda månadsavlönade inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09204",
    "title": "Arbetad tid utförd av visstidsanställda månadsavlönade inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09205",
    "title": "Arbetad tid utförd av visstidsanställda timavlönade inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09206",
    "title": "Heltidsanställda månadsavlönade inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09207",
    "title": "Deltidsanställda (75-99 %) månadsavlönade inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09208",
    "title": "Deltidsanställda (1-74 %) månadsavlönade inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09209",
    "title": "Heltidsarbetande månadsavlönade inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09210",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09211",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09212",
    "title": "Anställda -34 år inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09213",
    "title": "Anställda 35-54 år inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09214",
    "title": "Anställda 55+ inom kultur och fritid, andel (%)"
  },
  {
    "id": "N09217",
    "title": "Anställda utrikes födda inom kultur och fritid, balanstal"
  },
  {
    "id": "N09218",
    "title": "Anställda 55+ år inom kultur och fritid, antal"
  },
  {
    "id": "N09701",
    "title": "Studieförbundens deltagartimmar inom kultur, antal/inv."
  },
  {
    "id": "N09801",
    "title": "Lån från kommunala bibliotek, antal/inv"
  },
  {
    "id": "N09802",
    "title": "Böcker i kommunala bibliotek, antal/inv"
  },
  {
    "id": "N09803",
    "title": "Lån av böcker kommunala bibliotek, antal/inv"
  },
  {
    "id": "N09804",
    "title": "Inköpta böcker till kommunala bibliotek, antal/1000 inv"
  },
  {
    "id": "N09805",
    "title": "Aktivitetstillfällen för barn och unga i kommunala bibliotek, antal/1000 inv 0-20 år"
  },
  {
    "id": "N09806",
    "title": "Kommunala bibliotek, antal/1000 inv."
  },
  {
    "id": "N09807",
    "title": "Fysiska besök vid kommunala bibliotek, antal/inv"
  },
  {
    "id": "N09808",
    "title": "Öppethållande huvudbiblioteket, timmar/vecka"
  },
  {
    "id": "N09809",
    "title": "Aktiva låntagare i kommunala bibliotek, antal/1000 inv."
  },
  {
    "id": "N09810",
    "title": "Lån av E-böcker i kommunala bibliotek, antal/inv."
  },
  {
    "id": "N09811",
    "title": "Barnbokslån i kommunala bibliotek, antal/barn 0-17 år"
  },
  {
    "id": "N09812",
    "title": "Summa av totala antalet öppettimmar av alla övriga biblioteksserviceställen, timmar/vecka"
  },
  {
    "id": "N09813",
    "title": "Tidningstitlar kommunala bibliotek, antal/1000 inv"
  },
  {
    "id": "N09815",
    "title": "Tidskriftstitlar kommunala bibliotek, antal/1000 inv"
  },
  {
    "id": "N09816",
    "title": "Bibliotek, antal"
  },
  {
    "id": "N09817",
    "title": "Genomsnittlig öppettid per bibliotek och vecka"
  },
  {
    "id": "N09887",
    "title": "Elever i kulturskolan, 6-19 år, antal"
  },
  {
    "id": "N09888",
    "title": "Elever i kulturskolan, 6-19 år, andel (%)"
  },
  {
    "id": "N09889",
    "title": "Elever i kulturskolan, 6-15 år, antal"
  },
  {
    "id": "N09890",
    "title": "Elever i kulturskolan, 6-15 år, andel (%)"
  },
  {
    "id": "N09891",
    "title": "Flickor i kulturskolan, 6-19 år, andel (%)"
  },
  {
    "id": "N09892",
    "title": "Genomsnittlig elevavgift musikskola & kulturskola, kr/elever 6-19 år"
  },
  {
    "id": "N10001",
    "title": "Kostnad förskola och skolbarnsomsorg, kr/inv"
  },
  {
    "id": "N10006",
    "title": "Kostnad förskola, fritidshem och pedagogisk omsorg, kr/inv 1-12 år"
  },
  {
    "id": "N10007",
    "title": "Kostnad förskola, fritidshem och pedagogisk omsorg, kr/inskrivet barn"
  },
  {
    "id": "N10013",
    "title": "Intäkter pedagogisk omsorg, kr/inv"
  },
  {
    "id": "N10015",
    "title": "Nettokostnad förskola och skolbarnsomsorg, kr/inv"
  },
  {
    "id": "N10016",
    "title": "Nettokostnad pedagogisk omsorg, kr/inv"
  },
  {
    "id": "N10021",
    "title": "Kostnad pedagogisk omsorg, kr/inv"
  },
  {
    "id": "N10022",
    "title": "Kostnad övrig barnomsorg, kr/inv (-2017)"
  },
  {
    "id": "N10023",
    "title": "Kostnad pedagogisk omsorg, kr/inv 1-12 år"
  },
  {
    "id": "N10024",
    "title": "Kostnad pedagogisk omsorg, kr/inskrivet barn"
  },
  {
    "id": "N10025",
    "title": "Månadsavlönad personal, kommunalt anställda förskollärare, antal"
  },
  {
    "id": "N10026",
    "title": "Månadsavlönad personal, kommunalt anställda i övrigt lärararbete, antal"
  },
  {
    "id": "N10027",
    "title": "Månadsavlönad personal, kommunalt anställda elevassistenter, antal"
  },
  {
    "id": "N10028",
    "title": "Månadsavlönad personal, kommunalt anställda inom förskola, fritidshem och pedagogisk omsorg, antal"
  },
  {
    "id": "N10029",
    "title": "Årsarbetare, kommunalt anställda förskollärare, antal"
  },
  {
    "id": "N10030",
    "title": "Årsarbetare, kommunalt anställda i övrigt lärararbete, antal"
  },
  {
    "id": "N10031",
    "title": "Årsarbetare, kommunalt anställda elevassistenter, antal"
  },
  {
    "id": "N10032",
    "title": "Årsarbetare, kommunalt anställda inom förskola, fritidshem och pedagogisk verksamhet, antal"
  },
  {
    "id": "N10036",
    "title": "Gemensamma kostnader fördelade till pedagogisk verksamhet totalt, andel (%)"
  },
  {
    "id": "N10037",
    "title": "Kostnad pedagogisk verksamhet, kr/inv"
  },
  {
    "id": "N10038",
    "title": "Nettokostnad pedagogisk verksamhet, kr/inv"
  },
  {
    "id": "N10103",
    "title": "Kostnad grundskola F-9, hemkommun, andel av total driftskostnad (%)"
  },
  {
    "id": "N10104",
    "title": "Kostnad gymnasieskola hemkommun, andel av total driftskostnad (%)"
  },
  {
    "id": "N10801",
    "title": "Köp av förskola, fritidshem och pedagogisk omsorg, andel (%)"
  },
  {
    "id": "N10804",
    "title": "Barn 1-12 år inskrivna i förskola, fritidshem och pedagogisk omsorg, andel  (%)"
  },
  {
    "id": "N10805",
    "title": "Barn 1-12 år inskrivna i pedagogisk omsorg, andel  (%)"
  },
  {
    "id": "N11002",
    "title": "Intäkter förskola, kr/inv"
  },
  {
    "id": "N11003",
    "title": "Nettokostnad öppen förskola, kr/inv"
  },
  {
    "id": "N11004",
    "title": "Nettokostnad förskola, kr/inv"
  },
  {
    "id": "N11005",
    "title": "Kostnad öppen förskola, kr/inv"
  },
  {
    "id": "N11006",
    "title": "Kostnad förskola, kr/inv"
  },
  {
    "id": "N11007",
    "title": "Kostnad förskola, kr/inv 1-5 år"
  },
  {
    "id": "N11008",
    "title": "Kostnad förskola, kr/inskrivet barn"
  },
  {
    "id": "N11009",
    "title": "Personalkostnad som andel av kostnaden för den kommunala förskolan, andel (%)"
  },
  {
    "id": "N11010",
    "title": "Inskrivna barn/årsarbetare kommunal förskola, antal"
  },
  {
    "id": "N11011",
    "title": "Inskrivna barn/årsarbetare fristående förskola, antal"
  },
  {
    "id": "N11012",
    "title": "Månadsavlönad personal, kommunalt anställda barnskötare, antal"
  },
  {
    "id": "N11013",
    "title": "Månadsavlönad personal, kommunalt anställda dagbarnvårdare, antal"
  },
  {
    "id": "N11014",
    "title": "Månadsavlönad personal, kommunalt anställda i övrigt skol- och förskolearbete, antal"
  },
  {
    "id": "N11015",
    "title": "Årsarbetare, kommunalt anställda barnskötare, antal"
  },
  {
    "id": "N11016",
    "title": "Årsarbetare, kommunalt anställda dagbarnvårdare, antal"
  },
  {
    "id": "N11017",
    "title": "Årsarbetare, kommunalt anställda i övrigt skol- och förskolearbete, antal"
  },
  {
    "id": "N11018",
    "title": "Årsarbetare i förskolan med pedagogisk högskoleexamen, andel (%) (-2013)"
  },
  {
    "id": "N11019",
    "title": "Standardkostnad förskoleverksamhet, kr/inv"
  },
  {
    "id": "N11020",
    "title": "Nettokostnad lokaler i kommunal förskola, kr/inskrivet barn"
  },
  {
    "id": "N11021",
    "title": "Köp av förskola och skolbarnomsorg från privatägda företag, andel (%)"
  },
  {
    "id": "N11022",
    "title": "Köp av förskola och skolbarnomsorg från föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N11023",
    "title": "Årsarbetare i förskolan med pedagogisk högskoleexamen, andel (%)"
  },
  {
    "id": "N11024",
    "title": "Nettokostnadsavvikelse förskola inkl. öppen förskola, (%)"
  },
  {
    "id": "N11025",
    "title": "Referenskostnad förskola inkl. öppen förskola, kr/inv"
  },
  {
    "id": "N11026",
    "title": "Åldersersättning förskola inkl. öppen förskola, kr/inv"
  },
  {
    "id": "N11027",
    "title": "Behovsnivå förskola inkl. öppen förskola, kr/inv"
  },
  {
    "id": "N11028",
    "title": "Produktionsförutsättningar inkl. öppen förskola förskola, kr/inv"
  },
  {
    "id": "N11029",
    "title": "Referenskostnadskvot förskola inkl. öppen förskola, index"
  },
  {
    "id": "N11031",
    "title": "Nettokostnad förskola inkl. öppen förskola, kr/inv"
  },
  {
    "id": "N11032",
    "title": "Kostnad kommunal förskola, kr/inskrivet barn"
  },
  {
    "id": "N11033",
    "title": "Bruttokostnad lokaler kommunal förskola, kr/inskrivet barn"
  },
  {
    "id": "N11034",
    "title": "Bruttokostnad personal kommunal förskola, kr/inskrivet barn"
  },
  {
    "id": "N11036",
    "title": "Gemensamma kostnader fördelade till förskola, andel (%)"
  },
  {
    "id": "N11037",
    "title": "Nettokostnad förskola, kr/inskrivet barn"
  },
  {
    "id": "N11038",
    "title": "Nettokostnadsavvikelse förskola inkl öppen förskola, miljoner kronor"
  },
  {
    "id": "N11102",
    "title": "Inskrivna barn per årsarbetare i förskolan, antal"
  },
  {
    "id": "N11200",
    "title": "Tillsvidareanställda månadsavlönade inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11201",
    "title": "Visstidsanställda månadsavlönade inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11202",
    "title": "Visstidsanställda timavlönade inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11203",
    "title": "Arbetad tid utförd av tillsvidareanställda månadsavlönade inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11204",
    "title": "Arbetad tid utförd av visstidsanställda månadsavlönade inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11205",
    "title": "Arbetad tid utförd av visstidsanställda timavlönade inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11206",
    "title": "Heltidsanställda månadsavlönade inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11207",
    "title": "Deltidsanställda (75-99 %) månadsavlönade inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11208",
    "title": "Deltidsanställda (1-74 %) månadsavlönade inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11209",
    "title": "Heltidsarbetande månadsavlönade inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11210",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11211",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11212",
    "title": "Anställda -34 år inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11213",
    "title": "Anställda 35-54 år inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11214",
    "title": "Anställda 55+ inom förskola och skolbarnomsorg, andel (%)"
  },
  {
    "id": "N11217",
    "title": "Anställda utrikes födda inom förskola och skolbarnomsorg, balanstal"
  },
  {
    "id": "N11218",
    "title": "Anställda 55+ år inom förskola och skolbarnomsorg, antal"
  },
  {
    "id": "N11800",
    "title": "Barn 1-5 år inskrivna i förskola, andel (%)"
  },
  {
    "id": "N11801",
    "title": "Barn 1-5 år inskrivna i förskola och pedagogisk omsorg, andel (%)"
  },
  {
    "id": "N11802",
    "title": "Förskolebarn i fristående förskola och ped. omsorg, andel  (%)"
  },
  {
    "id": "N11803",
    "title": "Barn 1-5 år inskrivna i pedagogisk omsorg, andel (%) av barn 1-5 år inskrivna i förskola och pedagogisk omsorg"
  },
  {
    "id": "N11804",
    "title": "Elever i förskoleklass, lägeskommun, antal"
  },
  {
    "id": "N11805",
    "title": "Elever i förskoleklass i kommunal grundskola, lägeskommun, antal"
  },
  {
    "id": "N11806",
    "title": "Elever i förskoleklass i fristående grundskola, lägeskommun, antal"
  },
  {
    "id": "N11807",
    "title": "Elever i förskola, hemkommun, antal"
  },
  {
    "id": "N11808",
    "title": "Heltidstjänster med förskollärarlegitimation, lägeskommun, andel (%)"
  },
  {
    "id": "N11809",
    "title": "Heltidstjänster med förskollärarlegitimation, enskild regi, andel (%)"
  },
  {
    "id": "N11810",
    "title": "Heltidstjänster med förskollärarlegitimation, kommunal regi, andel (%)"
  },
  {
    "id": "N11811",
    "title": "Personal i förskola med förskollärarlegitimation, lägeskommun, antal barn/årsarbetare"
  },
  {
    "id": "N11812",
    "title": "Personal i förskola med förskollärarlegitimation, enskild regi, antal barn/årsarbetare"
  },
  {
    "id": "N11813",
    "title": "Personal i förskola med förskollärarlegitimation, kommunal regi, antal barn/årsarbetare"
  },
  {
    "id": "N13001",
    "title": "Intäkter fritidshem, kr/inv"
  },
  {
    "id": "N13002",
    "title": "Intäkter öppen fritidsverksamhet, kr/inv"
  },
  {
    "id": "N13003",
    "title": "Nettokostnad öppen fritidsverksamhet, kr/inv"
  },
  {
    "id": "N13004",
    "title": "Nettokostnad fritidshem, kr/inv"
  },
  {
    "id": "N13006",
    "title": "Kostnad fritidshem, kr/inv"
  },
  {
    "id": "N13007",
    "title": "Kostnad fritidshem, kr/inv 6-12 år"
  },
  {
    "id": "N13008",
    "title": "Kostnad fritidshem, kr/inskrivet barn"
  },
  {
    "id": "N13009",
    "title": "Personalkostnad som andel av kostnaden för kommunala fritidshem, andel (%)"
  },
  {
    "id": "N13011",
    "title": "Månadsavlönad personal, kommunalt anställda lärare i fritidshem, antal"
  },
  {
    "id": "N13012",
    "title": "Årsarbetare, kommunalt anställda lärare i fritidshem, antal"
  },
  {
    "id": "N13014",
    "title": "Inskrivna barn/årsarbetare i fritidshem, antal"
  },
  {
    "id": "N13015",
    "title": "Årsarbetare i fritidshem med pedagogisk högskoleexamen, andel (%)"
  },
  {
    "id": "N13020",
    "title": "Nettokostnadsavvikelse fritidshem inkl. öppen fritidsverksamhet, (%)"
  },
  {
    "id": "N13021",
    "title": "Referenskostnad fritidshem inkl. öppen fritidsverksamhet, kr/inv"
  },
  {
    "id": "N13022",
    "title": "Åldersersättning fritidshem inkl. öppen fritidsverksamhet, kr/inv"
  },
  {
    "id": "N13023",
    "title": "Behovsnivå fritidshem inkl. öppen fritidsverksamhet, kr/inv"
  },
  {
    "id": "N13024",
    "title": "Produktionsförutsättningar fritidshem inkl. öppen fritidsverksamhet, kr/inv"
  },
  {
    "id": "N13025",
    "title": "Referenskostnadskvot fritidshem inkl. öppen fritidsverksamhet, index"
  },
  {
    "id": "N13027",
    "title": "Nettokostnad fritidshem inkl. öppen fritidsverksamhet, kr/inv"
  },
  {
    "id": "N13028",
    "title": "Kostnad kommunalt fritidshem, kr/inskrivet barn"
  },
  {
    "id": "N13029",
    "title": "Bruttokostnad lokaler kommunalt fritidshem, kr/inskrivet barn"
  },
  {
    "id": "N13030",
    "title": "Kostnad personal kommunalt fritidshem, kr/inskrivet barn"
  },
  {
    "id": "N13031",
    "title": "Kostnad övrigt kommunalt fritidshem, kr/inskrivet barn"
  },
  {
    "id": "N13032",
    "title": "Nettokostnadsavvikelse fritidshem, inkl. öppen fritidsverksamhet, miljoner kronor"
  },
  {
    "id": "N13800",
    "title": "Barn 6-12 år inskrivna i fritidshem, andel  (%)"
  },
  {
    "id": "N13801",
    "title": "Elever i fritidshem, hemkommun, antal"
  },
  {
    "id": "N13802",
    "title": "Elever/anställd i fristående fritidshem, antal"
  },
  {
    "id": "N13803",
    "title": "Elever/anställd i kommunal fritidshem, antal"
  },
  {
    "id": "N13804",
    "title": "Elever/anställd (heltidstjänst) i fristående fritidshem, antal"
  },
  {
    "id": "N13805",
    "title": "Elever/anställd (heltidstjänst) i kommunal fritidshem, antal"
  },
  {
    "id": "N13890",
    "title": "Barn 6-9 år inskrivna i fritidshem och pedagogisk omsorg, andel (%)"
  },
  {
    "id": "N13891",
    "title": "Barn 10-12 år inskrivna i fritidshem och pedagogisk omsorg, andel (%)"
  },
  {
    "id": "N13900",
    "title": "Invånare 06-12 år, andel (%)"
  },
  {
    "id": "N15001",
    "title": "Nettokostnadsavvikelse grundskola F-9, (%)"
  },
  {
    "id": "N15003",
    "title": "Referenskostnadskvot grundskola  F-9, index"
  },
  {
    "id": "N15004",
    "title": "Kostnad grundskola åk 1-9, hemkommun, kr/inv"
  },
  {
    "id": "N15005",
    "title": "Kostnad förskoleklass, hemkommun, kr/elev"
  },
  {
    "id": "N15006",
    "title": "Kostnad grundskola åk 1-9, hemkommun, kr/elev"
  },
  {
    "id": "N15008",
    "title": "Kostnad för kommunal grundskola åk 1-9, kr/elev"
  },
  {
    "id": "N15009",
    "title": "Kostnad för lokaler i kommunal grundskola åk 1-9, kr/elev"
  },
  {
    "id": "N15010",
    "title": "Övriga kostnader i kommunal grundskola åk 1-9, kr/elev"
  },
  {
    "id": "N15011",
    "title": "Kostnad för undervisning i kommunal grundskola åk 1-9, kr/elev"
  },
  {
    "id": "N15012",
    "title": "Kostnad för lärverktyg i kommunal grundskola åk 1-9, kr/elev"
  },
  {
    "id": "N15013",
    "title": "Kostnad för måltider i kommunal grundskola åk 1-9, kr/elev"
  },
  {
    "id": "N15014",
    "title": "Kostnad elevhälsa i kommunal grundskola åk 1-9, kr/elev"
  },
  {
    "id": "N15015",
    "title": "Nettokostnad förskoleklass, kr/inv"
  },
  {
    "id": "N15016",
    "title": "Nettokostnad grundskola åk 1-9, kr/inv"
  },
  {
    "id": "N15018",
    "title": "Referenskostnad grundskola F-9, kr/inv"
  },
  {
    "id": "N15020",
    "title": "Kostnad förskoleklass, hemkommun, kr/inv"
  },
  {
    "id": "N15021",
    "title": "Månadsavlönad personal, kommunalt anställda grundskollärare, antal"
  },
  {
    "id": "N15022",
    "title": "Månadsavlönad personal, kommunalt anställda inom grundskola inkl förskoleklass, antal"
  },
  {
    "id": "N15023",
    "title": "Årsarbetare, kommunalt anställda grundskollärare, antal"
  },
  {
    "id": "N15024",
    "title": "Årsarbetare, kommunalt anställda inom grundskola F-9, antal"
  },
  {
    "id": "N15025",
    "title": "Kostnad grundskola F-9, hemkommun, kr/inv"
  },
  {
    "id": "N15027",
    "title": "Kostnad grundskola F-9, hemkommun, kr/elev"
  },
  {
    "id": "N15028",
    "title": "Nettokostnad grundskola F-9, kr/inv"
  },
  {
    "id": "N15029",
    "title": "Standardkostnad grundskola F-9, kr/inv"
  },
  {
    "id": "N15030",
    "title": "Lärare med pedagogisk högskoleexamen i grundskola åk 1-9, lägeskommun, (%)"
  },
  {
    "id": "N15031",
    "title": "Lärare med pedagogisk högskoleexamen i kommunal grundskola åk 1-9, andel (%)"
  },
  {
    "id": "N15032",
    "title": "Lärare med pedagogisk högskoleexamen, fristående grundskola åk 1-9, andel (%)"
  },
  {
    "id": "N15033",
    "title": "Elever/lärare (årsarbetare) i grundskola åk 1-9, lägeskommun, antal"
  },
  {
    "id": "N15034",
    "title": "Elever/lärare (årsarbetare) i kommunal grundskola åk 1-9, lägeskommun, antal"
  },
  {
    "id": "N15035",
    "title": "Elever/lärare (årsarbetare), fristående grundskola åk 1-9, lägeskommun, antal"
  },
  {
    "id": "N15040",
    "title": "Köp av grundskola F-9, totalt, andel (%)"
  },
  {
    "id": "N15042",
    "title": "Köp av grundskola F-9 från privatägda företag, andel (%)"
  },
  {
    "id": "N15044",
    "title": "Köp av grundskola F-9 från föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N15045",
    "title": "Nettokostnadsavvikelse grundskola F-9, miljoner kronor"
  },
  {
    "id": "N15046",
    "title": "Köp av grundskola F-9 från andra kommuner, andel (%)"
  },
  {
    "id": "N15047",
    "title": "Gemensamma kostnader fördelade till förskoleklass, andel (%)"
  },
  {
    "id": "N15050",
    "title": "Åldersersättning grundskola inkl. förskoleklass, kr/inv"
  },
  {
    "id": "N15051",
    "title": "Behovsnivå grundskola inkl. förskoleklass, kr/inv"
  },
  {
    "id": "N15052",
    "title": "Produktionsförutsättningar grundskola inkl. förskoleklass, kr/inv"
  },
  {
    "id": "N15053",
    "title": "Kostnad kommunal förskoleklass, kr/elev"
  },
  {
    "id": "N15054",
    "title": "Kostnad lokaler kommunal förskoleklass, kr/elev"
  },
  {
    "id": "N15055",
    "title": "Kostnad personal kommunal förskoleklass, kr/elev"
  },
  {
    "id": "N15056",
    "title": "Kostnad övrigt kommunal förskoleklass, kr/elev"
  },
  {
    "id": "N15057",
    "title": "Gemensamma kostnader fördelade till grundskola, andel (%)"
  },
  {
    "id": "N15058",
    "title": "Referenskostnad grundskola F-9, kr/elev"
  },
  {
    "id": "N15060",
    "title": "Kostnad kommunal grundskola F-9, kr/elev"
  },
  {
    "id": "N15061",
    "title": "Kostnad för lokaler i kommunal grundskola F-9, kr/elev"
  },
  {
    "id": "N15062",
    "title": "Kostnad för undervisning i kommunal grundskola F-9, kr/elev"
  },
  {
    "id": "N15063",
    "title": "Övriga kostnader i kommunal grundskola F-9, kr/elev"
  },
  {
    "id": "N15100",
    "title": "Elever/lärare (årsarbetare) i grundskola F-9, antal"
  },
  {
    "id": "N15200",
    "title": "Tillsvidareanställda månadsavlönade inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15201",
    "title": "Visstidsanställda månadsavlönade inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15202",
    "title": "Visstidsanställda timavlönade inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15203",
    "title": "Arbetad tid utförd av tillsvidareanställda månadsavlönade inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15204",
    "title": "Arbetad tid utförd av visstidsanställda månadsavlönade inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15205",
    "title": "Arbetad tid utförd av visstidsanställda timavlönade inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15206",
    "title": "Heltidsanställda månadsavlönade inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15207",
    "title": "Deltidsanställda (75-99 %) månadsavlönade inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15208",
    "title": "Deltidsanställda (1-74 %) månadsavlönade inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15209",
    "title": "Heltidsarbetande månadsavlönade inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15210",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15211",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15212",
    "title": "Anställda -34 år inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15213",
    "title": "Anställda 35-54 år inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15214",
    "title": "Anställda 55+ inom grundskola inkl. förskoleklass, andel (%)"
  },
  {
    "id": "N15217",
    "title": "Anställda utrikes födda inom grundskola inkl. förskoleklass, balanstal"
  },
  {
    "id": "N15218",
    "title": "Anställda 55+ år inom grundskola inkl. förskoleklass, antal"
  },
  {
    "id": "N15401",
    "title": "Elever i år 9, meritvärde fristående skolor i kommunen, genomsnitt (16 ämnen) (-2018)"
  },
  {
    "id": "N15403",
    "title": "Elever i år 9, meritvärde kommunala skolor, genomsnitt (16 ämnen) (-2018)"
  },
  {
    "id": "N15418",
    "title": "Elever i år 9 som uppnått kunskapskraven i alla ämnen, lägeskommun, andel (%)"
  },
  {
    "id": "N15419",
    "title": "Elever i år 9 som uppnått kunskapskraven i alla ämnen, kommunala skolor,  andel (%)"
  },
  {
    "id": "N15420",
    "title": "Elever i år 9 som uppnått kunskapskraven i alla ämnen, fristående skolor,  andel (%)"
  },
  {
    "id": "N15421",
    "title": "Elever i år 9 som är behöriga till naturvetenskaps- och teknikprogrammen, lägeskommun, andel (%)"
  },
  {
    "id": "N15422",
    "title": "Elever i år 9 som är behöriga till ekonomi-, humanistiska och samhällsvetenskapsprogrammen, lägeskommun, andel (%)"
  },
  {
    "id": "N15423",
    "title": "Elever i år 9 som är behöriga till estetiska programmet, lägeskommun, andel (%)"
  },
  {
    "id": "N15424",
    "title": "Elever i år 9 som är behöriga till yrkesprogram, lägeskommun, andel (%)"
  },
  {
    "id": "N15425",
    "title": "Elever i åk 9 som är behöriga till naturvetenskaps- och teknikprogrammen, hemkommun,  andel (%)"
  },
  {
    "id": "N15426",
    "title": "Elever i åk 9 som är behöriga till ekonomi-, humanistiska och samhällsvetenskapsprogrammen, hemkommun,  andel (%)"
  },
  {
    "id": "N15427",
    "title": "Elever i åk 9 som är behöriga till estetiska programmet, hemkommun,  andel (%)"
  },
  {
    "id": "N15428",
    "title": "Elever i åk 9 som är behöriga till yrkesprogram, hemkommun, andel (%)"
  },
  {
    "id": "N15429",
    "title": "Elever i år 9 som är behöriga till naturvetenskaps- och teknikprogrammen, fristående skolor,  andel (%)"
  },
  {
    "id": "N15430",
    "title": "Elever i år 9 som är behöriga till ekonomi-, humanistiska och samhällsvetenskapsprogrammen, fristående skolor,  andel (%)"
  },
  {
    "id": "N15431",
    "title": "Elever i år 9 som är behöriga till estetiska programmet, fristående skolor,  andel (%)"
  },
  {
    "id": "N15432",
    "title": "Elever i år 9 som är behöriga till yrkesprogram, fristående skolor,  andel (%)"
  },
  {
    "id": "N15433",
    "title": "Elever i år 9 som är behöriga till naturvetenskaps- och teknikprogrammen, kommunala skolor,  andel (%)"
  },
  {
    "id": "N15434",
    "title": "Elever i år 9 som är behöriga till ekonomi-, humanistiska och samhällsvetenskapsprogrammen, kommunala skolor,  andel (%)"
  },
  {
    "id": "N15435",
    "title": "Elever i år 9 som är behöriga till estetiska programmet, kommunala skolor,  andel (%)"
  },
  {
    "id": "N15436",
    "title": "Elever i åk 9 som är behöriga till yrkesprogram, kommunala skolor,  andel (%)"
  },
  {
    "id": "N15443",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesprovet i svenska och svenska som andraspråk, lägeskommun, andel (%)"
  },
  {
    "id": "N15444",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesprovet i matematik, lägeskommun, andel (%)"
  },
  {
    "id": "N15446",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesproven i SV, Sv2 och MA, lägeskommun, genomsnittlig andel (%)"
  },
  {
    "id": "N15447",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesprovet i svenska, lägeskommun, andel (%)"
  },
  {
    "id": "N15449",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesprovet i svenska (ej svenska som andraspråk), fristående skolor, andel (%)"
  },
  {
    "id": "N15450",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesprovet i svenska (ej svenska som andraspråk), kommunala skolor, andel (%)"
  },
  {
    "id": "N15451",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesprovet i svenska och svenska som andraspråk, fristående skolor, andel (%)"
  },
  {
    "id": "N15452",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesprovet i svenska och svenska som andraspråk, kommunala skolor, andel (%)"
  },
  {
    "id": "N15453",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesprovet i matematik, fristående skolor, andel (%)"
  },
  {
    "id": "N15454",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesprovet i matematik, kommunala skolor, andel (%)"
  },
  {
    "id": "N15455",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesproven i SV, Sv2 och MA, lägeskommun, fristående skola, genomsnittlig andel (%)"
  },
  {
    "id": "N15456",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesproven i SV, Sv2 och MA, lägeskommun, kommunal skola, genomsnittlig andel (%)"
  },
  {
    "id": "N15463",
    "title": "Elever i åk 6 som deltagit i alla delprov som fått lägst betyget E för ämnesprovet i matematik, lägeskommun, andel (%) (-2015)"
  },
  {
    "id": "N15464",
    "title": "Elever i åk 6 som deltagit i alla delprov som fått lägst betyget E för ämnesprovet i matematik, fristående skolor, andel (%) (-2015)"
  },
  {
    "id": "N15465",
    "title": "Elever i åk 6 som deltagit i alla delprov som fått lägst betyget E för ämnesprovet i matematik, kommunala skolor, andel (%) (-2015)"
  },
  {
    "id": "N15472",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesprovet i svenska och svenska som andraspråk, hemkommun, andel (%)"
  },
  {
    "id": "N15473",
    "title": "Elever i åk 3 som deltagit i alla delprov som klarat alla delprov för ämnesprovet i matematik, hemkommun, andel (%)"
  },
  {
    "id": "N15480",
    "title": "Elever i åk 6 med lägst betyget E  i engelska, lägeskommun, andel (%)"
  },
  {
    "id": "N15481",
    "title": "Elever i åk 6 med lägst betyget E  i engelska, fristående grundskola, andel (%)"
  },
  {
    "id": "N15482",
    "title": "Elever i åk 6 med lägst betyget E  i engelska, kommunala skolor, andel (%)"
  },
  {
    "id": "N15483",
    "title": "Elever i åk 6 med lägst betyget E i matematik, lägeskommun, andel (%)"
  },
  {
    "id": "N15484",
    "title": "Elever i åk 6 med lägst betyget E  i matematik, fristående grundskola, andel (%)"
  },
  {
    "id": "N15485",
    "title": "Elever i åk 6 med lägst betyget E  i matematik, kommunala skolor, andel (%)"
  },
  {
    "id": "N15486",
    "title": "Elever i åk 6 med lägst betyget E i svenska, lägeskommun, andel (%)"
  },
  {
    "id": "N15487",
    "title": "Elever i åk 6 med lägst betyget E  i svenska, fristående grundskola, andel (%)"
  },
  {
    "id": "N15488",
    "title": "Elever i åk 6 med lägst betyget E  i svenska, kommunala skolor, andel (%)"
  },
  {
    "id": "N15492",
    "title": "Elever i åk 9 med lägst betyget E  i engelska, lägeskommun, andel (%)"
  },
  {
    "id": "N15493",
    "title": "Elever i åk 9 med lägst betyget E  i engelska, fristående skolor, andel (%)"
  },
  {
    "id": "N15494",
    "title": "Elever i åk 9 med lägst betyget E  i engelska, kommunala skolor, andel (%)"
  },
  {
    "id": "N15495",
    "title": "Elever i åk 9 med lägst betyget E  i matematik, lägeskommun, andel (%)"
  },
  {
    "id": "N15496",
    "title": "Elever i åk 9 med lägst betyget E  i matematik, fristående skolor, andel (%)"
  },
  {
    "id": "N15497",
    "title": "Elever i åk 9 med lägst betyget E  i matematik, kommunala skolor, andel (%)"
  },
  {
    "id": "N15498",
    "title": "Elever i åk 9 med lägst betyget E  i svenska, lägeskommun, andel (%)"
  },
  {
    "id": "N15499",
    "title": "Elever i åk 9 med lägst betyget E  i svenska, fristående skolor, andel (%)"
  },
  {
    "id": "N15501",
    "title": "Elever i år 9, meritvärde, lägeskommun, genomsnitt (16 ämnen) (-2018)"
  },
  {
    "id": "N15502",
    "title": "Elever i åk 9 med lägst betyget E  i svenska, kommunala skolor, andel (%)"
  },
  {
    "id": "N15503",
    "title": "Elever i åk 9, betygspoäng i matematik, lägeskommun, genomsnitt"
  },
  {
    "id": "N15504",
    "title": "Elever i åk. 9, meritvärde lägeskommun, genomsnitt (17 ämnen)"
  },
  {
    "id": "N15505",
    "title": "Elever i åk. 9, meritvärde kommunala skolor, genomsnitt (17 ämnen)"
  },
  {
    "id": "N15506",
    "title": "Elever i åk 9, meritvärde fristående skolor i kommunen, genomsnitt (17 ämnen)"
  },
  {
    "id": "N15507",
    "title": "Elever i åk 9, meritvärde, hemkommun, genomsnitt (17 ämnen)"
  },
  {
    "id": "N15508",
    "title": "Elever i åk 9 som uppnått kunskapskraven i alla ämnen, hemkommun, andel (%)"
  },
  {
    "id": "N15509",
    "title": "Elever i åk 6, betygspoäng i matematik, lägeskommun, genomsnitt"
  },
  {
    "id": "N15510",
    "title": "Elever i åk 6, betygspoäng i svenska, lägeskommun, genomsnitt"
  },
  {
    "id": "N15511",
    "title": "Elever i åk 6, betygspoäng i svenska som andraspråk, lägeskommun, genomsnitt"
  },
  {
    "id": "N15512",
    "title": "Elever i åk 6 med lägst betyget E i svenska som andraspråk, lägeskommun, andel (%)"
  },
  {
    "id": "N15513",
    "title": "Elever i åk 6, betygspoäng i matematik, kommunala skolor, genomsnitt"
  },
  {
    "id": "N15514",
    "title": "Elever i åk 6, betygspoäng i svenska, kommunala skolor, genomsnitt"
  },
  {
    "id": "N15515",
    "title": "Elever i åk 6, betygspoäng i svenska som andraspråk, kommunala skolor, genomsnitt"
  },
  {
    "id": "N15516",
    "title": "Elever i åk 6 med lägst betyget E i svenska som andraspråk, kommunala skolor, andel (%)"
  },
  {
    "id": "N15517",
    "title": "Elever i åk 6, betygspoäng i matematik, fristående grundskola, genomsnitt"
  },
  {
    "id": "N15518",
    "title": "Elever i åk 6, betygspoäng i svenska, fristående grundskola, genomsnitt"
  },
  {
    "id": "N15519",
    "title": "Elever i åk 6, betygspoäng i svenska som andraspråk, fristående grundskola, genomsnitt"
  },
  {
    "id": "N15520",
    "title": "Elever i åk 6 med lägst betyget E i svenska som andraspråk, fristående grundskola, andel (%)"
  },
  {
    "id": "N15521",
    "title": "Elever i år 9 som fått ett högre betyg än provbetyg för ämnesprov i svenska som andraspråk, lägeskommun, andel (%)"
  },
  {
    "id": "N15522",
    "title": "Elever i år 9 som fått ett lägre betyg än provbetyg för ämnesprov i svenska som andraspråk, lägeskommun, andel (%)"
  },
  {
    "id": "N15523",
    "title": "Elever i år 9 betygspoäng i matematik kommunala skolor, genomsnitt"
  },
  {
    "id": "N15524",
    "title": "Elever i år 9 betygspoäng i matematik fristående skolor, genomsnitt"
  },
  {
    "id": "N15525",
    "title": "Elever i åk 9: Mina lärare förklarar vad vi ska göra i skolarbetet så att jag förstår, positiva svar, andel (%)"
  },
  {
    "id": "N15526",
    "title": "Elever i åk 9: Skolarbetet stimulerar mig att lära mig mer, positiva svar, andel (%)"
  },
  {
    "id": "N15527",
    "title": "Elever i åk 9: Jag kan nå kunskapskraven i skolan om jag försöker, positiva svar, andel (%)"
  },
  {
    "id": "N15528",
    "title": "Elever i åk 9: Mina lärare hjälper mig i skolarbetet när jag behöver det, positiva svar, andel (%)"
  },
  {
    "id": "N15529",
    "title": "Elever i åk 9: Mina lärare uppmuntrar oss elever att reflektera över vad vi hör och läser, positiva svar, andel (%)"
  },
  {
    "id": "N15530",
    "title": "Elever i åk 9: I min skola respekterar elever och lärare varandra, positiva svar, andel (%)"
  },
  {
    "id": "N15531",
    "title": "Elever i åk 9: På lektionerna är vi elever med och påverkar på vilket sätt vi ska arbeta med olika skoluppgifter, positiva svar, andel (%)"
  },
  {
    "id": "N15532",
    "title": "Elever i åk 9: Jag har studiero på lektionerna, positiva svar, andel (%)"
  },
  {
    "id": "N15533",
    "title": "Elever i åk 9: Jag känner mig trygg i skolan, positiva svar, andel (%)"
  },
  {
    "id": "N15534",
    "title": "Elever i åk 9: Jag vet vem på skolan jag kan prata med om någon har varit elak mot en elev, positiva svar, andel (%)"
  },
  {
    "id": "N15535",
    "title": "Elever i åk 9: Jag är nöjd med min skola som helhet, positiva svar, andel (%)"
  },
  {
    "id": "N15539",
    "title": "Elever i åk 6 som uppnått kunskapskraven i alla ämnen (som eleven läser), lägeskommun, andel (%)"
  },
  {
    "id": "N15540",
    "title": "Elever i åk 6 som uppnått kunskapskraven i alla ämnen (som eleven läser), kommunala skolor, andel (%)"
  },
  {
    "id": "N15541",
    "title": "Elever i åk 6 som uppnått kunskapskraven i alla ämnen (som eleven läser), fristående skola, andel (%)"
  },
  {
    "id": "N15542",
    "title": "Elever i år 9 meritvärde lägeskommun, år T-3, genomsnitt (16 ämnen) (-2018)"
  },
  {
    "id": "N15543",
    "title": "Elever i åk 6 som uppnått kunskapskraven i alla ämnen, hemkommun, andel (%)"
  },
  {
    "id": "N15544",
    "title": "Elever i åk 6 med lägst betyget E i engelska, hemkommun, andel (%)"
  },
  {
    "id": "N15545",
    "title": "Elever i åk 6 med lägst betyget E i matematik, hemkommun, andel (%)"
  },
  {
    "id": "N15546",
    "title": "Elever i åk 6 med lägst betyget E i svenska inkl. svenska som andraspråk, hemkommun, andel (%)"
  },
  {
    "id": "N15547",
    "title": "Elever i åk 9 med lägst betyget E i svenska som andraspråk, lägeskommun, andel (%)"
  },
  {
    "id": "N15548",
    "title": "Elever i åk 9 med lägst betyget E i svenska som andraspråk, kommunala skolor, andel (%)"
  },
  {
    "id": "N15549",
    "title": "Elever i åk 9, med lägst betyget E i svenska som andraspråk, fristående skolor, andel (%)"
  },
  {
    "id": "N15550",
    "title": "Elever i åk 5: Mina lärare förklarar vad vi ska göra i skolarbetet så att jag förstår, positiva svar, andel (%)"
  },
  {
    "id": "N15551",
    "title": "Elever i åk 5: Skolarbetet gör mig så nyfiken att jag får lust att lära mig mer, positiva svar, andel (%)"
  },
  {
    "id": "N15552",
    "title": "Elever i åk 5: Jag kan nå kunskapskraven i skolan om jag försöker, positiva svar, andel (%)"
  },
  {
    "id": "N15553",
    "title": "Elever i åk 5: Mina lärare hjälper mig i skolarbetet när jag behöver det, positiva svar, andel (%)"
  },
  {
    "id": "N15554",
    "title": "Elever i åk 5: I min skola respekterar vi varandra, positiva svar, andel (%)"
  },
  {
    "id": "N15555",
    "title": "Elever i åk 5: På lektionerna är vi elever med och påverkar på vilket sätt vi ska arbeta med olika skoluppgifter, positiva svar, andel (%)"
  },
  {
    "id": "N15556",
    "title": "Elever i åk 5: Jag har studiero på lektionerna, positiva svar, andel (%)"
  },
  {
    "id": "N15557",
    "title": "Elever i åk 5: Jag känner mig trygg i skolan, positiva svar, andel (%)"
  },
  {
    "id": "N15558",
    "title": "Elever i åk 5: Jag vet vem på skolan jag kan prata med om någon har varit elak mot en elev, positiva svar, andel (%)"
  },
  {
    "id": "N15559",
    "title": "Elever i åk 5: Jag är nöjd med min skola som helhet, positiva svar, andel (%)"
  },
  {
    "id": "N15560",
    "title": "Elever i år 9 som uppnått kunskapskraven i alla ämnen (exkl. nyinvandrade och okänd bakgr.), lägeskommun, andel (%)"
  },
  {
    "id": "N15561",
    "title": "Elever i år 9 som uppnått kunskapskraven i alla ämnen (exkl. nyinvandrade och okänd bakgrund), kommunala skolor, andel (%)"
  },
  {
    "id": "N15562",
    "title": "Elever i år 9 som uppnått kunskapskraven i alla ämnen (exkl. nyinvandrade och okänd bakgrund), fristående skolor, andel (%)"
  },
  {
    "id": "N15563",
    "title": "Elever i år 9 som är behöriga till yrkesprogram (exkl. nyinvandrade och okänd bakgr.), lägeskommun, andel (%)"
  },
  {
    "id": "N15564",
    "title": "Elever i år 9 som är behöriga till yrkesprogram (exkl. nyinvandrade och okänd bakgrund), kommunala skolor, andel (%)"
  },
  {
    "id": "N15565",
    "title": "Elever i år 9 som är behöriga till yrkesprogram (exkl. nyinvandrade och okänd bakgr.), fristående skolor, andel (%)"
  },
  {
    "id": "N15566",
    "title": "Elever i år 9 meritvärde lägeskommun (exkl. nyinvandrade och okänd bakgr.), genomsnitt (17 ämnen)"
  },
  {
    "id": "N15567",
    "title": "Elever i år 9 meritvärde kommunala skolor (exkl. nyinvandrade och okänd bakgrund), genomsnitt (17 ämnen)"
  },
  {
    "id": "N15568",
    "title": "Elever i år 9, meritvärde fristående skolor i kommunen (exkl. nyinvandrade och okänd bakgrund), genomsnitt (17 ämnen)"
  },
  {
    "id": "N15569",
    "title": "Elever i år 9 som fått ett lägre betyg än provbetyg för ämnesprov i svenska, kommunala skolor, andel (%)"
  },
  {
    "id": "N15570",
    "title": "Elever i år 9 som fått ett högre betyg än provbetyg för ämnesprov i svenska, kommunala skolor, andel (%)"
  },
  {
    "id": "N15571",
    "title": "Elever i år 9 som fått ett lägre betyg än provbetyg för ämnesprov i matematik, kommunala skolor, andel (%)"
  },
  {
    "id": "N15572",
    "title": "Elever i år 9 som fått ett högre betyg än provbetyg för ämnesprov i matematik, kommunala skolor, andel (%)"
  },
  {
    "id": "N15573",
    "title": "Elever i år 9 som fått ett lägre betyg än provbetyg för ämnesprov i engelska, kommunala skolor, andel (%)"
  },
  {
    "id": "N15574",
    "title": "Elever i år 9 som fått ett högre betyg än provbetyg för ämnesprov i engelska, kommunala skolor, andel (%)"
  },
  {
    "id": "N15575",
    "title": "Elever i år 9 som fått ett lägre betyg än provbetyg för ämnesprov i svenska som andraspråk, kommunala skolor, andel (%)"
  },
  {
    "id": "N15576",
    "title": "Elever i år 9 som fått ett högre betyg än provbetyg för ämnesprov i svenska som andraspråk, kommunala skolor, andel (%)"
  },
  {
    "id": "N15720",
    "title": "Elever i åk 9 med lägst betyget E i idrott och hälsa, lägeskommun, andel (%)"
  },
  {
    "id": "N15721",
    "title": "Elever i åk 9 med lägst betyget E i idrott och hälsa, fristående skolor, andel (%)"
  },
  {
    "id": "N15722",
    "title": "Elever i åk 9 med lägst betyget E i idrott och hälsa, kommunala skolor, andel (%)"
  },
  {
    "id": "N15723",
    "title": "Elever i åk 6 med lägst betyget E i idrott och hälsa, lägeskommun, andel (%)"
  },
  {
    "id": "N15724",
    "title": "Elever i åk 6 med lägst betyget E i idrott och hälsa, kommunala skolor, andel (%)"
  },
  {
    "id": "N15725",
    "title": "Elever i åk 6 med lägst betyget E i idrott och hälsa, fristående skolor, andel (%)"
  },
  {
    "id": "N15807",
    "title": "Elever i grundskola belägen i kommunen åk 1-9, lägeskommun, antal"
  },
  {
    "id": "N15808",
    "title": "Lärare i grundskola belägen i kommunen, antal"
  },
  {
    "id": "N15809",
    "title": "Elever i kommunal grundskola belägen i kommunen åk 1-9, lägeskommun, antal"
  },
  {
    "id": "N15810",
    "title": "Elever i fristående grundskola belägen i kommunen åk 1-9, lägeskommun, antal"
  },
  {
    "id": "N15811",
    "title": "Lärare i kommunal grundskola belägen i kommunen, antal"
  },
  {
    "id": "N15812",
    "title": "Lärare i fristående grundskola belägen i kommunen, antal"
  },
  {
    "id": "N15813",
    "title": "Lärare (heltidstjänster) med lärarlegitimation och behörighet i minst ett ämne i grundskola åk 1-9, lägeskommun, andel (%)"
  },
  {
    "id": "N15814",
    "title": "Lärare (heltidstjänster) med lärarlegitimation och behörighet i minst ett ämne i grundskola åk 1-9, kommunala skolor, andel (%)"
  },
  {
    "id": "N15815",
    "title": "Lärare (heltidstjänster) med lärarlegitimation och behörighet i minst ett ämne, fristående grundskola åk 1-9, andel (%)"
  },
  {
    "id": "N15816",
    "title": "Elever vars föräldrar har eftergymnasial utbildning, åk 1-9 i lägeskommun, andel (%)"
  },
  {
    "id": "N15817",
    "title": "Flickor i grundskola åk 1-9, lägeskommun, andel (%)"
  },
  {
    "id": "N15818",
    "title": "Utländsk bakgrund bland elever i åk 1-9, lägeskommun, andel (%)"
  },
  {
    "id": "N15819",
    "title": "Nyinvandrade och elever med okänd bakgrund i åk 9, lägeskommun, andel (%)"
  },
  {
    "id": "N15820",
    "title": "Elever vars föräldrar har eftergymnasial utbildning, åk 1-9 i kommunal grundskola, lägeskommun, andel (%)"
  },
  {
    "id": "N15821",
    "title": "Flickor i grundskola åk. 1-9, kommunala skolor, andel (%)"
  },
  {
    "id": "N15822",
    "title": "Utländsk bakgrund bland elever i åk 1-9, kommunala skolor, andel (%)"
  },
  {
    "id": "N15823",
    "title": "Nyinvandrade och elever med okänd bakgrund i år 9, kommunala skolor, andel (%)"
  },
  {
    "id": "N15824",
    "title": "Elever vars föräldrar har eftergymnasial utbildning, fristående grundskola åk 1-9, lägeskommun, andel (%)"
  },
  {
    "id": "N15825",
    "title": "Flickor, fristående grundskola åk 1-9, andel (%)"
  },
  {
    "id": "N15826",
    "title": "Utländsk bakgrund bland elever, fristående grundskola åk 1-9, andel (%)"
  },
  {
    "id": "N15828",
    "title": "Elever i förskoleklass, hemkommun, antal"
  },
  {
    "id": "N15829",
    "title": "Elever i grundskola åk. 1-9, hemkommun, antal"
  },
  {
    "id": "N15830",
    "title": "Elever i grundskola F-9, kommunal skola, hemkommun, andel (%)"
  },
  {
    "id": "N15831",
    "title": "Elever i grundskola F-9, fristående skola eller annan kommuns skola, hemkommun, andel (%)"
  },
  {
    "id": "N15832",
    "title": "Elever i grundskola F-9, lägeskommun, oavsett regi, antal"
  },
  {
    "id": "N15833",
    "title": "Elever i grundskola F-9 i egen regi belägen i kommunen, antal"
  },
  {
    "id": "N15834",
    "title": "Elever, fristående grundskola F-9, antal"
  },
  {
    "id": "N15835",
    "title": "Elever i grundskola F-9, hemkommun, antal"
  },
  {
    "id": "N15901",
    "title": "Nyinvandrade elever, grundskola åk 1-9, hemkommun, andel (%)"
  },
  {
    "id": "N15902",
    "title": "Nyinvandrade och elever med okänd bakgrund i kommunal grundskola åk. 1-9, andel (%)"
  },
  {
    "id": "N15903",
    "title": "Nyinvandrade och elever med okänd bakgrund, fristående grundskola åk 1-9, andel (%)"
  },
  {
    "id": "N17001",
    "title": "Nettokostnadsavvikelse gymnasieskola, (%)"
  },
  {
    "id": "N17003",
    "title": "Referenskostnadskvot gymnasieskola, index"
  },
  {
    "id": "N17004",
    "title": "Kostnad gymnasieskola hemkommun, kr/inv"
  },
  {
    "id": "N17005",
    "title": "Kostnad gymnasieskola hemkommun, kr/elev"
  },
  {
    "id": "N17007",
    "title": "Kostnad för kommunal gymnasieskola, kr/elev"
  },
  {
    "id": "N17008",
    "title": "Kostnader för lokaler i kommunal gymnasieskola, kr/elev"
  },
  {
    "id": "N17009",
    "title": "Övriga kostnader i kommunal gymnasieskola, kr/elev"
  },
  {
    "id": "N17010",
    "title": "Kostnader för undervisning i kommunal gymnasieskola, kr/elev"
  },
  {
    "id": "N17011",
    "title": "Kostnad för lärverktyg i kommunal gymnasieskola, kr/elev"
  },
  {
    "id": "N17012",
    "title": "Kostnad för måltider i kommunal gymnasieskola, kr/elev"
  },
  {
    "id": "N17013",
    "title": "Kostnad elevhälsa i kommunal gymnasieskola, kr/elev"
  },
  {
    "id": "N17014",
    "title": "Nettokostnad gymnasieskola, kr/inv"
  },
  {
    "id": "N17016",
    "title": "Referenskostnad gymnasieskola, kr/inv"
  },
  {
    "id": "N17018",
    "title": "Månadsavlönad personal, kommunalt anställda gymnasielärare, antal"
  },
  {
    "id": "N17019",
    "title": "Månadsavlönad personal, kommunalt anställda inom gymnasium/komvux, antal"
  },
  {
    "id": "N17020",
    "title": "Årsarbetare, kommunalt anställda gymnasielärare, antal"
  },
  {
    "id": "N17021",
    "title": "Årsarbetare, kommunalt anställda inom gymnasium/komvux, antal"
  },
  {
    "id": "N17022",
    "title": "Standardkostnad gymnasieskola, kr/inv"
  },
  {
    "id": "N17023",
    "title": "Köp av gymnasieskola, totalt, andel (%)"
  },
  {
    "id": "N17024",
    "title": "Köp av gymnasieskola från privatägda företag, andel (%)"
  },
  {
    "id": "N17025",
    "title": "Köp av gymnasieskola från föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N17026",
    "title": "Köp av gymnasieskola från andra kommuner, andel (%)"
  },
  {
    "id": "N17027",
    "title": "Köp av gymnasieskola från övriga motparter, andel (%)"
  },
  {
    "id": "N17028",
    "title": "Gemensamma kostnader fördelade till gymnasieskola, andel (%)"
  },
  {
    "id": "N17029",
    "title": "Referenskostnad gymnasieskola, kr/elev"
  },
  {
    "id": "N17030",
    "title": "Nettokostnadsavvikelse gymnasieskola, miljoner kronor"
  },
  {
    "id": "N17040",
    "title": "Åldersersättning gymnasieskola, kr/inv"
  },
  {
    "id": "N17041",
    "title": "Behovsnivå gymnasieskola, kr/inv"
  },
  {
    "id": "N17042",
    "title": "Produktionsförutsättningar gymnasieskola, kr/inv"
  },
  {
    "id": "N17200",
    "title": "Tillsvidareanställda månadsavlönade inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17201",
    "title": "Visstidsanställda månadsavlönade inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17202",
    "title": "Visstidsanställda timavlönade inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17203",
    "title": "Arbetad tid utförd av tillsvidareanställda månadsavlönade inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17204",
    "title": "Arbetad tid utförd av visstidsanställda månadsavlönade inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17205",
    "title": "Arbetad tid utförd av visstidsanställda timavlönade inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17206",
    "title": "Heltidsanställda månadsavlönade inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17207",
    "title": "Deltidsanställda (75-99 %) månadsavlönade inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17208",
    "title": "Deltidsanställda (1-74 %) månadsavlönade inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17209",
    "title": "Heltidsarbetande månadsavlönade inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17210",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17211",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17212",
    "title": "Anställda -34 år inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17213",
    "title": "Anställda 35-54 år inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17214",
    "title": "Anställda 55+ inom gymnasieskola och komvux, andel (%)"
  },
  {
    "id": "N17217",
    "title": "Anställda utrikes födda inom gymnasieskola och komvux, balanstal"
  },
  {
    "id": "N17218",
    "title": "Anställda 55+ år inom gymnasieskola och komvux, antal"
  },
  {
    "id": "N17404",
    "title": "Gymnasieelever som fullföljer sin utbildning inom 4 år, inkl. IV, andel (%) (-2014)"
  },
  {
    "id": "N17405",
    "title": "Gymnasieelever som fullföljer sin utbildning inom 4 år, studieförb. program, andel (%) (-2014)"
  },
  {
    "id": "N17406",
    "title": "Gymnasieelever som fullföljer sin utbildning inom 4 år, yrkesförb. program, andel (%) (-2014)"
  },
  {
    "id": "N17407",
    "title": "Gymnasieelever som fullföljer sin utbildning inom 4 år, specialutf. program, andel (%) (-2014)"
  },
  {
    "id": "N17422",
    "title": "Gymnasieelever som börjat på universitet/högskola inom 3 år efter avslutad gymnasieutbildning, andel (%) (-2014)"
  },
  {
    "id": "N17423",
    "title": "Gymnasieelever som börjat på universitet/högskola inom 3 år efter avslutad gymnasieutbildning, studieförb. program, (%) (-2014)"
  },
  {
    "id": "N17424",
    "title": "Gymnasieelever som börjat på universitet/högskola inom 3 år efter avslutad gymnasieutbildning, yrkesförb. program, (%) (-2014)"
  },
  {
    "id": "N17425",
    "title": "Gymnasieelever som börjat på universitet/högskola inom 3 år efter avslutad gymnasieutbildning, specialutf. program, (%) (-2014)"
  },
  {
    "id": "N17426",
    "title": "Gymnasieelever som gått över till universitet/högskola direkt efter avslutad gymnasieutbildning, hemkommun, andel (%)"
  },
  {
    "id": "N17430",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 2 år efter fullföljd gymnasieutbildning, hemkommun, andel (%)"
  },
  {
    "id": "N17432",
    "title": "Gymnasieelever som är etablerade på arbetsmarknaden 2 år efter avslutad gymnasieutbildning, yrkesförb. program, andel (%) (-2012)"
  },
  {
    "id": "N17434",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 2 år efter fullföljd gymnasieutbildning, hemkommun, andel (%)"
  },
  {
    "id": "N17438",
    "title": "Gymnasieelever som avslutat från ett mansdominerat program, andel (%)"
  },
  {
    "id": "N17439",
    "title": "Gymnasieelever som avslutat från ett kvinnodominerat program, andel (%)"
  },
  {
    "id": "N17440",
    "title": "Gymnasieelever som avslutat från ett program med jämn könsfördelning, andel (%)"
  },
  {
    "id": "N17441",
    "title": "Gymnasieelever med examen eller studiebevis inom 3 år, hemkommun, andel (%)"
  },
  {
    "id": "N17442",
    "title": "Gymnasieelever med examen eller studiebevis inom 3 år, lägeskommun, andel (%)"
  },
  {
    "id": "N17443",
    "title": "Gymnasieelever med examen eller studiebevis inom 3 år, fristående skolor, andel (%)"
  },
  {
    "id": "N17444",
    "title": "Gymnasieelever med examen eller studiebevis inom 3 år, kommunala skolor, andel (%)"
  },
  {
    "id": "N17445",
    "title": "Gymnasieelever med examen inom 3 år, hemkommun, andel (%)"
  },
  {
    "id": "N17446",
    "title": "Gymnasieelever med examen inom 3 år, högskoleförberedande program hemkommun, andel (%)"
  },
  {
    "id": "N17447",
    "title": "Gymnasieelever med examen inom 3 år, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17448",
    "title": "Gymnasieelever med examen inom 3 år, lägeskommun, andel (%)"
  },
  {
    "id": "N17449",
    "title": "Gymnasieelever med examen inom 3 år, högskoleförberedande program lägeskommun, andel (%)"
  },
  {
    "id": "N17450",
    "title": "Gymnasieelever med examen inom 3 år, yrkesprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17451",
    "title": "Gymnasieelever med examen inom 3 år, kommunala skolor, andel (%)"
  },
  {
    "id": "N17452",
    "title": "Gymnasieelever med examen inom 3 år, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17453",
    "title": "Gymnasieelever med examen inom 3 år, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17454",
    "title": "Gymnasieelever med examen inom 3 år, fristående skolor, andel (%)"
  },
  {
    "id": "N17455",
    "title": "Gymnasieelever med examen inom 3 år, högskoleförberedande program fristående skolor, andel (%)"
  },
  {
    "id": "N17456",
    "title": "Gymnasieelever med examen inom 3 år, yrkesprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17457",
    "title": "Gymnasieelever med examen eller studiebevis inom 4 år, hemkommun, andel (%)"
  },
  {
    "id": "N17458",
    "title": "Gymnasieelever med examen eller studiebevis inom 4 år, lägeskommun, andel (%)"
  },
  {
    "id": "N17459",
    "title": "Gymnasieelever med examen eller studiebevis inom 4 år, kommunala skolor, andel (%)"
  },
  {
    "id": "N17460",
    "title": "Gymnasieelever med examen eller studiebevis inom 4 år, fristående skolor, andel (%)"
  },
  {
    "id": "N17461",
    "title": "Gymnasieelever med examen inom 4 år, hemkommun, andel (%)"
  },
  {
    "id": "N17462",
    "title": "Gymnasieelever med examen inom 4 år, högskoleförberedande program hemkommun, andel (%)"
  },
  {
    "id": "N17463",
    "title": "Gymnasieelever med examen inom 4 år, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17464",
    "title": "Gymnasieelever med examen inom 4 år, lägeskommun, andel (%)"
  },
  {
    "id": "N17465",
    "title": "Gymnasieelever med examen inom 4 år, högskoleförberedande program lägeskommun, andel (%)"
  },
  {
    "id": "N17466",
    "title": "Gymnasieelever med examen inom 4 år, yrkesprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17467",
    "title": "Gymnasieelever med examen inom 4 år, kommunala skolor, andel (%)"
  },
  {
    "id": "N17468",
    "title": "Gymnasieelever med examen inom 4 år, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17469",
    "title": "Gymnasieelever med examen inom 4 år, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17470",
    "title": "Gymnasieelever med examen inom 4 år, fristående skolor, andel (%)"
  },
  {
    "id": "N17471",
    "title": "Gymnasieelever med examen inom 4 år, högskoleförberedande program fristående skolor, andel (%)"
  },
  {
    "id": "N17472",
    "title": "Gymnasieelever med examen inom 4 år, yrkesprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17473",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, hemkommun, andel (%)"
  },
  {
    "id": "N17474",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, högskoleförberedande program hemkommun, andel (%)"
  },
  {
    "id": "N17475",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17476",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, lägeskommun, andel (%)"
  },
  {
    "id": "N17477",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, högskoleförberedande program lägeskommun, andel (%)"
  },
  {
    "id": "N17478",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, yrkesprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17479",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, kommunala skolor, andel (%)"
  },
  {
    "id": "N17480",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17481",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17482",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, fristående skolor, andel (%)"
  },
  {
    "id": "N17483",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, högskoleförberedande program fristående skolor, andel (%)"
  },
  {
    "id": "N17484",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, yrkesprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17485",
    "title": "Pojkar som sökt till kvinnodominerande yrkesprogram av elever som avslutat årskurs 9 under våren, andel (%)"
  },
  {
    "id": "N17486",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, högskoleförberedande program hemkommun"
  },
  {
    "id": "N17487",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, yrkesprogram hemkommun"
  },
  {
    "id": "N17488",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, lägeskommun"
  },
  {
    "id": "N17489",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, högskoleförberedande program lägeskommun"
  },
  {
    "id": "N17490",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, yrkesprogram lägeskommun"
  },
  {
    "id": "N17491",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, kommunala skolor"
  },
  {
    "id": "N17492",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, högskoleförberedande program kommunala skolor"
  },
  {
    "id": "N17493",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, yrkesprogram kommunala skolor"
  },
  {
    "id": "N17494",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, fristående skolor"
  },
  {
    "id": "N17495",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, högskoleförberedande program fristående skolor"
  },
  {
    "id": "N17496",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, yrkesprogram fristående skolor"
  },
  {
    "id": "N17497",
    "title": "Ungdomar som studerar på högskola/universitet 2 år efter fullföljd gymnasieutbildning, hemkommun, andel (%)"
  },
  {
    "id": "N17498",
    "title": "Ungdomar som studerar på högskola/universitet 2 år efter fullföljd gymnasieutbildning, kommunala skolor, andel (%)"
  },
  {
    "id": "N17499",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 2 år efter fullföljd gymnasieutbildning, hemkommun, andel (%)"
  },
  {
    "id": "N17500",
    "title": "Betygspoäng efter avslutad gymnasieutbildning hemkommun, genomsnitt"
  },
  {
    "id": "N17501",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 2 år efter fullföljd gymnasieutbildning, kommunala skolor, andel (%)"
  },
  {
    "id": "N17502",
    "title": "Gymnasieelever som gått över till universitet/högskola direkt efter avslutad gymnasieutbildning, hemkommun, andel (%)"
  },
  {
    "id": "N17503",
    "title": "Gymnasieelever som gått över till universitet/högskola direkt efter avslutad gymnasieutbildning, högskoleförberedande program hemkommun, andel (%)"
  },
  {
    "id": "N17504",
    "title": "Gymnasieelever som gått över till universitet/högskola direkt efter avslutad gymnasieutbildning, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17505",
    "title": "Gymnasieelever som gått över till universitet/högskola direkt efter avslutad gymnasieutbildning, kommunala skolor, andel (%)"
  },
  {
    "id": "N17506",
    "title": "Gymnasieelever som gått över till universitet/högskola direkt efter avslutad gymnasieutbildning, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17507",
    "title": "Gymnasieelever som gått över till universitet/högskola direkt efter avslutad gymnasieutbildning, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17509",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 2 år efter fullföljd gymnasieutbildning, kommunala skolor, andel (%)"
  },
  {
    "id": "N17510",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 2 år efter fullföljd gymnasieutbildning, högskoleförberedande program hemkommun, andel (%)"
  },
  {
    "id": "N17511",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 2 år efter fullföljd gymnasieutbildning, kommunala skolor, andel (%)"
  },
  {
    "id": "N17512",
    "title": "Ungdomar som studerar på högskola/universitet 1 år efter fullföljd gymnasieutbildning, hemkommun, andel (%)"
  },
  {
    "id": "N17513",
    "title": "Ungdomar som studerar på högskola/universitet 1 år efter fullföljd gymnasieutbildning, lägeskommun, andel (%)"
  },
  {
    "id": "N17514",
    "title": "Ungdomar som studerar på högskola/universitet 1 år efter fullföljd gymnasieutbildning, kommunala skolor, andel (%)"
  },
  {
    "id": "N17515",
    "title": "Ungdomar som studerar på högskola/universitet 1 år efter fullföljd gymnasieutbildning, fristående skolor, andel (%)"
  },
  {
    "id": "N17516",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 1 år efter fullföljd gymnasieutbildning, hemkommun, andel (%)"
  },
  {
    "id": "N17517",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 1 år efter fullföljd gymnasieutbildning, lägeskommun, andel (%)"
  },
  {
    "id": "N17518",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 1 år efter fullföljd gymnasieutbildning, kommunala skolor, andel (%)"
  },
  {
    "id": "N17519",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 1 år efter fullföljd gymnasieutbildning, fristående skolor, andel (%)"
  },
  {
    "id": "N17520",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 1 år efter fullföljd gymnasieutbildning, hemkommun, andel (%)"
  },
  {
    "id": "N17521",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 1 år efter fullföljd gymnasieutbildning, lägeskommun, andel (%)"
  },
  {
    "id": "N17522",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 1 år efter fullföljd gymnasieutbildning, kommunala skolor, andel (%)"
  },
  {
    "id": "N17523",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 1 år efter fullföljd gymnasieutbildning, fristående skolor,andel (%)"
  },
  {
    "id": "N17524",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 1 år efter fullföljd gymnasieutbildning, hemkommun, andel (%)"
  },
  {
    "id": "N17525",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 1 år efter fullföljd gymnasieutbildning, lägeskommun, andel (%)"
  },
  {
    "id": "N17526",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 1 år efter fullföljd gymnasieutbildning, kommunala skolor, andel (%)"
  },
  {
    "id": "N17527",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 1 år efter fullföljd gymnasieutbildning, fristående skolor, andel (%)"
  },
  {
    "id": "N17528",
    "title": "Elever som avslutat årskurs 9 på våren och som ej återfanns i gymnasieskolan på hösten, hemkommun, andel (%)"
  },
  {
    "id": "N17529",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17530",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17531",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, kommunala skolor, andel (%)"
  },
  {
    "id": "N17532",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, yrkesprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17533",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, yrkesprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17534",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, högskoleförberedande program fristående skolor, andel (%)"
  },
  {
    "id": "N17535",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, fristående skolor, andel (%)"
  },
  {
    "id": "N17536",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, högskoleförberedande program hemkommun, andel (%)"
  },
  {
    "id": "N17537",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17538",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, hemkommun, andel (%)"
  },
  {
    "id": "N17539",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, lägeskommun, andel (%)"
  },
  {
    "id": "N17540",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, högskoleförberedande program lägeskommun, andel (%)"
  },
  {
    "id": "N17541",
    "title": "Gymnasieelever med examen inom 3 år, introduktionsprogram hemkommun, andel (%)"
  },
  {
    "id": "N17542",
    "title": "Gymnasieelever med examen eller studiebevis inom 3 år, introduktionsprogram hemkommun, andel (%)"
  },
  {
    "id": "N17543",
    "title": "Gymnasieelever med examen inom 3 år, introduktionsprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17544",
    "title": "Gymnasieelever med examen eller studiebevis inom 3 år, introduktionsprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17545",
    "title": "Gymnasieelever med examen inom 3 år, introduktionsprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17546",
    "title": "Gymnasieelever med examen eller studiebevis inom 3 år, introduktionsprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17547",
    "title": "Gymnasieelever med examen inom 3 år, introduktionsprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17548",
    "title": "Gymnasieelever med examen eller studiebevis inom 3 år, introduktionsprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17549",
    "title": "Gymnasieelever med examen inom 4 år, introduktionsprogram hemkommun, andel (%)"
  },
  {
    "id": "N17550",
    "title": "Gymnasieelever med examen eller studiebevis inom 4 år, introduktionsprogram hemkommun, andel (%)"
  },
  {
    "id": "N17551",
    "title": "Gymnasieelever med examen inom 4 år, introduktionsprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17552",
    "title": "Gymnasieelever med examen eller studiebevis inom 4 år, introduktionsprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17553",
    "title": "Gymnasieelever med examen inom 4 år, introduktionsprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17554",
    "title": "Gymnasieelever med examen eller studiebevis inom 4 år, introduktionsprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17555",
    "title": "Gymnasieelever med examen inom 4 år, introduktionsprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17556",
    "title": "Gymnasieelever med examen eller studiebevis inom 4 år, introduktionsprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17557",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, introduktionsprogram hemkommun, andel (%)"
  },
  {
    "id": "N17558",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, introduktionsprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17559",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, introduktionsprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17560",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 3 år, introduktionsprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17561",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, introduktionsprogram hemkommun, andel (%)"
  },
  {
    "id": "N17562",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, introduktionsprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17563",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, introduktionsprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17564",
    "title": "Gymnasieelever som uppnått grundläggande behörighet till universitet och högskola inom 4 år, introduktionsprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17565",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 2 år efter fullföljd gymnasieutbildning, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17566",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 2 år efter fullföljd gymnasieutbildning, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17567",
    "title": "Ungdomar som studerar på högskola/universitet 2 år efter fullföljd gymnasieutbildning, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17568",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 2 år efter fullföljd gymnasieutbildning, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17569",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 1 år efter fullföljd gymnasieutbildning, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17570",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 1 år efter fullföljd gymnasieutbildning, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17571",
    "title": "Ungdomar som studerar på högskola/universitet 1 år efter fullföljd gymnasieutbildning, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17572",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 1 år efter fullföljd gymnasieutbildning, yrkesprogram hemkommun, andel (%)"
  },
  {
    "id": "N17573",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 1 år efter fullföljd gymnasieutbildning, yrkesprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17574",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 1 år efter fullföljd gymnasieutbildning, yrkesprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17575",
    "title": "Ungdomar som studerar på högskola/universitet 1 år efter fullföljd gymnasieutbildning, yrkesprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17576",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 1 år efter fullföljd gymnasieutbildning, yrkesprogram lägeskommun, andel (%)"
  },
  {
    "id": "N17577",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 1 år efter fullföljd gymnasieutbildning, högskoleförberedande program lägeskommun, andel (%)"
  },
  {
    "id": "N17578",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 1 år efter fullföljd gymnasieutbildning, högskoleförberedande program lägeskommun, andel (%)"
  },
  {
    "id": "N17579",
    "title": "Ungdomar som studerar på högskola/universitet 1 år efter fullföljd gymnasieutbildning, högskoleförberedande program lägeskommun, andel (%)"
  },
  {
    "id": "N17580",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 1 år efter fullföljd gymnasieutbildning, högskoleförberedande program lägeskommun, andel (%)"
  },
  {
    "id": "N17581",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 1 år efter fullföljd gymnasieutbildning, yrkesprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17582",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 1 år efter fullföljd gymnasieutbildning, yrkesprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17583",
    "title": "Ungdomar som studerar på högskola/universitet 1 år efter fullföljd gymnasieutbildning, yrkesprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17584",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 1 år efter fullföljd gymnasieutbildning, yrkesprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17585",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 1 år efter fullföljd gymnasieutbildning, högskoleförberedande program fristående skolor, andel (%)"
  },
  {
    "id": "N17586",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 1 år efter fullföljd gymnasieutbildning, högskoleförberedande program fristående skolor, andel (%)"
  },
  {
    "id": "N17587",
    "title": "Ungdomar som studerar på högskola/universitet 1 år efter fullföljd gymnasieutbildning, högskoleförberedande program fristående skolor, andel (%)"
  },
  {
    "id": "N17588",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 1 år efter fullföljd gymnasieutbildning, högskoleförberedande program fristående skolor, andel (%)"
  },
  {
    "id": "N17589",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 1 år efter fullföljd gymnasieutbildning, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17590",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 1 år efter fullföljd gymnasieutbildning, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17591",
    "title": "Ungdomar som studerar på högskola/universitet 1 år efter fullföljd gymnasieutbildning, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17592",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 1 år efter fullföljd gymnasieutbildning, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17593",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 1 år efter fullföljd gymnasieutbildning, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17594",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 1 år efter fullföljd gymnasieutbildning, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17595",
    "title": "Ungdomar som studerar på högskola/universitet 1 år efter fullföljd gymnasieutbildning, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17596",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 1 år efter fullföljd gymnasieutbildning, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17597",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 2 år efter fullföljd gymnasieutbildning, högskoleförberedande program hemkommun, andel (%)"
  },
  {
    "id": "N17598",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 2 år efter fullföljd gymnasieutbildning, högskoleförberedande program hemkommun, andel (%)"
  },
  {
    "id": "N17599",
    "title": "Ungdomar som studerar på högskola/universitet 2 år efter fullföljd gymnasieutbildning,  högskoleförberedande program hemkommun, andel (%)"
  },
  {
    "id": "N17600",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 2 år efter fullföljd gymnasieutbildning, högskoleförberedande program fristående skolor, andel (%)"
  },
  {
    "id": "N17601",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 2 år efter fullföljd gymnasieutbildning, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17602",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 2 år efter fullföljd gymnasieutbildning, yrkesprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17603",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 2 år efter fullföljd gymnasieutbildning, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17604",
    "title": "Ungdomar som studerar på högskola/universitet 2 år efter fullföljd gymnasieutbildning, högskoleförberedande program fristående skolor, andel (%)"
  },
  {
    "id": "N17605",
    "title": "Ungdomar som studerar på högskola/universitet 2 år efter fullföljd gymnasieutbildning, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17606",
    "title": "Ungdomar som studerar på högskola/universitet 2 år efter fullföljd gymnasieutbildning, yrkesprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17607",
    "title": "Ungdomar som studerar på högskola/universitet 2 år efter fullföljd gymnasieutbildning, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17608",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 2 år efter fullföljd gymnasieutbildning, högskoleförberedande program fristående skolor, andel (%)"
  },
  {
    "id": "N17609",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 2 år efter fullföljd gymnasieutbildning, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17610",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 2 år efter fullföljd gymnasieutbildning, yrkesprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17611",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 2 år efter fullföljd gymnasieutbildning, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17612",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 2 år efter fullföljd gymnasieutbildning, högskoleförberedande program fristående skolor, andel (%)"
  },
  {
    "id": "N17613",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 2 år efter fullföljd gymnasieutbildning, högskoleförberedande program kommunala skolor, andel (%)"
  },
  {
    "id": "N17614",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 2 år efter fullföljd gymnasieutbildning, yrkesprogram fristående skolor, andel (%)"
  },
  {
    "id": "N17615",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 2 år efter fullföljd gymnasieutbildning, yrkesprogram kommunala skolor, andel (%)"
  },
  {
    "id": "N17616",
    "title": "Ungdomar som är etablerade på arbetsmarknaden eller studerar 2 år efter fullföljd gymnasieutbildning, fristående skolor, andel (%)"
  },
  {
    "id": "N17617",
    "title": "Ungdomar som studerar på annan studiemedelsberättigad utbildning än högskola 2 år efter fullföljd gymnasieutbildning, fristående skolor, andel (%)"
  },
  {
    "id": "N17618",
    "title": "Ungdomar som studerar på högskola/universitet 2 år efter fullföljd gymnasieutbildning, fristående skolor, andel (%)"
  },
  {
    "id": "N17619",
    "title": "Ungdomar som är etablerade på arbetsmarknaden 2 år efter fullföljd gymnasieutbildning, fristående skolor, andel (%)"
  },
  {
    "id": "N17640",
    "title": "Gymnasieelever år 2: Mina lärare förklarar vad vi ska göra i skolarbetet så att jag förstår, positiva svar, andel (%)."
  },
  {
    "id": "N17641",
    "title": "Gymnasieelever år 2: Skolarbetet stimulerar mig att lära mig mer, positiva svar, andel (%)."
  },
  {
    "id": "N17642",
    "title": "Gymnasieelever år 2: Jag kan nå kunskapskraven i skolan om jag försöker, positiva svar, andel (%)."
  },
  {
    "id": "N17643",
    "title": "Gymnasieelever år 2: Mina lärare hjälper mig i skolarbetet när jag behöver det, positiva svar, andel (%)."
  },
  {
    "id": "N17644",
    "title": "Gymnasieelever år 2: Mina lärare uppmuntrar oss elever att reflektera över vad vi hör och läser, positiva svar, andel (%)."
  },
  {
    "id": "N17645",
    "title": "Gymnasieelever år 2: I min skola respekterar elever och lärare varandra, positiva svar, andel (%)."
  },
  {
    "id": "N17646",
    "title": "Gymnasieelever år 2: På lektionerna är vi elever med och påverkar på vilket sätt vi ska arbeta med olika skoluppgifter, positiva svar, andel (%)."
  },
  {
    "id": "N17647",
    "title": "Gymnasieelever år 2: Jag har studiero på lektionerna, positiva svar, andel (%)."
  },
  {
    "id": "N17648",
    "title": "Gymnasieelever år 2: Jag känner mig trygg i skolan, positiva svar, andel (%)."
  },
  {
    "id": "N17649",
    "title": "Gymnasieelever år 2: Jag vet vem på skolan jag kan prata med om någon har varit elak mot en elev, positiva svar, andel (%)."
  },
  {
    "id": "N17650",
    "title": "Gymnasieelever år 2: Jag är nöjd med min skola som helhet, positiva svar, andel (%)."
  },
  {
    "id": "N17800",
    "title": "Elever i gymnasieskola, hemkommun, antal"
  },
  {
    "id": "N17801",
    "title": "Gymnasieelever på yrkesprogram, andel (%)"
  },
  {
    "id": "N17802",
    "title": "Gymnasieelever på högskoleförberedande program, andel (%)"
  },
  {
    "id": "N17803",
    "title": "Gymnasieelever på introduktionsprogram (IM), andel (%)"
  },
  {
    "id": "N17804",
    "title": "Gymnasieelever som går i fristående gymnasieskola i den egna kommunen, andel (%)"
  },
  {
    "id": "N17805",
    "title": "Gymnasieelever som går i annan kommuns gymnasieskola, andel (%)"
  },
  {
    "id": "N17806",
    "title": "Gymnasieelever som går i fristående gymnasieskola i annan kommun, andel (%)"
  },
  {
    "id": "N17807",
    "title": "Gymnasieelever som går i regionkommunal gymnasieskola, andel (%)"
  },
  {
    "id": "N17812",
    "title": "Gymnasieelever i kommunens egna skolor eller kommunalförbunds skolor i kommunen, andel (%)"
  },
  {
    "id": "N17813",
    "title": "Lärare med pedagogisk högskoleexamen i gymnasieskola, lägeskommun, andel (%)"
  },
  {
    "id": "N17814",
    "title": "Lärare med pedagogisk högskoleexamen i kommunal gymnasieskola, andel (%)"
  },
  {
    "id": "N17815",
    "title": "Lärare med pedagogisk högskoleexamen i fristående gymnasieskola, andel (%)"
  },
  {
    "id": "N17816",
    "title": "Elever/lärare (heltidstjänst) i gymnasieskola, lägeskommun, antal"
  },
  {
    "id": "N17817",
    "title": "Elever/lärare (heltidstjänst) i kommunal gymnasieskola, antal."
  },
  {
    "id": "N17818",
    "title": "Elever/lärare (heltidstjänst) i fristående gymnasieskola, antal"
  },
  {
    "id": "N17819",
    "title": "Elever i gymnasieskola, lägeskommun, antal"
  },
  {
    "id": "N17820",
    "title": "Elever i kommunal gymnasieskola i kommunen, antal"
  },
  {
    "id": "N17821",
    "title": "Elever i fristående gymnasieskola i kommunen, antal"
  },
  {
    "id": "N17822",
    "title": "Lärare (heltidstjänst) i gymnasieskola, lägeskommun, antal"
  },
  {
    "id": "N17823",
    "title": "Lärare (heltidstjänst) i kommunal gymnasieskola i kommunen, antal"
  },
  {
    "id": "N17824",
    "title": "Lärare (heltidstjänst) i fristående gymnasieskola i kommunen, antal."
  },
  {
    "id": "N17825",
    "title": "Lärare (Årsarbetare) med lärarlegitimation och behörighet i minst ett ämne i gymnasieskola, lägeskommun, andel (%)"
  },
  {
    "id": "N17826",
    "title": "Lärare (Årsarbetare) med lärarlegitimation och behörighet i minst ett ämne i gymnasieskola, kommunala skolor, andel (%)"
  },
  {
    "id": "N17827",
    "title": "Lärare (Årsarbetare) med lärarlegitimation och behörighet i minst ett ämne i gymnasieskola, fristående skolor, andel (%)"
  },
  {
    "id": "N17828",
    "title": "Gymnasieelever vars föräldrar har eftergymnasial utbildning, lägeskommun, andel (%)"
  },
  {
    "id": "N17829",
    "title": "Flickor i gymnasieskola åk. 1-3, elever i gymnasieskola belägen i kommunen, andel (%)"
  },
  {
    "id": "N17830",
    "title": "Utländsk bakgrund bland elever i år 1-3, lägeskommun, andel (%)"
  },
  {
    "id": "N17831",
    "title": "Elever vars föräldrar har eftergymnasial utbildning, kommunal gymnasieskola åk. 1-3, andel (%)"
  },
  {
    "id": "N17832",
    "title": "Flickor i gymnasieskola år 1-3, elever i kommunal gymnasieskola, andel (%)"
  },
  {
    "id": "N17833",
    "title": "Utländsk bakgrund bland elever i år 1-3, kommunal gymnasieskola, andel (%)"
  },
  {
    "id": "N17834",
    "title": "Elever vars föräldrar har eftergymnasial utbildning, fristående gymnasieskola, andel (%)"
  },
  {
    "id": "N17835",
    "title": "Flickor i gymnasieskola åk. 1-3, elever i fristående gymnasieskola, andel (%)"
  },
  {
    "id": "N17836",
    "title": "Utländsk bakgrund bland elever i åk. 1-3, fristående gymnasieskola, andel (%)"
  },
  {
    "id": "N17837",
    "title": "Gymnasieelever på högskoleförberedande program i kommunal gymnasieskola, andel (%)"
  },
  {
    "id": "N17838",
    "title": "Gymnasieelever på högskoleförberedande program i fristående gymnasieskola, andel (%)"
  },
  {
    "id": "N17839",
    "title": "Gymnasieelever på yrkesprogram i kommunal gymnasieskola, andel (%)"
  },
  {
    "id": "N17840",
    "title": "Gymnasieelever på yrkesprogram i fristående gymnasieskola, andel (%)"
  },
  {
    "id": "N17841",
    "title": "Gymnasieelever på introduktionsprogram i kommunal gymnasieskola, andel (%)"
  },
  {
    "id": "N17842",
    "title": "Gymnasieelever på introduktionsprogram i fristående gymnasieskola, andel (%)"
  },
  {
    "id": "N17895",
    "title": "Gymnasieelever i kommunens egna skolor, andel (%)"
  },
  {
    "id": "N17896",
    "title": "Gymnasieelever i andra kommuners, kommunalförbunds och landstings skolor, andel (%)"
  },
  {
    "id": "N17897",
    "title": "Gymnasieelever i fristående gymnasieskolor, andel (%)"
  },
  {
    "id": "N17898",
    "title": "Sökande till gymnasieskolan intagna på förstahandsval, andel (%)"
  },
  {
    "id": "N17899",
    "title": "Gymnasiefrekvens, (%)"
  },
  {
    "id": "N17901",
    "title": "Nyinvandrade elever i gymnasieskola, hemkommun, andel (%)"
  },
  {
    "id": "N17902",
    "title": "Nyinvandrade och elever med okänd bakgrund i kommunal gymnasieskola, andel (%)"
  },
  {
    "id": "N17903",
    "title": "Nyinvandrade och elever med okänd bakgrund i fristående gymnasieskola, andel (%)"
  },
  {
    "id": "N18001",
    "title": "Kostnad komvux, kr/heltidsstuderande"
  },
  {
    "id": "N18002",
    "title": "Nettokostnad grundsärskola, kr/inv"
  },
  {
    "id": "N18003",
    "title": "Nettokostnad gymnasiesärskola, kr/inv"
  },
  {
    "id": "N18004",
    "title": "Nettokostnad grundläggande vuxenutbildning, kr/inv"
  },
  {
    "id": "N18005",
    "title": "Nettokostnad gymnasial vuxenutbildning, kr/inv"
  },
  {
    "id": "N18006",
    "title": "Nettokostnad särvux, kr/inv"
  },
  {
    "id": "N18007",
    "title": "Nettokostnad högskoleutbildning, kr/inv"
  },
  {
    "id": "N18008",
    "title": "Nettokostnad svenska för invandrare, kr/inv"
  },
  {
    "id": "N18009",
    "title": "Nettokostnad uppdragsutbildning, kr/inv"
  },
  {
    "id": "N18010",
    "title": "Kostnad grundsärskola, exkl. skolskjuts, kr/inv"
  },
  {
    "id": "N18011",
    "title": "Kostnad gymnasiesärskola, kr/inv"
  },
  {
    "id": "N18012",
    "title": "Kostnad grundläggande vuxenutbildning, kr/inv"
  },
  {
    "id": "N18013",
    "title": "Kostnad gymnasial vuxenutbildning, kr/inv"
  },
  {
    "id": "N18014",
    "title": "Kostnad särvux, kr/inv"
  },
  {
    "id": "N18015",
    "title": "Kostnad högskoleutbildning, kr/inv"
  },
  {
    "id": "N18016",
    "title": "Kostnad svenska för invandrare, kr/inv"
  },
  {
    "id": "N18017",
    "title": "Kostnad uppdragsutbildning, kr/inv"
  },
  {
    "id": "N18018",
    "title": "Nettokostnad grundsärskola, exkl. skolskjuts, kr/elev"
  },
  {
    "id": "N18019",
    "title": "Lärare/pedagogisk personal med specialpedagogisk högskoleexamen i särskola, andel (%)"
  },
  {
    "id": "N18020",
    "title": "Nettokostnad grundl. vuxenutbildning, kr/heltidsstuderande"
  },
  {
    "id": "N18021",
    "title": "Kostnad grundsärskola, exkl. skolskjuts, kr/elev"
  },
  {
    "id": "N18022",
    "title": "Köp av övrig utbildning, totalt, andel (%)"
  },
  {
    "id": "N18023",
    "title": "Köp av övrig utbildning från privatägda företag, andel (%)"
  },
  {
    "id": "N18024",
    "title": "Köp av övrig utbildning från föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N18025",
    "title": "Köp av övrig utbildning från andra kommuner, andel (%)"
  },
  {
    "id": "N18026",
    "title": "Köp av övrig utbildning från övriga motparter, andel (%)"
  },
  {
    "id": "N18027",
    "title": "Kostnad för kommunal grundsärskola, kr/elev"
  },
  {
    "id": "N18028",
    "title": "Kostnad för lokaler i kommunal grundsärskola, kr/elev"
  },
  {
    "id": "N18029",
    "title": "Kostnad för undervisning i kommunal grundsärskola, kr/elev"
  },
  {
    "id": "N18030",
    "title": "Kostnad för måltider i kommunal grundsärskola, kr/elev"
  },
  {
    "id": "N18031",
    "title": "Kostnad för lärverktyg i kommunal grundsärskola, kr/elev"
  },
  {
    "id": "N18032",
    "title": "Kostnad för elevhälsa i kommunal grundsärskola, kr/elev"
  },
  {
    "id": "N18033",
    "title": "Övriga kostnader i kommunal grundsärskola, kr/elev"
  },
  {
    "id": "N18034",
    "title": "Kostnad för kommunal gymnasiesärskola, kr/elev"
  },
  {
    "id": "N18035",
    "title": "Kostnad för lokaler i kommunal gymnasiesärskola, kr/elev"
  },
  {
    "id": "N18036",
    "title": "Kostnad för undervisning i kommunal gymnasiesärskola, kr/elev"
  },
  {
    "id": "N18037",
    "title": "Kostnad för måltider i kommunal gymnasiesärskola, kr/elev"
  },
  {
    "id": "N18038",
    "title": "Kostnad för lärverktyg i kommunal gymnasiesärskola, kr/elev"
  },
  {
    "id": "N18039",
    "title": "Kostnad för elevhälsa i kommunal gymnasiesärskola, kr/elev"
  },
  {
    "id": "N18040",
    "title": "Övriga kostnader i kommunal gymnasiesärskola, kr/elev"
  },
  {
    "id": "N18041",
    "title": "Elever per undervisningsgrupp i särvux, antal"
  },
  {
    "id": "N18100",
    "title": "Nettokostnad gymnasial vuxenutbildning, kr/heltidsstuderande"
  },
  {
    "id": "N18101",
    "title": "Kostnad vuxenutbildning, kr/inv 20-64 år"
  },
  {
    "id": "N18406",
    "title": "Kursdeltagare inom SFI på studieväg 1, andel (%)"
  },
  {
    "id": "N18407",
    "title": "Kursdeltagare inom SFI på studieväg 2, andel (%)"
  },
  {
    "id": "N18408",
    "title": "Kursdeltagare inom SFI på studieväg 3, andel (%)"
  },
  {
    "id": "N18409",
    "title": "Elever på SFI som klarat minst två kurser, av nybörjare två år tidigare, andel (%)"
  },
  {
    "id": "N18410",
    "title": "Elever på SFI som fortsätter utbildningen men klarat mindre än två kurser, av nybörjare två år tidigare, andel (%)"
  },
  {
    "id": "N18411",
    "title": "Elever på SFI som avbrutit  utbildningen och klarat mindre än två kurser, av nybörjare två år tidigare, andel (%)"
  },
  {
    "id": "N18412",
    "title": "Elever på SFI som avbrutit som är förvärvsarbetande av nybörjare två år tidigare, andel (%)"
  },
  {
    "id": "N18413",
    "title": "Elever på SFI som avbrutit som antingen arbetar eller studerar av nybörjare två år tidigare, andel (%)"
  },
  {
    "id": "N18414",
    "title": "Elever på SFI som avbrutit som studerar av nybörjare två år tidigare, andel (%)"
  },
  {
    "id": "N18500",
    "title": "Kursdeltagare i gymnasial vuxenutbildning som vid årets slut slutfört kurs, andel (%)"
  },
  {
    "id": "N18701",
    "title": "Elever på SFI som är skyddsbehövande och anhöriga till skyddsbehövande, andel (%)"
  },
  {
    "id": "N18702",
    "title": "Elever på SFI med 0-6 års utbildning, andel (%)"
  },
  {
    "id": "N18703",
    "title": "Lärare i SFI med pedagogisk högskoleexamen, andel (%)"
  },
  {
    "id": "N18704",
    "title": "Lärare i SFI med lärarlegitimation, andel (%)"
  },
  {
    "id": "N18705",
    "title": "Elever per lärare i SFI, heltidstjänster"
  },
  {
    "id": "N18706",
    "title": "Elever i grundsärskola, lägeskommun, antal"
  },
  {
    "id": "N18707",
    "title": "Elever i träningsskola grundsärskola, lägeskommun, andel (%)"
  },
  {
    "id": "N18708",
    "title": "Elever i grundsärskolan, integrerade i grundskolan, lägeskommun, andel (%)"
  },
  {
    "id": "N18709",
    "title": "Lärare i grundsärskola belägen i kommunen, antal"
  },
  {
    "id": "N18710",
    "title": "Lärare med pedagogisk högskoleexamen i grundsärskola, lägeskommun, andel (%)"
  },
  {
    "id": "N18711",
    "title": "Elever/lärare (heltidstjänst) i grundsärskola, lägeskommun, antal"
  },
  {
    "id": "N18712",
    "title": "Elever i gymnasiesärskola, lägeskommun, antal"
  },
  {
    "id": "N18713",
    "title": "Elever i gymnasiesärskola på Individuella program, andel (%)"
  },
  {
    "id": "N18714",
    "title": "Elever i gymnasiesärskola på Nationella program, andel (%)"
  },
  {
    "id": "N18715",
    "title": "Lärare i gymnasiesärskola belägen i kommunen, antal"
  },
  {
    "id": "N18716",
    "title": "Lärare med pedagogisk högskoleexamen i gymnasiesärskola, lägeskommun, andel (%)"
  },
  {
    "id": "N18717",
    "title": "Lärare med specialpedagogisk högskoleexamen i gymnasiesärskola, lägeskommun, andel (%)"
  },
  {
    "id": "N18718",
    "title": "Elever/lärare (heltidstjänst) i gymnasiesärskola, lägeskommun, antal"
  },
  {
    "id": "N18719",
    "title": "Elever i särvux, lägeskommun, antal"
  },
  {
    "id": "N18720",
    "title": "Särvuxelever i kommunal skola folkbokförda i annan kommun, andel (%)"
  },
  {
    "id": "N18721",
    "title": "Elever i särvux på grundsärskolenivå, lägeskommun, andel (%)"
  },
  {
    "id": "N18722",
    "title": "Elever i särvux på gymnasiesärskolenivå, lägeskommun, andel (%)"
  },
  {
    "id": "N18723",
    "title": "Elever i särvux på träningsskolenivå, lägeskommun, andel (%)"
  },
  {
    "id": "N18724",
    "title": "Undervisningstimmar per elev och vecka inom särvux, antal timmar"
  },
  {
    "id": "N18800",
    "title": "Elever i kommunens egen SFI-utbildning, andel (%)"
  },
  {
    "id": "N18801",
    "title": "Elever i SFI-utbildning, antal"
  },
  {
    "id": "N18803",
    "title": "Elever i grundsärskola, hemkommun, antal"
  },
  {
    "id": "N18804",
    "title": "Elever i gymnasiesärskola, hemkommun, antal"
  },
  {
    "id": "N18890",
    "title": "Elever i grundsärskola, hemkommun, andel (%)"
  },
  {
    "id": "N18891",
    "title": "Invånare 20-64 år som deltar i vuxenutbildning , andel (%)"
  },
  {
    "id": "N18892",
    "title": "Kursdeltagare i kommunal vuxenutbildning i egen regi, andel (%)"
  },
  {
    "id": "N18893",
    "title": "Elever i kommunal vuxenutbildning som läser grundläggande vuxenutbildning, andel (%)"
  },
  {
    "id": "N18894",
    "title": "Elever i kommunal vuxenutbildning som läser gymnasial vuxenutbildning, andel (%)"
  },
  {
    "id": "N18896",
    "title": "Elever i kommunal grundläggande vuxenutbildning hemkommun, antal"
  },
  {
    "id": "N18897",
    "title": "Elever i kommunal vuxenutbildning hemkommun, antal"
  },
  {
    "id": "N18898",
    "title": "Elever i kommunal gymnasial vuxenutbildning hemkommun, antal"
  },
  {
    "id": "N20001",
    "title": "Kostnad äldre och funktionsnedsättning (SoL, LSS, SFB), kr/inv"
  },
  {
    "id": "N20003",
    "title": "Referenskostnadskvot äldreomsorg, index"
  },
  {
    "id": "N20007",
    "title": "Kostnad äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N20010",
    "title": "Intäkter äldre och funktionsnedsättning (SoL, LSS, SFB), kr/inv"
  },
  {
    "id": "N20011",
    "title": "Nettokostnad äldre och funktionsnedsättning (SoL, LSS, SFB), kr/inv"
  },
  {
    "id": "N20013",
    "title": "Nettokostnad färdtjänst/riksfärdtjänst, kr/inv"
  },
  {
    "id": "N20014",
    "title": "Nettokostnad äldreomsorg, kr/inv"
  },
  {
    "id": "N20016",
    "title": "Referenskostnad äldreomsorg, kr/inv"
  },
  {
    "id": "N20024",
    "title": "Kostnad färdtjänst/riksfärdtjänst, kr/inv"
  },
  {
    "id": "N20027",
    "title": "Bruttokostnad lokaler funktionsnedsättning SoL, kr/inv"
  },
  {
    "id": "N20029",
    "title": "Nettokostnadsavvikelse äldreomsorg, miljoner kronor"
  },
  {
    "id": "N20030",
    "title": "Månadsavlönad personal, kommunalt anställda sjuksköterskor, antal"
  },
  {
    "id": "N20031",
    "title": "Månadsavlönad personal, kommunalt anställda undersköterskor/skötare, antal (-2017)"
  },
  {
    "id": "N20032",
    "title": "Månadsavlönad personal, kommunalt anställda vårdbiträden/vårdare, antal (-2017)"
  },
  {
    "id": "N20033",
    "title": "Månadsavlönad personal, kommunalt anställda i övrig vård och omsorg, antal"
  },
  {
    "id": "N20034",
    "title": "Månadsavlönad personal, kommunalt anställda i rehabilitering, antal"
  },
  {
    "id": "N20035",
    "title": "Månadsavlönad personal, kommunalt anställda inom vård och omsorg om äldre och personer med funktionsnedsättning, antal"
  },
  {
    "id": "N20036",
    "title": "Årsarbetare, kommunalt anställda sjuksköterskor, antal"
  },
  {
    "id": "N20037",
    "title": "Årsarbetare, kommunalt anställda undersköterskor/ skötare, antal (-2017)"
  },
  {
    "id": "N20038",
    "title": "Årsarbetare, kommunalt anställda vårdbiträden/vårdare, antal (-2017)"
  },
  {
    "id": "N20039",
    "title": "Årsarbetare, kommunalt anställda i övrig vård och omsorg, antal"
  },
  {
    "id": "N20040",
    "title": "Årsarbetare, kommunalt anställda i rehabilitering, antal"
  },
  {
    "id": "N20041",
    "title": "Årsarbetare, kommunalt anställda inom vård och omsorg om äldre och personer med funktionsnedsättning, antal"
  },
  {
    "id": "N20042",
    "title": "Kostnad för äldreomsorgen, andel av total driftskostnad (%)"
  },
  {
    "id": "N20043",
    "title": "Kostnad äldreomsorg, kr/inv"
  },
  {
    "id": "N20044",
    "title": "Nettokostnad omsorg om äldre och personer med funktionsnedsättning enl SoL totalt, kr/inv"
  },
  {
    "id": "N20046",
    "title": "Nettokostnad öppen verksamhet äldreomsorg, kr/inv"
  },
  {
    "id": "N20047",
    "title": "Kostnad öppen verksamhet äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N20048",
    "title": "Kostnad äldreomsorg, kr/inv 80+"
  },
  {
    "id": "N20049",
    "title": "Kostnad öppen verksamhet äldreomsorg, kr/inv 80+"
  },
  {
    "id": "N20050",
    "title": "Personalkostnad egen regi äldreomsorg, andel (%) av total produktionskostnad"
  },
  {
    "id": "N20055",
    "title": "Köp av vård och omsorg om äldre från privatägda företag, andel (%)"
  },
  {
    "id": "N20056",
    "title": "Köp av vård och omsorg om äldre från föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N20057",
    "title": "Avgiftsintäkter äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N20058",
    "title": "Bruttokostnad lokaler äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N20059",
    "title": "Externa lokalintäkter äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N20060",
    "title": "Kostnad lokaler exkl. externa lokalintäkter äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N20063",
    "title": "Övriga externa intäkter från andra än kommuner och regioner äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N20064",
    "title": "Externa intäkter från andra än kommuner och landsting äldreomsorg, kr/inv"
  },
  {
    "id": "N20065",
    "title": "Externa intäkter från andra än kommuner och landsting äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N20066",
    "title": "Åldersersättning äldreomsorg, kr/inv"
  },
  {
    "id": "N20067",
    "title": "Behovsnivå äldreomsorg, kr/inv"
  },
  {
    "id": "N20068",
    "title": "Produktionsförutsättningar äldreomsorg, kr/inv"
  },
  {
    "id": "N20069",
    "title": "Gemensamma kostnader fördelade till vård och omsorg om äldre, andel (%)"
  },
  {
    "id": "N20070",
    "title": "Gemensamma kostnader fördelade till vård och omsorg totalt, andel (%)"
  },
  {
    "id": "N20200",
    "title": "Tillsvidareanställda månadsavlönade inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20201",
    "title": "Visstidsanställda månadsavlönade inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20202",
    "title": "Visstidsanställda timavlönade inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20203",
    "title": "Arbetad tid utförd av tillsvidareanställda månadsavlönade inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20204",
    "title": "Arbetad tid utförd av visstidsanställda månadsavlönade inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20205",
    "title": "Arbetad tid utförd av visstidsanställda timavlönade inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20206",
    "title": "Heltidsanställda månadsavlönade inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20207",
    "title": "Deltidsanställda (75-99 %) månadsavlönade inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20208",
    "title": "Deltidsanställda (1-74 %) månadsavlönade inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20209",
    "title": "Heltidsarbetande månadsavlönade inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20210",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20211",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20212",
    "title": "Anställda -34 år inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20213",
    "title": "Anställda 35-54 år inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20214",
    "title": "Anställda 55+ inom omsorg om äldre och personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N20217",
    "title": "Anställda utrikes födda inom omsorg om äldre och personer med funktionsnedsättning, balanstal"
  },
  {
    "id": "N20218",
    "title": "Årsarbetare, kommunalt anställd vårdpersonal inom vård och omsorg om äldre och personer med funktionsnedsättning, antal"
  },
  {
    "id": "N20222",
    "title": "Anställda 55+ år inom omsorg om äldre och personer med funktionsnedsättning, antal"
  },
  {
    "id": "N20223",
    "title": "Månadsavlönad personal, kommunalt anställda undersköterskor och skötare, antal"
  },
  {
    "id": "N20224",
    "title": "Månadsavlönad personal, kommunalt anställda i vård och omsorgsarbete, antal"
  },
  {
    "id": "N20225",
    "title": "Månadsavlönad personal, kommunalt anställda vårdbiträden, antal"
  },
  {
    "id": "N20226",
    "title": "Årsarbetare, kommunalt anställda undersköterskor och skötare, antal"
  },
  {
    "id": "N20227",
    "title": "Årsarbetare, kommunalt anställda i vård och omsorgsarbete, antal"
  },
  {
    "id": "N20229",
    "title": "Månadsavlönad personal, kommunalt anställda behandlingsassistenter och socialpedagoger, antal"
  },
  {
    "id": "N20242",
    "title": "Deltidsanställda (75-99 %) månadsavlönade inom vård och omsorg om äldre och personer med funktionsnedsättning, antal"
  },
  {
    "id": "N20243",
    "title": "Deltidsanställda (1-74 %) månadsavlönade inom vård och omsorg om äldre och personer med funktionsnedsättning, antal"
  },
  {
    "id": "N20244",
    "title": "Heltidsarbetande månadsavlönade inom vård och omsorg om äldre och personer med funktionsnedsättning, antal"
  },
  {
    "id": "N20245",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade inom vård och omsorg om äldre och personer med funktionsnedsättning, antal"
  },
  {
    "id": "N20246",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade inom vård och omsorg om äldre och personer med funktionsnedsättning, antal"
  },
  {
    "id": "N20248",
    "title": "Genomsnittlig sysselsättningsgrad för anställda månadsavlönade inom vård och omsorg om äldre och personer med funktionsnedsättning i kommunen, (%)"
  },
  {
    "id": "N20249",
    "title": "Årsarbetare, kommunalt anställda vårdbiträden, antal"
  },
  {
    "id": "N20251",
    "title": "Månadsavlönad personal, kommunalt anställda stödassistenter, stödpedagoger och vårdare m.fl, antal"
  },
  {
    "id": "N20252",
    "title": "Årsarbetare, kommunalt anställda behandlingsassistenter och socialpedagoger, antal"
  },
  {
    "id": "N20253",
    "title": "Årsarbetare, kommunalt anställda stödassistenter, stödpedagoger och vårdare m.fl, antal"
  },
  {
    "id": "N20402",
    "title": "Fallskador bland personer 80+, 3-årsm, antal/1000 inv."
  },
  {
    "id": "N20403",
    "title": "Medelvårdtid som utskrivningsklar, antal dagar"
  },
  {
    "id": "N20404",
    "title": "Vårdtid som utskrivningsklar, antal dagar/inv 65+"
  },
  {
    "id": "N20405",
    "title": "Vårdtillfällen som utskrivningsklar, antal/inv 65+"
  },
  {
    "id": "N20801",
    "title": "Köp av äldreomsorg och funktionshinder totalt, andel (%)"
  },
  {
    "id": "N20803",
    "title": "Äldreomsorg i enskild regi, andel (%) brukare"
  },
  {
    "id": "N20805",
    "title": "Köp av äldreomsorg, andel (%)"
  },
  {
    "id": "N20806",
    "title": "Köp av öppen verksamhet äldreomsorg, andel (%)"
  },
  {
    "id": "N20894",
    "title": "Invånare 65+ i särskilt boende eller med hemtjänst i ordinärt boende,  andel (%)"
  },
  {
    "id": "N20895",
    "title": "Invånare 80+ i särskilt boende eller med hemtjänst i ordinärt boende,  andel (%)"
  },
  {
    "id": "N20897",
    "title": "Invånare 65+ som varit mottagare av hälso- och sjukvård som kommunen ansvarar för (hemsjukvård), andel (%)"
  },
  {
    "id": "N20900",
    "title": "Nettokostnadsavvikelse äldreomsorg, (%)"
  },
  {
    "id": "N21003",
    "title": "Kostnad ordinärt boende äldreomsorg övrigt, kr/inv 65+"
  },
  {
    "id": "N21004",
    "title": "Kostnad korttidsvård äldreomsorg, kr/boendedygn"
  },
  {
    "id": "N21009",
    "title": "Kostnad hemtjänst äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N21013",
    "title": "Standardkostnad vård och omsorg om äldre, kr/inv"
  },
  {
    "id": "N21014",
    "title": "Kostnad dagverksamhet ordinärt boende äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N21015",
    "title": "Nettokostnad ordinärt boende äldreomsorg, kr/inv"
  },
  {
    "id": "N21016",
    "title": "Nettokostnad korttidsvård äldreomsorg, kr/inv"
  },
  {
    "id": "N21017",
    "title": "Nettokostnad hemtjänst äldreomsorg, kr/inv"
  },
  {
    "id": "N21018",
    "title": "Nettokostnad dagverksamhet äldreomsorg, kr/inv"
  },
  {
    "id": "N21019",
    "title": "Nettokostnad ordinärt boende äldreomsorg övrigt, kr/inv"
  },
  {
    "id": "N21020",
    "title": "Kostnad ordinärt boende äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N21021",
    "title": "Kostnad korttidsvård äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N21022",
    "title": "Kostnad ordinärt boende äldreomsorg, kr/inv 80+"
  },
  {
    "id": "N21023",
    "title": "Kostnad korttidsvård äldreomsorg, kr/inv 80+"
  },
  {
    "id": "N21024",
    "title": "Kostnad hemtjänst äldreomsorg, kr/inv 80+"
  },
  {
    "id": "N21025",
    "title": "Kostnad dagverksamhet äldreomsorg, kr/inv 80+"
  },
  {
    "id": "N21026",
    "title": "Kostnad ordinärt boende äldreomsorg övrigt, kr/inv 80+"
  },
  {
    "id": "N21030",
    "title": "Avgiftsintäkter ordinärt boende äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N21031",
    "title": "Externa lokalintäkter ordinärt boende äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N21802",
    "title": "Boendedygn korttidsvård, antal/inv 65+"
  },
  {
    "id": "N21804",
    "title": "Personer 65+ i ordinärt boende med hemtjänst i enskild regi, andel (%)"
  },
  {
    "id": "N21806",
    "title": "Köp av ordinärt boende äldreomsorg totalt, andel (%)"
  },
  {
    "id": "N21814",
    "title": "Medelålder för äldre i ordinärt boende med hemtjänst, år"
  },
  {
    "id": "N21816",
    "title": "Hemtjänsttagare 65+ med hemtjänst i ordinärt boende med 120+ beviljade timmar per månad, andel (%)"
  },
  {
    "id": "N21817",
    "title": "Invånare 65+ som var beviljade korttidsboende i ordinärt boende, andel (%)"
  },
  {
    "id": "N21818",
    "title": "Invånare 65+ som var beviljade dagverksamhet i ordinärt boende, andel (%)"
  },
  {
    "id": "N21819",
    "title": "Kostnad hemtjänst äldreomsorg, kr/hemtjänsttagare"
  },
  {
    "id": "N21820",
    "title": "Invånare 65-79 år med hemtjänst ordinärt boende, andel (%)"
  },
  {
    "id": "N21821",
    "title": "Invånare 65+ med hemtjänst i ordinärt boende, andel (%)"
  },
  {
    "id": "N21822",
    "title": "Hemtjänsttagare 65+ i ordinärt boende, antal"
  },
  {
    "id": "N21823",
    "title": "Hemtjänsttagare 65-79 i ordinärt boende, antal"
  },
  {
    "id": "N21824",
    "title": "Invånare 80+ med hemtjänst i ordinärt boende, andel (%)"
  },
  {
    "id": "N21825",
    "title": "Hemtjänsttagare 80+ i ordinärt boende, antal"
  },
  {
    "id": "N21826",
    "title": "Genomsnittligt antal beviljade hemtjänsttimmar per brukare och månad för timregistrerade hemtjänsttagare 65+ i ordinärt boende, timmar/hemtjänsttagare"
  },
  {
    "id": "N21827",
    "title": "Timregistrerade hemtjänsttagare 65+ i ordinärt boende, antal"
  },
  {
    "id": "N21900",
    "title": "Huvudmannaskap hemsjukvård?, (Ja=1, Nej=0)"
  },
  {
    "id": "N23004",
    "title": "Nettokostnad särskilt boende äldreomsorg, kr/inv"
  },
  {
    "id": "N23005",
    "title": "Kostnad särskilt boende äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N23006",
    "title": "Kostnad särskilt boende äldreomsorg, kr/inv 80+"
  },
  {
    "id": "N23009",
    "title": "Kostnad särskilt boende äldreomsorg, kr/brukare"
  },
  {
    "id": "N23010",
    "title": "Avgiftsintäkter särskilt boende äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N23011",
    "title": "Externa lokalintäkter särskilt boende äldreomsorg, kr/inv 65+"
  },
  {
    "id": "N23700",
    "title": "Genomsnittligt antal hemtjänsttimmar för timregistrerade hemtjänsttagare 65+ i ordinärt boende med hemtjänst, månaden före inflytt till särskilt boende, timmar/hemtjänsttagare"
  },
  {
    "id": "N23800",
    "title": "Invånare 65-79 år i särskilt boende, andel (%)"
  },
  {
    "id": "N23801",
    "title": "Invånare 80+ i särskilt boende, andel (%)"
  },
  {
    "id": "N23803",
    "title": "Personer 65+ i särskilda boendeformer i enskild regi, andel (%)"
  },
  {
    "id": "N23804",
    "title": "Köp av särskilt boende äldreomsorg totalt, andel (%)"
  },
  {
    "id": "N23805",
    "title": "Brukare 65+ i särskilt boende äldre, antal"
  },
  {
    "id": "N23806",
    "title": "Brukare 80+ i särskilt boende äldre, antal"
  },
  {
    "id": "N23807",
    "title": "Brukare 65-79 år i särskilt boende äldre, antal"
  },
  {
    "id": "N23809",
    "title": "Medelålder för äldre i särskilt boende, år"
  },
  {
    "id": "N23890",
    "title": "Invånare 65+ i särskilda boendeformer, andel (%)"
  },
  {
    "id": "N24001",
    "title": "Nettokostnad öppen verksamhet äldre och personer med funktionsnedsättning, kr/inv"
  },
  {
    "id": "N24002",
    "title": "Kostnad öppen verksamhet äldre och personer med funktionsnedsättning, kr/inv"
  },
  {
    "id": "N25004",
    "title": "Kostnad hemtjänst i ordinärt boende för personer med funktionsnedsättning, kr/inv"
  },
  {
    "id": "N25006",
    "title": "Kostnad insatser för personer med funktionsnedsättning totalt (SOL LSS SFB HSL) minus ers från f-kassan enl SFB, kr/inv"
  },
  {
    "id": "N25008",
    "title": "Kostnad funktionsnedsättning insatser i ordinärt boende enl. SoL, kr/inv"
  },
  {
    "id": "N25009",
    "title": "Kostnad särskilt boende insatser för funktionsneds enl. SoL exkl. lokalkostnader, kr/inv"
  },
  {
    "id": "N25016",
    "title": "Kostnad funktionsnedsättning LSS och SFB, kr/inv"
  },
  {
    "id": "N25017",
    "title": "Kostnad funktionsnedsättning LSS och SFB minus ersättning från FK enl SFB, kr/inv"
  },
  {
    "id": "N25018",
    "title": "Kostnad funktionsnedsättning totalt (SoL, LSS, SFB), minus ersättning från FK enl SFB, kr/inv"
  },
  {
    "id": "N25021",
    "title": "Kostnad funktionsnedsättning för personer 0-64 år enligt SoL, kr/inv"
  },
  {
    "id": "N25022",
    "title": "Kostnad funktionsnedsättning totalt (SoL, LSS, SFB), kr/inv"
  },
  {
    "id": "N25024",
    "title": "Månadsavlönad personal, kommunalt anställda personliga assistenter, antal"
  },
  {
    "id": "N25025",
    "title": "Årsarbetare, kommunalt anställda personliga assistenter, antal"
  },
  {
    "id": "N25026",
    "title": "Kostnad funktionsnedsättning totalt (SoL, LSS, SFB), andel av total driftskostnad (%)"
  },
  {
    "id": "N25027",
    "title": "Köp av verksamhet, funktionsneds SoL 0-64 år, andel %"
  },
  {
    "id": "N25028",
    "title": "Köp av insatser till personer med funktionsnedsättning (ej LSS/SFB) från privatägda företag, andel (%)"
  },
  {
    "id": "N25029",
    "title": "Köp av insatser till personer med funktionsnedsättning (ej LSS/SFB) från föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N25030",
    "title": "Gemensamma kostnader fördelade till funktionsnedsättning SoL, andel (%)"
  },
  {
    "id": "N25031",
    "title": "Kostnad boendestöd för personer med funktionsnedsättning enligt SoL, kr/inv"
  },
  {
    "id": "N25032",
    "title": "Kostnad korttidsboende / -vård för personer med funktionsnedsättning enligt SoL och HSL, kr/inv"
  },
  {
    "id": "N25033",
    "title": "Kostnad övrigt för personer med funktionsnedsättning enligt SoL, kr/inv"
  },
  {
    "id": "N25034",
    "title": "Nettokostnad funktionsnedsättning totalt (SoL,LSS,SFB), kr/inv"
  },
  {
    "id": "N25036",
    "title": "Avgiftsintäkter funktionsnedsättning totalt, kr/inv"
  },
  {
    "id": "N25039",
    "title": "Kostnad dagverksamhet för personer med funktionsnedsättning enligt SoL, kr/inv"
  },
  {
    "id": "N25040",
    "title": "Övriga externa intäkter från andra än kommuner och regioner funktionsnedsättning (SoL, LSS, SFB), kr/inv"
  },
  {
    "id": "N25041",
    "title": "Externa intäkter från andra än kommuner och landsting funktionsnedsättning (Sol, LSS, SFB), kr/inv"
  },
  {
    "id": "N25800",
    "title": "Kostnad LSS och SFB som andel av insatser för personer med funktionsnedsättning, andel (%)"
  },
  {
    "id": "N25801",
    "title": "Personer 0-64 år i särskilt boende, antal (-2017)"
  },
  {
    "id": "N25890",
    "title": "Invånare 0-64 år med särskilt boende funktionsneds, andel (%) (-2017)"
  },
  {
    "id": "N25891",
    "title": "Invånare 0-64 år med hemtjänst i ordinärt boende funktionsneds, andel (%)"
  },
  {
    "id": "N25892",
    "title": "Invånare 0-64 år med hemtjänst eller särskilt boende, andel (%) (-2017)"
  },
  {
    "id": "N25893",
    "title": "Invånare 0-64 år med kommunal hälso- och sjukvård  (%)"
  },
  {
    "id": "N25894",
    "title": "Invånare 0-64 år med hemtjänst eller särskilt boende funktionsnedsättning, andel (%)"
  },
  {
    "id": "N26003",
    "title": "Kostnad hemtjänst i ordinärt boende för personer med funktionsnedsättning, kr/brukare"
  },
  {
    "id": "N26029",
    "title": "Kostnad funktionsnedsättning särskilt boende enl SoL 0-64 år, kr/inv"
  },
  {
    "id": "N26800",
    "title": "Beviljade/beräknade hemtjänsttimmar per månad och person 0-64 med hemtjänst i ordinärt boende, antal"
  },
  {
    "id": "N26801",
    "title": "Invånare 0-64 år med boendestöd, andel (%)"
  },
  {
    "id": "N26802",
    "title": "Personer 0-64 år i ordinärt boende med hemtjänst enligt SoL, antal"
  },
  {
    "id": "N26803",
    "title": "Invånare 0-64 år med boendestöd, antal"
  },
  {
    "id": "N26804",
    "title": "Invånare 0-64 år med särskilt boende funktionsnedsättning, andel (%)"
  },
  {
    "id": "N26805",
    "title": "Invånare 0-64 år med särskilt boende funktionsnedsättning, antal"
  },
  {
    "id": "N26806",
    "title": "Invånare 0-64 år med hemtjänst i ordinärt boende funktionsnedsättning, andel (%)"
  },
  {
    "id": "N26807",
    "title": "Invånare 0-64 år med hemtjänst i ordinärt boende funktionsnedsättning, antal"
  },
  {
    "id": "N28007",
    "title": "Kostnad insatser enligt LSS och SFB, minus ersättning från FK , kr/inv"
  },
  {
    "id": "N28008",
    "title": "Kostnad personlig assistans enl. LSS/SFB minus ersättning från Försäkringskassan, kr/inv"
  },
  {
    "id": "N28009",
    "title": "Kostnad funktionsnedsättning LSS daglig verksamhet, kr/inv"
  },
  {
    "id": "N28010",
    "title": "Kommunens ersättning från Försäkringskassan för personlig assistans enligt SFB, kr/inv"
  },
  {
    "id": "N28011",
    "title": "Kostnad funktionsnedsättning LSS övriga insatser, kr/inv"
  },
  {
    "id": "N28012",
    "title": "Kostnad funktionsnedsättning LSS boende, kr/inv"
  },
  {
    "id": "N28013",
    "title": "Kostnad funktionsnedsättning LSS boende, kr/brukare"
  },
  {
    "id": "N28015",
    "title": "Kostnad funktionsnedsättning LSS daglig verksamhet, kr/brukare"
  },
  {
    "id": "N28016",
    "title": "Nettokostnad funktionsnedsättning LSS och SFB, kr/inv"
  },
  {
    "id": "N28017",
    "title": "Standardkostnad LSS, kr/inv"
  },
  {
    "id": "N28018",
    "title": "Nettokostnadsavvikelse LSS, (%)"
  },
  {
    "id": "N28020",
    "title": "Kommunens ersättning till Försäkringskassan för personlig assistans enligt  SFB, kr/inv"
  },
  {
    "id": "N28024",
    "title": "Referenskostnadskvot LSS, index"
  },
  {
    "id": "N28026",
    "title": "Referenskostnad LSS, kr/inv"
  },
  {
    "id": "N28027",
    "title": "Köp av verksamhet funktionsnedsättning LSS och SFB, andel (%)"
  },
  {
    "id": "N28028",
    "title": "Köp av insatser enligt LSS/SFB från privatägda företag, andel (%)"
  },
  {
    "id": "N28029",
    "title": "Köp av insatser enligt LSS/SFB från föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N28030",
    "title": "Gemensamma kostnader fördelade till funktionsnedsättning LSS och SFB, andel (%)"
  },
  {
    "id": "N28031",
    "title": "Övriga externa intäkter från andra än kommuner och regioner funktionsnedsättning (LSS SFB), kr/inv"
  },
  {
    "id": "N28032",
    "title": "Personalkostnad, andel av produktionskostnad funktionsnedsättning LSS (%)"
  },
  {
    "id": "N28033",
    "title": "Bruttokostnad lokaler funktionsnedsättning LSS, kr/inv"
  },
  {
    "id": "N28034",
    "title": "Externa intäkter från andra än kommuner och regioner funktionsnedsättning LSS, kr/inv"
  },
  {
    "id": "N28035",
    "title": "Avgiftsintäkter funktionsnedsättning LSS, kr/inv"
  },
  {
    "id": "N28036",
    "title": "Externa lokalintäkter funktionsnedsättning LSS, kr/inv"
  },
  {
    "id": "N28037",
    "title": "Personalkostnad (inkl schablon för köp) funktionsnedsättning LSS boende, kr/brukare"
  },
  {
    "id": "N28040",
    "title": "Personalkostnadsindex LSS, index"
  },
  {
    "id": "N28801",
    "title": "Personer med boende enligt LSS, antal"
  },
  {
    "id": "N28802",
    "title": "Personer med boende enligt LSS, andel (%) av totalt antal personer med insatser enligt LSS"
  },
  {
    "id": "N28803",
    "title": "Personer med daglig verksamhet, andel (%) av totalt antal personer med insatser enligt LSS (%)"
  },
  {
    "id": "N28804",
    "title": "Personer med daglig verksamhet enligt LSS, antal"
  },
  {
    "id": "N28805",
    "title": "Personer med personlig assistans enligt LSS, antal"
  },
  {
    "id": "N28806",
    "title": "Personer med ledsagarservice enligt LSS, antal"
  },
  {
    "id": "N28807",
    "title": "Personer med kontaktperson enligt LSS, antal"
  },
  {
    "id": "N28808",
    "title": "Personer med avlösarservice enligt LSS, antal"
  },
  {
    "id": "N28809",
    "title": "Personer med korttidsvistelse enligt LSS, antal"
  },
  {
    "id": "N28810",
    "title": "Personer med korttidstillsyn enligt LSS, antal"
  },
  {
    "id": "N28811",
    "title": "Personer med personlig assistans enligt SFB, antal"
  },
  {
    "id": "N28812",
    "title": "Personer med ledsagarservice enligt LSS, antal/10 000 inv"
  },
  {
    "id": "N28813",
    "title": "Personer med kontaktperson enligt LSS, antal/10 000 inv"
  },
  {
    "id": "N28814",
    "title": "Personer med avlösarservice enligt LSS, antal/10 000 inv"
  },
  {
    "id": "N28815",
    "title": "Personer med korttidsvistelse enligt LSS, antal/10 000 inv"
  },
  {
    "id": "N28816",
    "title": "Personer med korttidstillsyn enligt LSS, antal/10 000 inv"
  },
  {
    "id": "N28817",
    "title": "Personer med personlig assistans enligt SFB, antal/10 000 inv"
  },
  {
    "id": "N28818",
    "title": "Personer med personlig assistans enligt LSS, antal/10 000 inv"
  },
  {
    "id": "N28819",
    "title": "Personer med daglig verksamhet enligt LSS, antal/10 000 inv"
  },
  {
    "id": "N28820",
    "title": "Personer med boende enligt LSS, antal/10 000 inv"
  },
  {
    "id": "N28821",
    "title": "Genomsnittligt antal timmar per vecka, personlig assistans enligt SFB, timmar/vecka"
  },
  {
    "id": "N28890",
    "title": "Invånare 0-64 år med insatser enl. LSS, andel (%)"
  },
  {
    "id": "N28891",
    "title": "Invånare 0-22 år med insatser enligt LSS, antal/10 000 inv 0-22 år"
  },
  {
    "id": "N28892",
    "title": "Invånare med insatser enl. LSS, andel (%)"
  },
  {
    "id": "N29002",
    "title": "Kostnad funktionsnedsättning öppen verksamhet enl SoL, kr/inv"
  },
  {
    "id": "N30001",
    "title": "Nettokostnadsavvikelse individ- och familjeomsorg, (%)"
  },
  {
    "id": "N30003",
    "title": "Referenskostnadskvot individ- och familjeomsorg, index"
  },
  {
    "id": "N30004",
    "title": "Intäkter individ- och familjeomsorg, kr/inv"
  },
  {
    "id": "N30005",
    "title": "Nettokostnad individ- och familjeomsorg, kr/inv"
  },
  {
    "id": "N30007",
    "title": "Referenskostnad individ- och familjeomsorg, kr/inv"
  },
  {
    "id": "N30009",
    "title": "Månadsavlönad personal, kommunalt anställda socialsekreterare m fl, antal (-2017)"
  },
  {
    "id": "N30010",
    "title": "Månadsavlönad personal, kommunalt anställda inom individ- och familjeomsorg, antal"
  },
  {
    "id": "N30011",
    "title": "Årsarbetare, kommunalt anställda socialsekreterare m fl, antal (-2017)"
  },
  {
    "id": "N30012",
    "title": "Årsarbetare, kommunalt anställda inom individ- och familjeomsorg, antal"
  },
  {
    "id": "N30014",
    "title": "Standardkostnad individ- och familjeomsorg, kr/inv"
  },
  {
    "id": "N30020",
    "title": "Köp av övrig IFO, totalt, andel (%)"
  },
  {
    "id": "N30021",
    "title": "Köp av övrig IFO från privatägda företag, andel (%)"
  },
  {
    "id": "N30022",
    "title": "Köp av övrig IFO från föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N30023",
    "title": "Köp av övrig IFO från andra kommuner, andel (%)"
  },
  {
    "id": "N30024",
    "title": "Köp av övrig IFO från övriga motparter, andel (%)"
  },
  {
    "id": "N30026",
    "title": "Nettokostnadsavvikelse individ- och familjeomsorg, miljoner kronor"
  },
  {
    "id": "N30100",
    "title": "Kostnad för individ- och familjeomsorgen, andel av total driftskostnad (%)"
  },
  {
    "id": "N30101",
    "title": "Kostnad individ- och familjeomsorg, kr/inv"
  },
  {
    "id": "N30200",
    "title": "Tillsvidareanställda månadsavlönade inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30201",
    "title": "Visstidsanställda månadsavlönade inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30202",
    "title": "Visstidsanställda timavlönade inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30203",
    "title": "Arbetad tid utförd av tillsvidareanställda månadsavlönade inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30204",
    "title": "Arbetad tid utförd av visstidsanställda månadsavlönade inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30205",
    "title": "Arbetad tid utförd av visstidsanställda timavlönade inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30206",
    "title": "Heltidsanställda månadsavlönade inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30207",
    "title": "Deltidsanställda (75-99 %) månadsavlönade inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30208",
    "title": "Deltidsanställda (1-74 %) månadsavlönade inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30209",
    "title": "Heltidsarbetande månadsavlönade inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30210",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30211",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30212",
    "title": "Anställda -34 år inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30213",
    "title": "Anställda 35-54 år inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30214",
    "title": "Anställda 55+ inom individ- och familjeomsorg, andel (%)"
  },
  {
    "id": "N30217",
    "title": "Anställda utrikes födda inom individ- och familjeomsorg, balanstal"
  },
  {
    "id": "N30218",
    "title": "Anställda 55+ år inom individ- och familjeomsorg, antal"
  },
  {
    "id": "N30220",
    "title": "Månadsavlönad personal, kommunalt anställda i övrigt socialt och  kurativt arbete, antal"
  },
  {
    "id": "N30221",
    "title": "Månadsavlönad personal, kommunalt anställda i IFO, omsorg och integration, antal"
  },
  {
    "id": "N30222",
    "title": "Månadsavlönad personal, kommunalt anställda socialsekreterare, antal"
  },
  {
    "id": "N30223",
    "title": "Årsarbetare, kommunalt anställda socialsekreterare, antal"
  },
  {
    "id": "N30224",
    "title": "Årsarbetare, kommunalt anställda i IFO, omsorg och integration, antal"
  },
  {
    "id": "N30225",
    "title": "Årsarbetare, kommunalt anställda i övrigt socialt och kurativt arbete, antal"
  },
  {
    "id": "N30800",
    "title": "Köp av individ och familjeomsorg totalt, andel (%)"
  },
  {
    "id": "N31001",
    "title": "Kostnad ekonomiskt bistånd, kr/inv"
  },
  {
    "id": "N31002",
    "title": "Kostnad utbetalt ekonomiskt bistånd, kr/inv"
  },
  {
    "id": "N31003",
    "title": "Kostnad övrigt ekonomiskt bistånd (ej utbet ek bistånd), kr/inv"
  },
  {
    "id": "N31004",
    "title": "Utbetalt ekonomiskt bistånd (enl Sos exkl flyktinghushåll), kr/inv"
  },
  {
    "id": "N31006",
    "title": "Utbetalt ekonomiskt bistånd per hushåll (exkl flyktinghushåll), kr/hushåll"
  },
  {
    "id": "N31007",
    "title": "Intäkter ekonomiskt bistånd, kr/inv"
  },
  {
    "id": "N31008",
    "title": "Nettokostnad ekonomiskt bistånd, kr/inv"
  },
  {
    "id": "N31805",
    "title": "Genomsnittlig månadsutbetalning (enl SoS) till hushåll exkl. flyktinghushåll, kr"
  },
  {
    "id": "N31806",
    "title": "Genomsnittlig månadsutbetalning till flyktinghushåll (enl SoS), kr"
  },
  {
    "id": "N31807",
    "title": "Invånare som någon gång under året erhållit ekonomiskt bistånd, andel (%) av bef."
  },
  {
    "id": "N31811",
    "title": "Genomsnittlig biståndsperiod, månader per år (-2016)"
  },
  {
    "id": "N31814",
    "title": "Vuxna biståndsmottagare med långvarigt ekonomiskt bistånd, andel (%)"
  },
  {
    "id": "N31816",
    "title": "Vuxna biståndsmottagare med långvarigt ekonomiskt bistånd, andel (%) av befolkningen"
  },
  {
    "id": "N33001",
    "title": "Kostnad barn och ungdomsvård, kr/inv"
  },
  {
    "id": "N33002",
    "title": "Kostnad HVB-hem för barn och unga kr/inv 0-20 år"
  },
  {
    "id": "N33004",
    "title": "Kostnad familjehemsvård barn och unga, kr/inv 0-20 år"
  },
  {
    "id": "N33007",
    "title": "Kostnad HVB-hem barn och unga, kr/inv"
  },
  {
    "id": "N33008",
    "title": "Kostnad familjehemsvård barn och unga, kr/inv"
  },
  {
    "id": "N33009",
    "title": "Kostnad öppna insatser barn och unga, kr/inv"
  },
  {
    "id": "N33010",
    "title": "Kostnad öppna insatser barn och unga, individuellt behovsprövad, kr/inv"
  },
  {
    "id": "N33011",
    "title": "Kostnad öppna insatser barn och unga övr. öppna ins. kr/inv"
  },
  {
    "id": "N33012",
    "title": "Intäkter barn och ungdomsvård, kr/inv"
  },
  {
    "id": "N33016",
    "title": "Nettokostnad barn och ungdomsvård, kr/inv"
  },
  {
    "id": "N33021",
    "title": "Kostnad öppna insatser barn och unga, kr/inv 0-20 år"
  },
  {
    "id": "N33022",
    "title": "Kostnad familje- och HVB-hem barn och unga, kr/inv 0-20 år"
  },
  {
    "id": "N33023",
    "title": "Köp av barn och ungdomsvård, totalt, andel (%)"
  },
  {
    "id": "N33024",
    "title": "Köp av barn och ungdomsvård från privatägda företag, andel (%)"
  },
  {
    "id": "N33025",
    "title": "Köp av barn och ungdomsvård från föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N33026",
    "title": "Köp av barn och ungdomsvård från andra kommuner, andel (%)"
  },
  {
    "id": "N33027",
    "title": "Köp av barn och ungdomsvård från övriga motparter, andel (%)"
  },
  {
    "id": "N33100",
    "title": "Kostnad för HVB-hem, barn och unga 0-20 år, kr/vårddygn (genomsnitt)"
  },
  {
    "id": "N33101",
    "title": "Kostnad/vårddygn för familjehemsvård av barn och unga 0-20 år, kr (genomsnitt)"
  },
  {
    "id": "N33800",
    "title": "Vårddygn i HVB-hem per barn och unga Invånare (0-20 år) i kommunen, antal/person"
  },
  {
    "id": "N33801",
    "title": "Vårddygn i familjehem per barn och unga Invånare (0-20 år) i kommunen, antal/person"
  },
  {
    "id": "N33802",
    "title": "Invånare 0-20 år som var föremål för individuellt biståndsbedömda öppna insatser, andel (%)"
  },
  {
    "id": "N33803",
    "title": "Barn och unga 13-20 år som var föremål för individuellt behovsprövade öppna insatser , andel (%)"
  },
  {
    "id": "N33804",
    "title": "Barn och unga placerade på HVB-hem, andel (%) av totala antalet placerade barn och unga 0-20 år"
  },
  {
    "id": "N33805",
    "title": "Barn och unga placerade i familjehem , andel (%) av totala antalet placerade barn och unga 0-20 år"
  },
  {
    "id": "N33806",
    "title": "Vårddygn i HVB-hem av totalt antal vårddygn för barn och unga 0-20 år, andel  (%)"
  },
  {
    "id": "N33807",
    "title": "Vårddygn i familjehemsvård av totalt antal vårddygn för barn och unga 0-20 år, andel  (%)"
  },
  {
    "id": "N33808",
    "title": "Invånare 0-20 år placerade på HVB-hem eller i familjehem, antal/1000 inv 0-20 år"
  },
  {
    "id": "N33809",
    "title": "Barn och unga 0-20 år med individuellt behovsprövad öppenvård, andel av barn och unga med insats, (%)"
  },
  {
    "id": "N33810",
    "title": "Invånare 0-20 år placerade på HVB-hem, antal/1000 invånare 0-20 år"
  },
  {
    "id": "N33811",
    "title": "Invånare 0-20 år placerade i familjehem, antal/1000 invånare 0-20 år"
  },
  {
    "id": "N33812",
    "title": "Antal barn och unga 0-20 år som har varit placerade på familjehem någon gång under året"
  },
  {
    "id": "N33813",
    "title": "Antal barn och unga  0-20 år som har varit placerade på HVB-hem någon gång under året"
  },
  {
    "id": "N33814",
    "title": "Genomsnittligt tid (dygn) på HVB-hem per barn/ung (0-20 år) som har varit placerade på HVB-hem någon gång under året"
  },
  {
    "id": "N33815",
    "title": "Genomsnittligt tid (dygn) i familjehem per barn/ung (0-20 år) som har varit placerade i familjehem någon gång under året"
  },
  {
    "id": "N33900",
    "title": "Invånare 0-20 år, andel (%) av bef."
  },
  {
    "id": "N35001",
    "title": "Kostnad missbrukarvård vuxna, kr/inv"
  },
  {
    "id": "N35002",
    "title": "Kostnad institutionsvård vuxna missbrukare, kr/inv 21-64 år"
  },
  {
    "id": "N35003",
    "title": "Kostnad familjehemsvård vuxna missbrukare, kr/inv 21-64 år"
  },
  {
    "id": "N35004",
    "title": "Kostnad familjehemsvård vuxna missbrukare,  kr/vårddygn (-2016)"
  },
  {
    "id": "N35006",
    "title": "Kostnad öppna insatser, bistånd som avser boende för vuxna missbrukare, kr/inv 21-64 år"
  },
  {
    "id": "N35007",
    "title": "Kostnad öppna insatser, individuellt behovsprövade avs. vuxna missbrukare, kr/inv 21-64 år"
  },
  {
    "id": "N35008",
    "title": "Kostnad öppna insatser, övriga avs. vuxna missbrukare. kr/inv 21-64 år"
  },
  {
    "id": "N35009",
    "title": "Kostnad institutionsvård vuxna missbrukare, kr/inv"
  },
  {
    "id": "N35010",
    "title": "Kostnad familjehemsvård vuxna missbrukare, kr/inv"
  },
  {
    "id": "N35011",
    "title": "Kostnad öppna insatser vuxna missbrukare, kr/inv"
  },
  {
    "id": "N35012",
    "title": "Kostnad öppna insatser, bistånd som avser boende för vuxna missbrukare, kr/inv"
  },
  {
    "id": "N35013",
    "title": "Kostnad öppna insatser, individuellt behovsprövade avs. vuxna missbrukare, kr/inv"
  },
  {
    "id": "N35014",
    "title": "Kostnad öppna insatser, övriga avs. vuxna missbrukare, kr/inv"
  },
  {
    "id": "N35015",
    "title": "Intäkter missbrukarvård vuxna, kr/inv"
  },
  {
    "id": "N35019",
    "title": "Nettokostnad missbrukarvård totalt för vuxna, kr/inv"
  },
  {
    "id": "N35023",
    "title": "Kostnad öppna insatser, bistånd som avser boende för vuxna missbrukare, kr/boendedygn"
  },
  {
    "id": "N35024",
    "title": "Kostnad heldygnsvård vuxna med missbruksproblem kr/inv 21-64 år"
  },
  {
    "id": "N35025",
    "title": "Kostnad institutionsvård vuxna missbrukare, kr/vårddygn"
  },
  {
    "id": "N35030",
    "title": "Köp av vård för vuxna med missbruksproblem, totalt, andel (%)"
  },
  {
    "id": "N35031",
    "title": "Köp av vård för vuxna med missbruksproblem från privatägda företag, andel (%)"
  },
  {
    "id": "N35032",
    "title": "Köp av vård för vuxna med missbruksproblem från föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N35033",
    "title": "Köp av vård för vuxna med missbruksproblem från andra kommuner, andel (%)"
  },
  {
    "id": "N35034",
    "title": "Köp av vård för vuxna med missbruksproblem från övriga motparter, andel (%)"
  },
  {
    "id": "N35100",
    "title": "Kostnad öppna insatser vuxna missbrukare, kr/inv 21-64 år"
  },
  {
    "id": "N35800",
    "title": "Vårddygn i familjehem vuxna missbrukare, antal/inv 21-64 år (-2016)"
  },
  {
    "id": "N35801",
    "title": "Boendedygn i bistånd som avser boende för vuxna missbrukare, antal/inv 21-64 år"
  },
  {
    "id": "N35804",
    "title": "Vårddygn i institutionsvård vuxna missbrukare, antal/inv 21-64 år"
  },
  {
    "id": "N35890",
    "title": "Vårddygn i frivillig familjehemsvård för vuxna personer med missbruksproblem, antal/person (-2016)"
  },
  {
    "id": "N37001",
    "title": "Kostnad övrig vuxenvård, kr/inv"
  },
  {
    "id": "N37002",
    "title": "Kostnad familjerätt och familjerådgivning, kr/inv"
  },
  {
    "id": "N37003",
    "title": "Intäkter övrig vuxenvård, kr/inv"
  },
  {
    "id": "N37004",
    "title": "Intäkter familjerätt och familjerådgivning, kr/inv"
  },
  {
    "id": "N37005",
    "title": "Nettokostnad övrig vuxenvård, kr/inv"
  },
  {
    "id": "N37006",
    "title": "Nettokostnad familjerätt och familjerådgivning, kr/inv"
  },
  {
    "id": "N40001",
    "title": "Kostnad särskilt riktade insatser, kr/inv"
  },
  {
    "id": "N40002",
    "title": "Intäkter arbetsmarknadsåtgärder, kr/inv"
  },
  {
    "id": "N40003",
    "title": "Kostnad näringslivsfrämjande åtgärder, kr/inv"
  },
  {
    "id": "N40004",
    "title": "Intäkter näringslivsfrämjande åtgärder, kr/inv"
  },
  {
    "id": "N40005",
    "title": "Intäkter särskilt riktade insatser, kr/inv"
  },
  {
    "id": "N40006",
    "title": "Nettokostnad särskilt riktade insatser, kr/inv"
  },
  {
    "id": "N40007",
    "title": "Kostnad flyktingmottagande, kr/inv"
  },
  {
    "id": "N40008",
    "title": "Kostnad arbetsmarknadsåtgärder, kr/inv"
  },
  {
    "id": "N40009",
    "title": "Nettokostnad näringslivsfrämjande åtgärder, kr/inv"
  },
  {
    "id": "N40010",
    "title": "Nettokostnad flyktingmottagande, kr/inv"
  },
  {
    "id": "N40011",
    "title": "Nettokostnad arbetsmarknadsåtgärder, kr/inv"
  },
  {
    "id": "N40012",
    "title": "Nettoinvesteringar inom särskilt riktade insatser kommun, kr/inv (-2015)"
  },
  {
    "id": "N40013",
    "title": "Köp av arbetsmarknadsåtgärder, totalt, andel (%)"
  },
  {
    "id": "N40019",
    "title": "Gemensamma kostnader fördelade till särskilda insatser, andel (%)"
  },
  {
    "id": "N45001",
    "title": "Intäkter affärsverksamhet, kr/inv"
  },
  {
    "id": "N45002",
    "title": "Nettokostnad näringsliv och bostäder, kr/inv"
  },
  {
    "id": "N45003",
    "title": "Nettokostnad kommunikationer, kr/inv"
  },
  {
    "id": "N45004",
    "title": "Nettokostnad energi, vatten och avfall, kr/inv"
  },
  {
    "id": "N45005",
    "title": "Nettokostnad arbetsområden och lokaler, kr/inv"
  },
  {
    "id": "N45006",
    "title": "Nettokostnad hamnverksamhet, kr/inv"
  },
  {
    "id": "N45007",
    "title": "Nettokostnad kommersiell verksamhet, kr/inv"
  },
  {
    "id": "N45008",
    "title": "Nettokostnad bostadsverksamhet, kr/inv"
  },
  {
    "id": "N45009",
    "title": "Nettokostnad flygtrafik, kr/inv"
  },
  {
    "id": "N45010",
    "title": "Nettokostnad buss, bil och spårbunden trafik, kr/inv"
  },
  {
    "id": "N45011",
    "title": "Nettokostnad sjötrafik, kr/inv"
  },
  {
    "id": "N45012",
    "title": "Nettokostnad elförsörjning + gasförsörjning, kr/inv"
  },
  {
    "id": "N45013",
    "title": "Nettokostnad fjärrvärmeförsörjning, kr/inv"
  },
  {
    "id": "N45014",
    "title": "Nettokostnad vattenförsörjning och avloppshantering, kr/inv"
  },
  {
    "id": "N45015",
    "title": "Nettokostnad avfallshantering, kr/inv"
  },
  {
    "id": "N45016",
    "title": "Kostnad näringsliv och bostäder, kr/inv"
  },
  {
    "id": "N45017",
    "title": "Kostnad kommunikationer, kr/inv"
  },
  {
    "id": "N45018",
    "title": "Kostnad energi, vatten och avfall, kr/inv"
  },
  {
    "id": "N45019",
    "title": "Kostnad arbetsområden och lokaler, kr/inv"
  },
  {
    "id": "N45020",
    "title": "Kostnad hamnverksamhet, kr/inv"
  },
  {
    "id": "N45021",
    "title": "Kostnad kommersiell verksamhet, kr/inv"
  },
  {
    "id": "N45022",
    "title": "Kostnad bostadsverksamhet, kr/inv"
  },
  {
    "id": "N45023",
    "title": "Kostnad flygtrafik, kr/inv"
  },
  {
    "id": "N45024",
    "title": "Kostnad buss, bil och spårbunden trafik, kr/inv"
  },
  {
    "id": "N45025",
    "title": "Kostnad sjötrafik, kr/inv"
  },
  {
    "id": "N45026",
    "title": "Kostnad elförsörjning + gasförsörjning, kr/inv"
  },
  {
    "id": "N45027",
    "title": "Kostnad fjärrvärmeförsörjning, kr/inv"
  },
  {
    "id": "N45028",
    "title": "Kostnad vattenförsörjning och avloppshantering, kr/inv"
  },
  {
    "id": "N45029",
    "title": "Kostnad avfallshantering, kr/inv"
  },
  {
    "id": "N45030",
    "title": "Kostnad affärsverksamhet, kr/inv"
  },
  {
    "id": "N45031",
    "title": "Nettokostnad affärsverksamhet, kr/inv"
  },
  {
    "id": "N45032",
    "title": "Nettoinvesteringar inom näringsliv och bostäder kommun, kr/inv (-2015)"
  },
  {
    "id": "N45033",
    "title": "Nettoinvesteringar inom kommunikationer kommun, kr/inv (-2015)"
  },
  {
    "id": "N45034",
    "title": "Nettoinvesteringar inom energi, vatten och avfall kommun, kr/inv (-2015)"
  },
  {
    "id": "N45035",
    "title": "Köp av affärsverksamhet från privatägda företag, andel (%)"
  },
  {
    "id": "N45036",
    "title": "Köp av affärsverksamhet från kommunägda företag, andel (%)"
  },
  {
    "id": "N45037",
    "title": "Köp av affärsverksamhet från övriga motparter, andel (%)"
  },
  {
    "id": "N45038",
    "title": "Investeringsutgifter el- och gasförsörjning, kr/inv"
  },
  {
    "id": "N45039",
    "title": "Investeringsutgifter fjärrvärmeförsörjning, kr/inv"
  },
  {
    "id": "N45040",
    "title": "Investeringsutgifter vattenförsörjning och avloppshantering, kr/inv"
  },
  {
    "id": "N45041",
    "title": "Investeringsutgifter avfallshantering, kr/inv"
  },
  {
    "id": "N45801",
    "title": "Köp av affärsmässig verksamhet totalt, andel (%)"
  },
  {
    "id": "N45900",
    "title": "Elpris inkl. moms för typfastighet enligt Nils Holgersson-modellen, kr/kvm"
  },
  {
    "id": "N45901",
    "title": "Fjärrvärmepris inkl. moms för typfastighet enligt Nils Holgersson-modellen, kr/kvm"
  },
  {
    "id": "N45904",
    "title": "Elproduktion av vindkraft inom det geografiska området, MWh"
  },
  {
    "id": "N45905",
    "title": "Slutanvändning av energi totalt inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45906",
    "title": "Slutanvändning av el inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45907",
    "title": "Slutanvändning av fjärrvärme inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45908",
    "title": "Slutanvändning av förnybara bränsletyper inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45909",
    "title": "Slutanvändning av icke-förnybara bränsletyper inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45910",
    "title": "Slutanvändning energi inom jordbruk, skogsbruk och fiske inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45911",
    "title": "Slutanvändning energi inom industri och byggverksamhet inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45912",
    "title": "Slutanvändning energi inom offentlig verksamhet inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45913",
    "title": "Slutanvändning energi inom transporter inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45914",
    "title": "Slutanvändning energi inom övriga tjänster inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45915",
    "title": "Slutanvändning energi bland småhus inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45916",
    "title": "Slutanvändning energi bland flerbostadshus inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45917",
    "title": "Slutanvändning energi bland fritidshus inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45920",
    "title": "Slutanvändning energi inom hushåll inom det geografiska området, MWh/inv"
  },
  {
    "id": "N45923",
    "title": "Avgift för avfallshämtning inkl. moms för typfastighet enligt Nils Holgersson-modellen, kr/kvm"
  },
  {
    "id": "N45924",
    "title": "Avgift för vatten och avlopp inkl. moms för typfastighet enligt Nils Holgersson-modellen, kr/kvm"
  },
  {
    "id": "N45925",
    "title": "Elproduktion av förnybara energikällor inom det geografiska området, andel (%)"
  },
  {
    "id": "N45926",
    "title": "Elproduktion totalt inom det geografiska området, MWh"
  },
  {
    "id": "N45927",
    "title": "Elproduktion av vattenkraft inom det geografiska området, MWh"
  },
  {
    "id": "N45928",
    "title": "Fjärrvärmeproduktion totalt inom det geografiska området, MWh"
  },
  {
    "id": "N45929",
    "title": "Fjärrvärmeproduktion av förnybara energikällor på värmeverk inom det geografiska området, andel (%)"
  },
  {
    "id": "N45933",
    "title": "Elavbrott,  genomsnittlig avbrottstid per kund (SAIDI), minuter/kund"
  },
  {
    "id": "N45934",
    "title": "Elavbrott,  andel kunder som drabbats av 4 eller fler oaviserade långa avbrott under året (CEMI-4), andel (%)"
  },
  {
    "id": "N60005",
    "title": "Kostnad serviceverksamhet, kr/inv"
  },
  {
    "id": "N60006",
    "title": "Kostnader landstinget totalt, kr/inv"
  },
  {
    "id": "N60007",
    "title": "Nettokostnad politisk verksamhet, kr/inv"
  },
  {
    "id": "N60008",
    "title": "Nettokostnad landstinget totalt, kr/inv"
  },
  {
    "id": "N60015",
    "title": "Månadsavlönad personal, regionanställda administratörer, antal"
  },
  {
    "id": "N60016",
    "title": "Månadsavlönad personal, regionanställda handläggare, antal"
  },
  {
    "id": "N60017",
    "title": "Månadsavlönad personal, regionanställda i vaktmästeri, trädgård, anläggning m.m., antal"
  },
  {
    "id": "N60018",
    "title": "Månadsavlönad personal, regionanställda ingenjörer m fl, antal"
  },
  {
    "id": "N60019",
    "title": "Månadsavlönad personal, regionanställda i köks- o måltidsarbete, antal"
  },
  {
    "id": "N60020",
    "title": "Månadsavlönad personal, regionanställda i ledningsarbete, antal"
  },
  {
    "id": "N60021",
    "title": "Månadsavlönad personal, regionanställda vårdadministratörer, antal"
  },
  {
    "id": "N60022",
    "title": "Månadsavlönad personal, regionanställda i städ, tvätt och renhållning, antal"
  },
  {
    "id": "N60023",
    "title": "Månadsavlönad personal, regionanställda tekniker, antal"
  },
  {
    "id": "N60024",
    "title": "Månadsavlönad personal, regionanställda inom övrig verksamhet, antal"
  },
  {
    "id": "N60025",
    "title": "Månadsavlönad personal, regionanställda barnmorskor, antal"
  },
  {
    "id": "N60026",
    "title": "Månadsavlönad personal, totalt antal regionanställda"
  },
  {
    "id": "N60027",
    "title": "Sjukfrånvaro < 30 år, region, andel (%)"
  },
  {
    "id": "N60028",
    "title": "Sjukfrånvaro > 49 år, region, andel (%)"
  },
  {
    "id": "N60029",
    "title": "Sjukfrånvaro 30-49 år, region, andel (%)"
  },
  {
    "id": "N60030",
    "title": "Sjukfrånvaro totalt, region, andel (%)"
  },
  {
    "id": "N60031",
    "title": "Sjukfrånvaro, mer än 59 dagar som andel av total sjukfrånvaro, region, andel (%)"
  },
  {
    "id": "N60034",
    "title": "Årsarbetare, regionanställda administratörer, antal"
  },
  {
    "id": "N60035",
    "title": "Årsarbetare, regionanställda handläggare, antal"
  },
  {
    "id": "N60036",
    "title": "Årsarbetare, regionanställda i vaktmästeri, trädgård, anläggning m.m., antal"
  },
  {
    "id": "N60037",
    "title": "Årsarbetare, regionanställda ingenjörer m fl, antal"
  },
  {
    "id": "N60038",
    "title": "Årsarbetare, regionanställda i köks- o måltidsarbete, antal"
  },
  {
    "id": "N60039",
    "title": "Årsarbetare, regionanställda i ledningsarbete, antal"
  },
  {
    "id": "N60040",
    "title": "Årsarbetare, regionanställda vårdadministratörer, antal"
  },
  {
    "id": "N60041",
    "title": "Årsarbetare, regionanställda i städ, tvätt o renhållning, antal"
  },
  {
    "id": "N60042",
    "title": "Årsarbetare, regionanställda tekniker, antal"
  },
  {
    "id": "N60043",
    "title": "Årsarbetare, regionanställda inom övrig verksamhet, antal"
  },
  {
    "id": "N60044",
    "title": "Årsarbetare, regionanställda barnmorskor, antal"
  },
  {
    "id": "N60045",
    "title": "Utjämningssystemet enl resultaträkning region, kr/inv"
  },
  {
    "id": "N60046",
    "title": "Inkomstutjämning, bidrag/avgift, kr/inv"
  },
  {
    "id": "N60047",
    "title": "Kostnadsutjämning, bidrag/avgift, kr/inv"
  },
  {
    "id": "N60048",
    "title": "Regleringsbidrag/avgift, kr/inv"
  },
  {
    "id": "N60049",
    "title": "Övriga generella statsbidrag, kr/inv"
  },
  {
    "id": "N60050",
    "title": "Införandebidrag, kr/inv"
  },
  {
    "id": "N60051",
    "title": "Strukturbidrag, kr/inv"
  },
  {
    "id": "N60052",
    "title": "Utjämningssystemet enl scb, kr/inv. 1 nov fg år"
  },
  {
    "id": "N60053",
    "title": "Inkomstutjämning, bidrag/avgift, kr/inv. 1 nov fg år"
  },
  {
    "id": "N60054",
    "title": "Underlag för utjämning, kr/inv. 1 nov fg år."
  },
  {
    "id": "N60055",
    "title": "Skattekraft region, uppräknad, kr/inv. 1 nov fg år."
  },
  {
    "id": "N60056",
    "title": "Garanterad skattekraft region, uppräknad, kr/inv. 1 nov fg år."
  },
  {
    "id": "N60057",
    "title": "Kostnadsutjämning, bidrag/avgift, kr/inv. 1 nov fg år"
  },
  {
    "id": "N60058",
    "title": "Regleringsbidrag/avgift, kr/inv. 1 nov fg år"
  },
  {
    "id": "N60059",
    "title": "Införandebidrag, kr/inv. 1 nov fg år"
  },
  {
    "id": "N60060",
    "title": "Strukturbidrag, kr/inv. 1 nov fg år"
  },
  {
    "id": "N60061",
    "title": "Månadsavlönad personal, landstingsanställda i administrationsarbete, antal"
  },
  {
    "id": "N60062",
    "title": "Månadsavlönad personal, landstingsanställda i teknikarbete, antal"
  },
  {
    "id": "N60063",
    "title": "Årsarbetare, landstingsanställda i administrationsarbete, antal"
  },
  {
    "id": "N60064",
    "title": "Årsarbetare, landstingsanställda i teknikarbete, antal"
  },
  {
    "id": "N60065",
    "title": "Årsarbetare, totalt regionsanställda, antal"
  },
  {
    "id": "N60068",
    "title": "Tillsvidareanställda månadsavlönade, region, andel (%)"
  },
  {
    "id": "N60069",
    "title": "Visstidsanställda månadsavlönade, region, andel (%)"
  },
  {
    "id": "N60070",
    "title": "Visstidsanställda timavlönade, region, andel (%)"
  },
  {
    "id": "N60071",
    "title": "Arbetad tid utförd av tillsvidareanställda månadsavlönade, region, andel (%)"
  },
  {
    "id": "N60072",
    "title": "Arbetad tid utförd av visstidsanställda månadsavlönade, region, andel (%)"
  },
  {
    "id": "N60073",
    "title": "Arbetad tid utförd av visstidsanställda timavlönade, region, andel (%)"
  },
  {
    "id": "N60074",
    "title": "Heltidsanställda månadsavlönade, region, andel (%)"
  },
  {
    "id": "N60075",
    "title": "Deltidsanställda (75-99 %) månadsavlönade, region, andel (%)"
  },
  {
    "id": "N60076",
    "title": "Deltidsanställda (1-74 %) månadsavlönade, region, andel (%)"
  },
  {
    "id": "N60077",
    "title": "Heltidsarbetande månadsavlönade, region, andel (%)"
  },
  {
    "id": "N60078",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade, region, andel (%)"
  },
  {
    "id": "N60079",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade, region, andel (%)"
  },
  {
    "id": "N60080",
    "title": "Anställda -34 år, landsting, andel (%)"
  },
  {
    "id": "N60081",
    "title": "Anställda 35-54 år, landsting, andel (%)"
  },
  {
    "id": "N60082",
    "title": "Anställda 55+, region, andel (%)"
  },
  {
    "id": "N60083",
    "title": "Nya tillsvidareanställda under året, region, andel (%)"
  },
  {
    "id": "N60084",
    "title": "Avgångna tillsvidareanställda under året, region, andel (%)"
  },
  {
    "id": "N60085",
    "title": "Anställda utrikes födda, balanstal"
  },
  {
    "id": "N60086",
    "title": "Anställda med eftergymnasial utbildning, andel (%)"
  },
  {
    "id": "N60087",
    "title": "Köp av verksamhet totalt, andel (%)"
  },
  {
    "id": "N60088",
    "title": "Köp av verksamhet, totalt, från privata företag/vårdgivare, andel (%)"
  },
  {
    "id": "N60089",
    "title": "Köp av verksamhet totalt från regioner, andel (%)"
  },
  {
    "id": "N60090",
    "title": "Köp av verksamhet totalt från regionägda företag i egen KCR, andel (%)"
  },
  {
    "id": "N60091",
    "title": "Köp av verksamhet totalt från övriga motparter, andel (%)"
  },
  {
    "id": "N60092",
    "title": "Köp av verksamhet totalt från ideella föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N60094",
    "title": "Heltidsarbetande månadsavlönade, Region, antal"
  },
  {
    "id": "N60095",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade, region, antal"
  },
  {
    "id": "N60096",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade, region, antal"
  },
  {
    "id": "N60097",
    "title": "Heltidsanställda månadsavlönade, region, antal"
  },
  {
    "id": "N60098",
    "title": "Deltidsanställda (75-99 %) månadsavlönade, region, antal"
  },
  {
    "id": "N60099",
    "title": "Deltidsanställda (1-74 %) månadsavlönade, region, antal"
  },
  {
    "id": "N60100",
    "title": "Anställda 55+, region, antal"
  },
  {
    "id": "N60101",
    "title": "Heltidsanställd månadsavlönad personal, region, antal"
  },
  {
    "id": "N60200",
    "title": "Månadsavlönad personal, tillsvidareanställda i regionen, antal"
  },
  {
    "id": "N60201",
    "title": "Visstidsanställda månadsavlönade, region, antal"
  },
  {
    "id": "N60202",
    "title": "Genomsnittlig sysselsättningsgrad för anställda månadsavlönade i regionen, (%)"
  },
  {
    "id": "N60227",
    "title": "Deltidsanställd månadsavlönad personal, region, antal"
  },
  {
    "id": "N60230",
    "title": "Visstidsanställda timavlönad personal, region, antal"
  },
  {
    "id": "N60233",
    "title": "Tillsvidareanställda månadsavlönade, region, antal"
  },
  {
    "id": "N60404",
    "title": "Resor med kollektivtrafik, resor/inv"
  },
  {
    "id": "N60405",
    "title": "Antibiotikaförsäljning region, recept/1000 inv"
  },
  {
    "id": "N60406",
    "title": "Antibiotikaförsäljning åldersstandardiserat region, recept/1000 (medelbefolkning) inv"
  },
  {
    "id": "N60800",
    "title": "Invånare 25-64 år med eftergymnasial utbildning län, andel (%) (-2018)"
  },
  {
    "id": "N60801",
    "title": "Hushåll med ekonomiskt bistånd som erhållit bistånd i 10-12 månader under året, län, andel (%)"
  },
  {
    "id": "N60802",
    "title": "Elever i år 9 som är behöriga till yrkesprogram, totalt län, andel (%)"
  },
  {
    "id": "N60807",
    "title": "Invånare som någon gång under året erhållit ekonomiskt bistånd, andel (%) av bef."
  },
  {
    "id": "N60909",
    "title": "Avlidna i 1-74 års ålder, antal/100 000 inv (-2013)"
  },
  {
    "id": "N60911",
    "title": "Incidens, livmoderhalscancer, antal/10 000 inv"
  },
  {
    "id": "N60912",
    "title": "Incidens, lungcancer, antal/10 000 inv"
  },
  {
    "id": "N60913",
    "title": "Incidens, malignt melanom, antal/10 000 inv"
  },
  {
    "id": "N60916",
    "title": "Skattekraft som andel av rikets medelskattekraft region, (%)"
  },
  {
    "id": "N60917",
    "title": "Skattekraft län, kr/inv"
  },
  {
    "id": "N60918",
    "title": "Skattesats till regionen, (%)"
  },
  {
    "id": "N60919",
    "title": "Care Need Index (CNI), index"
  },
  {
    "id": "N60943",
    "title": "Förvärvsarbetande invånare 25-44 år, andel (%)"
  },
  {
    "id": "N60944",
    "title": "Förvärvsarbetande invånare 45-59 år, andel (%)"
  },
  {
    "id": "N60946",
    "title": "Sammanräknad förvärvsinkomst i åldern 25-44 år län (median), kr"
  },
  {
    "id": "N60947",
    "title": "Sammanräknad förvärvsinkomst i åldern 45-59 år län (median), kr"
  },
  {
    "id": "N60953",
    "title": "Lönegap median kvinnor - median män anställda av regionen, kr"
  },
  {
    "id": "N60960",
    "title": "Gymnasieelever med examen eller studiebevis inom 4 år län, andel (%)"
  },
  {
    "id": "N60978",
    "title": "Gymnasieelever med examen inom 4 år län, andel (%)"
  },
  {
    "id": "N61602",
    "title": "Självmord, 5-årsm, antal/100 000 inv, 15 år+"
  },
  {
    "id": "N61700",
    "title": "Vuxna biståndsmottagare med långvarigt ekonomiskt bistånd region, andel (%)"
  },
  {
    "id": "N61707",
    "title": "Invånare  0-4 år, andel (%)"
  },
  {
    "id": "N61708",
    "title": "Invånare födda i öst- och sydeuropa (ej EU), Afrika, Asien eller Sydamerika, andel (%)"
  },
  {
    "id": "N61709",
    "title": "Invånare 65+ och ensamboende, andel (%)"
  },
  {
    "id": "N61710",
    "title": "Ensamstående förälder med barn 17 år och yngre, andel (%)"
  },
  {
    "id": "N61711",
    "title": "Invånare, 1 år eller äldre som flyttat in eller bytt distrikt i länet, andel (%)"
  },
  {
    "id": "N61712",
    "title": "Arbetslösa eller i åtgärd minst en dag under året, 16-64 år, andel (%)"
  },
  {
    "id": "N61713",
    "title": "Invånare, 25-64 år, med låg utbildningsnivå, andel (%)"
  },
  {
    "id": "N61714",
    "title": "Barn 1-5 år inskrivna i förskola i länet, andel (%)"
  },
  {
    "id": "N61900",
    "title": "Invånare 65+, andel (%)"
  },
  {
    "id": "N61903",
    "title": "Invånare 20-64 år, antal"
  },
  {
    "id": "N61907",
    "title": "Invånare  totalt, antal"
  },
  {
    "id": "N61909",
    "title": "Födda barn, antal  per 1000 kvinnor, 15-44 år"
  },
  {
    "id": "N61910",
    "title": "Födda barn, antal  per 1000 kvinnor, 15-19 år"
  },
  {
    "id": "N61911",
    "title": "Födda barn, antal  per 1000 kvinnor, 20-34 år"
  },
  {
    "id": "N61912",
    "title": "Födda barn, antal  per 1000 kvinnor, 35-44 år"
  },
  {
    "id": "N61924",
    "title": "Invånare 0-19 år, andel (%)"
  },
  {
    "id": "N61925",
    "title": "Invånare 65-79 år, andel (%)"
  },
  {
    "id": "N61926",
    "title": "Invånare 80+, andel (%)"
  },
  {
    "id": "N61928",
    "title": "Invånare 0-19 år, antal"
  },
  {
    "id": "N61931",
    "title": "Invånare 20+, antal"
  },
  {
    "id": "N61936",
    "title": "Kvinnor 15-54 år, antal"
  },
  {
    "id": "N61937",
    "title": "Invånare 20+, andel (%)"
  },
  {
    "id": "N61964",
    "title": "Invånare 0-1 år, antal"
  },
  {
    "id": "N61965",
    "title": "Invånare 2-6 år, antal"
  },
  {
    "id": "N61967",
    "title": "Invånare 20-29 år, antal"
  },
  {
    "id": "N61968",
    "title": "Invånare 30-49 år, antal"
  },
  {
    "id": "N61969",
    "title": "Invånare 50-64 år, antal"
  },
  {
    "id": "N61974",
    "title": "Invånare 25-44 år med eftergymnasial utbildning län, andel (%) (-2018)"
  },
  {
    "id": "N61978",
    "title": "Invånare 45-64 år med eftergymnasial utbildning län, andel (%) (-2018)"
  },
  {
    "id": "N61980",
    "title": "Inflyttade till länet, antal"
  },
  {
    "id": "N61981",
    "title": "Utflyttade från länet, antal"
  },
  {
    "id": "N61983",
    "title": "Döda i länet, antal 0 år"
  },
  {
    "id": "N62917",
    "title": "Kvinnor i befolkningen län, andel (%)"
  },
  {
    "id": "N62919",
    "title": "Inflyttade till länet 0-5 år, antal"
  },
  {
    "id": "N62920",
    "title": "Inflyttade till länet 6-19 år, antal"
  },
  {
    "id": "N62921",
    "title": "Inflyttade till länet 20-64 år, antal"
  },
  {
    "id": "N62922",
    "title": "Inflyttade till länet 65-79 år, antal"
  },
  {
    "id": "N62923",
    "title": "Inflyttade till länet 80+ år, antal"
  },
  {
    "id": "N62924",
    "title": "Utflyttade från länet 0-5 år, antal"
  },
  {
    "id": "N62925",
    "title": "Utflyttade från länet 6-19 år, antal"
  },
  {
    "id": "N62926",
    "title": "Utflyttade från länet 20-64 år, antal"
  },
  {
    "id": "N62927",
    "title": "Utflyttade från länet 65-79 år, antal"
  },
  {
    "id": "N62928",
    "title": "Utflyttade från länet 80+ år, antal"
  },
  {
    "id": "N63000",
    "title": "Finansnetto landstinget, kr/inv"
  },
  {
    "id": "N63001",
    "title": "Finansnettots andel av skatteintäkter och generella statsbidrag, (%)"
  },
  {
    "id": "N63002",
    "title": "Resultat före e.o. poster som andel av  nettokostnader, regionkoncern, (%)"
  },
  {
    "id": "N63003",
    "title": "Resultat före e.o. poster, landstingskoncern, kr/inv"
  },
  {
    "id": "N63004",
    "title": "Resultat före e.o. poster som andel av nettokostnader, regionen (%)"
  },
  {
    "id": "N63005",
    "title": "Resultat före e.o. poster,  landstinget, kr/inv"
  },
  {
    "id": "N63006",
    "title": "Självfinansieringsgrad för regionens investeringar, andel (%)"
  },
  {
    "id": "N63007",
    "title": "Soliditet, regionen, (%)"
  },
  {
    "id": "N63008",
    "title": "Soliditet, regionskoncernen, (%)"
  },
  {
    "id": "N63009",
    "title": "Verksamhetens nettokostnad som andel av skatteintäkter och generella statsbidrag, (%)"
  },
  {
    "id": "N63010",
    "title": "Skatteintäkter region, kr/inv"
  },
  {
    "id": "N63011",
    "title": "Generella statsbidrag och utjämning landsting, kr/inv"
  },
  {
    "id": "N63012",
    "title": "Verksamhetens nettokostnader enligt resultaträkningen landsting, kr/inv"
  },
  {
    "id": "N63013",
    "title": "Verksamhetens kostnader region, kr/inv"
  },
  {
    "id": "N63014",
    "title": "Verksamhetens intäkter region, kr/inv"
  },
  {
    "id": "N63015",
    "title": "Avskrivningar region, kr/inv"
  },
  {
    "id": "N63016",
    "title": "Årets resultat som andel av skatt & generella statsbidrag region, (%)"
  },
  {
    "id": "N63018",
    "title": "Extraordinära poster region, kr/inv"
  },
  {
    "id": "N63019",
    "title": "Årets resultat landsting, kr/inv"
  },
  {
    "id": "N63020",
    "title": "Skatteintäkter regionkoncern, kr/inv"
  },
  {
    "id": "N63021",
    "title": "Generella statsbidrag och utjämning regionkoncern, kr/inv"
  },
  {
    "id": "N63022",
    "title": "Verksamhetens nettokostnader enligt resultaträkningen landstingskoncern, kr/inv"
  },
  {
    "id": "N63023",
    "title": "Verksamhetens kostnader regionkoncern, kr/inv"
  },
  {
    "id": "N63024",
    "title": "Verksamhetens intäkter regionkoncern, kr/inv"
  },
  {
    "id": "N63025",
    "title": "Avskrivningar regionkoncern, kr/inv"
  },
  {
    "id": "N63026",
    "title": "Finansnetto landstingskoncern, kr/inv"
  },
  {
    "id": "N63028",
    "title": "Extraordinära poster regionkoncern, kr/inv"
  },
  {
    "id": "N63029",
    "title": "Årets resultat landstingskoncern, kr/inv"
  },
  {
    "id": "N63030",
    "title": "Eget kapital region, kr/inv"
  },
  {
    "id": "N63031",
    "title": "Skulder totalt landsting, kr/inv"
  },
  {
    "id": "N63032",
    "title": "Långfristiga skulder landsting, kr/inv"
  },
  {
    "id": "N63033",
    "title": "Kortfristiga skulder region, kr/inv"
  },
  {
    "id": "N63034",
    "title": "Avsättningar totalt landsting, kr/inv"
  },
  {
    "id": "N63035",
    "title": "Övriga borgens- o ansvarsförbindelser region, kr/inv"
  },
  {
    "id": "N63036",
    "title": "Övriga borgens- o ansvarsförbindelser landsting inkl pensionsförpliktelser och löneskatt, kr/inv"
  },
  {
    "id": "N63037",
    "title": "Avsättning för pensioner och löneskatt landsting, kr/inv"
  },
  {
    "id": "N63038",
    "title": "Tillgångar totalt landsting, kr/inv"
  },
  {
    "id": "N63039",
    "title": "Materiella anläggningstillgångar region, kr/inv"
  },
  {
    "id": "N63040",
    "title": "Finansiella anläggningstillgångar landsting, kr/inv"
  },
  {
    "id": "N63041",
    "title": "Omsättningstillgångar landsting, kr/inv"
  },
  {
    "id": "N63042",
    "title": "Pensionsförpl o löneskatt ej redov i balansräkning region, kr/inv"
  },
  {
    "id": "N63043",
    "title": "Eget kapital regionkoncern, kr/inv"
  },
  {
    "id": "N63044",
    "title": "Skulder totalt landstingskoncern, kr/inv"
  },
  {
    "id": "N63045",
    "title": "Långfristiga skulder regionkoncern, kr/inv"
  },
  {
    "id": "N63046",
    "title": "Kortfristiga skulder regionkoncern, kr/inv"
  },
  {
    "id": "N63047",
    "title": "Avsättningar totalt regionkoncern, kr/inv"
  },
  {
    "id": "N63051",
    "title": "Tillgångar totalt landstingskoncern, kr/inv"
  },
  {
    "id": "N63052",
    "title": "Materiella anläggningstillgångar regionkoncern, kr/inv"
  },
  {
    "id": "N63053",
    "title": "Finansiella anläggningstillgångar regionkoncern, kr/inv"
  },
  {
    "id": "N63054",
    "title": "Omsättningstillgångar regionkoncern, kr/inv"
  },
  {
    "id": "N63056",
    "title": "Resultat före extraord. poster som andel av skatt & generella statsbidrag region, (%)"
  },
  {
    "id": "N63057",
    "title": "Rörelsekapital region, kr/inv"
  },
  {
    "id": "N63058",
    "title": "Rörelsekapital regionkoncernen, kr/inv"
  },
  {
    "id": "N63059",
    "title": "Kassalikviditet regionen, (%)"
  },
  {
    "id": "N63060",
    "title": "Kassalikviditet regionkoncernen, (%)"
  },
  {
    "id": "N63063",
    "title": "Immateriella anläggningstillgångar region, kr/inv"
  },
  {
    "id": "N63064",
    "title": "Immateriella anläggningstillgångar regionkoncern, kr/inv"
  },
  {
    "id": "N63065",
    "title": "Anläggningstillgångar landsting, kr/inv"
  },
  {
    "id": "N63066",
    "title": "Anläggningstillgångar landstingskoncern, kr/inv"
  },
  {
    "id": "N63067",
    "title": "Andra avsättningar än pensioner och löneskatt region, kr/inv"
  },
  {
    "id": "N63068",
    "title": "Skulder och avsättningar landsting, kr/inv"
  },
  {
    "id": "N63069",
    "title": "Skulder och avsättningar landstingskoncern, kr/inv"
  },
  {
    "id": "N63070",
    "title": "Bidrag till statlig infrastruktur region, kr/inv"
  },
  {
    "id": "N63071",
    "title": "Bidrag till statlig infrastruktur regionkoncern, kr/inv"
  },
  {
    "id": "N63072",
    "title": "Finansiella intäkter region, kr/inv"
  },
  {
    "id": "N63073",
    "title": "Finansiella kostnader exkl ränta på pensionsskuld landsting, kr/inv"
  },
  {
    "id": "N63074",
    "title": "Aktier och andelar landsting, kr/inv"
  },
  {
    "id": "N63075",
    "title": "Aktie och andelar i regionernas koncernföretag, kr/inv"
  },
  {
    "id": "N63076",
    "title": "Långfristiga fordringar landsting, kr/inv"
  },
  {
    "id": "N63077",
    "title": "Långfristiga fordringar i regionernas koncernföretag, kr/inv"
  },
  {
    "id": "N63078",
    "title": "Lån i banker och kreditinstitut region, kr/inv"
  },
  {
    "id": "N63079",
    "title": "Pensionsutbetalningar exkl löneskatt (1998-) region, kr/inv"
  },
  {
    "id": "N63080",
    "title": "Pensionsutbetalningar exkl löneskatt (-1997) region, kr/inv"
  },
  {
    "id": "N63081",
    "title": "Bruttoinvesteringar i byggnader region, kr/inv"
  },
  {
    "id": "N63082",
    "title": "Investeringsutgifter region, kr/inv"
  },
  {
    "id": "N63083",
    "title": "Räntekostnader för lån region, kr/inv"
  },
  {
    "id": "N63084",
    "title": "Finansiella intäkter regionkoncern, kr/inv"
  },
  {
    "id": "N63085",
    "title": "Finansiella kostnader regionkoncern, kr/inv"
  },
  {
    "id": "N63095",
    "title": "Resultat efter synnerliga skäl i region, kr/inv"
  },
  {
    "id": "N63096",
    "title": "Skulder till närstående företag region, kr/inv"
  },
  {
    "id": "N63097",
    "title": "Bidrag för läkemedelsförmånen region, kr/inv"
  },
  {
    "id": "N63098",
    "title": "Avgiftsbestämd ålderspension i KAP-KL (exkl. löneskatt), region, kr/inv"
  },
  {
    "id": "N63120",
    "title": "Nettokostnad pensionsutbetalningar och ränteintäkter, kr/inv"
  },
  {
    "id": "N63121",
    "title": "Jämförelsestörande poster region, kr/inv"
  },
  {
    "id": "N63125",
    "title": "Justerad skattesats region, (%)"
  },
  {
    "id": "N63126",
    "title": "Soliditet inkl pensionsåtag. regionkoncern, (%)"
  },
  {
    "id": "N63127",
    "title": "Självfinansieringsgrad av investeringar regionkoncern, andel (%)"
  },
  {
    "id": "N63128",
    "title": "Relativ nettokostnadsutveckling regionkoncern, andel (%)"
  },
  {
    "id": "N63129",
    "title": "Resultat före e.o. poster som andel av nettokostnader (justerat AFA o RIPS), regionkoncern, (%)"
  },
  {
    "id": "N63130",
    "title": "Nettokostnadsutveckling per invånare regionkoncern, andel (%)"
  },
  {
    "id": "N63131",
    "title": "Kassalikviditet regionkoncern enligt SKRs finansspindel, andel (%)"
  },
  {
    "id": "N63132",
    "title": "Balanskravsresultat region, kr/inv"
  },
  {
    "id": "N65001",
    "title": "Kostnad politisk verksamhet landsting, kr/inv"
  },
  {
    "id": "N65002",
    "title": "Köp av politisk verks. avs. hälso- och sjukvård som andel av nettokostnad, (%)"
  },
  {
    "id": "N65003",
    "title": "Kostnad politisk verksamhet avseende hälso- och sjukvård, kr/inv"
  },
  {
    "id": "N65005",
    "title": "Kostnad politisk verksamhet avseende regional utveckling, kr/inv"
  },
  {
    "id": "N65006",
    "title": "Kostnad arvoden, ersättningar m.m. revision region, tkr (-2016)"
  },
  {
    "id": "N65007",
    "title": "Kostnad utbildning o. konferenser revision region, tkr (-2016)"
  },
  {
    "id": "N65008",
    "title": "Kostnad sakkunniga anställda revision region, tkr (-2016)"
  },
  {
    "id": "N65009",
    "title": "Kostnad sakkunniga upphandlade revision region, tkr (-2016)"
  },
  {
    "id": "N65010",
    "title": "Kostnad övriga revision region, tkr (-2016)"
  },
  {
    "id": "N65011",
    "title": "Bruttokostnad revision region, tkr (-2016)"
  },
  {
    "id": "N65012",
    "title": "Intäkter revision region, tkr (-2016)"
  },
  {
    "id": "N65013",
    "title": "Nettokostnad revision region, tkr (-2016)"
  },
  {
    "id": "N65014",
    "title": "Total verksamhetskostnad brutto region, tkr (-2016)"
  },
  {
    "id": "N65015",
    "title": "Nettokostnad revison region, promille av total verksamhetskostnad (-2016)"
  },
  {
    "id": "N65016",
    "title": "Nettokostnad revision region, kr/inv (-2016)"
  },
  {
    "id": "N65405",
    "title": "Revisionsberättelse utan anmärkning eller avstyrkt ansvarsfrihet region, (Ja=1, Nej=0)"
  },
  {
    "id": "N65406",
    "title": "Ansvarsprövning i LF utan anmärkning och med beviljad ansvarsfrihet för samtliga ledamöte, (Ja=1, Nej=0)"
  },
  {
    "id": "N65701",
    "title": "Förtroendevalda revisorer i regionen, antal"
  },
  {
    "id": "N65801",
    "title": "Röster på Socialdemokraterna i senaste regionvalet, andel (%)"
  },
  {
    "id": "N65802",
    "title": "Röster på Vänsterpartiet i senaste regionvalet, andel (%)"
  },
  {
    "id": "N65803",
    "title": "Röster på Miljöpartiet i senaste regionvalet, andel (%)"
  },
  {
    "id": "N65804",
    "title": "Röster på Sverigedemokraterna i senaste regionvalet, andel (%)"
  },
  {
    "id": "N65805",
    "title": "Röster på Moderaterna i senaste regionvalet, andel (%)"
  },
  {
    "id": "N65806",
    "title": "Röster på Liberalerna i senaste regionvalet, andel (%)"
  },
  {
    "id": "N65807",
    "title": "Röster på Centerpartiet i senaste regionvalet, andel (%)"
  },
  {
    "id": "N65808",
    "title": "Röster på Kristdemokraterna i senaste regionvalet, andel (%)"
  },
  {
    "id": "N65809",
    "title": "Röster på övriga partier i senaste regionvalet, andel (%)"
  },
  {
    "id": "N65810",
    "title": "Förtroendevalda regionpolitiker på heltid, andel (%)"
  },
  {
    "id": "N65811",
    "title": "Förtroendevalda regionpolitiker på deltid, andel (%)"
  },
  {
    "id": "N65812",
    "title": "Antal invånare per förtroendevald regionpolitiker"
  },
  {
    "id": "N65813",
    "title": "Antal förtroendeuppdrag per förtroendevald regionpolitiker"
  },
  {
    "id": "N65814",
    "title": "Kvinnor bland förtroendevalda regionpolitiker, andel (%)"
  },
  {
    "id": "N65815",
    "title": "Kvinnor i regionfullmäktige, andel (%)"
  },
  {
    "id": "N65816",
    "title": "Kvinnor på ordförandeposter i regionen, andel (%)"
  },
  {
    "id": "N65817",
    "title": "Förtroendevalda regionpolitiker i åldern 18-29 år, andel (%)"
  },
  {
    "id": "N65818",
    "title": "Förtroendevalda regionpolitiker i åldern 30-49 år, andel (%)"
  },
  {
    "id": "N65819",
    "title": "Förtroendevalda regionpolitiker i åldern 50-64 år, andel (%)"
  },
  {
    "id": "N65820",
    "title": "Förtroendevalda regionpolitiker i åldern 65+, andel (%)"
  },
  {
    "id": "N65821",
    "title": "Regionfullmäktigeledamöter i åldern 18-29 år, andel (%)"
  },
  {
    "id": "N65822",
    "title": "Regionfullmäktigeledamöter i åldern 30-49 år, andel (%)"
  },
  {
    "id": "N65823",
    "title": "Regionfullmäktigeledamöter i åldern 50-64 år, andel (%)"
  },
  {
    "id": "N65824",
    "title": "Regionfullmäktigeledamöter i åldern 65+, andel (%)"
  },
  {
    "id": "N65825",
    "title": "Utrikes födda bland förtroendevalda regionpolitiker, andel (%)"
  },
  {
    "id": "N65826",
    "title": "Utrikes födda i regionfullmäktige, andel (%)"
  },
  {
    "id": "N65827",
    "title": "Medianbruttoinkomst regionens förtroendevalda politiker, kr/person"
  },
  {
    "id": "N65828",
    "title": "Politiskt styre i regionen (0=vänster, 1=blocköverskridande, 2=alliansstyre)"
  },
  {
    "id": "N65829",
    "title": "Förtroendevalda som hoppat av regionfullmäktige, andel (%)"
  },
  {
    "id": "N65831",
    "title": "Valdistrikt med lägst valdeltagande i senaste regionvalet, andel (%)"
  },
  {
    "id": "N65832",
    "title": "Valdistrikt med högst valdeltagande i senaste regionvalet, andel (%)"
  },
  {
    "id": "N65841",
    "title": "Röster på Centerpartiet i senaste riksdagsvalet, andel (%)"
  },
  {
    "id": "N65842",
    "title": "Röster på Kristdemokraterna i senaste riksdagsvalet, andel (%)"
  },
  {
    "id": "N65843",
    "title": "Röster på Sverigedemokraterna i senaste riksdagsvalet, andel (%)"
  },
  {
    "id": "N65844",
    "title": "Röster på Miljöpartiet i senaste riksdagsvalet, andel (%)"
  },
  {
    "id": "N65845",
    "title": "Röster på Socialdemokraterna i senaste riksdagsvalet, andel (%)"
  },
  {
    "id": "N65846",
    "title": "Röster på Liberalerna i senaste riksdagsvalet, andel (%)"
  },
  {
    "id": "N65847",
    "title": "Röster på Vänsterpartiet i senaste riksdagsvalet, andel (%)"
  },
  {
    "id": "N65848",
    "title": "Röster på Moderaterna i senaste riksdagsvalet, andel (%)"
  },
  {
    "id": "N65849",
    "title": "Röster på övriga partier i senaste riksdagsvalet, andel (%)"
  },
  {
    "id": "N65851",
    "title": "Röster på Centerpartiet i senaste europaparlamentsvalet, andel (%)"
  },
  {
    "id": "N65852",
    "title": "Röster på Kristdemokraterna i senaste europaparlamentsvalet, andel (%)"
  },
  {
    "id": "N65853",
    "title": "Röster på Sverigedemokraterna i senaste europaparlamentsvalet, andel (%)"
  },
  {
    "id": "N65854",
    "title": "Röster på Miljöpartiet i senaste europaparlamentsvalet, andel (%)"
  },
  {
    "id": "N65855",
    "title": "Röster på Socialdemokraterna i senaste europaparlamentsvalet, andel (%)"
  },
  {
    "id": "N65856",
    "title": "Röster på Liberalerna i senaste europaparlamentsvalet, andel (%)"
  },
  {
    "id": "N65857",
    "title": "Röster på Vänsterpartiet i senaste europaparlamentsvalet, andel (%)"
  },
  {
    "id": "N65858",
    "title": "Röster på Moderaterna i senaste europaparlamentsvalet, andel (%)"
  },
  {
    "id": "N65859",
    "title": "Röster på övriga partier i senaste europaparlamentsvalet, andel (%)"
  },
  {
    "id": "N65900",
    "title": "Förtroendevalda i kommunfullmäktige eller regionfullmäktige som utsatts för trakasserier, hot eller våld, andel (%)"
  },
  {
    "id": "N70000",
    "title": "Kostnad för hälso- och sjukvård totalt (inkl. läkemedel), kr/inv"
  },
  {
    "id": "N70001",
    "title": "Nettokostnad läkemedel inom läkemedelsförmånen, kr/inv"
  },
  {
    "id": "N70002",
    "title": "Månadsavlönad personal, regionanställda arbetsterapeuter, antal"
  },
  {
    "id": "N70003",
    "title": "Månadsavlönad personal, regionanställda biomedicinska analytiker, antal"
  },
  {
    "id": "N70004",
    "title": "Månadsavlönad personal, regionanställda dietister, antal"
  },
  {
    "id": "N70005",
    "title": "Månadsavlönad personal, regionanställda icke specialistkompetenta läkare, antal"
  },
  {
    "id": "N70006",
    "title": "Månadsavlönad personal, regionanställda logopeder, antal"
  },
  {
    "id": "N70007",
    "title": "Månadsavlönad personal, regionanställda psykologer, antal"
  },
  {
    "id": "N70008",
    "title": "Månadsavlönad personal, regionanställda psykoterapeuter, antal"
  },
  {
    "id": "N70009",
    "title": "Månadsavlönad personal, regionanställda övrigt rehabiliteringsarbete, antal"
  },
  {
    "id": "N70010",
    "title": "Månadsavlönad personal, regionanställda sjukgymnaster, antal"
  },
  {
    "id": "N70011",
    "title": "Månadsavlönad personal, regionanställda övr. specialiteter inom hälso- och sjukvård, antal"
  },
  {
    "id": "N70012",
    "title": "Månadsavlönad personal, regionanställda sjuksköterskor, antal"
  },
  {
    "id": "N70013",
    "title": "Månadsavlönad personal, regionanställda i skola, antal"
  },
  {
    "id": "N70014",
    "title": "Månadsavlönad personal, regionanställda i kurativt och socialt arbete, antal"
  },
  {
    "id": "N70015",
    "title": "Månadsavlönad personal, regionanställda specialistkompetenta läkare, antal"
  },
  {
    "id": "N70016",
    "title": "Månadsavlönad personal, regionanställda undersköterskor, skötare mfl, antal"
  },
  {
    "id": "N70019",
    "title": "Nettokostnad politisk verksamhet avseende hälso- och sjukvård, kr/inv"
  },
  {
    "id": "N70021",
    "title": "Årsarbetare, regionanställda arbetsterapeuter, antal"
  },
  {
    "id": "N70022",
    "title": "Årsarbetare, regionanställda biomedicinska analytiker, antal"
  },
  {
    "id": "N70023",
    "title": "Årsarbetare, regionanställda dietister, antal"
  },
  {
    "id": "N70024",
    "title": "Årsarbetare, regionanställda icke specialistkompetenta läkare, antal"
  },
  {
    "id": "N70025",
    "title": "Årsarbetare, regionanställda logopeder, antal"
  },
  {
    "id": "N70026",
    "title": "Årsarbetare, regionanställda psykologer, antal"
  },
  {
    "id": "N70027",
    "title": "Årsarbetare, regionanställda psykoterapeuter, antal"
  },
  {
    "id": "N70028",
    "title": "Årsarbetare, regionanställda övrigt rehabiliteringsarbete, antal"
  },
  {
    "id": "N70029",
    "title": "Årsarbetare, regionanställda sjukgymnaster, antal"
  },
  {
    "id": "N70030",
    "title": "Årsarbetare, regionanställda övr. specialiteter inom hälso- och sjukvård, antal"
  },
  {
    "id": "N70031",
    "title": "Årsarbetare, regionanställda sjuksköterskor, antal"
  },
  {
    "id": "N70032",
    "title": "Årsarbetare, regionanställda i skola, antal"
  },
  {
    "id": "N70033",
    "title": "Årsarbetare, regionanställda i kurativt och socialt arbete, antal"
  },
  {
    "id": "N70034",
    "title": "Årsarbetare, regionanställda specialistkompetenta läkare, antal"
  },
  {
    "id": "N70035",
    "title": "Årsarbetare, regionanställda undersköterskor o skötare, antal"
  },
  {
    "id": "N70038",
    "title": "Referenskostnad hälso- och sjukvård (inkl läkemedel), kr/inv"
  },
  {
    "id": "N70039",
    "title": "Månadsavlönad personal, landstingsanställda i rehabilitering och förebyggande arbete, antal"
  },
  {
    "id": "N70040",
    "title": "Månadsavlönad personal, landstingsanställda i hälso och sjukvård, antal"
  },
  {
    "id": "N70041",
    "title": "Årsarbetare, landstingsanställda i rehabilitering och förebyggande arbete, antal"
  },
  {
    "id": "N70042",
    "title": "Årsarbetare, landstingsanställda i hälso och sjukvård, antal"
  },
  {
    "id": "N70043",
    "title": "Årsarbetare, leg. läkare/1000 inv, korrigerat antal i hälso- och sjukvård ur ett konsumtionsperspektiv"
  },
  {
    "id": "N70044",
    "title": "Årsarbetare, sjuksköterskor/1000 inv, korrigerat antal i hälso- och sjukvård ur ett konsumtionsperspektiv"
  },
  {
    "id": "N70045",
    "title": "Årsarbetare, barnmorskor/1000 inv, korrigerat antal i hälso- och sjukvård ur ett konsumtionsperspektiv"
  },
  {
    "id": "N70049",
    "title": "Köp av hälso- och sjukvård totalt som andel av nettokostnad, (%)"
  },
  {
    "id": "N70050",
    "title": "Årsarbetare, leg. läkare/1000 inv, korrigerat antal i hälso- och sjukvård ur ett produktionsperspektiv"
  },
  {
    "id": "N70051",
    "title": "Årsarbetare, sjuksköterskor/1000 inv, korrigerat antal i hälso- och sjukvård ur ett produktionsperspektiv"
  },
  {
    "id": "N70052",
    "title": "Årsarbetare, sjuksköterskor/leg. läkare, korrigerat antal i hälso- och sjukvård ur ett produktionsperspektiv"
  },
  {
    "id": "N70053",
    "title": "Årsarbetare, psykologer och psykoterapeuter/1000 inv, korrigerat antal i hälso- och sjukvård ur ett konsumtionsperspektiv"
  },
  {
    "id": "N70054",
    "title": "Årsarbetare, vårdadministratörer/1000 inv, korrigerat antal i hälso- och sjukvård ur ett konsumtionsperspektiv"
  },
  {
    "id": "N70055",
    "title": "Årsarbetare, rehabilitering och förebyggande arbete/1000 inv, korrigerat antal i hälso- och sjukvård ur ett konsumtionsperspektiv"
  },
  {
    "id": "N70056",
    "title": "Årsarbetare, vårdadministratörer/leg. läkare, korrigerat antal i primärvård ur ett konsumtionsperspektiv"
  },
  {
    "id": "N70057",
    "title": "Kostnad hälso- och sjukvård exkl tandvård, kr/inv"
  },
  {
    "id": "N70059",
    "title": "Nettokostnad läkemedel, totalt exkl tandvård, kr/inv"
  },
  {
    "id": "N70060",
    "title": "Nettokostnad hälso- och sjukvård exkl tandvård, kr/inv"
  },
  {
    "id": "N70061",
    "title": "Nettokostnad hälso- och sjukvård totalt (inkl. läkemedel), kr/inv"
  },
  {
    "id": "N70402",
    "title": "Återstående medellivslängd vid 65 års ålder (Kvinnor) län, år"
  },
  {
    "id": "N70403",
    "title": "Återstående medellivslängd vid 65 års ålder (Män) län, år"
  },
  {
    "id": "N70404",
    "title": "Hälsopolitiskt åtgärdbar dödlighet, döda/100 000 inv 1-79 år (-2018)"
  },
  {
    "id": "N70405",
    "title": "Genomförd operation/åtgärd i specialiserad vård inom 90 dagar, andel (%)"
  },
  {
    "id": "N70800",
    "title": "Vårdtillfällen i åldersgruppen 0-14 år, andel (%)"
  },
  {
    "id": "N70801",
    "title": "Vårdtillfällen i åldersgruppen 15-24 år, andel (%)"
  },
  {
    "id": "N70802",
    "title": "Vårdtillfällen i åldersgruppen 25-44 år, andel (%)"
  },
  {
    "id": "N70803",
    "title": "Vårdtillfällen i åldersgruppen 45-64 år, andel (%)"
  },
  {
    "id": "N70804",
    "title": "Vårdtillfällen i åldersgruppen 65-74 år, andel (%)"
  },
  {
    "id": "N70805",
    "title": "Vårdtillfällen i åldersgruppen 75-84 år, andel (%)"
  },
  {
    "id": "N70806",
    "title": "Vårdtillfällen i åldersgruppen 85+, andel (%)"
  },
  {
    "id": "N70808",
    "title": "Vårdtillfällen, antal/100 000 inv"
  },
  {
    "id": "N70809",
    "title": "Vårdtillfällen i åldersgruppen 0-14 år, antal/100 000 inv"
  },
  {
    "id": "N70810",
    "title": "Vårdtillfällen i åldersgruppen 15-24 år, antal/100 000 inv"
  },
  {
    "id": "N70811",
    "title": "Vårdtillfällen i åldersgruppen 25-44 år, antal/100 000 inv"
  },
  {
    "id": "N70812",
    "title": "Vårdtillfällen i åldersgruppen 45-64 år, antal/100 000 inv"
  },
  {
    "id": "N70813",
    "title": "Vårdtillfällen i åldersgruppen 65-74 år, antal/100 000 inv"
  },
  {
    "id": "N70814",
    "title": "Vårdtillfällen i åldersgruppen 75-84 år, antal/100 000 inv"
  },
  {
    "id": "N70815",
    "title": "Vårdtillfällen i åldersgruppen 85+, antal/100 000 inv"
  },
  {
    "id": "N70816",
    "title": "Vårdtid i dagar i åldersgruppen 0-14 år, andel (%)"
  },
  {
    "id": "N70817",
    "title": "Vårdtid i dagar i åldersgruppen 15-24 år, andel (%)"
  },
  {
    "id": "N70818",
    "title": "Vårdtid i dagar i åldersgruppen 25-44 år, andel (%)"
  },
  {
    "id": "N70819",
    "title": "Vårdtid i dagar i åldersgruppen 45-64 år, andel (%)"
  },
  {
    "id": "N70820",
    "title": "Vårdtid i dagar i åldersgruppen 65-74 år, andel (%)"
  },
  {
    "id": "N70821",
    "title": "Vårdtid i dagar i åldersgruppen 75-84 år, andel (%)"
  },
  {
    "id": "N70822",
    "title": "Vårdtid i dagar i åldersgruppen 85+, andel (%)"
  },
  {
    "id": "N70824",
    "title": "Vårdtid i dagar, antal/100 000 inv"
  },
  {
    "id": "N70825",
    "title": "Vårdtid i dagar i åldersgruppen 0-14 år, antal/100 000 inv"
  },
  {
    "id": "N70826",
    "title": "Vårdtid i dagar i åldersgruppen 15-24 år, antal/100 000 inv"
  },
  {
    "id": "N70827",
    "title": "Vårdtid i dagar i åldersgruppen 25-44 år, antal/100 000 inv"
  },
  {
    "id": "N70828",
    "title": "Vårdtid i dagar i åldersgruppen 45-64 år, antal/100 000 inv"
  },
  {
    "id": "N70829",
    "title": "Vårdtid i dagar i åldersgruppen 65-74 år, antal/100 000 inv"
  },
  {
    "id": "N70830",
    "title": "Vårdtid i dagar i åldersgruppen 75-84 år, antal/100 000 inv"
  },
  {
    "id": "N70831",
    "title": "Vårdtid i dagar i åldersgruppen 85+, antal/100 000 inv"
  },
  {
    "id": "N70832",
    "title": "Medelvårdtid hälso- och sjukvård, antal dagar"
  },
  {
    "id": "N70833",
    "title": "Medelvårdtid hälso- och sjukvård i åldersgruppen 0-14 år, antal dagar"
  },
  {
    "id": "N70834",
    "title": "Medelvårdtid hälso- och sjukvård i åldersgruppen 15-24 år, antal dagar"
  },
  {
    "id": "N70835",
    "title": "Medelvårdtid hälso- och sjukvård i åldersgruppen 25-44 år, antal dagar"
  },
  {
    "id": "N70836",
    "title": "Medelvårdtid hälso- och sjukvård i åldersgruppen 45-64 år, antal dagar"
  },
  {
    "id": "N70837",
    "title": "Medelvårdtid hälso- och sjukvård i åldersgruppen 65-74 år, antal dagar"
  },
  {
    "id": "N70838",
    "title": "Medelvårdtid hälso- och sjukvård i åldersgruppen 75-84 år, antal dagar"
  },
  {
    "id": "N70839",
    "title": "Medelvårdtid hälso- och sjukvård i åldersgruppen 85+, antal dagar"
  },
  {
    "id": "N70840",
    "title": "Läkarbesök hälso- och sjukvård (exkl mvc/bvc), antal/1000 inv"
  },
  {
    "id": "N70841",
    "title": "Läkarbesök totalt mödra- och barnhälsovård, antal/1000 inv"
  },
  {
    "id": "N70842",
    "title": "Läkarbesök hälso- och sjukvård, antal/1000 inv"
  },
  {
    "id": "N70843",
    "title": "Andra besök än läkarbesök, antal/1000 inv"
  },
  {
    "id": "N70844",
    "title": "Dagsjukvårdsbesök totalt, antal/1000 inv"
  },
  {
    "id": "N70845",
    "title": "Disponibla vårdplatser slutenvård totalt i länet, antal/1000 inv"
  },
  {
    "id": "N70900",
    "title": "Invånare 0-24 år som vårdats i sluten vård pga övergrepp av annan person, antal/100 000"
  },
  {
    "id": "N70901",
    "title": "Flickor 13-17 år som fött barn, antal/1000 flickor"
  },
  {
    "id": "N70902",
    "title": "Flickor 13-17 år som gjort abort, antal/1000 flickor"
  },
  {
    "id": "N70903",
    "title": "Barn med låg födelsevikt, antal/1000 barn"
  },
  {
    "id": "N70904",
    "title": "Invånare 10-24 år i slutenvård pga alkoholrelaterade diagnoser, antal/100 000"
  },
  {
    "id": "N70905",
    "title": "Invånare 10-24 år i slutenvård pga narkotikarelaterade diagnoser, antal/100 000"
  },
  {
    "id": "N70906",
    "title": "Invånare 0-24 år som vårdats i slutenvård pga avsiktligt självdestruktiv handling, antal/100 000"
  },
  {
    "id": "N70909",
    "title": "Slutenvårdats till följd av skadehändelse, antal/100 000 inv 0-6 år"
  },
  {
    "id": "N71000",
    "title": "Kostnad för primärvård (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N71001",
    "title": "Köp av primärvård från privata företag/vårdgivare som andel av nettokostnad, (%)"
  },
  {
    "id": "N71002",
    "title": "Månadsavlönad personal, regionanställda inom primärvård, antal"
  },
  {
    "id": "N71005",
    "title": "Nettokostnad barnhälsovård i primärvård (exkl. läkemedel), kr per barn 0-6 år"
  },
  {
    "id": "N71006",
    "title": "Nettokostnad mödrahälsovård i primärvård (exkl. läkemedel), kr per kvinna 15-54 år"
  },
  {
    "id": "N71007",
    "title": "Nettokostnad primärvård totalt (exkl. primärvårdsansluten hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N71009",
    "title": "Nettokostnad sjuksköterskevård i primärvård (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N71010",
    "title": "Nettokostnad sluten primärvård (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N71011",
    "title": "Nettokostnad övrig primärvård (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N71013",
    "title": "Årsarbetare, regionanställda inom primärvård, antal"
  },
  {
    "id": "N71014",
    "title": "Nettokostnad för läkemedel inom läkemedelsförmånen, primärvård, kr/inv"
  },
  {
    "id": "N71017",
    "title": "Nettokostnad sjukgymnastik och arbetsterapi i primärvård (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N71018",
    "title": "Nettokostnad allmänläkarvård inkl. jourverks i primärvård (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N71019",
    "title": "Nettokostnad primärvård totalt (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N71020",
    "title": "Nettokostnad barnhälsovård i primärvård (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N71021",
    "title": "Nettokostnad mödrahälsovård i primärvård (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N71022",
    "title": "Årsarbetare, leg. läkare/1000 inv, korrigerat antal i primärvård ur ett konsumtionsperspektiv"
  },
  {
    "id": "N71023",
    "title": "Årsarbetare, sjuksköterskor/1000 inv, korrigerat antal i primärvård ur ett konsumtionsperspektiv"
  },
  {
    "id": "N71024",
    "title": "Årsarbetare, barnmorskor/1000 inv, korrigerat antal i primärvård ur ett konsumtionsperspektiv"
  },
  {
    "id": "N71027",
    "title": "Årsarbetare, sjuksköterskor/leg. läkare, korrigerat antal i primärvård ur ett konsumtionsperspektiv"
  },
  {
    "id": "N71028",
    "title": "Nettokostnad för primärvård totalt exkl. primärvårdsansluten hemsjukvård, kr/viktad vårdkontakt"
  },
  {
    "id": "N71029",
    "title": "Köp av primärvård som andel av nettokostnad, (%)"
  },
  {
    "id": "N71031",
    "title": "Köp av primärvård från ideella föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N71032",
    "title": "Årsarbetare, leg. läkare/1000 inv, korrigerat antal i primärvård ur ett produktionsperspektiv"
  },
  {
    "id": "N71033",
    "title": "Årsarbetare, sjuksköterskor/1000 inv, korrigerat antal i primärvård ur ett produktionsperspektiv"
  },
  {
    "id": "N71034",
    "title": "Årsarbetare, sjuksköterskor/leg. läkare, korrigerat antal i primärvård ur ett produktionsperspektiv"
  },
  {
    "id": "N71035",
    "title": "Årsarbetare, vårdadministratörer/1000 inv, korrigerat antal i primärvård ur ett konsumtionsperspektiv"
  },
  {
    "id": "N71200",
    "title": "Tillsvidareanställda månadsavlönade inom primärvård, andel (%)"
  },
  {
    "id": "N71201",
    "title": "Visstidsanställda månadsavlönade inom primärvård, andel (%)"
  },
  {
    "id": "N71202",
    "title": "Visstidsanställda timavlönade inom primärvård, andel (%)"
  },
  {
    "id": "N71203",
    "title": "Arbetad tid utförd av tillsvidareanställda månadsavlönade inom primärvård, andel (%)"
  },
  {
    "id": "N71204",
    "title": "Arbetad tid utförd av visstidsanställda månadsavlönade inom primärvård, andel (%)"
  },
  {
    "id": "N71205",
    "title": "Arbetad tid utförd av visstidsanställda timavlönade inom primärvård, andel (%)"
  },
  {
    "id": "N71206",
    "title": "Heltidsanställda månadsavlönade inom primärvård, andel (%)"
  },
  {
    "id": "N71207",
    "title": "Deltidsanställda (75-99 %) månadsavlönade inom primärvård, andel (%)"
  },
  {
    "id": "N71208",
    "title": "Deltidsanställda (1-74 %) månadsavlönade inom primärvård, andel (%)"
  },
  {
    "id": "N71209",
    "title": "Heltidsarbetande månadsavlönade inom primärvård, andel (%)"
  },
  {
    "id": "N71210",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade inom primärvård, andel (%)"
  },
  {
    "id": "N71211",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade inom primärvård, andel (%)"
  },
  {
    "id": "N71212",
    "title": "Anställda -34 år inom primärvård, andel (%)"
  },
  {
    "id": "N71213",
    "title": "Anställda 35-54 år inom primärvård, andel (%)"
  },
  {
    "id": "N71214",
    "title": "Anställda 55+ inom primärvård, andel (%)"
  },
  {
    "id": "N71217",
    "title": "Anställda utrikes födda inom primärvård, balanstal"
  },
  {
    "id": "N71400",
    "title": "Kontakt med primärvården samma dag, andel (%)"
  },
  {
    "id": "N71800",
    "title": "Rökare vid inskrivning till mödrahälsovård i graviditetsvecka 8-12, andel (%)"
  },
  {
    "id": "N71801",
    "title": "Viktade vårdkontakter för barnhälsovård i primärvård, antal/barn 0-6 år"
  },
  {
    "id": "N71802",
    "title": "Viktade vårdkontakter för allmänläkarvård i primärvård, antal/inv"
  },
  {
    "id": "N71803",
    "title": "Viktade vårdkontakter för sjukgymnastik i primärvård, antal/inv"
  },
  {
    "id": "N71804",
    "title": "Viktade vårdkontakter för sjuksköterskevård i primärvård, antal/inv"
  },
  {
    "id": "N71805",
    "title": "Viktade vårdkontakter för primärvård totalt exkl. primärvårdsansluten hemsjukvård, antal/inv"
  },
  {
    "id": "N71806",
    "title": "Viktade vårdkontakter för mödrahälsovård i primärvård, antal/kvinna 15-54 år"
  },
  {
    "id": "N71807",
    "title": "Läkarbesök primärvård, antal/1000 inv"
  },
  {
    "id": "N71808",
    "title": "Läkarbesök primärvård, egen produktion (exkl mvc/bvc), antal/1000 inv"
  },
  {
    "id": "N71809",
    "title": "Läkarbesök primärvård, annan vårdgivare (exkl mvc/bvc), antal/1000 inv."
  },
  {
    "id": "N71810",
    "title": "Andra besök än läkarbesök primärvård (exkl mvc/bvc), antal/1000 inv"
  },
  {
    "id": "N71811",
    "title": "Andra besök än läkarbesök primärvård, antal/1000 inv"
  },
  {
    "id": "N71812",
    "title": "Andra besök än läkarbesök, primärvård (exkl mvc/bvc) egen produktion, antal/1000 inv"
  },
  {
    "id": "N71813",
    "title": "Andra besök än läkarbesök, primärvård egen produktion/1000 inv"
  },
  {
    "id": "N71814",
    "title": "Andra besök än läkarbesök, primärvård (exkl mvc/bvc) annan vårdgivare/1000 inv"
  },
  {
    "id": "N71815",
    "title": "Andra besök än läkarbesök, primärvård annan vårdgivare/1000 inv"
  },
  {
    "id": "N71816",
    "title": "Disponibla vårdplatser sluten primärvård i länet, antal/1000 inv"
  },
  {
    "id": "N71817",
    "title": "Viktade vårdkontakter för fysioterapi och arbetsterapi i primärvård, antal/inv"
  },
  {
    "id": "N72000",
    "title": "Kostnad för specialiserad somatisk vård (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N72002",
    "title": "Köp av specialiserad somatisk vård från privata företag/vårdgivare som andel av nettokostnad, (%)"
  },
  {
    "id": "N72003",
    "title": "Månadsavlönad personal, regionanställda inom spec somatisk vård, antal"
  },
  {
    "id": "N72004",
    "title": "Nettokostnad specialiserad somatisk dagsjukvård (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N72005",
    "title": "Nettokostnad specialiserad somatisk mottagningsverksamhet (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N72006",
    "title": "Nettokostnad specialiserad somatisk slutenvård (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N72007",
    "title": "Nettokostnad specialiserad somatisk vård totalt (exkl. somatisk hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N72008",
    "title": "Årsarbetare, regionanställda inom spec somatisk vård, antal"
  },
  {
    "id": "N72009",
    "title": "Nettokostnad specialiserad somatisk vård totalt (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N72010",
    "title": "Nettokostnad för läkemedel inom läkemedelsförmånen, specialiserad somatisk vård, kr/inv"
  },
  {
    "id": "N72011",
    "title": "Nettokostnad för specialiserad somatisk (kroppslig) vård totalt, kr/viktad vårdkontakt"
  },
  {
    "id": "N72012",
    "title": "Köp av specialiserad somatisk vård som andel av nettokostnad (exkl. läkemedel), (%)"
  },
  {
    "id": "N72013",
    "title": "Disponibla vårdplatser i specialiserad somatisk vård, konsumtionskorrigerat antal/1000 inv."
  },
  {
    "id": "N72014",
    "title": "Läkarbesök inom specialiserad somatisk vård, korrigerat antal/1000 inv"
  },
  {
    "id": "N72015",
    "title": "Andra besök än läkarbesök inom specialiserad somatisk vård, korrigerat antal/1000 inv."
  },
  {
    "id": "N72016",
    "title": "Tillsvidareanställda månadsavlönade inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72017",
    "title": "Visstidsanställda månadsavlönade inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72018",
    "title": "Visstidsanställda timavlönade inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72019",
    "title": "Arbetad tid utförd av tillsvidareanställda månadsavlönade inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72020",
    "title": "Arbetad tid utförd av visstidsanställda månadsavlönade inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72021",
    "title": "Arbetad tid utförd av visstidsanställda timavlönade inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72022",
    "title": "Heltidsanställda månadsavlönade inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72023",
    "title": "Deltidsanställda (75-99 %) månadsavlönade inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72024",
    "title": "Deltidsanställda (1-74 %) månadsavlönade inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72025",
    "title": "Heltidsarbetande månadsavlönade inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72026",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72027",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72028",
    "title": "Anställda -34 år inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72029",
    "title": "Anställda 35-54 år inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72030",
    "title": "Anställda 55+ inom specialiserad somatisk vård, andel (%)"
  },
  {
    "id": "N72033",
    "title": "Anställda utrikes födda inom specialiserad somatisk vård, balanstal"
  },
  {
    "id": "N72034",
    "title": "Köp av specialiserad somatisk vård från ideella föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N72035",
    "title": "Köp av specialiserad somatisk vård från regioner, andel (%)"
  },
  {
    "id": "N72036",
    "title": "Köp av specialiserad somatisk vård från regionägda företag i egen KCR, andel (%)"
  },
  {
    "id": "N72400",
    "title": "Genomfört första besök i specialiserad vård inom 90 dagar, andel (%)"
  },
  {
    "id": "N72409",
    "title": "Avlidna på sjukhus, andel (%)"
  },
  {
    "id": "N72455",
    "title": "Avlidna inom 28 dagar efter hjärtinfarkt, antal"
  },
  {
    "id": "N72461",
    "title": "Avlidna inom 3 månader efter stroke, antal/10 000 inv"
  },
  {
    "id": "N72800",
    "title": "Viktade vårdkontakter för mottagningsverksamhet i specialiserad somatisk (kroppslig) vård, antal/inv"
  },
  {
    "id": "N72801",
    "title": "Viktade vårdkontakter för specialiserad somatisk (kroppslig) vård totalt, antal/inv"
  },
  {
    "id": "N72802",
    "title": "Vårdtillfällen i specialiserad somatisk slutenvård, antal/100 000 inv."
  },
  {
    "id": "N72803",
    "title": "Läkarbesök specialiserad somatisk vård, antal/1000 inv."
  },
  {
    "id": "N72804",
    "title": "Läkarbesök spec somatisk vård annan vårdgivare, antal/1000 inv"
  },
  {
    "id": "N72805",
    "title": "Läkarbesök specialiserad somatisk vård egen prod, antal/1000 inv"
  },
  {
    "id": "N72806",
    "title": "Andra besök än läkarbesök specialiserad somatisk vård egen prod, antal/1000 inv"
  },
  {
    "id": "N72807",
    "title": "Andra besök än läkarbesök specialiserad somatisk vård annan vårdgivare, antal/1000 inv."
  },
  {
    "id": "N72808",
    "title": "Andra besök än läkarbesök specialiserad somatisk vård, antal/1000 inv"
  },
  {
    "id": "N72809",
    "title": "Andra besök än läkarbesök mödrahälsovård, antal/1000 inv"
  },
  {
    "id": "N72810",
    "title": "Andra besök än läkarbesök barnhälsovård, antal/1000 inv."
  },
  {
    "id": "N72811",
    "title": "Andra besök än läkarbesök, mödrahälsovård egen produktion, antal/1000 inv."
  },
  {
    "id": "N72812",
    "title": "Andra besök än läkarbesök, barnhälsovård egen produktion, antal/1000 inv."
  },
  {
    "id": "N72813",
    "title": "Andra besök än läkarbesök, mödrahälsovård annan vårdgivare/1000 inv"
  },
  {
    "id": "N72814",
    "title": "Andra besök än läkarbesök, barnhälsovård annan vårdgivare/1000 inv."
  },
  {
    "id": "N72815",
    "title": "Dagsjukvårdsbesök somatisk vård, antal/1000 inv."
  },
  {
    "id": "N72816",
    "title": "Disponibla vårdplatser i specialiserad somatisk vård i länet, antal/1000 inv"
  },
  {
    "id": "N72817",
    "title": "Disponibla vårdplatser medicinsk korttidsvård i länet, antal/1000 inv"
  },
  {
    "id": "N72818",
    "title": "Disponibla vårdplatser kirurgisk korttidsvård i länet, antal/1000 inv"
  },
  {
    "id": "N72819",
    "title": "Disponibla vårdplatser ofördelad korttidsvård i länet, antal/1000 inv"
  },
  {
    "id": "N72820",
    "title": "Disponibla vårdplatser geriatrisk vård i länet, antal/1000 inv"
  },
  {
    "id": "N72821",
    "title": "Disponibla vårdplatser övrig specialiserad somatisk vård i länet, antal/1000 inv"
  },
  {
    "id": "N72823",
    "title": "Vårdtillfällen, ålderstandardiserade värden,  antal/100 000 inv"
  },
  {
    "id": "N72825",
    "title": "Dagkirurgi, andel (%) operationer"
  },
  {
    "id": "N72826",
    "title": "Beläggningsgrad"
  },
  {
    "id": "N72827",
    "title": "Operationer - hysterektomi, ålderstandardiserade värden, antal/100 000 kvinnor"
  },
  {
    "id": "N72828",
    "title": "Medelvårdtid vid hysterektomi, antal dagar"
  },
  {
    "id": "N72829",
    "title": "Operationer - Framfall, ålderstandardiserade värden, antal/100 000 kvinnor"
  },
  {
    "id": "N72830",
    "title": "Operationer - Urininkontinens, ålderstandardiserade värden, antal/100 000 kvinnor"
  },
  {
    "id": "N72831",
    "title": "Operationer - Skrapning, ålderstandardiserade värden, antal/100 000 kvinnor"
  },
  {
    "id": "N72832",
    "title": "Operationer - Artroskopi i knäled, ålderstandardiserade värden, antal/100 000 invånare"
  },
  {
    "id": "N72833",
    "title": "Knäprotesoperationer, ålderstandardiserade värden, antal/100 000 invånare"
  },
  {
    "id": "N72834",
    "title": "Medelvårdtider vid knäprotesoperationer, antal dagar"
  },
  {
    "id": "N72835",
    "title": "Höftprotesoperationer, ålderstandardiserade värden, antal/100 000 invånare"
  },
  {
    "id": "N72836",
    "title": "Medelvårdtider vid höftprotesoperationer, antal dagar"
  },
  {
    "id": "N72837",
    "title": "Vårdtillfällen vid höftfraktur, ålderstandardiserade värden, antal/per 100 000 invånare"
  },
  {
    "id": "N72838",
    "title": "Medelvårdtider vid höftfraktur, antal dagar"
  },
  {
    "id": "N72839",
    "title": "Vårdtillfällen vid hjärtsvikt, ålderstandardiserade värden, antal/100 000 invånare"
  },
  {
    "id": "N72840",
    "title": "Vårddagar vid hjärtsvikt, antal/patient"
  },
  {
    "id": "N72841",
    "title": "Medelvårdtid vid hjärtsvikt, antal dagar"
  },
  {
    "id": "N72842",
    "title": "Vårdtillfällen vid hjärtarytmi och överledningsstörningar, ålderstandardiserade värden, antal/100 000 invånare"
  },
  {
    "id": "N72843",
    "title": "Vårddagar vid hjärtarytmi och överledningsstörningar, antal/patient"
  },
  {
    "id": "N72844",
    "title": "Medelvårdtid vid hjärtarytmi och överledningsstörningar, antal dagar"
  },
  {
    "id": "N72845",
    "title": "Vårdtillfällen vid kärlkramp, ålderstandardiserade värden, antal/100 000 invånare"
  },
  {
    "id": "N72846",
    "title": "Vårddagar vid kärlkramp, antal/patient"
  },
  {
    "id": "N72847",
    "title": "Medelvårdtid vid kärlkramp, antal vårddagar"
  },
  {
    "id": "N72848",
    "title": "Operationer - planerad PCI vid kranskärlsförträngning, ålderstandardiserade värden, antal/100 000 inv"
  },
  {
    "id": "N72849",
    "title": "Vårddagar vid planerad PCI vid kranskärlsförträngning, antal/patient"
  },
  {
    "id": "N72850",
    "title": "Medelvårdtid vid planerad PCI vid kranskärlsförträngning, antal dagar"
  },
  {
    "id": "N72851",
    "title": "Kranskärlsoperationer, ålderstandardiserade värden, antal/100 000 invånare"
  },
  {
    "id": "N72852",
    "title": "Operationer - pacemakerimplantat, ålderstandardiserade värden, antal/100 000 invånare"
  },
  {
    "id": "N72853",
    "title": "Medelvårdtid vid stroke, antal dagar"
  },
  {
    "id": "N72854",
    "title": "Operationer - Katarakt, antal/10 000 invånare över 70 år"
  },
  {
    "id": "N72855",
    "title": "Operationer - Prostataförstoring, antal/100 000 män, ålderstandardiserade värden"
  },
  {
    "id": "N72856",
    "title": "Operationer - Ljumskbråck, antal/100 000 invånare, ålderstandardiserade värden"
  },
  {
    "id": "N72857",
    "title": "Operationer - Kolecystektomi, antal/100 000 invånare, ålderstandardiserade värden"
  },
  {
    "id": "N72858",
    "title": "Operationer - Septumplastik, antal/100 000 invånare, ålderstandardiserade värden"
  },
  {
    "id": "N72859",
    "title": "Operationer - Tonsillektomi, antal/100 000 invånare, ålderstandardiserade värden"
  },
  {
    "id": "N72860",
    "title": "Operationer - obesitaskirurgi, antal/100 000 invånare, ålderstandardiserade värden"
  },
  {
    "id": "N72861",
    "title": "Medelvårdtid vid obesitaskirurgi, antal dagar"
  },
  {
    "id": "N72862",
    "title": "Vårdtillfällen vid blödande magsår, antal/100 000 invånare, ålderstandardiserade värden"
  },
  {
    "id": "N72863",
    "title": "Medelvårdtid vid blödande magsår, antal dagar"
  },
  {
    "id": "N72864",
    "title": "Disponibla vårdplatser i specialiserad somatisk vård i länet, egen regi, antal/1000 inv"
  },
  {
    "id": "N72865",
    "title": "Disponibla vårdplatser i specialiserad somatisk vård i länet, övrig regi, antal/1000 inv"
  },
  {
    "id": "N74000",
    "title": "Kostnad för specialiserad psykiatrisk vård (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N74001",
    "title": "Köp av specialiserad psykiatrisk vård från privata företag/vårdgivare som andel av nettokostnad, (%)"
  },
  {
    "id": "N74002",
    "title": "Månadsavlönad personal, regionanställda inom spec psykiatrisk vård, antal"
  },
  {
    "id": "N74003",
    "title": "Nettokostnad specialiserad psykiatrisk mottagningsverksamhet (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N74004",
    "title": "Nettokostnad specialiserad psykiatrisk slutenvård (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N74005",
    "title": "Nettokostnad specialiserad psykiatrisk dagsjukvård (exkl. hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N74006",
    "title": "Nettokostnad specialiserad psykiatrisk vård totalt (exkl. psykiatrisk hemsjukvård och läkemedel), kr/inv"
  },
  {
    "id": "N74007",
    "title": "Årsarbetare, regionanställda inom spec psykiatrisk vård, antal"
  },
  {
    "id": "N74008",
    "title": "Nettokostnad specialiserad psykiatrisk vård totalt (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N74010",
    "title": "Nettokostnad för läkemedel inom läkemedelsförmånen, specialiserad psykiatrisk vård, kr/inv"
  },
  {
    "id": "N74011",
    "title": "Nettokostnad för specialiserad psykiatrisk vård totalt, kr/viktad vårdkontakt"
  },
  {
    "id": "N74012",
    "title": "Köp av specialiserad psykiatrisk vård som andel av nettokostnad, (%)"
  },
  {
    "id": "N74013",
    "title": "Tillsvidareanställda månadsavlönade inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74014",
    "title": "Visstidsanställda månadsavlönade inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74015",
    "title": "Visstidsanställda timavlönade inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74016",
    "title": "Arbetad tid utförd av tillsvidareanställda månadsavlönade inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74017",
    "title": "Arbetad tid utförd av visstidsanställda månadsavlönade inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74018",
    "title": "Arbetad tid utförd av visstidsanställda timavlönade inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74019",
    "title": "Heltidsanställda månadsavlönade inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74020",
    "title": "Deltidsanställda (75-99 %) månadsavlönade inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74021",
    "title": "Deltidsanställda (1-74 %) månadsavlönade inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74022",
    "title": "Heltidsarbetande månadsavlönade inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74023",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74024",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74025",
    "title": "Anställda -34 år inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74026",
    "title": "Anställda 35-54 år inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74027",
    "title": "Anställda 55+ inom specialiserad psykiatrisk vård, andel (%)"
  },
  {
    "id": "N74030",
    "title": "Anställda utrikes födda inom specialiserad psykiatrisk vård, balanstal"
  },
  {
    "id": "N74031",
    "title": "Köp av psykiatrisk vård från ideella föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N74032",
    "title": "Köp av psykiatrisk vård från regioner, andel (%)"
  },
  {
    "id": "N74033",
    "title": "Köp av psykiatrisk vård från regionägda företag i egen KCR, andel (%)"
  },
  {
    "id": "N74402",
    "title": "Självmord bland psykiatripatienter, andel (%) (-2018)"
  },
  {
    "id": "N74800",
    "title": "Viktade vårdkontakter för specialiserad psykiatrisk mottagningsverksamhet, antal/inv"
  },
  {
    "id": "N74801",
    "title": "Viktade vårdkontakter för specialiserad psykiatrisk vård totalt, antal/inv"
  },
  {
    "id": "N74802",
    "title": "Vårdtillfällen i specialiserad psykiatrisk slutenvård, antal/100 000 inv."
  },
  {
    "id": "N74803",
    "title": "Läkarbesök specialiserad psykiatrisk vård, antal/1000 inv"
  },
  {
    "id": "N74804",
    "title": "Läkarbesök spec psykiatrisk vård annan vårdgivare, antal/1000 inv."
  },
  {
    "id": "N74805",
    "title": "Läkarbesök specialiserad psykiatrisk vård egen prod, antal/1000 inv."
  },
  {
    "id": "N74806",
    "title": "Andra besök än läkarbesök specialiserad psykiatrisk vård egen prod, antal/1000 inv."
  },
  {
    "id": "N74807",
    "title": "Andra besök än läkarbesök specialiserad psykiatrisk vård annan vårdgivare, antal/1000 inv."
  },
  {
    "id": "N74808",
    "title": "Andra besök än läkarbesök specialiserad psykiatrisk vård, antal/1000 inv"
  },
  {
    "id": "N74809",
    "title": "Dagsjukvårdsbesök psykiatrisk vård, antal/1000 inv"
  },
  {
    "id": "N74810",
    "title": "Disponibla vårdplatser specialiserad psykiatrisk vård i länet, antal/1000 inv"
  },
  {
    "id": "N74811",
    "title": "Långtidssjukskrivna med psykiska sjukdomar och syndrom samt beteendestörningar, andel (%)"
  },
  {
    "id": "N74812",
    "title": "Långtidssjukskrivna av förstämningssyndrom, andel (%)"
  },
  {
    "id": "N74813",
    "title": "Långtidssjukskrivna av neurotiska, stressrelaterade och somatoforma syndrom, andel (%)"
  },
  {
    "id": "N74814",
    "title": "Vårdtillfällen vid schizofreni, ålderstandardiserade värden, antal/100 000 invånare"
  },
  {
    "id": "N74815",
    "title": "Disponibla vårdplatser allmän psykiatri i länet, antal/1000 inv"
  },
  {
    "id": "N74816",
    "title": "Disponibla vårdplatser barn- och ungdomspsykiatri i länet, antal/1000 inv"
  },
  {
    "id": "N74817",
    "title": "Disponibla vårdplatser rättspsykiatri i länet, antal/1000 inv"
  },
  {
    "id": "N74900",
    "title": "Invånare 0-24 år som vårdats i slutenvård med psykiatrisk diagnos, antal/100 000 (-2018)"
  },
  {
    "id": "N76001",
    "title": "Nettokostnad primärvårdsansluten hemsjukvård (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N76002",
    "title": "Nettokostnad specialiserad psykiatrisk hemsjukvård (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N76003",
    "title": "Nettokostnad specialiserad somatisk hemsjukvård (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N76800",
    "title": "Viktade vårdkontakter för hemsjukvård, antal/inv"
  },
  {
    "id": "N79000",
    "title": "Kostnad för övrig hälso- och sjukvård totalt, kr/inv"
  },
  {
    "id": "N79001",
    "title": "Månadsavlönad personal, regionanställda inom övrig hälso o sjukvård, antal"
  },
  {
    "id": "N79002",
    "title": "Nettokostnad ambulans- och sjuktransporter, kr/inv"
  },
  {
    "id": "N79003",
    "title": "Nettokostnad folkhälsofrågor, kr/inv"
  },
  {
    "id": "N79004",
    "title": "Nettokostnad FoU avseende hälso- och sjukvård, kr/inv"
  },
  {
    "id": "N79005",
    "title": "Nettokostnad handikapps-/hjälpverksamhet, kr/inv"
  },
  {
    "id": "N79006",
    "title": "Nettokostnad sjukresor, kr/inv"
  },
  {
    "id": "N79007",
    "title": "Nettokostnad social verksamhet, kr/inv"
  },
  {
    "id": "N79008",
    "title": "Nettokostnad övrig hälso- och sjukvård totalt (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N79009",
    "title": "Nettokostnad övrigt inom övrig hälso- och sjukvård, kr/inv"
  },
  {
    "id": "N79010",
    "title": "Årsarbetare, regionanställda inom övrig hälso o sjukvård, antal"
  },
  {
    "id": "N79011",
    "title": "Köp av  övrig hälso- och sjukvård som andel av nettokostnad, (%)"
  },
  {
    "id": "N79012",
    "title": "Nettokostnad för läkemedel inom läkemedelsförmånen, övrig hälso- och sjukvård, kr/inv"
  },
  {
    "id": "N79013",
    "title": "Köp av övrig hälso- och sjukvård från privata företag/vårdgivare, andel (%)"
  },
  {
    "id": "N79014",
    "title": "Köp av övrig hälso- och sjukvård från ideella föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N79015",
    "title": "Köp av övrig hälso- och sjukvård från regioner, andel (%)"
  },
  {
    "id": "N79016",
    "title": "Köp av övrig hälso- och sjukvård från regionägda företag i egen KCR, andel (%)"
  },
  {
    "id": "N79169",
    "title": "Täckningsgrad för gynekologisk cellprovskontroll, andel (%)"
  },
  {
    "id": "N79171",
    "title": "Hälsopolitiskt åtgärdbar dödlighet, antal/ 100 000 invånare."
  },
  {
    "id": "N79172",
    "title": "Förekomst av diabetes typ 2, andel (%)"
  },
  {
    "id": "N79175",
    "title": "Tio eller fler läkemedel samtidigt hos äldre, andel (%)"
  },
  {
    "id": "N79176",
    "title": "Vårdplatser belagda av utskrivningsklara patienter, andel (%)"
  },
  {
    "id": "N79177",
    "title": "Positivt helhetsintryck hos patienter som varit inlagd på sjukhus, andel (%)"
  },
  {
    "id": "N79178",
    "title": "Positivt helhetsintryck hos patienter som utreds inom standardiserat vårdförlopp i cancervården, andel (%)"
  },
  {
    "id": "N79179",
    "title": "Telefonsamtal till primärvården som besvarats samma dag, andel (%)"
  },
  {
    "id": "N79180",
    "title": "Patienter med sjukhusförvärvade trycksår, andel (%)"
  },
  {
    "id": "N79181",
    "title": "Användning av WHO:s checklista för säker operation, andel (%)"
  },
  {
    "id": "N79182",
    "title": "Sjukvårdsrelaterad påverkbar dödlighet, antal/100 000 invånare"
  },
  {
    "id": "N79183",
    "title": "Patienter som får ny infarkt eller avlider i ischemisk hjärtsjukdom inom 365 dagar efter hjärtinfarkt, andel (%)"
  },
  {
    "id": "N79184",
    "title": "Patienter som är ADL-beroende eller avlider 90 dagar efter stroke, andel (%)"
  },
  {
    "id": "N79185",
    "title": "Relativ 5-årsöverlevnad vid cancersjukdom, andel (%)"
  },
  {
    "id": "N79186",
    "title": "Överdödlighet vid bipolär sjukdom, kvot"
  },
  {
    "id": "N79187",
    "title": "Patienter med stroke som vid akut insjuknande direkt vårdas på strokeenhet eller IVA, andel (%)"
  },
  {
    "id": "N79188",
    "title": "Patienter med diabetes med blodtryck lägre än 140/80 mmHg, primärvård, andel (%)"
  },
  {
    "id": "N79189",
    "title": "Patienter med diabetes med blodsocker högre än HbA1c > 70 mmol/mol, primärvård, andel (%)"
  },
  {
    "id": "N79800",
    "title": "Besök inom handikapp-/hjälpmedelsverksamheten, antal/1000 inv."
  },
  {
    "id": "N80000",
    "title": "Kostnad för tandvård (inkl. läkemedel), kr/inv"
  },
  {
    "id": "N80001",
    "title": "Köp av tandvård från privata företag/vårdgivare som andel av nettokostnad, (%)"
  },
  {
    "id": "N80002",
    "title": "Månadsavlönad personal, regionanställda tandhygienister, antal"
  },
  {
    "id": "N80003",
    "title": "Månadsavlönad personal, regionanställda tandläkare, antal"
  },
  {
    "id": "N80004",
    "title": "Månadsavlönad personal, regionanställda tandsköterskor, antal"
  },
  {
    "id": "N80005",
    "title": "Månadsavlönad personal, landstingsanställda inom tandvård, antal"
  },
  {
    "id": "N80006",
    "title": "Månadsavlönad personal, regionanställda tandvård övriga, antal"
  },
  {
    "id": "N80007",
    "title": "Nettokostnad tandvård (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N80008",
    "title": "Årsarbetare, regionanställda tandhygienister, antal"
  },
  {
    "id": "N80009",
    "title": "Årsarbetare, regionanställda tandläkare, antal"
  },
  {
    "id": "N80010",
    "title": "Årsarbetare, regionanställda tandsköterskor, antal"
  },
  {
    "id": "N80011",
    "title": "Årsarbetare, landstingsanställda inom tandvård, antal"
  },
  {
    "id": "N80012",
    "title": "Årsarbetare, regionanställda tandvård övriga, antal"
  },
  {
    "id": "N80013",
    "title": "Nettokostnad för läkemedel inom läkemedelsförmånen, tandvård, kr/inv"
  },
  {
    "id": "N80014",
    "title": "Köp av tandvård som andel av nettokostnad, (%)"
  },
  {
    "id": "N80015",
    "title": "Tillsvidareanställda månadsavlönade inom tandvård, andel (%)"
  },
  {
    "id": "N80016",
    "title": "Visstidsanställda månadsavlönade inom tandvård, andel (%)"
  },
  {
    "id": "N80017",
    "title": "Visstidsanställda timavlönade inom tandvård, andel (%)"
  },
  {
    "id": "N80018",
    "title": "Arbetad tid utförd av tillsvidareanställda månadsavlönade inom tandvård, andel (%)"
  },
  {
    "id": "N80019",
    "title": "Arbetad tid utförd av visstidsanställda månadsavlönade inom tandvård, andel (%)"
  },
  {
    "id": "N80020",
    "title": "Arbetad tid utförd av visstidsanställda timavlönade inom tandvård, andel (%)"
  },
  {
    "id": "N80021",
    "title": "Heltidsanställda månadsavlönade inom tandvård, andel (%)"
  },
  {
    "id": "N80022",
    "title": "Deltidsanställda (75-99 %) månadsavlönade inom tandvård, andel (%)"
  },
  {
    "id": "N80023",
    "title": "Deltidsanställda (1-74 %) månadsavlönade inom tandvård, andel (%)"
  },
  {
    "id": "N80024",
    "title": "Heltidsarbetande månadsavlönade inom tandvård, andel (%)"
  },
  {
    "id": "N80025",
    "title": "Deltidsarbetande (75-99 %) månadsavlönade inom tandvård, andel (%)"
  },
  {
    "id": "N80026",
    "title": "Deltidsarbetande (1-74 %) månadsavlönade inom tandvård, andel (%)"
  },
  {
    "id": "N80027",
    "title": "Anställda -34 år inom tandvård, andel (%)"
  },
  {
    "id": "N80028",
    "title": "Anställda 35-54 år inom tandvård, andel (%)"
  },
  {
    "id": "N80029",
    "title": "Anställda 55+ inom tandvård, andel (%)"
  },
  {
    "id": "N80032",
    "title": "Anställda utrikes födda inom tandvård, balanstal"
  },
  {
    "id": "N80033",
    "title": "Köp av tandvård (exkl. moms) från ideella föreningar och stiftelser, andel (%)"
  },
  {
    "id": "N80034",
    "title": "Köp av tandvård (exkl. moms) från regioner, andel (%)"
  },
  {
    "id": "N80035",
    "title": "Köp av tandvård (exkl. moms) från regionägda företag i egen KCR, andel (%)"
  },
  {
    "id": "N80036",
    "title": "Nettokostnad allmäntandvård vuxna (exkl. läkemedel), kr/vuxna invånare"
  },
  {
    "id": "N80037",
    "title": "Nettokostnad regionens tandvårdsstöd (exkl. läkemedel), kr/vuxna invånare"
  },
  {
    "id": "N80038",
    "title": "Nettokostnad allmäntandvård barn och unga (exkl. läkemedel), kr/barn och unga"
  },
  {
    "id": "N80039",
    "title": "Nettokostnad specialisttandvård (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N80040",
    "title": "Nettokostnad allmäntandvård vuxna (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N80041",
    "title": "Nettokostnad regionens tandvårdsstöd (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N80042",
    "title": "Nettokostnad allmäntandvård barn och ungdomar (exkl. läkemedel), kr/inv"
  },
  {
    "id": "N80043",
    "title": "Nettokostnad tandvård, kr/inv"
  },
  {
    "id": "N80401",
    "title": "Kariesfria 3-åringar, andel (%)"
  },
  {
    "id": "N80402",
    "title": "Kariesfria 6-åringar, andel (%)"
  },
  {
    "id": "N80403",
    "title": "Kariesfria 12-åringar, andel (%)"
  },
  {
    "id": "N80404",
    "title": "Approximalt kariesfria 19-åringar, andel (%)"
  },
  {
    "id": "N80405",
    "title": "Kvarvarande tänder bland invånare 80-89 år, median"
  },
  {
    "id": "N80406",
    "title": "Kvarvarande tänder bland invånare 90+, median"
  },
  {
    "id": "N80407",
    "title": "Intakta tänder, median bland vuxna invånare"
  },
  {
    "id": "N80409",
    "title": "Patienter som fått sjukdomsbehandling inom sex månader före eller efter fyllning eller krona, andel (%)."
  },
  {
    "id": "N80410",
    "title": "Patienter som fått en eller flera tänder utdragna på grund av karies, andel (%)."
  },
  {
    "id": "N80411",
    "title": "Patienter som fått en eller flera tänder utdragna på grund av parodontit (tandlossning), andel (%)."
  },
  {
    "id": "N80700",
    "title": "Personer som besökt vuxentandvården senaste tvåårsperioden, andel (%)"
  },
  {
    "id": "N80701",
    "title": "Personer som fått en undersökning inom vuxentandvården utförd senaste tvåårsperioden, andel (%)"
  },
  {
    "id": "N80702",
    "title": "Patienter allmäntandvård vuxna i egen regi, antal/vuxna invånare"
  },
  {
    "id": "N80703",
    "title": "Patienter allmäntandvård barn och ungdomar totalt, antal/barn och unga"
  },
  {
    "id": "N80704",
    "title": "Patienter allmäntandvård barn i egen regi, andel (%)"
  },
  {
    "id": "N80705",
    "title": "Patienter allmäntandvård barn i privat regi, andel (%)"
  },
  {
    "id": "N80706",
    "title": "Listade patienter allmäntandvård barn och unga totalt, andel (%)"
  },
  {
    "id": "N80707",
    "title": "Listade patienter allmäntandvård barn och ungdomar i egen regi, andel (%)"
  },
  {
    "id": "N80708",
    "title": "Listade patienter allmäntandvård barn och ungdomar i privat regi, andel (%)"
  },
  {
    "id": "N80710",
    "title": "Patienter med landstingets tandvårdsstöd - led i sjukdomsbehandling, antal/1000 vuxna invånare"
  },
  {
    "id": "N80711",
    "title": "Patienter regionens tandvårdsstöd - led i sjukdomsbehandling i egen regi, andel (%)"
  },
  {
    "id": "N80712",
    "title": "Patienter regionens tandvårdsstöd - led i sjukdomsbehandling i privat regi, andel (%)"
  },
  {
    "id": "N80713",
    "title": "Patienter landstingets tandvårdsstöd - uppsökta personer totalt, antal/1000 vuxna invånare"
  },
  {
    "id": "N80714",
    "title": "Patienter regionens tandvårdsstöd - uppsökta personer i egen regi, andel (%)"
  },
  {
    "id": "N80715",
    "title": "Patienter regionens tandvårdsstöd - uppsökta personer i privat regi, andel (%)"
  },
  {
    "id": "N80716",
    "title": "Patienter landstingets tandvårdsstöd - nödvändig tandvård totalt, antal/1000 vuxna invånare"
  },
  {
    "id": "N80717",
    "title": "Patienter regionens tandvårdsstöd - nödvändig tandvård i egen regi, andel (%)"
  },
  {
    "id": "N80718",
    "title": "Patienter regionens tandvårdsstöd - nödvändig tandvård i privat regi, andel (%)"
  },
  {
    "id": "N80719",
    "title": "Patienter landstingets tandvårdsstöd - långvarig sjukdom totalt. Antal/1000 vuxna invånare"
  },
  {
    "id": "N80720",
    "title": "Patienter regionens tandvårdsstöd - långvarig sjukdom i egen regi, andel (%)"
  },
  {
    "id": "N80721",
    "title": "Patienter regionens tandvårdsstöd - långvarig sjukdom i privat regi, andel (%)"
  },
  {
    "id": "N80722",
    "title": "Besök i tandvården av vuxna patienter totalt, antal/vuxna invånare"
  },
  {
    "id": "N85000",
    "title": "Kostnad för regional utveckling totalt, kr/inv"
  },
  {
    "id": "N85001",
    "title": "Månadsavlönad personal, regionanställda i kultur, turism och frilutfsliv, antal"
  },
  {
    "id": "N85002",
    "title": "Månadsavlönad personal, regionanställda inom utbildning och kultur, antal"
  },
  {
    "id": "N85003",
    "title": "Nettokostnad allmän regional utveckling, kr/inv"
  },
  {
    "id": "N85004",
    "title": "Nettokostnad kulturverksamhet, kr/inv"
  },
  {
    "id": "N85005",
    "title": "Nettokostnad politisk verksamhet avseende regional utveckling, kr/inv"
  },
  {
    "id": "N85007",
    "title": "Nettokostnad trafik och infrastruktur, kr/inv"
  },
  {
    "id": "N85008",
    "title": "Nettokostnad utbildning region, kr/inv"
  },
  {
    "id": "N85009",
    "title": "Årsarbetare, regionanställda i kultur, turism och friluftsliv, antal"
  },
  {
    "id": "N85010",
    "title": "Årsarbetare, regionanställda inom utbildning o kultur, antal"
  },
  {
    "id": "N85011",
    "title": "Kostnad utbildning region, kr/inv"
  },
  {
    "id": "N85012",
    "title": "Nettokostnad regional utveckling totalt, kr/inv"
  },
  {
    "id": "N85014",
    "title": "Kostnad kulturverksamhet, kr/inv"
  },
  {
    "id": "N85017",
    "title": "Kostnad allmän regional utveckling, kr/inv"
  },
  {
    "id": "N85020",
    "title": "Kostnad trafik och infrastruktur, kr/inv"
  },
  {
    "id": "N85021",
    "title": "Köp av utbildning region totalt, andel (%)"
  },
  {
    "id": "N85022",
    "title": "Köp av kulturverksamhet region totalt, andel (%)"
  },
  {
    "id": "N85023",
    "title": "Köp av trafik och infrastruktur totalt, andel (%)"
  },
  {
    "id": "N85024",
    "title": "Köp av allmän regional utveckling totalt, andel (%)"
  },
  {
    "id": "N85025",
    "title": "Köp av politisk verksamhet avseende regional utveckling totalt, andel (%)"
  },
  {
    "id": "N85026",
    "title": "Köp av trafik och infrastruktur från privata företag, andel (%)"
  },
  {
    "id": "N85027",
    "title": "Regionala utvecklingsmedel totalt, kr/inv"
  },
  {
    "id": "N85028",
    "title": "Regionalt företagsstöd 1:1, kr/inv"
  },
  {
    "id": "N85029",
    "title": "Projektmedel 1:1, kr/inv"
  },
  {
    "id": "N85030",
    "title": "Transportbidrag, kr/inv"
  },
  {
    "id": "N85031",
    "title": "Europeiska regionalfonden (ERUF), kr/inv"
  },
  {
    "id": "N85032",
    "title": "Europeiska socialfonden (ESF PO1), kr/inv"
  },
  {
    "id": "N85033",
    "title": "Landsbygdsprogrammet (LBP) inkl. LLU, kr/inv"
  },
  {
    "id": "N85034",
    "title": "Europeiska havs- och fiskerifonden (EHFF), kr/inv"
  },
  {
    "id": "N85035",
    "title": "Horizon 2020, kr/inv"
  },
  {
    "id": "N85036",
    "title": "Vinnova-program, kr/inv"
  },
  {
    "id": "N85037",
    "title": "Tillväxtverkets projektmedel 1:5, kr/inv"
  },
  {
    "id": "N85038",
    "title": "Energimyndighetens anslag 1:4, kr/inv"
  },
  {
    "id": "N85039",
    "title": "Egna medel för regional utveckling, kr/inv"
  },
  {
    "id": "N85040",
    "title": "Marint skyddad havsareal, andel (%)"
  },
  {
    "id": "N85041",
    "title": "Marint skyddad havsareal, antal hektar"
  },
  {
    "id": "N85042",
    "title": "Vattenanvändning totalt, senaste mätning, kbm/inv"
  },
  {
    "id": "N85043",
    "title": "Vattenanvändning, hushåll, senaste mätning, kbm/inv"
  },
  {
    "id": "N85044",
    "title": "Vattenanvändning jordbruk, senaste mätning, kbm/inv"
  },
  {
    "id": "N85045",
    "title": "Vattenanvändning industri, senaste mätning, kbm/inv"
  },
  {
    "id": "N85046",
    "title": "Vattenanvändning övrig användning, senaste mätning, kbm/inv"
  },
  {
    "id": "N85047",
    "title": "Utsläpp till luft av kväveoxider (NOx), totalt, kg/inv"
  },
  {
    "id": "N85048",
    "title": "Utsläpp till luft av PM2.5 (partiklar <2.5 mikrom). kg/inv"
  },
  {
    "id": "N85049",
    "title": "Utsläpp till luft av kväveoxider (NOx), industri, kg/inv"
  },
  {
    "id": "N85050",
    "title": "Vattenförekomster med god status, andel (%)"
  },
  {
    "id": "N85051",
    "title": "Sjöar med god ekologisk status, andel (%)"
  },
  {
    "id": "N85052",
    "title": "Vattendrag med god ekologisk status, andel (%)"
  },
  {
    "id": "N85053",
    "title": "Grundvattenförekomster med god kemisk och kvantitativ status, andel (%)"
  },
  {
    "id": "N85054",
    "title": "Skyddad natur totalt, andel (%)"
  },
  {
    "id": "N85055",
    "title": "Skyddad natur land, andel (%)"
  },
  {
    "id": "N85056",
    "title": "Skyddad natur hav, andel (%)"
  },
  {
    "id": "N85057",
    "title": "Skyddad natur inlandsvatten, andel (%)"
  },
  {
    "id": "N85058",
    "title": "Utsläpp till luft av kväveoxider (NOx), transporter, kg/inv"
  },
  {
    "id": "N85059",
    "title": "Utsläpp till luft av kväveoxider (NOx), arbetsmaskiner, kg/inv"
  },
  {
    "id": "N85060",
    "title": "Utsläpp till luft av kväveoxider (NOx), jordbruk, kg/inv"
  },
  {
    "id": "N85061",
    "title": "Utsläpp till luft av Kväveoxider (NOx), egen uppvärmning, kg/inv"
  },
  {
    "id": "N85062",
    "title": "Utsläpp till luft av kväveoxider (NOx), el och fjärrvärme, kg/inv"
  },
  {
    "id": "N85063",
    "title": "Utsläpp till luft av kväveoxider (NOx), utrikes transporter, kg/inv"
  },
  {
    "id": "N85064",
    "title": "Utsläpp till luft av PM2.5 (partiklar <2.5 mikrom), utrikes transporter, kg/inv"
  },
  {
    "id": "N85065",
    "title": "Utsläpp till luft av PM2.5 (partiklar <2.5 mikrom), el och fjärrvärme, kg/inv"
  },
  {
    "id": "N85066",
    "title": "Utsläpp till luft av PM2.5 (partiklar <2.5 mikrom), transporter, kg/inv"
  },
  {
    "id": "N85067",
    "title": "Utsläpp till luft av PM2.5 (partiklar <2.5 mikrom), arbetsmaskiner, kg/inv"
  },
  {
    "id": "N85068",
    "title": "Utsläpp till luft av PM2.5 (partiklar <2.5 mikrom), industi, kg/inv"
  },
  {
    "id": "N85069",
    "title": "Vattentäkter med vattenskyddsområde, andel (%)"
  },
  {
    "id": "N85070",
    "title": "Utsläpp till luft av PM2.5 (partiklar &lt;2.5 mikrom), jordbruk, kg/inv"
  },
  {
    "id": "N85071",
    "title": "Utsläpp till luft av PM2.5 (partiklar &lt;2.5 mikrom), egen uppvärmning, kg/inv"
  },
  {
    "id": "N85072",
    "title": "Utsläpp till luft av växthusgaser, egen uppvärmning, ton CO2e/inv"
  },
  {
    "id": "N85073",
    "title": "Utsläpp till luft av växthusgaser, transporter, ton CO2e/inv"
  },
  {
    "id": "N85074",
    "title": "Utsläpp till luft av växthusgaser, utrikes transporter, ton CO2e/inv"
  },
  {
    "id": "N85075",
    "title": "Utsläpp till luft av växthusgaser, arbetsmaskiner, ton CO2e/inv"
  },
  {
    "id": "N85076",
    "title": "Utsläpp till luft av växthusgaser, el och fjärrvärme, ton CO2e/inv"
  },
  {
    "id": "N85077",
    "title": "Utsläpp till luft av växthusgaser, industri, ton CO2e/inv"
  },
  {
    "id": "N85078",
    "title": "Utsläpp till luft av växthusgaser, jordbruk, ton CO2e/inv"
  },
  {
    "id": "N85080",
    "title": "Har kommunen en vatten- och avloppsvattenplan? (Nej = 0, Ja = 1, 2 =Under framtagande)"
  },
  {
    "id": "N85081",
    "title": "Har kommunen en plan, strategi, policy eller liknande för hantering av dagvatten i syfte att begränsa utsläpp till vattenmiljöer? (Nej = 0, Ja = 1, 2 =Under framtagande)"
  },
  {
    "id": "N85082",
    "title": "Vattentäkter som har tillstånd för vattenuttag, andel (%)"
  },
  {
    "id": "N85083",
    "title": "Större enskilda vattentäkter med någon form av skydd, andel (%)"
  },
  {
    "id": "U00200",
    "title": "Medarbetarengagemang (HME) totalt kommunen - Totalindex"
  },
  {
    "id": "U00201",
    "title": "Medarbetarengagemang (HME) totalt kommunen - Motivationsindex"
  },
  {
    "id": "U00202",
    "title": "Medarbetarengagemang (HME) totalt kommunen - Ledarskapsindex"
  },
  {
    "id": "U00203",
    "title": "Medarbetarengagemang (HME) totalt kommunen - Styrningsindex"
  },
  {
    "id": "U00204",
    "title": "Medarbetarengagemang (HME) totalt kommunen - Ledarskapsindex, senaste mätning på tre år"
  },
  {
    "id": "U00205",
    "title": "Medarbetarengagemang (HME) totalt kommunen - Motivationsindex, senaste mätning på tre år"
  },
  {
    "id": "U00206",
    "title": "Medarbetarengagemang (HME) totalt kommunen - Styrningsindex, senaste mätning på tre år"
  },
  {
    "id": "U00207",
    "title": "Medarbetarengagemang (HME) totalt kommunen - Totalindex, senaste mätning på tre år"
  },
  {
    "id": "U00400",
    "title": "Nöjd Medborgar-Index - Bemötande, tillgänglighet"
  },
  {
    "id": "U00401",
    "title": "Nöjd Medborgar-Index - Helheten"
  },
  {
    "id": "U00402",
    "title": "Nöjd Region-Index - Helheten"
  },
  {
    "id": "U00403",
    "title": "Nöjd Region-Index - Kommersiellt utbud"
  },
  {
    "id": "U00404",
    "title": "Nöjd Region-Index - Rekommendation"
  },
  {
    "id": "U00405",
    "title": "Nöjd Region-Index - Trygghet"
  },
  {
    "id": "U00406",
    "title": "Nöjd Region-Index - Utbildningsmöjligheter"
  },
  {
    "id": "U00407",
    "title": "Nöjd Inflytande-Index - Förtroende"
  },
  {
    "id": "U00408",
    "title": "Nöjd Inflytande-Index - Helheten"
  },
  {
    "id": "U00409",
    "title": "Nöjd Inflytande-Index - Information"
  },
  {
    "id": "U00413",
    "title": "Andel som tar kontakt med kommunen via telefon som får ett direkt svar på en enkel fråga, (%)"
  },
  {
    "id": "U00414",
    "title": "Andel som upplever ett gott bemötande vid kontakt med kommunen, (%) (-2015)"
  },
  {
    "id": "U00415",
    "title": "Informationsindex för kommunens webbplats - Totalt"
  },
  {
    "id": "U00416",
    "title": "Delaktighetsindex, andel (%) av maxpoäng (-2017)"
  },
  {
    "id": "U00417",
    "title": "Informationsindex för kommunens webbplats - Öppenhet och påverkan"
  },
  {
    "id": "U00418",
    "title": "Informationsindex för kommunens webbplats - Sökfunktion"
  },
  {
    "id": "U00419",
    "title": "Nöjd Inflytande-Index  - Kontakt"
  },
  {
    "id": "U00429",
    "title": "Bostadsarea, m2 Atemp/inv (-2015)"
  },
  {
    "id": "U00437",
    "title": "Miljöbilar i kommunorganisationen, andel (%)"
  },
  {
    "id": "U00442",
    "title": "Andel som får svar på e-post inom en dag, (%)"
  },
  {
    "id": "U00454",
    "title": "Delaktighetsindex, andel (%) av maxpoäng"
  },
  {
    "id": "U00470",
    "title": "Fysisk tillgänglighet -  sammanlagt resultat, andel (%) av maxpoäng (-2016)"
  },
  {
    "id": "U00486",
    "title": "Gott bemötande vid kontakt med kommun, andel av maxpoäng (%)"
  },
  {
    "id": "U00487",
    "title": "Avvikelse från modellberäknat värde för sjukhusvårdade till följd av oavsiktliga skador (olyckor), (Färre än=2, lika många=1,  fler än=0)"
  },
  {
    "id": "U00488",
    "title": "Avvikelse från modellberäknat värde för utvecklade bränder i byggnad, (Färre än=2, lika många=1, fler än=0)"
  },
  {
    "id": "U00489",
    "title": "Avvikelse från modellberäknat värde för anmälda våldsbrott, (Färre än=2, lika många=1, fler än=0)"
  },
  {
    "id": "U00490",
    "title": "Avvikelse från modellberäknat värde för anmälda stöld- och tillgreppsbrott, (Färre än=2, lika många=1, fler än=0)"
  },
  {
    "id": "U00800",
    "title": "Invånare 18-64 år som någon gång under året varit arbetslösa, andel (%)"
  },
  {
    "id": "U00801",
    "title": "Invånare 18-64 år som någon gång under året varit arbetslösa utan ersättning, andel (%)"
  },
  {
    "id": "U00804",
    "title": "Deltagande kommuner i KKiK, antal"
  },
  {
    "id": "U00810",
    "title": "Handläggningstid (median) från inkommen ansökan till beslut för bygglov för nybyggnad av en- och tvåbostadshus, antal dagar"
  },
  {
    "id": "U00811",
    "title": "Handläggningstid (median) från när ansökan betraktas som fullständig till beslut för bygglov för nybyggnad av en- och tvåbostadshus, antal dagar"
  },
  {
    "id": "U00812",
    "title": "Ärenden som mediantiden för bygglov baseras på, antal"
  },
  {
    "id": "U00901",
    "title": "Nyregistrerade företag helårsprognos utifrån första halvåret, antal/1000 invånare"
  },
  {
    "id": "U00902",
    "title": "Förändring i antalet förvärvsarbetande 16+, per 1000 inv."
  },
  {
    "id": "U00913",
    "title": "Barnfattigdomsindex, (%) (-2014)"
  },
  {
    "id": "U00915",
    "title": "Verkställda vräkningar/avhysningar som berör barn, antal barn/100 000 inv"
  },
  {
    "id": "U00958",
    "title": "Verkställda vräkningar (avhysningar), antal/100 000 inv."
  },
  {
    "id": "U00959",
    "title": "Verkställda vräkningar som berör barn, antal barn"
  },
  {
    "id": "U00960",
    "title": "Verkställda vräkningar (avhysningar), antal"
  },
  {
    "id": "U01400",
    "title": "Invånare 16-84 år som är fysiskt aktiva minst 30 min/dag, andel (%) (-2015)"
  },
  {
    "id": "U01402",
    "title": "Invånare som röker dagligen, andel (%)"
  },
  {
    "id": "U01404",
    "title": "Invånare med riskabla alkoholvanor, andel (%)"
  },
  {
    "id": "U01405",
    "title": "Invånare med bra självskattat hälsotillstånd, andel (%)"
  },
  {
    "id": "U01410",
    "title": "Aborter bland kvinnor 15-19 år, 3-årsm, antal/1000"
  },
  {
    "id": "U01411",
    "title": "Invånare med fetma, andel (%)"
  },
  {
    "id": "U01413",
    "title": "Invånare 16-84 år med avsaknad av tillit till andra, andel (%)"
  },
  {
    "id": "U01414",
    "title": "Invånare med bra självskattad tandhälsa, andel (%)"
  },
  {
    "id": "U01415",
    "title": "Incidens av hjärtinfarkter 20-79 år kommun, antal/100 000 inv"
  },
  {
    "id": "U01416",
    "title": "Regelbunden behandling med sömn-/lugnande medel kommun, antal personer/1000 inv"
  },
  {
    "id": "U01417",
    "title": "MPR-vaccinerade barn, andel (%)"
  },
  {
    "id": "U01420",
    "title": "Invånare 16-84 år som avstår från att gå ut ensam, andel (%)"
  },
  {
    "id": "U01421",
    "title": "Brukarbedömning hemtjänst äldreomsorg - besväras av ensamhet kommun, andel (%)"
  },
  {
    "id": "U01422",
    "title": "Invånare 16-84 år med en stillasittande fritid kommun, andel (%) (-2015)"
  },
  {
    "id": "U01423",
    "title": "Invånare 16-84 år som äter frukt och grönt mer än 3 ggr/dag, andel (%)"
  },
  {
    "id": "U01424",
    "title": "Kvinnor som röker eller snusar vid graviditetsvecka 8-12, andel (%)"
  },
  {
    "id": "U01425",
    "title": "Invånare 16-84 år som är stillasittande mer än 7 timmar per dag, andel (%)"
  },
  {
    "id": "U01426",
    "title": "Invånare 25-74 år med förgymnasial utbildning som är stillasittande mer än 7 timmar per dag, andel (%)"
  },
  {
    "id": "U01427",
    "title": "Invånare 25-74 år med gymnasial utbildning som är stillasittande mer än 7 timmar per dag, andel (%)"
  },
  {
    "id": "U01428",
    "title": "Invånare 25-74 år med eftergymnasial utbildning som är stillasittande mer än 7 timmar per dag, andel (%)"
  },
  {
    "id": "U01429",
    "title": "Invånare 16-84 år som är fysiskt aktiva minst 150 min/vecka, andel (%)"
  },
  {
    "id": "U01430",
    "title": "Invånare 25-74 år med förgymnasial utbildning som är fysiskt aktiva minst 150 min/vecka, andel (%)"
  },
  {
    "id": "U01431",
    "title": "Invånare 25-74 år med gymnasial utbildning som är fysiskt aktiva minst 150 min/vecka, andel (%)"
  },
  {
    "id": "U01432",
    "title": "Invånare 25-74 år med eftergymnasial utbildning som är fysiskt aktiva minst 150 min/vecka, andel (%)"
  },
  {
    "id": "U01438",
    "title": "Incidens av hjärtinfarkter, antal/100 000 inv"
  },
  {
    "id": "U01439",
    "title": "Invånare 16-84 år med nedsatt psykiskt välbefinnande, andel (%)"
  },
  {
    "id": "U01803",
    "title": "Invånare 18-64 år med låg inkomst, andel (%)"
  },
  {
    "id": "U01804",
    "title": "Svenskfödda invånare 20-40 år med låg utbildningsnivå, andel (%)"
  },
  {
    "id": "U01805",
    "title": "Utrikes födda invånare 18-64 år med vistelsetid 0-5 år efter uppehållstillstånd, andel (%)"
  },
  {
    "id": "U01806",
    "title": "Utrikes födda invånare 18-64 år med vistelsetid 6-10 år efter uppehållstillstånd, andel (%)"
  },
  {
    "id": "U01901",
    "title": "Tobaksrökning i hem där barn i 8 månaders ålder finns, andel (%)"
  },
  {
    "id": "U07003",
    "title": "Kvinnor som arbetar som brandpersonal i utryckningstjänst, andel (%)"
  },
  {
    "id": "U07075",
    "title": "Kostnad för olyckor totalt, kr/inv"
  },
  {
    "id": "U07200",
    "title": "Medarbetarengagemang (HME) infrastruktur, skydd m.m - Totalindex"
  },
  {
    "id": "U07201",
    "title": "Medarbetarengagemang (HME) infrastruktur, skydd m.m - Motivationsindex"
  },
  {
    "id": "U07202",
    "title": "Medarbetarengagemang (HME) infrastruktur, skydd m.m - Ledarskapsindex"
  },
  {
    "id": "U07203",
    "title": "Medarbetarengagemang (HME) infrastruktur, skydd m.m - Styrningsindex"
  },
  {
    "id": "U07400",
    "title": "Nöjd Medborgar-Index - Gator och vägar"
  },
  {
    "id": "U07401",
    "title": "Nöjd Medborgar-Index - Gång- och cykelvägar"
  },
  {
    "id": "U07402",
    "title": "Nöjd Medborgar-Index - Miljöarbete"
  },
  {
    "id": "U07403",
    "title": "Nöjd Medborgar-Index - Renhållning och sophämtning"
  },
  {
    "id": "U07404",
    "title": "Nöjd Medborgar-Index - Räddningstjänst"
  },
  {
    "id": "U07405",
    "title": "Nöjd Medborgar-Index - Vatten och avlopp"
  },
  {
    "id": "U07406",
    "title": "Nöjd Region-Index - Bostäder"
  },
  {
    "id": "U07409",
    "title": "Ekologiska livsmedel i kommunens verksamhet under årets 6 första månader enligt KKiK, andel (%) (-2017)"
  },
  {
    "id": "U07413",
    "title": "Sjukhusvårdade till följd av oavsiktliga skador (olyckor), antal/1000 inv"
  },
  {
    "id": "U07414",
    "title": "Hushållsavfall som samlats in för materialåtervinning, inkl. biologisk behandling, andel (%)"
  },
  {
    "id": "U07415",
    "title": "Utvecklade bränder i byggnad, antal/1000 inv"
  },
  {
    "id": "U07417",
    "title": "Anmälda stöld- och tillgreppsbrott, antal/1000 inv"
  },
  {
    "id": "U07418",
    "title": "Anmälda våldsbrott (treårsmedelvärde), antal/1000 inv"
  },
  {
    "id": "U07421",
    "title": "Samverkan - utför kommunen IVPA? (1=Ja, 0=Nej)"
  },
  {
    "id": "U07424",
    "title": "Personer utbildade i att förebygga/hantera bränder eller andra olyckor, antal/1000 inv"
  },
  {
    "id": "U07425",
    "title": "Driftkostnad gatubelysning, kr/ljuspunkt"
  },
  {
    "id": "U07426",
    "title": "Energianvändning per gatubelysning, kWh/ljuspunkt"
  },
  {
    "id": "U07427",
    "title": "Driftskostnad kommunala bil-, gång- och cykelvägar, kr/meter bil- och cykelväg"
  },
  {
    "id": "U07428",
    "title": "Kostnad vinterväghållning kommunala bil- gång-, och cykelvägar, kr/meter bil- och cykelväg"
  },
  {
    "id": "U07431",
    "title": "Informationsindex för kommunens webbplats - Bygga och bo"
  },
  {
    "id": "U07432",
    "title": "Informationsindex för kommunens webbplats - Gator, vägar och miljö"
  },
  {
    "id": "U07433",
    "title": "Informationsindex för kommunens webbplats - Tillstånd, tillsyn, näringsliv m.m"
  },
  {
    "id": "U07434",
    "title": "Informationsindex för kommunens webbplats - Företagsperspektiv"
  },
  {
    "id": "U07439",
    "title": "Verksamheter som kommunerna angivit att de genomfört risk- och sårbarhetsanalyser för, antal"
  },
  {
    "id": "U07440",
    "title": "Larmbehandlingstid för räddningstjänst, mediantid i minuter."
  },
  {
    "id": "U07441",
    "title": "Larmbehandlingstid för ambulans, mediantid i minuter"
  },
  {
    "id": "U07442",
    "title": "Responstid (tid från 112-samtal till första resurs är på plats) för räddningstjänst, mediantid i minuter"
  },
  {
    "id": "U07443",
    "title": "Responstid (tid från 112-samtal till första resurs är på plats) för ambulans, mediantid i minuter."
  },
  {
    "id": "U07446",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Brandskydd - Totalt, NKI"
  },
  {
    "id": "U07447",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Bygglov - Totalt, NKI"
  },
  {
    "id": "U07448",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Markupplåtelse - Totalt, NKI"
  },
  {
    "id": "U07449",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Miljö- och hälsoskydd - Totalt, NKI"
  },
  {
    "id": "U07450",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Serveringstillstånd - Totalt, NKI"
  },
  {
    "id": "U07451",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Totalt, NKI"
  },
  {
    "id": "U07452",
    "title": "Anmälda brott om skadegörelse per 1 000 inv."
  },
  {
    "id": "U07453",
    "title": "Invånare som upplevt oro för bostadsinbrott, andel (%) (-2016)"
  },
  {
    "id": "U07454",
    "title": "Invånare som upplevt oro för misshandel/överfall, andel (%) (-2016)"
  },
  {
    "id": "U07455",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Livsmedelskontroll - Totalt, NKI"
  },
  {
    "id": "U07456",
    "title": "Beläggningsunderhåll av kommunala bilvägar, andel kvm (%)"
  },
  {
    "id": "U07457",
    "title": "Beläggningsunderhåll av kommunala cykelvägar, andel kvm (%)"
  },
  {
    "id": "U07458",
    "title": "Kommunal gång- och cykelväg som snöröjs och halkbekämpas / meter cykelväg (%)"
  },
  {
    "id": "U07460",
    "title": "Återvinningscentralens öppethållande utöver 08-17 på vardagar, timmar/vecka"
  },
  {
    "id": "U07461",
    "title": "IVPA-insatser (i väntan på ambulans), antal/1000 inv"
  },
  {
    "id": "U07466",
    "title": "Samlingsindikator för samverkan och ledning, antal poäng"
  },
  {
    "id": "U07467",
    "title": "Samlingsindikator för geografiskt områdesansvar, antal poäng"
  },
  {
    "id": "U07469",
    "title": "Aktuell kontinuitetsplan - Kommunal hälso- och sjukvård, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U07480",
    "title": "Insamlat matavfall som går till biologisk återvinning inkl. hemkompostering, andel (%)"
  },
  {
    "id": "U07482",
    "title": "Insamlat mat- och restavfall, kg/person"
  },
  {
    "id": "U07483",
    "title": "Insamlat förpackningar och returpapper, kg/person"
  },
  {
    "id": "U07484",
    "title": "Insamlat grovavfall, kg/person"
  },
  {
    "id": "U07485",
    "title": "Insamlat farligt avfall (inkl. elavfall och batterier), kg/person"
  },
  {
    "id": "U07486",
    "title": "Största återvinningscentralens tillgänglighet kväll/helg, timmar/vecka"
  },
  {
    "id": "U07487",
    "title": "Total tillgänglighet alla återvinningscentraler, minuter/person"
  },
  {
    "id": "U07488",
    "title": "Förnybara drivmedel för insamling av mat- och restavfall, andel (%)"
  },
  {
    "id": "U07489",
    "title": "Nöjdhet avfallshantering en- och tvåfamiljshus, andel (%)"
  },
  {
    "id": "U07490",
    "title": "Nöjdhet avfallshantering lägenhet, andel (%)"
  },
  {
    "id": "U07491",
    "title": "Nöjdhet besök vid återvinningscentral, andel (%)"
  },
  {
    "id": "U07492",
    "title": "Nöjdhet tillgänglighet till återvinningscentral, andel (%)"
  },
  {
    "id": "U07493",
    "title": "Vanligaste avfallsavgift totalt inkl. moms för en- och tvåfamiljshus, kr"
  },
  {
    "id": "U07494",
    "title": "Vanligaste avfallsavgift totalt inkl. moms för lägenhet i flerbostadshus, kr"
  },
  {
    "id": "U07495",
    "title": "Vanligaste avfallsavgift totalt inkl. moms för fritidshus, kr"
  },
  {
    "id": "U07496",
    "title": "Organisation av avfallshanteringen, (kodade svarsalternativ)"
  },
  {
    "id": "U07497",
    "title": "Driftskostnad kommunala bilvägar, kr/meter"
  },
  {
    "id": "U07498",
    "title": "Driftskostnad kommunala gång- och cykelvägar, kr/meter cykelväg"
  },
  {
    "id": "U07508",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Totalt - Tillgänglighet, NKI"
  },
  {
    "id": "U07509",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Totalt - Information, NKI"
  },
  {
    "id": "U07510",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Totalt - Bemötande, NKI"
  },
  {
    "id": "U07511",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Totalt - Kompetens, NKI"
  },
  {
    "id": "U07512",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Totalt - Rättssäkerhet, NKI"
  },
  {
    "id": "U07513",
    "title": "Företagsklimat enl. ÖJ (Insikt) - Totalt - Effektivitet, NKI"
  },
  {
    "id": "U07514",
    "title": "Ekologiska livsmedel i kommunens verksamhet, andel (%)"
  },
  {
    "id": "U07801",
    "title": "Insamlat hushållsavfall totalt, kg/person"
  },
  {
    "id": "U07900",
    "title": "Genomsnittlig hyra i allmännyttan, kr/kvm"
  },
  {
    "id": "U07902",
    "title": "Hyresrätter i allmännyttan, antal/1000 inv"
  },
  {
    "id": "U07917",
    "title": "Genomsnittlig körsträcka med personbil, mil/inv"
  },
  {
    "id": "U07918",
    "title": "Genomsnittlig körsträcka med personbil, mil/personbil"
  },
  {
    "id": "U09200",
    "title": "Medarbetarengagemang (HME) kultur och fritid - Totalindex"
  },
  {
    "id": "U09201",
    "title": "Medarbetarengagemang (HME) kultur och fritid - Motivationsindex"
  },
  {
    "id": "U09202",
    "title": "Medarbetarengagemang (HME) kultur och fritid - Ledarskapsindex"
  },
  {
    "id": "U09203",
    "title": "Medarbetarengagemang (HME) kultur och fritid - Styrningsindex"
  },
  {
    "id": "U09401",
    "title": "Nöjd Medborgar-Index - Kultur"
  },
  {
    "id": "U09402",
    "title": "Bibliotekets öppethållande (exklusive meröppet) utöver 08-17 på vardagar, timmar/vecka"
  },
  {
    "id": "U09403",
    "title": "Bibliotekets öppethållande (inklusive meröppet) utöver 08-17 på vardagar, timmar/vecka"
  },
  {
    "id": "U09404",
    "title": "Simhallens öppethållande utöver 08-17 på vardagar, timmar/vecka (-2017)"
  },
  {
    "id": "U09405",
    "title": "Informationsindex för kommunens webbplats - Kultur och fritid"
  },
  {
    "id": "U09406",
    "title": "Nöjd Medborgar-Index - Idrott- och motionsanläggningar"
  },
  {
    "id": "U09407",
    "title": "Nöjd Medborgar-Index - Bibliotek"
  },
  {
    "id": "U09408",
    "title": "Nöjd Region-Index - Fritidsaktiviteter"
  },
  {
    "id": "U09424",
    "title": "Tillgänglighet kultur -  sammanlagt resultat, andel (%) av maxpoäng (-2016)"
  },
  {
    "id": "U09443",
    "title": "Tillgänglighet idrott -  sammanlagt resultat, andel (%) av maxpoäng (-2016)"
  },
  {
    "id": "U09800",
    "title": "Deltagartillfällen i idrottsföreningar, antal/inv 7-20 år"
  },
  {
    "id": "U09801",
    "title": "Deltagartillfällen i idrottsföreningar, antal/inv 7-12 år"
  },
  {
    "id": "U09802",
    "title": "Deltagartillfällen i idrottsföreningar, antal/inv 13-16 år"
  },
  {
    "id": "U09803",
    "title": "Deltagartillfällen i idrottsföreningar, antal/inv 17-20 år"
  },
  {
    "id": "U09804",
    "title": "Idrottsföreningar med LOK-stöd, antal/10 000 inv"
  },
  {
    "id": "U09805",
    "title": "Idrottsföreningar med flickdominerad verksamhet, andel (%)"
  },
  {
    "id": "U09806",
    "title": "Idrottsföreningar med pojkdominerad verksamhet, andel (%)"
  },
  {
    "id": "U09807",
    "title": "Idrottsföreningar med varken pojk- eller flickdominerad verksamhet, andel (%)"
  },
  {
    "id": "U09808",
    "title": "Deltagartillfällen i idrottsföreningar, antal/inv 13-20 år"
  },
  {
    "id": "U09810",
    "title": "Elevplatser i musik- eller kulturskola som andel av invånare 7-15 år, (%)"
  },
  {
    "id": "U09811",
    "title": "Kommunalt kontant bidrag till idrottsföreningar, kr/inv (-2016)"
  },
  {
    "id": "U09812",
    "title": "Utbetalt LOK-Stöd till idrottsföreningar, kr/inv."
  },
  {
    "id": "U09813",
    "title": "Deltagartillfällen i idrottsföreningar, antal/inv 21-25 år"
  },
  {
    "id": "U09814",
    "title": "Inomhusbassänger 25-49 m, antal"
  },
  {
    "id": "U09815",
    "title": "Inomhusbassänger 49+ m, antal"
  },
  {
    "id": "U09816",
    "title": "Äventyrsbad inomhus, antal"
  },
  {
    "id": "U09817",
    "title": "11-spelsplaner naturgräs, antal"
  },
  {
    "id": "U09818",
    "title": "11-spelsplaner konstgräs, antal"
  },
  {
    "id": "U09819",
    "title": "Idrottshallar 18x36 m till 22x42 m, antal"
  },
  {
    "id": "U09820",
    "title": "Ishallar, antal"
  },
  {
    "id": "U09821",
    "title": "Ridhus, antal"
  },
  {
    "id": "U09822",
    "title": "Ridhus/ridhallar mindre än 20*60m, antal"
  },
  {
    "id": "U09823",
    "title": "Ridhus/ridhallar 20*60m eller större, antal"
  },
  {
    "id": "U09824",
    "title": "Fritidsgårdar/ungdomsgårdar, antal"
  },
  {
    "id": "U09825",
    "title": "Ungdomens hus/allaktivitetshus eller motsvarande, antal"
  },
  {
    "id": "U09826",
    "title": "Inomhusbassänger 25-49 m, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09827",
    "title": "Inomhusbassänger 49+ m, antal/10 000 inv 0-18 år"
  },
  {
    "id": "U09828",
    "title": "Äventyrsbad inomhus, antal/10 000 inv 0-18 år"
  },
  {
    "id": "U09829",
    "title": "11-spelsplaner naturgräs, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09830",
    "title": "11-spelsplaner konstgräs, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09831",
    "title": "Idrottshallar 18x36 m till 22x42 m, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09832",
    "title": "Ishallar, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09833",
    "title": "Ridhus, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09834",
    "title": "Ridhus/ridhallar mindre än 20*60m, antal/10 000 inv 0-18 år"
  },
  {
    "id": "U09835",
    "title": "Ridhus/ridhallar 20*60m eller större, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09836",
    "title": "Fritidsgårdar/ungdomsgårdar, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09837",
    "title": "Ungdomens hus/allaktivitetshus eller motsvarande, antal/10 000 inv 0-18 år"
  },
  {
    "id": "U09838",
    "title": "Inomhusbassänger 25-49 m, antal/10 000 inv"
  },
  {
    "id": "U09839",
    "title": "Inomhusbassänger 49+ m, antal/10 000 inv."
  },
  {
    "id": "U09840",
    "title": "Äventyrsbad inomhus, antal/10 000 inv"
  },
  {
    "id": "U09841",
    "title": "11-spelsplaner naturgräs, antal/10 000 inv"
  },
  {
    "id": "U09842",
    "title": "11-spelsplaner konstgräs, antal/10 000 inv"
  },
  {
    "id": "U09843",
    "title": "Idrottshallar 18x36 m till 22x42 m, antal/10 000 inv"
  },
  {
    "id": "U09844",
    "title": "Ishallar, antal/10 000 inv"
  },
  {
    "id": "U09845",
    "title": "Ridhus, antal/10 000 inv"
  },
  {
    "id": "U09846",
    "title": "Ridhus/ridhallar mindre än 20*60m, antal/10 000 inv"
  },
  {
    "id": "U09847",
    "title": "Ridhus/ridhallar 20*60m eller större, antal/10 000 inv"
  },
  {
    "id": "U09848",
    "title": "Konserthus, antal"
  },
  {
    "id": "U09849",
    "title": "Konsthallar, antal"
  },
  {
    "id": "U09850",
    "title": "Museum, antal"
  },
  {
    "id": "U09851",
    "title": "Teateranläggningar, antal"
  },
  {
    "id": "U09852",
    "title": "Kulturhus, antal"
  },
  {
    "id": "U09853",
    "title": "Konserthus, antal/10 000 inv"
  },
  {
    "id": "U09854",
    "title": "Konsthallar, antal/10 000 inv"
  },
  {
    "id": "U09855",
    "title": "Museum, antal/10 000 inv"
  },
  {
    "id": "U09856",
    "title": "Teateranläggningar, antal/10 000 inv"
  },
  {
    "id": "U09857",
    "title": "Kulturhus, antal/10 000 inv"
  },
  {
    "id": "U09858",
    "title": "Konserthus, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09859",
    "title": "Konsthallar, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09860",
    "title": "Museum, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09861",
    "title": "Teateranläggningar, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09862",
    "title": "Kulturhus, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09863",
    "title": "Idrottshallar 22x42 m eller större, antal"
  },
  {
    "id": "U09864",
    "title": "Idrottshallar 22x42 m eller större, antal/10 000 inv"
  },
  {
    "id": "U09865",
    "title": "Idrottshallar 22x42 m eller större, antal/10 000 inv. 0-18 år"
  },
  {
    "id": "U09870",
    "title": "Kommunalt kontant bidrag till idrottsföreningar, kr/inv"
  },
  {
    "id": "U09871",
    "title": "Ämneskurser som erbjuds i kulturskolan, antal ämnesområden"
  },
  {
    "id": "U09872",
    "title": "Musik - instrument/sång erbjuds som ämneskurs i kulturskolan (Ja=1, Nej=0)"
  },
  {
    "id": "U09873",
    "title": "Musik - ensemble, orkester, kör, musikgrupp/band erbjuds som ämneskurs i kulturskolan (Ja=1, Nej=0)"
  },
  {
    "id": "U09874",
    "title": "Dans erbjuds som ämneskurs i kulturskolan (Ja=1, Nej=0)"
  },
  {
    "id": "U09875",
    "title": "Teater/drama erbjuds som ämneskurs i kulturskolan (Ja=1, Nej=0)"
  },
  {
    "id": "U09876",
    "title": "Bild och form erbjuds som ämneskurs i kulturskolan (Ja=1, Nej=0)"
  },
  {
    "id": "U09877",
    "title": "Musikal erbjuds som ämneskurs i kulturskolan (Ja=1, Nej=0)"
  },
  {
    "id": "U09878",
    "title": "Cirkus erbjuds som ämneskurs i kulturskolan (Ja=1, Nej=0)"
  },
  {
    "id": "U09879",
    "title": "Film/animation erbjuds som ämneskurs i kulturskolan (Ja=1, Nej=0)"
  },
  {
    "id": "U09880",
    "title": "Foto erbjuds som ämneskurs i kulturskolan (Ja=1, Nej=0)"
  },
  {
    "id": "U09881",
    "title": "Slöjd/hantverk erbjuds som ämneskurs i kulturskolan (Ja=1, Nej=0)"
  },
  {
    "id": "U09882",
    "title": "Skrivande/berättande erbjuds som ämneskurs i kulturskolan (Ja=1, Nej=0)"
  },
  {
    "id": "U09883",
    "title": "Övriga områden erbjuds som ämneskurser i kulturskolan (Ja=1, Nej=0)"
  },
  {
    "id": "U11200",
    "title": "Medarbetarengagemang (HME) förskola - Totalindex"
  },
  {
    "id": "U11201",
    "title": "Medarbetarengagemang (HME) förskola - Motivationsindex"
  },
  {
    "id": "U11202",
    "title": "Medarbetarengagemang (HME) förskola - Ledarskapsindex"
  },
  {
    "id": "U11203",
    "title": "Medarbetarengagemang (HME) förskola - Styrningsindex"
  },
  {
    "id": "U11400",
    "title": "Nöjd Medborgar-Index - Förskolan"
  },
  {
    "id": "U11401",
    "title": "Plats på förskola på önskat placeringsdatum, andel barn (%)"
  },
  {
    "id": "U11402",
    "title": "Väntetid i antal dagar för de barn som inte fått plats på förskola på önskat placeringsdatum, medelvärde"
  },
  {
    "id": "U11403",
    "title": "Informationsindex för kommunens webbplats - Förskola"
  },
  {
    "id": "U11415",
    "title": "Väntetid i antal dagar för de barn som inte fått plats på förskola på önskat placeringsdatum, median"
  },
  {
    "id": "U11417",
    "title": "Erbjuder kommunen någon förskola med öppet efter klockan 18.30 (ej nattis), (Ja=1/Nej=0)"
  },
  {
    "id": "U11418",
    "title": "Erbjuder kommunen någon förskola med öppet före klockan 06.30 (ej nattis), (Ja=1/Nej=0)"
  },
  {
    "id": "U11419",
    "title": "Personal i förskola, antal barn/heltidspersonal (närvarande) (-2015)"
  },
  {
    "id": "U11420",
    "title": "Väntetider för barn som inte fått förskoleplats på önskat placeringsdatum, väntat längre än 30 dagar, andel (%)"
  },
  {
    "id": "U15011",
    "title": "Nettokostnad grundskola F-9, kr/elev"
  },
  {
    "id": "U15012",
    "title": "Effektivitetstal grundskola, lägeskommun, ranking (låga värden visar goda resultat) (-2017)"
  },
  {
    "id": "U15013",
    "title": "Nettokostnad grundskola åk 1-9, kr/elev"
  },
  {
    "id": "U15015",
    "title": "Nettokostnad skolskjuts grundskola åk 1-9, kr/elev"
  },
  {
    "id": "U15200",
    "title": "Medarbetarengagemang (HME) grundskola och förskoleklass - Totalindex"
  },
  {
    "id": "U15201",
    "title": "Medarbetarengagemang (HME) grundskola och förskoleklass - Motivationsindex"
  },
  {
    "id": "U15202",
    "title": "Medarbetarengagemang (HME) grundskola och förskoleklass - Ledarskapsindex"
  },
  {
    "id": "U15203",
    "title": "Medarbetarengagemang (HME) grundskola och förskoleklass - Styrningsindex"
  },
  {
    "id": "U15400",
    "title": "Nöjd Medborgar-Index - Grundskola, index"
  },
  {
    "id": "U15406",
    "title": "Kostnad per betygspoäng i åk 9 i kommunala skolor, kr/betygspoäng"
  },
  {
    "id": "U15413",
    "title": "Elever i år 9 som förväntas uppnå kunskapskraven i alla ämnen, modellberäknat värde (SALSA), andel (%)"
  },
  {
    "id": "U15414",
    "title": "Elever i år 9 som uppnått kunskapskraven , avvikelse från SALSA på enhetsnivå, procentenheter"
  },
  {
    "id": "U15415",
    "title": "Meritvärde i år 9, modellberäknat genomsnittligt värde (SALSA)"
  },
  {
    "id": "U15416",
    "title": "Meritvärde i år 9, avvikelse från SALSA på enhetsnivå, poäng"
  },
  {
    "id": "U15428",
    "title": "Sammanvägt resultat i grundskolan, lägeskommun, ranking"
  },
  {
    "id": "U15429",
    "title": "Elever i år 9 som fått ett högre betyg än provbetyg för ämnesprov i matematik, lägeskommun, andel (%)"
  },
  {
    "id": "U15430",
    "title": "Elever i år 9 som fått ett lägre betyg än provbetyg för ämnesprov i matematik, lägeskommun, andel (%)"
  },
  {
    "id": "U15431",
    "title": "Elever i år 9 som fått ett högre betyg än provbetyg för ämnesprov i engelska, lägeskommun, andel (%)"
  },
  {
    "id": "U15432",
    "title": "Elever i år 9 som fått ett lägre betyg än provbetyg för ämnesprov i engelska, lägeskommun, andel (%)"
  },
  {
    "id": "U15433",
    "title": "Elever i år 9 som fått ett högre betyg än provbetyg för ämnesprov i svenska, lägeskommun, andel (%)"
  },
  {
    "id": "U15434",
    "title": "Elever i år 9 som fått ett lägre betyg än provbetyg för ämnesprov i svenska, lägeskommun, andel (%)"
  },
  {
    "id": "U15438",
    "title": "Informationsindex för kommunens webbplats - Grundskola"
  },
  {
    "id": "U15440",
    "title": "Effektivitetstal kommunal grundskola, ranking (låga värden visar goda resultat) (-2017)"
  },
  {
    "id": "U15441",
    "title": "Elever i åk. 9 som uppnått kunskapskraven i alla ämnen lägeskommun (modellberäknat värde), andel (%)"
  },
  {
    "id": "U15442",
    "title": "Elever i åk 9 som uppnått kunskapskraven i alla ämnen avvikelse från modellberäknat värde lägeskommun, procentenheter"
  },
  {
    "id": "U15443",
    "title": "Elever i åk. 9. genomsnittligt meritvärde lägeskommun (modellberäknat värde)"
  },
  {
    "id": "U15444",
    "title": "Elever i åk 9 genomsnittligt meritvärde, avvikelse från modellberäknat värde lägeskommun, meritvärdespoäng"
  },
  {
    "id": "U15445",
    "title": "Elever i åk. 9 som är behöriga till yrkesprogram lägeskommun (modellberäknat värde), andel (%)"
  },
  {
    "id": "U15446",
    "title": "Elever i åk 9 som är behöriga till yrkesprogram avvikelse från modellberäknat värde lägeskommun, procentenheter"
  },
  {
    "id": "U15454",
    "title": "Elever i åk 5:  Sammanvägt resultat - elevernas syn på skolan och undervisningen, andel (%) (-2016)"
  },
  {
    "id": "U15455",
    "title": "Elever i åk 8:  Sammanvägt resultat - elevernas syn på skolan och undervisningen, andel (%) (-2016)"
  },
  {
    "id": "U15456",
    "title": "Elever i år 9 som uppnått kunskapskraven i alla ämnen kommunala skolor (modellberäknat värde), andel (%)"
  },
  {
    "id": "U15457",
    "title": "Elever i år 9 som uppnått kunskapskraven i alla ämnen avvikelse från modellberäknat värde kommunala skolor, procentenheter"
  },
  {
    "id": "U15458",
    "title": "Elever i år 9 genomsnittligt meritvärde kommunala skolor (modellberäknat värde)"
  },
  {
    "id": "U15459",
    "title": "Elever i år 9. genomsnittligt meritvärde avvikelse från modellberäknat värde kommunala skolor, meritvärdespoäng"
  },
  {
    "id": "U15460",
    "title": "Elever i år 9 som är behöriga till yrkesprogram kommunala skolor (modellberäknat värde), andel (%)"
  },
  {
    "id": "U15461",
    "title": "Elever i år 9 som är behöriga till yrkesprogram avvikelse från modellberäknat värde kommunala skolor, procentenheter"
  },
  {
    "id": "U15502",
    "title": "Elever i åk 5: Jag känner mig trygg i skolan, andel (%)  (-2016)"
  },
  {
    "id": "U15503",
    "title": "Elever i åk 5: Skolarbetet gör mig så nyfiken att jag får lust att lära mig mer, andel (%)  (-2016)"
  },
  {
    "id": "U15504",
    "title": "Elever i åk 5: Lärarna i min skola tar hänsyn till elevernas åsikter, andel (%)  (-2016)"
  },
  {
    "id": "U15505",
    "title": "Elever i åk 5: Jag vet vad jag ska kunna för att nå kunskapskraven i de olika ämnena, andel (%)  (-2016)"
  },
  {
    "id": "U15506",
    "title": "Elever i åk 5: Lärarna i min skola hjälper mig i skolarbetet om jag behöver det, andel (%)  (-2016)"
  },
  {
    "id": "U15507",
    "title": "Elever i åk 5: Jag får veta hur det går för mig i skolarbetet, andel (%)  (-2016)"
  },
  {
    "id": "U15508",
    "title": "Elever i åk 5: Mina lärare förväntar sig att jag ska nå kunskapskraven i alla ämnen, andel (%)  (-2016)"
  },
  {
    "id": "U15509",
    "title": "Elever i åk 8: Jag känner mig trygg i skolan, andel (%) (-2016)"
  },
  {
    "id": "U15510",
    "title": "Elever i åk 8: Skolarbetet gör mig så nyfiken att jag får lust att lära mig mer, andel (%)  (-2016)"
  },
  {
    "id": "U15511",
    "title": "Elever i åk 8: Lärarna i min skola tar hänsyn till elevernas åsikter, andel (%)  (-2016)"
  },
  {
    "id": "U15512",
    "title": "Elever i åk 8: Jag vet vad jag ska kunna för att nå kunskapskraven i de olika ämnena, andel (%)  (-2016)"
  },
  {
    "id": "U15513",
    "title": "Elever i åk 8: Lärarna i min skola hjälper mig i skolarbetet om jag behöver det, andel (%)  (-2016)"
  },
  {
    "id": "U15514",
    "title": "Elever i åk 8: Jag får veta hur det går för mig i skolarbetet, andel (%)  (-2016)"
  },
  {
    "id": "U15515",
    "title": "Elever i åk 8: Mina lärare förväntar sig att jag ska nå kunskapskraven i alla ämnen, andel (%)  (-2016)"
  },
  {
    "id": "U15520",
    "title": "Tillgänglighet grundskola -  sammanlagt resultat, andel (%) av maxpoäng (-2016)"
  },
  {
    "id": "U15533",
    "title": "Tillgänglighet grundskola - tillgängliga digitala lär- och dialogplattformar, poäng (max=3) (-2016)"
  },
  {
    "id": "U15538",
    "title": "Sammanvägt resultat i grundskolan, kommunala skolor, ranking"
  },
  {
    "id": "U17023",
    "title": "Nettokostnad gymnasieskola, kr/elev"
  },
  {
    "id": "U17025",
    "title": "Kostnad dagliga resor & inackordering gymnasieskola, kr/elev"
  },
  {
    "id": "U17200",
    "title": "Medarbetarengagemang (HME) gymnasieskola - Totalindex"
  },
  {
    "id": "U17201",
    "title": "Medarbetarengagemang (HME) gymnasieskola - Motivationsindex"
  },
  {
    "id": "U17202",
    "title": "Medarbetarengagemang (HME) gymnasieskola - Ledarskapsindex"
  },
  {
    "id": "U17203",
    "title": "Medarbetarengagemang (HME) gymnasieskola - Styrningsindex"
  },
  {
    "id": "U17400",
    "title": "Nöjd Medborgar-Index - Gymnasieskola, index"
  },
  {
    "id": "U17413",
    "title": "Förstagångsväljare som röstade i senaste kommunfullmäktigevalet, andel (%)"
  },
  {
    "id": "U17414",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, fristående skolor modellberäknat värde"
  },
  {
    "id": "U17415",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, fristående skolor, avvikelse från modellberäknat värde"
  },
  {
    "id": "U17416",
    "title": "Gymnasieelever med examen inom 3 år, fristående skolor, andel (%), modellberäknat värde"
  },
  {
    "id": "U17417",
    "title": "Gymnasieelever med examen inom 3 år, fristående skolor, andel (%), avvikelse från modellberäknat värde"
  },
  {
    "id": "U17418",
    "title": "Gymnasieelever med examen inom 4 år, fristående skolor, andel (%), modellberäknat värde"
  },
  {
    "id": "U17419",
    "title": "Gymnasieelever med examen inom 4 år, fristående skolor, andel (%), avvikelse från modellberäknat värde"
  },
  {
    "id": "U17444",
    "title": "Informationsindex för kommunens webbplats - Gymnasium"
  },
  {
    "id": "U17445",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, kommunala skolor modellberäknat värde"
  },
  {
    "id": "U17446",
    "title": "Betygspoäng efter avslutad gymnasieutbildning, kommunala skolor, avvikelse från modellberäknat värde"
  },
  {
    "id": "U17447",
    "title": "Gymnasieelever med examen inom 3 år, kommunala skolor, andel (%), modellberäknat värde"
  },
  {
    "id": "U17448",
    "title": "Gymnasieelever med examen inom 3 år, kommunala skolor, andel (%), avvikelse från modellberäknat värde"
  },
  {
    "id": "U17449",
    "title": "Gymnasieelever med examen inom 4 år, kommunala skolor, andel (%), avvikelse från modellberäknat värde"
  },
  {
    "id": "U17450",
    "title": "Gymnasieelever med examen inom 4 år, kommunala skolor, andel (%), modellberäknat värde"
  },
  {
    "id": "U17802",
    "title": "Kommunen bedriver kommunal gymnasieskola, (Ja=1, Nej=0)"
  },
  {
    "id": "U17808",
    "title": "Kommunen ingår i gymnasieförbund, (Ja=1, Nej=0)"
  },
  {
    "id": "U18045",
    "title": "Aktuell kontinuitetsplan -  Hem för vård eller boende för barn och unga, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U20400",
    "title": "Nöjd Medborgar-Index - Äldreomsorg"
  },
  {
    "id": "U20408",
    "title": "Krisberedskap ingår vid upphandling av Särskilda boendeformer för service och omvårdnad för äldre, (Ja=1, Nej=0)"
  },
  {
    "id": "U20411",
    "title": "Avlidna som före döden fått informerande samtal om att han/hon är döende, andel (%) (-2017)"
  },
  {
    "id": "U20413",
    "title": "Avlidna som smärtskattats, andel (%)  (-2017)"
  },
  {
    "id": "U20428",
    "title": "Informationsindex för kommunens webbplats - Äldreomsorg"
  },
  {
    "id": "U20432",
    "title": "Personer 65+ med frakturer på lår och höft, antal/100 000 inv"
  },
  {
    "id": "U20443",
    "title": "Personer i permanent särskilt boende för äldre och korttidsboende i kommunen med aktuell genomförandeplan, andel (%)"
  },
  {
    "id": "U20462",
    "title": "Fallskador bland personer 65+, 3-årsm, antal/100 000 inv"
  },
  {
    "id": "U20464",
    "title": "Personer 65+ år med hemsjukvård samtidigt med insatser av hemtjänsten, andel (%)  (-2017)"
  },
  {
    "id": "U20465",
    "title": "Ålder vid inflyttning till särskilt boende, median"
  },
  {
    "id": "U20466",
    "title": "Hemtjänsttimmar innan inflyttning till särskilt boende, antal timmar/månad"
  },
  {
    "id": "U20469",
    "title": "Aktuell rutin för samordning mellan äldreomsorg och missbruk, (Ja=1, Nej=0)"
  },
  {
    "id": "U20470",
    "title": "Aktuell rutin för samordning mellan äldreomsorg och socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U20472",
    "title": "Aktuell rutin för samordning mellan äldreomsorg och LSS, (Ja=1, Nej=0) (-2016)"
  },
  {
    "id": "U20474",
    "title": "Aktuell samlad plan för personalens kompetensutveckling inom äldreomsorg, (Ja=1, Nej=0)"
  },
  {
    "id": "U20476",
    "title": "Aktuell rutin vid missbruk av alkohol eller andra beroendeframkallande medel inom äldreomsorg, (Ja=1, Nej=0)"
  },
  {
    "id": "U20477",
    "title": "Aktuell rutin vid missbruk av läkemedel inom äldreomsorg, (Ja=1, Nej=0)"
  },
  {
    "id": "U20482",
    "title": "Aktuell rutin för att inte röja skyddade personuppgifter inom äldreomsorg, (Ja=1, Nej=0)"
  },
  {
    "id": "U20484",
    "title": "Använder standardiserade bedömningsmetoden FREDA inom äldreomsorg för att upptäcka våldsutsatthet hos enskilda vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U20485",
    "title": "Använder standardiserad bedömningsmetod inom äldreomsorg för att upptäcka riskfylld alkoholkonsumtion, (Ja=1, Nej=0)"
  },
  {
    "id": "U20486",
    "title": "Använder standardiserad bedömningsmetod inom äldreomsorg för att upptäcka drogrelaterade problem, (Ja=1, Nej=0)"
  },
  {
    "id": "U20487",
    "title": "Aktuell rutin för information om samordnad individuell plan (SIP) inom äldreomsorg, (Ja=1, Nej=0)"
  },
  {
    "id": "U20488",
    "title": "Utrikes födda exklusive EU/EFTA, andel (%)"
  },
  {
    "id": "U20801",
    "title": "Äldre personer per årsarbetande handläggare i äldreomsorgen, antal"
  },
  {
    "id": "U21002",
    "title": "KPB - Ytterfall ordinärt boende, andel brukare (%)"
  },
  {
    "id": "U21003",
    "title": "KPB - Kostnad hemtjänst, egen regi, kr/beviljad timme"
  },
  {
    "id": "U21005",
    "title": "KPB - Kostnad korttidsboende ordinärt boende, egen regi, kr/dygn"
  },
  {
    "id": "U21014",
    "title": "KPB - Hemtjänsttimmar, antal timmar/inv 80+"
  },
  {
    "id": "U21015",
    "title": "KPB - Hemtjänst i extern regi, andel (%)"
  },
  {
    "id": "U21016",
    "title": "KPB - Korttidsvården i extern regi, andel (%)"
  },
  {
    "id": "U21017",
    "title": "KPB - Korttidsvård genomsnittligt, antal dygn"
  },
  {
    "id": "U21200",
    "title": "Medarbetarengagemang (HME) hemtjänst äldreomsorg - Totalindex"
  },
  {
    "id": "U21201",
    "title": "Medarbetarengagemang (HME) hemtjänst äldreomsorg - Motivationsindex"
  },
  {
    "id": "U21202",
    "title": "Medarbetarengagemang (HME) hemtjänst äldreomsorg - Ledarskapsindex"
  },
  {
    "id": "U21203",
    "title": "Medarbetarengagemang (HME) hemtjänst äldreomsorg - Styrningsindex"
  },
  {
    "id": "U21401",
    "title": "Personalkontinuitet, antal personal som en hemtjänsttagare möter under 14 dagar, medelvärde"
  },
  {
    "id": "U21402",
    "title": "Personalkontinuitet, antal personal som en hemtjänsttagare möter under 14 dagar, median"
  },
  {
    "id": "U21403",
    "title": "Hemtjänsttagaren erbjuds att välja man eller kvinna för personlig hygien, (Ja=1/ Nej=0)"
  },
  {
    "id": "U21404",
    "title": "Hemtjänsttagaren erbjuds dusch två gånger eller mer per vecka, (Ja=1/ Nej=0)"
  },
  {
    "id": "U21405",
    "title": "Hemtjänsttagaren erbjuds välja personal som talar hemtjänsttagarens språk, (Ja=1/ Nej=0)"
  },
  {
    "id": "U21406",
    "title": "Hemtjänsttagaren erbjuds att välja tid för insats, (Ja=1/ Nej=0)"
  },
  {
    "id": "U21407",
    "title": "Hemtjänsttagaren erbjuds ledsagarservice, (>En gång/månad=3/ En gång/månad=2/ <En gång/månad=1 / Ingår inte=0)"
  },
  {
    "id": "U21408",
    "title": "Hemtjänsttagaren erbjuds promenader, (>En gång/vecka=3/ En gång/vecka=2/ <En gång/vecka=1/ Ingår inte=0)"
  },
  {
    "id": "U21409",
    "title": "Invånare 65+ erbjuds social dagverksamhet, (Vardag+helg=2/ Vardag=1/ Ingår inte=0)"
  },
  {
    "id": "U21410",
    "title": "Invånare 65+ med demenssjukdom erbjuds biståndsbedömd dagverksamhet vid behov, (Vardag+helg=2/ Vardag=1/ Ingår inte=0)"
  },
  {
    "id": "U21411",
    "title": "Hemtjänsttagaren erbjuds vid behov trygghetsringning/telefonservice, (Ja=1/Nej=0)"
  },
  {
    "id": "U21412",
    "title": "Hemtjänsttagaren erbjuds städning, frekvens (En gång i veckan=3/ Varannan vecka=2/ Var tredje vecka eller mer sällan=1)"
  },
  {
    "id": "U21413",
    "title": "Hemtjänsttagaren erbjuds städning, omfattning (>Två r.o.k.=3/ Två r.o.k.=2/ Ett r.o.k.=1)"
  },
  {
    "id": "U21414",
    "title": "Hemtjänsttagaren erbjuds tvätt, frekvens (En gång i veckan=3/ Varannan vecka=2/ Var tredje vecka eller mer sällan=1)"
  },
  {
    "id": "U21416",
    "title": "Hemtjänsttagaren erbjuds dagligvaruinköp, (>En gång/vecka=3/ En gång/vecka=2/ <En gång/vecka=1/ Ingår inte=0)"
  },
  {
    "id": "U21417",
    "title": "Hemtjänsttagaren erbjuds möjligheten att följa med vid dagligvaruinköp, (Ja=1/ Nej=0)"
  },
  {
    "id": "U21418",
    "title": "Invånare 65+ med syn- och hörselskada erbjuds stöd och rådgivning vid behov, (Ja=1/ Nej=0)"
  },
  {
    "id": "U21419",
    "title": "Invånare 65+ erbjuds service som t.ex. gräsklippning, snöskottning eller fixartjänst, (Ja=2/ Någon=1/ Ingen=0)"
  },
  {
    "id": "U21420",
    "title": "Brukarbedömning hemtjänst äldreomsorg - bemötande, förtroende och trygghet, andel (%)"
  },
  {
    "id": "U21421",
    "title": "Brukarbedömning hemtjänst/ordinärt boende äldreomsorg - kontakt med personal, andel (%) (-2015)"
  },
  {
    "id": "U21422",
    "title": "Brukarbedömning hemtjänst äldreomsorg - inflytande och tillräckligt med tid, andel (%)"
  },
  {
    "id": "U21423",
    "title": "Brukarbedömning hemtjänst äldreomsorg - förändring av självskattad hälsa, index"
  },
  {
    "id": "U21424",
    "title": "Personer 75+ år med hemtjänst med tre eller fler psykofarmaka, andel (%)"
  },
  {
    "id": "U21425",
    "title": "Personer 75+ år med hemtjänst med tio eller fler läkemedel, andel (%)"
  },
  {
    "id": "U21426",
    "title": "Personer 75+ år med hemtjänst med olämpliga läkemedel, andel (%)"
  },
  {
    "id": "U21427",
    "title": "Personer 75+ år med hemtjänst med antipsykotiska läkemedel, andel (%)"
  },
  {
    "id": "U21429",
    "title": "Brukarbedömning hemtjänst äldreomsorg - hälsotillstånd och rörelseförmåga, andel (%)"
  },
  {
    "id": "U21431",
    "title": "Omsorgs- och serviceutbud hemtjänst äldreomsorg, andel (%) av maxpoäng (-2017)"
  },
  {
    "id": "U21432",
    "title": "Åtgärder mot fall, undernäring, trycksår och nedsatt munhälsa för personer med hemsjukvård i ordinärt boende, andel (%)"
  },
  {
    "id": "U21433",
    "title": "Brukarbedömning hemtjänst äldreomsorg - Enskild regi - bemötande, förtroende och trygghet, andel (%)"
  },
  {
    "id": "U21434",
    "title": "Brukarbedömning hemtjänst äldreomsorg - Enskild regi - inflytande och tillräckligt med tid, andel (%)"
  },
  {
    "id": "U21435",
    "title": "Brukarbedömning hemtjänst äldreomsorg - Enskild regi - hälsotillstånd och rörelseförmåga, andel (%)"
  },
  {
    "id": "U21436",
    "title": "Personalkontinuitet, antal personal som en hemtjänsttagare möter under 14 dagar, över 20 stycken, andel (%)"
  },
  {
    "id": "U21437",
    "title": "Hemtjänsttagaren erbjuds enklare matlagning i bostaden, (Ja=1, Nej=0)"
  },
  {
    "id": "U21438",
    "title": "Brukarbedömning hemtjänst äldreomsorg - Enskild regi - helhetssyn, andel (%)"
  },
  {
    "id": "U21439",
    "title": "Brukarbedömning hemtjänst äldreomsorg - Enskild regi - svåra besvär av ängslan, oro eller ångest, andel (%)"
  },
  {
    "id": "U21440",
    "title": "Brukarbedömning hemtjänst äldreomsorg - Offentlig regi - bemötande, förtroende och trygghet, andel (%)"
  },
  {
    "id": "U21441",
    "title": "Brukarbedömning hemtjänst äldreomsorg - Offentlig regi - inflytande och tillräckligt med tid, andel (%)"
  },
  {
    "id": "U21442",
    "title": "Brukarbedömning hemtjänst äldreomsorg - Offentlig regi - hälsotillstånd och rörelseförmåga, andel (%)"
  },
  {
    "id": "U21443",
    "title": "Brukarbedömning hemtjänst äldreomsorg - Offentlig regi - helhetssyn, andel (%)"
  },
  {
    "id": "U21444",
    "title": "Brukarbedömning hemtjänst äldreomsorg - Offentlig regi - svåra besvär av ängslan, oro eller ångest, andel (%)"
  },
  {
    "id": "U21447",
    "title": "Brukarbedömning hemtjänst äldreomsorg - hälsotillstånd, andel (%)"
  },
  {
    "id": "U21449",
    "title": "Brukarbedömning hemtjänst äldreomsorg - svåra besvär av ängslan, oro eller ångest, andel (%)"
  },
  {
    "id": "U21451",
    "title": "Aktuell kontinuitetsplan - Hemtjänst, service och/eller personlig omvårdnad  i ordinärt boende, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U21452",
    "title": "Personer i ordinärt boende med hemtjänst äldreomsorg i kommunen med aktuell genomförandeplan, andel (%)"
  },
  {
    "id": "U21461",
    "title": "Brukarbedömning hemtjänst äldreomsorg - tillräckligt med tid, andel (%)"
  },
  {
    "id": "U21462",
    "title": "Brukarbedömning hemtjänst äldreomsorg - möjlighet påverka tider, andel (%)"
  },
  {
    "id": "U21463",
    "title": "Brukarbedömning hemtjänst äldreomsorg - hänsyn till åsikter och önskemål, andel (%)"
  },
  {
    "id": "U21464",
    "title": "Brukarbedömning hemtjänst äldreomsorg - möjlighet att framföra synpunkter eller klagomål, andel (%)"
  },
  {
    "id": "U21465",
    "title": "Brukarbedömning hemtjänst äldreomsorg -  information om förändringar, andel (%)"
  },
  {
    "id": "U21466",
    "title": "Brukarbedömning hemtjänst äldreomsorg - bemötande (mycket nöjda), andel (%)"
  },
  {
    "id": "U21467",
    "title": "Brukarbedömning hemtjänst äldreomsorg - trygghet (mycket trygga), andel (%)"
  },
  {
    "id": "U21468",
    "title": "Brukarbedömning hemtjänst äldreomsorg -  helhetssyn, andel (%)"
  },
  {
    "id": "U21470",
    "title": "Brukarbedömning hemtjänst äldreomsorg - rörlighet inomhus, andel (%)"
  },
  {
    "id": "U21471",
    "title": "Brukarbedömning hemtjänst äldreomsorg - bor med annan vuxen, andel (%)"
  },
  {
    "id": "U21472",
    "title": "Brukarbedömning hemtjänst äldreomsorg - behov anpassas, andel (%)"
  },
  {
    "id": "U21473",
    "title": "Brukarbedömning hemtjänst äldreomsorg - välja utförare, andel (%)"
  },
  {
    "id": "U21474",
    "title": "Brukarbedömning hemtjänst äldreomsorg - personalen utför sina arbetsuppgifter, andel (%)"
  },
  {
    "id": "U21475",
    "title": "Brukarbedömning hemtjänst äldreomsorg - personalen kommer på avtalad tid, andel (%)"
  },
  {
    "id": "U21477",
    "title": "Brukarbedömning hemtjänst äldreomsorg - förtroende för personalen, andel (%)"
  },
  {
    "id": "U21478",
    "title": "Brukarbedömning hemtjänst äldreomsorg - besväras ofta av ensamhet, andel (%)"
  },
  {
    "id": "U21481",
    "title": "Brukarbedömning hemtjänst äldreomsorg - få kontakt med hemtjänstpersonalen, andel (%)"
  },
  {
    "id": "U21482",
    "title": "Brukarbedömning hemtjänst äldreomsorg - själv svarat på frågorna, andel (%)"
  },
  {
    "id": "U21488",
    "title": "Finns det rutiner när den äldre inte svarar när personalen ringer på dörren i hemtjänsten äldreomsorg? (-2015)"
  },
  {
    "id": "U21489",
    "title": "Finns det rutiner när den äldre plötsligt uppvisar ett försämrat allmäntillstånd i hemtjänsten äldreomsorg? (-2015)"
  },
  {
    "id": "U21490",
    "title": "Finns det rutiner när det är misstanke om undernäring/felnäring hos den äldre i hemtjänsten äldreomsorg? (-2015)"
  },
  {
    "id": "U21491",
    "title": "Finns det rutiner för schemalagda möten med sjuksköterska för ordinärt boende äldreomsorg? (-2015)"
  },
  {
    "id": "U21504",
    "title": "Brukarbedömning hemtjänst äldreomsorg - bemötande, andel (%)"
  },
  {
    "id": "U21505",
    "title": "Brukarbedömning hemtjänst äldreomsorg - trygghet, andel (%)"
  },
  {
    "id": "U21513",
    "title": "Hemtjänstenheter äldreomsorg i offentlig regi, andel (%)"
  },
  {
    "id": "U21514",
    "title": "Möjlighet att tillgodose behov av vård och omsorg i hemtjänst äldreomsorg utförd av personal som talar finska?"
  },
  {
    "id": "U21516",
    "title": "Hemtjänsttagare med namngiven fast personalkontakt, andel (%)"
  },
  {
    "id": "U21523",
    "title": "Personer med hemtjänst och hemsjukvård som har en namngiven kontakt med en legitimerad personal, andel (%) (-2016)"
  },
  {
    "id": "U21539",
    "title": "Krisberedskap ingår vid upphandling av hemtjänst, (Ja=1, Nej=0)"
  },
  {
    "id": "U21542",
    "title": "Beredskapsplan för höga temperaturer inom hemtjänst, (Ja=1, Nej=0)"
  },
  {
    "id": "U21544",
    "title": "Multiprofessionella team för personer med demenssjukdom i ordinärt boende, (Ja=1, Nej=0)"
  },
  {
    "id": "U21545",
    "title": "Strokeinriktad rehabilitering av multiprofessionella rehabiliteringsteam i ordinärt boende, (Ja=1, Nej=0)"
  },
  {
    "id": "U21546",
    "title": "Strukturerat arbetssätt används vid alla utredningar för personer i ordinärt boende, (Ja, för alla=2, Ja, men inte för alla=1, Nej=0)"
  },
  {
    "id": "U21547",
    "title": "Strukturerat arbetssätt används vid alla uppföljningar för personer i ordinärt boende, (Ja, för alla=2, Ja, men inte för alla=1, Nej=0)"
  },
  {
    "id": "U21548",
    "title": "Använt resultat för att utveckla verksamheten för klienter inom ordinärt boende äldreomsorg, (Ja=2, Nej, men fattat beslut=1, Nej=0)"
  },
  {
    "id": "U21549",
    "title": "Använt resultaten av biståndsbeslutade insatser till enskilda på gruppnivå utifrån kön inom ordinärt boende äldreomsorg, (Ja=2, Nej, men genomfört uppföljning=1, Nej=0)."
  },
  {
    "id": "U21550",
    "title": "Kommunen garanterar inom viss tid kontakt vid larm, (Ja=1, Nej=0)"
  },
  {
    "id": "U21551",
    "title": "Kommunen garanterar inom viss tid kontakt besök efter larm, (Ja=1, Nej=0)"
  },
  {
    "id": "U21552",
    "title": "Garanterad maximal tid för kontakt med personal inom ordinärt boende äldreomsorg, (Inom 1 minut=3, Inom 3 minuter=2, Mer än 3 minuter=1, Nej=0)"
  },
  {
    "id": "U21553",
    "title": "Garanterad maximal inställelsetid efter larm inom ordinärt boende äldreomsorg, (Inom 20 min.=5, Inom 30 min.=4, Inom 45 min.=3, Inom 60 min.=2, Mer än 60 min.=1, Nej=0)"
  },
  {
    "id": "U21554",
    "title": "Personer med hemtjänst äldreomsorg en plan som innehåller dokumentation om hur personen deltagit vid upprättande/förändring av sin genomförandeplan, andel (%)"
  },
  {
    "id": "U21555",
    "title": "Aktuell rutin för när den enskilde, trots överenskommelse, inte öppnar dörren/svarar på ringsignal?"
  },
  {
    "id": "U21556",
    "title": "Aktuell rutin för när den enskilde plötsligt uppvisar ett försämrat allmäntillstånd i hemtjänsten äldreomsorg?"
  },
  {
    "id": "U21557",
    "title": "Aktuell rutin vid misstanke om att den enskilde är undernärd eller felnärd i hemtjänsten äldreomsorg?"
  },
  {
    "id": "U21558",
    "title": "Aktuell rutin vid misstanke/upptäckt av att den enskilde utsatts för våld eller övergrepp av anhörig/närstående i hemtjänsten äldreomsorg?"
  },
  {
    "id": "U21559",
    "title": "Aktuell rutin vid misstanke/upptäckt av att den enskilde är beroende av/missbrukar läkemedel i hemtjänsten äldreomsorg?"
  },
  {
    "id": "U21560",
    "title": "Aktuell rutin vid misstanke/upptäckt av att den enskilde är beroende av/missbrukar alkohol eller andra beroendeframkallande medel (ej läkemedel) i hemtjänsten äldreomsorg?"
  },
  {
    "id": "U21561",
    "title": "Aktuell rutin för hur personalen samarabetar med anhöriga i hemtjänsten äldreomsorg?"
  },
  {
    "id": "U21562",
    "title": "Aktuell rutin för schemalagda möten med sjuksköterska i frågor som rör personer med behov av kommunal hälso- och sjukvårdsinsatser i hemtjänsten äldreomsorg?"
  },
  {
    "id": "U21563",
    "title": "Aktuell rutin för schemalagda möten med sjuksköterska i frågor som rör personer med behov av kommunal hälso- och sjukvårdsinsatser i hemtjänsten äldreomsorg? Frekvens"
  },
  {
    "id": "U21564",
    "title": "Aktuell rutin för kontakter med hälso- och sjukvårdspersonal  i frågor som rör personer som regionens primärvård har ansvaret för hemtjänsten äldreomsorg?"
  },
  {
    "id": "U21565",
    "title": "Aktuell rutin för hur planering av den enskildes hälso- och sjukvård (vårdplanering) ska genomföras i samverkan med olika aktörer, där det är dokumenterat i journal hur den enskilde deltagit vid vårdplaneringen, i hemtjänsten äldreomsorg?"
  },
  {
    "id": "U21566",
    "title": "Aktuell rutin  för hur planering av den enskildes hälso- och sjukvård (vårdplanering) ska genomföras i samverkan med den enskilde och med den kommunala hälso- och sjukvårdspersonalen samt hemtjänstpersonalen i hemtjänsten äldreomsorg?"
  },
  {
    "id": "U21567",
    "title": "Aktuell rutin  för hur fördjupade läkemedelsgenomgångar ska genomföras, där den enskildes delaktighet är dokumenterad i journalen, i hemtjänsten äldreomsorg?"
  },
  {
    "id": "U21568",
    "title": "Aktuell rutin  för hur fördjupade läkemedelsgenomgångar ska genomföras i samverkan med den enskilde och läkare samt ansvarig sjuksköterska, där hemtjänstpersonal medverkar, i hemtjänsten äldreomsorg?"
  },
  {
    "id": "U21569",
    "title": "Erbjuder enkel fotundersökning i ordinärt boende äldreomsorg, (Ja=1, Nej=0)"
  },
  {
    "id": "U21570",
    "title": "Genomfört systematisk uppföljning med ett könsperspektiv - ordinärt boende, (Ja=1, Nej=0)"
  },
  {
    "id": "U21571",
    "title": "Aktuell rutin för hur samverkan vid vårdplanering ska ske tillsammans med den enskilde, den kommunala hälso- och sjukvårds-personalen och hälso- och sjukvårdspersonalen vid regionens vårdcentral samt hemtjänstpersonalen."
  },
  {
    "id": "U21901",
    "title": "Brukartid hemtjänst äldreomsorg, andel (%)"
  },
  {
    "id": "U23004",
    "title": "KPB - Kostnad särskilt boende, egen regi, kr/dygn"
  },
  {
    "id": "U23005",
    "title": "KPB - Dygn inom särskilt boende, antal dygn/inv 80+"
  },
  {
    "id": "U23006",
    "title": "KPB - Kostnad särskilt boende, egen regi, kr/plats"
  },
  {
    "id": "U23008",
    "title": "KPB - Kostnad för HSL-insatser i särskilt boende, egen regi, kr/dygn"
  },
  {
    "id": "U23200",
    "title": "Medarbetarengagemang (HME) särskilt boende äldreomsorg - Totalindex"
  },
  {
    "id": "U23201",
    "title": "Medarbetarengagemang (HME) särskilt boende äldreomsorg - Motivationsindex"
  },
  {
    "id": "U23202",
    "title": "Medarbetarengagemang (HME) särskilt boende äldreomsorg - Ledarskapsindex"
  },
  {
    "id": "U23203",
    "title": "Medarbetarengagemang (HME) särskilt boende äldreomsorg - Styrningsindex"
  },
  {
    "id": "U23401",
    "title": "Väntetid i antal dagar från ansökningsdatum till första erbjudet inflyttningsdatum till särskilt boende, medelvärde"
  },
  {
    "id": "U23402",
    "title": "Väntetid i antal dagar från ansökningsdatum till första erbjudet inflyttningsdatum till särskilt boende, median"
  },
  {
    "id": "U23403",
    "title": "Boendeplatser i särskilt boende där den äldre själv kan välja tid för uppstigning på morgonen, andel (%) (-2018)"
  },
  {
    "id": "U23404",
    "title": "Boendeplatser i särskilt boende där den äldre själv kan välja tid för nattvila, andel (%) (-2018)"
  },
  {
    "id": "U23405",
    "title": "Boendeplatser i särskilt boende där den äldre erbjuds daglig utevistelse, andel (%)"
  },
  {
    "id": "U23406",
    "title": "Boendeplatser i särskilt boende där den äldre serveras kvälls/nattmål, andel (%) (-2018)"
  },
  {
    "id": "U23407",
    "title": "Boendeplatser i särskilt boende där den äldre har möjlighet till internetuppkoppling i det egna rummet/lägenheten, andel (%) (-2018)"
  },
  {
    "id": "U23408",
    "title": "Boendeplatser i särskilt boende som erbjuder minst två organiserade och gemensamma aktiviteter under vardagar, andel (%)"
  },
  {
    "id": "U23409",
    "title": "Boendeplatser i särskilt boende som erbjuder minst en organiserad och gemensam aktivitet per dag under helgen, andel (%)"
  },
  {
    "id": "U23410",
    "title": "Boendeplatser i särskilt boende där den äldre erbjuds tid utifrån sina egna önskemål dagligen, andel (%) (-2018)"
  },
  {
    "id": "U23412",
    "title": "Boendeplatser i särskilt boende där den äldre erbjuds kvarboende i livets slutskede, andel (%)"
  },
  {
    "id": "U23413",
    "title": "Brukarbedömning särskilt boende äldreomsorg - kontakt med personal, andel (%)"
  },
  {
    "id": "U23414",
    "title": "Brukarbedömning särskilt boende äldreomsorg - inflytande och tillräckligt med tid, andel (%)"
  },
  {
    "id": "U23415",
    "title": "Brukarbedömning särskilt boende äldreomsorg - mat och måltidsmiljö, andel (%)"
  },
  {
    "id": "U23416",
    "title": "Brukarbedömning särskilt boende äldreomsorg - boendemiljö, andel (%)"
  },
  {
    "id": "U23417",
    "title": "Brukarbedömning särskilt boende äldreomsorg - aktiviteter och känsla av ensamhet, andel (%)"
  },
  {
    "id": "U23418",
    "title": "Personer 65+ år i särskilt boende med risk för trycksår grad 1 med ordination av tryckutjämnande underlag, andel (%)"
  },
  {
    "id": "U23419",
    "title": "Personer 75+ år i särskilt boende med tre eller fler psykofarmaka, andel (%)"
  },
  {
    "id": "U23420",
    "title": "Personer 75+ år i särskilt boende med tio eller fler läkemedel, andel (%)"
  },
  {
    "id": "U23421",
    "title": "Personer 75+ år i särskilt boende med olämpliga läkemedel, andel (%)"
  },
  {
    "id": "U23422",
    "title": "Personer 75+ år i särskilt boende med antipsykotiska läkemedel, andel (%)"
  },
  {
    "id": "U23424",
    "title": "Brukarbedömning särskilt boende äldreomsorg - bemötande, förtroende och trygghet, andel (%)"
  },
  {
    "id": "U23425",
    "title": "Enheter i särskilt boende där det är möjligt att bli sambo, andel (%) (-2018)"
  },
  {
    "id": "U23426",
    "title": "Boendeplatser i särskilt boende där den äldre har möjlighet att välja alternativ rätt vid huvudmål, andel (%)"
  },
  {
    "id": "U23427",
    "title": "Boendeplatser i särskilt boende där den äldre kan påverka tv-kanaler utöver basutbudet i den egna lgh, andel (%) (-2018)"
  },
  {
    "id": "U23428",
    "title": "Boendeplatser i särskilt boende där den äldre kan påverka tv-kanaler utöver basutbudet i gemensamhetslokal, andel (%)"
  },
  {
    "id": "U23429",
    "title": "Brukare i särskilt boende för äldre som har möjlighet att tala sitt modersmål (inkl. svenska) med sin kontaktman, andel (%) (-2017)"
  },
  {
    "id": "U23430",
    "title": "Brukare som har ett annat modersmål än svenska i särskilt boende för äldre, andel (%) (-2017)"
  },
  {
    "id": "U23431",
    "title": "Väntetider från ansökningsdatum till första erbjudet inflyttningsdatum till särskilt boende, väntat längre än 90 dagar (%)"
  },
  {
    "id": "U23433",
    "title": "Åtgärder mot fall, undernäring, trycksår och nedsatt munhälsa för personer i särskilt boende, andel (%)"
  },
  {
    "id": "U23434",
    "title": "Brukarbedömning särskilt boende äldreomsorg - hälsotillstånd och rörelseförmåga, andel (%)"
  },
  {
    "id": "U23435",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Enskild regi - aktiviteter och känsla av ensamhet, andel (%)"
  },
  {
    "id": "U23436",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Enskild regi - bemötande, förtroende och trygghet, andel (%)"
  },
  {
    "id": "U23437",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Enskild regi - boendemiljö, andel (%)"
  },
  {
    "id": "U23439",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Enskild regi - inflytande och tillräckligt med tid, andel (%)"
  },
  {
    "id": "U23440",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Enskild regi - hälsotillstånd och rörelseförmåga, andel (%)"
  },
  {
    "id": "U23441",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Enskild regi - kontakt med personal, andel (%)"
  },
  {
    "id": "U23442",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Enskild regi - mat och måltidsmiljö, andel (%)"
  },
  {
    "id": "U23443",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Enskild regi - helhetssyn, andel (%)"
  },
  {
    "id": "U23444",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Enskild regi - svåra besvär av ängslan, oro eller ångest, andel (%)"
  },
  {
    "id": "U23445",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Offentlig regi - aktiviteter och känsla av ensamhet, andel (%)"
  },
  {
    "id": "U23446",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Offentlig regi - bemötande, förtroende och trygghet, andel (%)"
  },
  {
    "id": "U23447",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Offentlig regi - boendemiljö, andel (%)"
  },
  {
    "id": "U23448",
    "title": "Brukarbedömning särskilt boende äldreomsorg - hälsotillstånd, andel (%)"
  },
  {
    "id": "U23449",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Offentlig regi - inflytande och tillräckligt med tid, andel (%)"
  },
  {
    "id": "U23450",
    "title": "Brukarbedömning särskilt boende äldreomsorg - svåra besvär av ängslan, oro eller ångest, andel (%)"
  },
  {
    "id": "U23452",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Offentlig regi - hälsotillstånd och rörelseförmåga, andel (%)"
  },
  {
    "id": "U23453",
    "title": "Följsamhet till basala hygienrutiner och klädregler i särskilt boende för äldre, andel (%)"
  },
  {
    "id": "U23454",
    "title": "Följsamhet till basala hygienrutiner i särskilt boende för äldre, andel (%)"
  },
  {
    "id": "U23455",
    "title": "Följsamhet till basala klädregler i särskilt boende för äldre, andel (%)"
  },
  {
    "id": "U23456",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Offentlig regi - kontakt med personal, andel (%)"
  },
  {
    "id": "U23457",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Offentlig regi - mat och måltidsmiljö, andel (%)"
  },
  {
    "id": "U23458",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Offentlig regi - helhetssyn, andel (%)"
  },
  {
    "id": "U23459",
    "title": "Brukarbedömning särskilt boende äldreomsorg - tillräckligt med tid, andel (%)"
  },
  {
    "id": "U23460",
    "title": "Brukarbedömning särskilt boende äldreomsorg - möjlighet påverka tider, andel (%)"
  },
  {
    "id": "U23461",
    "title": "Brukarbedömning särskilt boende äldreomsorg - hänsyn till åsikter och önskemål, andel (%)"
  },
  {
    "id": "U23462",
    "title": "Brukarbedömning särskilt boende äldreomsorg - information om förändringar, andel (%)"
  },
  {
    "id": "U23463",
    "title": "Brukarbedömning särskilt boende äldreomsorg - bemötande (mycket nöjda), andel (%)"
  },
  {
    "id": "U23464",
    "title": "Brukarbedömning särskilt boende äldreomsorg - trygghet (mycket trygga), andel (%)"
  },
  {
    "id": "U23465",
    "title": "Brukarbedömning särskilt boende äldreomsorg - trivsamma gemensamma utrymmen, andel (%)"
  },
  {
    "id": "U23466",
    "title": "Brukarbedömning särskilt boende äldreomsorg - trivsamt utomhus, andel (%)"
  },
  {
    "id": "U23467",
    "title": "Brukarbedömning särskilt boende äldreomsorg - maten, andel (%)"
  },
  {
    "id": "U23468",
    "title": "Brukarbedömning särskilt boende äldreomsorg - måltidsmiljö, andel (%)"
  },
  {
    "id": "U23469",
    "title": "Brukarbedömning särskilt boende äldreomsorg -  möjligheten att komma utomhus, andel (%)"
  },
  {
    "id": "U23470",
    "title": "Brukarbedömning särskilt boende äldreomsorg -  sociala aktiviteter, andel (%)"
  },
  {
    "id": "U23471",
    "title": "Brukarbedömning särskilt boende äldreomsorg -  helhetssyn, andel (%)"
  },
  {
    "id": "U23472",
    "title": "Brukarbedömning särskilt boende äldreomsorg -  tillgång till sjuksköterska, andel (%)"
  },
  {
    "id": "U23473",
    "title": "Brukarbedömning särskilt boende äldreomsorg - rörlighet inomhus, andel (%)"
  },
  {
    "id": "U23474",
    "title": "Brukarbedömning särskilt boende äldreomsorg - plats på äldreboende, andel (%)"
  },
  {
    "id": "U23475",
    "title": "Brukarbedömning särskilt boende äldreomsorg - trivs med rum/lägenhet, andel (%)"
  },
  {
    "id": "U23478",
    "title": "Brukarbedömning särskilt boende äldreomsorg - Offentlig regi - svåra besvär av ängslan, oro eller ångest, andel (%)"
  },
  {
    "id": "U23480",
    "title": "Brukarbedömning särskilt boende äldreomsorg - förtroende för personalen, andel (%)"
  },
  {
    "id": "U23481",
    "title": "Brukarbedömning särskilt boende äldreomsorg - besväras ofta av ensamhet, andel (%)"
  },
  {
    "id": "U23482",
    "title": "Brukarbedömning särskilt boende äldreomsorg - läkare vid behov, andel (%) (-2015)"
  },
  {
    "id": "U23483",
    "title": "Brukarbedömning särskilt boende äldreomsorg - få kontakt med personalen på boendet, andel (%)"
  },
  {
    "id": "U23484",
    "title": "Brukarbedömning särskilt boende äldreomsorg - själv svarat på frågorna, andel (%)"
  },
  {
    "id": "U23485",
    "title": "Brukarbedömning särskilt boende äldreomsorg - inte kränkts av någon personal under året, andel (%)"
  },
  {
    "id": "U23487",
    "title": "Aktuell kontinuitetsplan - Särskilda boendeformer för service och omvårdnad för äldre, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U23488",
    "title": "Kvalitetsaspekter särskilt boende äldreomsorg, andel (%) av maxpoäng"
  },
  {
    "id": "U23489",
    "title": "Omsorgspersonal/plats i boende för särskild service för äldre på vardagar, antal"
  },
  {
    "id": "U23490",
    "title": "Sjuksköterskor/plats i boende för särskild service för äldre, vardagar, antal"
  },
  {
    "id": "U23493",
    "title": "Omsorgspersonal/plats i boende för särskild service för äldre, helgdagar, antal"
  },
  {
    "id": "U23494",
    "title": "Sjuksköterskor/plats i boende för särskild service för äldre, helgdagar, antal"
  },
  {
    "id": "U23495",
    "title": "Omsorgspersonalen på vardagar i boende med särskild service för äldre med adekvat utbildning, andel (%)"
  },
  {
    "id": "U23496",
    "title": "Omsorgspersonalen på helgdagar i boende med särskild service för äldre med adekvat utbildning, andel (%)"
  },
  {
    "id": "U23498",
    "title": "Regelbundna möten (\"boråd\") vid särskilda boenden för äldre?"
  },
  {
    "id": "U23503",
    "title": "Närhet till träningslokal och som lätt kan nås av de äldre personerna i särskilt boende för äldre?"
  },
  {
    "id": "U23516",
    "title": "Brukarbedömning särskilt boende äldreomsorg - möjlighet att framföra synpunkter eller klagomål, andel (%)"
  },
  {
    "id": "U23520",
    "title": "Brukarbedömning särskilt boende äldreomsorg - bemötande, andel (%)"
  },
  {
    "id": "U23521",
    "title": "Brukarbedömning särskilt boende äldreomsorg - trygghet, andel (%)"
  },
  {
    "id": "U23522",
    "title": "Särskilda boenden äldreomsorg i offentlig regi, andel (%)"
  },
  {
    "id": "U23524",
    "title": "Möjlighet att tillgodose behov av vård och omsorg i särskilt boende äldreomsorg utförd av personal som talar finska?"
  },
  {
    "id": "U23534",
    "title": "Personer i särskilt boende äldreomsorg vars genomförandeplan innehåller önskemål och behov i samband med måltiderna, andel (%)"
  },
  {
    "id": "U23549",
    "title": "Personer 65 år och äldre i permanent särskilt boende med aktuell basal utredning avseende urinläckage, andel (%) (-2018)"
  },
  {
    "id": "U23550",
    "title": "Personer i permanent särskilt boende med individuellt utprovade inkontinenshjälpmedel, andel (%) (-2018)"
  },
  {
    "id": "U23555",
    "title": "Personer i riskzon för trycksår i särskilt boende för äldre som har tryckutjämnande underlag, andel (%) (-2016)"
  },
  {
    "id": "U23556",
    "title": "Personer med trycksår i särskilt boende, andel (%) (-2016)"
  },
  {
    "id": "U23557",
    "title": "Trycksår i särskilt boende i kategori 2-4, andel (%) (-2016)"
  },
  {
    "id": "U23560",
    "title": "Strukturerat arbetssätt används vid alla utredningar för personer i särskilt boende, (Ja, för alla=2, Ja, men inte för alla=1, Nej=0)"
  },
  {
    "id": "U23561",
    "title": "Strukturerat arbetssätt används vid alla uppföljningar för personer i särskilt boende, (Ja, för alla=2, Ja, men inte för alla=1, Nej=0)"
  },
  {
    "id": "U23562",
    "title": "Använt resultat för att utveckla verksamheten för klienter inom särskilt boende äldreomsorg, (Ja=2, Nej, men fattat beslut=1, Nej=0)"
  },
  {
    "id": "U23563",
    "title": "Använt resultaten av biståndsbeslutade insatser till enskilda på gruppnivå utifrån kön inom särskilt boende äldreomsorg, (Ja=2, Nej, men genomfört uppföljning=1, Nej=0)."
  },
  {
    "id": "U23564",
    "title": "Erbjuds varje enskild boende att delta i boenderådsmöte i särskilt boende enligt intervall?"
  },
  {
    "id": "U23565",
    "title": "Personer med en plan som innehåller dokumentation om hur personen deltagit vid upprättande/förändring av sin genomförandeplan i särskilt boende äldreomsorg. Andel (%)"
  },
  {
    "id": "U23566",
    "title": "Aktuell rutin för genomförande av dygnets alla måltider, i särskilt boende äldreomsorg?"
  },
  {
    "id": "U23567",
    "title": "Aktuell rutin vid misstanke/upptäckt av att den enskilde utsatts för våld eller övergrepp av anhörig/närstående i särskilt boende äldreomsorg"
  },
  {
    "id": "U23568",
    "title": "Aktuell rutin vid misstanke/upptäckt av att den enskilde är beroende av/missbrukar läkemedel i särskilt boende äldreomsorg?"
  },
  {
    "id": "U23569",
    "title": "Aktuell rutin vid misstanke/upptäckt av att den enskilde är beroende av/missbrukar alkohol eller andra beroendeframkallande medel (ej läkemedel) i särskilt boende äldreomsorg?"
  },
  {
    "id": "U23570",
    "title": "Aktuell rutin för hur personalen samarabetar med anhöriga i särskilt boende äldreomsorg"
  },
  {
    "id": "U23571",
    "title": "Aktuell rutin för hur planering av den enskildes hälso- och sjukvård (vårdplanering) ska genomföras i samverkan med olika aktörer, där det är dokumenterat i journal hur den enskilde deltagit vid vårdplaneringen, i särskilt boende äldreomsorg?"
  },
  {
    "id": "U23572",
    "title": "Aktuell rutin för schemalagda möten med sjuksköterska i frågor som rör personer med behov av kommunal hälso- och sjukvårdsinsatser i särskilt boende äldreomsorg"
  },
  {
    "id": "U23573",
    "title": "Aktuell rutin för hur fördjupade läkemedelsgenomgångar ska genomföras, där den enskildes delaktighet är dokumenterad i journalen, i särskilt boende äldreomsorg?"
  },
  {
    "id": "U23574",
    "title": "Aktuell rutin för hur fördjupade läkemedelsgenomgångar ska genomföras i samverkan med den enskilde och läkare samt ansvarig sjuksköterska och omsorgspersonal i särskilt boende äldreomsorg?"
  },
  {
    "id": "U23575",
    "title": "Erbjuder enkel fotundersökning i särskilt boende äldreomsorg, (Ja=1, Nej=0)"
  },
  {
    "id": "U23576",
    "title": "Genomfört systematisk uppföljning med ett könsperspektiv - särskilt boende, (Ja=1, Nej=0)"
  },
  {
    "id": "U23577",
    "title": "Personer som har en dokumentation om varför de har en skyddsåtgärd i särskilt boende äldre, andel (%)"
  },
  {
    "id": "U23578",
    "title": "Registrerat och använt resultaten från det nationella kvalitetsregisteret Senior alert, andel (%) (-2018)"
  },
  {
    "id": "U23579",
    "title": "Registrerat och använt resultaten från det nationella kvalitetsregisteret SveDem, andel (%) (-2018)"
  },
  {
    "id": "U23580",
    "title": "Registrerat och använt resultaten från det nationella kvalitetsregisteret BPSD, andel (%) (-2018)"
  },
  {
    "id": "U23581",
    "title": "Registrerat och använt resultaten från det nationella kvalitetsregisteret Palliativregistret, andel (%) (-2018)"
  },
  {
    "id": "U23582",
    "title": "Trycksår i särskilt boende, andel (%)"
  },
  {
    "id": "U23583",
    "title": "Trycksår kategori 2-4 i särskilt boende, andel (%)"
  },
  {
    "id": "U23584",
    "title": "BMI lägre än 22 i särskilt boende, andel (%)"
  },
  {
    "id": "U23701",
    "title": "Medianvårdtid i särskilt boende äldreomsorg, antal dagar"
  },
  {
    "id": "U23801",
    "title": "KPB - Beläggningsgrad i särskilt boende, egen regi, andel (%)"
  },
  {
    "id": "U23802",
    "title": "KPB - Omsättningsgrad i särskilt boende, egen regi, antal personer per plats och år"
  },
  {
    "id": "U25005",
    "title": "KPB - Kostnad personlig assistans SFB (efter avdrag från f-kassan), egen regi, kr/timme"
  },
  {
    "id": "U25009",
    "title": "KPB - Kostnad boendestöd, kr/brukare"
  },
  {
    "id": "U25010",
    "title": "KPB - Kostnad personlig assistans SFB, andel av total kostnad inom LSS och SFB, (%)"
  },
  {
    "id": "U25011",
    "title": "KPB - Kostnad boende psykiskt funktionsnedsättning, egen regi, kr/dygn"
  },
  {
    "id": "U25012",
    "title": "KPB - Kostnad personlig assistans SFB brutto, egen regi, kr/timme"
  },
  {
    "id": "U25013",
    "title": "KPB - Kostnad övriga insatser LSS, andel av total kostnad inom LSS och SFB, (%)"
  },
  {
    "id": "U25200",
    "title": "Medarbetarengagemang (HME) omsorg om personer med funktionsnedsättning - Totalindex"
  },
  {
    "id": "U25201",
    "title": "Medarbetarengagemang (HME) omsorg om personer med funktionsnedsättning - Motivationsindex"
  },
  {
    "id": "U25202",
    "title": "Medarbetarengagemang (HME) omsorg om personer med funktionsnedsättning - Ledarskapsindex"
  },
  {
    "id": "U25203",
    "title": "Medarbetarengagemang (HME) omsorg om personer med funktionsnedsättning - Styrningsindex"
  },
  {
    "id": "U25400",
    "title": "Informationsindex för kommunens webbplats - Personer med funktionsnedsättning"
  },
  {
    "id": "U25434",
    "title": "Aktuell kontinuitetsplan - Bostad med särskild service för barn med funktionsnedsättning, SoL, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U25435",
    "title": "Aktuell kontinuitetsplan - Stödboende för vuxna, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U25436",
    "title": "Aktuell kontinuitetsplan - Boendestöd för vuxna , (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U25437",
    "title": "Aktuell kontinuitetsplan -  Hem för vård eller boende för vuxna, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U25439",
    "title": "Personer har gått från daglig verksamhet till lönearbete, (Ja=1, Nej=0)"
  },
  {
    "id": "U26012",
    "title": "KPB - Kostnad boendestöd enligt KPB, kr/timme"
  },
  {
    "id": "U26402",
    "title": "Krisberedskap ingår vid upphandling av Hem för vård eller boende för vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U26403",
    "title": "Krisberedskap ingår vid upphandling av boendestöd för vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U26404",
    "title": "Krisberedskap ingår vid upphandling av Bostad med särskild service för barn, SoL, (Ja=1, Nej=0)"
  },
  {
    "id": "U26405",
    "title": "Plan för evakuering av personer för vuxna i HVB i egen regi, (Ja=1, Nej=0)"
  },
  {
    "id": "U26406",
    "title": "Plan för evakuering av personer för barn och unga i Bostad med särskild service, SoL i egen regi, (Ja=1, Nej=0)"
  },
  {
    "id": "U26407",
    "title": "Plan för evakuering av personer för vuxna i Bostad med särskild service, SoL i egen regi, (Ja=1, Nej=0)"
  },
  {
    "id": "U26408",
    "title": "Plan för evakuering av personer för vuxna i Permanent särskilt boende (SoL) i egen regi, (Ja=1, Nej=0)"
  },
  {
    "id": "U26409",
    "title": "Beredskapsplan för höga temperaturer inom HVB för vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U26410",
    "title": "Beredskapsplan för höga temperaturer inom bostad med särskild service för barn och unga (SoL), (Ja=1, Nej=0)"
  },
  {
    "id": "U26411",
    "title": "Beredskapsplan för höga temperaturer inom bostad med särskild service för vuxna (SoL), (Ja=1, Nej=0)"
  },
  {
    "id": "U26412",
    "title": "Beredskapsplan för höga temperaturer inom permanent särskilt boende för vuxna (SoL), (Ja=1, Nej=0)"
  },
  {
    "id": "U26413",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren får bestämma om saker som är viktiga, andel (%)"
  },
  {
    "id": "U26414",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren får den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U26415",
    "title": "Brukarbedömning boende särskild service SoL - Personalen bryr sig om brukaren, andel (%)"
  },
  {
    "id": "U26416",
    "title": "Brukarbedömning boende särskild service SoL - Personalen pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U26417",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren känner sig trygg med alla i personalen, andel (%)"
  },
  {
    "id": "U26418",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren är aldrig rädd för något hemma, andel (%)"
  },
  {
    "id": "U26419",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren trivs alltid hemma, andel (%)"
  },
  {
    "id": "U26420",
    "title": "Brukarbedömning boendestöd SoL - Brukaren får bestämma om saker som är viktiga, andel (%)"
  },
  {
    "id": "U26421",
    "title": "Brukarbedömning boendestöd SoL - Brukaren får den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U26422",
    "title": "Brukarbedömning boendestöd SoL - Personalen bryr sig om brukaren, andel (%)"
  },
  {
    "id": "U26423",
    "title": "Brukarbedömning boendestöd SoL - Personalen pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U26424",
    "title": "Brukarbedömning boendestöd SoL - Brukaren känner sig trygg med alla i personalen, andel (%)"
  },
  {
    "id": "U26425",
    "title": "Brukarbedömning boendestöd SoL - aldrig rädd för något hemma, andel (%) (-2016)"
  },
  {
    "id": "U26426",
    "title": "Brukarbedömning boendestöd SoL - Brukaren trivs alltid hemma, andel (%)"
  },
  {
    "id": "U26427",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren får bestämma om saker som är viktiga, andel (%)"
  },
  {
    "id": "U26428",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren får den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U26429",
    "title": "Brukarbedömning sysselsättning SoL - Personalen bryr sig om brukaren, andel (%)"
  },
  {
    "id": "U26430",
    "title": "Brukarbedömning sysselsättning SoL - Personalen pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U26431",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren känner sig trygg med alla i personalen, andel (%)"
  },
  {
    "id": "U26432",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren är aldrig rädd för något på sin sysselsättning, andel (%)"
  },
  {
    "id": "U26433",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren trivs på verksamheten, andel (%)"
  },
  {
    "id": "U26434",
    "title": "Krisberedskap ingår vid upphandling av stödboende för vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U26435",
    "title": "Plan för evakuering av personer för vuxna i stödboende i egen regi, (Ja=1, Nej=0)"
  },
  {
    "id": "U26436",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren vet vem hen ska kontakta om något är dåligt hemma, andel (%)"
  },
  {
    "id": "U26437",
    "title": "Brukarbedömning boendestöd SoL - Brukaren vet vem hen ska kontakta om något är dåligt med boendestödet, andel (%)"
  },
  {
    "id": "U26438",
    "title": "Brukarbedömning sysselsättning SoL - Verksamheten är viktig för brukaren, andel (%)"
  },
  {
    "id": "U26439",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren vet vem hen ska kontakta om något är dåligt på sysselsättningen, andel (%)"
  },
  {
    "id": "U26440",
    "title": "Brukarbedömning boendestöd SoL - Brukaren får ibland bestämma om saker som är viktiga ,andel (%)"
  },
  {
    "id": "U26441",
    "title": "Brukarbedömning boendestöd SoL - Brukaren får inte bestämma om saker som är viktiga, andel (%)"
  },
  {
    "id": "U26442",
    "title": "Brukarbedömning boendestöd SoL - Brukaren får ibland den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U26443",
    "title": "Brukarbedömning boendestöd SoL - Brukaren får aldrig den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U26444",
    "title": "Brukarbedömning boendestöd SoL - Några i personalen pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U26445",
    "title": "Brukarbedömning boendestöd SoL - Personalen pratar inte så brukaren förstår, andel (%)"
  },
  {
    "id": "U26446",
    "title": "Brukarbedömning boendestöd SoL - Personalen bryr sig ibland om brukaren, andel (%)"
  },
  {
    "id": "U26447",
    "title": "Brukarbedömning boendestöd SoL - Personalen bryr sig inte om brukaren, andel (%)"
  },
  {
    "id": "U26448",
    "title": "Brukarbedömning boendestöd SoL - Brukaren känner sig trygg med några i personalen, andel (%)"
  },
  {
    "id": "U26449",
    "title": "Brukarbedömning boendestöd SoL - Brukaren känner sig inte trygg med någon i personalen, andel (%)"
  },
  {
    "id": "U26450",
    "title": "Brukarbedömning boendestöd SoL - Brukaren trivs hemma ibland, andel (%)"
  },
  {
    "id": "U26451",
    "title": "Brukarbedömning boendestöd SoL - Brukaren trivs aldrig hemma, andel (%)"
  },
  {
    "id": "U26452",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren får ibland bestämma om saker som är viktiga, andel (%)"
  },
  {
    "id": "U26453",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren får inte bestämma om saker som är viktiga, andel (%)"
  },
  {
    "id": "U26454",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren får ibland den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U26455",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren får aldrig den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U26456",
    "title": "Brukarbedömning sysselsättning SoL - Några i personalen pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U26457",
    "title": "Brukarbedömning sysselsättning SoL - Personalen pratar inte så brukaren förstår, andel (%)"
  },
  {
    "id": "U26458",
    "title": "Brukarbedömning sysselsättning SoL - Personalen bryr sig ibland om brukaren, andel (%)"
  },
  {
    "id": "U26459",
    "title": "Brukarbedömning sysselsättning SoL - Personalen bryr sig inte om brukaren, andel (%)"
  },
  {
    "id": "U26460",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren känner sig trygg med några i personalen, andel (%)"
  },
  {
    "id": "U26461",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren känner sig inte trygg med någon i personalen, andel (%)"
  },
  {
    "id": "U26462",
    "title": "Brukarbedömning sysselsättning SoL  - Brukaren är ibland rädd för något på sin sysselsättning, andel (%)"
  },
  {
    "id": "U26463",
    "title": "Brukarbedömning sysselsättning SoL  - Brukaren är ofta rädd för något på sin sysselsättning, andel (%)"
  },
  {
    "id": "U26464",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren trivs ibland på verksamheten, andel (%)"
  },
  {
    "id": "U26465",
    "title": "Brukarbedömning sysselsättning SoL - Brukaren trivs aldrig på verksamheten, andel (%)"
  },
  {
    "id": "U26466",
    "title": "Brukarbedömning sysselsättning SoL - Verksamheten är ibland viktig för brukaren, andel (%)"
  },
  {
    "id": "U26467",
    "title": "Brukarbedömning sysselsättning SoL - Verksamheten är aldrig viktig för brukaren, andel (%)"
  },
  {
    "id": "U26468",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren får ibland bestämma om saker som är viktiga , andel (%)"
  },
  {
    "id": "U26469",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren får inte bestämma om saker som är viktiga , andel (%)"
  },
  {
    "id": "U26470",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren får ibland den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U26471",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren får aldrig den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U26472",
    "title": "Brukarbedömning boende särskild service SoL - Några i personalen pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U26473",
    "title": "Brukarbedömning boende särskild service SoL - Personalen pratar inte så brukaren förstår, andel (%)"
  },
  {
    "id": "U26474",
    "title": "Brukarbedömning boende särskild service SoL - Personalen bryr sig ibland om brukaren, andel (%)"
  },
  {
    "id": "U26475",
    "title": "Brukarbedömning boende särskild service SoL - Personalen bryr sig inte om brukaren, andel (%)"
  },
  {
    "id": "U26476",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren känner sig trygg med några i personalen, andel (%)"
  },
  {
    "id": "U26477",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren känner sig inte trygg med någon i personalen, andel (%)"
  },
  {
    "id": "U26478",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren är ibland rädd för något hemma, andel (%)"
  },
  {
    "id": "U26479",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren är ofta rädd för något hemma, andel (%)"
  },
  {
    "id": "U26480",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren trivs hemma ibland, andel (%)"
  },
  {
    "id": "U26481",
    "title": "Brukarbedömning boende särskild service SoL - Brukaren trivs aldrig hemma, andel (%)"
  },
  {
    "id": "U26482",
    "title": "Brukarbedömning daglig verksamhet LSS - Verksamheten är ibland viktig för brukaren, andel (%)"
  },
  {
    "id": "U26483",
    "title": "Brukarbedömning daglig verksamhet LSS - Verksamheten är aldrig viktig för brukaren, andel (%)"
  },
  {
    "id": "U26484",
    "title": "Aktuell kontinuitetsplan - Bostad med särskild service för vuxna med funktionsnedsättning, SoL, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U28012",
    "title": "KPB - Kostnad bostad med särskild service LSS för barn, ungdomar eller vuxna, kr/brukare"
  },
  {
    "id": "U28013",
    "title": "KPB - Kostnad daglig verksamhet LSS, annan regi, kr/dag"
  },
  {
    "id": "U28014",
    "title": "KPB - Kostnad daglig verksamhet LSS, egen och annan regi, kr/brukare"
  },
  {
    "id": "U28019",
    "title": "KPB - Andel dygn i gruppboende enligt LSS för personer 65 år och äldre, (%)"
  },
  {
    "id": "U28029",
    "title": "KPB - Ytterfall insatser inom LSS, andel brukare (%)"
  },
  {
    "id": "U28030",
    "title": "KPB - Kostnad gruppboende LSS för vuxna, egen regi, kr/dygn"
  },
  {
    "id": "U28031",
    "title": "KPB - Kostnad daglig verksamhet LSS, egen regi, kr/dag"
  },
  {
    "id": "U28032",
    "title": "KPB - Kostnad servicebostad LSS, egen regi, kr/dygn"
  },
  {
    "id": "U28033",
    "title": "KPB - Kostnad insatser inom LSS, kr/brukare"
  },
  {
    "id": "U28055",
    "title": "KPB - Kostnad personlig assistans LSS, andel av total kostnad inom LSS och SFB, (%)"
  },
  {
    "id": "U28056",
    "title": "KPB - Kostnad gruppbostad LSS, andel av total kostnad inom LSS och SFB, (%)"
  },
  {
    "id": "U28057",
    "title": "KPB - Kostnad servicebostad LSS, andel av total kostnad inom LSS och SFB, (%)"
  },
  {
    "id": "U28058",
    "title": "KPB - Kostnad daglig verksamhet LSS, andel av total kostnad inom LSS och SFB, (%)"
  },
  {
    "id": "U28060",
    "title": "KPB - Kostnad personlig assistans LSS, LSS och SFB kr/brukare"
  },
  {
    "id": "U28096",
    "title": "KPB - Kostnad korttidsvistelse enligt LSS, egen regi, kr/dygn"
  },
  {
    "id": "U28112",
    "title": "Enheterna har aktuella genomförandeplaner för de boende"
  },
  {
    "id": "U28113",
    "title": "Enheterna har dokumentation om delaktighet i genomförandeplanen för de boende"
  },
  {
    "id": "U28116",
    "title": "Enheterna har individuellt utformade mål i genomförandeplanen för de boende"
  },
  {
    "id": "U28118",
    "title": "Metoder för inflytande - Enheterna har regelbundna, gemensamma möten för de boende"
  },
  {
    "id": "U28119",
    "title": "Enheterna har rutiner för att säkerställa tillgång till hälso- och sjukvård för de boende"
  },
  {
    "id": "U28120",
    "title": "Enheterna har rutiner för samverkan kring hjälpmedel för de boende"
  },
  {
    "id": "U28121",
    "title": "Individuella kompetensutvecklingsplaner finns för samtliga i personalgruppen på enheten"
  },
  {
    "id": "U28122",
    "title": "Samlad kompetensutvecklingsplan för personalens kompetensutveckling finns vid enheten"
  },
  {
    "id": "U28123",
    "title": "Kompetensutveckling inom Alternativ och Kompletterande Kommunikation (AKK) har erbjudits till personalen på enheten"
  },
  {
    "id": "U28124",
    "title": "Kontinuerlig handledning har erbjudits till personalen på enheterna"
  },
  {
    "id": "U28125",
    "title": "Enheten har rutin för personalens agerande vid misstanke/upptäckt av att den enskilde har utsatts för våld eller andra övergrepp"
  },
  {
    "id": "U28126",
    "title": "Enheten har rutin för personalens agerande vid misstanke/upptäckt av att den enskilde är beroende av/missbrukar läkemedel"
  },
  {
    "id": "U28127",
    "title": "Enheten har rutin för personalens agerande vid misstanke/upptäckt av att den enskilde är beroende av/missbrukar alkohol eller andra beroendeframkallande medel (ej läkemedel)"
  },
  {
    "id": "U28128",
    "title": "På enheten används enskildas uppfattning för att utveckla verksamheten för de boende"
  },
  {
    "id": "U28129",
    "title": "Andel personer med en aktuell genomförandeplan."
  },
  {
    "id": "U28130",
    "title": "Andel personer med en aktuell genomförandeplan som innehåller dokumentation om delaktighet."
  },
  {
    "id": "U28131",
    "title": "Andel personer med en aktuell genomförandeplan som innehåller individuellt utformade mål."
  },
  {
    "id": "U28132",
    "title": "De dagliga verksamheterna har aktuella genomförandeplaner för deltagande personer."
  },
  {
    "id": "U28133",
    "title": "De dagliga verksamheterna har dokumentation om delaktighet i genomförandeplanen för deltagande personer"
  },
  {
    "id": "U28134",
    "title": "De dagliga verksamheterna har individuellt utformade mål i genomförandeplanen för deltagande personer"
  },
  {
    "id": "U28135",
    "title": "Metoder för inflytande - De dagliga verksamheterna håller regelbundna, gemensamma möten"
  },
  {
    "id": "U28136",
    "title": "Individuella kompetensutvecklingsplaner finns för samtliga i personalgruppen i den dagliga verksamheten."
  },
  {
    "id": "U28137",
    "title": "Samlad kompetensutvecklingsplan för personalen inom den dagliga verksamheten."
  },
  {
    "id": "U28138",
    "title": "Kompetensutveckling inom Alternativ och Kompletterande Kommunikation (AKK) har erbjudits till personalen på den dagliga verksamheten."
  },
  {
    "id": "U28139",
    "title": "Kontinuerlig handledning har erbjudits till personalen på den dagliga verksamheten."
  },
  {
    "id": "U28140",
    "title": "Den dagliga verksamheten har rutin för personalens agerande vid misstanke/upptäckt av att den enskilde har utsatts för våld eller andra övergrepp."
  },
  {
    "id": "U28141",
    "title": "Den dagliga verksamheten har rutin för personalens agerande vid misstanke/upptäckt av att den enskilde är beroende av/missbrukar läkemedel"
  },
  {
    "id": "U28142",
    "title": "Den dagliga verksamheten har rutin för personalens agerande vid misstanke/upptäckt av att den enskilde är beroende av/missbrukar alkohol eller andra beroendeframkallande medel (ej läkemedel)"
  },
  {
    "id": "U28143",
    "title": "Andel personer i den dagliga verksamheten med en aktuell genomförandeplan."
  },
  {
    "id": "U28144",
    "title": "Andel personer i den dagliga verksamheten med en aktuell genomförandeplan som innehåller dokumentation om delaktighet."
  },
  {
    "id": "U28145",
    "title": "Andel personer i den dagliga verksamheten med en aktuell genomförandeplan som innehåller individuellt utformade mål."
  },
  {
    "id": "U28146",
    "title": "På enheten används enskildas uppfattning för att utveckla verksamheten för deltagande personer"
  },
  {
    "id": "U28400",
    "title": "Boendeplatser enl. LSS § 9.9 där den boende har möjlighet till en individuellt anpassad aktivitet per dag utanför bostaden, andel (%) (-2016)"
  },
  {
    "id": "U28402",
    "title": "Boendeplatser enl. LSS § 9.9 där den boende kan ta emot gäster alla kvällar efter kl. 21.00, andel (%) (-2018)"
  },
  {
    "id": "U28403",
    "title": "Boendeplatser enl. LSS § 9.9 där den boende ges möjlighet att vara ute på aktiviteter som kräver personalstöd efter kl 21, en gång/månad, andel (%) (-2018)"
  },
  {
    "id": "U28404",
    "title": "Boendeplatser enl. LSS § 9.9 där den boende har tillgång till egen brevlåda som posten levererar till, andel (%) (-2018)"
  },
  {
    "id": "U28405",
    "title": "Boendeplatser enl. LSS § 9.9 där den boende kan bestämma över vilken mat (huvudmålet) som serveras, andel (%) (-2018)"
  },
  {
    "id": "U28406",
    "title": "Boendeplatser enl. LSS § 9.9 där hot eller våld mot brukare inte förekommit på boendet under de sex senaste månaderna, andel (%) (-2018)"
  },
  {
    "id": "U28414",
    "title": "Utredningstid i antal dagar från ansökan till beslut om LSS-insats (alla insatser), medelvärde"
  },
  {
    "id": "U28416",
    "title": "Boendeplatser enl. LSS § 9.9 där alla på boendet har möjlighet att äta huvudmålet tillsammans minst en gång per vecka, andel (%) (-2018)"
  },
  {
    "id": "U28417",
    "title": "Utredningstid i antal dagar från ansökan till beslut om LSS-insats (alla insatser), median"
  },
  {
    "id": "U28418",
    "title": "Väntetid i antal dagar från beslut till första erbjudna inflyttningsdatum avseende boende enl. LSS § 9.9, medelvärde"
  },
  {
    "id": "U28419",
    "title": "Väntetid i antal dagar från beslut till första erbjudna inflyttningsdatum avseende boende enl. LSS § 9.9, median"
  },
  {
    "id": "U28420",
    "title": "Väntetid i antal dagar från beslut till insats avseende kontaktperson enl. LSS, medelvärde"
  },
  {
    "id": "U28421",
    "title": "Väntetid i antal dagar från beslut till insats avseende kontaktperson enl. LSS, median"
  },
  {
    "id": "U28422",
    "title": "Boendeplatser enl. LSS § 9.9 där den boende har möjlighet att planera matsedel, handla livsmedel mm, andel (%) (-2018)"
  },
  {
    "id": "U28423",
    "title": "Kvalitetsaspekter LSS grupp- och serviceboende , andel (%) av maxpoäng (-2018)"
  },
  {
    "id": "U28434",
    "title": "Personer som deltar i daglig verksamhet enl. LSS där regelbundna möten genomförs där brukarna är med och bestämmer, andel (%)"
  },
  {
    "id": "U28435",
    "title": "Personer som deltar i daglig verksamhet enl. LSS där enhetens verksamhet är öppen under sommaren, andel (%)"
  },
  {
    "id": "U28436",
    "title": "Boendeplatser enl. LSS § 9.9 där den boende har möjlighet till internetuppkoppling i det egna rummet/lägenheten, andel (%) (-2018)"
  },
  {
    "id": "U28437",
    "title": "Information på kommunens webbplats på lättläst svenska för LSS, (Ja=1, Nej=0) (-2016)"
  },
  {
    "id": "U28439",
    "title": "Aktuell rutin för samordning mellan LSS och ekonomiskt bistånd, (Ja=1, Nej=0)"
  },
  {
    "id": "U28440",
    "title": "Aktuell rutin för samordning mellan LSS och missbruk, (Ja=1, Nej=0)"
  },
  {
    "id": "U28441",
    "title": "Aktuell rutin för samordning mellan LSS och socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U28442",
    "title": "Aktuell rutin för samordning mellan LSS-barn och barn och unga, (Ja=1, Nej=0)"
  },
  {
    "id": "U28443",
    "title": "Aktuell rutin för samordning mellan LSS-vuxen och barn och unga, (Ja=1, Nej=0)"
  },
  {
    "id": "U28448",
    "title": "Aktuell rutin för samordning mellan LSS och äldreomsorg, (Ja=1, Nej=0)"
  },
  {
    "id": "U28449",
    "title": "Aktuell överenskommelse om samverkan mellan LSS och Arbetsförmedlingen, (Ja=1, Nej=0)"
  },
  {
    "id": "U28451",
    "title": "Aktuell överenskommelse om samverkan mellan LSS och barn- och ungdomspsykiatrin, (Ja=1, Nej=0)"
  },
  {
    "id": "U28452",
    "title": "Aktuell överenskommelse om samverkan mellan LSS och barn- och ungdomsmedicin, (Ja=1, Nej=0)"
  },
  {
    "id": "U28453",
    "title": "Aktuell överenskommelse om samverkan mellan LSS och barn- och ungdomshabilitering, (Ja=1, Nej=0)"
  },
  {
    "id": "U28454",
    "title": "Aktuell överenskommelse om samverkan mellan LSS och vuxenpsykiatrin, (Ja=1, Nej=0)"
  },
  {
    "id": "U28455",
    "title": "Aktuell överenskommelse om samverkan mellan LSS och vuxenhabiliteringen, (Ja=1, Nej=0)"
  },
  {
    "id": "U28456",
    "title": "Aktuell samlad plan för personalens kompetensutveckling inom LSS-barn, (Ja=1, Nej=0)"
  },
  {
    "id": "U28457",
    "title": "Aktuell samlad plan för personalens kompetensutveckling inom LSS-vuxen, (Ja=1, Nej=0)"
  },
  {
    "id": "U28462",
    "title": "Systematisk uppföljning av resultat för att utveckla verksamheten inom LSS, (-2017 Ja=1, Nej=0. 2018- Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U28463",
    "title": "Systematisk uppföljning av biståndsbeslutade insatser till enskilda på gruppnivå utifrån kön inom LSS, (Ja=1, Nej=0)"
  },
  {
    "id": "U28464",
    "title": "Sammanställt resultaten av biståndsbeslutade insatser till enskilda på gruppnivå utifrån kön inom LSS, (Ja=2, Nej, men genomfört uppföljning=1, Nej=0)."
  },
  {
    "id": "U28465",
    "title": "Habiliteringsersättning till personer med funktionsnedsättning som deltar i daglig verksamhet enligt LSS, (Ja=1, Nej=0)"
  },
  {
    "id": "U28466",
    "title": "Ersättning för ledsagares omkostnader enligt SoL, (Ja=1, Nej=0)"
  },
  {
    "id": "U28471",
    "title": "Aktuell rutin för att inte röja skyddade personuppgifter inom LSS-barn, (Ja=1, Nej=0)"
  },
  {
    "id": "U28472",
    "title": "Aktuell rutin för att inte röja skyddade personuppgifter inom LSS-vuxen, (Ja=1, Nej=0)"
  },
  {
    "id": "U28473",
    "title": "Deltagit i daglig verksamhet LSS och fått arbete på den reguljära arbetsmarknaden, (Ja=1, Nej=0)"
  },
  {
    "id": "U28474",
    "title": "Deltagit i daglig verksamhet LSS och fått skyddat arbete, (Ja=1, Nej=0)"
  },
  {
    "id": "U28477",
    "title": "Uppsökande verksamhet riktad till personer med psykisk funktionsnedsättning, (Ja=1, Nej=0)"
  },
  {
    "id": "U28478",
    "title": "Öppen verksamhet till personer med psykisk funktionsnedsättning, (Ja=1, Nej=0)"
  },
  {
    "id": "U28479",
    "title": "Aktuell rutin för samordning mellan socialpsykiatri och ekonomiskt bistånd, (Ja=1, Nej=0)"
  },
  {
    "id": "U28480",
    "title": "Aktuell rutin för samordning mellan socialpsykiatri och missbruk, (Ja=1, Nej=0)"
  },
  {
    "id": "U28484",
    "title": "Aktuell rutin för samordning mellan socialpsykiatri och våld i nära relationer, (Ja=1, Nej=0) (-2016)"
  },
  {
    "id": "U28485",
    "title": "Aktuell rutin för samordning mellan socialpsykiatri och LSS, (Ja=1, Nej=0) (-2016)"
  },
  {
    "id": "U28486",
    "title": "Aktuell rutin för samordning mellan socialpsykiatri och äldreomsorg, (Ja=1, Nej=0) (-2016)"
  },
  {
    "id": "U28487",
    "title": "Aktuell överenskommelse om samverkan mellan socialpsykiatri och Arbetsförmedlingen, (Ja=1, Nej=0)"
  },
  {
    "id": "U28488",
    "title": "Aktuell överenskommelse om samverkan mellan socialpsykiatri och Försäkringskassan, (Ja=1, Nej=0)"
  },
  {
    "id": "U28489",
    "title": "Aktuell samlad plan för personalens kompetensutveckling inom socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U28491",
    "title": "Case management i form av integrerade team till personer med psykisk sjukdom, (Ja=1, Nej=0)"
  },
  {
    "id": "U28493",
    "title": "Supported employment enligt IPS-modellen till personer med psykisk funktionsnedsättning, (Ja=1, Nej=0)"
  },
  {
    "id": "U28494",
    "title": "Social färdighetsträning i forma av ESL-modellen (ett självständigt liv) för personer med psykisk funktionsnedsättning, (Ja=1, Nej=0)"
  },
  {
    "id": "U28497",
    "title": "Systematisk uppföljning av resultat för att utveckla verksamheten inom socialpsykiatri, (Ja=2, Delvis= 1, Nej=0)"
  },
  {
    "id": "U28498",
    "title": "Systematisk uppföljning av biståndsbeslutade insatser till enskilda på gruppnivå utifrån kön inom socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U28499",
    "title": "Sammanställt resultaten av biståndsbeslutade insatser till enskilda på gruppnivå utifrån kön inom socialpsykiatri, (Ja=2, Nej, men genomfört uppföljning=1, Nej=0). (-2016)"
  },
  {
    "id": "U28500",
    "title": "Personligt ombud (PO) till personer med psykisk funktionsnedsättning, (Ja=1, Nej=0)"
  },
  {
    "id": "U28501",
    "title": "Brukarstyrd brukarrevision av verksamheter inom socialpsykiatri, (Ja=1, Nej=0) (-2016)"
  },
  {
    "id": "U28502",
    "title": "Brukarstyrd brukarrevision för att utveckla verksamheter inom socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U28503",
    "title": "Brukarinflytandesamordnare (BISAM) placerad på ledningsnivå inom socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U28506",
    "title": "Aktuell rutin för att inte röja skyddade personuppgifter inom socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U28507",
    "title": "Deltagit i daglig verksamhet socialpsykiatri och fått arbete på den reguljära arbetsmarknaden, (Ja=1, Nej=0)"
  },
  {
    "id": "U28508",
    "title": "Deltagit i daglig verksamhet socialpsykiatri och fått skyddat arbete, (Ja=1, Nej=0)"
  },
  {
    "id": "U28509",
    "title": "Krisberedskap ingår vid upphandling av Bostad med särskild service för barn, LSS, (Ja=1, Nej=0)"
  },
  {
    "id": "U28510",
    "title": "Krisberedskap ingår vid upphandling av Bostad med särskild service för vuxna, SoL, (Ja=1, Nej=0)"
  },
  {
    "id": "U28511",
    "title": "Krisberedskap ingår vid upphandling av Bostad med särskild service för vuxna, LSS, (Ja=1, Nej=0)"
  },
  {
    "id": "U28512",
    "title": "Krisberedskap ingår vid upphandling av permanent särskilt boende, SoL, (Ja=1, Nej=0) (-2017)"
  },
  {
    "id": "U28513",
    "title": "Plan för evakuering av personer för barn och unga i Bostad med särskild service, LSS i egen regi, (Ja=1, Nej=0)"
  },
  {
    "id": "U28514",
    "title": "Plan för evakuering av personer för vuxna i Bostad med särskild service, LSS i egen regi, (Ja=1, Nej=0)"
  },
  {
    "id": "U28515",
    "title": "Beredskapsplan för höga temperaturer inom bostad med särskild service för barn och unga (LSS), (Ja=1, Nej=0)"
  },
  {
    "id": "U28516",
    "title": "Beredskapsplan för höga temperaturer inom bostad med särskild service för vuxna (LSS), (Ja=1, Nej=0)"
  },
  {
    "id": "U28517",
    "title": "Enheter enl. LSS § 9.9 där det är möjligt att bli sambo, andel (%) (-2018)"
  },
  {
    "id": "U28518",
    "title": "Brukarbedömning gruppbostad LSS  - Brukaren får bestämma om saker som är viktiga hemma, andel (%)"
  },
  {
    "id": "U28519",
    "title": "Brukarbedömning gruppbostad LSS - Brukaren får den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U28520",
    "title": "Brukarbedömning gruppbostad LSS  - Personalen bryr sig om brukaren, andel (%)"
  },
  {
    "id": "U28521",
    "title": "Brukarbedömning gruppbostad LSS  - Personalen pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U28522",
    "title": "Brukarbedömning gruppbostad LSS  - Brukaren känner sig trygg med alla i personalen, andel (%)"
  },
  {
    "id": "U28523",
    "title": "Brukarbedömning gruppbostad LSS  - Brukaren är aldrig rädd för något hemma, andel (%)"
  },
  {
    "id": "U28524",
    "title": "Brukarbedömning gruppbostad LSS  - Brukaren trivs alltid hemma, andel (%)"
  },
  {
    "id": "U28525",
    "title": "Brukarbedömning servicebostad LSS - Brukaren får bestämma om saker som är viktiga hemma, andel (%)"
  },
  {
    "id": "U28526",
    "title": "Brukarbedömning servicebostad LSS - Brukaren får den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U28527",
    "title": "Brukarbedömning servicebostad LSS - Personalen bryr sig om brukaren, andel (%)"
  },
  {
    "id": "U28528",
    "title": "Brukarbedömning servicebostad LSS - Personalen pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U28529",
    "title": "Brukarbedömning servicebostad LSS - Brukaren känner sig trygg med alla i personalen, andel (%)"
  },
  {
    "id": "U28530",
    "title": "Brukarbedömning servicebostad LSS - Brukaren är aldrig rädd för något hemma, andel (%)"
  },
  {
    "id": "U28531",
    "title": "Brukarbedömning servicebostad LSS - Brukaren trivs med alla i boendepersonalen, andel (%)"
  },
  {
    "id": "U28532",
    "title": "Brukarbedömning daglig verksamhet LSS  - Brukaren får bestämma om saker som är viktiga, andel (%)"
  },
  {
    "id": "U28533",
    "title": "Brukarbedömning daglig verksamhet LSS - Brukaren får den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U28534",
    "title": "Brukarbedömning daglig verksamhet LSS - Personalen bryr sig om brukaren, andel (%)"
  },
  {
    "id": "U28535",
    "title": "Brukarbedömning  daglig verksamhet LSS  - Personalen pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U28536",
    "title": "Brukarbedömning  daglig verksamhet LSS  - Brukaren känner sig trygg med alla i personalen, andel (%)"
  },
  {
    "id": "U28537",
    "title": "Brukarbedömning  daglig verksamhet LSS  - Brukaren är aldrig rädd för något på sin dagliga verksamhet, andel (%)"
  },
  {
    "id": "U28538",
    "title": "Brukarbedömning  daglig verksamhet LSS  - Brukaren trivs alltid på sin dagliga verksamhet, andel (%)"
  },
  {
    "id": "U28539",
    "title": "Boendeplatser enl. LSS § 9.9 där den boende har möjlighet till så många individuellt anpassade aktiviteter i veckan som hen önskar, andel (%) (-2018)"
  },
  {
    "id": "U28540",
    "title": "Aktuell överenskommelse om samverkan mellan LSS barn och Försäkringskassan, (Ja=1, Nej=0)"
  },
  {
    "id": "U28541",
    "title": "Aktuell överenskommelse om samverkan mellan LSS vuxna och Försäkringskassan, (Ja=1, Nej=0)"
  },
  {
    "id": "U28544",
    "title": "Använt IBIC (Individens behov i centrum) vid alla utredningar - LSS vuxna, (Ja, för alla=2, Ja, men inte för alla=1, Nej=0)"
  },
  {
    "id": "U28545",
    "title": "Använt IBIC (Individens behov i centrum) vid alla uppföljningar - LSS vuxna, (Ja, för alla=2, Ja, men inte för alla=1, Nej=0)"
  },
  {
    "id": "U28546",
    "title": "Använder standardiserade bedömningsmetoden FREDA-kortfrågor för att upptäcka våldsutsatthet hos enskilda vuxna, LSS-vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U28547",
    "title": "Använder standardiserad bedömningsmetoden AUDIT för att upptäcka riskfylld alkoholkonsumtion-LSS vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U28548",
    "title": "Använder standardiserad bedömningsmetoden DUDIT för att upptäcka drogrelaterade problem - LSS vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U28549",
    "title": "Aktuell rutin att pröva möjlighet till arbete eller praktikplats , (Ja=1, Nej=0)"
  },
  {
    "id": "U28550",
    "title": "Aktuell rutin för information om samordnad individuell plan (SIP) inom LSS-barn, (Ja=1, Nej=0)"
  },
  {
    "id": "U28551",
    "title": "Aktuell rutin för information om samordnad individuell plan (SIP) inom LSS-vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U28553",
    "title": "IBIC (Individens behov i centrum) vid alla utredningar inom socialpsykiatri, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U28554",
    "title": "IBIC (Individens behov i centrum) vid alla uppföljningar inom socialpsykiatri, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U28555",
    "title": "Använder standardiserade bedömningsmetoden FREDA-kortfrågor för att upptäcka våldsutsatthet hos enskilda vuxna inom socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U28556",
    "title": "Använder AUDIT för att upptäcka riskfylld alkoholkonsumtion inom socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U28557",
    "title": "Använder DUDIT  för att upptäcka drogrelaterade problem inom socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U28558",
    "title": "Aktuell rutin för information om samordnad individuell plan (SIP) inom socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U28559",
    "title": "I kommunen används enskildas uppfattning för att utveckla LSS-verksamheten, (Ja=1, Nej=0). Källa:Socialstyrelsens kommunenkät ÖJ socialtjänst."
  },
  {
    "id": "U28560",
    "title": "Brukarbedömning gruppbostad LSS - Brukaren vet vem hen ska kontakta om något är dåligt hemma, andel (%)"
  },
  {
    "id": "U28561",
    "title": "Brukarbedömning daglig verksamhet LSS - Verksamheten är viktig för brukaren, andel (%)"
  },
  {
    "id": "U28562",
    "title": "Brukarbedömning daglig verksamhet LSS - Brukaren vet vem hen ska kontakta om något är dåligt, andel (%)"
  },
  {
    "id": "U28563",
    "title": "Brukarbedömning boende LSS totalt - Brukaren får alltid den hjälp som behövs hemma, andel (%)"
  },
  {
    "id": "U28564",
    "title": "Brukarbedömning boende LSS totalt - Personalen bryr sig om brukaren, andel (%)"
  },
  {
    "id": "U28565",
    "title": "Brukarbedömning boende LSS totalt - Personalen pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U28566",
    "title": "Brukarbedömning boende LSS totalt  - All personal förstår brukaren, andel (%)"
  },
  {
    "id": "U28567",
    "title": "Brukarbedömning boende LSS totalt - Brukaren känner sig trygg med alla i personalen, andel (%)"
  },
  {
    "id": "U28568",
    "title": "Brukarbedömning boende LSS totalt - Brukaren är aldrig rädd för något hemma, andel (%)"
  },
  {
    "id": "U28569",
    "title": "Brukarbedömning boende LSS totalt - Brukaren vet vem hen ska kontakta om något är dåligt hemma, andel (%)"
  },
  {
    "id": "U28570",
    "title": "Brukarbedömning boende LSS totalt - Brukaren trivs alltid hemma"
  },
  {
    "id": "U28571",
    "title": "Brukarbedömning servicebostad LSS - Brukaren vet vem hen ska kontakta om något är dåligt hemma, andel (%)"
  },
  {
    "id": "U28576",
    "title": "Brukarbedömning gruppbostad LSS - Brukaren får ibland den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U28577",
    "title": "Brukarbedömning gruppbostad LSS - Brukaren får aldrig den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U28578",
    "title": "Brukarbedömning gruppbostad LSS - Några i personalen pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U28579",
    "title": "Brukarbedömning gruppbostad LSS - Personalen pratar inte så brukaren förstår, andel (%)"
  },
  {
    "id": "U28580",
    "title": "Brukarbedömning gruppbostad LSS - Personalen bryr sig ibland om brukaren, andel (%)"
  },
  {
    "id": "U28581",
    "title": "Brukarbedömning gruppbostad LSS - Personalen bryr sig inte om brukaren, andel (%)"
  },
  {
    "id": "U28582",
    "title": "Brukarbedömning gruppbostad LSS - Brukaren känner sig trygg med några i personalen, andel (%)"
  },
  {
    "id": "U28583",
    "title": "Brukarbedömning gruppbostad LSS - Brukaren känner sig inte trygg med någon i personalen, andel (%)"
  },
  {
    "id": "U28584",
    "title": "Brukarbedömning gruppbostad LSS - Brukaren är ibland rädd för något hemma, andel (%)"
  },
  {
    "id": "U28585",
    "title": "Brukarbedömning gruppbostad LSS - Brukaren är ofta rädd för något hemma, andel (%)"
  },
  {
    "id": "U28586",
    "title": "Brukarbedömning gruppbostad LSS - Brukaren trivs hemma ibland, andel (%)"
  },
  {
    "id": "U28587",
    "title": "Brukarbedömning gruppbostad LSS - Brukaren trivs aldrig hemma, andel (%)"
  },
  {
    "id": "U28588",
    "title": "Brukarbedömning servicebostad LSS - Får ibland bestämma om saker som är viktiga hemma, andel (%)"
  },
  {
    "id": "U28589",
    "title": "Brukarbedömning servicebostad LSS - Får inte bestämma om saker som är viktiga hemma, andel (%)"
  },
  {
    "id": "U28590",
    "title": "Brukarbedömning servicebostad LSS - Brukaren får ibland den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U28591",
    "title": "Brukarbedömning servicebostad LSS - Brukaren får aldrig den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U28592",
    "title": "Brukarbedömning servicebostad LSS - Några i personalen pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U28593",
    "title": "Brukarbedömning servicebostad LSS - Personalen pratar inte så brukaren förstår, andel (%)"
  },
  {
    "id": "U28594",
    "title": "Brukarbedömning servicebostad LSS - Personalen bryr sig ibland om brukaren, andel (%)"
  },
  {
    "id": "U28595",
    "title": "Brukarbedömning servicebostad LSS - Personalen bryr sig inte om brukaren, andel (%)"
  },
  {
    "id": "U28596",
    "title": "Brukarbedömning servicebostad LSS - Brukaren känner sig trygg med några i personalen, andel (%)"
  },
  {
    "id": "U28597",
    "title": "Brukarbedömning servicebostad LSS - Brukaren känner sig inte trygg med någon i personalen, andel (%)"
  },
  {
    "id": "U28598",
    "title": "Brukarbedömning servicebostad LSS - Brukaren är ibland rädd för något hemma, andel (%)"
  },
  {
    "id": "U28599",
    "title": "Brukarbedömning servicebostad LSS - Brukaren är ofta rädd för något hemma, andel (%)"
  },
  {
    "id": "U28600",
    "title": "Brukarbedömning servicebostad LSS - Brukaren trivs med några i boendepersonalen, andel (%)"
  },
  {
    "id": "U28601",
    "title": "Brukarbedömning servicebostad LSS - Brukaren trivs inte med någon i boendepersonalen, andel (%)"
  },
  {
    "id": "U28602",
    "title": "Brukarbedömning daglig verksamhet LSS - Brukaren får ibland bestämma om saker som är viktiga, andel (%)"
  },
  {
    "id": "U28603",
    "title": "Brukarbedömning daglig verksamhet LSS - Brukaren får inte bestämma om saker som är viktiga, andel (%)"
  },
  {
    "id": "U28604",
    "title": "Brukarbedömning daglig verksamhet LSS - Brukaren får ibland den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U28605",
    "title": "Brukarbedömning daglig verksamhet LSS - Brukaren får aldrig den hjälp hen vill ha, andel (%)"
  },
  {
    "id": "U28606",
    "title": "Brukarbedömning daglig verksamhet LSS - Personalen pratar inte så brukaren förstår, andel (%)"
  },
  {
    "id": "U28607",
    "title": "Brukarbedömning daglig verksamhet LSS - Personalen pratar inte så brukaren förstå, andel (%)"
  },
  {
    "id": "U28608",
    "title": "Brukarbedömning daglig verksamhet LSS - Personalen bryr sig ibland om brukaren, andel (%)"
  },
  {
    "id": "U28609",
    "title": "Brukarbedömning daglig verksamhet LSS - Personalen bryr sig inte om brukaren, andel (%)"
  },
  {
    "id": "U28610",
    "title": "Brukarbedömning daglig verksamhet LSS -  Brukaren känner sig trygg med några i personalen, andel (%)"
  },
  {
    "id": "U28611",
    "title": "Brukarbedömning daglig verksamhet LSS - Brukaren känner sig inte trygg med någon i personalen, andel (%)"
  },
  {
    "id": "U28612",
    "title": "Brukarbedömning daglig verksamhet LSS  - Brukaren är ibland rädd för något på sin dagliga verksamhet, andel (%)"
  },
  {
    "id": "U28613",
    "title": "Brukarbedömning daglig verksamhet LSS - Brukaren är ofta rädd för något på sin dagliga verksamhet, andel (%)"
  },
  {
    "id": "U28614",
    "title": "Brukarbedömning daglig verksamhet LSS - Brukaren trivs på sin dagliga verksamhet ibland, andel (%)"
  },
  {
    "id": "U28615",
    "title": "Brukarbedömning daglig verksamhet LSS - Brukaren trivs aldrig på sin dagliga verksamhet, andel (%)"
  },
  {
    "id": "U28616",
    "title": "Brukarbedömning Personlig assistans - Brukaren har varit med och bestämt alla sina assistenter, andel (%)"
  },
  {
    "id": "U28617",
    "title": "Brukarbedömning Personlig assistans - Brukaren har varit med och bestämt några av sina assistenter, andel (%)"
  },
  {
    "id": "U28618",
    "title": "Brukarbedömning Personlig assistans - Brukaren har inte varit med och bestämt sina assistenter, andel (%)"
  },
  {
    "id": "U28619",
    "title": "Brukarbedömning Personlig assistans - Brukaren får den hjälp hen vill ha av assistenterna, andel (%)"
  },
  {
    "id": "U28620",
    "title": "Brukarbedömning Personlig assistans - Brukaren får ibland den hjälp hen vill ha av assistenterna, andel (%)"
  },
  {
    "id": "U28621",
    "title": "Brukarbedömning Personlig assistans - Brukaren får inte den hjälp hen vill ha av assistenterna, andel (%)"
  },
  {
    "id": "U28622",
    "title": "Brukarbedömning Personlig assistans - Assistenterna bryr sig om brukaren, andel (%)"
  },
  {
    "id": "U28623",
    "title": "Brukarbedömning Personlig assistans - Assistenterna bryr sig om brukaren ibland, andel (%)"
  },
  {
    "id": "U28624",
    "title": "Brukarbedömning Personlig assistans - Assistenterna bryr sig inte om brukaren, andel (%)"
  },
  {
    "id": "U28625",
    "title": "Brukarbedömning Personlig assistans - Alla assistenter pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U28626",
    "title": "Brukarbedömning Personlig assistans - Några av assistenterna pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U28627",
    "title": "Brukarbedömning Personlig assistans - Ingen av assistenterna pratar så brukaren förstår, andel (%)"
  },
  {
    "id": "U28628",
    "title": "Brukarbedömning Personlig assistans - Alla assistenter förstår brukaren, andel (%)"
  },
  {
    "id": "U28629",
    "title": "Brukarbedömning Personlig assistans - Några av assistenterna förstår brukaren, andel (%)"
  },
  {
    "id": "U28630",
    "title": "Brukarbedömning Personlig assistans - Ingen av assistenterna förstår brukaren, andel (%)"
  },
  {
    "id": "U28631",
    "title": "Brukarbedömning Personlig assistans - Brukaren känner sig trygg med alla sina assistenter, andel (%)"
  },
  {
    "id": "U28632",
    "title": "Brukarbedömning Personlig assistans - Brukaren känner sig trygg med några sina assistenter, andel (%)"
  },
  {
    "id": "U28633",
    "title": "Brukarbedömning Personlig assistans - Brukaren känner sig inte trygg med någon av sina assistenter, andel (%)"
  },
  {
    "id": "U28634",
    "title": "Brukarbedömning Personlig assistans - Brukaren kan göra det hen vill med hjälp av sina assistenter, andel (%)"
  },
  {
    "id": "U28635",
    "title": "Brukarbedömning Personlig assistans - Brukaren kan ibland göra det hen vill med hjälp av sina assistenter, andel (%)"
  },
  {
    "id": "U28636",
    "title": "Brukarbedömning Personlig assistans - Brukaren kan inte göra det hen vill med hjälp av sina assistenter, andel (%)"
  },
  {
    "id": "U28637",
    "title": "Brukarbedömning Personlig assistans - Brukaren vet vem hen ska prata med om något fungerar dåligt med assistenterna, andel (%)"
  },
  {
    "id": "U28638",
    "title": "Brukarbedömning Personlig assistans - Brukaren trivs med sina assistenter, andel (%)"
  },
  {
    "id": "U28639",
    "title": "Brukarbedömning Personlig assistans - Brukaren trivs ibland med sina assistenter, andel (%)"
  },
  {
    "id": "U28640",
    "title": "Brukarbedömning Personlig assistans - Brukaren trivs inte med sina assistenter, andel (%)"
  },
  {
    "id": "U28641",
    "title": "Brukarbedömning gruppbostad LSS - All personal förstår brukaren, andel (%)"
  },
  {
    "id": "U28642",
    "title": "Brukarbedömning gruppbostad LSS - Några i personalen förstår brukaren, andel (%)"
  },
  {
    "id": "U28643",
    "title": "Brukarbedömning gruppbostad LSS - Ingen i personalen förstår brukaren, andel (%)"
  },
  {
    "id": "U28644",
    "title": "Brukarbedömning servicebostad LSS - All personal  förstår brukaren, andel (%)"
  },
  {
    "id": "U28645",
    "title": "Brukarbedömning servicebostad LSS - Några i personalen förstår brukaren, andel (%)"
  },
  {
    "id": "U28646",
    "title": "Brukarbedömning servicebostad LSS - Ingen i personalen förstår brukaren, andel (%)"
  },
  {
    "id": "U28647",
    "title": "Brukarbedömning daglig verksamhet LSS - Några i personalen förstår brukaren, andel (%)"
  },
  {
    "id": "U28648",
    "title": "Brukarbedömning daglig verksamhet LSS - Ingen i personalen förstår brukaren, andel (%)"
  },
  {
    "id": "U28649",
    "title": "Brukarbedömning  boende särskild service SoL - All personal förstår brukaren, andel (%)"
  },
  {
    "id": "U28650",
    "title": "Brukarbedömning  boende särskild service SoL - Några i personalen förstår brukaren, andel (%)"
  },
  {
    "id": "U28651",
    "title": "Brukarbedömning  boende särskild service SoL - Ingen i personalen förstår brukaren, andel (%)"
  },
  {
    "id": "U28652",
    "title": "Brukarbedömning boendestöd SoL - All personal förstår brukaren, andel (%)"
  },
  {
    "id": "U28653",
    "title": "Brukarbedömning boendestöd SoL - Några i personalen förstår brukaren, andel (%)"
  },
  {
    "id": "U28654",
    "title": "Brukarbedömning boendestöd SoL - Ingen i personalen förstår brukaren, andel (%)"
  },
  {
    "id": "U28655",
    "title": "Brukarbedömning sysselsättning SoL - All personal förstår brukaren, andel (%)"
  },
  {
    "id": "U28656",
    "title": "Brukarbedömning sysselsättning SoL - Några i personalen förstår brukaren, andel (%)"
  },
  {
    "id": "U28657",
    "title": "Brukarbedömning sysselsättning SoL - Ingen i personalen förstår brukaren, andel (%)"
  },
  {
    "id": "U28658",
    "title": "Brukarbedömning daglig verksamhet LSS - All personal  förstår brukaren, andel (%)"
  },
  {
    "id": "U28660",
    "title": "Aktuell kontinuitetsplan - Bostad med särskild service, LSS-barn , (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U28661",
    "title": "Aktuell kontinuitetsplan - Bostad med särskild service, LSS-vuxen, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U28663",
    "title": "Brukarbedömning boende LSS totalt - Brukaren får bestämma om saker som är viktiga hemma, andel (%)"
  },
  {
    "id": "U30200",
    "title": "Medarbetarengagemang (HME) individ- och familjeomsorg - Totalindex"
  },
  {
    "id": "U30201",
    "title": "Medarbetarengagemang (HME) individ- och familjeomsorg - Motivationsindex"
  },
  {
    "id": "U30202",
    "title": "Medarbetarengagemang (HME) individ- och familjeomsorg - Ledarskapsindex"
  },
  {
    "id": "U30203",
    "title": "Medarbetarengagemang (HME) individ- och familjeomsorg - Styrningsindex"
  },
  {
    "id": "U30400",
    "title": "Nöjd Medborgar-Index - Stöd för utsatta personer"
  },
  {
    "id": "U30401",
    "title": "Informationsindex för kommunens webbplats - Individ- och familjeomsorg"
  },
  {
    "id": "U30424",
    "title": "Information på kommunens webbplats på lättläst svenska för hemlöshet, (Ja=1, Nej=0)"
  },
  {
    "id": "U30425",
    "title": "Talad information på kommunens webbplats för hemlöshet, (Ja=1, Nej=0)"
  },
  {
    "id": "U30426",
    "title": "Uppsökande verksamhet för akut hemlösa, (Ja=1, Nej=0)"
  },
  {
    "id": "U30427",
    "title": "Uppsökande verksamhet för de som riskerar förlora sitt boende, (Ja=1, Nej=0)"
  },
  {
    "id": "U30428",
    "title": "Aktuell övergripande plan för att motverka hemlöshet, (Ja=1, Nej=0)"
  },
  {
    "id": "U30429",
    "title": "Aktuell rutin för samordning mellan hemlöshet och ekonomiskt bistånd, (Ja=1, Nej=0)"
  },
  {
    "id": "U30430",
    "title": "Aktuell rutin för samordning mellan hemlöshet och missbruk, (Ja=1, Nej=0)"
  },
  {
    "id": "U30431",
    "title": "Aktuell rutin för samordning mellan hemlöshet och socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U30432",
    "title": "Aktuell rutin för samordning mellan hemlöshet och barn och unga, (Ja=1, Nej=0)"
  },
  {
    "id": "U30433",
    "title": "Aktuell rutin för samordning mellan hemlöshet och våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U30434",
    "title": "Aktuell rutin för samordning mellan hemlöshet och LSS, (Ja=1, Nej=0)"
  },
  {
    "id": "U30435",
    "title": "Aktuell rutin för samordning mellan hemlöshet och äldreomsorg, (Ja=1, Nej=0)"
  },
  {
    "id": "U30436",
    "title": "Aktuell överenskommelse om samverkan mellan hemlöshet och frivilligorganisationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U30437",
    "title": "Aktuell överenskommelse på övergripande nivå mellan hemlöshet och bostadsföretag/hyresvärdar, (Ja=2, Ja=, med vissa=1, Nej=0)"
  },
  {
    "id": "U30438",
    "title": "Aktuell överenskommelse i enskilda ärenden mellan hemlöshet och bostadsföretag/hyresvärdar, (Ja=2, Ja=, med vissa=1, Nej=0)"
  },
  {
    "id": "U30439",
    "title": "Aktuell samlad plan för personalens kompetensutveckling inom hemlöshet, (Ja=1, Nej=0)"
  },
  {
    "id": "U30440",
    "title": "Aktuell rutin vid indikation på att en vuxen utsatts för våld inom hemlöshet, (Ja=1, Nej=0)"
  },
  {
    "id": "U30441",
    "title": "Standardiserade bedömningsmetoder AUDIT/DUDIT inom hemlöshet, (Ja=2, Delvis=1, Nej=0) (-2016)"
  },
  {
    "id": "U30442",
    "title": "Aktuell rutin för att förhindra att förhindra avhysning av barnfamiljer (Ja=1, Nej=0)"
  },
  {
    "id": "U30443",
    "title": "Rutin för information om samordnad individuell plan inom hemlöshet, (Ja=1, Nej=0)"
  },
  {
    "id": "U30444",
    "title": "Rutin för information om kopia på journal/akt inom hemlöshet, (Ja=1, Nej=0)"
  },
  {
    "id": "U30445",
    "title": "Aktuell rutin för att inte röja skyddade personuppgifter inom hemlöshet, (Ja=1, Nej=0) (-2016)"
  },
  {
    "id": "U30446",
    "title": "Bostadsmarknadsläge i kommunen totalt, (Överskott=2, Balans=1, Underskott=0)"
  },
  {
    "id": "U30447",
    "title": "Brukarbedömning individ- och familjeomsorg totalt  - få kontakt, andel (%)"
  },
  {
    "id": "U30448",
    "title": "Brukarbedömning individ- och familjeomsorg totalt  - tydlig information, andel (%)"
  },
  {
    "id": "U30449",
    "title": "Brukarbedömning individ- och familjeomsorg totalt  - visar förståelse, andel (%)"
  },
  {
    "id": "U30450",
    "title": "Brukarbedömning individ- och familjeomsorg totalt  - inflytande, andel (%)"
  },
  {
    "id": "U30451",
    "title": "Brukarbedömning individ- och familjeomsorg totalt  - påverka hjälp, andel (%)"
  },
  {
    "id": "U30452",
    "title": "Brukarbedömning individ- och familjeomsorg totalt  - helhetssyn, andel (%)"
  },
  {
    "id": "U30453",
    "title": "Brukarbedömning individ- och familjeomsorg totalt  - förbättrad situation, andel (%)"
  },
  {
    "id": "U30456",
    "title": "Bostadsmarknadsläget i kommunen, särskilt boende äldre (Överskott=2, Balans=1, Underskott=0)"
  },
  {
    "id": "U30457",
    "title": "Bostadsmarknadsläget i kommunen, studenter, (Överskott=2, Balans=1, Underskott=0)"
  },
  {
    "id": "U30458",
    "title": "Bostadsmarknadsläget i kommunen, personer med funktionsnedsättning, (Överskott=2, Balans=1, Underskott=0)"
  },
  {
    "id": "U30459",
    "title": "Bostadsmarknadsläget i kommunen, nyanlända, (Överskott=2, Balans=1, Underskott=0)"
  },
  {
    "id": "U30460",
    "title": "Bostadsmarknadsläget i kommunen, ungdomar, (Överskott=2, Balans=1, Underskott=0)"
  },
  {
    "id": "U30900",
    "title": "Brukarbedömning individ- och familjeomsorg totalt, svarsfrekvens (%)"
  },
  {
    "id": "U30901",
    "title": "Brukarbedömning individ- och familjeomsorg totalt, antal svar"
  },
  {
    "id": "U31001",
    "title": "Utbetalt ekonomiskt bistånd (enl SoS inkl flyktinghushåll), kr/inv"
  },
  {
    "id": "U31020",
    "title": "Utbetalt ekonomiskt bistånd till ensamstående person utan barn, samtliga försörjningshinder, kr/inv"
  },
  {
    "id": "U31021",
    "title": "Utbetalt ekonomiskt bistånd till ensamstående person utan barn, arbetslös, kr/inv"
  },
  {
    "id": "U31022",
    "title": "Utbetalt ekonomiskt bistånd till ensamstående person utan barn, sjukskrivning, kr/inv"
  },
  {
    "id": "U31023",
    "title": "Utbetalt ekonomiskt bistånd till ensamstående person utan barn, aktivitets- och sjukersättning, kr/inv"
  },
  {
    "id": "U31024",
    "title": "Utbetalt ekonomiskt bistånd till ensamstående person utan barn, arbetshinder, kr/inv"
  },
  {
    "id": "U31025",
    "title": "Utbetalt ekonomiskt bistånd till person med partner och/eller barn, samtliga försörjningshinder, kr/inv"
  },
  {
    "id": "U31026",
    "title": "Utbetalt ekonomiskt bistånd till person med partner och/eller barn, arbetslös, kr/inv"
  },
  {
    "id": "U31027",
    "title": "Utbetalt ekonomiskt bistånd till person med partner och/eller barn, sjukskrivning, kr/inv"
  },
  {
    "id": "U31028",
    "title": "Utbetalt ekonomiskt bistånd till person med partner och/eller barn, aktivitets- och sjukersättning, kr/inv"
  },
  {
    "id": "U31029",
    "title": "Utbetalt ekonomiskt bistånd till person med partner och/eller barn, arbetshinder, kr/inv"
  },
  {
    "id": "U31030",
    "title": "Utbetalt ekonomiskt bistånd totalt, kr/inv"
  },
  {
    "id": "U31402",
    "title": "Väntetid i antal dagar från ansökan till beslut om försörjningsstöd, medelvärde"
  },
  {
    "id": "U31403",
    "title": "Väntetid i antal dagar från ansökan till beslut om försörjningsstöd, median"
  },
  {
    "id": "U31462",
    "title": "Ej återaktualiserade vuxna personer med försörjningsstöd ett år efter avslutat försörjningsstöd, andel (%)"
  },
  {
    "id": "U31463",
    "title": "Väntetid i antal dagar från ansökantill beslut inom försörjningsstöd, väntat längre än 14 dagar (%)."
  },
  {
    "id": "U31466",
    "title": "Socialjour tillgänglig utanför kontorstid, (Ja=1, Nej=0)"
  },
  {
    "id": "U31467",
    "title": "Väntetid för personligt nybesök vid ekonomiskt bistånd, (Max 14 dagar = 1, 15 dagar eller mer = 0)"
  },
  {
    "id": "U31468",
    "title": "Aktuell rutin för samordning mellan ekonomiskt bistånd och missbruk, (Ja=1, Nej=0)"
  },
  {
    "id": "U31469",
    "title": "Aktuell rutin för samordning mellan ekonomiskt bistånd och socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U31473",
    "title": "Aktuell rutin för samordning mellan ekonomiskt bistånd och barn och unga, (Ja=1, Nej=0)"
  },
  {
    "id": "U31474",
    "title": "Aktuell rutin för samordning mellan ekonomiskt bistånd och LSS, (Ja=1, Nej=0)"
  },
  {
    "id": "U31475",
    "title": "Aktuell rutin för samordning mellan ekonomiskt bistånd och arbetsmarknadsinsatser, (Ja=1, Nej=0)"
  },
  {
    "id": "U31476",
    "title": "Aktuell överenskommelse om samverkan mellan ekonomiskt bistånd och Arbetsförmedlingen, (Ja=1, Nej=0)"
  },
  {
    "id": "U31477",
    "title": "Aktuell överenskommelse om samverkan mellan ekonomiskt bistånd och Försäkringskassan, (Ja=1, Nej=0)"
  },
  {
    "id": "U31478",
    "title": "Aktuell överenskommelse om samverkan mellan ekonomiskt bistånd och primärvården, (Ja=1, Nej=0)"
  },
  {
    "id": "U31479",
    "title": "Aktuell överenskommelse om samverkan mellan ekonomiskt bistånd och psykiatrin, (Ja=1, Nej=0)"
  },
  {
    "id": "U31480",
    "title": "Aktuell samlad plan för personalens kompetensutveckling inom ekonomiskt bistånd, (Ja=1, Nej=0)"
  },
  {
    "id": "U31482",
    "title": "Erbjuder minst en kommunal arbetsmarknadsinsats till alla personer 18-24 år inom ekonomiskt bistånd, (Ja, för alla=2, Ja, men inte för alla=1, Nej=0)"
  },
  {
    "id": "U31483",
    "title": "Erbjuder minst en kommunal arbetsmarknadsinsats till alla personer över 24 inom ekonomiskt bistånd, (Ja, för alla=2, Ja, men inte för alla=1, Nej=0)"
  },
  {
    "id": "U31484",
    "title": "Erbjuder enklare hushållsekonomisk rådgivning inom ekonomiskt bistånd, (Ja=1, Nej=0)"
  },
  {
    "id": "U31485",
    "title": "Strukturerad utredningsmall används i utredningar inom ekonomiskt bistånd, (Ja, alla=2, Ja, men inte alla=1, Nej=0)"
  },
  {
    "id": "U31488",
    "title": "Systematisk uppföljning av resultat för att utveckla verksamheten inom ekonomiskt bistånd, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U31489",
    "title": "Systematisk uppföljning med könsperspektiv inom ekonomiskt bistånd, (Ja=1, Nej=0)"
  },
  {
    "id": "U31490",
    "title": "Systematisk uppföljning med könsperspektiv inom ekonomiskt bistånd för att utveckla verksamheten, (-2017 Ja=1, Nej=0. 2018- 2=Ja, 1=Delvis och 0=Nej)"
  },
  {
    "id": "U31491",
    "title": "Aktuell rutin för att förhindra att barnfamiljer vräks, (Ja=1, Nej=0)"
  },
  {
    "id": "U31492",
    "title": "Personer inom ekonomiskt bistånd har tillgång till juridiskt stöd, (Ja=1, Nej=0) (-2017)"
  },
  {
    "id": "U31493",
    "title": "Handläggare får kontinuerlig information om nya rättsfall inom ekonomiskt bistånd, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U31497",
    "title": "Aktuell rutin för att inte röja skyddade personuppgifter inom ekonomiskt bistånd, (Ja=1, Nej=0)"
  },
  {
    "id": "U31498",
    "title": "Aktuell rutin för information om samordnad individuell plan (SIP) inom ekonomiskt bistånd, (Ja=1, Nej=0)"
  },
  {
    "id": "U31500",
    "title": "Brukarbedömning ekonomiskt bistånd IFO  - få kontakt, andel (%)"
  },
  {
    "id": "U31501",
    "title": "Brukarbedömning ekonomiskt bistånd IFO  - tydlig information, andel (%)"
  },
  {
    "id": "U31502",
    "title": "Brukarbedömning ekonomiskt bistånd IFO  - visar förståelse, andel (%)"
  },
  {
    "id": "U31503",
    "title": "Brukarbedömning ekonomiskt bistånd IFO  - inflytande, andel (%)"
  },
  {
    "id": "U31504",
    "title": "Brukarbedömning ekonomiskt bistånd IFO  - påverka hjälp, andel (%)"
  },
  {
    "id": "U31505",
    "title": "Brukarbedömning ekonomiskt bistånd IFO  - helhetssyn, andel (%)"
  },
  {
    "id": "U31506",
    "title": "Brukarbedömning ekonomiskt bistånd IFO  - förbättrad situation, andel (%)"
  },
  {
    "id": "U31508",
    "title": "Använder standardiserade bedömningsmetoden FIA inom ekonomiskt bistånd, (Ja=1, Nej=0). Källa: Kommunenkäten öppna jämförelser socialtjänst."
  },
  {
    "id": "U31509",
    "title": "Använder standardiserade bedömningsmetoden FREDA-kortfrågor inom ekonomiskt bistånd för att upptäcka våldsutsatthet hos enskilda vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U31510",
    "title": "Använder standardiserad bedömningsmetoden AUDIT inom ekonomiskt bistånd för att upptäcka riskfylld alkoholkonsumtion, (Ja=1, Nej=0)"
  },
  {
    "id": "U31511",
    "title": "Använder standardiserad bedömningsmetoden DUDIT inom ekonomiskt bistånd för att upptäcka drogrelaterade problem, (Ja=1, Nej=0)"
  },
  {
    "id": "U31512",
    "title": "Upprättat genomförandeplan med den enskilde inom tre månader inom ekonomiskt bistånd, (Ja, för alla=2, Ja, men inte för alla=1, Nej=0)"
  },
  {
    "id": "U31513",
    "title": "Genomförandeplan har undertecknats av den enskilde inom ekonomiskt bistånd, (Ja, för alla=2, Ja, men inte för alla=1, Nej=0)"
  },
  {
    "id": "U31514",
    "title": "Genomförandeplanen följs upp minst var tredje månad inom ekonomiskt bistånd,  (Ja, för alla=2, Ja, men inte för alla=1, Nej=0)"
  },
  {
    "id": "U31801",
    "title": "Vuxna biståndsmottagare med mycket långvarigt ekonomiskt bistånd, andel (%)"
  },
  {
    "id": "U31803",
    "title": "Barn i befolkningen som ingår i familjer med ekonomiskt bistånd, andel (%)"
  },
  {
    "id": "U31804",
    "title": "Unga vuxna med ekonomiskt bistånd, andel (%)"
  },
  {
    "id": "U31805",
    "title": "Vuxna biståndsmottagare med försörjningshinder på grund av arbetslöshet, andel (%)"
  },
  {
    "id": "U31806",
    "title": "Vuxna biståndsmottagare med försörjningshinder på grund av sjukdom och ohälsa, andel (%)"
  },
  {
    "id": "U31807",
    "title": "Vuxna biståndsmottagare med försörjningshinder på grund av sociala skäl, andel (%)"
  },
  {
    "id": "U31809",
    "title": "Barn i befolkningen som ingår i familjer med långvarigt ekonomiskt bistånd, andel (%)"
  },
  {
    "id": "U31900",
    "title": "Socioekonomisk sorteringsnyckel, (skala 1-8, 1=låg risk, 8 = hög risk)."
  },
  {
    "id": "U31902",
    "title": "Brukarbedömning ekonomiskt bistånd IFO, svarsfrekvens (%)"
  },
  {
    "id": "U31903",
    "title": "Brukarbedömning ekonomiskt bistånd IFO, antal svar"
  },
  {
    "id": "U33400",
    "title": "Ej återaktualiserade ungdomar 13-20 år ett år efter avslutad utredning eller insats, andel (%)"
  },
  {
    "id": "U33401",
    "title": "Utredningstid i antal dagar från påbörjad utredning till avslutad utredning inom barn och ungdom 0-20 år, medelvärde"
  },
  {
    "id": "U33402",
    "title": "Utredningstid i antal dagar från påbörjad utredning till avslutad utredning inom barn och ungdom 0-20 år, median"
  },
  {
    "id": "U33451",
    "title": "Aktuell kontinuitetsplan - Stödboende för barn och unga, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U33461",
    "title": "Ej återaktualiserade barn 0-12 år ett år efter avslutad utredning eller insats, andel (%)"
  },
  {
    "id": "U33520",
    "title": "Behörighet till nationellt program på gymnasiet (placerade hela åk 9, födda 1988-1996), andel (%) (-2014)"
  },
  {
    "id": "U33521",
    "title": "Behörighet till nationellt program på gymnasiet (placerade hela åk 9, födda i Sverige 1988-1996), andel (%) (-2014)"
  },
  {
    "id": "U33522",
    "title": "Behörighet till nationellt program på gymnasiet (placerade hela åk 9, födda i annat land 1988-1996), andel (%) (-2014)"
  },
  {
    "id": "U33523",
    "title": "Genomfört gymnasiet och har grundläggande behörighet till högskola (placerade hela åk 9, födda 1988-1996), andel (%) (-2014)"
  },
  {
    "id": "U33524",
    "title": "Genomfört gymnasiet och har grundläggande behörighet till högskola (placerade hela åk 9, födda i Sverige 1988-1996), andel (%) (-2014)"
  },
  {
    "id": "U33525",
    "title": "Genomfört gymnasiet och har grundläggande behörighet till högskola (placerade hela åk 9, födda i annat land 1988-1996), andel (%) (-2014)"
  },
  {
    "id": "U33528",
    "title": "Aktuell rutin för samordning mellan social barn- och ungdomsvård och ekonomiskt bistånd, (Ja=1, Nej=0)"
  },
  {
    "id": "U33529",
    "title": "Aktuell rutin för samordning mellan social barn- och ungdomsvård och missbruk, (Ja=1, Nej=0)"
  },
  {
    "id": "U33530",
    "title": "Aktuell rutin för samordning mellan social barn- och ungdomsvård och socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U33534",
    "title": "Aktuell rutin för samordning mellan social barn- och ungdomsvård och LSS-barn, (Ja=1, Nej=0)"
  },
  {
    "id": "U33535",
    "title": "Aktuell rutin för samordning mellan social barn- och ungdomsvård och LSS-vuxen, (Ja=1, Nej=0)"
  },
  {
    "id": "U33536",
    "title": "Aktuell överenskommelse om samverkan mellan social barn- och ungdomsvård och primärvård, (Ja=1, Nej=0)"
  },
  {
    "id": "U33537",
    "title": "Aktuell överenskommelse om samverkan mellan social barn- och ungdomsvård och tandvård, (Ja=1, Nej=0)"
  },
  {
    "id": "U33538",
    "title": "Aktuell överenskommelse om samverkan mellan social barn- och ungdomsvård och mödravård, (Ja=1, Nej=0)"
  },
  {
    "id": "U33539",
    "title": "Aktuell överenskommelse om samverkan mellan social barn- och ungdomsvård och barnhälsovård, (Ja=1, Nej=0)"
  },
  {
    "id": "U33540",
    "title": "Aktuell överenskommelse om samverkan mellan social barn- och ungdomsvård och barn- och ungdomspsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U33541",
    "title": "Aktuell överenskommelse om samverkan mellan social barn- och ungdomsvård och barn- och ungdomsmedicin, (Ja=1, Nej=0)"
  },
  {
    "id": "U33542",
    "title": "Aktuell överenskommelse om samverkan mellan social barn- och ungdomsvård och barn- och ungdomshabilitering, (Ja=1, Nej=0)"
  },
  {
    "id": "U33543",
    "title": "Aktuell överenskommelse om samverkan mellan social barn- och ungdomsvård och förskola, (Ja=1, Nej=0)"
  },
  {
    "id": "U33544",
    "title": "Aktuell överenskommelse om samverkan mellan social barn- och ungdomsvård och skola, (Ja=1, Nej=0)"
  },
  {
    "id": "U33545",
    "title": "Aktuell överenskommelse om samverkan mellan social barn- och ungdomsvård och SIS, (Ja=1, Nej=0)"
  },
  {
    "id": "U33546",
    "title": "Aktuell överenskommelse om samverkan mellan social barn- och ungdomsvård och polisen, (Ja=1, Nej=0)"
  },
  {
    "id": "U33548",
    "title": "Aktuell överenskommelse om samverkan mellan social barn- och ungdomsvård och Migrationsverket, (Ja=1, Nej=0)"
  },
  {
    "id": "U33549",
    "title": "Aktuell samlad plan för personalens kompetensutveckling inom social barn- och ungdomsvård, (Ja=1, Nej=0)"
  },
  {
    "id": "U33550",
    "title": "Ordinarie licens Barns behov i centrum (BBIC), (Ja=1, Nej=0) (-2018)"
  },
  {
    "id": "U33552",
    "title": "Samlad plan för familjehemmens kompetensutveckling i den sociala barn- och ungdomsvården, (Ja=1, Nej=0)"
  },
  {
    "id": "U33553",
    "title": "Grundläggande utbildning Ett hem att växa i för anlitade jour- och/eller familjehem i sociala barn- och ungdomsvården, (Ja=1, Nej=0)."
  },
  {
    "id": "U33554",
    "title": "Standardiserade bedömningsmetoden BRA-fam för familjehem i sociala barn- och ungdomsvården, (Ja=1, Nej=0)"
  },
  {
    "id": "U33555",
    "title": "Manualbaserad insats för föräldrastöd i grupp i sociala barn- och ungdomsvården, (Ja=1, Nej=0)"
  },
  {
    "id": "U33556",
    "title": "Manualbaserad insats för psykosocial behandling för ungdomar i sociala barn- och ungdomsvården, (Ja=1, Nej=0)"
  },
  {
    "id": "U33557",
    "title": "Manualbaserad insats för stödgruppsverksamhet psykosocial problematik i sociala barn- och ungdomsvården, (Ja=1, Nej=0)"
  },
  {
    "id": "U33558",
    "title": "Standardiserade bedömningsmetoder för utagerande beteende inom sociala barn och ungdomsvården (Ja=1, Nej=0)"
  },
  {
    "id": "U33559",
    "title": "Standardiserade bedömningsmetoder för missbruk inom sociala barn och ungdomsvården (Ja=1, Nej=0)"
  },
  {
    "id": "U33560",
    "title": "Standardiserade bedömningsmetoder för föräldraförmåga inom sociala barn och ungdomsvården (Ja=1, Nej=0)"
  },
  {
    "id": "U33561",
    "title": "Kommunen har sammanställt resultaten från systematisk uppföljning av biståndsbeslutade insatser till enskilda på gruppnivå och använt resultaten från sammanställningen för att utveckla sociala barn- och ungdomsvården öppenvård, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U33562",
    "title": "Kommunen har sammanställt resultaten från systematisk uppföljning av biståndsbeslutade insatser till enskilda på gruppnivå och använt resultaten från sammanställningen för att utveckla sociala barn- och ungdomsvården dygnsvård, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U33564",
    "title": "Kommunen har sammanställt resultaten av biståndsbeslutade öppenvårdsinsatser till enskilda på gruppnivå med ett könsperspektiv och använt resultaten från sammanställningen för att utveckla sociala barn- och ungdomsvården öppenvård, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U33565",
    "title": "Kommunen har sammanställt resultaten av biståndsbeslutade dygnsvårdsinsatser till enskilda på gruppnivå med ett könsperspektiv och använt resultaten från sammanställningen för att utveckla sociala barn- och ungdomsvården dygnsvård, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U33566",
    "title": "Information till alla placerade barn inom sociala barn- och ungdomsvården om deras rättigheter/nå ansvariga, (Ja=1, Nej=0)"
  },
  {
    "id": "U33569",
    "title": "Aktuell rutin för att inte röja skyddade personuppgifter inom social barn- och ungdomsvård, (Ja=1, Nej=0)"
  },
  {
    "id": "U33570",
    "title": "Krisberedskap ingår vid upphandling av HVB för barn och unga, (Ja=1, Nej=0)"
  },
  {
    "id": "U33571",
    "title": "Krisberedskap ingår vid upphandling av stödboende för barn och unga, (Ja=1, Nej=0)"
  },
  {
    "id": "U33572",
    "title": "Plan för evakuering av personer för barn och unga i HVB i egen regi, (Ja=1, Nej=0)"
  },
  {
    "id": "U33573",
    "title": "Plan för evakuering av personer för barn och unga i stödboende i egen regi, (Ja=1, Nej=0)"
  },
  {
    "id": "U33574",
    "title": "Beredskapsplan för höga temperaturer inom HVB för barn och unga, (Ja=1, Nej=0)"
  },
  {
    "id": "U33575",
    "title": "Brukarbedömning barn- och ungdomsvård IFO  - få kontakt, andel (%)"
  },
  {
    "id": "U33576",
    "title": "Brukarbedömning barn- och ungdomsvård IFO  - tydlig information, andel (%)"
  },
  {
    "id": "U33577",
    "title": "Brukarbedömning barn- och ungdomsvård IFO  - visar förståelse, andel (%)"
  },
  {
    "id": "U33578",
    "title": "Brukarbedömning barn- och ungdomsvård IFO  - inflytande, andel (%)"
  },
  {
    "id": "U33579",
    "title": "Brukarbedömning barn- och ungdomsvård IFO - påverka hjälp, andel (%)"
  },
  {
    "id": "U33580",
    "title": "Brukarbedömning barn- och ungdomsvård IFO  - helhetssyn, andel (%)"
  },
  {
    "id": "U33581",
    "title": "Brukarbedömning barn- och ungdomsvård IFO  - förbättrad situation, andel (%)"
  },
  {
    "id": "U33582",
    "title": "Brukarbedömning barn- och ungdomsvård IFO ensamkommande  - få kontakt, andel (%)"
  },
  {
    "id": "U33583",
    "title": "Brukarbedömning barn- och ungdomsvård IFO ensamkommande  - tydlig information, andel (%)"
  },
  {
    "id": "U33584",
    "title": "Brukarbedömning barn- och ungdomsvård IFO ensamkommande  - visar förståelse, andel (%)"
  },
  {
    "id": "U33585",
    "title": "Brukarbedömning barn- och ungdomsvård IFO ensamkommande  - inflytande, andel (%)"
  },
  {
    "id": "U33586",
    "title": "Brukarbedömning barn- och ungdomsvård IFO ensamkommande  - påverka hjälp, andel (%)"
  },
  {
    "id": "U33587",
    "title": "Brukarbedömning barn- och ungdomsvård IFO ensamkommande  - helhetssyn, andel (%)"
  },
  {
    "id": "U33588",
    "title": "Brukarbedömning barn- och ungdomsvård IFO ensamkommande  - förbättrad situation, andel (%)"
  },
  {
    "id": "U33589",
    "title": "Brukarbedömning barn- och ungdomsvård IFO vårdnadshavare  - få kontakt, andel (%)"
  },
  {
    "id": "U33590",
    "title": "Brukarbedömning barn- och ungdomsvård IFO vårdnadshavare  - tydlig information, andel (%)"
  },
  {
    "id": "U33591",
    "title": "Brukarbedömning barn- och ungdomsvård IFO vårdnadshavare  - visar förståelse, andel (%)"
  },
  {
    "id": "U33592",
    "title": "Brukarbedömning barn- och ungdomsvård IFO vårdnadshavare  - inflytande, andel (%)"
  },
  {
    "id": "U33593",
    "title": "Brukarbedömning barn- och ungdomsvård IFO vårdnadshavare  - påverka hjälp, andel (%)"
  },
  {
    "id": "U33594",
    "title": "Brukarbedömning barn- och ungdomsvård IFO vårdnadshavare  - helhetssyn, andel (%)"
  },
  {
    "id": "U33595",
    "title": "Brukarbedömning barn- och ungdomsvård IFO vårdnadshavare  - förbättrad situation, andel (%)"
  },
  {
    "id": "U33596",
    "title": "Använder standardiserade bedömningsmetoden FREDA-kortfrågor för att upptäcka våldsutsatthet hos enskilda vuxna, (Ja=1, Nej=0)."
  },
  {
    "id": "U33597",
    "title": "Genomfört systematisk uppföljning med ett könsperspektiv inom sociala barn- och ungdomsvården öppenvård, (Ja=1, Nej=0)."
  },
  {
    "id": "U33598",
    "title": "Genomfört systematisk uppföljning med ett könsperspektiv inom sociala barn- och ungdomsvården dygnsvård, (Ja=1, Nej=0)."
  },
  {
    "id": "U33599",
    "title": "Aktuell rutin för information om samordnad individuell plan (SIP) inom social barn- och ungdomsvård , (Ja=1, Nej=0)."
  },
  {
    "id": "U33601",
    "title": "17 åringar som fullföljt grundskolan. Placerade under hela årkurs 9. andel (%)."
  },
  {
    "id": "U33602",
    "title": "20 åringar som har avslutat treårigt gymnasium. Placerade under hela årkurs 9. andel (%)."
  },
  {
    "id": "U33603",
    "title": "15-16 åringar med långvarig samtidig läkemedelsförskrivning av två eller flera psykofarmaka. Placerade under hela åk 9. andel (%)."
  },
  {
    "id": "U33604",
    "title": "15-16 åringar med samtidig läkemedelsförskrivning av två eller flera psykofarmaka. Placerade under hela åk 9. andel (%)."
  },
  {
    "id": "U33605",
    "title": "15-16 åringar med läkemedelsförskrivning av psyko-farmaka. Placerade under hela åk 9. andel (%)."
  },
  {
    "id": "U33606",
    "title": "17 åringar folkbokförda i Sverige som fullföljt grundskolan. Ej placerade. andel (%)."
  },
  {
    "id": "U33607",
    "title": "17 åringar folkbokförda i Sverige som fullföljt grundskolan. Placerade, ej hela årkurs 9. andel (%)."
  },
  {
    "id": "U33608",
    "title": "20 åringar som har avslutat treårigt gymnasium. Ej placerade. andel (%)."
  },
  {
    "id": "U33609",
    "title": "20 åringar som har avslutat treårigt gymnasium. Placerade, ej hela årkurs 9. andel (%). Källa: Socialstyrelsen"
  },
  {
    "id": "U33610",
    "title": "15-16 åringar med långvarig samtidig läkemedelsförskrivning av två eller flera psykofarmaka. Ej placerade. andel (%)."
  },
  {
    "id": "U33611",
    "title": "15-16 åringar med långvarig samtidig läkemedelsförskrivning av två eller flera psykofarmaka. Placerade, ej hela åk 9. andel (%)."
  },
  {
    "id": "U33612",
    "title": "15-16 åringar med samtidig läkemedelsförskrivning av två eller flera psykofarmaka, ej placerade, andel (%)."
  },
  {
    "id": "U33613",
    "title": "15-16 åringar med samtidig läkemedelsförskrivning av två eller flera psykofarmaka. Placerade, ej hela åk 9. andel (%)."
  },
  {
    "id": "U33614",
    "title": "15-16 åringar med läkemedelsförskrivning av psykofarmaka. Ej placerade. andel (%)."
  },
  {
    "id": "U33615",
    "title": "15-16 åringar med läkemedelsförskrivning psykofarmaka. Placerade, ej hela åk 9. andel (%)."
  },
  {
    "id": "U33617",
    "title": "Enskildas uppfattning används för att utveckla verksamheten inom den sociala barn- och ungdomsvården (Ja=1, Nej=0)"
  },
  {
    "id": "U33618",
    "title": "Enskildas uppfattning används till att utveckla myndighetsutövningen inom den sociala barn- och ungdomsvården (Ja=1, Nej=0)"
  },
  {
    "id": "U33619",
    "title": "Enskildas uppfattning används till att utveckla verksamheten med ekonomiskt bistånd  (Ja=1, Nej=0)"
  },
  {
    "id": "U33620",
    "title": "Enskildas uppfattning används till att utveckla myndighetsutövningen inom LSS.  (Ja=1, Nej=0)"
  },
  {
    "id": "U33621",
    "title": "Enskildas uppfattning används till att utveckla LSS - verksamheter. (Ja=1, Nej=0)"
  },
  {
    "id": "U33622",
    "title": "Enskildas uppfattning används till att utveckla myndighetsutövningen inom socialpsykiatrin. (Ja=1, Nej=0)"
  },
  {
    "id": "U33623",
    "title": "Enskildas uppfattning används till att utveckla verksamheter inom socialpsykiatrin. (Ja=1, Nej=0)"
  },
  {
    "id": "U33624",
    "title": "Enskildas uppfattning används till att utveckla myndighetsutövningen i verksamheten för vuxna som utsatts för våld av närstående. (Ja=1, Nej=0)"
  },
  {
    "id": "U33625",
    "title": "Enskildas uppfattning används till att utveckla verksamheter i verksamheten för vuxna som utsatts för våld av närstående. (Ja=1, Nej=0)"
  },
  {
    "id": "U33626",
    "title": "Plan för evakuering av personer i Särskilda boendeformer för service och omvårdnad för äldre. (Ja=1, Nej=0)"
  },
  {
    "id": "U33627",
    "title": "Beredskapsplan för höga temperaturer inom särskilda boendeformer för service och omvårdnad för äldre. (Ja=1, Nej=0)"
  },
  {
    "id": "U33628",
    "title": "Beredskapsplan för höga temperaturer inom kommunal hälso- och sjukvård. (Ja=1, Nej=0)"
  },
  {
    "id": "U33629",
    "title": "Plan för evakuering av personer i Hemtjänst service och/eller personlig omvårdnad i ordinärt boende. (Ja=1, Nej=0)"
  },
  {
    "id": "U33802",
    "title": "Aktualiserade barn 0-12 år inom socialtjänst, antal"
  },
  {
    "id": "U33803",
    "title": "Aktualiserade ungdomar 13-20 år inom socialtjänst, antal"
  },
  {
    "id": "U33804",
    "title": "Aktualiseringar avseende barn 0-12 år inom socialtjänst, antal"
  },
  {
    "id": "U33805",
    "title": "Aktualiseringar avseende ungdomar 13-20 år inom socialtjänst, antal"
  },
  {
    "id": "U33816",
    "title": "Handläggare med socionomutbildning och minst ett års erfarenhet av barnutredningar, andel (%) . Källa: Socialstyrelsens Öppna jämförelser inom Social barn- och ungdomsvård."
  },
  {
    "id": "U33817",
    "title": "Handläggare med socionomutbildning och minst tre års erfarenhet av barnutredningar, andel (%) . Källa: Socialstyrelsens Öppna jämförelser inom Social barn- och ungdomsvård."
  },
  {
    "id": "U33818",
    "title": "Handläggare med socionomutbildning och minst fem års erfarenhet av barnutredningar, andel (%) . Källa: Socialstyrelsens Öppna jämförelser inom Social barn- och ungdomsvård."
  },
  {
    "id": "U33820",
    "title": "Flickor 0-11 år som haft möjlighet att vara delaktiga i utredningen, andel (%)"
  },
  {
    "id": "U33821",
    "title": "Pojkar 0-11 år som haft möjlighet att vara delaktiga i utredningen, andel (%)"
  },
  {
    "id": "U33822",
    "title": "Flickor 12-18 år som haft möjlighet att vara delaktiga i utredningen, andel (%)"
  },
  {
    "id": "U33823",
    "title": "Pojkar 12-18 år som haft möjlighet att vara delaktiga i utredningen, andel (%)"
  },
  {
    "id": "U33824",
    "title": "Förutsättning att följa andel flickor 0-11 år som haft möjlighet att vara delaktiga i utredningen, (Ja=1, Nej=0). Källa: Socialstyrelsens Öppna jämförelser inom Social barn- och ungdomsvård."
  },
  {
    "id": "U33825",
    "title": "Förutsättning att följa andel pojkar 0-11 år som haft möjlighet att vara delaktiga i utredningen, (Ja=1, Nej=0). Källa: Socialstyrelsens Öppna jämförelser inom Social barn- och ungdomsvård."
  },
  {
    "id": "U33826",
    "title": "Förutsättning att följa andel flickor 12-18 år som haft möjlighet att vara delaktiga i utredningen, (Ja=1, Nej=0). Källa: Socialstyrelsens Öppna jämförelser inom Social barn- och ungdomsvård."
  },
  {
    "id": "U33827",
    "title": "Förutsättning att följa andel pojkar 12-18 år som haft möjlighet att vara delaktiga i utredningen, (Ja=1, Nej=0). Källa: Socialstyrelsens Öppna jämförelser inom Social barn- och ungdomsvård."
  },
  {
    "id": "U33828",
    "title": "Andel konsulthandläggare inom social barn- och ungdomsvård, andel (%) . Källa: Socialstyrelsens Öppna jämförelser inom Social barn- och ungdomsvård."
  },
  {
    "id": "U33900",
    "title": "Brukarbedömning barn- och ungdomsvård IFO vårdnadshavare, svarsfrekvens (%)"
  },
  {
    "id": "U33901",
    "title": "Brukarbedömning barn- och ungdomsvård IFO, svarsfrekvens (%)"
  },
  {
    "id": "U33902",
    "title": "Brukarbedömning barn- och ungdomsvård IFO ensamkommande, svarsfrekvens (%)"
  },
  {
    "id": "U33903",
    "title": "Brukarbedömning barn- och ungdomsvård IFO vårdnadshavare, antal svar"
  },
  {
    "id": "U33904",
    "title": "Brukarbedömning barn- och ungdomsvård IFO, antal svar"
  },
  {
    "id": "U33905",
    "title": "Brukarbedömning barn- och ungdomsvård IFO ensamkommande, antal svar"
  },
  {
    "id": "U35400",
    "title": "Utredningstid i antal dagar från påbörjad utredning till avslutad utredning för vuxna med missbruksproblem 21+, medelvärde"
  },
  {
    "id": "U35401",
    "title": "Utredningstid i antal dagar från påbörjad utredning till avslutad utredning för vuxna med missbruksproblem 21+, median"
  },
  {
    "id": "U35409",
    "title": "Ej återaktualiserade vuxna med missbruksproblem 21+ ett år efter avslutad utredning eller insats, andel (%)"
  },
  {
    "id": "U35505",
    "title": "Aktuell rutin för samordning mellan missbruk- och beroendevård och ekonomiskt bistånd, (Ja=1, Nej=0)"
  },
  {
    "id": "U35506",
    "title": "Aktuell rutin för samordning mellan missbruk- och beroendevård och socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U35510",
    "title": "Aktuell rutin för samordning mellan missbruk- och beroendevård och barn och unga, (Ja=1, Nej=0)"
  },
  {
    "id": "U35511",
    "title": "Aktuell rutin för samordning mellan missbruk- och beroendevård och LSS, (Ja=1, Nej=0)"
  },
  {
    "id": "U35512",
    "title": "Aktuell rutin för samordning mellan missbruk- och beroendevård och äldreomsorg, (Ja=1, Nej=0)"
  },
  {
    "id": "U35513",
    "title": "Aktuell överenskommelse om samverkan mellan missbruk- och beroendevård och region, (Ja=1, Nej=0)"
  },
  {
    "id": "U35514",
    "title": "Aktuell samlad plan för personalens kompetensutveckling inom missbruk- och beroendevården, (Ja=1, Nej=0)"
  },
  {
    "id": "U35516",
    "title": "Case management i form av integrerade team till personer med missbruk eller beroende och psykisk sjukdom, (Ja=1, Nej=0)"
  },
  {
    "id": "U35517",
    "title": "Case management i form av Strengths model till personer med missbruk och beroende, (Ja=1, Nej=0)"
  },
  {
    "id": "U35518",
    "title": "Minst en av manualbaserade rekommenderade insatser till personer med missbruk eller beroende, (Ja=1, Nej=0)"
  },
  {
    "id": "U35519",
    "title": "Minst ett av tre stödprogram till närstående till personer med missbruk eller beroende, (Ja=1, Nej=0)"
  },
  {
    "id": "U35520",
    "title": "Erbjuder Bostad först till hemlösa personer med missbruk eller beroende och/eller psykisk sjukdom, (Ja=1, Nej=0)"
  },
  {
    "id": "U35521",
    "title": "Boendeinsatsen Vårdkedja till personer med missbruk eller beroende, psykisk sjukdom eller hemlösa, (Ja=1, Nej=0)"
  },
  {
    "id": "U35522",
    "title": "Standardiserade bedömningsmetoder inom socialtjänstens missbruks- och beroendeverksamhet som underlag vid uppföljning av insatser till enskilda, (Ja, för alla=2, Ja, men inte för vissa=1, Nej=0)"
  },
  {
    "id": "U35523",
    "title": "Sammanställt resultat för att utveckla verksamheten för klienter inom missbruksvården som bor med barn, (Ja=2, Nej, men fattat beslut=1, Nej=0)"
  },
  {
    "id": "U35524",
    "title": "Sammanställt resultat för att utveckla verksamheten för klienter inom missbruksvården som är unga vuxna, (Ja=2, Nej, men fattat beslut=1, Nej=0)"
  },
  {
    "id": "U35525",
    "title": "Sammanställt resultat för att utveckla verksamheten för klienter inom missbruksvården som är 65 år och äldre, (Ja=2, Nej, men fattat beslut=1, Nej=0)"
  },
  {
    "id": "U35526",
    "title": "Sammanställt resultat för att utveckla verksamheten för klienter inom missbruksvården som är kontakt med beroendevård/psykiatri, (Ja=2, Nej, men fattat beslut=1, Nej=0)"
  },
  {
    "id": "U35527",
    "title": "Systematisk uppföljning av biståndsbeslutade insatser till enskilda på gruppnivå utifrån kön inom missbruk, (Ja=1, Nej=0)"
  },
  {
    "id": "U35528",
    "title": "Sammanställt resultaten av biståndsbeslutade insatser till enskilda på gruppnivå utifrån kön inom missbruk, (Ja=2, Nej, men genomfört uppföljning=1, Nej=0)."
  },
  {
    "id": "U35529",
    "title": "Rutiner där handläggare erbjuder den enskilde att ha med sig en annan person på möten inom missbruk-/beroendevård, (Ja=1, Nej=0)"
  },
  {
    "id": "U35531",
    "title": "Brukarstyrd brukarrevision av verksamheter inom missbruks- och beroendevården de senaste två åren för att ge brukare inflytande, (Ja=1, Nej=0)"
  },
  {
    "id": "U35532",
    "title": "Resultaten från brukarstyrd brukarrevision för att utveckla verksamheter inom missbruks- och beroendevården, (Ja=1, Nej=0)"
  },
  {
    "id": "U35533",
    "title": "Brukarorganisation har påverkat överenskommelsen med region kring missbruks- och beroendevården, (Ja=1, Nej=0)"
  },
  {
    "id": "U35536",
    "title": "Aktuell rutin för att inte röja skyddade personuppgifter inom missbruks- och beroendevården, (Ja=1, Nej=0)"
  },
  {
    "id": "U35537",
    "title": "Tid till första personliga besök (nybesök) inom missbruks- och beroendevården, (Inom 3 dagar=3, 4-7 dagar=2, 8-14 dagar=1, mer än 15 dagar=0)."
  },
  {
    "id": "U35538",
    "title": "Brukarbedömning missbruksvård IFO  - få kontakt, andel (%)"
  },
  {
    "id": "U35539",
    "title": "Brukarbedömning missbruksvård IFO  - tydlig information, andel (%)"
  },
  {
    "id": "U35540",
    "title": "Brukarbedömning missbruksvård IFO  - visar förståelse, andel (%)"
  },
  {
    "id": "U35541",
    "title": "Brukarbedömning missbruksvård IFO  - inflytande, andel (%)"
  },
  {
    "id": "U35542",
    "title": "Brukarbedömning missbruksvård IFO  - påverka hjälp, andel (%)"
  },
  {
    "id": "U35543",
    "title": "Brukarbedömning missbruksvård IFO  - helhetssyn, andel (%)"
  },
  {
    "id": "U35544",
    "title": "Brukarbedömning missbruksvård IFO  - förbättrad situation, andel (%)"
  },
  {
    "id": "U35546",
    "title": "Använder standardiserade bedömningsmetoden FREDA inom missbruk för att upptäcka våldsutsatthet hos enskilda vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U35547",
    "title": "Aktuell rutin för information om samordnad individuell plan (SIP) inom missbruk- och beroendevård, (Ja=1, Nej=0)"
  },
  {
    "id": "U35900",
    "title": "Brukarbedömning missbruksvård IFO, svarsfrekvens (%)"
  },
  {
    "id": "U35901",
    "title": "Brukarbedömning missbruksvård IFO, antal svar"
  },
  {
    "id": "U37001",
    "title": "Överförmyndare/-nämnd - Ställföreträdaruppdrag där arvode inte tas ut, andel (%)"
  },
  {
    "id": "U37002",
    "title": "Överförmyndare/-nämnd - Invånare som har ställföreträdarskap, antal/1000 invånare"
  },
  {
    "id": "U37003",
    "title": "Överförmyndare/-nämnd - Ensamkommande barn som har god man, antal/1000 invånare"
  },
  {
    "id": "U37004",
    "title": "Överförmyndare/-nämnd - Invånare som har förvaltare, antal/1000 invånare"
  },
  {
    "id": "U37005",
    "title": "Överförmyndare/-nämnd - Invånare som har förmyndare, antal/1000 invånare"
  },
  {
    "id": "U37006",
    "title": "Överförmyndare/-nämnd - Invånare som har god man, antal/1000 invånare"
  },
  {
    "id": "U37007",
    "title": "Överförmyndare/-nämnd - Ställföreträdare, antal"
  },
  {
    "id": "U37008",
    "title": "Överförmyndare/-nämnd - Ställföreträdarskap per ställföreträdare, antal"
  },
  {
    "id": "U37009",
    "title": "Kostnad för överförmyndare/-nämnd, kr/ställföreträdarskap"
  },
  {
    "id": "U37465",
    "title": "Information på kommunens webbplats på lättläst svenska inom våld i nära relation barn, (Ja=1, Nej=0)"
  },
  {
    "id": "U37466",
    "title": "Information på kommunens webbplats på lättläst svenska inom våld i nära relation vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U37467",
    "title": "Talad information på kommunens webbplats inom våld i nära relation barn, (Ja=1, Nej=0)"
  },
  {
    "id": "U37468",
    "title": "Talad information på kommunens webbplats inom våld i nära relation vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U37469",
    "title": "Aktuell information om stöd och hjälp till kvinnor som utsatts för våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37470",
    "title": "Aktuell information om stöd och hjälp till män som utsatts för våld , (Ja=1, Nej=0)"
  },
  {
    "id": "U37471",
    "title": "Aktuell information om stöd och hjälp till barn som bevittnat våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37472",
    "title": "Aktuell information om stöd och hjälp till barn som utsatts för våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37473",
    "title": "Aktuell information om stöd och hjälp till kvinnor som utövat våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37474",
    "title": "Aktuell information om stöd och hjälp till män som utövat våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37475",
    "title": "Aktuell rutin för samordning mellan våld i nära relationer och ekonomiskt bistånd, (Ja=1, Nej=0)"
  },
  {
    "id": "U37476",
    "title": "Aktuell rutin för samordning mellan våld i nära relationer och missbruk, (Ja=1, Nej=0)"
  },
  {
    "id": "U37477",
    "title": "Aktuell rutin för samordning mellan våld i nära relationer och socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U37478",
    "title": "Aktuell rutin för samordning mellan våld i nära relationer och hemlöshet, (Ja=1, Nej=0)"
  },
  {
    "id": "U37479",
    "title": "Aktuell rutin för samordning mellan våld i nära relationer och familjerätt, (Ja=1, Nej=0)"
  },
  {
    "id": "U37480",
    "title": "Aktuell rutin för samordning mellan våld i nära relationer och barn och unga, (Ja=1, Nej=0)"
  },
  {
    "id": "U37481",
    "title": "Aktuell rutin för samordning mellan våld i nära relationer och LSS-barn, (Ja=1, Nej=0)"
  },
  {
    "id": "U37482",
    "title": "Aktuell rutin för samordning mellan våld i nära relationer och LSS-vuxen, (Ja=1, Nej=0)"
  },
  {
    "id": "U37483",
    "title": "Aktuell rutin för samordning mellan våld i nära relationer och äldreomsorg, (Ja=1, Nej=0)"
  },
  {
    "id": "U37484",
    "title": "Aktuell överenskommelse om samverkan med primärvård inom våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U37485",
    "title": "Aktuell överenskommelse om samverkan med vuxenpsykiatri inom våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U37486",
    "title": "Aktuell överenskommelse om samverkan med akutmottagningar inom våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U37487",
    "title": "Aktuell överenskommelse om samverkan  med ungdomsmottagningar inom våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U37488",
    "title": "Aktuell överenskommelse om samverkan med polisen inom våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U37489",
    "title": "Aktuell överenskommelse om samverkan med kvinnojourer inom våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U37490",
    "title": "Handläggare som utreder vuxna har fått fortbildning om våld i nära relationer, (Ja=1 Nej=0)"
  },
  {
    "id": "U37491",
    "title": "Handläggare som utreder vuxna har fått  vidareutbildning på högskolenivå om våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U37492",
    "title": "Handläggare som utreder barn som utsatts för/bevittnat våld har fått fortbildning om våld i nära relationer, (Ja=1 Nej=0)"
  },
  {
    "id": "U37493",
    "title": "Handläggare som utreder barn som utsatts för/bevittnat våld har fått vidareutbildning på högskolenivå om våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U37494",
    "title": "Aktuell samlad plan för personalens kompetensutveckling inom våld i nära relationer barn, (Ja=1, Nej=0)"
  },
  {
    "id": "U37495",
    "title": "Aktuell samlad plan för personalens kompetensutveckling inom våld i nära relationer vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U37506",
    "title": "Erbjuder stödsamtal med biståndsbeslut till kvinnor som utsatts för våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37507",
    "title": "Erbjuder stödsamtal med biståndsbeslut till män som utsatts för våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37508",
    "title": "Erbjuder stödsamtal med biståndsbeslut till barn som bevittnat våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37509",
    "title": "Erbjuder stödsamtal med biståndsbeslut till barn som utsatts för våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37510",
    "title": "Erbjuder stödsamtal med biståndsbeslut till kvinnor som utövat våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37511",
    "title": "Erbjuder stödsamtal med biståndsbeslut till män som utövat våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37512",
    "title": "Erbjuder skyddat boende med biståndsbeslut till kvinnor som utsatts för våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37513",
    "title": "Erbjuder skyddat boende med biståndsbeslut till män som utsatts för våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37514",
    "title": "Erbjuder skyddat boende med biståndsbeslut till kvinnor med missbruk som utsatts för våld, (Ja=1, Nej=0)"
  },
  {
    "id": "U37515",
    "title": "Aktuell rutin för att säkra skolgång för barn i skyddat boende, (Ja=1, Nej=0)"
  },
  {
    "id": "U37516",
    "title": "Standardiserad bedömningsmetod vid utredning av behovet av stöd och hjälp hos våldsutsatta vuxna, (Ja=1, Nej=0)"
  },
  {
    "id": "U37517",
    "title": "Standardiserade bedömningsmetoder AUDIT/DUDIT inom våld i nära relationer, (Ja=2, Delvis=1, Nej=0)"
  },
  {
    "id": "U37518",
    "title": "Systematisk uppföljning av resultat för att utveckla verksamheten inom våld i nära relationer, (Ja=2, Delvis= 1, Nej=0)"
  },
  {
    "id": "U37519",
    "title": "Systematisk uppföljning av biståndsbeslutade insatser till enskilda på gruppnivå utifrån kön inom våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U37520",
    "title": "Sammanställt resultaten av biståndsbeslutade insatser till enskilda på gruppnivå utifrån kön inom våld i nära relationer, (Ja=2, Nej, men genomfört uppföljning=1, Nej=0)."
  },
  {
    "id": "U37521",
    "title": "Kartlagt antalet vuxna som utsatts för våld av närstående, (Ja=1, Nej=0)"
  },
  {
    "id": "U37522",
    "title": "Rutin för information om samordnad individuell plan inom våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U37523",
    "title": "Rutin för information om kopia på journal/akt inom våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U37524",
    "title": "Aktuell rutin för att inte röja skyddade personuppgifter inom våld i nära relationer, (Ja=1, Nej=0)"
  },
  {
    "id": "U37535",
    "title": "Aktuell rutin vid indikation på att en vuxen utsatts för våld inom ekonomiskt bistånd, (Ja=1, Nej=0)"
  },
  {
    "id": "U37536",
    "title": "Aktuell rutin vid indikation på att en vuxen utsatts för våld inom missbruk , (Ja=1, Nej=0)"
  },
  {
    "id": "U37537",
    "title": "Aktuell rutin vid indikation på att en vuxen utsatts för våld inom socialpsykiatri, (Ja=1, Nej=0)"
  },
  {
    "id": "U37538",
    "title": "Aktuell rutin vid indikation på att en vuxen utsatts för våld inom sociala barn- och ungdomsvården , (Ja=1, Nej=0)"
  },
  {
    "id": "U37539",
    "title": "Aktuell rutin vid indikation på att en vuxen utsatts för våld inom LSS-barn , (Ja=1, Nej=0)"
  },
  {
    "id": "U37540",
    "title": "Aktuell rutin vid indikation på att en vuxen utsatts för våld inom LSS-vuxen , (Ja=1, Nej=0)"
  },
  {
    "id": "U37541",
    "title": "Aktuell rutin vid indikation på att en vuxen utsatts för våld inom äldreomsorg , (Ja=1, Nej=0)"
  },
  {
    "id": "U37542",
    "title": "Aktuell rutin vid indikation på att en vuxen utsatts för våld inom nära relationer , (Ja=1, Nej=0)"
  },
  {
    "id": "U37543",
    "title": "Använder standardiserade bedömningsmetoden FREDA-kortfrågor för att upptäcka våldsutsatthet hos enskilda vuxna Ekonomiskt bistånd, (Ja=1, Nej=0). Källa: Socialstyrelsens kommunenkät ÖJ socialtjänst."
  },
  {
    "id": "U37544",
    "title": "Använder standardiserade bedömningsmetoden FREDA-kortfrågor för att upptäcka våldsutsatthet hos enskilda vuxna Missbruk, (Ja=1, Nej=0). Källa: Socialstyrelsens kommunenkät ÖJ socialtjänst."
  },
  {
    "id": "U37545",
    "title": "Använder standardiserade bedömningsmetoden FREDA-kortfrågor för att upptäcka våldsutsatthet hos enskilda vuxna Socialpsykiatri, (Ja=1, Nej=0). Källa: Socialstyrelsens kommunenkät ÖJ socialtjänst."
  },
  {
    "id": "U37546",
    "title": "Använder standardiserade bedömningsmetoden FREDA-kortfrågor för att upptäcka våldsutsatthet hos enskilda vuxna Barn och unga, (Ja=1, Nej=0). Källa: Socialstyrelsens kommunenkät ÖJ socialtjänst."
  },
  {
    "id": "U37547",
    "title": "Använder standardiserade bedömningsmetoden FREDA-kortfrågor för att upptäcka våldsutsatthet hos enskilda vuxna LSS - vuxna, (Ja=1, Nej=0). Källa: Socialstyrelsens kommunenkät ÖJ socialtjänst."
  },
  {
    "id": "U37548",
    "title": "Använder standardiserade bedömningsmetoden FREDA-kortfrågor för att upptäcka våldsutsatthet hos enskilda vuxna Äldreomsorg, (Ja=1, Nej=0). Källa: Socialstyrelsens kommunenkät ÖJ socialtjänst."
  },
  {
    "id": "U37549",
    "title": "Använder standardiserade bedömningsmetoden AUDIT för att upptäcka riskfylld alkoholkonsumtion, (Ja=1, Nej=0)"
  },
  {
    "id": "U37551",
    "title": "Kartlagt antalet vuxna som utsatts för våld av närstående, (Ja=1, Nej=0)"
  },
  {
    "id": "U37552",
    "title": "Aktuell rutin för information om samordnad individuell plan (SIP) inom våld i nära relationer , (Ja=1, Nej=0)."
  },
  {
    "id": "U40000",
    "title": "Årsarbetare, anställda som jobbar med arbetsmarknadsfrågor, antal"
  },
  {
    "id": "U40003",
    "title": "Arbetstid inom arbetsmarknadsverksamheten som går till 1. Arbetsprövning, -träning, andel (%)"
  },
  {
    "id": "U40004",
    "title": "Arbetstid inom arbetsmarknadsverksamheten som går till 2. Jobbsökaraktivitet inkl. coachning, andel (%)"
  },
  {
    "id": "U40005",
    "title": "Arbetstid inom arbetsmarknadsverksamheten som går till 3. Kurs, andel (%)"
  },
  {
    "id": "U40006",
    "title": "Arbetstid inom arbetsmarknadsverksamheten som går till 4. Matchning, andel (%)"
  },
  {
    "id": "U40007",
    "title": "Arbetstid inom arbetsmarknadsverksamheten som går till 5a. Praktik hos offentlig arbetsgivare, andel (%)"
  },
  {
    "id": "U40008",
    "title": "Arbetstid inom arbetsmarknadsverksamheten som går till 5b. Praktik hos privata arbetsgivare, andel (%)"
  },
  {
    "id": "U40009",
    "title": "Arbetstid inom arbetsmarknadsverksamheten som går till 6. Studie-, yrkes- och arbetsvägledning , andel (%)"
  },
  {
    "id": "U40010",
    "title": "Arbetstid inom arbetsmarknadsverksamheten som går till 7. Kommunala arbetsmarknadsanställningar, andel (%)"
  },
  {
    "id": "U40011",
    "title": "Arbetstid inom arbetsmarknadsverksamheten som går till 8. Feriejobb/praktik, andel (%)"
  },
  {
    "id": "U40012",
    "title": "Arbetstid inom arbetsmarknadsverksamheten som går till 9. Administrativt stöd och verksamhetsutveckling, andel (%)"
  },
  {
    "id": "U40013",
    "title": "Arbetstid inom arbetsmarknadsverksamheten som går till Övriga insatser, andel (%)"
  },
  {
    "id": "U40014",
    "title": "Kostnad köp av externa tjänster kommunala arbetsmarknadsverksamheten, kr"
  },
  {
    "id": "U40400",
    "title": "Nöjd Region-Index - Arbetsmöjligheter"
  },
  {
    "id": "U40401",
    "title": "Företagsklimat enl. Svenskt Näringslivs enkätdel, ranking"
  },
  {
    "id": "U40402",
    "title": "Företagsklimat enl. Svenskt Näringsliv, ranking"
  },
  {
    "id": "U40403",
    "title": "Årsarbetare, kommunala arbetsmarknadsanställningar, antal"
  },
  {
    "id": "U40406",
    "title": "Resultat vid avslut i kommunens arbetsmarknadsverksamhet, deltagare som A. Börjat arbeta, andel (%)"
  },
  {
    "id": "U40409",
    "title": "Resultat vid avslut i kommunens arbetsmarknadsverksamhet, deltagare som B. Börjat studera, andel (%)"
  },
  {
    "id": "U40412",
    "title": "Resultat vid avslut i kommunens arbetsmarknadsverksamhet, deltagare som C. Överförts till annan myndighet, andel (%)"
  },
  {
    "id": "U40415",
    "title": "Resultat vid avslut i kommunens arbetsmarknadsverksamhet, deltagare som D. Slutförda uppdrag, andel (%)"
  },
  {
    "id": "U40418",
    "title": "Resultat vid avslut i kommunens arbetsmarknadsverksamhet, deltagare som E. Övrigt, andel (%)"
  },
  {
    "id": "U40421",
    "title": "Ungdomar i grund- och gymnasieskola som haft feriejobb eller praktik, antal (-2018)"
  },
  {
    "id": "U40445",
    "title": "Tillgänglighet arbetsmarknad -  sammanlagt resultat, andel (%) av maxpoäng (-2016)"
  },
  {
    "id": "U40450",
    "title": "Resultat vid avslut i kommunens arbetsmarknadsverksamhet, deltagare som A. Börjat arbeta, antal"
  },
  {
    "id": "U40451",
    "title": "Resultat vid avslut i kommunens arbetsmarknadsverksamhet, deltagare som B. Börjat studera, antal"
  },
  {
    "id": "U40452",
    "title": "Resultat vid avslut i kommunens arbetsmarknadsverksamhet, deltagare som C. Överförts till annan myndighet, antal"
  },
  {
    "id": "U40453",
    "title": "Resultat vid avslut i kommunens arbetsmarknadsverksamhet, deltagare som D. Slutförda uppdrag, antal"
  },
  {
    "id": "U40454",
    "title": "Resultat vid avslut i kommunens arbetsmarknadsverksamhet, deltagare som E. Övrigt, antal"
  },
  {
    "id": "U40455",
    "title": "Resultat vid avslut i kommunens arbetsmarknadsverksamhet, deltagare som börjat arbeta eller studera, andel (%)"
  },
  {
    "id": "U40460",
    "title": "Deltagarbedömning Finsam - Stöd är till stor nytta, andel (%)"
  },
  {
    "id": "U40461",
    "title": "Deltagarbedömning Finsam - Får vara med och bestämma, andel (%)"
  },
  {
    "id": "U40462",
    "title": "Deltagarbedömning Finsam - Stödet har fått den ta den tid som behövts för deltagaren, andel (%)"
  },
  {
    "id": "U40463",
    "title": "Deltagarbedömning Finsam - Finns någon att vända sig till med frågor/behov, andel (%)"
  },
  {
    "id": "U40464",
    "title": "Deltagarbedömning Finsam - Stödet har hjälpt deltagaren att hantera sin situation, andel (%)"
  },
  {
    "id": "U40465",
    "title": "Deltagarbedömning Finsam - Mer redo att arbeta eller studera, andel (%)"
  },
  {
    "id": "U40466",
    "title": "Deltagarbedömning Finsam - Personalen tar tillvara på deltagarens erfarenheter, andel (%)"
  },
  {
    "id": "U40467",
    "title": "Deltagarbedömning Finsam - Planering  finns för vad som ska hända efter insats, andel (%)"
  },
  {
    "id": "U40468",
    "title": "Deltagarbedömning Finsam - Tillräckling planering  finns för vad som ska hända efter insats, andel (%)"
  },
  {
    "id": "U40469",
    "title": "Deltagarbedömning Finsam - Det som planerats påbörjas inom rimlig tid, andel (%)"
  },
  {
    "id": "U40800",
    "title": "Deltagare i kommunala arbetsmarknadsåtgärder, antal"
  },
  {
    "id": "U40803",
    "title": "Deltagare som har anvisats till kommunala arbetsmarknadsåtgärder, antal"
  },
  {
    "id": "U40806",
    "title": "Anvisningar inom arbetsmarknadsverksamheten som initierats av arbetsförmedlingen, andel (%)"
  },
  {
    "id": "U40807",
    "title": "Anvisningar inom arbetsmarknadsverksamheten som initierats av försäkringskassan, andel (%)"
  },
  {
    "id": "U40808",
    "title": "Anvisningar inom arbetsmarknadsverksamheten som initierats av individen själv, andel (%)"
  },
  {
    "id": "U40809",
    "title": "Anvisningar inom arbetsmarknadsverksamheten som initierats av socialtjänst, andel (%)"
  },
  {
    "id": "U40810",
    "title": "Anvisningar inom arbetsmarknadsverksamheten som initierats av övrigt/annan instans, andel (%)"
  },
  {
    "id": "U40811",
    "title": "Deltagare inom arbetsmarknadsverksamheten som är 24 år eller yngre, andel (%)"
  },
  {
    "id": "U40812",
    "title": "Deltagare inom arbetsmarknadsverksamheten som är 25 år eller äldre, andel (%)"
  },
  {
    "id": "U40813",
    "title": "Deltagare inom arbetsmarknadsverksamheten med eftergymnasial utbildning, andel (%)"
  },
  {
    "id": "U40814",
    "title": "Deltagare inom arbetsmarknadsverksamheten med gymnasial utbildning, andel (%)"
  },
  {
    "id": "U40815",
    "title": "Deltagare inom arbetsmarknadsverksamheten med högst grundskoleutbildning, andel (%)"
  },
  {
    "id": "U40816",
    "title": "Deltagare inom arbetsmarknadsverksamheten med icke fullgjord grundskoleutbildning, andel (%)"
  },
  {
    "id": "U40817",
    "title": "Deltagare inom arbetsmarknadsverksamheten som varit utan arbete kortare än 6 månader innan inskrivning, andel (%)"
  },
  {
    "id": "U40818",
    "title": "Deltagare inom arbetsmarknadsverksamheten som varit utan arbete mellan 6-24 månader innan inskrivning, andel (%)"
  },
  {
    "id": "U40819",
    "title": "Deltagare inom arbetsmarknadsverksamheten som varit utan arbete mer än 24 månader innan inskrivning, andel (%)"
  },
  {
    "id": "U40820",
    "title": "Deltagare inom arbetsmarknadsverksamheten vars insatser avslutats inom 3 månader, andel (%)"
  },
  {
    "id": "U40821",
    "title": "Deltagare inom arbetsmarknadsverksamheten vars insatser har avslutats efter mellan 3 och 6 månader, andel (%)"
  },
  {
    "id": "U40822",
    "title": "Deltagare inom arbetsmarknadsverksamheten vars insatser har avslutats efter mellan 6 och 24 månader, andel (%)"
  },
  {
    "id": "U40823",
    "title": "Deltagare inom arbetsmarknadsverksamheten vars insatser har avslutats efter mer än 24 månader, andel (%)"
  },
  {
    "id": "U40824",
    "title": "Anvisningar inom arbetsmarknadsverksamheten som initierats av arbetsförmedlingen, i samverkan med socialtjänsten, andel (%)"
  },
  {
    "id": "U40825",
    "title": "Inget annat ansvarsområde ingår i förvaltningen för arbetsmarknadsinsatserna  (Ja = 1, Nej = 0)"
  },
  {
    "id": "U40826",
    "title": "Ekonomiskt bistånd ingår i samma förvaltning som arbetsmarknadsinsatserna (Ja = 1, Nej = 0)"
  },
  {
    "id": "U40827",
    "title": "Deltagare inom arbetsmarknadsverksamheten där utbildningsnivå saknas, andel (%)"
  },
  {
    "id": "U40828",
    "title": "Vuxenutbildning ingår i samma förvaltning som arbetsmarknadsinsatserna (Ja = 1, Nej = 0)"
  },
  {
    "id": "U40829",
    "title": "Integration/mottagande av nyanlända ingår i samma förvaltning som arbetsmarknadsinsatserna (Ja = 1, Nej = 0)"
  },
  {
    "id": "U40830",
    "title": "Gymnasieskolan ingår i samma förvaltning som arbetsmarknadsinsatserna (Ja = 1, Nej = 0)"
  },
  {
    "id": "U40831",
    "title": "Kommunens aktivitetsansvar ingår i samma förvaltning som arbetsmarknadsinsatserna (Ja = 1, Nej = 0)"
  },
  {
    "id": "U40832",
    "title": "Näringslivsutveckling ingår i samma förvaltning som arbetsmarknadsinsatserna (Ja = 1, Nej = 0)"
  },
  {
    "id": "U40833",
    "title": "Andra ansvarsområden ingår i samma förvaltning som arbetsmarknadsinsatserna (Ja = 1, Nej = 0)"
  },
  {
    "id": "U40900",
    "title": "Under vilken nämnd sorterar arbetsmarknadsverksamheten, (kodade svarsalternativ) (-2018)"
  },
  {
    "id": "U45400",
    "title": "Nöjd Region-Index - Kommunikationer"
  },
  {
    "id": "U60000",
    "title": "Total investeringsutgift (netto) för byggnader och mark, mkr"
  },
  {
    "id": "U60001",
    "title": "Total investeringsutgift byggnader och mark, kr/inv"
  },
  {
    "id": "U60002",
    "title": "Kostnad inhyrda lokaler, kr/kvm BRA"
  },
  {
    "id": "U60003",
    "title": "Hyresintäkter egna lokaler, kr/kvm BRA"
  },
  {
    "id": "U60005",
    "title": "Kostnad värmeförbrukning lokaler, kr/kvm BRA"
  },
  {
    "id": "U60006",
    "title": "Kostnad elförbrukning lokaler, kr/kvm BRA"
  },
  {
    "id": "U60007",
    "title": "Kostnad vattenförbrukning lokaler, kr/kvm BRA"
  },
  {
    "id": "U60008",
    "title": "Kostnad värme, el, fjärrkyla och vatten i lokaler, kr/kvm BRA"
  },
  {
    "id": "U60009",
    "title": "Kostnad planerat underhåll lokaler, kr/kvm BRA"
  },
  {
    "id": "U60010",
    "title": "Kostnad förvaltning av ägda lokaler, kr/kvm BRA"
  },
  {
    "id": "U60013",
    "title": "Kapitalkostnad lokaler, kr/kvm BRA"
  },
  {
    "id": "U60014",
    "title": "Total driftskostnad och kapitalkostnad lokaler, kr/kvm BRA"
  },
  {
    "id": "U60032",
    "title": "Snitt bokfört värde egna lokaler, kr/kvm BRA"
  },
  {
    "id": "U60036",
    "title": "Kostnad tillsyn och skötsel, kr/kvm BRA"
  },
  {
    "id": "U60037",
    "title": "Kostnad felavhjälpande underhåll (FAUH), kr/kvm BRA"
  },
  {
    "id": "U60038",
    "title": "Kostnad tillsyn, skötsel och felavhjälpande underhåll, kr/kvm BRA"
  },
  {
    "id": "U60039",
    "title": "Kostnad utemiljö, kr/kvm BRA"
  },
  {
    "id": "U60040",
    "title": "Kostnader för försäkringar och försäkringsskador, kr/kvm BRA"
  },
  {
    "id": "U60041",
    "title": "Kostnad fjärrkyla lokaler, kr/kvm BRA"
  },
  {
    "id": "U60042",
    "title": "Driftkostnad för lokaler, kr/kvm BRA"
  },
  {
    "id": "U60043",
    "title": "Driftkostnad för lokaler inklusive FAUH, kr/kvm BRA"
  },
  {
    "id": "U60044",
    "title": "Driftkostnad för lokaler inklusive FAUH + PU, kr/kvm BRA"
  },
  {
    "id": "U60045",
    "title": "Driftkostnad, underhåll (FAUH+PU) och kapitalkostnad lokaler, kr/kvm BRA"
  },
  {
    "id": "U60200",
    "title": "Medarbetarengagemang (HME) totalt regionen - Totalindex"
  },
  {
    "id": "U60201",
    "title": "Medarbetarengagemang (HME) totalt regionen - Motivationsindex"
  },
  {
    "id": "U60202",
    "title": "Medarbetarengagemang (HME) totalt regionen - Ledarskapsindex"
  },
  {
    "id": "U60203",
    "title": "Medarbetarengagemang (HME) totalt regionen - Styrningsindex"
  },
  {
    "id": "U60423",
    "title": "Invånare 16-84 år med lågt socialt deltagande, andel (%)"
  },
  {
    "id": "U60441",
    "title": "Aborter för kvinnor 19 år eller yngre, antal/1000 kvinnor 15 - 19 år"
  },
  {
    "id": "U60442",
    "title": "Attacker av hjärtinfarkt, 5-årsm, antal/100 000 inv 20+ (-2013)"
  },
  {
    "id": "U60446",
    "title": "Invånare 16-84 år med svåra besvär av ängslan, oro eller ångest, andel (%)"
  },
  {
    "id": "U60452",
    "title": "Elanvändning lokaler, kWh/kvm"
  },
  {
    "id": "U60470",
    "title": "Värme lokaler, köpt (levererad (ej graddagskorrigerad), kWh/kvm"
  },
  {
    "id": "U60471",
    "title": "Vattenförbrukning lokaler, kbm/kvm"
  },
  {
    "id": "U60494",
    "title": "Ekologiska livsmedel i regionens verksamhet, andel (%)"
  },
  {
    "id": "U60495",
    "title": "Energianvändning i verksamhetslokaler, kWh/kvm BRA"
  },
  {
    "id": "U60496",
    "title": "Förnybara drivmedel i kollektivtrafiken, andel (%)"
  },
  {
    "id": "U60497",
    "title": "Klimatpåverkan från medicinska gaser, kg CO2-ekv/inv"
  },
  {
    "id": "U60507",
    "title": "Invånare 25-74 år med förgymnasial utbildning med bra självskattat hälsotillstånd, andel (%)"
  },
  {
    "id": "U60508",
    "title": "Invånare 25-74 år med gymnasial utbildning med bra självskattat hälsotillstånd, andel (%)"
  },
  {
    "id": "U60509",
    "title": "Invånare 25-74 år med eftergymnasial utbildning med bra självskattat hälsotillstånd, andel (%)"
  },
  {
    "id": "U60510",
    "title": "Invånare 25-74 år med förgymnasial utbildning med fetma, andel (%)"
  },
  {
    "id": "U60511",
    "title": "Invånare 25-74 år med gymnasial utbildning med fetma, andel (%)"
  },
  {
    "id": "U60512",
    "title": "Invånare 25-74 år med eftergymnasial utbildning med fetma, andel (%)"
  },
  {
    "id": "U60514",
    "title": "Invånare 25-74 år med förgymnasial utbildning med bra självskattad tandhälsa, andel (%)"
  },
  {
    "id": "U60515",
    "title": "Invånare 25-74 år med gymnasial utbildning med bra självskattad tandhälsa, andel (%)"
  },
  {
    "id": "U60516",
    "title": "Invånare 25-74 år med eftergymnasial utbildning med bra självskattad tandhälsa, andel (%)"
  },
  {
    "id": "U60517",
    "title": "Incidens av hjärtinfarkter 20-79 år, antal/ 100 000 inv."
  },
  {
    "id": "U60523",
    "title": "Fallskador bland personer 80+ region, 3-årsm, antal/100 000 inv"
  },
  {
    "id": "U60525",
    "title": "Invånare 25-74 år med förgymnasial utbildning som avstår från att gå ut ensam, andel (%)"
  },
  {
    "id": "U60526",
    "title": "Invånare 25-74 år med gymnasial utbildning som avstår från att gå ut ensam, andel (%)"
  },
  {
    "id": "U60527",
    "title": "Invånare 25-74 år med eftergymnasial utbildning som avstår från att gå ut ensam, andel (%)"
  },
  {
    "id": "U60531",
    "title": "Brukarbedömning hemtjänst äldreomsorg - besväras av ensamhet region, andel (%)"
  },
  {
    "id": "U60532",
    "title": "Invånare 16-84 år med en stillasittande fritid, andel (%) (-2015)"
  },
  {
    "id": "U60533",
    "title": "Invånare 25-74 år med förgymnasial utbildning med en stillasittande fritid, andel (%) (-2015)"
  },
  {
    "id": "U60534",
    "title": "Invånare 25-74 år med gymnasial utbildning med  en stillasittande fritid, andel (%) (-2015)"
  },
  {
    "id": "U60535",
    "title": "Invånare 25-74 år med eftergymnasial utbildning med en stillasittande fritid, andel (%) (-2015)"
  },
  {
    "id": "U60536",
    "title": "Invånare 25-74 år med förgymnasial utbildning som är fysiskt aktiva minst 30 minuter per dag, andel (%)"
  },
  {
    "id": "U60537",
    "title": "Invånare 25-74 år med gymnasial utbildning som är fysiskt aktiva minst 30 minuter per dag, andel (%)"
  },
  {
    "id": "U60538",
    "title": "Invånare 25-74 år med eftergymnasial utbildning som är fysiskt aktiva minst 30 minuter per dag, andel (%) (-2014)"
  },
  {
    "id": "U60540",
    "title": "Invånare 25-74 år med förgymnasial utbildning som äter frukt och grönt mer än 3 ggr/dag, andel (%)"
  },
  {
    "id": "U60541",
    "title": "Invånare 25-74 år med gymnasial utbildning som äter frukt och grönt mer än 3 ggr/dag, andel (%)"
  },
  {
    "id": "U60542",
    "title": "Invånare 25-74 år med eftergymnasial utbildning som äter frukt och grönt mer än 3 ggr/dag, andel (%)"
  },
  {
    "id": "U60543",
    "title": "Invånare 25-74 år med förgymnasial utbildning som röker dagligen, andel (%)"
  },
  {
    "id": "U60544",
    "title": "Invånare 25-74 år med gymnasial utbildning som röker dagligen, andel (%)"
  },
  {
    "id": "U60545",
    "title": "Invånare 25-74 år med eftergymnasial utbildning som röker dagligen, andel (%)"
  },
  {
    "id": "U60546",
    "title": "Kvinnor som röker eller snusar vid graviditetsvecka 8-12, andel (%)"
  },
  {
    "id": "U60547",
    "title": "Invånare 25-74 år med förgymnasial utbildning med riskabla alkoholvanor, andel (%)"
  },
  {
    "id": "U60548",
    "title": "Invånare 25-74 år med gymnasial utbildning med riskabla alkoholvanor, andel (%)"
  },
  {
    "id": "U60549",
    "title": "Invånare 25-74 år med eftergymnasial utbildning med riskabla alkoholvanor, andel (%)"
  },
  {
    "id": "U60550",
    "title": "Patienter i primärvården som diskuterat levnadsvanor, andel (%)"
  },
  {
    "id": "U60551",
    "title": "Avfallsåtervinning i sjukhusfastigheter, andel (%)"
  },
  {
    "id": "U60553",
    "title": "Värme lokaler egenproducerad (ej korrigerad), kWh/kvm BRA"
  },
  {
    "id": "U60554",
    "title": "Värme lokaler, köpt (levererad) (normalårskorrigerad), kWh/kvm BRA"
  },
  {
    "id": "U60555",
    "title": "El egenproducerad lokaler, kWh/kvm BRA"
  },
  {
    "id": "U60557",
    "title": "Värme lokaler, egenproducerad (normalårskorrigerad), kWh/kvm BRA"
  },
  {
    "id": "U60700",
    "title": "Invånare 17-24 år som varken arbetar eller studerar, län, andel (%)"
  },
  {
    "id": "U60703",
    "title": "Vuxna biståndsmottagare med långvarigt ekonomiskt bistånd region, andel (%) (-2013)"
  },
  {
    "id": "U60704",
    "title": "Deltagartillfällen i idrottsföreningar region, antal/inv 13-20 år"
  },
  {
    "id": "U60800",
    "title": "Area egna lokaler, kvm BRA"
  },
  {
    "id": "U60801",
    "title": "Area externt uthyrda lokaler, kvm BRA"
  },
  {
    "id": "U60803",
    "title": "Vakansgrad egna lokaler, procent kvm BRA (%)"
  },
  {
    "id": "U60808",
    "title": "Area inhyrda lokaler och bostäder, kvm BRA"
  },
  {
    "id": "U60823",
    "title": "Förbrukning av fjärrkyla, kWh/kvm"
  },
  {
    "id": "U60916",
    "title": "Antal i befolkningen, 19-24 år, med sjuk- och aktivitetsersättning pga psykisk ohälsa, antal/1000 invånare (-2013)"
  },
  {
    "id": "U60977",
    "title": "Medarbetarengagemang (HME) totalt regionen - Motivationsindex, senaste mätning på tre år"
  },
  {
    "id": "U60978",
    "title": "Medarbetarengagemang (HME) totalt regionen- Styrningsindex, senaste mätning på tre år"
  },
  {
    "id": "U60979",
    "title": "Medarbetarengagemang (HME) totalt regionen- Totalindex, senaste mätning på tre år"
  },
  {
    "id": "U60980",
    "title": "Medarbetarengagemang (HME) totalt regionen - Ledarskapsindex, senaste mätning på tre år"
  },
  {
    "id": "U61400",
    "title": "Klamydiafall i åldern 15-24 år, antal/100 000"
  },
  {
    "id": "U65860",
    "title": "Inrikes födda som röstade i senaste kommunfullmäktigevalet, andel (%)"
  },
  {
    "id": "U65861",
    "title": "Utrikes födda som röstade i senaste kommunfullmäktigevalet, andel (%)"
  },
  {
    "id": "U65862",
    "title": "Invånare med förgymnasial utbilning som röstade i senaste kommunfullmäktigevalet, andel (%)"
  },
  {
    "id": "U65863",
    "title": "Invånare med gymnasial utbilning som röstade i senaste kommunfullmäktigevalet, andel (%)"
  },
  {
    "id": "U65864",
    "title": "Invånare med eftergymnasial utbilning som röstade i senaste kommunfullmäktigevalet, andel (%)"
  },
  {
    "id": "U65865",
    "title": "Invånare 18-29 år som röstade i senaste kommunfullmäktigevalet, andel (%)"
  },
  {
    "id": "U65866",
    "title": "Invånare 30-49 år som röstade i senaste kommunfullmäktigevalet, andel (%)"
  },
  {
    "id": "U65867",
    "title": "Invånare 50-64 år som röstade i senaste kommunfullmäktigevalet, andel (%)"
  },
  {
    "id": "U65868",
    "title": "Invånare 65+ år som röstade i senaste kommunfullmäktigevalet, andel (%)"
  },
  {
    "id": "U65869",
    "title": "Ej förstagångsväljare som röstade i senaste kommunfullmäktigevalet, andel (%)"
  },
  {
    "id": "U70001",
    "title": "Justerad läkemedelskostnad, kr/inv"
  },
  {
    "id": "U70020",
    "title": "Strukturjusterad hälso- och sjukvårdskostnad, kr/inv"
  },
  {
    "id": "U70200",
    "title": "Medarbetarengagemang (HME) hälso- och sjukvård totalt - Totalindex"
  },
  {
    "id": "U70201",
    "title": "Medarbetarengagemang (HME) hälso- och sjukvård totalt - Motivationsindex"
  },
  {
    "id": "U70202",
    "title": "Medarbetarengagemang (HME) hälso- och sjukvård totalt - Ledarskapsindex"
  },
  {
    "id": "U70203",
    "title": "Medarbetarengagemang (HME) hälso- och sjukvård totalt - Styrningsindex"
  },
  {
    "id": "U70402",
    "title": "Invånare som anser sig ha tillgång till den vård de behöver, andel (%) (-2015)"
  },
  {
    "id": "U70406",
    "title": "Självmord och dödsfall med oklart uppsåt, antal/100 000 inv"
  },
  {
    "id": "U70418",
    "title": "Följsamhet till basala hygienrutiner och klädregler specialiserad somatisk slutenvård, andel (%)"
  },
  {
    "id": "U70419",
    "title": "Följsamhet till basala hygienrutiner i hälso- och sjukvård totalt, andel (%)"
  },
  {
    "id": "U70420",
    "title": "Följsamhet till basala klädregler i hälso- och sjukvård totalt, andel (%)"
  },
  {
    "id": "U70421",
    "title": "Följsamhet till basala hygienrutiner och klädregler i somatisk och psykiatrisk slutenvård, andel (%)"
  },
  {
    "id": "U70422",
    "title": "Följsamhet till basala hygienrutiner i somatisk och psykiatrisk slutenvård, andel (%)"
  },
  {
    "id": "U70423",
    "title": "Följsamhet till basala klädregler i somatisk och psykiatrisk slutenvård, andel (%)"
  },
  {
    "id": "U70424",
    "title": "Responstid för ambulans, mediantid i minuter"
  },
  {
    "id": "U70425",
    "title": "Överbeläggningar i somatisk slutenvård, antal per 100 disponibla vårdplatser"
  },
  {
    "id": "U70429",
    "title": "Invånare med förtroende för hälso- och sjukvården, andel (%) (-2015)"
  },
  {
    "id": "U70430",
    "title": "Invånare som uppfattar att vården ges på lika villkor, andel (%) (-2015)"
  },
  {
    "id": "U70431",
    "title": "Invånare som upplever att väntetid till besök och behandling på sjukhus är rimlig, andel (%) (-2015)"
  },
  {
    "id": "U70432",
    "title": "Upplevd telefontillgänglighet till 1177, andel (%) (-2015)"
  },
  {
    "id": "U70443",
    "title": "Förtroende för 1177 vårdguiden på webben, 1177.se, andel (%)"
  },
  {
    "id": "U70444",
    "title": "Förtroende för 1177 vårdguiden via telefon, andel (%)"
  },
  {
    "id": "U70445",
    "title": "Förtroende för att vård ges på lika villkor, andel (%)"
  },
  {
    "id": "U70446",
    "title": "Förtroende för sjukhus, andel (%)"
  },
  {
    "id": "U70447",
    "title": "Förtroende för sjukvården i sin helhet, andel (%)"
  },
  {
    "id": "U70448",
    "title": "Rimlig väntetid till sjukhusvård, andel (%)"
  },
  {
    "id": "U70449",
    "title": "Tillgång till den hälso- och sjukvård man behöver, andel (%)"
  },
  {
    "id": "U70450",
    "title": "Rimlig väntetid till vård- eller hälsocentral, andel (%)"
  },
  {
    "id": "U71200",
    "title": "Medarbetarengagemang (HME) primärvård - Totalindex"
  },
  {
    "id": "U71201",
    "title": "Medarbetarengagemang (HME) primärvård - Motivationsindex"
  },
  {
    "id": "U71202",
    "title": "Medarbetarengagemang (HME) primärvård - Ledarskapsindex"
  },
  {
    "id": "U71203",
    "title": "Medarbetarengagemang (HME) primärvård - Styrningsindex"
  },
  {
    "id": "U71400",
    "title": "Barn och ungdomar med diabetes som når behandlingsmålet för HbA1c (blodsockervärde), andel (%)"
  },
  {
    "id": "U71405",
    "title": "Invånare med stort förtroende för vården vid vårdcentral, andel (%) (-2015)"
  },
  {
    "id": "U71408",
    "title": "Patienter som anser att det är lätt att få telefonkontakt med vårdcentral (motsv), % (-2018)"
  },
  {
    "id": "U71409",
    "title": "Genomförda läkarbesök inom sju dagar i primärvård, andel (%)"
  },
  {
    "id": "U71411",
    "title": "Personer med undvikbara slutenvårdstillfällen, antal/100 000 inv"
  },
  {
    "id": "U71440",
    "title": "Patienter med diabetes i primärvård som lider av fetma, andel (%) (-2018)"
  },
  {
    "id": "U71441",
    "title": "Patienter med typ 2 diabetes som är fysiskt inaktiva, andel (%) (-2018)"
  },
  {
    "id": "U71443",
    "title": "Invånare som upplever att väntetid till vårdcentral är rimlig, andel (%) (-2015)"
  },
  {
    "id": "U71444",
    "title": "Patienter med typ 2 diabetes med HbA1c lägre än 52 mmol/mol, andel (%) (-2018)"
  },
  {
    "id": "U71445",
    "title": "Patienter med typ 2 diabetes med blodtryck lika med eller lägre än 130/80 mmHg, andel (%) (-2018)"
  },
  {
    "id": "U71451",
    "title": "Patientupplevd kvalitet avseende helhetsintryck i primärvården, index"
  },
  {
    "id": "U71452",
    "title": "Patientupplevd kvalitet avseende emotionellt stöd i primärvården, index"
  },
  {
    "id": "U71453",
    "title": "Patientupplevd kvalitet avseende delaktighet och involvering i primärvården, index"
  },
  {
    "id": "U71454",
    "title": "Patientupplevd kvalitet avseende respekt och bemötande i primärvården, index"
  },
  {
    "id": "U71455",
    "title": "Patientupplevd kvalitet avseende kontinuitet och koordinering i primärvården, index"
  },
  {
    "id": "U71456",
    "title": "Patientupplevd kvalitet avseende information och kunskap i primärvården, index"
  },
  {
    "id": "U71457",
    "title": "Patientupplevd kvalitet avseende tillgänglighet i primärvården, index"
  },
  {
    "id": "U71458",
    "title": "Förtroende för vård-/hälsocentral, andel (%)"
  },
  {
    "id": "U72001",
    "title": "Kostnad/konsumerad DRG-poäng inom specialiserad somatisk vård, kr"
  },
  {
    "id": "U72200",
    "title": "Medarbetarengagemang (HME) specialiserad somatisk vård - Totalindex"
  },
  {
    "id": "U72201",
    "title": "Medarbetarengagemang (HME) specialiserad somatisk vård - Motivationsindex"
  },
  {
    "id": "U72202",
    "title": "Medarbetarengagemang (HME) specialiserad somatisk vård - Ledarskapsindex"
  },
  {
    "id": "U72203",
    "title": "Medarbetarengagemang (HME) specialiserad somatisk vård - Styrningsindex"
  },
  {
    "id": "U72400",
    "title": "28-dagars dödlighet bland sjukhusvårdade efter stroke, andel (%)"
  },
  {
    "id": "U72401",
    "title": "28-dagars dödlighet efter stroke, andel (%)"
  },
  {
    "id": "U72412",
    "title": "Patienter i livets slutskede som har skattat sin smärta med VAS/NRS, andel (%) (-2018)"
  },
  {
    "id": "U72413",
    "title": "Patienter i livets slutskede som har vidbehovsordination av opiater, andel (%)"
  },
  {
    "id": "U72419",
    "title": "Implantat vid höftledsplastik som överlever 10 år, andel (%)"
  },
  {
    "id": "U72420",
    "title": "Invånare med stort förtroende för vården vid sjukhus, andel (%) (-2015)"
  },
  {
    "id": "U72426",
    "title": "Omoperationer inom 2 år efter höftledsplastik, andel (%)"
  },
  {
    "id": "U72428",
    "title": "Patienter efter hjärtinfarkt som behandlas m. blodfettsänk beh. (statiner), andel (%)"
  },
  {
    "id": "U72430",
    "title": "Patienter i sluten vård med vårdrelaterad infektion, andel (%)"
  },
  {
    "id": "U72437",
    "title": "Protesopererade patienter 65 år och äldre vid cervikal höftfraktur, andel (%)"
  },
  {
    "id": "U72448",
    "title": "Strokepatienter med förmaksflimmer som får blodförtunnande behandling, andel (%)"
  },
  {
    "id": "U72452",
    "title": "Knäproteser som inte omopereras inom 10 år, andel (%)"
  },
  {
    "id": "U72453",
    "title": "Återinskrivningar för strokesjukvård inom 1 år efter stroke, andel (%)"
  },
  {
    "id": "U72465",
    "title": "Höftledsplastik, förbättring i EQ-index efter operation, enheter"
  },
  {
    "id": "U72474",
    "title": "Väntat högst 90 dagar på operation/åtgärd i specialiserad vård, andel (%)"
  },
  {
    "id": "U72482",
    "title": "Förbättring av hälsa 4-12 månader efter behandlingsstart med biologiska läkemedel vid reumatoid artrit, VAS-skattad hälsa"
  },
  {
    "id": "U72515",
    "title": "Patienttillfredsställelse efter total höftprotesoperation, andel (%)"
  },
  {
    "id": "U72516",
    "title": "Patienter med halvprotes som inte omopereras inom 1 år efter höftprotesoperation, andel (%) (-2018)"
  },
  {
    "id": "U72518",
    "title": "Patientrapporterad förbättring 1 år efter operation av spinal stenos, andel (%)"
  },
  {
    "id": "U72519",
    "title": "Patientrapporterad förbättring 1 år efter operation av diskbråck, andel (%)"
  },
  {
    "id": "U72521",
    "title": "Förbättring 4-12 mån. efter behandlingsstart av första biologiska läkemedel vid reumatoid artrit, andel (%)"
  },
  {
    "id": "U72531",
    "title": "Strokepatienter som 12 mån. efter insjuknandet anger att behovet av rehabilitering är tillgodosett, andel (%)"
  },
  {
    "id": "U72549",
    "title": "Väntat högst 90 dagar på första besök i specialiserad vård, andel (%)"
  },
  {
    "id": "U72551",
    "title": "Väntat högst 90 dagar på första besök i allmänpsykiatrisk vård, andel (%)"
  },
  {
    "id": "U72553",
    "title": "Patienter i somatisk slutenvård med tryckskada/trycksår, andel (%)"
  },
  {
    "id": "U72554",
    "title": "Patienter i somatisk slutenvård med tryckskada/trycksår i kategori 2, 3 och/eller 4, andel (%)"
  },
  {
    "id": "U72555",
    "title": "Patienter i riskzon för trycksår i somatisk slutenvård som har förebyggande eller behandlande madrass, andel (%)"
  },
  {
    "id": "U72614",
    "title": "Döda inom 30-365 dagar efter förstagångshöftfraktur, antal/inv. 50+"
  },
  {
    "id": "U72618",
    "title": "Patienter som slutat rökt efter stroke, andel (%)"
  },
  {
    "id": "U72629",
    "title": "Läkemedel mot benskörhet efter fraktur, andel (%) 50+"
  },
  {
    "id": "U72630",
    "title": "Patientskattat resultat 2 år efter förstagångsoperation av främre korsband, medelvärde"
  },
  {
    "id": "U72631",
    "title": "Väntat högst 90 dagar på första besök till ortopedisk mottagning, andel (%)"
  },
  {
    "id": "U72632",
    "title": "Väntat högst 90 dagar på knäprotesoperation, andel (%)"
  },
  {
    "id": "U72633",
    "title": "Väntat högst 90 dagar på höftprotesoperation, andel (%)"
  },
  {
    "id": "U72635",
    "title": "Väntat högst 90 dagar på första besök till reumatologisk mottagning, andel (%)"
  },
  {
    "id": "U72648",
    "title": "Väntat högst 90 dagar på första besök inom ögonsjukvård, andel (%) (-2018)"
  },
  {
    "id": "U72649",
    "title": "Väntat högst 90 dagar på gråstarrsoperation, andel (%) (-2018)"
  },
  {
    "id": "U72657",
    "title": "Positivt helhetsintryck hos patienter som besökt en primärvårdsmottagning, andel (%)"
  },
  {
    "id": "U72672",
    "title": "Positivt helhetsintryck hos patienter som besökt en akutmottagning, andel (%)"
  },
  {
    "id": "U72679",
    "title": "Personer med diabetes typ 1 som har behandling med insulinpump (Medicinklinik, andel (%)"
  },
  {
    "id": "U72681",
    "title": "Kataraktoperationer, åldersstandardiserade värden. Operationer/per 1000 invånare"
  },
  {
    "id": "U74200",
    "title": "Medarbetarengagemang (HME) specialiserad psykiatrisk vård - Totalindex"
  },
  {
    "id": "U74201",
    "title": "Medarbetarengagemang (HME) specialiserad psykiatrisk vård - Motivationsindex"
  },
  {
    "id": "U74202",
    "title": "Medarbetarengagemang (HME) specialiserad psykiatrisk vård - Ledarskapsindex"
  },
  {
    "id": "U74203",
    "title": "Medarbetarengagemang (HME) specialiserad psykiatrisk vård - Styrningsindex"
  },
  {
    "id": "U74429",
    "title": "Patienter som utvärderats med MADRS/MADRS-S efter ECT vid depression, andel (%) (-2018)"
  },
  {
    "id": "U77407",
    "title": "Regelbunden behandling med sömn-/lugnande medel, antal personer/1000 inv"
  },
  {
    "id": "U77412",
    "title": "Tio eller fler läkemedel samtidigt bland personer 75+, andel (%) (-2015)"
  },
  {
    "id": "U77421",
    "title": "Recept på penicillin V till barn 0-6 år av alla recept på antibiotika som vanligtvis används vid luftvägsinfektion, andel (%)"
  },
  {
    "id": "U77423",
    "title": "Recept på kinoloner av uthämtade recept på urinvägsantibiotika, andel (%)"
  },
  {
    "id": "U79019",
    "title": "Akut öppnande av kranskärl vid större hjärtinfarkt, andel (%)"
  },
  {
    "id": "U79023",
    "title": "Antikoagulantia vid förmaksflimmer och riskfaktorer, andel (%)"
  },
  {
    "id": "U79025",
    "title": "Basbehandling vid hjärtsvikt, andel (%)"
  },
  {
    "id": "U79029",
    "title": "Besök på akutmottagning - 80 år och äldre, antal/1000 inv"
  },
  {
    "id": "U79038",
    "title": "Dödlighet 28 dagar efter sjukhusvårdad hjärtinfarkt, andel (%)"
  },
  {
    "id": "U79040",
    "title": "Dödlighet efter höftfraktur, andel (%)"
  },
  {
    "id": "U79041",
    "title": "Eftervårdsbesök på barnmorskemottagning, andel (%)"
  },
  {
    "id": "U79049",
    "title": "Genomförda första besök inom 90 dagar i allmänpsykiatrisk vård, andel (%)"
  },
  {
    "id": "U79053",
    "title": "Genomförda första besök inom 90 dagar i specialiserad vård, andel (%)."
  },
  {
    "id": "U79062",
    "title": "Kontaktsjuksköterska vid nydiagnosticerad prostatacancer, andel (%)"
  },
  {
    "id": "U79063",
    "title": "Kontaktsjuksköterska vid nydiagnostiserad bröstcancer, andel (%)"
  },
  {
    "id": "U79071",
    "title": "Multidisciplinär konferens vid lungcancer, andel (%)"
  },
  {
    "id": "U79073",
    "title": "Multidisciplinär konferens vid tjocktarmscancer, andel (%)"
  },
  {
    "id": "U79080",
    "title": "Måluppfyllelse för LDL-kolesterol efter hjärtinfarkt, andel (%)"
  },
  {
    "id": "U79092",
    "title": "Patienter med oplanerad återinskrivning inom 30 dagar, andel (%)"
  },
  {
    "id": "U79093",
    "title": "Patienter med trycksår i slutenvård, andel (%)"
  },
  {
    "id": "U79118",
    "title": "Självmord i befolkningen, antal/100 000 inv"
  },
  {
    "id": "U79132",
    "title": "Trycksår hos patienter med ökad risk, andel (%)"
  },
  {
    "id": "U79133",
    "title": "Påverkbar slutenvård vid kronisk sjukdom, antal/100 000 inv"
  },
  {
    "id": "U79134",
    "title": "Utlokaliserade patienter i somatisk slutenvård, antal/100 000 disponibla vårdplatser"
  },
  {
    "id": "U79135",
    "title": "Utskrivningsklara patienter på sjukhus, antal vårddygn/100 000 inv"
  },
  {
    "id": "U79139",
    "title": "Vårdtillfällen per 100 000 invånare, antal vårdtillfällen/100 000 inv"
  },
  {
    "id": "U79145",
    "title": "Återfraktur inom 3 år efter fragilitetsfraktur, antal/100000 levnadsår"
  },
  {
    "id": "U79148",
    "title": "Återkommande slutenvård i livets slutskede, andel (%)"
  },
  {
    "id": "U79149",
    "title": "Överbeläggningar i psykiatrisk slutenvård, antal/100 disponibla vårdplatser"
  },
  {
    "id": "U79151",
    "title": "Överdödlighet i hjärt- och kärlsjukdom vid diabetes, kvotvärde"
  },
  {
    "id": "U79200",
    "title": "Medarbetarengagemang (HME) övrig hälso- och sjukvård - Totalindex"
  },
  {
    "id": "U79201",
    "title": "Medarbetarengagemang (HME) övrig hälso- och sjukvård - Motivationsindex"
  },
  {
    "id": "U79202",
    "title": "Medarbetarengagemang (HME) övrig hälso- och sjukvård - Ledarskapsindex"
  },
  {
    "id": "U79203",
    "title": "Medarbetarengagemang (HME) övrig hälso- och sjukvård - Styrningsindex"
  },
  {
    "id": "U80200",
    "title": "Medarbetarengagemang (HME) tandvård - Totalindex"
  },
  {
    "id": "U80201",
    "title": "Medarbetarengagemang (HME) tandvård - Motivationsindex"
  },
  {
    "id": "U80202",
    "title": "Medarbetarengagemang (HME) tandvård - Ledarskapsindex"
  },
  {
    "id": "U80203",
    "title": "Medarbetarengagemang (HME) tandvård - Styrningsindex"
  },
  {
    "id": "U80400",
    "title": "Antibiotika förskrivet av tandläkare, recept/1000 inv"
  },
  {
    "id": "U85001",
    "title": "Nettokostnad kollektivtrafik, kr/inv"
  },
  {
    "id": "U85002",
    "title": "Nettokostnad kollektivtrafik, kr/utbudskilometer"
  },
  {
    "id": "U85200",
    "title": "Medarbetarengagemang (HME) regional utveckling - Totalindex"
  },
  {
    "id": "U85201",
    "title": "Medarbetarengagemang (HME) regional utveckling - Motivationsindex"
  },
  {
    "id": "U85202",
    "title": "Medarbetarengagemang (HME) regional utveckling - Ledarskapsindex"
  },
  {
    "id": "U85203",
    "title": "Medarbetarengagemang (HME) regional utveckling - Styrningsindex"
  },
  {
    "id": "U85400",
    "title": "Tillgänglighet transport -  sammanlagt resultat, andel (%) av maxpoäng (-2016)"
  },
  {
    "id": "U85420",
    "title": "Allmänhetens nöjdhet med kollektivtrafiken, andel (%)"
  },
  {
    "id": "U85421",
    "title": "Resenärernas nöjdhet med kollektivtrafiken, andel (%)"
  },
  {
    "id": "U85422",
    "title": "Beläggning kollektivtrafik totalt, person-km/utbuds-km"
  },
  {
    "id": "U85423",
    "title": "Beläggning kollektivtrafik buss, person-km/utbuds-km"
  },
  {
    "id": "U85424",
    "title": "Beläggning kollektivtrafik tåg, person-km/utbuds-km"
  },
  {
    "id": "U85425",
    "title": "Energianvändning bussar, KWh/km"
  },
  {
    "id": "U85426",
    "title": "Förnybara drivmedel kollektivtrafik buss, andel (%)"
  },
  {
    "id": "U85427",
    "title": "Marknadsandel för kollektivtrafik, andel (%)"
  },
  {
    "id": "U85428",
    "title": "Tillgänglighetsanpassade fordon, andel (%)"
  },
  {
    "id": "U85429",
    "title": "Utbudskilometer totalt, km/inv"
  },
  {
    "id": "U85430",
    "title": "Utbudskilometer buss, km/inv"
  },
  {
    "id": "U85431",
    "title": "Utbudskilometer tåg, km/inv"
  }
];
