
%%[
    SET @nowGMT = DateAdd(Now(), 9, "H")
    SET @formattedUTCDate = Format(@nowGMT, "yyyy-MM-ddTHH:mm:ssZ", "Date")
]%%

%%=v(@formattedUTCDate)=%%
