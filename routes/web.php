<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GrupoController;
use App\Http\Controllers\JerarquiaController;
use App\Http\Controllers\TrabajadorController;
use App\Http\Controllers\SolicitudController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Grupo
Route::post('/grupo/crear', [GrupoController::class, 'crear']);
Route::get('/grupo/listar', [GrupoController::class, 'listar']);
Route::post('/grupo/buscar', [GrupoController::class, 'buscar']);


//Jerarquia
Route::post('/jerarquia/crear', [JerarquiaController::class, 'crear']);
Route::get('/jerarquia/listar', [JerarquiaController::class, 'listar']);

//Trabajador
Route::post('/trabajador/crear', [TrabajadorController::class, 'crear']);
Route::get('/trabajador/listar', [TrabajadorController::class, 'listar']);
Route::post('/trabajador/asignar', [TrabajadorController::class, 'asignarGrupo']);
Route::post('/trabajador/login', [TrabajadorController::class, 'login']);
Route::post('/trabajador/logout', [TrabajadorController::class, 'logout']);
Route::post('/trabajador/buscar', [TrabajadorController::class, 'buscarTrabajador']);

//Solicitud
Route::post('/solicitud/crear', [SolicitudController::class, 'crear']);
Route::get('/solicitud/listar', [SolicitudController::class, 'listar']);
Route::post('/solicitud/aprobar', [SolicitudController::class, 'aprobar']);
Route::get('/solicitud/pendiente', [SolicitudController::class, 'listadoPendientes']);
Route::post('/solicitud/rechazar', [SolicitudController::class, 'rechazar']);
Route::post('/solicitud/buscar', [SolicitudController::class, 'buscarSolicitud']);
Route::get('/solicitud/aprobado', [SolicitudController::class, 'listadoAprobado']);
Route::get('/solicitud/rechazado', [SolicitudController::class, 'listadoRechazado']);