<script runat="server">

	Platform.Load("core", "1.1");

	var insrt = createDemoDataExtension("PHP_random_DE","Priyanka",3000);

	function createDemoDataExtension(name, folder, num) {

		var api = new Script.Util.WSProxy();

		var fields = [
			{
				"Name": "Primary",
				"FieldType": "Text",
				"IsPrimaryKey": true,
				"IsRequired": true,
				"MaxLength": 50
			},
			{
				"Name": "Text_with_Default",
				"FieldType": "Text",
				"MaxLength": 50,
				"DefaultValue": "Hellow world"
			},
			{
				"Name": "Number",
				"FieldType": "Number"
			},
			{
				"Name": "Date",
				"FieldType": "Date"
			},
			{
				"Name": "Boolean",
				"FieldType": "Boolean",
				"DefaultValue": false
			},
			{
				"Name": "Email",
				"FieldType": "EmailAddress"
			},
			{
				"Name": "Phone",
				"FieldType": "Phone"
			},
			{
				"Name": "Decimal",
				"FieldType": "Decimal",
				"MaxLength": 18,
				"Scale": 2
			},
			{
				"Name": "Locale",
				"FieldType": "Locale"
			},
			{
				"Name": "Text_required",
				"FieldType": "Text",
				"MaxLength": 50,
				"IsRequired": true
			}
		];

		var conf = {
			"CustomerKey": Platform.Function.GUID(),
			"Name": name,
			"Fields": fields
		};

		var req = Folder.Retrieve({ Property: 'Name', SimpleOperator: 'equals', Value: folder });

		var catId = req[0].ID;

		if (catId != null) conf["CategoryID"] = catId;

		var res = api.createItem("DataExtension", conf);

		if (res["Status"] == "OK") {

			var message = '(+) Data Extension "' + name + '" has been created';

			if (catId != null) message += ' in the folder "' + folder + '".'; else message += ' in the root folder.';

			Write(message + "<br>");

			var customerKey = res.Results[0].Object.CustomerKey;

			var de = DataExtension.Init(customerKey);

			var payload = [];

			for (var i = 0; i < num; i++) {
				var obj = {};
				for (k in fields) {
					obj[fields[k].Name] = (fields[k].FieldType == "Text" && fields[k].IsPrimaryKey == true) ? Platform.Function.GUID() : getRandom(fields[k].FieldType);
				}
				payload.push(obj);
			}

			var addedRowCount = de.Rows.Add(payload);

			Write("(+) Rows added: " + Stringify(addedRowCount) + "<br>"); 

			return addedRowCount;

		} else {
			Write("(-) Something went wrong: " + Stringify(res.Results[0].StatusMessage));
		}

		function getRandom(type) {

			if(type == "Decimal") return Math.floor(Math.random() * (1000 - 100) + 100) / 100;
			if(type == "EmailAddress") return Math.floor(Math.random() * 10000000000) + "@mail.com";
			if(type == "Boolean") return (Math.random() >= 0.5);
			if(type == "Number") return Math.floor(Math.random() * 100);
			if(type == "Date") return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));

			if(type == "Phone") {
				var n = "0";
				for (var i = 0; i < 9; i++) {
					n += Math.floor(Math.random() * 9)
				}
				return n;
			}

			if(type == "Locale") {
				switch (Math.floor(Math.random() * 4)) {
					case 0: var loc = "FR"; break;
					case 1: var loc = "NL"; break;
					case 2: var loc = "RU"; break;
					case 3: var loc = "EN"; break;
				}
				return loc;
			}

			if(type ==  "Text") {
				var str = "lorem ipsum dolor sit amet consectetur adipiscing elit donec vel nunc eget augue dignissim bibendum";
				arr = str.split(" ");
				var ctr = arr.length, temp, index;
				while (ctr > 0) {
					index = Math.floor(Math.random() * ctr);
					ctr--;
					temp = arr[ctr];
					arr[ctr] = arr[index];
					arr[index] = temp;
				}
				str = arr.join(" ");
				return str;
			}
		}
	}
</script>