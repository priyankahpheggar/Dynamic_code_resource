%%[
 SET @encData = EncryptSymmetric("test","tripledes;mode=ecb;padding=zeros",@null,"4963b7334a46352623252955df21d7f3")
 OutputLine(Concat(@encData,' is a success!'))
]%%
