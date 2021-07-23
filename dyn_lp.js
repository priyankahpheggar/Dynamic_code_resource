%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
    SET @password = '12354556' 
    SET @encData = EncryptSymmetric(@emailaddr, "aes", @null, @password, @null, @salt, @null, @initVector) 

    /* set @Decrypted_email = DecryptSymmetric(@encAES, "aes", @null, @password, @null, @salt, @null, @initVector) */

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@Decrypted_email)=%%


