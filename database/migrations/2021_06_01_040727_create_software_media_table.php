<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSoftwareMediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('software_media', function (Blueprint $table) {
            $table->id();
            $table->integer('software_id');
            $table->string('screenshots')->nullable(false);
            $table->string('video_link')->nullable();
            $table->string('brochure_link')->nullable();
            $table->string('ebooks')->nullable();
            $table->string('whitepapers')->nullable();
            $table->string('pdf')->nullable();
            $table->string('guides')->nullable();
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
        Schema::dropIfExists('software_media');
    }
}
