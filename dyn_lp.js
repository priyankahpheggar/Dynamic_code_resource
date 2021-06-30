
<script runat=server>  
    Platform.Load("Core","1");
    var e_DE = DataExtension.Init("Encrypted_data_Test").Rows.Retrieve();
    var d_DE = DataExtension.Init('Decryoted_data_Test');
    for (var i = 0; i < e_DE.length; i++)
    {
        
        var E_FN = e_DE[i].FirstName;
        var E_LN = e_DE[i].LastName;
        var E_Email = e_DE[i].Email;        
       
        
        d_DE.Rows.Add({FirstName:E_FN,LastName:E_LN,Email:E_Email});

    }
    //Write(Stringify(layouts));
</script>
