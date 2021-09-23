%%[
SET @DCF_Code = RequestParameter('DCF_Code')
SET @Membership_type = RequestParameter('Membership_type')
]%%
%%=v(@DCF_Code)=%% 
%%=v(@Membership_type)=%% 
<script runat="server">

Platform.Load("Core","1.1.1");

var json = Platform.Request.GetPostData();
var jsonObj = Platform.Function.ParseJSON(json);

if (jsonObj.length > 0) {

  for (var i = 0; i < jsonObj.length; i++ ) {

      var item = jsonObj[i];
Write(item['OrderId'])
  </script> 

<script>
  }

} else {

  Write("no products found")

}
</script>