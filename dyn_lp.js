%%[
SET @money = RequestParameter('X')
SET @moneyformat = FormatCurrency(@money,'en-US')
OutputLine(Concat(@moneyformat,'is formatted now')) 
]%%