<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rooms extends Model
{
    use HasFactory;

      
    static $rules = [
		'nameRoom' => 'required',
		'acronymRoom' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['nameRoom','acronymRoom'];


        /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function shedules()
    {
        return $this->hasMany('App\Shedule');
    }

}
