<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DirectorProjects;

class DirectorProjectsController extends Controller
{
    
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index()
        {
            $directorProject = directorProjects::all();
            return $directorProject;
        }
    
        /**
         * Show the form for creating a new resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function create()
        {
            //
        }
    
        /**
         * Store a newly created resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @return \Illuminate\Http\Response
         */
        public function store(Request $request)
        {
            $directorProject = new DirectorProjects();
            $directorProject-> project_id = $request-> project_id;
            $directorProject-> director_id = $request-> director_id;
            
            $directorProject->save();
        }
    
        /**
         * Display the specified resource.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function show($id)
        {
            //
        }

        public function showByProjectId(Request $request)
        {
        $directorProject = DirectorProjects::where('project_id', '=' ,$request->id)->with('directors')->get();
        return $directorProject;
        }
    
    
        /**
         * Show the form for editing the specified resource.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function edit($id)
        {
            //
        }
    
        /**
         * Update the specified resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function update(Request $request, $id)
        {
            $directorProject = DirectorProjects::findOrFail($request->id);
            $directorProject-> project_id = $request-> project_id;
            $directorProject-> director_id = $request-> director_id;
            
            $directorProject->save();
    
            return $directorProject;
        }
    
        /**
         * Remove the specified resource from storage.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function destroy(Request $request)
        {
            
          
            $directorProject = DirectorProjects::destroy($request->id);
    
            return $directorProject;
        }
}
