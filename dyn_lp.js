%%[
SET @today = Now()
SET @month = Datepart(@today,'M')
SET @moneyformat = DateAdd(@expirationdate, -30,"D")
]%%
%%=v(@today)=%%<br>
%%=v(@month)=%%<br>