<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoloistProjects extends Model
{
    use HasFactory;

       
    static $rules = [
		'project_id' => 'required',
		'soloist_id' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['project_id','soloist_id'];


    public function projects()
    {
        return $this->hasOne('App\Models\Projects', 'id', 'project_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function soloists()
    {
        return $this->hasOne('App\Models\Soloists', 'id', 'soloist_id');
    }
}
