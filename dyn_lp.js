%%[
SET @fcm = Concat("01","-",Datepart(DateAdd(Now(), 1, "M"),"M"),"-",Datepart(Now(),"Y"))
SET @ldp = DateAdd(@fcm, -1,'D')


]%%
%%=v(@fcm)=%%<br>
%%=v(@ldp)=%%<br>

