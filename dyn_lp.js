%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
    SET @password = 'fresh' 
    SET @salt = 'e0cf1267f564b362' 
    SET @initVector = '4963b7334a46352623252955df21d7f3' 
    SET @encData = EncryptSymmetric(@emailaddr, "aes", @null, @password, @null, @salt, @null, @initVector) 

    set @Decrypted_email = DecryptSymmetric(@encData, "aes", @null, @password, @null, @salt, @null, @initVector)

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@Decrypted_email)=%%



