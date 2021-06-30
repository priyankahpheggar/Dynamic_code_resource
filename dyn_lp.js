<script runat="server">
Platform.Load("Core","1");
try {

//initiate DE using it's External Key  
var myDE = DataExtension.Init("Encrypted_data_Test");

//retrieve data without filters  
var data = myDE.Rows.Retrieve();
var x = data[0].Email;  

Write(x);

  } catch (error) {
    Write("<br>error: " + Stringify(error));
}
</script>