%%[
FOR @i = 1 TO 10 DO 
FOR @j = 1 TO @i DO 
Output(Concat('*'))
NEXT @j
Output(Concat('<br>'))
NEXT @i
]%%

