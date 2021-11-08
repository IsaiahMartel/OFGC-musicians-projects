<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DirectorProjects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('director_projects', function (Blueprint $table) {
            $table->engine="InnoDB";
            $table->bigIncrements('id');
            
            $table->bigInteger('project_id')->unsigned();
            $table->bigInteger('director_id')->unsigned();
            $table->timestamps();

            $table->foreign('project_id')->references('id')->on('composers')->onDelete("cascade");
            $table->bigInteger('director_id')->unsigned();
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
