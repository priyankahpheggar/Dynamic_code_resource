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
            }
        var decrypted_psw = psw;
        var Encrypted_psw = Base64Encode(decrypted_psw);
        Variable.SetValue("@Password",Encrypted_psw)
    Write(Encrypted_psw); 
  
</script>
%%[

SET @DCF_code = "D_001"
SET @DCF_compare = LookupRows("Master_HCP_DE","DCF_code",@DCF_code)
SET @row = row(@DCF_compare,1)
SET @FirstName = field(@row,"FirstName")
SET @LastName = field(@row,"LastName")
SET @EmailAddress = field(@row,"EmailAddress")

IF RequestParameter('submitted') == '1' then    
SET @TriggeredSendExternalKey = "60349"
SET @register = RequestParameter('register')
SET @newDCF_reg = RequestParameter('newDCF_reg')

        IF @register == "current email address" OR @register == "new email address" THEN
        InsertDE("User_DE","DCF_code", @DCF_code,"EmailAddress", @EmailAddress,"FirstName", @FirstName,"LastName", @LastName,"Password", @Password)   
        
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
                    EmailAddress: Platform.Variable.GetValue("@EmailAddress"),
                    SubscriberKey: Platform.Variable.GetValue("@EmailAddress")
                  }
                }
                var TSD = TriggeredSend.Init(Platform.Variable.GetValue("@TriggeredSendExternalKey"));
                var Status = TSD.Send(data.subscriber,data.attributes);
</script>
%%[
    Redirect('https://www.example.com')
        ENDIF 
ENDIF
]%%
<!DOCTYPE html>
<html>
<body>
<form action="%%=RequestParameter('PAGEURL')=%%" method="post">
  <p>Good to register with this information?</p>
  <input type="radio" name="register" value="current email address">
  <label>Register with this Email address</label> <input type="text" value="%%=v(@EmailAddress)=%%" style="width:20%;"/><br>
  <input type="radio" name="register" value="new email address">
  <label>Register with another email address</label> <input type="text" name="newDCF_reg" style="width:20%;"/><br>
  <input type="radio" name="register" value="not to register">
  <label>Not want to register</label><br>
  <input type="hidden" name="submitted" value="1"><br>
  <input type="submit" value="Submit">
</form>
</body>
</html>


