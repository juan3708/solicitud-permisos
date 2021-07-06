<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jerarquia;

class JerarquiaController extends Controller
{
    public function crear(Request $request){
        $result = new \stdClass();
        
        $nombre = $request->nombre;
        $tipo = $request->tipo;
        if( $nombre == ''){
            $result->code=400;
            $result->message = "Debes ingresar un nombre para el jerarquia";
            return response()->json($result);
        }

        $jerarquia = new Jerarquia();
        $jerarquia->nombre = $nombre;
        $jerarquia->tipo = $tipo;
        $jerarquia->save();

        $result->code = 200;
        $result->message = 'jerarquia creado con exito';
        $result->jerarquia = $jerarquia;

        return response()->json($result);
    }

    public function listar(Request $request){
        $result = new \stdClass();
        $jerarquias = Jerarquia::all();
        $result->code = 200;
        $result->message = 'listado de jerarquias existente';
        $result->jerarquias = $jerarquias;
        
        return response()->json($result);
    }
}
