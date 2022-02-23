<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Works extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('works', function (Blueprint $table) {
            $table->engine="InnoDB";
            $table->bigIncrements('id');
            $table->String('nameWork');
            $table->Time('duration');
            $table->String('notes')->nullable();
            $table->String('orchestrationWork');
            $table->String('stringWork');


            $table->bigInteger('composer_id')->unsigned();

            $table->timestamps();

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
