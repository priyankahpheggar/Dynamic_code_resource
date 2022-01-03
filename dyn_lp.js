%%[
SET @fcm = Concat("01","/",Datepart('01-FEB-2022','M'),"/",Datepart('01-FEB-2022','Y'))
SET @ldp = DateAdd(@fcm, '-1','D')
SET @cm = Concat(DatePart(@ldp, "Day"),"/",Datepart('01-FEB-2022','M'),"/",Datepart('01-FEB-2022','Y'))
]%%
%%=v(@fcm)=%%<br>
%%=v(@ldp)=%%<br>
%%=v(@cm)=%%<br>
