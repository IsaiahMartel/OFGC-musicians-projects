<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Playlists extends Model
{
    use HasFactory;

    static $rules = [
		'project_id' => 'required',
		'composer_id' => 'required',
		'work_id' => 'required',
		'orchestration_total' => 'required',
		'order' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['project_id','composer_id','work_id','orchestration_total','order'];


    public function works()
    {
        return $this->hasOne('App\Models\Works', 'id', 'work_id');
    }

    public function composers()
    {
        return $this->hasOne('App\Models\Composers', 'id', 'composer_id');
    }
    
    public function projects(){
        return $this->hasOne('App\Models\Projects', 'id', 'project_id');
    }
}
