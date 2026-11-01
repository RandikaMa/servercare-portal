import React from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <aside className="fixed inset-y-0 left-0 w-64 border-r border-slate-800 bg-slate-900 p-6">
                <h1 className="text-2xl font-bold">
                    ServerCare
                </h1>

                <p className="mt-2 text-sm text-slate-400">
                    Server & Backup Management
                </p>

                <nav className="mt-10 space-y-3">
                    <div className="rounded-lg bg-blue-600 px-4 py-3">
                        Dashboard
                    </div>
                    <div className="px-4 py-3 text-slate-400">
                        Servers
                    </div>
                    <div className="px-4 py-3 text-slate-400">
                        Backups
                    </div>
                    <div className="px-4 py-3 text-slate-400">
                        Alerts
                    </div>
                    <div className="px-4 py-3 text-slate-400">
                        Settings
                    </div>
                </nav>
            </aside>

            <main className="ml-64 p-8">
                <header className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold">
                            Dashboard
                        </h2>
                        <p className="mt-2 text-slate-400">
                            Monitor your Linux infrastructure.
                        </p>
                    </div>

                    <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                        Portal initialized
                    </span>
                </header>

                <section className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {[
                        { label: 'Registered Servers', value: '0' },
                        { label: 'Successful Backups', value: '0' },
                        { label: 'Active Alerts', value: '0' },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
                        >
                            <p className="text-sm text-slate-400">
                                {item.label}
                            </p>
                            <p className="mt-4 text-3xl font-bold">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </section>

                <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
                    <h3 className="text-xl font-semibold">
                        Infrastructure Overview
                    </h3>
                    <p className="mt-3 text-slate-400">
                        Your registered Linux servers and their monitoring
                        status will appear here.
                    </p>
                </section>
            </main>
        </div>
    );
}

const rootElement = document.getElementById('app');

if (rootElement) {
    createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}
