<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Directors extends Model
{
    use HasFactory;

    static $rules = [
		'nameDirector' => 'required',
		'titleDirector' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['nameDirector','titleDirector'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    
    public function directorProjects()
    {
        return $this->hasMany('App\Models\DirectorProjects');
    }
}
