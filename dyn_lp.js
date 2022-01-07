%%[
SET @car = "Alto,waganor,duster"
SET @row = BuildRowsetFromString(@car, ',')
SET  @RowCount = RowCount(@row)
IF @RowCount > 1 THEN
For @i = 1 to @RowCount do
    set @row = row(@row, @i) /* get row based on counter */
    set @car = field(@row,1)

    ]%%

    <br>Row %%=v(@i)=%%, car: %%=v(@car)=%%

    %%[

  next @i ]%%

%%[ else ]%%

No rows found

%%[ endif ]%%
]%%

