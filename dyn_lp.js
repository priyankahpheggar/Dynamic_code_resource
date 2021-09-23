%%[
SET @DCF_Code = RequestParameter('DCF_Code')
SET @Membership_type = RequestParameter('Membership_type')
SET @low = 11111
SET @high = 99999
SET @Order_ID = Random(@low,@high)
]%%
%%=v(@DCF_Code)=%% 
%%=v(@Membership_type)=%% 
%%=v(@Order_ID)=%% 

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
 
  <div>
  資材名 %%=v(@OrderId)=%%         部数 %%=v(@Quantity)=%%
  </div>   
<script runat="server">
  }

} else {

  Write("no products found")

}
</script>