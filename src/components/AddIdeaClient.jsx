'use client'
import React, { useState } from 'react';
import { Button, Card, Input, Label, TextField, Form } from '@heroui/react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

const AddIdeaClient = () => {
    
    // Live Preview Tracker State
    const [previewData, setPreviewData] = useState({
        title: '',
        shortDescription: '',
        category: 'Tech',
        imageUrl: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setPreviewData(prev => ({ ...prev, [name]: value }));
    };

    const { data: session } = authClient.useSession()
    const user = session?.user

    const onSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        const formData = new FormData(event.currentTarget);
        const ideaData = Object.fromEntries(formData.entries());

        const { data: tokenData } = await authClient.token();
        console.log(tokenData);

        const finalIdeaData = {
            ...ideaData,
            userId: user?.id,
            userName: user?.name,
            createdAt: new Date().toISOString(),
            likes: 0,
            estimatedBudget: Number(ideaData.estimatedBudget || 0),
            tags: ideaData.tags
                ? ideaData.tags.split(',').map(tag => tag.trim()) : []
        }
        console.log(finalIdeaData);

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(finalIdeaData)
        });

        const data = await response.json();
        console.log(data);

        if (data?.insertedId) {
            toast.success("Your startup idea has been cataloged successfully!");

            // Reset form
            form.reset();

            // Reset preview state
            setPreviewData({
                title: '',
                shortDescription: '',
                category: 'Tech',
                imageUrl: ''
            });
        }
    };

    return (
        <div className="min-h-screen bg-base-100 px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative overflow-hidden">

            {/* Soft Ambient Background Blur */}
            <div className="absolute top-10 right-5 w-96 h-96 bg-[#082a5e]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-5 w-80 h-80 bg-[#1e4ebd]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* LEFT SIDE: Preview Card */}
                <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                    <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#082a5e] dark:text-white">
                            Live Sandbox
                        </span>
                        <h2 className="text-2xl font-black text-[#082a5e] dark:text-white tracking-tight">
                            Forge Your Vision
                        </h2>
                        <p className="text-xs text-base-content/60 leading-relaxed">
                            Watch how your venture concept will appear to potential co-founders, investors, and the global ecosystem.
                        </p>
                    </div>

                    {/* Showcase Card */}
                    <div className="bg-base-100 border border-base-200 shadow-xl shadow-base-200/50 rounded-3xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
                        <div className="h-44 bg-linear-to-br from-[#082a5e]/10 to-[#1e4ebd]/10 relative flex items-center justify-center overflow-hidden">
                            {previewData.imageUrl ? (
                                <Image src={previewData.imageUrl} alt="Preview Cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => e.target.style.display = 'none'} width={100} height={100} />
                            ) : (
                                <span className="text-4xl">Image Preview</span>
                            )}
                            <span className="absolute top-3 right-3 bg-[#082a5e] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {previewData.category || "Tech"}
                            </span>
                        </div>
                        <div className="p-6 space-y-3">
                            <h3 className="text-lg font-bold text-[#082a5e] dark:text-white line-clamp-1">
                                {previewData.title || "Untitled Disruptive Idea"}
                            </h3>
                            <p className="text-xs text-base-content/60 line-clamp-2 min-h-8">
                                {previewData.shortDescription || "A brilliant placeholder description detailing the core premise of your next big breakthrough ecosystem."}
                            </p>
                            <div className="pt-2 border-t border-base-100 flex items-center justify-between text-[11px] font-semibold text-base-content/40">
                                <span>Status: Pitch Draft</span>
                                <span>Just Now</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Add Idea Form */}
                <div className="lg:col-span-8 bg-base-100/60 backdrop-blur-xl border border-base-200 p-6 sm:p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
                    <Form onSubmit={onSubmit} className="space-y-6">

                        {/* Section 1: Basic Identity */}
                        <div className="border-b border-base-200 pb-4">
                            <h3 className="text-sm font-bold text-[#082a5e] dark:text-white uppercase tracking-wider">01. Core Identity</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <TextField isRequired name="title" className="w-full">
                                <Label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block dark:text-white">Idea Title</Label>
                                <Input placeholder="e.g., MediaVault AI Pro" onChange={handleInputChange} name="title" className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] rounded-xl px-4 h-11 text-sm transition-all" />
                            </TextField>

                            <div className="flex flex-col">
                                <label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block dark:text-white">Category</label>
                                <select
                                    name="category"
                                    onChange={handleInputChange}
                                    className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl px-4 h-11 text-sm text-base-content/80 transition-all cursor-pointer"
                                >
                                    <option value="Tech">Tech / SaaS</option>
                                    <option value="AI">Artificial Intelligence</option>
                                    <option value="Health">HealthTech</option>
                                    <option value="Education">EdTech</option>
                                    <option value="Fintech">FinTech</option>
                                </select>
                            </div>
                        </div>

                        <TextField isRequired name="shortDescription">
                            <Label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block dark:text-white">Short Description</Label>
                            <Input placeholder="Sum up your startup in one punchy sentence" onChange={handleInputChange} name="shortDescription" className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] rounded-xl px-4 h-11 text-sm transition-all" />
                        </TextField>

                        <div className="flex flex-col">
                            <label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block dark:text-white">Detailed Narrative</label>
                            <textarea
                                required
                                name="detailedDescription"
                                placeholder="Explain the full blueprint of your startup concept, architecture and operations..."
                                rows={4}
                                className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl p-4 text-sm text-base-content/80 transition-all resize-none"
                            />
                        </div>

                        {/* Section 2: Deep Context & Analytics */}
                        <div className="border-b border-base-200 pb-4 pt-4">
                            <h3 className="text-sm font-bold text-[#082a5e] uppercase tracking-wider dark:text-white">02. Strategic Blueprint</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col">
                                <label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block dark:text-white">Problem Statement</label>
                                <textarea
                                    required
                                    name="problemStatement"
                                    placeholder="What pain point is your target market experiencing?"
                                    rows={3}
                                    className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl p-4 text-sm transition-all resize-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block dark:text-white">Proposed Solution</label>
                                <textarea
                                    required
                                    name="proposedSolution"
                                    placeholder="How exactly does your concept dynamically resolve this?"
                                    rows={3}
                                    className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl p-4 text-sm transition-all resize-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <TextField isRequired name="targetAudience">
                                <Label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block dark:text-white">Target Audience</Label>
                                <Input placeholder="e.g., Content Creators, Small Business Owners" className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] rounded-xl px-4 h-11 text-sm transition-all" />
                            </TextField>

                            <TextField name="estimatedBudget">
                                <Label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 dark:text-white block">Estimated Budget <span className="text-base-content/30 font-normal">(Optional)</span></Label>
                                <Input placeholder="e.g., $5,000 - $10,000" className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] rounded-xl px-4 h-11 text-sm transition-all" />
                            </TextField>
                        </div>

                        {/* Section 3: Metadata & Assets */}
                        <div className="border-b border-base-200 pb-4 pt-4">
                            <h3 className="text-sm font-bold text-[#082a5e] uppercase tracking-wider dark:text-white">03. Assets & Discovery</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <TextField isRequired name="imageUrl">
                                <Label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 dark:text-white block">Image URL</Label>
                                <Input placeholder="Unsplash or vector art image link" onChange={handleInputChange} name="imageUrl" className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] rounded-xl px-4 h-11 text-sm transition-all" />
                            </TextField>

                            <TextField name="tags">
                                <Label className="text-xs font-bold uppercase text-[#082a5e]/80 dark:text-white mb-1.5 block">Tags <span className="text-base-content/30 font-normal">(Optional)</span></Label>
                                <Input placeholder="e.g., saas, automation, eco" className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] rounded-xl px-4 h-11 text-sm transition-all" />
                            </TextField>
                        </div>

                        {/* Submission Button */}
                        <div className="pt-4">
                            <Button
                                type="submit"
                                className="w-full bg-[#082a5e] hover:bg-[#051c40] text-white font-bold h-12 rounded-xl shadow-lg shadow-[#082a5e]/15 transition-all duration-300 text-sm flex items-center justify-center gap-2 hover:scale-[1.01]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Launch Concept to Hub
                            </Button>
                        </div>

                    </Form>
                </div>

            </div>
        </div>
    );
};

export default AddIdeaClient;