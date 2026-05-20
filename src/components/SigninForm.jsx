'use client'
import { Form, TextField, Label, Input, FieldError, Description, Button } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import React from 'react';

const SigninForm = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
    
        const formData = new FormData(event.currentTarget);
        const user = Object.fromEntries(formData.entries());
    
        console.log(user);
    
        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            rememberMe: false,
        })
    
        console.log(data, error);
    
        if (data) {
            // Reset form
            form.reset();
            redirect('/');
        }
    
        if (error) {
            toast.error(error.message);
        }
    }

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: 'google',
        });
    }

    return (
        <div>
            <Form onSubmit={onSubmit} className="mx-1 flex flex-col gap-4.5">

                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                className="w-full"
                                validate={(value) => {
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                        return "Please enter a valid email address";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="text-xs font-bold uppercase tracking-wide text-[#082a5e]/80 mb-1.5 block">Email</Label>
                                <Input placeholder="john@example.com" className="w-full bg-base-200/50 hover:bg-base-200 border border-base-200 focus:border-[#082a5e] rounded-xl transition-all h-11 px-4 text-sm" />
                                <FieldError className="text-xs text-error mt-1" />
                            </TextField>

                            <TextField
                                isRequired
                                minLength={6}
                                name="password"
                                type="password"
                                className="w-full"
                            >
                                <Label className="text-xs font-bold uppercase tracking-wide text-[#082a5e]/80 mb-1.5 block">Password</Label>
                                <Input placeholder="••••••••" className="w-full bg-base-200/50 hover:bg-base-200 border border-base-200 focus:border-[#082a5e] rounded-xl transition-all h-11 px-4 text-sm" />
                                <Description className="text-[11px] text-base-content/50 leading-normal mt-1.5 block">
                                    Must be at least 6 characters with 1 uppercase and 1 lowercase
                                </Description>
                                <FieldError className="text-xs text-error mt-1" />
                            </TextField>

                            {/* Actions Group */}
                            <div className="flex flex-col gap-3.5 pt-2">
                                <Button className="w-full bg-[#082a5e] hover:bg-[#051c40] text-white font-bold h-11 rounded-xl shadow-md shadow-[#082a5e]/15 transition-all duration-200 text-sm" type="submit">
                                    Sign In
                                </Button>

                                <div className="relative flex py-2 items-center">
                                    <div className="grow border-t border-base-300"></div>
                                    <span className="shrink mx-4 text-xs text-base-content/40 font-medium bg-transparent">Or</span>
                                    <div className="grow border-t border-base-300"></div>
                                </div>

                                <Button
                                    onClick={handleGoogleSignin}
                                    className="w-full border border-base-200 bg-base-100 hover:bg-base-200 text-base-content/80 font-bold h-11 rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2"
                                    variant="outline"
                                >
                                    {/* Inline Flat Material Google Icon */}
                                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                                        <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z" />
                                        <path fill="#FBBC05" d="M16.04 15.345c-1.045.691-2.42 1.1-4.04 1.1a7.07 7.07 0 01-6.734-4.855L1.24 14.705C3.198 18.655 7.27 21.355 12 21.355c2.973 0 5.81-.982 7.973-2.773l-3.932-3.237z" />
                                        <path fill="#4285F4" d="M23.49 12.275c0-.755-.073-1.545-.218-2.309H12v4.51h6.464a5.53 5.53 0 01-2.423 3.632l3.932 3.236c2.3-.2 4.482-2.155 4.482-5.345c0-.12-.018-.24-.018-.36l.564-.364z" />
                                        <path fill="#34A853" d="M5.266 11.59A7.04 7.04 0 015 12c0 .273.027.537.064.8l-4.027 3.11c-.673-1.228-1.037-2.61-1.037-4.11c0-1.427.327-2.782.918-3.982l4.348 3.772z" />
                                    </svg>
                                    Sign In with Google
                                </Button>
                            </div>

                        </Form>
        </div>
    );
};

export default SigninForm;