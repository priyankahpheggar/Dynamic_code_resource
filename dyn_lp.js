%%[
SET @dcf = '198970'
SET @decrypt_dcf = Base64Decode(@dcf)
SET @mail_seq = RequestParameter('mail_seq')
SET @site = "AMV"

IF not empty (@dcf) THEN
OutputLine(Concat(@dcf,'DCF member')) 
ELSE
OutputLine(Concat(@dcf,'NON-DCF member')) 
ENDIF
  
]%% 
