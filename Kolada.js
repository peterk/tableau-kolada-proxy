(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {

        //var municipality_kpi_connection = {
        //    "alias": "Municipality <-> KPI",
        //    "tables": [{
        //        "id": "kpis",
        //        "alias": "KPIs"
        //    }, {
        //        "id": "municipalities",
        //        "alias": "Municipalities"
        //    }],
        //    "joins": [{
        //        "left": {
        //            "tableAlias": "KPIs",
        //            "columnId": "municipality"
        //        },
        //        "right": {
        //            "tableAlias": "Municipalities",
        //            "columnId": "id"
        //        },
        //        "joinType": "left"
        //    }]
        //};

        var kpi_cols = [{
            id: "id",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "municipality",
            alias: "municipality",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "value",
            alias: "value",
            columnRole: "measure",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "year",
            alias: "year",
            columnRole: "dimension",
            dataType: tableau.dataTypeEnum.int
        }];

        var kpi_table_schema = {
            id: "kpis",
            alias: "KPIs",
            columns: kpi_cols
        };



        //  var orgunit_cols = [{
        //      id: "id",
        //      dataType: tableau.dataTypeEnum.string
        //  }, {
        //      id: "title",
        //      alias: "title",
        //      dataType: tableau.dataTypeEnum.string
        //  }, {
        //      id: "municipality_id",
        //      alias: "municipality_id",
        //      dataType: tableau.dataTypeEnum.string
        //  }];

        //  var orgunit_table_schema = {
        //      id: "orgunits",
        //      alias: "Organizational units",
        //      columns: orgunit_cols
        //  };
    
        var municipality_cols = [{
            id: "id",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "title",
            alias: "title",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "type",
            dataType: tableau.dataTypeEnum.string
        }];

        var municipality_table_schema = {
            id: "municipalities",
            alias: "Municipalities",
            columns: municipality_cols
        };

        //schemaCallback([orgunit_table_schema, municipality_table_schema, kpi_table_schema], [municipality_orgunit_connection]);
        schemaCallback([municipality_table_schema, kpi_table_schema]);
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
            var apiurl = "http://api.kolada.se/v2/data/kpi/" + selected_kpis.join(",") + "/year/" + years; 
            tableau.log("API url: " + apiurl);

            $.getJSON(apiurl, function(resp) {
                var feat = resp.values, tableData = [];

                tableau.log("Loaded " + feat.length + " KPI values");
        
                // Iterate over the JSON object
                for (var i = 0, len = feat.length; i < len; i++) {
                    
                    //Skip all non 4 digit orgs and ignore Riket
                    if(feat[i].municipality.length == 4 && feat[i].municipality != '0000') {
                        //tableau.log("Adding KPI value for " + feat[i].municipality);
                        tableData.push({
                            "id": feat[i].kpi,
                            "value": feat[i].values[0].value,
                            "year": feat[i].period,
                            "municipality": feat[i].municipality
                        });
                    }
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
