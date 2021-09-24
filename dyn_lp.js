%%[
SET @DCF_Code = RequestParameter('DCF_Code')
SET @Membership_type = RequestParameter('Membership_type')
SET @low = 11111
SET @high = 99999
SET @Order_ID = Random(@low,@high)
]%%


<script runat="server">
Platform.Load("Core","1.1.1");
var json = Platform.Request.GetPostData();
var jsonObj = Platform.Function.ParseJSON(json);
Platform.Variable.SetValue("@jsonObj",jsonObj);
if (jsonObj.length > 0) {

  for (var i = 0; i < jsonObj.length; i++ ) {

      var item = jsonObj[i];
      Platform.Variable.SetValue("@material_name",item['material_name']);
      Platform.Variable.SetValue("@Quantity",item['Quantity']);
      
  </script> 
 
%%[
 SET @Entry_DE = UpsertData("User_Material_Order_Entry_data",2,"Order_ID", @Order_ID,"Material_Name", @material_name,"Membership_type", @Membership_type,"Quantity", @Quantity,"Full_name", "Priyanka","EmailAddress","priyanka.padmanabha@indegene.com","DCF_Code", "12345")
 ]%%
  <div>
  資材名 %%=v(@OrderId)=%%         部数 %%=v(@Quantity)=%%
  </div>   
<script runat="server">
  }

} else {

  Write("no products found")

}
</script>


