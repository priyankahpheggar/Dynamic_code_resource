<script runat="server">
Platform.Load("core","1.1");
var DE = "Encrypted_data_Test"
try {

    var ListOfOptionsDE = DataExtension.Init(DE);
    var Rows = ListOfOptionsDE.Rows.Retrieve();

    if (Rows.length > 0) {
        for(var i in Rows) {
            Write(Rows[i]+ "<br>");
        }
    }


} catch(e){
 Write(Stringify(e));
}
</script>