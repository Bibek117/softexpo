<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenubarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menubars', function (Blueprint $table) {
            $table->id();
            $table->string('item');
            $table->boolean('ischild');
            $table->int('parent_id');
            $table->string('link');
            $table->string('created_by');
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menubars');
    }
}
