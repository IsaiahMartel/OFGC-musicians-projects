[Go back to readme](https://github.com/IsaiahMartel/AuditorioIonicLaravel/blob/master/README.md)



# ER DIAGRAM
![Legend](https://user-images.githubusercontent.com/91074551/146281870-5a85539b-df91-4994-b628-787a4a54d322.png)

![Model E-R](https://user-images.githubusercontent.com/91074551/146282483-ef0eda05-35e5-45e9-b1e2-ea7de9dbfb8a.png)



# Explanation
***
## Entitys 
Every entity has an  id which is primary key, int, not null and with auto-increment.

### Directors
nameDirector (String, NOT NULL) director’s name and surname, titleDirector (String) (?).
DirectorsProjects: project_id (foreign key, int, NOT NULL) id from Projects entity, soloist_id (foreign key, NOT NULL), id from Soloists entity.

### Soloists: 
autores_id (int, NOT NULL) (?), nameSoloist (String, NOT NULL) soloist’s name and surname, titleDirector (String) if it is director or musician.

### SoloistProjects
project_id (foreign key, NOT NULL) id from Projects entity, director_id (foreign key, NOT NULL), id from Directors entity.

### Seasons:
nameSeason (String, NOT NULL) name of the season, startDate (Date) the date that the season starts, endDate (Date) the date that the season ends, noteSeason (String) notes,ideas or description, that can be added about the season.

### Projects
season_id (foreign key, int, NOT NULL) id from Seasons entity, nameProject (String NOT NULL) name of the project, startDateProject (Date, NOT NULL) the date that the project starts, endDateProject (Date, NOT NULL) the date that the project ends, published (Date, NOT NULL) if the project is published or not.

### Schedule
project_id (int, NOT NULL), type_id (int, NOT NULL) id from the TypeSchedule entity, room_id (int, NOT NULL) id from the entity Room, date (Date, NOT NULL) date’s schedule which is determined in a range between the start day of a project and its end, hourRange (Time) hour of the schedule, note (String) notes that can be added, like ideas or thoughts.

### TypeSchedule 
nameType (String, NOT NULL)  if it is an essay or a performance from the TypeSchedule entity,   hourRangeType (Time) there are fixed ones ('REHEARSAL AM', 'REHEARSAL PM', 'Performance'; for example).

### Room
id (int, NOT NULL, auto-increment), nameRoom (String, NOT NULL) name of the room, acronymRoom (String) how it is called.

### Composers
nameComposer (String, NOT NULL) Composer’s name, surnameComposer (String, NOT NULL) Composer’s surname.

### Works
composer_id (foreign key, int, NOT NULL) id from the Composer entity, nameWork (String, NOT NULL) title of the work, duration (Time, NOT NULL) how much it last, orchestrationWork (String), notes (String) notes that can be added, like ideas or thoughts.

### Playlists
project_id (foreign key, int, NOT NULL) id from the Project entity, work_id (foreign key, int, NOT NULL) id from the Work entity, composer_id (foreign key, int, NOT NULL) id from the Composer entity, orchestrationProject,  stringProject (String), order (String, NOT NULL) order of the works inside the playlist.

### ControlVersions 
project_id (foreign key, int, NOT NULL) id from the Project entity, startDate.
