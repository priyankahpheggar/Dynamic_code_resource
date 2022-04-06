<script runat="server">

Platform.Load("Core","1.1.1");

var url = 'https://dev.amgenassist.com.au/api/sitecore/CustomCalendar/GenerateIcs?calendarItem=BEGIN%3AVCALENDAR%0D%0AVERSION%3A2.0%0D%0APRODID%3A-%2F%2FTest%20Cal%2F%2FEN%0D%0ACALSCALE%3AGREGORIAN%0D%0AMETHOD%3APUBLISH%0D%0ABEGIN%3AVEVENT%0D%0AUID%3Atest-1%0D%0ADTSTAMP%3A20220406T032800%0D%0ADTSTART%3A20221006T032800%0D%0ADTEND%3A20221006T032800%0D%0ARRULE%3AFREQ%3DMONTHLY%3BINTERVAL%3D6%0D%0ASUMMARY%3ASmall%20summary%20text%0D%0ALOCATION%3AEvent%20location%0D%0ADESCRIPTION%3AEvent%20Description%0D%0ABEGIN%3AVALARM%0D%0ATRIGGER%3A-PT4W%0D%0AACTION%3ADISPLAY%0D%0ADESCRIPTION%3AReminder%0D%0AEND%3AVALARM%0D%0AEND%3AVEVENT%0D%0AEND%3AVCALENDAR%0D%0A&fileName=Calendar%20Details';
var contentType = 'application/json';
var payload = '{"First_Name":"'+Request.GetQueryStringParameter("FN")+'"}';

try {

   var Response = HTTP.Post(url, contentType, payload);

} catch (e) {

  Write("<br>e: " + Stringify(e));

}
</script>