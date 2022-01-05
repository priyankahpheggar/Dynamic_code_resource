%%[
FOR @i = 10 downto 1 DO 
FOR @j = 1 downto @i DO 
Output(Concat('*'))
NEXT @j
Output(Concat('<br>'))
NEXT @i
]%%

