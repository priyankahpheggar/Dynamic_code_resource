%%[
    SET @emailaddr = 'priyankahp.heggar@gmail.com'
    SET @encData = EncryptSymmetric(@emailaddr, "des;mode=cbc", @null, 'AAFF4D62', @null, @null, @null, @null) 

    set @Decrypted_email = DecryptSymmetric(@encData, "des;mode=cbc", @null, 'AAFF4D62', @null, @null, @null, @null)

]%%
encr = %%=v(@encData)=%%<br/>
decr = %%=v(@Decrypted_email)=%%