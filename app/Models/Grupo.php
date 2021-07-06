<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grupo extends Model
{
    protected $table = 'grupo';
    public $timestamps=false;

    public function trabajador(){
        return $this->hasMany('App\Models\Trabajador');
    }
}
