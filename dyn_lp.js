%%[
    SET @amount = RequestParameter('x')
    SET @L1 = Length(@amount)
    
    IF @L1 > 6 THEN
        SET @l = Substring(@amount,1,Subtract(@L1,3))   //12345
        SET @L2 = Length(@l)
        SET @lp1 = Substring(@l,1,Subtract(@L2,3))   //12 
        SET @rp1 = Substring(@l,Subtract(@L2,2),3)  //345

        SET @r = Substring(@amount,Subtract(@L1,2),3)   //678
        SET @FS = Concat(@lp1,',',@rp1,',',@r)
    
    ELSEIF @L1 > 3 THEN
        SET @l = Substring(@amount,1,Subtract(@L1,3))   //12345 
        SET @r = Substring(@amount,Subtract(@L1,2),3)   //678
        SET @FS = Concat(@l,',',@r)

    ENDIF


]%%
<br>
Output = %%=v(@FS)=%%