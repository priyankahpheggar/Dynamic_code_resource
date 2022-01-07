%%[
SET @cars = "Alto,waganor,duster"
SET @rows = BuildRowsetFromString(@cars, ',')
SET  @RowCount = RowCount(@rows)
IF @RowCount > 1 THEN
For @i = 1 to @RowCount do
    set @row = row(@rows, @i)
    set @car = field(@row,1)
]%%

    Row %%=v(@i)=%%, car: %%=v(@car)=%%<br>

    %%[next @i 
    else]%%

No rows found

%%[endif]%%


