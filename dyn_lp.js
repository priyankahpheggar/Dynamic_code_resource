%%[

    SET @online_live_date = '2023-01-05 06:12 PM'
    SET @Current_date = DateAdd(Now(), 15, "H")
    set @Current_date = Format(@Current_date, "yyyy-MM-dd HH:mm", "Date")
    SET @diff = DateDiff(@online_live_date,@Current_date, 'MI')
    SET @Islive = IIF(@diff >= 1,'True','False')
    
    ]%%
    online_live_date = %%=v(@online_live_date)=%% <br/>
    Current_date = %%=v(@Current_date)=%% <br/>
    diff = %%=v(@diff)=%% <br/>
    Islive = %%=v(@Islive)=%% <br/>