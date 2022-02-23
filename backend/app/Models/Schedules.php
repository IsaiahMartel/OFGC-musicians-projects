<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedules extends Model
{
    use HasFactory;

    
    static $rules = [
		'project_id' => 'required',
		'type_schedules_id' => 'required',
		'rooms_id' => 'required',
		'date' => 'required',
		'hourRange' => 'required',
		'note' => 'nullable',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['project_id','type_schedules_id','rooms_id','date','hourRange','note'];


    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function projects()
    {
        return $this->hasOne('App\Models\Projects', 'id', 'project_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function rooms()
    {
        return $this->hasOne('App\Models\Rooms', 'id', 'rooms_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function typeSchedules()
    {
        return $this->hasOne('App\Models\TypeSchedules', 'id', 'type_schedules_id');
    }
    

}
