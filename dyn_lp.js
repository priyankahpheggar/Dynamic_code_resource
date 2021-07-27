%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
    SET @encData = EncryptSymmetric(@emailaddr, "des;mode=ecb", @null, "4963b7334a46352623252955df21d7f3", @null, @null, @null, @null) 

   /* SET @decAES = DecryptSymmetric(@encData, "AES", @null, "4963b7334a46352623252955df21d7f3", "Priyanka_salt", @null, @null, "4963b7334a46352623252955df21d7f3") */

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@decAES)=%%

