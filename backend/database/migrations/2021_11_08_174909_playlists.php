<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Playlists extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('playlists', function (Blueprint $table) {
            $table->engine="InnoDB";
            $table->bigIncrements('id');
            $table->String('stringProject');
            $table->String('order')->nullable();
            $table->String('orchestrationTotal');

            $table->bigInteger('project_id')->unsigned();
            $table->bigInteger('work_id')->unsigned();
            $table->bigInteger('composer_id')->unsigned();

            $table->timestamps();

            $table->foreign('project_id')->references('id')->on('projects')->onDelete("cascade");
            $table->foreign('work_id')->references('id')->on('works')->onDelete("cascade");
            $table->foreign('composer_id')->references('id')->on('composers')->onDelete("cascade");
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
