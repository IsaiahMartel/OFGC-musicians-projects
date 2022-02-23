<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Export to PDF</title>
</head>
<body>
    <table>
        <thead><tr>
            <th>Temporada</th>
            <th>Título</th>
            <th>Fecha de inicio</th>
            <th>Fecha de finalización</th>
            <th>Orquestación</th>
          
        </tr></thead>

    <tbody>
        @foreach ($project as $projects)
        <tr>
            <td>{{$projects->seasons->NameSeason}}</td>
            <td>{{$projects->nameProject}}</td>
            <td>{{$projects->startDateProject}}</td>
            <td>{{$projects->endDateProject}}</td>
            <td>{{$projects->orchestrationProject}}</td>

            
            @endforeach
        </tr>
    </tbody>
     
    </table>
</body>
</html>