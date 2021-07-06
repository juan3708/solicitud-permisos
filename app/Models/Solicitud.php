<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitud extends Model
{
    protected $table = 'solicitud';
    public $timestamps=false;

    public function trabajador(){
        return $this->belongsTo('App\Models\Trabajador','trabajador_id');
    }

}
