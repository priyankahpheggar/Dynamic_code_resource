%%[
SET @DCF_Code = RequestParameter('DCF_Code')
SET @Membership_type = RequestParameter('Membership_type')
]%%
<script runat="server">

Platform.Load("Core","1.1.1");

var json = Platform.Request.GetPostData();
var jsonObj = Platform.Function.ParseJSON(json);

if (jsonObj.length > 0) {

  for (var i = 0; i < jsonObj.length; i++ ) {

      var item = jsonObj[i];

      Platform.Variable.SetValue("@OrderId",item['OrderId']);
      Platform.Variable.SetValue("@Quantity",item['Quantity']);
  </script> 
  %%[
/* SET @ProductName = Lookup("Material_Information_DE","ProductName","Order_ID", @OrderId) */
]%%
  <div>
  資材名 %%=v(@OrderId)=%%         部数 %%=v(@Quantity)=%%
  </div>   
<script>
  }

} else {

  Write("no products found")

}
</script>







