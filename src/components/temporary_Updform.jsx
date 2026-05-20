import { Form, TextField, Label, Input, Select, TextArea, Modal, Button } from '@heroui/react';
import React from 'react';

const temporary_Updform = () => {
    return (
        <div>
            <Form onSubmit={onSubmit} className="flex flex-col gap-4">
                                {/* Section 1: Basic Identity */}
                                <div className="border-b border-base-200 pb-2">
                                    <h3 className="text-sm font-bold text-[#082a5e] uppercase tracking-wider">01. Core Identity</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <TextField name="title" className="w-full" type="text">
                                        <Label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block">Idea Title</Label>
                                            <Input defaultValue={title}
                                                placeholder="Enter your title" className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] rounded-xl px-4 h-11 text-sm transition-all" />
                                    </TextField>
                                    <div className="flex flex-col">
                                        <label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block">Category</label>
                                        <Select
                                                name="category"
                                                defaultValue={category} className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl px-4 h-11 text-sm text-base-content/80 transition-all cursor-pointer"
                                        >
                                            <option value="Tech">Tech / SaaS</option>
                                            <option value="AI">Artificial Intelligence</option>
                                            <option value="Health">HealthTech</option>
                                            <option value="Education">EdTech</option>
                                            <option value="Fintech">FinTech</option>
                                            <option value="PetCare">Pet Care</option>
                                        </Select>
                                    </div>
                                </div>
                                
                                <TextField isRequired name="shortDescription">
                                    <Label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block">Short Description</Label>
                                        <Input placeholder="Sum up your startup in one punchy sentence" defaultValue={shortDescription} className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] rounded-xl px-4 h-11 text-sm transition-all" />
                                </TextField>
                                    
                                <div className="flex flex-col">
                                    <label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block">Detailed Narrative</label>
                                        <TextArea required name="detailedDescription" defaultValue={detailedDescription} placeholder="Explain the full blueprint of your startup concept, architecture and operations..." rows={4} className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl p-4 text-sm text-base-content/80 transition-all resize-none"/>
                                </div>

                                {/* Section 2: Deep Context & Analytics */}
                                <div className="border-b border-base-200 pb-2 pt-4">
                                    <h3 className="text-sm font-bold text-[#082a5e] uppercase tracking-wider">02. Strategic Blueprint</h3>
                                </div>
                                    
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col">
                                        <label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block">Problem Statement</label>
                                            <TextArea required name="problemStatement" defaultValue={problemStatement} placeholder="What pain point is your target market experiencing?" rows={3} className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl p-4 text-sm transition-all resize-none"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block">Proposed Solution</label>
                                            <TextArea required name="proposedSolution"
                                                defaultValue={proposedSolution} placeholder="How exactly does your concept dynamically resolve this?" rows={3} className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl p-4 text-sm transition-all resize-none" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <TextField isRequired name="targetAudience">
                                        <Label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block">Target Audience</Label>
                                            <Input defaultValue={targetAudience} placeholder="e.g., Content Creators, Small Business Owners" className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] rounded-xl px-4 h-11 text-sm transition-all" />
                                    </TextField>

                                        <TextField name="estimatedBudget">
                                        <Label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block">Estimated Budget <span className="text-base-content/30 font-normal">(Optional)</span></Label>
                                            <Input defaultValue={estimatedBudget} placeholder="e.g., $5,000 - $10,000" className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] rounded-xl px-4 h-11 text-sm transition-all" />
                                    </TextField>
                                </div>
                                
                                {/* Section 3: Metadata & Assets */}
                                <div className="border-b border-base-200 pb-4 pt-4">
                                    <h3 className="text-sm font-bold text-[#082a5e] uppercase tracking-wider">03. Assets & Discovery</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <TextField name="imageURL" isRequired>
                                        <Label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block">Image URL</Label>
                                            <Input placeholder="Unsplash or vector art image link" defaultValue={imageURL} className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] rounded-xl px-4 h-11 text-sm transition-all" />
                                    </TextField>

                                    <TextField name="tags">
                                        <Label className="text-xs font-bold uppercase text-[#082a5e]/80 mb-1.5 block">Tags <span className="text-base-content/30 font-normal">(Optional)</span></Label>
                                            <Input defaultValue={tags?.join(", ")} placeholder="e.g., saas, automation, eco" className="w-full bg-base-200/50 border border-base-200 focus:border-[#082a5e] rounded-xl px-4 h-11 text-sm transition-all" />
                                    </TextField>
                                </div>
                                <Modal.Footer className="p-6 pt-0 flex gap-2">
                                    <Button slot="close" variant="secondary" className="flex-1 rounded-xl h-11 text-xs font-bold">
                                        Cancel
                                    </Button>
                                    <Button type="submit" slot="close" className="flex-1 rounded-xl h-11 text-xs font-bold bg-[#082a5e] hover:bg-[#062047] text-white">
                                        Save Changes
                                    </Button>
                                </Modal.Footer> 
                                </Form>
        </div>
    );
};

export default temporary_Updform;