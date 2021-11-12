%%[
    SET @amount_of_deliveries = RequestParameter('X')
  SET @sl = Length(@amount_of_deliveries)
  IF @s1 > 3 THEN
                SET @l = Substring(@amount_of_deliveries,0,Subtract(@sl,3))
                SET @r = Substring(@amount_of_deliveries,Subtract(@sl,3),3)
                SET @amount_of_deliveries = Concat(@l,',',@r)
  ENDIF
]%%
%%=v(@amount_of_deliveries)=%%

