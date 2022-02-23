<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SoloistProjects;

class SoloistProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $soloistProject = SoloistProjects::all();
        return $soloistProject;
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
        $soloistProject = new SoloistProjects();
        $soloistProject-> project_id = $request-> project_id;
        $soloistProject-> soloist_id = $request-> soloist_id;
        
        $soloistProject->save();
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

    public function showByProjectId(Request $request)
    {
    $soloistProject = SoloistProjects::where('project_id', '=' ,$request->id)->with('soloists')->get();
    return $soloistProject;
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
        $soloistProject = SoloistProjects::findOrFail($request->id);
        $soloistProject-> project_id = $request-> project_id;
        $soloistProject-> soloist_id = $request-> soloist_id;
        
        $soloistProject->save();

        return $soloistProject;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy(Request $request)
    {
        
      
        $soloistProject = SoloistProjects::destroy($request->id);

        return $soloistProject;
    }
}
