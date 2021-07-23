%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
   
    SET @initVector = 'b14ca5898a4e4133bbce2ea2315a1916' 
    SET @encData = EncryptSymmetric(@emailaddr, "aes", @null, @null, @null, @null, @null, @initVector) 

  set @decAES = DecryptSymmetric(@encData, "aes", @null, @password, @null, @salt, @null, @initVector)

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@decAES)=%%



1
10
100

1234567890