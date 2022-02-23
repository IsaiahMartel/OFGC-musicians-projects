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
            <th>Tipo</th>
            <th>Sala</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Notas</th>
        </tr></thead>

    <tbody>
        @foreach ($schedule as $schedules)
        <tr>
            <td>{{$schedules->typeschedules->nameType}}</td>
            <td>{{$schedules->rooms->nameRoom}}</td>
            <td>{{$schedules->date}}</td>
            <td>{{$schedules->hourRange}}</td>
            <td>{{$schedules->note}}</td>
            
            @endforeach
        </tr>
    </tbody>
     
    </table>
</body>
</html>