<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManagedServer extends Model
{
    protected $fillable = [
        'name',
        'hostname',
        'ip_address',
        'operating_system',
        'environment',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'last_seen_at' => 'datetime',
        ];
    }
}
