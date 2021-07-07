<script runat='server' language='ampscript'>
SET @g = GUID()
SET @sub1 = Uppercase(Substring(@g,1,2))
SET @sub2 = Lowercase(Substring(@g,3,8))
SET @sub3 = Concat(@sub1,@sub2)
SET @sub4 = Replace(@sub3,'-','$')
SET @psw = @sub4
SET @epsw = Base64Encode(@psw)
 Output(Concat('Generated = ', @psw,"<Br>"))
 Output(Concat('Enc Generated = ', @epsw))
</script>