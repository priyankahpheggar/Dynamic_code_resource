%%[
SET @DCF_Code = RequestParameter('DCF_Code')
SET @Membership_type = RequestParameter('Membership_type')
SET @low = 11111
SET @high = 99999
SET @Order_ID = Random(@low,@high)
set @systemDate  = Now(1)
set @Order_placed_date =  SystemDateToLocalDate(@systemDate)
]%%


<script runat="server">
Platform.Load("Core","1.1.1");
var json = Platform.Request.GetPostData();
var Material_info = Platform.Function.ParseJSON(json);
Platform.Variable.SetValue("@Material_info",Material_info);
if (Material_info.length > 0) {

  for (var i = 0; i < Material_info.length; i++ ) {

      var item = Material_info[i];
      Platform.Variable.SetValue("@material_name",item['material_name']);
      Platform.Variable.SetValue("@Quantity",item['Quantity']);
      
  </script> 
  <div>
  資材名 %%=v(@material_name)=%%         部数 %%=v(@Quantity)=%%
  </div>   
<script runat="server">
  }

} else {

  Write("no products found")

}
</script>

%%[
 SET @Entry_DE = UpsertData("User_Material_Order_Entry_data",2,"Order_ID", @Order_ID,"Material_Name", @material_name,"Membership_type", @Membership_type,"Quantity", @Quantity,"Full_name", "Priyanka","EmailAddress","priyanka.padmanabha@indegene.com","DCF_Code", "12345","Order_placed_date", @Order_placed_date)
 ]%%


