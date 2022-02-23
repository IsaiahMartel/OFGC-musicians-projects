<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeSchedules extends Model
{
    use HasFactory;
    static $rules = [
		'nameType' => 'required',
		'hourRangeType' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['nameType','hourRangeType'];


       /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function shedules()
    {
        return $this->hasMany('App\Shedule');
    }
    
}
