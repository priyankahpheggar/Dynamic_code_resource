%%[
FOR @i = 10 downto 1 DO 
FOR @j = @i downto 1 DO 
Output(Concat('*'))
NEXT @j
Output(Concat('<br>'))
NEXT @i
]%%

