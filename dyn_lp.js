%%[
SET @money = "$6.96"
SET @moneyformat = FormatCurrency(@money,'en-US')
OutputLine(Concat(@moneyformat,' is formatted now')) 
]%%