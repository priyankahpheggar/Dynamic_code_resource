%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
    /* SET @password = 'b14ca5898a4e4133bbce2ea2315a1916' 
    SET @salt = 'b14ca5898a4e4133bbce2ea2315a1916' 
    SET @initVector = 'b14ca5898a4e4133bbce2ea2315a1916'  */
    SET @encData = EncryptSymmetric(@emailaddr, "aes", 'Priyanka_AES', @null, 'Priyanka_AES', @null, 'Priyanka_AES', @null) 

  /* set @decAES = DecryptSymmetric(@encData, "aes", @null, @password, @null, @salt, @null, @initVector) */

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@decAES)=%%
