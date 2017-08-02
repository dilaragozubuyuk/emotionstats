<?php

namespace App\Model;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class EmployeeModel extends Authenticatable
{
    protected $table = 'employee';
    public $timestamps = true;

    public function department()
    {
        $this->hasOne('App\Model\DepartmentModel', 'department_id', 'id');
    }

    public function moods()
    {
        $this->hasMany('App\Model\MoodModel', 'employee_id', 'id');
    }

    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'role', 'status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}