%%[
SET @fcm = Concat("01","/",Datepart(Now(),'M'),"/",Datepart(Now(),'Y'))
SET @ldp = DateAdd(@fcm, '-1','D')

]%%
%%=v(@fcm)=%%<br>
%%=v(@ldp)=%%<br>
