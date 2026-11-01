<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ManagedServer;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ManagedServerController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(
            ManagedServer::query()
            ->latest()
            ->paginate(10)
        );
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required','string','max:255'],
            'hostname' => ['nullable','string', 'max:255'],
            'ip_address' => ['required', 'ip'],
            'operating_system' => ['required', 'string', 'max:100'],
            'environment' => [
                'required',
                Rule::in(['development','staging','production']),
            ],
        ]);

        $server = ManagedServer::create($validated);

        return response()->json([
            'message' => 'Server registered successfully.',
            'data' => $server,
        ],201);
    }

    public function show(ManagedServer $server)
    {
        return response()->json([
            'data' => $server,
        ]);
    }

    public function update(Request $request, ManagedServer $server)
    {
        $validated = $request->validate([
            'name' => ['required','string','max:255'],
            'hostname' => ['nullable','string','max:255'],
            'ip_address' => ['required','ip'],
            'operating_system' => ['required', 'string', 'max:100'],
            'environment' => [
                'required',
                Rule::in(['development','staging','production']),
            ],
        ]);
        $server->update($validated);
    }
}
