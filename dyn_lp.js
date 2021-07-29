%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
    SET @encrypt_data = Base64Encode(@emailaddr)
    SET @decrypt_data = Base64Decode(@encrypt_data,'UTF-8', 1)
]%%
encrypted_data = %%=v(@encrypt_data)=%%<br/>
decrypt_data = %%=v(@decrypt_data)=%%




