<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Playlists;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\Auth;
use Mail;

class PlaylistsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $playlist = Playlists::all();
        return $playlist;
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
        $playlist = new Playlists();
        $playlist-> stringProject = $request->  stringProject;
        $playlist->order= $request->order;
        $playlist->orchestrationTotal=$request->orchestrationTotal;
        $playlist->project_id=$request->project_id;
        $playlist->work_id=$request->work_id;
        $playlist->composer_id=$request->composer_id;
    
        $playlist->save();
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
    $playlist = Playlists::where('project_id', '=' ,$request->id)->with('works','composers','projects')->get();
    return $playlist;
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
        $playlist = Playlists::findOrFail($request->id);
        $playlist-> stringProject = $request->  stringProject;
        $playlist->order= $request->order;
        $playlist->orchestrationTotal=$request->orchestrationTotal;
        $playlist->project_id=$request->project_id;
        $playlist->work_id=$request->work_id;
        $playlist->composer_id=$request->composer_id;
        
        $playlist->save();

        return $playlist;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        
      
        $playlist = playlists::destroy($request->id);

        return $playlist;
    }

    // public function viewInPDF(){
    //     $playlist = Playlists::all();
    //     return view ('playlists', compact('playlist'));
    
    // }

    public function downloadPDF(Request $request)
{

    $playlist = Playlists::where('project_id', '=' ,$request->id)->with('works','composers','projects')->get();


return PDF::loadView('playlists', compact('playlist'))
    ->stream('playlists.pdf');
}

public function sendPDF(Request $request)
        {
            $user = Auth::user();

            $playlist = Playlists::where('project_id', '=' ,$request->id)->with('works','composers','projects')->get();

            $data["email"]= $user->email;
            $data["title"] = "From ItSolutionStuff.com";
            $data["body"] = "This is Demo";
            $pdf = PDF::loadView('playlists', compact('playlist'))->stream('playlists.pdf');
       
    
                Mail::send('playlists', compact('playlist'), function($message)use($data, $pdf) {
                    $message->to($data["email"], $data["email"])
                            ->subject($data["title"])
                            ->attachData($pdf, "text.pdf");
                });
         
                    
            
    }

}
