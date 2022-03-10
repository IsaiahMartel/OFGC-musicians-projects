<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Events\Hello;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([
    'middleware' => ['auth', 'cors'],

], function ($router) {
Route::get('/seasons','App\Http\Controllers\SeasonsController@index');
Route::post('/seasons','App\Http\Controllers\SeasonsController@store');
Route::put('/seasons/{id}','App\Http\Controllers\SeasonsController@update');
Route::delete('/seasons/{id}','App\Http\Controllers\SeasonsController@destroy');

Route::get('/projects','App\Http\Controllers\ProjectsController@index');
Route::post('/projects','App\Http\Controllers\ProjectsController@store');
Route::put('/projects/{id}','App\Http\Controllers\ProjectsController@update');
Route::delete('/projects/{id}','App\Http\Controllers\ProjectsController@destroy');


Route::get('/composers','App\Http\Controllers\ComposersController@index');
Route::post('/composers','App\Http\Controllers\ComposersController@store');
Route::put('/composers/{id}','App\Http\Controllers\ComposersController@update');
Route::delete('/composers/{id}','App\Http\Controllers\ComposersController@destroy');


Route::get('/works','App\Http\Controllers\WorksController@index');
Route::post('/works','App\Http\Controllers\WorksController@store');
Route::put('/works/{id}','App\Http\Controllers\WorksController@update');
Route::delete('/works/{id}','App\Http\Controllers\WorksController@destroy');


Route::get('/playlists','App\Http\Controllers\PlaylistsController@index');
Route::post('/playlists','App\Http\Controllers\PlaylistsController@store');
Route::put('/playlists/{id}','App\Http\Controllers\PlaylistsController@update');
Route::delete('/playlists/{id}','App\Http\Controllers\PlaylistsController@destroy');
Route::get('/playlists/projects/{id}','App\Http\Controllers\PlaylistsController@showByProjectId');


Route::get('/control-versions','App\Http\Controllers\ControlVersionsController@index');
Route::post('/control-versions','App\Http\Controllers\ControlVersionsController@store');
Route::put('/control-versions/{id}','App\Http\Controllers\ControlVersionsController@update');
Route::delete('/control-versions/{id}','App\Http\Controllers\ControlVersionsController@destroy');

Route::get('/schedule','App\Http\Controllers\ScheduleController@index');
Route::post('/schedule','App\Http\Controllers\ScheduleController@store');
Route::put('/schedule/{id}','App\Http\Controllers\ScheduleController@update');
Route::delete('/schedule/{id}','App\Http\Controllers\ScheduleController@destroy');
Route::get('/schedule/{id}','App\Http\Controllers\ScheduleController@show');
Route::get('/schedule/projects/{id}','App\Http\Controllers\ScheduleController@showByProjectId');

Route::get('/type-schedule','App\Http\Controllers\TypeSchedulesController@index');
Route::post('/type-schedule','App\Http\Controllers\TypeSchedulesController@store');
Route::put('type-schedule/{id}','App\Http\Controllers\TypeSchedulesController@update');
Route::delete('/type-schedule/{id}','App\Http\Controllers\TypeSchedulesController@destroy');
Route::get('/type-schedule/{id}','App\Http\Controllers\TypeSchedulesController@show');

Route::get('/room','App\Http\Controllers\RoomsController@index');
Route::post('/room','App\Http\Controllers\RoomsController@store');
Route::put('/room/{id}','App\Http\Controllers\RoomsController@update');
Route::delete('/room/{id}','App\Http\Controllers\RoomsController@destroy');

Route::get('/soloists','App\Http\Controllers\SoloistsController@index');
Route::post('/soloists','App\Http\Controllers\SoloistsController@store');
Route::put('/soloists/{id}','App\Http\Controllers\SoloistsController@update');
Route::delete('/soloists/{id}','App\Http\Controllers\SoloistsController@destroy');


Route::get('/soloist-projects','App\Http\Controllers\SoloistProjectsController@index');
Route::post('/soloist-projects','App\Http\Controllers\SoloistProjectsController@store');
Route::put('/soloist-projects/{id}','App\Http\Controllers\SoloistProjectsController@update');
Route::delete('/soloist-projects/{id}','App\Http\Controllers\SoloistProjectsController@destroy');
Route::get('/soloist-projects/projects/{id}','App\Http\Controllers\SoloistProjectsController@showByProjectId');

Route::get('/directors','App\Http\Controllers\DirectorsController@index');
Route::post('/directors','App\Http\Controllers\DirectorsController@store');
Route::put('/directors/{id}','App\Http\Controllers\DirectorsController@update');
Route::delete('/directors/{id}','App\Http\Controllers\DirectorsController@destroy');


Route::get('/director-projects','App\Http\Controllers\DirectorProjectsController@index');
Route::post('/director-projects','App\Http\Controllers\DirectorProjectsController@store');
Route::put('/director-projects/{id}','App\Http\Controllers\DirectorProjectsController@update');
Route::delete('/director-projects/{id}','App\Http\Controllers\DirectorProjectsController@destroy');
Route::get('/director-projects/projects/{id}','App\Http\Controllers\DirectorProjectsController@showByProjectId');

Route::get('/projects/sendPDF','App\Http\Controllers\ProjectsController@sendPDF');

    
    Route::get('/playlists/sendPDF/{id}','App\Http\Controllers\PlaylistsController@sendPDF');

    
    Route::get('/directorsPDF','App\Http\Controllers\DirectorsController@getAllDirectors');
    Route::get('/downloadDirectorsPDF', 'App\Http\Controllers\DirectorsController@downloadPDF');
    
    
    Route::get('/schedule/sendPDF/{id}', 'App\Http\Controllers\ScheduleController@sendPDF');
});
Route::get('/schedule/downloadPDF/{id}', 'App\Http\Controllers\ScheduleController@downloadPDF');
Route::get('/playlists/downloadPDF/{id}','App\Http\Controllers\PlaylistsController@downloadPDF');
Route::get('/projects/downloadPDF','App\Http\Controllers\ProjectsController@downloadPDF');

    Route::post('login', [\App\Http\Controllers\Api\V1\AuthController::class, 'login']);
    Route::post('logout', [\App\Http\Controllers\Api\V1\AuthController::class, 'logout']);
    Route::post('refresh', [\App\Http\Controllers\Api\V1\AuthController::class, 'refresh']);
    Route::post('me', [\App\Http\Controllers\Api\V1\AuthController::class, 'me']);
    Route::post('register', [\App\Http\Controllers\Api\V1\AuthController::class, 'register']);

    
    // Route::get('/projects/sendPDF','App\Http\Controllers\ProjectsController@sendPDF');
    
    
    Route::post('/broadcast', function(Request $request){
        broadcast(new Hello($request));
    });