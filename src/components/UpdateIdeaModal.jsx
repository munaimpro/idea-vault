'use client';
import React from 'react';
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const UpdateIdeaModal = ({ idea }) => {
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
                            <Modal.Icon className="bg-[#082a5e]/10 text-[#082a5e]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </Modal.Icon>
                            <Modal.Heading className="text-xl font-bold text-base-content mt-3">Update Your Idea</Modal.Heading>
                            <p className="mt-1.5 text-xs leading-relaxed text-base-content/60">
                                Make changes to your innovation details below. The system automatically preserves version history.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6 pt-2">
                            <Surface variant="default" className="border-0 p-0 bg-transparent">
                                <form className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label className="text-xs font-semibold text-base-content/70 mb-1">Name</Label>
                                        <Input className="rounded-xl" placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="email" type="email">
                                        <Label className="text-xs font-semibold text-base-content/70 mb-1">Email</Label>
                                        <Input className="rounded-xl" placeholder="Enter your email" />
                                    </TextField>
                                    <TextField className="w-full" name="phone" type="tel">
                                        <Label className="text-xs font-semibold text-base-content/70 mb-1">Phone</Label>
                                        <Input className="rounded-xl" placeholder="Enter your phone number" />
                                    </TextField>
                                    <TextField className="w-full" name="company">
                                        <Label className="text-xs font-semibold text-base-content/70 mb-1">Company</Label>
                                        <Input className="rounded-xl" placeholder="Enter your company name" />
                                    </TextField>
                                    <TextField className="w-full" name="message">
                                        <Label className="text-xs font-semibold text-base-content/70 mb-1">Message</Label>
                                        <Input className="rounded-xl" placeholder="Enter your message" />
                                    </TextField>
                                </form>
                            </Surface>
                        </Modal.Body>

                        <Modal.Footer className="p-6 pt-0 flex gap-2">
                            <Button slot="close" variant="secondary" className="flex-1 rounded-xl h-11 text-xs font-bold">
                                Cancel
                            </Button>
                            <Button slot="close" className="flex-1 rounded-xl h-11 text-xs font-bold bg-[#082a5e] hover:bg-[#062047] text-white">
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateIdeaModal;