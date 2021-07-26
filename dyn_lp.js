%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
    SET @encData = EncryptSymmetric(@emailaddr, "AES", @null, "e0cf1267f564b362", "Priyanka_salt", @null, @null, "4963b7334a46352623252955df21d7f3") 

   SET @decAES = DecryptSymmetric(@encData, "AES", @null, "e0cf1267f564b362", "Priyanka_salt", @null, @null, "4963b7334a46352623252955df21d7f3")

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@decAES)=%%
