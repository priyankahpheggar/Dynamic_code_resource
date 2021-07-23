%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
    /* SET @password = 'b14ca5898a4e4133bbce2ea2315a1916' 
    SET @salt = 'b14ca5898a4e4133bbce2ea2315a1916' 
    SET @initVector = 'b14ca5898a4e4133bbce2ea2315a1916'  */
    SET @encData = EncryptSymmetric(@emailaddr, "AES", "Priyanka_AES", @null, "Priyanka_salt", @null, "Priyanka_IV", @null) 

set @decAES = DecryptSymmetric(@encData, "AES", "Priyanka_AES", @null, "Priyanka_salt", @null, "Priyanka_IV", @null)

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@decAES)=%%
