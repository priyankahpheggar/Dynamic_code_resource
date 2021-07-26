%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
    SET @encData = EncryptSymmetric(@emailaddr, "AES", "Priyanka_AES", @null, "Priyanka_salt", @null, @null, "3337216960") 

   SET @decAES = DecryptSymmetric(@encData, "AES", "Priyanka_AES", @null, "Priyanka_salt", @null, @null, "3337216960")

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@decAES)=%%
