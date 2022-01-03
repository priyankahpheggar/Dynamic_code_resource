%%[
SET @expirationdate = "31-JAN-2022"
SET @moneyformat = DateAdd(@expirationdate, -30,"D")
]%%
%%=v(@moneyformat)=%%