<script runat="server">

Platform.Load("Core","1.1.1");

var url = 'https://ng-1011-localdev.cm01sc.dev.localsc.dev.local.cm.aimovig.jp/api/sitecore/FloatingMenu/M3AutoPopulate?fName=sowmya&lName=mundra';
var contentType = 'application/json';
var payload = '{"First_Name":"'+Request.GetQueryStringParameter("FN")+'"}';

try {

   var Response = HTTP.Post(url, contentType, payload);

} catch (e) {

  Write("<br>e: " + Stringify(e));

}
</script>