<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soloists extends Model
{
    use HasFactory;

     
    static $rules = [
		'nameSoloist' => 'required',
		'titleSoloist' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['nameSoloist','titleSoloist'];

    public function soloistProjects()
    {
        return $this->hasMany('App\Models\SoloistProjects');
    }
}
