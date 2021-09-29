%%[IF RequestParameter('x') == '1' THEN]%%
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
<script>
  $(document).ready(function(){
  $("#x1").submit();
});
</script>
</head>
<body>
<form id="x1" action="http://www.example.com/page2.html" method="post">
 <input type="hidden" name="x1" value="x1">test
</form> 
</body>
</html>
%%[ELSE]%%
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
<script>
  $(document).ready(function(){
  $("#x1").submit();
});
</script>
</head>
<body>
<form id="x1" action="http://www.example.com/page2.html" method="post">
 <input type="hidden" name="x1" value="x1">test
</form> 
</body>
</html>
%%[ENDIF]%%