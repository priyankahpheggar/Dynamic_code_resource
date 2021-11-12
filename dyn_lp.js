%%[
    SET @amount_of_deliveries = '2004767889'
  SET @sl = Length(@amount_of_deliveries)
                SET @l = Substring(@amount_of_deliveries,0,Subtract(@sl,3))
                SET @r = Substring(@amount_of_deliveries,Subtract(@sl,3),3)
                 SET @amount_of_deliveries = Concat(@l,',',@r)
]%%
%%=v(@amount_of_deliveries)=%%

