%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
    SET @encData = EncryptSymmetric(@emailaddr, "AES", "Priyanka_AES", @null, "Priyanka_salt", @null, @null, "6B58703273357638792F423F4528482B") 

   SET @decAES = DecryptSymmetric(@encData, "AES", "Priyanka_AES", @null, "Priyanka_salt", @null, @null, "6B58703273357638792F423F4528482B")

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@decAES)=%%
