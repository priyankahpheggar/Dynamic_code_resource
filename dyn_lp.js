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

%%[
SET @DCF_Code = RequestParameter('DCF_Code')
SET @Membership_type = RequestParameter('Membership_type')
SET @low = 11111
SET @high = 99999
SET @Order_ID = Random(@low,@high)
IF RequestParameter('submit') == '1' THEN
SET @Full_name = RequestParameter('Full_name')
SET @EmailAddress = RequestParameter('EmailAddress')

SET @Entry_DE = UpsertData("User_Material_Order_Entry_data",1,"Order_ID", @Order_ID,"Membership_type", @Membership_type,"Material_Name", @OrderId,"Quantity", @Quantity,"Full_name", @Full_name,"EmailAddress",@EmailAddress,"DCF_Code", @DCF_Code)
ENDIF
]%%

<!DOCTYPE html>
<html>
<body>

<h2>HTML Forms</h2>

<form action="%%=RequestParameter('PAGEURL')=%%">
  <label for="Full_name">Full_name:</label><br>
  <input type="text" name="Full_name"><br>
  <label for="EmailAddress">EmailAddress:</label><br>
  <input type="text" name="EmailAddress"><br><br>
  <input type="hidden" name="submit" value="1"/>
  <input type="submit" name="submit" value="Submit">
</form> 

v1
</body>
</html>