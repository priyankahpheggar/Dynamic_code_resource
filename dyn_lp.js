%%[
    /* SET @emailaddr = 'priyankahp.heggar@gmail.com' */
    SET @encData = EncryptSymmetric("priyankahp.heggar@gmail.com","AES",@null,"4963b7334a46352623252955df21d7f3",@null,"4963b7334a463526",@null,"4963b7334a463526")
    
]%%

encr = %%=v(@encData)=%%<br/>
decr = %%=v(@decAES)=%%




