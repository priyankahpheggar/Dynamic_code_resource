
   <script runat="server">
                Platform.Load("core","1.1");
      function myFunction() {
    var Addrecords =  [
      {Email:"raja.karuppaiya@indegene.com",
       FirstName:"raja"},
            ];

var targetDE = DataExtension.Init("Test_Internal_Proofing_DE");
targetDE.Rows.Add(Addrecords);
}
    
</script>




