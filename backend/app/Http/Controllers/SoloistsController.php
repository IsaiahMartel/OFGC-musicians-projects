<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Soloists;

class SoloistsController extends Controller
{
    
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index()
        {
            $soloist = Soloists::all();
            return $soloist;
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
            $soloist = new Soloists();
            $soloist-> nameSoloist = $request->  nameSoloist;
            $soloist->titleSoloist= $request->titleSoloist;
    
    
            $soloist->save();
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
            $soloist = Soloists::findOrFail($request->id);
            $director-> nameSoloist = $request->  nameSoloist;
            $soloist->titlesoloist= $request->titleSoloist;
            
            $soloist->save();
    
            return $soloist;
        }
    
        /**
         * Remove the specified resource from storage.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function destroy(Request $request)
        {
            
          
            $soloist = Soloists::destroy($request->id);
    
            return $soloist;
        }
}
