%%[
SET @X = '1000'
SET @y = '200'
SET @z = '4'
SET @sum = ADD(ADD(@X,@y),@z)
OutputLine(Concat(@sum)) 
]%%
