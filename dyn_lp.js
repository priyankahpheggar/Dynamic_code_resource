%%[
FOR @i = 1 downto 10 DO 
FOR @j = 1 downto @i DO 
Output(Concat('*'))
NEXT @j
Output(Concat('<br>'))
NEXT @i
]%%

