<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Schedules extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->engine="InnoDB";
            $table->bigIncrements('id');
            
            $table->bigInteger('project_id')->unsigned();
            $table->Date('date');
            $table->bigInteger('type_schedules_id')->unsigned();
            $table->Time('hourRange');
            $table->String('note');
            $table->bigInteger('rooms_id')->unsigned();
            
            $table->timestamps();

            $table->foreign('project_id')->references('id')->on('projects')->onDelete("cascade");
            $table->foreign('type_schedules_id')->references('id')->on('type_schedules')->onDelete("cascade");
            $table->foreign('rooms_id')->references('id')->on('rooms')->onDelete("cascade");
            
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
