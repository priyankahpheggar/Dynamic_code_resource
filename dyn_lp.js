%%[ 
/* Get the order data from data extension */ 
Set @OrderData = '[{ "Product_Name": "Crimson Camelback Pack", "SKU": "104176", "Thumbnail_URL": "http://something.com/image2/", "Product_Category": "Gear", "Product_Ratings": { "Last_Review_Text": "Thank you so much for sending this express...", "Number_of_Ratings": "14", "Average_Rating": "3.21" } }, { "Product_Name": "DualMountain Pack", "SKU": "104177", "Thumbnail_URL": "http://something.com/image4/", "Product_Category": "Gear", "Product_Ratings": { "Last_Review_Text": "Thank you so much for sending this express...", "Number_of_Ratings": "3", "Average_Rating": "4.67" } }, { "Product_Name": "Terra 40 Pack", "SKU": "104178", "Thumbnail_URL": "http://something.com/image5/", "Product_Category": "Gear", "Product_Ratings": { "Last_Review_Text": "I was 100 % satisfied with my new NTO purchase...", "Number_of_Ratings": "15", "Average_Rating": "3.60" } }]'
]%%
%%{={{ }}=}%%
<div style="text-align: left;">
   
<table border="1" align="center" cellspacing="0" cellpadding="5" width="">
    <tr>
            <th align="left" valign="top">Retrieve Product Name:</th>
            <th align="left" valign="top">Number_of_Ratings:</th>
            <th align="left" valign="top">SKU:</th>    
    </tr>



    {{.dataobject JsonVar type=variable source=@OrderData maxrows=20}} 
		
          {{.data}} 
		  {"target":"@OrderData"} 
		  {{/data}} 
            
	  {{/dataobject}} 
	  {{#each JsonVar}} 
      <tr>
		    <td  align="left" valign="top">{{Product_Name}}</td>
            
		    {{.datasource JSONexcess type=nested maxRows = 10}} 
		    {{.data}} 
		    {"target" : "JsonVar.Product_Ratings"} 
		    {{/data}} 
		    <td align="left" valign="top">{{JSONexcess.Number_of_Ratings}}</td>
            <td  align="left" valign="top">{{SKU}}</td>
		    {{/datasource}}
          {{/each}}
          </tr>
    </table>
</div>
