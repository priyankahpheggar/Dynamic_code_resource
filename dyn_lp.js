<script runat="server">

Platform.Load("Core","1.1.1");

var url = 'https://eng73yr5z2m1w.x.pipedream.net';
var contentType = 'application/json';
var payload = '{"firstname":"Priyanka","lastname":"HP"}';

try {

   var Response = HTTP.Post(url, contentType, payload);

} catch (e) {

  Write("<br>e: " + Stringify(e));

}
Redirect("http://www.example.com",true); 
</script>