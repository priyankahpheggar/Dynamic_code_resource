<script runat="server" type="text/javascript">
Platform.Load("Core","1.1.1");
        var str1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var str2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        var str3 = ["1","2","3","4","5","6","7","8","9","0"];
        var str4 = ["!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]","?",">","<","/","-","="];
        var psw = '';    
            for (var i = 1; i <= 3; i++) 
            {
                var w = str1[Math.floor(Math.random() * str1.length)];
                psw +=  w;
                var x = str2[Math.floor(Math.random() * str2.length)];
                psw +=  x;
                var y = str3[Math.floor(Math.random() * str3.length)];
                psw +=  y;
                var z = str4[Math.floor(Math.random() * str4.length)];
                psw +=  z;
                Variable.SetValue("@Password",psw);
            }
    Write(psw);   
</script>
%%[
SET @DCF_code = "priyanka.padmanabha@indegene.com"
IF RequestParameter("submitted") == '1' then    
SET @TriggeredSendExternalKey = "60349"
SET @register = RequestParameter('register')
SET @newDCF_reg = RequestParameter('newDCF_reg')
SET @dont_want_to_reg = RequestParameter('dont_want_to_reg')
SET @DCF_compare = LookupRows("Master_HCP_DE","DCF_code",@DCF_code)
SET @rowCount = rowcount(@DCF_compare)

if @rowCount > 0 then

  for @i = 1 to @rowCount do
    SET @row = row(@DCF_compare, @i) /* get row based on counter */
    SET @FirstName = field(@DCF_compare,"FirstName")
    SET @LastName = field(@DCF_compare,"LastName")
    SET @DCF_code = field(@DCF_compare,"DCF_code")
        IF @newDCF_reg != '' then
        InsertDE("User_DE","DCF_code", @newDCF_reg,"FirstName", @FirstName,"LastName", @LastName,"Password", @Password)
        ELSE
        InsertDE("User_DE","DCF_code", @DCF_code,"FirstName", @FirstName,"LastName", @LastName,"Password", @Password)
        ENDIF
        IF @dont_want_to_reg == "" THEN
]%%
<script runat="server">
                Platform.Load("core","1.1");
                var data = {
                    attributes : {
                      FirstName: Platform.Variable.GetValue("@FirstName"),
                      LastName: Platform.Variable.GetValue("@LastName"),
                      Password: Platform.Variable.GetValue("@Password")
                  },
                    subscriber : {
                    EmailAddress: Platform.Variable.GetValue("@DCF_code"),
                    SubscriberKey: Platform.Variable.GetValue("@DCF_code")
                  }
                }
                var TSD = TriggeredSend.Init(Platform.Variable.GetValue("@TriggeredSendExternalKey"));
                var Status = TSD.Send(data.subscriber,data.attributes);
            </script>
%%[
    ELSE
    SET @msg = "dont want to register"
    ENDIF 
    next @i
    ENDIF
    ENDIF
]%%
<!DOCTYPE html>
<html>
<body>
<form action="%%=RequestParameter('PAGEURL')=%%" method="post">
  <p>Good to register with this information?</p>
  <input type="radio" name="register">
  <label>Register with this Email address</label> <input type="text" value="%%=v(@DCF_code)=%%"/><br>
  <input type="radio" name="register">
  <label>Register with another email address</label> <input type="text" name="newDCF_reg" value="%%=v(@newDCF_reg)=%%"/><br>
  <input type="radio" name="register" value="%%=v(@dont_want_to_reg)=%%">
  <label>Not want to register</label><br>
  <input type="hidden" name="submitted" value="1"><br>
  <input type="submit" value="Submit">
</form>
</body>
</html>


