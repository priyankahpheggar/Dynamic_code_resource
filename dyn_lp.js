%%[
SET @fcm = Concat(Datepart(DateAdd('27-DEC-2021', 1, "M"),"M"),"/","01","/",Datepart('27-DEC-2021',"Y"))
SET @ldp = DateAdd(@fcm, -1,'D')


]%%
%%=v(@fcm)=%%<br>
%%=v(@ldp)=%%<br>

