<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Trabajador;
class TrabajadorController extends Controller
{
    public function crear(Request $request){
        $result = new \stdClass();
        
        $nombre = $request->nombre;
        $fecha_nacimiento = $request->fecha_nacimiento;
        $telefono = $request->telefono;
        $dias_restante = $request->dias_restante;
        $apellido = $request->apellido;
        $email = $request->email;
        $rut = $request->rut;
        $jerarquia_id = $request->jerarquia_id;

        $trabajador = new Trabajador();

        if($request->grupo_id != ''){
            $grupo_id = $request->grupo_id;
            $trabajador->grupo_id = $grupo_id;
        }
        
        $trabajador->nombre = $nombre;
        $trabajador->fecha_nacimiento = $fecha_nacimiento;
        $trabajador->telefono = $telefono;
        $trabajador->dias_restante = $dias_restante;
        $trabajador->apellido = $apellido;
        $trabajador->email = $email;
        $trabajador->rut = $rut;
        $trabajador->jerarquia_id = $jerarquia_id;

        $trabajador->save();

        $result->code = 200;
        $result->message = 'trabajador creado con exito';
        $result->trabajador = $trabajador;

        return response()->json($result);
    }

    public function listar(Request $request){
        $result = new \stdClass();
        $trabajadores = Trabajador::all()->load('grupo','jerarquia');
        $result->code = 200;
        $result->message = 'listado de trabajadores existente';
        $result->trabajadores = $trabajadores;
        
        return response()->json($result);
    }

    public function asignarGrupo(Request $request){
        $result = new \stdClass();

        $id_trabajador = $request->id_trabajador;
        $grupo_id = $request->grupo_id;
        $trabajador = Trabajador::findOrFail($id_trabajador);
        $trabajador->grupo_id = $grupo_id;
        $trabajador->save();

        $result->code = 200;
        $result->message = 'Se asigno exitosamente el grupo';
        $result->trabajador = $trabajador;

        return response()->json($result);
    }
}
