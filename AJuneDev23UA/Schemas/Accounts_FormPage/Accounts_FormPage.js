define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "EmployeesNumber",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "AddressList",
				"values": {
					"selectedRows": "$AddressList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "AddressList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContactsList",
				"values": {
					"selectedRows": "$ContactsList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "ContactsList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "RecommendedProductList",
				"values": {
					"selectedRows": "$RecommendedProductList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "RecommendedProductList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeadList",
				"values": {
					"selectedRows": "$LeadList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "LeadList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityList",
				"values": {
					"selectedRows": "$OpportunityList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "OpportunityList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "OrderList",
				"values": {
					"selectedRows": "$OrderList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "OrderList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContractList",
				"values": {
					"selectedRows": "$ContractList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "ContractList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "InvoiceList",
				"values": {
					"selectedRows": "$InvoiceList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "InvoiceList_SelectedRows"
					}
				}
			},
			{
				"operation": "merge",
				"name": "DocumentList",
				"values": {
					"selectedRows": "$DocumentList_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "DocumentList_SelectedRows"
					}
				}
			},
			{
				"operation": "insert",
				"name": "UsrWebsiteCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_4o6x2mc",
					"labelPosition": "auto",
					"control": "$StringAttribute_4o6x2mc",
					"multiline": false
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"StringAttribute_4o6x2mc": {
					"modelConfig": {
						"path": "PDS.UsrWebsiteCode"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});