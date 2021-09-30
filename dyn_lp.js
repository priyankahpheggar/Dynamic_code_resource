<!DOCTYPE html>
<html lang="en">

<p>Select a new car from the list.</p>


<select id="mySelect" onchange="myFunction()">
  <option value="Audi">Audi</option>
  <option value="BMW">BMW</option>
  <option value="Mercedes">Mercedes</option>
  <option value="Volvo">Volvo</option>
</select>


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

 

</html>