<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Seasons;

class SeasonsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $season = Seasons::all();
        return $season;
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
        $season = new Seasons();
        $season-> NameSeason = $request->  NameSeason;
        $season->startDate= $request->startDate;
        $season->endDate=$request->endDate;
        $season->noteSeason=$request->noteSeason;
        
        $season->save();
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
        $season = Seasons::findOrFail($request->id);
        $season-> NameSeason = $request->  NameSeason;
        $season->startDate= $request->startDate;
        $season->endDate=$request->endDate;
        $season->noteSeason=$request->noteSeason;
        
        $season->save();

        return $season;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        
      
        $season = Seasons::destroy($request->id);

        return $season;
    }
}
