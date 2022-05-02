%%[
    var @date, @result
    set @date = Now()
    set @result = DateParse(@date,1)
    
    
    ]%%
    Output: %%=v(@result)=%%