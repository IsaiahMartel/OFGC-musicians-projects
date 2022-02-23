<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DirectorProjects extends Model
{
    use HasFactory;

    static $rules = [
        'project_id' => 'required',
        'director_id' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['project_id', 'director_id'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function director()
    {
        return $this->hasOne('App\Models\Director', 'id', 'director_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function project()
    {
        return $this->hasOne('App\Models\Project', 'id', 'project_id');
    }


    public function projects()
    {
        return $this->hasOne('App\Models\Projects', 'id', 'project_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function directors()
    {
        return $this->hasOne('App\Models\Directors', 'id', 'director_id');
    }
}
