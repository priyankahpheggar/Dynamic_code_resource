%%[
SET @dcf = '198970'
IF not empty (@dcf) THEN
OutputLine(Concat(@dcf,'DCF member')) 
ELSE
OutputLine(Concat(@dcf,'NON-DCF member')) 
ENDIF 
]%% 
