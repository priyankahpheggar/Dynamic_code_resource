%%[
    var @date, @result
    set @date = Now()
    set @result = DateParse(@date,0)
    
    
    ]%%
    Output: %%=v(@result)=%%