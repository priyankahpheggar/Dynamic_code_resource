<html>
    <head>
    </head>
    <body>
        <table style= "border: 1px solid black">
            <tr>
                <td>FirstName</td>
                <td>LastName</td>
                <td>Email</td>
              
            </tr>
            <script runat=server>  
                Platform.Load("Core","1");
                var layouts = DataExtension.Init("Encrypted_data_Test").Rows.Retrieve();
                for (var i = 0; i < layouts.length; i++)
                {
                    Write("<tr>");
                    Write("<td>" + layouts[i].FirstName + "</td>");
                    Write("<td>" + layouts[i].LastName + "</td>");
                    Write("<td>" + layouts[i].Email + "</td>");        
                    Write("</tr>");
                }
                //Write(Stringify(layouts));
            </script>
        </table>
    </body>
</html>