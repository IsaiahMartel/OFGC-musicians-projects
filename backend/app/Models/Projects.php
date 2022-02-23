<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    use HasFactory;
    
  
    static $rules = [
		'seasons_id' => 'required',
		'nameProject' => 'required',
		'starDateProject' => 'required',
		'endDateProject' => 'required',
		'published' => 'required',
        'orchestrationProject' => 'required'
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['seasons_id','name','starDate','endDate','published, orchestrationProject'];



    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function seasons()
    {
        return $this->hasOne('App\Models\Seasons', 'id', 'seasons_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function schedules()
    {
        return $this->hasMany('App\Models\Shedule');
    }

    public function directorsProjects()
    {
        return $this->hasMany('App\Models\DirectorProjects');
    }

    public function soloistProjects()
    {
        return $this->hasMany('App\Models\SoloistProjects');
    }


    public function playlists(){
        return $this->hasMany('App\Models\Playlists');
    }
}
