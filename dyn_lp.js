%%[
SET @fcm = Concat("01","/",DateAdd(Now(), 1, "M"),"/",Datepart(Now(),"Y"))
SET @ldp = DateAdd(@fcm, -1,'D')


]%%
%%=v(@fcm)=%%<br>
%%=v(@ldp)=%%<br>

01/01/2022
