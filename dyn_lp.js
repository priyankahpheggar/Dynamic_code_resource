%%[
  SET @product_name = 'BLN'
  IF @product_name == 'Aimovig' THEN
  SET @site_name = 'アイモビーグ.jp'
  ELSEIF @product_name == 'Lumakras' THEN
  SET @site_name = 'ルマケラス.jp'
  ELSE
  SET @site_name = 'ビーリンサイト.jp'
  ENDIF
  OutputLine(Concat(@site_name)) 
  ]%%
  