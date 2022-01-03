%%[
SET @fcm = Concat("01","/",Datepart(Now(),'M'),"/",Datepart(Now(),'Y'))
SET @ldp = DateAdd(@fcm, '-1','D')
SET @fcm = Concat(DatePart(@ldp, "Day"),"/",Datepart(Now(),'M'),"/",Datepart(Now(),'Y'))
]%%
%%=v(@fcm)=%%<br>
%%=v(@ldp)=%%<br>
%%=v(@fcm)=%%<br>
