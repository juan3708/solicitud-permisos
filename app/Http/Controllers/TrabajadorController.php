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
        $password = $request->password;

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
        $trabajador->password = $password;

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

    public function login(Request $request){
        $result = new \stdClass();

        $email = $request->email;
        $password = $request->password;

        $trabajador = Trabajador::where('email',$email)
                                ->where('password',$password)
                                ->first();
        
        if($trabajador != NULL){
            if($trabajador->authenticate == 0 || $trabajador->authenticate ==  null ){
                $trabajador->load('jerarquia');
                $trabajador->authenticate = 1;
                $trabajador->save();
                $result->code = 200;
                $result->message = 'Se ingreso exitosamente';
                $result->trabajador = $trabajador;
                return response()->json($result);
            }else{
                $result->code = 201;
                $result->message = 'El usuario ya esta ingresado';
                return response()->json($result);
            }
        }
        $result->code = 400;
        $result->message = 'Credenciales no validas';
        return response()->json($result);
        

    }

    public function logout(Request $request){
        $result = new \stdClass();

        $id = $request->id;

        $trabajador = Trabajador::where('id',$id)
                                    ->first();

        $trabajador->authenticate = 0;
        $trabajador->save();
        $result->code = 200;
        $result->message = 'Se deslogeo exitosamente';
        return response()->json($result);

    }

    public function buscarTrabajador(Request $request){
        $result = new \stdClass();

        $id_trabajador = $request->id_trabajador;
        $trabajador = Trabajador::where('id',$id_trabajador)->first();
        $trabajador->load('jerarquia','grupo','solicitud');
        $result->code = 200;
        $result->message = 'Trabajador encontrado con exito';
        $result->trabajador = $trabajador;
        return response()->json($result);

    }
}
