import connectDB from "@/app/lib/db";
import User from "@/app/lib/schema";
import {createUser} from "./api/users/actions.js"

export default async function UserManagementSystem() {
  await connectDB();
  const users = await User.find({});

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-900/60 backdrop-blur">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50">
              User Management System
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Create, manage and quickly browse all registered users.
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/40">
            Live · 8 users
          </span>
        </div>

        {/* Form */}
        
        <form action={createUser} className="mb-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
          <h2 className="mb-4 text-sm font-medium text-slate-300">
            Add new user
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="h-10 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="h-10 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+91 98765 43210"
                className="h-10 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400">
                Address
              </label>
              <input
                type="text"                
                id="address"
                name="address"
                placeholder="Patna, Bihar"
                className="h-10 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 hover:shadow-emerald-400/40 active:scale-[0.98]">
              <span>Submit</span>
            </button>
          </div>
        </form>

        {/* All users heading */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-sm font-medium text-slate-300">All users</h2>
          <button className="text-xs text-slate-400 hover:text-slate-200">
            View filters
          </button>
        </div>

        {/* User cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((user) => (
            <div
            key={user._id}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-md shadow-slate-950/60 transition hover:border-emerald-500/70 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-50">
                    {user.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {user.email}
                  </p>
                </div>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-300">
                  Active
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <div>
                  <p>{user.phone}</p>
                  <p className="mt-1">{user.address}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <button className="rounded-md bg-slate-800 px-2 py-1 text-[11px] text-slate-200 transition hover:bg-emerald-500 hover:text-slate-950">
                    Edit
                  </button>
                  <button className="rounded-md bg-slate-900 px-2 py-1 text-[11px] text-rose-400 transition hover:bg-rose-500/20 hover:text-rose-300">
                    Remove
                  </button>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}