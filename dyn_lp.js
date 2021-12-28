%%[
SET @money = RequestParameter('X')
SET @moneyformat = FormatCurrency(@money,'en-US')
]%%
%%=v(@moneyformat)=%%