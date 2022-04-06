<script runat="server">

Platform.Load("Core","1.1.1");

var url = 'https://amgen.okta.com/oauth2/v1/authorize?client_id=0oapd9vgvjkCXy1UV0x7&redirect_uri=https%3A%2F%2Fdev.amgenassist.com.au%2Foauth2%2Fidpresponse&response_type=code&scope=openid&state=3%2FchYvIbQN%2Fce2eunkJHg3x2Nn9A7og5Yc9b3zqKTXaNwGqmjQSrxCf5Rv65g08YSd6NatwBiFAfKughohmFdiRAzyIv09iatOFy7WrjwvBAzBQ%2F8sJHFw%2BixuJb%2F7zclQy4N6mBh8iBKTt7XhBW%2FuwscnAaqUqFUIgJ0tgQ1rMgfhSpthABC2W2q%2FZKfEKhN9tEy5mF03I3quzU6AvtyuYePX7eJ4lbOlaG7JxspXMOppDmUFrDt%2Fj3C3Jn40Wk7F2B%2BBlVB5r3EE0uFTsdkMVNgtJEP%2FF2GdNvX0oUaql72e5i0KWdn6LtTRxhua4osRbNownRQ0RYb68ignSqAV2uf3f2jrHY55F8sSYbvcF%2FnMtt2ycOalS60SUMw97fmNCt%2BSuw884VlZEFZE%2BzPssfGZ%2Fw5J3X9DoGxQPQuEo1i7YRof%2FGTG%2FeZkmTggqxxITa7V9%2BFJ2ghLJyCf8BV4SQh7IDbzuNlcKmCvj9h%2BWGDm58tKhhPn3Cu4W6mLNXBB2mJ6FGvNgzPnnJBMzhRfDNYx0AlY%2BROBumJbD4sQ1vBbiqZ5U7qWyJNXXOEYHaThM0vXLDe5hbUmLGxJVPyZMNUPxq0YJGD%2B9uYFEwAt%2F7YHRodxdV9%2FfmC57MOMRCrPZP6qjsvF%2BBeQJ4GxW7if7gucxOkk6tpFcJuhOsokwz3UzFeqlD%2BChTttWeJvysRXeYSGo%2FSbRGliPEcJ9dSuD7VRptW2Eih07zFUe3JMjURpxjAKTz2a9mRunySeAY7urjE6sS%2BiyOOG%2BCpGUoFvmBN9lbPog0TzlDPicxEWGGpQM1dvNYTRmY10rKTWBsJ%2Bo1xwDO3Ubu1T2zidrUxeFI68ej25cRCmLkh7UqDNOdOdH4nRJg9UMjlqh7nX3XzXiJPkaJ3F28fMwJrxeD0Ms9ISsuoTxRm5mn8FJ2P8y1B5NxF1FfZNk9XmarIOR9YjNnwGQ2Q3edqtmBkbdrUpvn3jDtEL6OUadMpmqbim9M%2BP2CsCykHtfHdgvKO4I3SQAO3quec5Rf99bWu13foRqvSRB6IA%3D%3D';
var contentType = 'application/json';
var payload = '{"First_Name":"'+Request.GetQueryStringParameter("FN")+'"}';

try {

   var Response = HTTP.Post(url, contentType, payload);

} catch (e) {

  Write("<br>e: " + Stringify(e));

}
</script>