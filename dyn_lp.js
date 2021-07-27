%%[
    /* SET @emailaddr = 'priyankahp.heggar@gmail.com' */
    SET @encData = EncryptSymmetric("priyankahp.heggar@gmail.com","des;mode=ecb;padding=zeros",@null,"4963b7334a46352623252955df21d7f3")
   /* SET @decAES = DecryptSymmetric(@encData, "AES", @null, "4963b7334a46352623252955df21d7f3", "Priyanka_salt", @null, @null, "4963b7334a46352623252955df21d7f3") */

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@decAES)=%%

