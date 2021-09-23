<script runat="server">
Platform.Load("Core","1.1.1");
var json = Platform.Request.GetPostData();
var products = Platform.Function.ParseJSON(json);

if (products.length > 0) {
  for (var i = 0; i < products.length; i++ ) {

      var item = products[i];
      Platform.Variable.SetValue("@Prod_ID",item['Prod_ID']);
      Platform.Variable.SetValue("@Prod_Name",item['Prod_Name']);
      Platform.Variable.SetValue("@Prod_Desc",item['Prod_Desc']);
</script>

      <br>Prod_ID = %%=v(@Prod_ID)=%%  || Prod_Name = %%=v(@Prod_Name)=%% || Prod_Desc = %%=v(@Prod_Desc)=%%

<script runat="server">
  }
} 
else 
{
  Write("no products found");
}
</script>