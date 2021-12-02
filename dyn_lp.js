%%[
  SET @amount = '6.89'
  SET @amount = FormatCurrency(@amount,'en-US')
  OutputLine(Concat(@amount,' is a success!')) 
]%%