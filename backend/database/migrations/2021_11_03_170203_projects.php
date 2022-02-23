<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Projects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //

        Schema::create('projects', function (Blueprint $table) {
            $table->engine="InnoDB";
            $table->bigIncrements('id');
            $table->String('nameProject');
            $table->Date('startDateProject');
            $table->Date('endDateProject');
            $table->boolean('published');
            $table->String('orchestrationProject');


            $table->bigInteger('seasons_id')->unsigned();

            $table->timestamps();

            $table->foreign('seasons_id')->references('id')->on('seasons')->onDelete("cascade");
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
