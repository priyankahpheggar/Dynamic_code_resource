%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
    SET @password = 'priya@1592' 
    SET @salt = '56f4367d891f0111' 
    SET @initVector = '123456789a0123456789bcdef1234567' 
    SET @encData = EncryptSymmetric(@emailaddr, "aes", @null, @password, @null, @salt, @null, @initVector) 

  set @decAES = DecryptSymmetric(@encData, "aes", @null, @password, @null, @salt, @null, @initVector)

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@decAES)=%%



1
10
100

1234567890