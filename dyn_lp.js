%%[
SET @fcm = Concat(Datepart(DateAdd(Now(), 1, "M"),"M"),"-","01","-",Datepart(Now(),"Y"))
SET @ldp = DateAdd(@fcm, -1,'D')


]%%
%%=v(@fcm)=%%<br>
%%=v(@ldp)=%%<br>

