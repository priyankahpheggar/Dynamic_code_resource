%%[
 SET @encData=EncryptSymmetric('Example', 'ECB', @null, 'feniljacob123456', @null, '0000000000000000', @null, '00000000000000000000000000000000')
 OutputLine(Concat(@encData,' is a success!')) 
]%%
