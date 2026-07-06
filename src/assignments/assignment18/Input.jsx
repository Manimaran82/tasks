import React, { useRef } from 'react'

const Input = () => {
    const nameRef = useRef("")
    const emailRef = useRef("")
    const passRef = useRef("")
    const para1Ref = useRef("")
    const para2Ref = useRef("")
    const para3Ref = useRef("")

    const handle = () => {
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passRef.current.value,
        }

        para1Ref.current.innerHTML = data.name
        para2Ref.current.innerHTML = data.email
        para3Ref.current.innerHTML = data.password
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl bg-white rounded-3xl shadow-xl p-6">
                <div className="flex-1 space-y-6">
                    <h2 className="text-2xl font-semibold text-slate-900">Enter your details</h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            ref={nameRef}
                            onChange={handle}
                            placeholder="Enter the Name"
                            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        />
                        <input
                            type="email"
                            ref={emailRef}
                            onChange={handle}
                            placeholder="Enter the Email"
                            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        />
                        <input
                            type="password"
                            ref={passRef}
                            onChange={handle}
                            placeholder="Enter the Password"
                            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        />
                    </div>
                </div>

                <div className="flex-1 rounded-3xl bg-slate-50 p-6 shadow-sm">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-4">Live preview</h2>
                    <div className="space-y-4 text-slate-700">
                        <p className="rounded-2xl bg-white p-4 shadow-sm">
                            <span className="font-semibold text-slate-900">Name:</span>{' '}
                            <span ref={para1Ref}></span>
                        </p>
                        <p className="rounded-2xl bg-white p-4 shadow-sm">
                            <span className="font-semibold text-slate-900">Email:</span>{' '}
                            <span ref={para2Ref}></span>
                        </p>
                        <p className="rounded-2xl bg-white p-4 shadow-sm">
                            <span className="font-semibold text-slate-900">Password:</span>{' '}
                            <span ref={para3Ref}></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Input
