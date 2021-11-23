%%[
SET @amount = RequestParameter('X')
OutputLine(FormatCurrency(@amount,'en-us')) 
]%%