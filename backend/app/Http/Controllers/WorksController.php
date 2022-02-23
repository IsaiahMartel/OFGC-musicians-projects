<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Works;

class WorksController extends Controller
{
       /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $work = works::all();
        return $work;
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
        $work = new Works();
        $work-> nameWork = $request->  nameWork;
        $work->composer_id= $request -> composer_id;
        $work->duration=$request -> duration;
        $work->notes=$request->notes;
        $work->orchestrationWork=$request->orchestrationWork;
        $work->stringWork=$request->stringWork;
        
        $work->save();
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
        $work = Works::findOrFail($request->id);
        $work-> nameWork = $request->  nameWork;
        $work->composer_id= $request -> composer_id;
        $work->duration=$request -> duration;
        $work->notes=$request->notes;
        $work->orchestrationWork=$request->orchestrationWork;
        $work->stringWork=$request->stringWork;
        
        $work->save();

        return $work;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        
      
        $work = Works::destroy($request->id);

        return $work;
    }
}
