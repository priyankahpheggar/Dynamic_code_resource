%%[
 SET @encData = EncryptSymmetric("test","tripledes;mode=ecb;padding=zeros",@null,"12345678")
 OutputLine(Concat(@encData,' is a success!'))
]%%
