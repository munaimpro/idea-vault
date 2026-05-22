'use client';
import React from 'react';
import { Button, Input, Label, Modal, Surface, TextField, Select, ListBox } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const UpdateIdeaModal = ({ idea }) => {
    
    // console.log(idea);
    const { _id, title, category, targetAudience, problemStatement, proposedSolution, shortDescription, detailedDescription, imageURL, estimatedBudget, tags } = idea;

    const router = useRouter();

    // Idea update mechanism
    const onSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        const formData = new FormData(event.currentTarget);
        const ideaData = Object.fromEntries(formData.entries());

        const { data: tokenData } = await authClient.token();
        // console.log(tokenData);

        const finalIdeaData = {
            ...ideaData,
            updatedAt: new Date().toISOString(),
            estimatedBudget: Number(ideaData.estimatedBudget || 0),
            tags: ideaData.tags
                ? ideaData.tags.split(',').map(tag => tag.trim()) : []
        }
        // console.log(finalIdeaData);

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/update-idea/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(finalIdeaData)
        });

        const data = await response.json();
        // console.log(data);

        if (data?.modifiedCount > 0) {
            toast.success("Your startup idea changed successfully!");

            // Reset form
            form.reset();

            // Refresh route
            router.refresh();

        }
    };

    return (
        <Modal>
            {/* Edit Button */}
            <Button
                variant="secondary"
                className="min-w-8 w-8 h-8 rounded-lg p-0 bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/20 shadow-xs transition-all duration-200"
                title="Edit Idea"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md rounded-3xl border border-base-200 lg:max-w-5xl">
                        <Modal.CloseTrigger />
                        <Modal.Header className="pt-6 px-6">
                            <div className="flex items-center gap-2">
                                <Modal.Icon className="bg-[#082a5e]/10 text-[#082a5e]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                </Modal.Icon>
                                <Modal.Heading className="text-xl font-bold text-base-content">Update Your Idea</Modal.Heading>
                            </div>
                            <p className="mt-1.5 text-xs leading-relaxed text-base-content/60">
                                Make changes to your innovation details below. The system automatically preserves version history.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6 pt-2">
                            <Surface variant="default" className="border-0 p-0 bg-transparent">
                                {/* Update form */}
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    {/* Title */}
                                    <TextField defaultValue={title} className="w-full" name="title" type="text" variant="secondary">
                                        <Label>Title</Label>
                                        <Input placeholder="Enter your title" />
                                    </TextField>

                                    {/* Short Description */}
                                    <TextField name="shortDescription" defaultValue={shortDescription} className="w-full" type="text" variant="secondary">
                                        <Label>Short Description</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>
                                    
                                    {/* Detail Description */}
                                    <TextField defaultValue={detailedDescription} className="w-full" name="detailedDescription" type="text" variant="secondary">
                                        <Label>Detailed Description</Label>
                                        <Input placeholder="Enter your detail descripttion" />
                                    </TextField>

                                    {/* Budget */}
                                    <TextField defaultValue={estimatedBudget} className="w-full" name="estimatedBudget" variant="secondary">
                                        <Label>Budget</Label>
                                        <Input placeholder="Enter your budget" />
                                    </TextField>
                                    
                                    {/* Tags */}
                                    <TextField defaultValue={tags?.join(", ")} className="w-full" name="tags" variant="secondary">
                                        <Label>Tags</Label>
                                        <Input placeholder="Enter your tags" />
                                    </TextField>

                                    {/* Category */}
                                    <Select defaultValue={category} name="category" isRequired className="w-full" placeholder="Select category">
                                        <Label>Category</Label>                                <Select.Trigger className="rounded-2xl"><Select.Value /><Select.Indicator /></Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="Health" textValue="Health">HealthTech<ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                            <ListBox>
                                                <ListBox.Item id="Education" textValue="Education">EduTech<ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                            <ListBox>
                                                <ListBox.Item id="Fintech" textValue="Fintech">FinTech<ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                            <ListBox>
                                                <ListBox.Item id="PetCare" textValue="PetCare">Pet Care<ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>

                                    {/* Problem Statement */}
                                    <TextField defaultValue={problemStatement} className="w-full" name="problemStatement" variant="secondary">
                                        <Label>Problem Statement</Label>
                                        <Input placeholder="Enter your statement" />
                                    </TextField>

                                    {/* Proposed Solution */}
                                    <TextField defaultValue={proposedSolution} className="w-full" name="proposedSolution" variant="secondary">
                                        <Label>Proposed solution</Label>
                                        <Input placeholder="Enter your solution" />
                                    </TextField>

                                    {/* Image URL */}
                                    <TextField defaultValue={imageURL} className="w-full" name="imageURL" variant="secondary">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Enter your image URL" />
                                    </TextField>

                                    {/* Target Audience */}
                                    <TextField defaultValue={targetAudience} className="w-full" name="targetAudience" variant="secondary">
                                        <Label>Target Audience</Label>
                                        <Input placeholder="Enter your target Audience" />
                                    </TextField>

                                    <Modal.Footer className="p-6 pt-0 flex gap-2">
                                        <Button slot="close" variant="secondary" className="flex-1 rounded-xl h-11 text-xs font-bold">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close" className="flex-1 rounded-xl h-11 text-xs font-bold bg-[#082a5e] hover:bg-[#062047] text-white">
                                            Save Changes
                                        </Button>
                                    </Modal.Footer> 
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateIdeaModal;