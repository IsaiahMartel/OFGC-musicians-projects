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
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>

        </tr></thead>

    <tbody>
        @foreach ($director as $directors)
        <tr>
            <td>{{$directors->id}}</td>
            <td>{{$directors->nameDirector}}</td>
            <td>{{$directors->titleDirector}}</td>
            @endforeach
        </tr>
    </tbody>
     
    </table>
</body>
</html>