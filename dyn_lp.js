%%[
SET @dcf = "MTIzNDU="
SET @mail_seq = "1"
SET @site = "AMV"
SET @decrypt_dcf = Base64Decode(@dcf)

SET @dcf_compare = LookupRows("MASTER_Account","AABP_DCF_Doctor_Code",@decrypt_dcf)
SET @row = row(@dcf_compare,1)
SET @FirstName = field(@row,"First_name")
SET @Amgen_id = field(@row,"Amgen_id")
SET @Account_id = field(@row,"Account_id")
IF @mail_seq == 1 THEN
SET @EmailAddress = field(@row,"Mail")    
elseif @mail_seq == 2 THEN
SET @EmailAddress = field(@row,"Mail2")  
else
SET @EmailAddress = field(@row,"Mail3")  
endif

IF RequestParameter('submitted') == '1' THEN    
/* SET @TriggeredSendExternalKey = "61743" */
SET @register = RequestParameter('register')
SET @newDCF_reg = RequestParameter('newDCF_reg')

      /* IF @register == "not to register" THEN
      Redirect('https://www.example.com')
      ENDIF */

      IF @register == "current email address" OR @register == "new email address" THEN

      IF @newDCF_reg != "" OR @newDCF_reg != null THEN
     
      InsertDE("DE_MASTER_AMOVIG","AABP_DCF_Doctor_Code", @decrypt_dcf,"Login_id", @newDCF_reg,"First_name", @FirstName,"Amgen_id", @Amgen_id,"Account_id", @Account_id)
 
      ELSE
         
      InsertDE("DE_MASTER_AMOVIG","AABP_DCF_Doctor_Code", @decrypt_dcf,"Login_id", @EmailAddress,"First_name", @FirstName,"Amgen_id", @Amgen_id,"Account_id", @Account_id) 
      ENDIF
        
]%%
<script runat="server">
                /* Platform.Load("core","1.1");
                var newDCF_reg = variable.GetValue('@newDCF_reg');
                var EmailAddress = variable.GetValue('@EmailAddress');
                if(newDCF_reg !== null && newDCF_reg !== '') 
                {
                  var data = {
                    attributes : {
                      First_name: Platform.Variable.GetValue("@FirstName")
                  },
                    subscriber : {
                    EmailAddress: newDCF_reg,
                    SubscriberKey: newDCF_reg
                  }
                }
                  
                }

               else 
                {
                  var data = {
                    attributes : {
                      First_name: Platform.Variable.GetValue("@FirstName")
                  },
                    subscriber : {
                    EmailAddress: EmailAddress,
                    SubscriberKey: EmailAddress
                  }
                }
                  
                }
                var TSD = TriggeredSend.Init(Platform.Variable.GetValue("@TriggeredSendExternalKey"));
                var Status = TSD.Send(data.subscriber,data.attributes); */
</script>
%%[
    Redirect('https://www.example.com')
        ENDIF 
ENDIF
]%%
<!DOCTYPE html>
<html>
<body>
<form action="%%=RequestParameter('PAGEURL')=%%" method="get">
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


