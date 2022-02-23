<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Export to PDF</title>
</head>
<body>
    {{-- PROJECT:
     --}}
    <table>

        
        <thead><tr>
            <th>Composer</th>
            <th>Title</th>
            <th>String project</th>
            <th>Orchestration total</th>
    <th>Duration</th>   
    {{-- <th>Name project</th> --}}

        </tr></thead>

    <tbody>
        @foreach ($playlist as $playlists)
        <tr>
            <td>{{$playlists->composers->nameComposer}} 
                {{$playlists->composers->surnameComposer}}</td>
            <td>{{$playlists->works->nameWork}}</td>
            <td>{{$playlists->stringProject}}</td>
            <td>{{$playlists->orchestrationTotal}}</td>
            <td>{{$playlists->works->duration}}</td>
            {{-- <td>{{$playlists->projects->nameProject}}</td> --}}

            @endforeach
        </tr>
    </tbody>
     
    </table>
</body>
</html>