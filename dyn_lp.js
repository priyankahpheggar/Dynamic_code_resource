%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
    SET @password = 'priya@1592' 
    SET @salt = '56f4367d891f011g' 
    SET @initVector = '4963b7334a46352623252955df21d7f3' 
    SET @encData = EncryptSymmetric(@emailaddr, "aes", @null, @password, @null, @salt, @null, @initVector) 

  set @decAES = DecryptSymmetric(@encData, "aes", @null, @password, @null, @salt, @null, @initVector)

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@decAES)=%%



