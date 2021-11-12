%%[
    SET @amount_of_deliveries = RequestParameter('x')
   SET @sl = Length(@amount_of_deliveries)
 IF @sl > 3 THEN

                SET @l = Substring(@amount_of_deliveries,0,Subtract(@sl,3))
                SET @r = Substring(@amount_of_deliveries,Subtract(@sl,3),3)
                SET @amount_of_deliveries = Concat(@l,',',@r)

                IF @sl > 6 THEN
                SET @p1 = Substring(@amount_of_deliveries,0,Subtract(@sl,3))
                SET @s1 = Substring(@p1,0,Subtract(@sl,3))
                SET @s2 = Substring(@p1,Subtract(@sl,3),3)


                SET @s3 = Substring(@amount_of_deliveries,Subtract(@sl,3),3)
                SET @amount_of_deliveries = Concat(@s1,',',@s2,',',@s3)
                ENDIF
ENDIF
  
]%%
%%=v(@amount_of_deliveries)=%%


