'use client';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';

export const CommentItem = ({ comment, currentUserId, setComments }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(comment.commentText);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Function to update comment
    const handleUpdate = async () => {
        // Empty input validation
        if (!editedText.trim()) return;
        setIsSubmitting(true);

        // Getting Token
        const { data: tokenData } = await authClient.token();

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${comment._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify({ commentText: editedText })
        });

        const data = await response.json();
        // console.log(data);

        if (data?.modifiedCount > 0) {
            toast.success("Comment updated successfully!");
            // Add updated comment to existing comment list
            setComments(prev => prev.map(updated_comment => updated_comment._id === comment._id ? { ...updated_comment, commentText: editedText } : updated_comment));
            setIsEditing(false);
            setIsSubmitting(false);
        } else {
            toast.error("Failed to update comment");
            setIsSubmitting(false);
        }
    };

    // Function to delete comment
    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this comment?")) return;

        // Getting Token
        const { data: tokenData } = await authClient.token();
            
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${comment._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${tokenData?.token}`
            }
        });
        const data = await response.json();
        // console.log(data);

        if (data?.deletedCount > 0) {
            toast.success("Comment deleted successfully!");
            // Remove updated comment to existing comment list
            setComments(prev => prev.filter(deleted_comment => deleted_comment._id !== comment._id));
        } else {
            toast.error("Failed to delete comment");
        }
    };

    return (
        <div className="p-5 bg-base-200/30 border border-base-200 rounded-2xl space-y-2 transition-all hover:bg-base-200/50 relative group/item">
            <div className="flex items-center justify-between">
                <div>
                    <span className="text-sm font-bold text-[#082a5e] dark:text-white block">{comment.userName}</span>
                    <span className="text-[10px] text-base-content/40 font-medium">
                        {new Date(comment.createdAt).toLocaleString()}
                    </span>
                </div>

                {/* Edit and Delete Button for session user */}
                {comment.userId === currentUserId && !isEditing && (
                    <div className="flex items-center gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                        <button onClick={() => setIsEditing(true)} className="text-xs text-info hover:underline font-semibold">
                            Edit
                        </button>
                        <span className="text-base-content/20 text-xs">•</span>
                        <button onClick={handleDelete} className="text-xs text-error hover:underline font-semibold">
                            Delete
                        </button>
                    </div>
                )}
            </div>

            {/* Comment Text */}
            {!isEditing ? (
                <p className="text-sm text-base-content/80 leading-relaxed">
                    {comment.commentText}
                </p>
            ) : (
                <div className="space-y-2 mt-2">
                    <textarea
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        rows={2}
                        className="w-full bg-base-100 border border-base-300 focus:border-[#082a5e] focus:outline-hidden rounded-xl p-3 text-sm text-base-content transition-all resize-none shadow-xs"
                    />
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={() => { setIsEditing(false); setEditedText(comment.commentText); }}
                            className="px-3 py-1.5 text-xs font-semibold text-base-content/50 hover:bg-base-200 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleUpdate}
                            disabled={isSubmitting}
                            className="px-3 py-1.5 text-xs font-bold bg-[#082a5e] text-white rounded-lg hover:bg-[#051c40] shadow-xs transition-colors disabled:opacity-50"
                        >
                            {isSubmitting ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};