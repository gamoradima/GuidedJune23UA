namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("1c01b15b-5a0b-4def-a0e0-544efc17d8eb");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("0e2bc046-3cd8-48a1-bbfd-6dc87f405002");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,193,110,219,48,12,189,27,216,63,16,198,14,54,16,8,237,181,217,10,52,89,54,4,40,186,161,113,118,41,122,80,100,198,213,32,75,134,36,167,203,134,252,251,40,41,89,227,164,197,198,147,77,61,62,190,247,64,205,91,116,29,23,8,21,90,203,157,89,123,54,53,122,45,155,222,114,47,141,206,126,103,64,213,59,169,27,88,108,157,199,118,124,212,57,158,106,91,163,223,122,179,200,102,218,75,47,209,253,7,132,205,54,168,253,30,249,16,187,219,216,186,149,36,64,163,45,22,226,9,91,126,71,234,225,35,228,75,103,239,145,43,191,205,203,199,56,211,245,43,37,5,8,197,157,131,244,244,10,11,92,193,132,59,124,229,37,146,36,231,71,116,102,67,114,101,141,176,49,178,134,175,122,174,29,90,79,62,10,179,250,129,194,131,67,93,163,29,65,98,156,224,154,76,69,222,27,219,56,192,242,47,225,11,117,168,21,137,96,199,116,7,30,44,199,3,96,226,5,27,13,145,241,34,53,202,132,31,98,107,20,178,229,10,58,43,69,8,41,13,177,47,232,171,109,135,245,212,168,190,213,223,185,234,241,195,30,122,93,132,32,191,5,252,114,241,41,63,217,45,215,80,36,174,107,184,188,56,84,57,192,12,109,133,66,54,119,83,174,5,42,172,73,132,183,61,142,179,51,148,243,54,92,3,157,162,227,13,86,216,118,138,251,32,90,227,51,220,26,193,149,252,197,87,10,23,17,87,236,173,44,41,46,186,85,77,201,211,161,178,123,116,166,183,130,64,198,18,203,232,221,217,154,80,47,183,146,110,44,31,65,126,182,193,177,24,204,220,85,198,76,100,147,254,242,146,85,102,175,160,252,167,9,18,159,26,236,179,177,45,247,197,137,57,90,123,201,46,38,239,79,99,14,229,159,172,121,142,222,103,63,5,118,193,221,97,252,4,189,203,134,95,187,108,151,253,1,187,94,5,33,211,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("4be7e926-d937-cb88-db30-11fcb1e1e1b3"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("0e2bc046-3cd8-48a1-bbfd-6dc87f405002"),
				CreatedInSchemaUId = new Guid("1c01b15b-5a0b-4def-a0e0-544efc17d8eb"),
				ModifiedInSchemaUId = new Guid("1c01b15b-5a0b-4def-a0e0-544efc17d8eb")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("1c01b15b-5a0b-4def-a0e0-544efc17d8eb"));
		}

		#endregion

	}

	#endregion

}

