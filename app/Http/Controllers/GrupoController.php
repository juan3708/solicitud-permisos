<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Grupo;

class GrupoController extends Controller
{
    public function crear(Request $request){
        $result = new \stdClass();
        
        $nombre = $request->nombre;
        if( $nombre == ''){
            $result->code=400;
            $result->message = "Debes ingresar un nombre para el grupo";
            return response()->json($result);
        }

        $grupo = new Grupo();
        $grupo->nombre = $nombre;
        $grupo->save();

        $result->code = 200;
        $result->message = 'Grupo creado con exito';
        $result->grupo = $grupo;

        return response()->json($result);
    }

    public function listar(Request $request){
        $result = new \stdClass();
        $grupos = Grupo::all()->load('trabajador','trabajador.jerarquia');
        $result->code = 200;
        $result->message = 'listado de grupos existente';
        $result->grupos = $grupos;

        return response()->json($result);
    }

    public function buscar(Request $request){
        $result = new \stdClass();

        $id_grupo = $request->id_grupo;
        $grupo = Grupo::where('id',$id_grupo)->first();
        $grupo->load('trabajador','trabajador.jerarquia');
        $result->code = 200;
        $result->message = 'Grupo encontrado con exito';
        $result->grupo = $grupo;
        return response()->json($result);
    }
}
