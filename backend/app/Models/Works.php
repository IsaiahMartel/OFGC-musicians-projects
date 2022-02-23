<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Works extends Model
{
    use HasFactory;

    static $rules = [
		'composer_id' => 'required',
		'nameWork' => 'required',
		'duration' => 'required',
		'orchestrationWork' => 'required',
		'stringWork' => 'required',
		'notes' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['composer_id','nameWork','duration','orchestrationWork','stringWork','notes'];


    public function playlists()
    {
        return $this->hasMany('App\Models\Playlists');
    }

    public function composers()
    {
        return $this->hasOne('App\Models\Composers', 'id', 'composer_id');
    }
    
}
