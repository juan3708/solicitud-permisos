<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trabajador extends Model
{
    protected $table = 'trabajador';
    public $timestamps=false;

    public function grupo(){
        return $this->belongsTo('App\Models\Grupo','grupo_id');
    }

    public function jerarquia(){
        return $this->belongsTo('App\Models\Jerarquia','jerarquia_id');
    }

    public function solicitud(){
        return $this->hasMany('App\Models\Solicitud');
    }
}
