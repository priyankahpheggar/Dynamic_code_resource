%%[
SET @fcm = Concat("01","/",Datepart('02-01-2022','M'),"/",Datepart('02-01-2022','Y'))
SET @ldp = DateAdd(@fcm, '-1','D')
SET @cm = Concat(DatePart(@ldp, "Day"),"/",Datepart('02-01-2022','M'),"/",Datepart('02-01-2022','Y'))
]%%
%%=v(@fcm)=%%<br>
%%=v(@ldp)=%%<br>
%%=v(@cm)=%%<br>
