
<script runat=server>  
    Platform.Load("Core","1");
    var e_DE = DataExtension.Init("Encrypted_data_Test").Rows.Retrieve();
    var d_DE = DataExtension.Init('Decryoted_data_Test');
    for (var i = 0; i < e_DE.length; i++)
    {
        
        var E_FN = Base64Decode(e_DE[i].FirstName);
        var E_LN = Base64Decode(e_DE[i].LastName);
        var E_Email = e_DE[i].Email;        
       
        
        /* d_DE.Rows.Add({FirstName:E_FN,LastName:E_LN,Email:E_Email}); */
        /* d_DE.Rows.UpsertData({"FirstName":E_FN,"LastName":E_LN,"Email":E_Email},["Email"],[E_Email]);  */
        Platform.Function.UpsertData("Decryoted_data_Test", ["Email", E_Email], ["FirstName", E_FN], ["LastName","test1"])
    }
</script>