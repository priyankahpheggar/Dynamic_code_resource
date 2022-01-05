%%[
SET @min = RequestParameter('X')
SET @max = RequestParameter('Y')    
FOR @i = @min TO @max DO 
FOR @j = 1 TO @i DO 
Output(Concat('*'))
NEXT @j
Output(Concat('<br>'))
NEXT @i
]%%

