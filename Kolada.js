// Only get total for KPIs with gender dimension

function getFeatureTotal(feat) {
    if (feat.values.length > 1) {
        for (let i = 0; i < feat.values.length; i++) { 
            f = feat.values[i];
            if (f.gender == "T") {
                return f.value;
            }
        }
    } else {
        return feat.values[0].value;
    }
};


(function () {
    var myConnector = tableau.makeConnector();
    
    const municipality_ids = "1440,1489,0764,0604,1984,2506,2505,1784,1882,2084,1460,2326,2403,1260,2582,1443,2183,0885,2081,1490,0127,0560,1272,2305,1231,1278,1438,0162,1862,2425,1730,0125,0686,0862,0381,0484,1285,1445,1982,1382,1499,2080,1782,0562,0482,1763,1439,2026,0662,0461,0617,0980,1764,1444,1447,2523,2180,1480,1471,0643,1783,1861,1961,1380,1761,0136,2583,0331,2083,1283,1466,1497,2104,0126,2184,0860,1315,0305,1863,2361,2280,1401,1293,1284,0821,1266,1267,2510,0123,0680,2514,0880,1446,1082,1883,1080,1780,0483,1715,0513,2584,1276,0330,2282,1290,1781,2309,1881,1384,1960,1482,1261,1983,1381,1282,1860,1814,2029,1441,0761,0186,1494,1462,1885,0580,0781,2161,1864,1262,2085,2580,1281,2481,1484,1280,2023,2418,1493,1463,0767,1461,0586,2062,0583,0642,1430,1762,1481,0861,0840,0182,1884,1962,2132,2401,0581,0188,2417,0881,0140,0480,0192,0682,2101,1060,2034,1421,1273,0882,2121,0481,2521,1402,1275,2581,2303,2409,1081,2031,1981,0128,2181,0191,1291,1265,1495,2482,1904,1264,1496,2061,2283,0163,0184,2422,1427,1230,1415,0180,1760,2421,0486,1486,2313,0183,2281,1766,1907,1214,1263,1465,1785,2082,0684,2182,0582,0181,1083,1435,1472,1498,0360,2262,0763,1419,1270,1737,0834,1452,0687,1287,1488,0488,0138,0160,1473,1485,1491,2480,0114,0139,0380,0760,0584,0665,0563,0115,2021,1470,1383,0187,1233,0685,2462,0884,2404,0428,1442,1487,2460,0120,0683,0883,1980,0780,0512,1286,1492,2260,2321,1765,2463,1277,0561,0765,2039,0319,2560,1292,1407,0509,1880,1257,2284,2380,0117,0382,1256,2513,2518"
    
    myConnector.getSchema = function (schemaCallback) {
        
        var municipality_kpi_connection = {
            "alias": "Municipality and KPI",
            "tables": [{
                "id": "kpis",
                "alias": "KPIs"
            }, {
                "id": "municipalities",
                "alias": "Municipalities"
            }],
            "joins": [{
                "left": {
                    "tableAlias": "KPIs",
                    "columnId": "municipality_id"
                },
                "right": {
                    "tableAlias": "Municipalities",
                    "columnId": "id"
                },
                "joinType": "left"
            }]
        };
        
        var selected_kpis = JSON.parse(tableau.connectionData)["selected_kpis"];
        var kpi_cols = [];
        tableau.log("Selected kpi data in getSchema: " + selected_kpis);
        
        for (let i = 0; i < selected_kpis.length; i++) {
            kpi = selected_kpis[i];
            tableau.log("Adding kpi to table schema: " + String(kpi));
            kpi_cols.push({id: String(kpi), description: "Testbeskrivning" + kpi, alias: String(kpi), columnRole: "measure", dataType: tableau.dataTypeEnum.float});
        }
        
        kpi_cols.push({
            id: "municipality_id",
            alias: "Municipality Id",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "year",
            alias: "Year",
            columnRole: "dimension",
            dataType: tableau.dataTypeEnum.date
        });
        
        tableau.log("KPI cols: " + JSON.stringify(kpi_cols));
        
        var kpi_table_schema = {
            id: "kpis",
            alias: "KPIs",
            columns: kpi_cols
        };
        
        
        var municipality_cols = [{
            id: "id",
            alias: "Id",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "title",
            alias: "Name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "type",
            alias: "Type",
            dataType: tableau.dataTypeEnum.string
        }];
        
        var municipality_table_schema = {
            id: "municipalities",
            alias: "Municipalities",
            columns: municipality_cols
        };
        
        schemaCallback([municipality_table_schema, kpi_table_schema], [municipality_kpi_connection]);
    };
    
    
    
    myConnector.getData = function(table, doneCallback) {
        
        //check which table we're loading
        if (table.tableInfo.id == "municipalities") {
            tableau.log("Loading municipalities data");
            $.getJSON("http://api.kolada.se/v2/municipality", function(resp) {
            var feat = resp.values,
            tableData = [];
            
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "id": feat[i].id,
                    "title": feat[i].title,
                    "type": feat[i].type
                });
            }
            
            table.appendRows(tableData);
            doneCallback();
        });
    }
    
    
    if (table.tableInfo.id == "orgunits") {
        tableau.log("Loading orgunit data");
        $.getJSON("http://api.kolada.se/v2/ou", function(resp) {
        var feat = resp.values,
        tableData = [];
        
        // Iterate over the JSON object
        for (var i = 0, len = feat.length; i < len; i++) {
            tableData.push({
                "id": feat[i].id,
                "title": feat[i].title,
                "municipality_id": feat[i].municipality
            });
        }
        
        table.appendRows(tableData);
        doneCallback();
    });
}



