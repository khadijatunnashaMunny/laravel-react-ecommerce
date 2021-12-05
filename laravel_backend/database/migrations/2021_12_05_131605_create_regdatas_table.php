<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegdatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('regdatas', function (Blueprint $table) {
        $table->id();
        $table->string('fname');
        $table->string('lname');
        $table->string('email')->unique();
        $table->string('phone');
        $table->string('password');
        $table->string('cpassword');
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
        Schema::dropIfExists('regdatas');
    }
}
