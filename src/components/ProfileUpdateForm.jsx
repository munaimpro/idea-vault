'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Input, Label, TextField, Form } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const metadata = {
    title: "Update Profile | IdeaVault"
}

const ProfileUpdateForm = () => {

    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const user = Object.fromEntries(formData.entries());

        try {
            const { data, error } = await authClient.updateUser({
                name: user.name,
                image: user.image,
            });

            if (data) {
                toast.success("Profile updated successfully!");
                router.push('/profile');
            }

            if (error) {
                toast.error(error.message || "Failed to update profile");
            }
        } catch (err) {
            console.error(err);
            toast.error("An unexpected error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
             <Form onSubmit={onSubmit} className="flex flex-col gap-6">

                        {/* Name Input */}
                        <TextField isRequired name="name" type="text" className="w-full">
                            <Label className="text-xs font-bold uppercase tracking-wide text-[#082a5e]/80 mb-1.5 dark:text-white block">
                                Name
                            </Label>
                            <Input
                                placeholder="Enter your system visibility name"
                                className="w-full bg-base-200/40 hover:bg-base-200/70 border border-base-200 focus:border-[#082a5e] rounded-xl transition-all h-11 px-4 text-sm"
                            />
                            <FieldError className="text-xs text-error mt-1" />
                        </TextField>

                        {/* Image URL */}
                        <TextField isRequired name="image" type="url" className="w-full">
                            <Label className="text-xs font-bold uppercase tracking-wide text-[#082a5e]/80 mb-1.5 dark:text-white block">
                                Image URL
                            </Label>
                            <Input
                                placeholder="https://domain.com/your-avatar.webp"
                                className="w-full bg-base-200/40 hover:bg-base-200/70 border border-base-200 focus:border-[#082a5e] rounded-xl transition-all h-11 px-4 text-sm"
                            />
                            <Description className="text-[11px] text-base-content/40 leading-normal mt-1.5 block">
                                Provide a secure, scalable endpoint URL to update your profile image asset.
                            </Description>
                            <FieldError className="text-xs text-error mt-1" />
                        </TextField>

                        {/* Actions Control Panel */}
                        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-4 w-full border-t border-base-200 mt-2">
                            <Button onClick={() => router.push('/profile')}
                                type="button" className="w-full sm:w-auto px-6 border border-base-200 bg-base-100 hover:bg-base-200 text-base-content/80 font-bold h-11 rounded-xl transition-all duration-200 text-xs">Cancel</Button>
                            <Button
                                isLoading={isSubmitting}
                                className="w-full sm:w-auto px-8 bg-[#082a5e] hover:bg-[#051c40] text-white font-bold h-11 rounded-xl transition-all duration-200 text-xs"
                                type="submit"
                            >
                                Save Changes
                            </Button>
                        </div>

                    </Form>
        </div>
    );
};

export default ProfileUpdateForm;