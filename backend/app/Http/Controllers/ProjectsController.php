<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Projects;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\Auth;
use Mail;
use App\Events\Alert;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $project = Projects::with("seasons")->get();
        return $project;
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
        $project = new projects();
        $project-> nameproject = $request->  nameproject;
        $project->startDateProject= $request->startDateProject;
        $project->endDateProject=$request->endDateProject;
        $project->published=$request->published;
        $project->seasons_id=$request->seasons_id;
        $project->orchestrationProject=$request->orchestrationProject;
        $project->save();
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $project = projects::findOrFail($request->id);
        $project-> nameproject = $request->  nameproject;
        $project->startDateProject= $request->startDateProject;
        $project->endDateProject=$request->endDateProject;
        $project->published=$request->published;
        $project->seasons_id=$request->seasons_id;
        $project->orchestrationProject=$request->orchestrationProject;
        
        $project->save();

        broadcast(new Alert(("Se ha actualizado un proyecto.")));

        return $project;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        
      
        $project = Projects::destroy($request->id);

        return $project;
    }


  

public function downloadPDF(Request $request)
{

    $project = Projects::with("seasons")->get();


return PDF::loadView('projects', compact('project'))->stream('projects.pdf');
}

public function sendPDF(Request $request)
{
    $user = Auth::user();

    $project = Projects::with("seasons")->get();

    $data["email"]= $user->email;
    $data["title"] = "From ItSolutionStuff.com";
    $data["body"] = "This is Demo";
    $pdf = PDF::loadView('projects', compact('project'))->stream('projects.pdf');

        Mail::send('projects', compact('project'), function($message)use($data, $pdf) {
            $message->to($data["email"], $data["email"])
                    ->subject($data["title"])
                    ->attachData($pdf, "text.pdf");
        });
 
}

}
