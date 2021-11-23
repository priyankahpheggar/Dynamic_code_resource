%%[
SET @amount = RequestParameter('X')
OutputLine(FormatCurrency(@amount,'ja-jp')) 
]%%