<script runat="server">
Platform.Load("Core","1");
try {

//initiate DE using it's External Key  
var myDE = DataExtension.Init("Encrypted_data_Test");

//retrieve data without filters  
var data = myDE.Rows.Retrieve();  

Write(Stringify(data));

  } catch (error) {
    Write("<br>error: " + Stringify(error));
}
</script>