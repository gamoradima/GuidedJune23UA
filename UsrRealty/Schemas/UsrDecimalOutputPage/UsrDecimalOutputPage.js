define("UsrDecimalOutputPage", [], function() {
	return {
		entitySchemaName: "",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			/*myValidator: function(value, column) {
				var msg = "";
				if (value != "111") {
					msg = "Значение в поле должно быть равно 111";
				}
				return {
					invalidMessage: msg
				};
			},
			setValidationConfig: function() {
				this.callParent(arguments);
				this.addColumnValidator("UsrTextToValidate", this.myValidator);
			}*/
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "FLOATd68c24fd-d8f8-46ed-b3f6-7b56d323a698",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrAvgPrice",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING42722394-88be-49d1-a77e-2b80a389b32f",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 4,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrSqlText",
					"enabled": false,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING3fb3de8d-3547-4bc7-92e6-bd87c49d5034",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrTextToValidate",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_DIFF*/
	};
});
