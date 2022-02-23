<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Composers extends Model
{
    use HasFactory;
public $timestamps = false;

static $rules = [
    'nameComposer' => 'required',
    'surnameComposer' => 'required',
];

protected $perPage = 20;

/**
 * Attributes that should be mass-assignable.
 *
 * @var array
 */
protected $fillable = ['nameComposer','surnameComposer'];
    
    public function works()
    {
        return $this->hasMany('App\Models\Works');
    }
    
    public function playlists()
    {
        return $this->hasMany('App\Models\Playlists');
    }
    
}
