# Mock server with json-server

1. Install JSON Server

```cmd
npm install -g json-server
```

2. Create a JSON File (db.json): this is the endpoint that will be automatically generated by the JSON Server
    * GET /users
    * GET /users/:id 
    * POST /users
    * PUT /users/:id 
    * DELETE /users/:id

```json
{
    "budget": {"p_budget_id":567701},
    "budgetById": {
        "p_cur_budget": [
            {
                "BUDGET_ID": 567701,
                "BUDGET_DESCRIPTION": "Cotización de Salud",
                "BUDGET_AREA_ID": 2,
                "AREA_NAME": "PINVEST",
                "DATE_CREATION": "27/09/2024",
                "STATUS_ID": 1,
                "STATUS": "VALID",
                "EXPIRED_ON": "07/10/2024",
                "CREATED_BY": 340,
                "BUDGET_PARTNER_CODE": "14",
                "APPLICANT_NAME": null,
                "APPLICANT_SURNAME": null,
                "APPLICANT_PHONE_CODE": null,
                "APPLICANT_PHONE_NUMBER": null,
                "APPLICANT_EMAIL": null,
                "EMITED_NUMBER": null,
                "EMITED_CERT": null,
                "PLAN_ID_BUY": null,
                "PLAN_ID_PAY": null,
                "INDDOMICILADO": "N",
                "WORKFLOW_ID": null
            }
        ],
        "p_budget_info": {
            "p_ages_titu": "29",
            "p_ages": "",
            "p_applicant_name": "",
            "p_applicant_phone_number": "",
            "p_applicant_email": "",
            "p_broker_office": "001001",
            "p_office_list": "001001",
            "p_all_ages": "29",
            "partner_code": "14",
            "p_portal_user_id": 340,
            "insured": [
                {
                    "insured_id": 702242,
                    "relationship_code": "0002",
                    "age": 29
                }
            ],
            "office_code": "001001",
            "partner_name": "SEGUROS PIRAMIDE, C.A ",
            "created_by": 340
        },
        "p_budget_plans": {
            "plans":[
                {
                    "mtosumaasegbas":0,
                    "mtosumaaseg":0,
                    "mtodeducible":0,
                    "tipoclibase":"N",
                    "plan_id":6797002,
                    "codprod":"PAVI",
                    "codplan":"001",
                    "revplan":"001",
                    "descplanprod":"PRUEBA PINVEST",
                    "codofi":"001001",
                    "stsplan":"N",
                    "tipovig":"A",
                    "formpago":"",
                    "indsumaaseg":"S",
                    "indpago":"S",
                    "codmoneda":"DL",
                    "tipo_plan":"PAVI",
                    "descrip_tipo_plan":"PINVEST INDIVIDUAL",
                    "indplandomici":"N",
                    "indregprima":"",
                    "indventaalter":"N",
                    "sumaaseg":5000,
                    "categoria":"GENERAL",
                    "coberturas":[
                        {
                            "cobert_id":77706759,
                            "insured_id":702267,
                            "age":29,
                            "codprod":"PAVI",
                            "codplan":"001",
                            "revplan":"001",
                            "codramocert":"VIDA",
                            "codcobert":"VIDA",
                            "desccobert":"Muerte Por Cualquier Causa (Solo Titular)",
                            "indcobertbase":"S",
                            "codmoneda":"DL",
                            "suma_aseg":5000,
                            "tasa":0,
                            "prima":612,
                            "mtodedmin":0,
                            "porcreemb":0,
                            "porcded":0,
                            "baseded":"S",
                            "indsumaded":"N",
                            "indincluida":"S",
                            "indcobertoblig":"S",
                            "indvisible":"S",
                            "permite_aseg":null
                        },
                        {
                            "cobert_id":77706760,
                            "insured_id":702267,
                            "age":29,
                            "codprod":"PAVI",
                            "codplan":"001",
                            "revplan":"001",
                            "codramocert":"PIAI",
                            "codcobert":"INVE",
                            "desccobert":"Cuota De Ahorro",
                            "indcobertbase":"N",
                            "codmoneda":"DL",
                            "suma_aseg":0,
                            "tasa":0,
                            "prima":0,
                            "mtodedmin":0,
                            "porcreemb":0,
                            "porcded":0,
                            "baseded":"S",
                            "indsumaded":"N",
                            "indincluida":"S",
                            "indcobertoblig":"S",
                            "indvisible":"S",
                            "permite_aseg":null
                        }
                    ],
                    "prima":612,
                    "fraccionamiento":[]
                },
                {
                    "mtosumaasegbas":0,
                    "mtosumaaseg":0,
                    "mtodeducible":0,
                    "tipoclibase":"N",
                    "plan_id":6797002,
                    "codprod":"PAVI",
                    "codplan":"001",
                    "revplan":"001",
                    "descplanprod":"PRUEBA PINVEST",
                    "codofi":"001001",
                    "stsplan":"N",
                    "tipovig":"A",
                    "formpago":"",
                    "indsumaaseg":"S",
                    "indpago":"S",
                    "codmoneda":"DL",
                    "tipo_plan":"PAVI",
                    "descrip_tipo_plan":"PINVEST INDIVIDUAL",
                    "indplandomici":"N",
                    "indregprima":"",
                    "indventaalter":"N",
                    "sumaaseg":5000,
                    "categoria":"GENERAL",
                    "coberturas":[
                        {
                            "cobert_id":77706759,
                            "insured_id":702267,
                            "age":29,
                            "codprod":"PAVI",
                            "codplan":"001",
                            "revplan":"001",
                            "codramocert":"VIDA",
                            "codcobert":"VIDA",
                            "desccobert":"Muerte Por Cualquier Causa (Solo Titular)",
                            "indcobertbase":"S",
                            "codmoneda":"DL",
                            "suma_aseg":5000,
                            "tasa":0,
                            "prima":612,
                            "mtodedmin":0,
                            "porcreemb":0,
                            "porcded":0,
                            "baseded":"S",
                            "indsumaded":"N",
                            "indincluida":"S",
                            "indcobertoblig":"S",
                            "indvisible":"S",
                            "permite_aseg":null
                        },
                        {
                            "cobert_id":77706760,
                            "insured_id":702267,
                            "age":29,
                            "codprod":"PAVI",
                            "codplan":"001",
                            "revplan":"001",
                            "codramocert":"PIAI",
                            "codcobert":"INVE",
                            "desccobert":"Cuota De Ahorro",
                            "indcobertbase":"N",
                            "codmoneda":"DL",
                            "suma_aseg":0,
                            "tasa":0,
                            "prima":0,
                            "mtodedmin":0,
                            "porcreemb":0,
                            "porcded":0,
                            "baseded":"S",
                            "indsumaded":"N",
                            "indincluida":"S",
                            "indcobertoblig":"S",
                            "indvisible":"S",
                            "permite_aseg":null
                        }
                    ],
                    "prima":612,
                    "fraccionamiento":[]
                },
                {
                    "mtosumaasegbas":0,
                    "mtosumaaseg":0,
                    "mtodeducible":0,
                    "tipoclibase":"N",
                    "plan_id":6797002,
                    "codprod":"PAVI",
                    "codplan":"001",
                    "revplan":"001",
                    "descplanprod":"PRUEBA PINVEST",
                    "codofi":"001001",
                    "stsplan":"N",
                    "tipovig":"A",
                    "formpago":"",
                    "indsumaaseg":"S",
                    "indpago":"S",
                    "codmoneda":"DL",
                    "tipo_plan":"PAVI",
                    "descrip_tipo_plan":"PINVEST INDIVIDUAL",
                    "indplandomici":"N",
                    "indregprima":"",
                    "indventaalter":"N",
                    "sumaaseg":5000,
                    "categoria":"GENERAL",
                    "coberturas":[
                        {
                            "cobert_id":77706759,
                            "insured_id":702267,
                            "age":29,
                            "codprod":"PAVI",
                            "codplan":"001",
                            "revplan":"001",
                            "codramocert":"VIDA",
                            "codcobert":"VIDA",
                            "desccobert":"Muerte Por Cualquier Causa (Solo Titular)",
                            "indcobertbase":"S",
                            "codmoneda":"DL",
                            "suma_aseg":5000,
                            "tasa":0,
                            "prima":612,
                            "mtodedmin":0,
                            "porcreemb":0,
                            "porcded":0,
                            "baseded":"S",
                            "indsumaded":"N",
                            "indincluida":"S",
                            "indcobertoblig":"S",
                            "indvisible":"S",
                            "permite_aseg":null
                        },
                        {
                            "cobert_id":77706760,
                            "insured_id":702267,
                            "age":29,
                            "codprod":"PAVI",
                            "codplan":"001",
                            "revplan":"001",
                            "codramocert":"PIAI",
                            "codcobert":"INVE",
                            "desccobert":"Cuota De Ahorro",
                            "indcobertbase":"N",
                            "codmoneda":"DL",
                            "suma_aseg":0,
                            "tasa":0,
                            "prima":0,
                            "mtodedmin":0,
                            "porcreemb":0,
                            "porcded":0,
                            "baseded":"S",
                            "indsumaded":"N",
                            "indincluida":"S",
                            "indcobertoblig":"S",
                            "indvisible":"S",
                            "permite_aseg":null
                        }
                    ],
                    "prima":612,
                    "fraccionamiento":[]
                }
            ]
        }
    }
  }
```


1. Start the Server

```cmd
json-server --watch db.json --port 8000
```