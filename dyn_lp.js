%%[
SET @fcm = Concat("01","/",Datepart(Now(),'M'),"/",Datepart(Now(),'Y'))
SET @ldp = DateAdd(@fcm, '-1','D')
SET @day = DatePart(@ldp, "Day")
]%%
%%=v(@fcm)=%%<br>
%%=v(@ldp)=%%<br>
%%=v(@day)=%%<br>