if (table.tableInfo.id == "kpis") {
    
    tableau.log("Loading kpi data");
    
    //only get data for selected KPI:s
    var selected_kpis = JSON.parse(tableau.connectionData)["selected_kpis"];
    var years = JSON.parse(tableau.connectionData)["years"];
    
    tableau.log("Selected years: " + years);
    
    tableau.log("Selected KPIS: " + selected_kpis.join(","));
    var apiurl = "http://api.kolada.se/v2/data/kpi/" + selected_kpis.join(",") + "/municipality/" + municipality_ids + "/year/" + years; 
    tableau.log("API url: " + apiurl);
    
    $.getJSON(apiurl, function(resp) {
        var json = resp.values, tableData = [];
        tableau.log("Loaded " + json.length + " KPI values");
        
        var m = new Map();
        
        for (let i = 0, len = json.length; i < len; i++) {
            feat = json[i];
            
            //use municipality and year as key
            key = String(feat.period).concat("_", feat.municipality);
            
            if(m.has(key)) {
                //m.set(key, Object.assign(m.get(key), {[feat.kpi]: feat.values[0].value}));
                m.set(key, Object.assign(m.get(key), {[feat.kpi]: getFeatureTotal(feat)}));
            } else {
                m.set(key, {[feat.kpi]: getFeatureTotal(feat), "year": String(feat.period).concat("-12-31"), "municipality_id": feat.municipality});
            };
        }
        
        for (let [key, value] of m) {
            tableData.push(value);
        }
        
        table.appendRows(tableData);
        doneCallback();
    });
}

};


tableau.registerConnector(myConnector);

$(document).ready(function () {
    $("#submitButton").click(function () {
        var selected_kpis = $('#my-select').val();
        var years = $('#years').val();
        if(!selected_kpis || selected_kpis.length == 0) {
            alert("Välj en eller flera KPI:er först.");
            return;
        }
        tableau.connectionData = JSON.stringify({"selected_kpis": selected_kpis, "years": years});
        tableau.log("Connection data: " + tableau.connectionData);
        tableau.connectionName = "Kolada";
        tableau.submit();
    });
});
})();