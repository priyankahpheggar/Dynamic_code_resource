%%[
SET @DCF_Code = RequestParameter('DCF_Code')
SET @Membership_type = RequestParameter('Membership_type')
]%%
%%=v(@DCF_Code)=%% 
%%=v(@Membership_type)=%% 

<script runat="server">
Platform.Load("Core","1.1.1");
var json = Platform.Request.GetPostData();
var products = Platform.Function.ParseJSON(json);

if (products.length > 0) {
  for (var i = 0; i < products.length; i++ ) {

      var item = products[i];
      Platform.Variable.SetValue("@OrderId",item['OrderId']);
      Platform.Variable.SetValue("@Quantity",item['Quantity']);
</script>

      <div>
  資材名 %%=v(@OrderId)=%%         部数 %%=v(@Quantity)=%%
  </div>

<script runat="server">
  }
} 
else 
{
  Write("no products found");
}
</script>
