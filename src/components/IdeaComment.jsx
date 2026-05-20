'use client';
import { Button, Form, TextArea } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { CommentItem } from './CommentItem'; // চাইল্ড ফাইলটি ইমপোর্ট করে নিন

const IdeaComment = ({ comments, currentUserId, currentUserName, ideaId }) => {

    // State to render new comment in the UI
    const [existingComments, setComments] = useState(comments);

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);
        const commentData = Object.fromEntries(formData.entries());

        const { data: tokenData } = await authClient.token();

        const finalCommentData = {
            ...commentData,
            ideaId: ideaId,
            userId: currentUserId,
            userName: currentUserName,
            createdAt: new Date().toISOString(),
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(finalCommentData)
        });

        const data = await response.json();

        if (data?.insertedId) {
            toast.success("Your commented successfully!");
            form.reset();

            setComments(prev => [
                {
                    ...finalCommentData,
                    _id: data.insertedId,
                    createdAt: new Date().toISOString()
                },
                ...prev
            ]);
        }
    };

    return (
        <div className="pt-8 border-t border-base-200 space-y-6">
            {/* Comment Box Header */}
            <h3 className="text-xl font-extrabold text-[#082a5e] tracking-tight flex items-center gap-2">
                Discussion Engine
                <span className="text-xs bg-base-200 px-2.5 py-0.5 rounded-full text-base-content/60 font-semibold">
                    {existingComments.length}
                </span>
            </h3>

            {/* Comment Form */}
            <Form onSubmit={onSubmit} className="flex gap-3 items-start">
                <div className="grow">
                    <TextArea name="commentText" placeholder="Contribute technical feedback or funding interest..." rows={2} className="w-full bg-base-200/60 hover:bg-base-200 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl p-4 text-sm text-base-content transition-all resize-none shadow-inner"
                    />
                </div>
                <Button type="submit" className="bg-[#082a5e] hover:bg-[#051c40] text-white font-bold h-12 px-6 rounded-xl text-xs shadow-md transition-all">
                    Broadcast
                </Button>
            </Form>

            {/* Available Comments */}
            <div className="space-y-4 pt-2">
                {existingComments.map((comment) => (
                    <CommentItem
                        key={comment._id}
                        comment={comment}
                        currentUserId={currentUserId}
                        setComments={setComments} // স্টেট আপডেট করার জন্য মেথড পাস করা হল
                    />
                ))}
            </div>
        </div>
    );
};

export default IdeaComment;