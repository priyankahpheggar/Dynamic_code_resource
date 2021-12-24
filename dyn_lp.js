%%[
SET @dcf = '198970'
SET @decrypt_dcf = Base64Decode(@dcf)
SET @mail_seq = RequestParameter('mail_seq')
SET @site = "AMV"

IF @dcf != "" THEN

SET @TokenStatus = "True"
SET @Activate_flag = "1"
SET @Profession = "1"
SET @IsResetPassword = "True"
SET @Registration_date = Now(1)
SET @Registration_date = DateAdd(@Registration_date, 15, "H")
SET @blank = '-'

SET @dcf_compare = LookupRows("MASTER_Account","AABP_DCF_Doctor_Code",@dcf)
SET @row = row(@dcf_compare,1)
SET @FirstName = field(@row,"First_Name")
IF @FirstName == '' THEN
SET @FirstName = @blank
ENDIF
SET @LastName = field(@row,"Last_Name")
IF @LastName == '' THEN
SET @LastName = @blank
ENDIF
SET @Mail_PrimaryParent = field(@row,"Mail_PrimaryParent")
IF @Mail_PrimaryParent == '' THEN
SET @Mail_PrimaryParent = @blank
ENDIF
SET @Specialty_1 = field(@row,"Specialty_1")
IF @Specialty_1 == '' THEN
SET @Specialty_1 = @blank
ENDIF
SET @Amgen_id = field(@row,"Amgen_ID")
IF @Amgen_id == '' THEN
SET @Amgen_id = @blank
ENDIF
SET @Account_id = field(@row,"Account_ID")
IF @mail_seq == 1 THEN
SET @EmailAddress = field(@row,"Mail")    
elseif @mail_seq == 2 THEN
SET @EmailAddress = field(@row,"Mail2")  
else
SET @EmailAddress = field(@row,"Mail3")  
endif
        
 UpsertDE("TESTING_DE_MASTER_AMOVIG",1,"AABP_DCF_Doctor_Code", @decrypt_dcf,"Login_id", @EmailAddress,"First_name", @FirstName,"Family_name", @LastName,"Kana_family_name", @blank,"Kana_first_name", @blank,"Password", @blank,"Address", @blank,"Last_updated", @Registration_date,"Postal_number", @blank,"IsResetPassword", @IsResetPassword,"Facility_name", @Mail_PrimaryParent,"Dept", @Specialty_1,"Amgen_id", @Amgen_id,"Account_id", @Account_id,"TokenStatus", @TokenStatus,"Activate_flag", @Activate_flag,"Profession", @Profession,"Registration_date", @Registration_date,"Approval_date", @Registration_date) 

ELSE
SET @message = "NON DCF member"
ENDIF
  
]%% 
