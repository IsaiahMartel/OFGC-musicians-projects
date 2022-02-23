<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Directors;
use Barryvdh\DomPDF\Facade as PDF;

class DirectorsController extends Controller
{
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index()
        {
            $director = Directors::all();
            return $director;
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
            $director = new Directors();
            $director-> nameDirector = $request->  nameDirector;
            $director->titleDirector= $request->titleDirector;
    
            $director->save();
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
            $director = Directors::findOrFail($request->id);
            $director-> nameDirector = $request->  nameDirector;
            $director->titleDirector= $request->titleDirector;

            $director->save();
    
            return $director;
        }
    
        /**
         * Remove the specified resource from storage.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function destroy(Request $request)
        {
            
          
            $director = Directors::destroy($request->id);
    
            return $director;
        }

        public function getAllDirectors(){
            $director = Directors::all();
            return view ('directors', compact('director'));
        
        }

        public function downloadPDF()
{
 
    $director = Directors::all();
    

    return PDF::loadView('directors', compact('director'))
        ->stream('directors.pdf');
}



}
