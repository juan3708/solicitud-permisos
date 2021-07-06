<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Solicitud;
use App\Models\Trabajador;
class SolicitudController extends Controller
{
    public function crear(Request $request){
        $result = new \stdClass();
        
        $dias = $request->dias;
        $motivo = $request->motivo;
        $fecha = date('Y-m-d');
        $trabajador_id = $request->trabajador_id;

        $solicitud = new Solicitud();

        $solicitud->estado = 'pendiente';
        $solicitud->dias = $dias;
        $solicitud->fecha = $fecha;
        $solicitud->motivo = $motivo;
        $solicitud->trabajador_id = $trabajador_id;

        $solicitud->save();

        $result->code = 200;
        $result->message = 'solicitud creado con exito';
        $result->solicitud = $solicitud;

        return response()->json($result);
    }

    public function listar(Request $request){
        $result = new \stdClass();
        $solicitudes = Solicitud::all()->load('trabajador');
        $result->code = 200;
        $result->message = 'listado de solicitudes existente';
        $result->solicitudes = $solicitudes;
        
        return response()->json($result);
    }

    public function aprobar(Request $request){
        $result = new \stdClass();
        $id_trabajador = $request->id_trabajador;
        $id_solicitud = $request->id_solicitud;
        //buscar el trabajador aprobador y filtrar por su tipo de jerarquia
        $trabajador_aprobador = Trabajador::findOrFail($id_trabajador)->load('jerarquia','grupo');
        $solicitud = Solicitud::findOrFail($id_solicitud)->load('trabajador');
        //buscar el trabajador solicitante y filtrar por su tipo de jerarquia
        $trabajador_solicitante = Trabajador::findOrFail($solicitud->trabajador->id)->load('jerarquia','grupo');
        //verificamos que pertenescan la grupo
        if($trabajador_aprobador->grupo->id == $trabajador_solicitante->grupo->id){

            $dias_solicitud = $solicitud->dias;
            $dias_trabajador = $trabajador_solicitante->dias_restante;
            $dias_restados = $dias_trabajador - $dias_solicitud;

            if($dias_restados >= 0){
                //Si el trabajador aprobador es de tipo solicitante entregar mensaje de ud no puede aprobar ni pre aprobar
                if($trabajador_aprobador->jerarquia->tipo == 'Solicitante'){
                    $result->code = 400;
                    $result->message = 'Lo sentimos ud no puede aprobar ni pre aprobar';
                    return response()->json($result);
                }else{
                    //Si el trabajador es de tipo PreAprobador entregar mensaje de ud pre aprobo el mensaje
                    if($trabajador_aprobador->jerarquia->tipo == 'Pre-aprobador' &&   
                        $trabajador_solicitante->jerarquia->tipo == 'Solicitante'){
                        $result->code = 200;
                        $result->message = 'Ud pre-aprobo la solicitud';
                        $solicitud->estado = 'pre-aprobado';
                        $solicitud->save();
                        $result->solicitud = $solicitud;
                        return response()->json($result);
                    }else{
                        //Si el trabajador es de tipo Aprobador entregar mensaje de ud aprobo el mensaje
                        if($trabajador_aprobador->jerarquia->tipo == 'Aprobador'){
                            $result->code = 200;
                            $result->message = 'Ud aprobo la solicitud';

                            $trabajador_solicitante->dias_restante = $dias_restados;
                            $trabajador_solicitante->save();

                            $solicitud->estado = 'Aprobado';
                            $solicitud->save();
                            
                            $solicitud = Solicitud::findOrFail($solicitud->id)->load('trabajador');

                            $result->solicitud = $solicitud;
                            return response()->json($result);
                        }
                    }
                }
            }else{
                $result->code = 400;
                $result->message = 'Lo sentimos ud no puede pedir mas dias, porque supero el maximo anual';
                $solicitud->estado = 'Rechazado';
                $solicitud->save();
                $result->solicitud = $solicitud;
                return response()->json($result);
            }
        }else{
            $result->code = 400;
            $result->message = 'Lo sentimos ud no pertence al grupo por lo cual no puede aprobar ni pre aprobar';
            return response()->json($result);
        }
    }
    
    public function buscarNombreTrabajador(Request $request){
        $result = new \stdClass();

        $trabajador = $request->trabajador;
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
